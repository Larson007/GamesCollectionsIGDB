<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GameNewController extends AbstractController
{
    private $igdbService;

    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }
    
    #[Route('/newgames', name: 'app_newgames')]
    public function index(): Response
    {

        $games = $this->igdbService->getGamesReleasedThisMonth();


        return $this->render('game/new_games.html.twig', [
            'controller_name' => 'GameNewController',
            'games' => $games,
        ]);
    }
}
