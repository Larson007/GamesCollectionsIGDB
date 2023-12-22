<?php

namespace App\IGDB\Models;

use App\IGDB\Enums\Image\Size;
use App\IGDB\Service\IGDBService;
use App\IGDB\Traits\ImageSizeTrait;

class UserGame
{
    use ImageSizeTrait;

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
            genres.name, 
            cover.url, 
            first_release_date, 
            rating, 
            platforms.name, platforms.abbreviation,
            themes.name,
            game_modes.name;
            where id = ($gamesCollection);
        ");

        foreach ($games as &$game) {
            if (isset($game['cover']['url'])) {
                $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_SMALL, true);
            }
        }


        return $games;
    }
}