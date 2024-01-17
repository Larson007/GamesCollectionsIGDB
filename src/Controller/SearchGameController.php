<?php

namespace App\Controller;

use App\IGDB\Models\SearchGame;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SearchGameController extends AbstractController
{
    private $searchGame;

    public function __construct(SearchGame $searchGame)
    {
        $this->searchGame = $searchGame;
    }

    #[Route('/search', name: 'search')]
    public function search(Request $request): Response
    {
        $query = $request->request->get('q');
        $games = $this->searchGame->searchGames($query);
    
        return $this->render('game/search_games.html.twig', [
            'controller_name' => 'GameNewController',
            'games' => $games,
            'query' => $query
        ]);
    }
}