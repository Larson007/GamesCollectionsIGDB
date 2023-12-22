<?php

namespace App\IGDB\Models;

use App\IGDB\Enums\Image\Size;
use App\IGDB\Service\IGDBService;
use App\IGDB\Traits\WebsiteTrait;
use App\IGDB\Traits\CategoryTrait;
use App\IGDB\Traits\ImageSizeTrait;

class Game
{
    use ImageSizeTrait;
    use CategoryTrait;
    use WebsiteTrait;

    private $igdbService;

    public function __construct(IGDBService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    public function game(int $gameId)
    {

        $game = $this->igdbService->makeRequest('games', '
        fields  
        name, 
        slug, 
        category,
        summary, 
        genres.name, 
        themes.name,
        game_modes.name,
        cover.url, 
        first_release_date, 
        franchises.name, franchises.games.name, franchises.games.cover.url, franchises.games.first_release_date, franchises.games.rating, franchises.games.platforms.abbreviation, franchises.games.genres.name, franchises.games.category,
        involved_companies.company.name ,involved_companies.developer, involved_companies.porting, involved_companies.publisher, involved_companies.supporting,
        platforms.name, platforms.abbreviation,
        screenshots.url, 
        storyline, 
        websites.*, 
        dlcs.name, dlcs.cover.url, dlcs.first_release_date, dlcs.rating, dlcs.storyline, dlcs.summary, dlcs.platforms.abbreviation, dlcs.platforms.name, dlcs.genres.name,
        expansions.name, expansions.cover.url, expansions.first_release_date, expansions.rating, expansions.storyline, expansions.summary, expansions.platforms.abbreviation, expansions.platforms.name, expansions.genres.name,
        rating,
        artworks.*,
        videos.name, videos.video_id;
        
        where id = ' . $gameId . ';
        ');

        $game = $game[0];


        if (isset($game['cover']['url'])) {
            $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_BIG, true);
        }
        if (isset($game['category'])) {
            $game['category'] = $this->getCategoryName($game['category']);
        }
        if (isset($game['websites'])) {
            foreach ($game['websites'] as &$website) {
                if (isset($website['category'])) {
                    $categoryId = $website['category'];
                    $website['category'] = $this->getWebsiteCategoryName($categoryId);
                    $website['image'] = $this->getWebsiteImage($categoryId);
                }
            }
        }

        return $game;
    }
}
