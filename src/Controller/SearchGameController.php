<?php

namespace App\Controller;

use App\IGDB\Models\SearchGame;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SearchGameController extends AbstractController
{
    private $searchGame;
    private $security;


    public function __construct(SearchGame $searchGame, Security $security)
    {
        $this->searchGame = $searchGame;
        $this->security = $security;

    }

    #[Route('/search', name: 'search')]
    public function search(Request $request): Response
    {
        $query = $request->request->get('q');

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

        $games = $this->searchGame->searchGames($query);
    
        return $this->render('game/search_games.html.twig', [
            'controller_name' => 'GameNewController',
            'games' => $games,
            'query' => $query,
            'collectionIds' => $collectionIds,
            'likeIds' => $likes,
            'wishIds' => $wishes
        ]);
    }
}