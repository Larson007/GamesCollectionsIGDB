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

    #[Route('/', name: 'homepage')]
    #[Route('/dynamiqueSearch', name: 'dynamiqueSearch', methods:"POST")]
    public function index(Request $request): Response
    {
        if ($request->isMethod('POST')) {
            # code...        // Récupérer toutes les données POST
        $data = $request->request->all();

        // Convertir les chaînes JSON en objets PHP
        foreach ($data as $key => $value) {
            $data[$key] = json_decode($value, true);
        }

        // Passer les données à la méthode dynamiqueSearch de IGDBService
        $dynamiqueGames = $this->igdbService->dynamiqueSearch($data);
        }
        else {
            $dynamiqueGames = null;
        }


        $games = $this->igdbService->homepage();

        return $this->render('homepage/index.html.twig', [
            'games' => $games,
            'dynamiqueGames' => $dynamiqueGames
        ]);
    }


    // #[Route('/dynamiqueSearch', name: 'dynamiqueSearch', methods:"POST")]
    // public function dynamiqueSearch(Request $request, IGDBService $igdbService)
    // {
    //     // Récupérer toutes les données POST
    //     $data = $request->request->all();

    //     // Convertir les chaînes JSON en objets PHP
    //     foreach ($data as $key => $value) {
    //         $data[$key] = json_decode($value, true);
    //     }

    //     // Passer les données à la méthode dynamiqueSearch de IGDBService
    //     $dynamiqueGames = $igdbService->dynamiqueSearch($data);

    //     // Renvoyer les jeux dynamiques en tant que réponse JSON
    //     return new JsonResponse($dynamiqueGames);
    // }
}
