<?php

namespace App\Controller;

use App\IGDB\Models\PopularGame;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PopularGameController extends AbstractController
{

    private $popularGame;
    private $security;


    public function __construct(PopularGame $popularGame , Security $security)
    {
        $this->popularGame = $popularGame;
        $this->security = $security;

    }

    #[Route('/popular', name: 'popular_games', methods: ['GET', 'POST'])]
    public function lastPopularGames(Request $request): Response
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

        // Récuperation de la date d'il y a 3 mois
        $threeMonthsAgo = strtotime(date('Y-m-d', strtotime('-3 months')));
        $formattedDate = date('d-m-Y', $threeMonthsAgo);

        $platform = $request->isMethod('POST') ? $request->request->get('buttonId') : null;
        $games = $this->popularGame->popularGame($platform);

        if ($request->isXmlHttpRequest()) {
            return $this->render('game/popular/_last_popular_games_platforms.html.twig', [
                'games' => $games,
                'collectionIds' => $collectionIds,
                'likeIds' => $likes,
                'wishIds' => $wishes
            ]);
        } else {
            return $this->render('game/popular/last_popular_games.html.twig', [
                'games' => $games,
                'date' => $formattedDate,
                'collectionIds' => $collectionIds,
                'likeIds' => $likes,
                'wishIds' => $wishes
            ]);
        }
    }
}
