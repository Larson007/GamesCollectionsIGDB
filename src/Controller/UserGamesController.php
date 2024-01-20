<?php

namespace App\Controller;

use App\IGDB\Models\NewGame;
use App\IGDB\Models\UserGame;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class UserGamesController extends AbstractController
{
    private $userGame;
    private $newGame;
    private $security;


    public function __construct(UserGame $userGame, Security $security, NewGame $newGame)
    {
        $this->userGame = $userGame;
        $this->newGame = $newGame;
        $this->security = $security;
    }

    // Page de collection de l'utilisateur
    #[Route('/user/collection', name: 'app_user_collection', methods: ['GET', 'POST'])]
    public function userCollection(Request $request): Response
    {

        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        if ($user) {
            // Récupérez des ID des jeux de l'utilisateur
            $userGames = $user->getCollection();
            $collection = $userGames->getGames();
            $collectionIds = array_map(function ($game) {
                return $game['id'];
            }, $collection);

            // Récupérez les ID des jeux que l'utilisateur aime
            $likes = $user->getLikes();

            // Récupérez les ID des jeux que l'utilisateur souhaite
            $wishes = $user->getWish();

            $collectionIds = !empty($collectionIds) ? $collectionIds : [];
            $likes = !empty($likes) ? $likes : [];
            $wishes = !empty($wishes) ? $wishes : [];

            $userGamesId = array_unique(array_merge($collectionIds, $likes, $wishes));

            $userGamesId =  implode(',', $userGamesId);



            if (!empty($userGamesId)) {
                $games = $this->userGame->userCollection($userGamesId);
            } else {
                $games = [];
            }
        } else {
            // Définissez des valeurs par défaut pour les variables relatives à l'utilisateur
            $games = [];
            $collectionIds = [];
            $likes = [];
            $wishes = [];
        }

        if ($request->isMethod('POST')) {
            $data = json_decode($request->getContent(), true);

            // Maintenant, vous pouvez accéder aux données avec $data['filterType'] et $data['data']
            $filterType = $data['filterType'];
            $userGamesFilter = $data['data'];

            // Faites quelque chose avec $filterType et $userGamesFilter

            $games = $this->userGame->userCollection($userGamesFilter);

        }


        if ($request->isXmlHttpRequest()) {

        return $this->render('user/games/_collection_games.html.twig', [
            'controller_name' => 'UserGamesController',
            'games' => $games,
            'collectionIds' => $collectionIds,
            'likeIds' => $likes,
            'wishIds' => $wishes,
        ]);
    } else {
        return $this->render('user/games/collection.html.twig', [
            'controller_name' => 'UserGamesController',
            'games' => $games,
            'collectionIds' => $collectionIds,
            'likeIds' => $likes,
            'wishIds' => $wishes,
        ]);
    }
    }
}
