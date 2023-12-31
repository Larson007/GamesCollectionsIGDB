<?php

namespace App\IGDB\Models;

use App\IGDB\Enums\Image\Size;
use App\IGDB\Service\IGDBService;
use App\IGDB\Traits\CategoryTrait;
use App\IGDB\Traits\ImageSizeTrait;

class NewGame
{
    use ImageSizeTrait;
    use CategoryTrait;

    private $igdbService;

    public function __construct(IGDBService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    public function newGame()
    {
        $today = date('Y-m-d');
        $threeMonthsAgo = date('Y-m-d', strtotime('-3 months'));

        $games = $this->igdbService->makeRequest('games', '
        fields 
        name,
        genres.name, 
        themes.name,
        game_modes.name,
        category,
        cover.url, 
        platforms.abbreviation, 
        platforms.name, 
        first_release_date, 
        rating; 
        where category = (0, 2, 4, 8, 9) 
        & first_release_date >= ' . strtotime($threeMonthsAgo) . ' 
        & rating >= 0 
        & first_release_date < ' . strtotime($today) . '; 
        sort first_release_date desc;
        limit 100;');

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