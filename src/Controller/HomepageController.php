<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomepageController extends AbstractController
{
    private $igdbService;

    public function __construct(IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    #[Route('/', name: 'homepage')]
    public function index(): Response
    {
        $games = $this->igdbService->homepage();

        return $this->render('homepage/index.html.twig', [
            'games' => $games,
        ]);
    }

    // #[Route('/get-data/{type}', name: 'get_data')]
    // public function getData(string $type): Response
    // {
    //     // Lire le fichier JSON
    //     $json = file_get_contents('path/to/your/json/file.json');

    //     // Convertir le JSON en tableau
    //     $data = json_decode($json, true);

    //     // Renvoyer les données correspondant au type demandé
    //     return new JsonResponse($data[$type] ?? []);
    // }
}



