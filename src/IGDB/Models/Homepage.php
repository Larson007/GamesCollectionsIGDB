<?php

namespace App\IGDB\Models;

use App\IGDB\Enums\Image\Size;
use App\IGDB\Service\IGDBService;
use App\IGDB\Traits\CategoryTrait;
use App\IGDB\Traits\ImageSizeTrait;

class Homepage
{
    use ImageSizeTrait;
    use CategoryTrait;

    private $igdbService;

    public function __construct(IGDBService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    public function lastTestedGames()
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
        aggregated_rating; 
        where 
        aggregated_rating != null 
        & first_release_date >= ' . strtotime($threeMonthsAgo) . ' 
        & first_release_date < ' . strtotime($today) . '; 
        sort first_release_date desc;
        limit 5;');

        foreach ($games as &$game) {
            if (isset($game['cover']['url'])) {
                $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_BIG, true);
            }
            if (isset($game['category'])) {
                $game['category'] = $this->getCategoryName($game['category']);
            }
        }

        return $games;
    }

    
    public function hypesGames()
    {
        $today = date('Y-m-d');

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
        aggregated_rating,
        hypes; 
        where 
        first_release_date > ' . strtotime($today) . '; 
        sort hypes desc;
        limit 5;');

        foreach ($games as &$game) {
            if (isset($game['cover']['url'])) {
                $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_BIG, true);
            }
            if (isset($game['category'])) {
                $game['category'] = $this->getCategoryName($game['category']);
            }
        }

        return $games;
    }
    
    public function comingSoonGames()
    {
        $today = date('Y-m-d');

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
        hypes,
        aggregated_rating;
        where 
        hypes != null
        & first_release_date > ' . strtotime($today) . '; 
        sort first_release_date asc;
        limit 5;');

        foreach ($games as &$game) {
            if (isset($game['cover']['url'])) {
                $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_BIG, true);
            }
            if (isset($game['category'])) {
                $game['category'] = $this->getCategoryName($game['category']);
            }
        }

        return $games;
    }
}