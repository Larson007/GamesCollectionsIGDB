<?php

namespace App\Controller;


use App\IGDB\Models\NewGame;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class NewGameController extends AbstractController {
    private $newGame;

    public function __construct(NewGame $newGame)
    {
        $this->newGame = $newGame;
    }

    #[Route('/newgames', name: 'app_newgames')]
    public function index(): Response
    {

        $games = $this->newGame->newGame();


        return $this->render('game/new_games.html.twig', [
            'controller_name' => 'GameNewController',
            'games' => $games,
        ]);
    }
}