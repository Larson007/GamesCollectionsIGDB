<?php

namespace App\Controller;

use App\IGDB\Models\NewGame;
use App\IGDB\Models\UserGame;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
    #[Route('/user/collection', name: 'app_user_collection')]
    public function userCollection(): Response
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



        // $games = $this->newGame->newGame();

        return $this->render('user/collection.html.twig', [
            'controller_name' => 'UserGamesController',
            'games' => $games,
            'collectionIds' => $collectionIds,
            'likeIds' => $likes,
            'wishIds' => $wishes
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
