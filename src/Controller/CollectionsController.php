<?php

namespace App\Controller;

use App\Entity\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CollectionsController extends AbstractController
{
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
