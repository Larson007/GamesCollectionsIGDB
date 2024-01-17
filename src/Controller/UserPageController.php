<?php

namespace App\Controller;

use Imagine\Image\Box;
use Imagine\Gd\Imagine;
use App\Entity\UserUpdate;
use App\Form\UserUpdateType;
use App\Service\IgdbService;
use App\Entity\PasswordUpdate;
use Imagine\Image\ImageInterface;
use App\Form\PasswordUpdateFormType;
use App\IGDB\Models\UserGame;
use Symfony\Component\Form\FormError;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class UserPageController extends AbstractController
{
    private $userGame;
    private $entityManager;
    private $params;
    private $passwordEncoder;

    public function __construct(UserGame $userGame, EntityManagerInterface $entityManager, ParameterBagInterface $params, UserPasswordHasherInterface $passwordEncoder)
    {
        $this->userGame = $userGame;
        $this->entityManager = $entityManager;
        $this->params = $params;
        $this->passwordEncoder = $passwordEncoder;
    }

    // Page de profil de l'utilisateur
    #[Route('/user/dashboard', name: 'app_user_dashboard')]
    public function dashboard(Request $request): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        // get connected user
        $user = $this->getUser();

        // Récuperer la liste des amis de l'utilisateur connecté
        $friends = $user->getFriends();
        // Compter le nombre d'amis
        $friends = count($friends);

        // Récuprer la liste des jeux de l'utilisateur connecté
        $collection = $user->getCollection();

        if ($collection) {
            $collection = $collection->getGames();
            $result = [
                'nbCollection' => count($collection),
                'nbPlatines' => 0,
                'nbAchieved' => 0
            ];

            foreach ($collection as $game) {
                if ($game['platined']) {
                    $result['nbPlatines']++;
                }
                if ($game['achieved']) {
                    $result['nbAchieved']++;
                }
            }
        } else {
            $result = [
                'nbCollection' => 0,
                'nbPlatines' => 0,
                'nbAchieved' => 0
            ];
        }

        //Formulaire de modification de l'utilisateur
        $form = $this->createForm(UserUpdateType::class, $user, [
            'current_user' => $user,
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $avatarFile = $form['avatar']->getData();
            if ($avatarFile) {
                $originalFilename = pathinfo($avatarFile->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $avatarFile->guessExtension();

                try {
                    $avatarFile->move(
                        $this->params->get('avatars_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                    $this->addFlash('error', 'Il y a eu un problème lors du téléchargement du fichier : ' . $e->getMessage());
                }

                // Open the file to resize it
                $filepath = $this->params->get('avatars_directory') . '/' . $newFilename;
                $imagine = new Imagine();
                $image = $imagine->open($filepath);

                // Resize the image while maintaining aspect ratio
                $image->thumbnail(new Box(200, 200), ImageInterface::THUMBNAIL_INSET)
                    ->save($filepath);

                // updates the 'avatar' property to store the file name
                // instead of its contents
                $user->setAvatar($newFilename);
            }
            try {
                // Save the user to the database
                $this->entityManager->persist($user);
                $this->entityManager->flush();

                // Add a success flash message
                $this->addFlash('success', 'Les modifications ont été enregistrées avec succès.');
            } catch (\Exception $e) {
                $this->addFlash('error', 'Une erreur est survenue lors de l\'enregistrement des modifications : ' . $e->getMessage());
            }
        }

        // Formulaire de modification du mot de passe
        $passwordUpdate = new PasswordUpdate();
        $formPassword = $this->createForm(PasswordUpdateFormType::class, $passwordUpdate);

        $formPassword->handleRequest($request);

        if ($formPassword->isSubmitted() && $formPassword->isValid()) {
            // check if old password is correct
            if (!password_verify($passwordUpdate->getOldPassword(), $user->getPassword())) {
                $formPassword->get('oldPassword')->addError(new FormError('The old password is incorrect'));
                $this->addFlash('error', 'The old password is incorrect');
            } else {
                $newPassword = $passwordUpdate->getNewPassword();
                $confirmPassword = $passwordUpdate->getConfirmPassword();

                if ($newPassword !== $confirmPassword) {
                    $formPassword->get('confirmPassword')->addError(new FormError('The passwords are not identical'));
                    $this->addFlash('error', 'The passwords are not identical');
                } else {
                    $user->setPassword($this->passwordEncoder->hashPassword($user, $newPassword));
                    // Save the user to the database
                    try {
                        $this->entityManager->persist($user);
                        $this->entityManager->flush();

                        $this->addFlash('success', 'Mot de passe mis à jour avec succès');
                    } catch (\Exception $e) {
                        $this->addFlash('error', 'Une erreur est survenue lors de la mise à jour du mot de passe : ' . $e->getMessage());
                    }
                }
            }
        }

        return $this->render('user/dashboard.html.twig', [
            'controller_name' => 'UserPageController',
            'user' => $user,
            'form' => $form->createView(),
            'formPassword' => $formPassword->createView(),
            'friends' => $friends,
            'collection' => $result
        ]);
    }

    
    // Page de collection de l'utilisateur
    // #[Route('/user/collection', name: 'app_user_collection')]
    // public function userCollection(): Response
    // {
    //     // recuperer l'utilisateur connecté
    //     $user = $this->getUser();

    //     // recuprer les id de chaque jeux dans la collection de l'utilisateur au format : 12457, 45741, 14567
    //     $collection = $user->getCollection();

    //     $collection = $collection->getGames();

    //     if (!empty($collection)) {
    //         $gameIds = array_map(function ($game) {
    //             return $game['id'];
    //         }, $collection);

    //         $gameIdsString = join(',', $gameIds); // Convertit le tableau en une chaîne de caractères

    //         // Recupérer les infos de chaque jeux dans la collection de l'utilisateur
    //         $gameStatus = array_map(function ($game) {
    //             return [
    //                 'id' => $game['id'],
    //                 'achieved' => $game['achieved'],
    //                 'platined' => $game['platined']
    //             ];
    //         }, $collection);

    //         $games = $this->userGame->userCollection($gameIdsString);

    //         foreach ($games as &$game) {
    //             foreach ($gameStatus as $status) {
    //                 if ($game['id'] == $status['id']) {
    //                     $game['gameStatus'] = $status;
    //                     break;
    //                 }
    //             }
    //         }
    //         return $this->render('user/collection.html.twig', [
    //             'controller_name' => 'UserPageController',
    //             'games' => $games,
    //         ]);
    //     } else {
    //         return $this->render('user/collection.html.twig', [
    //             'controller_name' => 'UserPageController',
    //             'games' => [],
    //             'gameStatus' => []
    //         ]);
    //     }
    // }
}
