<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GamePopularController extends AbstractController
{
    private $igdbService;

    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }
    
    #[Route('/popular', name: 'popular_games')]
    public function lastPopularGames(): Response
    {
        $games = $this->igdbService->getRecentPopularGames();
        //dump($games);

        return $this->render('game/last_popular_games.html.twig', [
            'games' => $games,
        ]);
    }
}
