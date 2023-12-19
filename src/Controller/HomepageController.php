<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class HomepageController extends AbstractController
{
    private $igdbService;

    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    #[Route('/', name: 'homepage', methods: ["GET", "POST"])]
    public function index(Request $request): Response
    {
        $data = $request->isMethod('POST') ? json_decode($request->getContent(), true) : null;
        $games = $this->igdbService->dynamiqueSearch($data);

        if ($request->isXmlHttpRequest()) {
            return $this->render('homepage/_homepage_games.html.twig', [
                'games' => $games,
            ]);
        } else {
            return $this->render('homepage/homepage.html.twig', [
                'games' => $games,
            ]);
        }
    }

        // #[Route('/', name: 'homepage', methods: "GET")]
    // public function index(Request $request): Response
    // {

    //     $games = $this->igdbService->homepage();

    //     return $this->render('homepage/homepage.html.twig', [
    //         'games' => $games
    //     ]);
    // }

    // #[Route('/dynamiqueSearch', name: 'dynamiqueSearch', methods: "POST")]
    // public function dynamic(Request $request): Response
    // {
    //     // Récupérer les données JSON
    //     $data = json_decode($request->getContent(), true);

    //     $games = $this->igdbService->dynamiqueSearch($data);

    //     // Renvoyer une réponse JSON
    //     return new JsonResponse($games);
    // }
}
