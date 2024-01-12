<?php

namespace App\IGDB\Models;

use App\IGDB\Enums\Image\Size;
use App\IGDB\Service\IGDBService;
use App\IGDB\Traits\ImageSizeTrait;
use App\IGDB\Traits\CategoryTrait;

class SearchGame
{
    use ImageSizeTrait;
    use CategoryTrait;

    private $igdbService;

    public function __construct(IGDBService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    public function searchGames(string $query)
    {
        $games = $this->igdbService->makeRequest('games', '
        fields
        name, 
        category,
        genres.name, 
        cover.url, 
        first_release_date, 
        rating, 
        platforms.name, 
        platforms.abbreviation; 
        search "' . $query . '";
        where version_parent = null
        & category = (0, 2 ,4 ,8 ,9);
        ');

        foreach ($games as &$game) {
            if (isset($game['cover']['url'])) {
                $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_BIG, false);
            }
            if (isset($game['category'])) {
                $game['category'] = $this->getCategoryName($game['category']);
            }
        }

        return $games;
    }
}