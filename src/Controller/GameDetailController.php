<?php

namespace App\Controller;


use App\Entity\Game;
use App\Entity\User;
use App\Entity\Collection;
use App\Service\IgdbService;
use App\Repository\UserRepository;
use App\Repository\FriendRepository;
use App\Repository\CollectionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class GameDetailController extends AbstractController
{
    private $igdbService;


    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    #[Route('/game/{id}', name: 'game')]
    public function show(int $id, CollectionRepository $collectionRepository): Response
    {
        $user = $this->getUser();

        $collections = null;
        if ($user !== null) {
            // Recuperer la collection de l'utilisateur en fonction de la clé etrangère data de l'utilisateur
            $collections = $collectionRepository->findOneBy(['id' => $user->getCollection()]);
        }

        // Si l'utilisateur n'est pas connecté ou n'a pas de collection, initialiser une collection vide
        if ($collections === null) {
            $collections = new Collection();
        }

        // Stocker dans un tableau collection games, achieved et platined
        $collections = [
            'games' => $collections->getGames(),
        ];

        // Get the game from the IGDB API by its ID
        $game = $this->igdbService->getGameById($id);
        // dump($game);

        return $this->render('game/show.html.twig', [
            'game' => $game,
            'collections' => $collections,
        ]);
    }

    #[Route('/add-to-collection', name: 'add_to_collection', methods: ['POST'])]
    public function addToCollection(Request $request, EntityManagerInterface $entityManager)
    {
        $gameId = $request->request->get('gameId');
        $user = $this->getUser(); // get the currently logged in user

        // Check if the user is logged in
        if (!$user) {
            return new JsonResponse(['error' => 'not-logged-in'], 403);
        }

        // if $user->getData() is null
        if ($user->getCollection() === null) {
            // create a new collection
            $collection = new Collection();
            // set the user as the owner of the collection
            $collection->setGames([['id' => $gameId, 'achieved' => false, 'platined' => false]]);
            // set the collection as the user's collection
            $user->setCollection($collection);
            
        } else {
            // get the existing collection
            $collection = $user->getCollection();
            // get the existing games in the collection
            $games = $collection->getGames();
            // check if the game is already in the collection
            if (!in_array($gameId, array_column($games, 'id'))) {
                // add the game to the collection
                $games[] = ['id' => $gameId, 'achieved' => false, 'platined' => false];
                $collection->setGames($games);
            }
        }

        // persist the collection and the user
        $entityManager->persist($collection);
        $entityManager->persist($user);
        // flush the changes
        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }



    #[Route('/remove-from-collection', name: 'remove_from_collection', methods: ['POST'])]
    public function removeFromCollection(Request $request, EntityManagerInterface $entityManager)
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
        unset($games[$index]);
        $collection->setGames($games);

        // persist the collection and the user
        $entityManager->persist($collection);
        $entityManager->persist($user);
        // flush the changes
        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }

    #[Route('/achieved', name: 'achieved', methods: ['POST'])]
    public function achieved(Request $request, EntityManagerInterface $entityManager)
    {
        $gameId = $request->request->get('gameId');
        $user = $this->getUser(); // get the currently logged in user

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
        $entityManager->persist($collection);
        $entityManager->persist($user);
        // flush the changes
        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }

    #[Route('/unachieved', name: 'unachieved', methods: ['POST'])]
    public function unachieved(Request $request, EntityManagerInterface $entityManager)
    {
        $gameId = $request->request->get('gameId');
        $user = $this->getUser(); // get the currently logged in user

        // get the existing collection
        $collection = $user->getCollection();
        // get the existing games in the collection
        $games = $collection->getGames();
        // get the index of the game in the collection
        $index = array_search($gameId, array_column($games, 'id'));
        // update the game's achieved status
        $games[$index]['achieved'] = false;
        $collection->setGames($games);


        // persist the collection and the user
        $entityManager->persist($collection);
        $entityManager->persist($user);
        // flush the changes
        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }

    #[Route('/platined', name: 'platined', methods: ['POST'])]
    public function platined(Request $request, EntityManagerInterface $entityManager)
    {
        $gameId = $request->request->get('gameId');
        $user = $this->getUser(); // get the currently logged in user

        // get the existing collection
        $collection = $user->getCollection();
        // get the existing games in the collection
        $games = $collection->getGames();
        // get the index of the game in the collection
        $index = array_search($gameId, array_column($games, 'id'));
        // update the game's achieved status
        $games[$index]['platined'] = true;
        $collection->setGames($games);

        // persist the collection and the user
        $entityManager->persist($collection);
        $entityManager->persist($user);
        // flush the changes
        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }

    #[Route('/unplatined', name: 'unplatined', methods: ['POST'])]
    public function unplatined(Request $request, EntityManagerInterface $entityManager)
    {
        $gameId = $request->request->get('gameId');
        $user = $this->getUser(); // get the currently logged in user

        // get the existing collection
        $collection = $user->getCollection();
        // get the existing games in the collection
        $games = $collection->getGames();
        // get the index of the game in the collection
        $index = array_search($gameId, array_column($games, 'id'));
        // update the game's achieved status
        $games[$index]['platined'] = false;
        $collection->setGames($games);

        // persist the collection and the user
        $entityManager->persist($collection);
        $entityManager->persist($user);
        // flush the changes
        $entityManager->flush();

        return new JsonResponse(['success' => true]);
    }
}
