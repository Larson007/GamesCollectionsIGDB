<?php

namespace App\Controller;

use App\Service\IgdbService;
use App\IGDB\Models\Homepage;
use App\IGDB\Models\LastTestedGames;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomepageController extends AbstractController
{
    private $homepage;
    private $security;

    public function __construct(Homepage $homepage, Security $security)
    {
        $this->homepage = $homepage;
        $this->security = $security;
    }

    #[Route('/', name: 'homepage', methods: ["GET", "POST"])]
    public function index(): Response
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

        $lastTestedGames = $this->homepage->lastTestedGames();
        $hypesGames = $this->homepage->hypesGames();
        $comingSoonGames = $this->homepage->comingSoonGames();

        return $this->render('homepage/homepage.html.twig', [
            'controller_name' => 'HomepageController',
            'lastTestedGames' => $lastTestedGames,
            'hypesGames' => $hypesGames,
            'comingSoonGames' => $comingSoonGames,
            'collectionIds' => $collectionIds,
            'likeIds' => $likes,
            'wishIds' => $wishes
        ]);
    }
}
