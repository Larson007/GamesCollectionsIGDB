<?php

namespace App\IGDB\Models;

use App\IGDB\Enums\Image\Size;
use App\IGDB\Service\IGDBService;
use App\IGDB\Traits\CategoryTrait;
use App\IGDB\Traits\ImageSizeTrait;

class UserGame
{
    use ImageSizeTrait;
    use CategoryTrait;

    private $igdbService;

    public function __construct(IGDBService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    public function userCollection(string $gamesCollection)
    {
        // Faites une requête à l'API iGDB
        $games = $this->igdbService->makeRequest('games', "
            fields 
            name,
            category,
            genres.name, 
            cover.url, 
            first_release_date, 
            rating, 
            platforms.name, platforms.abbreviation,
            themes.name,
            game_modes.name;
            where id = ($gamesCollection);
            limit 500;
        ");

        foreach ($games as &$game) {
            if (isset($game['cover']['url'])) {
                $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_SMALL, true);
            }
            if (isset($game['category'])) {
                $game['category'] = $this->getCategoryName($game['category']);
            }
        }


        return $games;
    }
}