<?php

namespace App\Controller;

use App\IGDB\Models\FilterGame;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FilterGameController extends AbstractController
{
    private $filter;
    private $security;

    public function __construct(FilterGame $filter, Security $security,)
    {
        $this->filter = $filter;
        $this->security = $security;
    }

    #[Route('/filter', name: 'filter', methods: ["GET", "POST"])]
    public function index(Request $request): Response
    {
        // Récupérez l'utilisateur connecté
        $user = $this->security->getUser();

        if ($user) {
            // Récupérez des ID des jeux de l'utilisateur
            $userGames = $user->getCollection();
            $collection = $userGames->getGames();
            $collectionIds = array_map(function ($game) {
                return $game['id'];
            }, $collection);
        
            // Récupérez les ID des jeux que l'utilisateur aime
            $likes = $user->getLikes();
        
            // Récupérez les ID des jeux que l'utilisateur souhaite
            $wishes = $user->getWish();
        } else {
            // Définissez des valeurs par défaut pour les variables relatives à l'utilisateur
            $collectionIds = [];
            $likes = [];
            $wishes = [];
        }

        // Gestion de la requête AJAX pour le filtre
        $data = $request->isMethod('POST') ? json_decode($request->getContent(), true) : null;
        $games = $this->filter->filter($data);

        if ($request->isXmlHttpRequest()) {
            return $this->render('filter/_filter_games.html.twig', [
                'games' => $games,
                'collectionIds' => $collectionIds,
                'likeIds' => $likes,
                'wishIds' => $wishes
            ]);
        } else {
            return $this->render('filter/filter.html.twig', [
                'games' => $games,
                'collectionIds' => $collectionIds,
                'likeIds' => $likes,
                'wishIds' => $wishes
            ]);
        }
    }
}