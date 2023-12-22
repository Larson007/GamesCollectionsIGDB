<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\IgdbService;
use App\Form\SearchUsersType;
use App\IGDB\Models\UserGame;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FriendsPageController extends AbstractController
{
    private $userGame;
    private $entityManager;

    public function __construct(UserGame $userGame, EntityManagerInterface $entityManager)
    {
        $this->userGame = $userGame;
        $this->entityManager = $entityManager;
    }
    
    // Show the friends page
    #[Route('/friends', name: 'app_friends')]
    public function friends(Request $request, UserRepository $userRepository): Response
    {
        // recuperer l'utilisateur connecté
        $user = $this->getUser();

        // appeler le formulaire de recherche d'utilisateur
        $form = $this->createForm(SearchUsersType::class);

        // handle the request
        $form->handleRequest($request);

        $users = [];

        if ($form->isSubmitted() && $form->isValid()) {
            $searchTerm = $form->get('pseudo')->getData();
            $users = $userRepository->findByPseudo($searchTerm);
        }

        // Get the currently logged in user
        $currentUser = $this->getUser();

        if (!$currentUser instanceof User) {
            throw $this->createNotFoundException('User not found');
        }

        // Get the list of friends of the currently logged in user
        $friends = $currentUser->getFriends();

        $friendsData = [];

        foreach ($friends as $friendId) {
            $friend = $this->entityManager->getRepository(User::class)->find($friendId);
            $collection = [];

            // On vérifie que l'utilisateur récupéré existe bien et qu'il a une collection
            if ($friend !== null) {
                $collectionObject = $friend->getCollection();
                if ($collectionObject !== null && $collectionObject->getGames() !== null) {
                    $collection = $collectionObject->getGames();
                }

                $friendsData[] = [
                    'id' => $friend->getId(),
                    'pseudo' => $friend->getPseudo(),
                    'avatar' => $friend->getAvatar(),
                    'collection' => $collection
                ];
            }
        }

        return $this->render('friends/friends.html.twig', [
            'controller_name' => 'UserPageController',
            'form' => $form->createView(),
            'users' => $users,
            'friends' => $friends,
            'friendsData' => $friendsData
        ]);
    }

    // Add a friend
    #[Route('/friends/add-friend/{id}', name: 'app_friends_add')]
    public function addFriend(int $id)
    {
        // 1. On recupere l'utilisateur connecté
        $currentUser = $this->getUser();

        // 2. On recupere l'utilisateur dont l'id est passé en parametre
        $userToAdd = $this->entityManager->getRepository(User::class)->find($id);

        // Vérifier si l'utilisateur à ajouter existe
        if (!$userToAdd) {
            // throw $this->createNotFoundException('L\'utilisateur n\'existe pas');
            $this->addFlash('error', 'L\'utilisateur n\'existe pas');
            return $this->redirectToRoute('app_friends');
        }

        // Vérifier si l'utilisateur n'essaie pas de s'ajouter lui-même
        if ($currentUser->getId() === $userToAdd->getId()) {
            // throw new \Exception('Vous ne pouvez pas vous ajouter vous-même');
            $this->addFlash('error', 'Vous ne pouvez pas vous ajouter vous-même');
            return $this->redirectToRoute('app_friends');
        }

        // Vérifier si l'utilisateur est déjà un ami
        if (in_array($userToAdd->getId(), $currentUser->getFriends())) {
            // throw new \Exception('Cet utilisateur est déjà votre ami');
            $this->addFlash('error', 'Cet utilisateur est déjà votre ami');
            return $this->redirectToRoute('app_friends');
        }

        // 3. On ajoute l'id de l'utilisateur dont l'id est passé en parametre dans le tableau friends de l'utilisateur connecté
        $friends = $currentUser->getFriends();
        $friends[] = $userToAdd->getId();
        $currentUser->setFriends($friends);

        // 4. On sauvegarde le tableau friends dans la base de données
        $entityManager = $this->entityManager;
        $entityManager->persist($currentUser);
        $entityManager->flush();

        // 5. On redirige vers la page des amis et envoi un message via toastr
        $this->addFlash('success', 'Vous avez ajouté un ami');
        return $this->redirectToRoute('app_friends');
    }

    // Remove a friend
    #[Route('/friends/remove-friend/{id}', name: 'app_friends_remove')]
    public function removeFriend(int $id): Response
    {
        // 1. On recupere l'utilisateur connecté
        $currentUser = $this->getUser();

        // 2. On recupere l'utilisateur dont l'id est passé en parametre
        $userToRemove = $this->entityManager->getRepository(User::class)->find($id);

        // Vérifier si l'utilisateur à supprimer existe
        if (!$userToRemove) {
            // throw $this->createNotFoundException('L\'utilisateur n\'existe pas');
            $this->addFlash('error', 'L\'utilisateur n\'existe pas');
            return $this->redirectToRoute('app_friends');
        }

        // Vérifier si l'utilisateur n'essaie pas de supprimer lui-même
        if ($currentUser->getId() === $userToRemove->getId()) {
            // throw new \Exception('Vous ne pouvez pas vous supprimer vous-même');
            $this->addFlash('error', 'Vous ne pouvez pas vous supprimer vous-même');
            return $this->redirectToRoute('app_friends');
        }

        // Vérifier si l'utilisateur est déjà un ami
        if (!in_array($userToRemove->getId(), $currentUser->getFriends())) {
            // throw new \Exception('Cet utilisateur n\'est pas votre ami');
            $this->addFlash('error', 'Cet utilisateur n\'est pas votre ami');
            return $this->redirectToRoute('app_friends');
        }

        // 3. On supprime l'id de l'utilisateur dont l'id est passé en parametre dans le tableau friends de l'utilisateur connecté
        $friends = $currentUser->getFriends();
        $friends = array_diff($friends, [$userToRemove->getId()]);
        $currentUser->setFriends($friends);

        // 4. On sauvegarde le tableau friends dans la base de données
        $entityManager = $this->entityManager;
        $entityManager->persist($currentUser);
        $entityManager->flush();

        // 5. On redirige vers la page des amis + affichage d'un message via toastr
        $this->addFlash('success', 'Vous avez supprimé un ami');
        return $this->redirectToRoute('app_friends');
    }

    // Show the friend's collection
    #[Route('/friends/friend-collection/{id}', name: 'app_friends_collection')]
    public function friendCollection(int $id, Request $request): Response
    {
        // recuperation de l'utilisateur via l'id passer en parametre
        $user = $this->entityManager->getRepository(User::class)->find($id);

        // recuperation du pseudo de l'utilisateur
        $pseudo = $user->getPseudo();

        // recuprer les id de chaque jeux dans la collection de l'utilisateur au format : 12457, 45741, 14567
        $collectionObject = $user->getCollection();

        if ($collectionObject !== null) {
            $collection = $collectionObject->getGames();
        } else {
            $collection = [];
        }

        if (!empty($collection)) {

            $gameIds = array_map(function ($game) {
                return $game['id'];
            }, $collection);

            $gameIdsString = join(',', $gameIds); // Convertit le tableau en une chaîne de caractères

            // Recupérer les infos de chaque jeux dans la collection de l'utilisateur
            $gameStatus = array_map(function ($game) {
                return [
                    'id' => $game['id'],
                    'achieved' => $game['achieved'],
                    'platined' => $game['platined']
                ];
            }, $collection);


            $games = $this->userGame->userCollection($gameIdsString);


            return $this->render('friends/friendCollection.html.twig', [
                'controller_name' => 'UserPageController',
                'games' => $games,
                'gameStatus' => $gameStatus,
                'pseudo' => $pseudo
            ]);
        } else {
            return $this->render('friends/friendCollection.html.twig', [
                'controller_name' => 'UserPageController',
                'games' => [],
                'gameStatus' => [],
                'pseudo' => $pseudo
            ]);
        }
    }
}
