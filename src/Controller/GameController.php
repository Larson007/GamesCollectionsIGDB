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

        $collection = $this->game->gameCollection($id);
        $collectionGame = false; // Initialiser la variable à false
        // Vérifier si 'franchises' existe dans $collection et si le premier élément contient 'games'
        if (isset($collection['collection']['games']) && count($collection['collection']['games']) > 0) {
            $collectionGame = true; // Si game.franchises[0] contient des jeux, définir la variable à true
        }

        $medias = $this->game->gameMedias($id);

        $franchises = $this->game->gameFranchises($id);
        $franchisesGame = false; // Initialiser la variable à false



        if (isset($franchises['franchises'])) {
            foreach ($franchises['franchises'] as $franchise) {
                if (isset($franchise['games']) && count($franchise['games']) > 0) {
                    $franchisesGame = true; // Si game.franchises[0] contient des jeux, définir la variable à true
                }
            }
        }


        return $this->render('game/game.html.twig', [
            'game' => $game,
            'collection' => $collection,
            'collectionGame' => $collectionGame,
            'medias' => $medias,
            'franchises' => $franchises,
            'franchisesGame' => $franchisesGame,
        ]);
    }
}
