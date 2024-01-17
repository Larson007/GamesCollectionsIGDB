<?php

namespace App\Controller;


use App\IGDB\Models\NewGame;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class NewGameController extends AbstractController
{
    private $newGame;
    private $security;

    public function __construct(NewGame $newGame, Security $security)
    {
        $this->newGame = $newGame;
        $this->security = $security;
    }

    #[Route('/newgames', name: 'app_newgames')]
    public function index(): Response
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
        } else {
            // Définissez des valeurs par défaut pour les variables relatives à l'utilisateur
            $collectionIds = [];
            $likes = [];
            $wishes = [];
        }

        $games = $this->newGame->newGame();


        return $this->render('game/new_games.html.twig', [
            'controller_name' => 'GameNewController',
            'games' => $games,
            'collectionIds' => $collectionIds,
            'likeIds' => $likes,
            'wishIds' => $wishes
        ]);
    }
}
