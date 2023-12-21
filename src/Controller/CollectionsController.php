<?php

namespace App\Controller;

use App\Entity\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CollectionsController extends AbstractController
{

    private $security;
    private $entityManager;

    public function __construct(Security $security,  EntityManagerInterface $entityManager)
    {
        $this->security = $security;
        $this->entityManager = $entityManager;
    }

    #[Route('/add-collection', name: 'add-collection', methods: ['POST'])]
    public function addToCollection(Request $request)
    {
        $gameId = $request->request->get('gameId');

        $user = $this->security->getUser();

        $collection = $user->getCollection();

        if (!$collection) {
            $collection = new Collection();
            $collection->setGames([$gameId => ['id' => $gameId, 'achieved' => false, 'platined' => false]]);
            $user->setCollection($collection);
        } else {
            $games = $collection->getGames();
            if (!in_array($gameId, array_column($games, 'id'))) {
                $games[] = ['id' => $gameId, 'achieved' => false, 'platined' => false];
                $collection->setGames($games);
            }
        }

        // Persistez la collection et retouner la reponse en json
        $this->entityManager->persist($collection);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return new JsonResponse(['success' => true]);
    }

    #[Route('/remove-collection', name: 'remove-collection', methods: ['POST'])]
    public function removeFromCollection(Request $request)
    {
        $gameId = $request->request->get('gameId');
        $user = $this->getUser(); // get the currently logged in user

        // get the existing collection
        $collection = $user->getCollection();
        // get the existing games in the collection
        $games = $collection->getGames();
        // get the index of the game in the collection
        $index = array_search($gameId, array_column($games, 'id'));
        // remove the game from the collection
        if ($index !== false) {
            unset($games[$index]);
            // reindex the array
            $games = array_values($games);
            $collection->setGames($games);
        }

        // persist the collection and the user
        $this->entityManager->persist($collection);
        $this->entityManager->persist($user);
        // flush the changes
        $this->entityManager->flush();

        return new JsonResponse(['success' => true]);
    }


    #[Route('/add-like', name: 'add-like', methods: ['POST'])]
    public function addLike(Request $request): Response
    {
        $gameId = $request->request->get('gameId');

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // Récupérez la liste des likes de l'utilisateur
        $likes = $user->getLikes();

        // Si likes est null, initialisez-le à un tableau vide
        if ($likes === null) {
            $likes = [];
        }

        // Vérifiez si l'id du jeu est déjà dans la liste des likes
        if (!in_array($gameId, $likes)) {
            // Ajoutez l'id du jeu à la liste des likes
            $likes[] = $gameId;

            // Mettez à jour la liste des likes de l'utilisateur
            $user->setLikes($likes);

            // Persistez l'utilisateur
            $this->entityManager->persist($user);

            // Flush les changements
            $this->entityManager->flush();
        }

        return new JsonResponse(['success' => true]);
    }

    #[Route('/remove-like', name: 'remove-like', methods: ['POST'])]
    public function removeLike(Request $request): Response
    {
        $gameId = $request->request->get('gameId');

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // Récupérez la liste des likes de l'utilisateur
        $likes = $user->getLikes();

        // Trouvez l'index du jeu dans la liste des likes
        $index = array_search($gameId, $likes);

        // Si le jeu est dans la liste des likes, le supprimer
        if ($index !== false) {
            unset($likes[$index]);

            // Réindexez le tableau pour éviter les trous
            $likes = array_values($likes);

            // Mettez à jour la liste des likes de l'utilisateur
            $user->setLikes($likes);

            // Persistez l'utilisateur
            $this->entityManager->persist($user);

            // Flush les changements
            $this->entityManager->flush();
        }

        return new JsonResponse(['success' => true]);
    }

    #[Route('/add-wish', name: 'add-wish', methods: ['POST'])]
    public function addWish(Request $request): Response
    {
        $gameId = $request->request->get('gameId');

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // Récupérez la liste des souhaits de l'utilisateur
        $wishes = $user->getWish();

        // Si wishes est null, initialisez-le à un tableau vide
        if ($wishes === null) {
            $wishes = [];
        }

        // Vérifiez si l'id du jeu est déjà dans la liste des souhaits
        if (!in_array($gameId, $wishes)) {
            // Ajoutez l'id du jeu à la liste des souhaits
            $wishes[] = $gameId;

            // Mettez à jour la liste des souhaits de l'utilisateur
            $user->setWish($wishes);

            // Persistez l'utilisateur
            $this->entityManager->persist($user);

            // Flush les changements
            $this->entityManager->flush();
        }

        return new JsonResponse(['success' => true]);
    }

    #[Route('/remove-wish', name: 'remove-wish', methods: ['POST'])]
    public function removeWish(Request $request): Response
    {
        $gameId = $request->request->get('gameId');

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // Récupérez la liste des souhaits de l'utilisateur
        $wishes = $user->getWish();

        // Trouvez l'index du jeu dans la liste des souhaits
        $index = array_search($gameId, $wishes);

        // Si le jeu est dans la liste des souhaits, le supprimer
        if ($index !== false) {
            unset($wishes[$index]);

            // Réindexez le tableau pour éviter les trous
            $wishes = array_values($wishes);

            // Mettez à jour la liste des souhaits de l'utilisateur
            $user->setWish($wishes);

            // Persistez l'utilisateur
            $this->entityManager->persist($user);

            // Flush les changements
            $this->entityManager->flush();
        }

        return new JsonResponse(['success' => true]);
    }

    #[Route('/add-achieved', name: 'add-achieved', methods: ['POST'])]
    public function achieved(Request $request)
    {
        // Récupérez l'ID du jeu
        $gameId = $request->request->get('gameId');

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // get the existing collection
        $collection = $user->getCollection();

        // get the existing games in the collection
        $games = $collection->getGames();

        // get the index of the game in the collection
        $index = array_search($gameId, array_column($games, 'id'));
        // update the game's achieved status
        $games[$index]['achieved'] = true;
        $collection->setGames($games);

        // persist the collection and the user
        $this->entityManager->persist($collection);
        $this->entityManager->persist($user);
        // flush the changes
        $this->entityManager->flush();

        return new JsonResponse(['success' => true]);
    }

    #[Route('/remove-achieved', name: 'remove-achieved', methods: ['POST'])]
    public function unachieved(Request $request)
    {
        $gameId = $request->request->get('gameId');

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // get the existing collection
        $collection = $user->getCollection();
        // get the existing games in the collection
        $games = $collection->getGames();
        // check if the game is in the collection
        if (isset($games[$gameId])) {
            // update the game's achieved status
            $games[$gameId]['achieved'] = false;
            $collection->setGames($games);

            // persist the collection and the user
            $this->entityManager->persist($collection);
            $this->entityManager->persist($user);
            // flush the changes
            $this->entityManager->flush();
        }

        return new JsonResponse(['success' => true]);
    }

    #[Route('/add-platined', name: 'add-platined', methods: ['POST'])]
    public function platined(Request $request)
    {
        $gameId = $request->request->get('gameId');

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // get the existing collection
        $collection = $user->getCollection();
        // get the existing games in the collection
        $games = $collection->getGames();
        // check if the game is in the collection
        if (isset($games[$gameId])) {
            // update the game's platined status
            $games[$gameId]['platined'] = true;
            $collection->setGames($games);

            // persist the collection and the user
            $this->entityManager->persist($collection);
            $this->entityManager->persist($user);
            // flush the changes
            $this->entityManager->flush();
        }

        return new JsonResponse(['success' => true]);
    }

    #[Route('/remove-platined', name: 'remove-platined', methods: ['POST'])]
    public function unplatined(Request $request)
    {
        $gameId = $request->request->get('gameId');

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // get the existing collection
        $collection = $user->getCollection();
        // get the existing games in the collection
        $games = $collection->getGames();
        // check if the game is in the collection
        if (isset($games[$gameId])) {
            // update the game's platined status
            $games[$gameId]['platined'] = false;
            $collection->setGames($games);

            // persist the collection and the user
            $this->entityManager->persist($collection);
            $this->entityManager->persist($user);
            // flush the changes
            $this->entityManager->flush();
        }

        return new JsonResponse(['success' => true]);
    }
}
