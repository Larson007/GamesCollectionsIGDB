<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TestAPiController extends AbstractController
{
    private $igdbService;

    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    #[Route('/test', name: 'test')]
    public function index(): Response
    {

        $games = $this->igdbService->getGamesWithOffset();
        // $platforms  = $this->igdbService->platforms();
        // $genres = $this->igdbService->genres();
        // $themes = $this->igdbService->themes();
        // $modes = $this->igdbService->gameModes();

        
        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestAPiController',
            // 'platforms' => $platforms,
            // 'genres' => $genres,
            // 'themes' => $themes,
            // 'modes' => $modes,
            'games' => $games,


        ]);
    }
    #[Route('/cover', name: 'cover')]
    public function cover(): Response
    {

        $games = $this->igdbService->test();
        // $platforms  = $this->igdbService->platforms();
        // $genres = $this->igdbService->genres();
        // $themes = $this->igdbService->themes();
        // $modes = $this->igdbService->gameModes();

        
        return $this->render('test/cover.html.twig', [
            'games' => $games,


        ]);
    }
    #[Route('/pagination/{page}', name: 'pagination', requirements: ['page' => '\d+'])]
    public function pagination(int $page = 1): Response
    {
        $games = $this->igdbService->pagination($page);

        return $this->render('test/pagination.html.twig', [
            'games' => $games,
            'page' => $page,
        ]);
    }
}
