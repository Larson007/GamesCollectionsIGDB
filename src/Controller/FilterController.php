<?php

namespace App\Controller;

use App\Service\IgdbService;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FilterController extends AbstractController
{
    private $igdbService;
    private $security;

    public function __construct(Security $security, IgdbService $igdbService)
    {
        $this->igdbService = $igdbService;
        $this->security = $security;
    }

    #[Route('/filter', name: 'filter', methods: ["GET", "POST"])]
    public function index(Request $request): Response
    {
        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        // Récupérez des ID des jeux de l'utilisateur
        $userGames = $user->getCollection();
        $collection = $userGames->getGames();
        $collectionIds = array_map(function($game) {
            return $game['id'];
        }, $collection);


        // Gestion de la requête AJAX pour le filtre
        $data = $request->isMethod('POST') ? json_decode($request->getContent(), true) : null;
        $games = $this->igdbService->filterGames($data);

        if ($request->isXmlHttpRequest()) {
            return $this->render('filter/_filter_games.html.twig', [
                'games' => $games,
            ]);
        } else {
            return $this->render('filter/filter.html.twig', [
                'games' => $games,
                'collectionIds' => $collectionIds,
                'collection' => $collection,

            ]);
        }
    }
}
