<?php

namespace App\Controller;

use App\IGDB\Models\PopularGame;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PopularGameController extends AbstractController {

    private $popularGame;

    public function __construct(PopularGame $popularGame)
    {
        $this->popularGame = $popularGame;
    }

    #[Route('/popular', name: 'popular_games', methods: ['GET', 'POST'])]
    public function lastPopularGames(Request $request): Response
    {

        // Récuperation de la date d'il y a 3 mois
        $threeMonthsAgo = strtotime(date('Y-m-d', strtotime('-3 months')));
        $formattedDate = date('d-m-Y', $threeMonthsAgo);

        $platform = $request->isMethod('POST') ? $request->request->get('buttonId') : null;
        $games = $this->popularGame->popularGame($platform);

        if ($request->isXmlHttpRequest()) {
            return $this->render('game/popular/_last_popular_games_platforms.html.twig', [
                'games' => $games,
            ]);
        } else {
            return $this->render('game/popular/last_popular_games.html.twig', [
                'games' => $games,
                'date' => $formattedDate,
            ]);
        }
    }
}

