<?php

namespace App\IGDB\Models;

use App\IGDB\Enums\Image\Size;
use App\IGDB\Service\IGDBService;
use App\IGDB\Traits\CategoryTrait;
use App\IGDB\Traits\ImageSizeTrait;

class PopularGame
{
    use ImageSizeTrait;
    use CategoryTrait;

    private $igdbService;

    public function __construct(IGDBService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    public function popularGame(string $platform = null)
    {
        $platformId = "6, 167, 48, 169, 49, 130";

        if ($platform !== null) {
            switch ($platform) {
                case "popular-playstation":
                    $platformId = 167;
                    break;
                case "popular-xbox":
                    $platformId = 169;
                    break;
                case "popular-nintendo":
                    $platformId = 130;
                    break;
                case "popular-pc":
                    $platformId = 6;
                    break;
            }
        }

        $threeMonthsAgo = strtotime(date('Y-m-d', strtotime('-3 months')));
        $today = strtotime(date('Y-m-d'));
        $limit = 500;

        $games = $this->igdbService->makeRequest('games', '
        fields 
        name, 
        category,
        genres.name, 
        themes.name,
        game_modes.name,
        cover.url, 
        first_release_date, 
        rating, 
        aggregated_rating,
        platforms.name, 
        platforms.abbreviation; 
        
        sort first_release_date desc; 
        
        where 
        category = (0, 2, 4, 8, 9)
        & platforms = (' . $platformId . ')
        & rating >= 60
        & first_release_date >= ' . $threeMonthsAgo . '
        & first_release_date < ' . $today . ';

        limit ' . $limit . ';
        ');

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