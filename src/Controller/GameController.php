<?php

namespace App\Controller;

use App\IGDB\Models\Game;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GameController extends AbstractController
{
    private $game;

    public function __construct(Game $game)
    {
        $this->game = $game;
    }

    #[Route('/game/{id}', name: 'game')]
    public function index(int $id): Response
    {

        // Get the game from the IGDB API by its ID
        $game = $this->game->game($id);
        // dump($game);

        return $this->render('game/show.html.twig', [
            'game' => $game
        ]);
    }

}