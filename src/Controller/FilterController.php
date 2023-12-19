<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FilterController extends AbstractController
{
    private $igdbService;

    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    #[Route('/filter', name: 'filter', methods: ["GET", "POST"])]
    public function index(Request $request): Response
    {
        $data = $request->isMethod('POST') ? json_decode($request->getContent(), true) : null;
        $games = $this->igdbService->filterGames($data);

        if ($request->isXmlHttpRequest()) {
            return $this->render('filter/_filter_games.html.twig', [
                'games' => $games,
            ]);
        } else {
            return $this->render('filter/filter.html.twig', [
                'games' => $games,
            ]);
        }
    }
}
