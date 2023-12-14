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

    #[Route('/', name: 'homepage', methods: "GET")]
    public function index(Request $request): Response
    {
        

        // // Récupérer les données JSON
        // $data = json_decode($request->getContent(), true);

        // $yearMax = $data['released']['min'];
        // $dateMax = $yearMax . "-12-31 00:00:00";
        // $releasedMax = strtotime($dateMax);

        // if (empty($data)) {
            // $games = $this->igdbService->homepage();
        // } else {
            // $games = $this->igdbService->dynamiqueSearch($data);
        // }


        return $this->render('homepage/index.html.twig', [
            // 'games' => $games
        ]);
    }

    #[Route('/dynamiqueSearch', name: 'dynamiqueSearch', methods: "POST")]
    public function dynamic(Request $request): Response
    {
        // Récupérer les données JSON
        $data = json_decode($request->getContent(), true);

        // dump(strtotime($data['released']['min']));
        // dump(strtotime($data['released']['max']));
        // dump($data['released']['min']);
        // dump($data['released']['max']);
        // dump($data['rating']['min']);
        // dump($data['rating']['max']);

        // if (!empty($data['released']['min'])) {
        //     dump("released min");
        // } else (dump("released min empty"));



        if (empty($data)) {
            $games = $this->igdbService->homepage();
        } else {
            $games = $this->igdbService->dynamiqueSearch($data);
        }

        // Renvoyer une réponse JSON
        return new JsonResponse($games);

    }

}
