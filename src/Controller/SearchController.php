<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SearchController extends AbstractController
{
    private $igdbService;

    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    #[Route('/search', name: 'search')]
    public function search(Request $request): Response
    {
        $query = $request->request->get('q');
        $games = $this->igdbService->searchGames($query);
    
        return $this->render('game/search_games.html.twig', [
            'controller_name' => 'GameNewController',
            'games' => $games,
        ]);
    }

    
}
