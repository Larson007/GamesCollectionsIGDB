<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GamePopularController extends AbstractController
{
    private $igdbService;

    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    #[Route('/popular', name: 'popular_games', methods: ['GET', 'POST'])]
    public function lastPopularGames(Request $request): Response
    {
        $buttonId = $request->isMethod('POST') ? $request->request->get('buttonId') : null;
        $games = $this->igdbService->getRecentPopularGames($buttonId);

        if ($request->isXmlHttpRequest()) {
            return $this->render('game/popular/_last_popular_games_platforms.html.twig', [
                'games' => $games,
            ]);
        } else {
            return $this->render('game/popular/last_popular_games.html.twig', [
                'games' => $games,
            ]);
        }
    }
}
