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

        $alernativeNames = "Alternative spelling";

        $game = $this->igdbService->makeRequest('games', "
        fields  
        
        name,
        slug,
        storyline,
        summary,
        
        category,
        cover.url,
        first_release_date,
        game_engines.name,
        rating,
        rating_count,
        websites.*,
        
        collection.name,collection.games.*,
        bundles.*, bundles.cover.url, bundles.genres.name, bundles.platforms.name, bundles.themes.name, bundles.game_modes.name, 
        dlcs.*,
        expansions.*,
        franchises.*, franchises.games.*, franchises.games.cover.url, franchises.games.platforms.*,
        similar_games.*,

        game_modes.name,
        genres.name,
        platforms.*,
        player_perspectives.name,
        themes.name,

        artworks.*,
        screenshots.*,
        videos.name, videos.video_id,

        involved_companies.developer,involved_companies.publisher,involved_companies.porting,involved_companies.supporting, 

        involved_companies.company.name, involved_companies.company.country, involved_companies.company.websites.*,

        ports,
        remakes,
        remasters,
        standalone_expansions,
        status,

        version_parent,
        version_title;

        where id = " . $gameId . "
        ;
        ");

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

        if (isset($game['screenshots'])) {
            foreach ($game['screenshots'] as &$image) {
                if (isset($image['url'])) {
                    $image['url'] = $this->getImageUrl($image['url'], Size::SCREENSHOT_MEDIUM, true);
                }
            }
        }

        if (isset($game['artworks'])) {
            foreach ($game['artworks'] as &$image) {
                if (isset($image['url'])) {
                    $image['url'] = $this->getImageUrl($image['url'], Size::SCREENSHOT_HUGE, false);
                }
            }
        }

        if (isset($game['franchises'])) {
            foreach ($game['franchises'] as &$franchises) {
                if (isset($franchises['games'])) {
                    foreach ($franchises['games'] as &$franchise) {
                        if (isset($franchise['cover']['url'])) {
                            $franchise['cover']['url'] = $this->getImageUrl($franchise['cover']['url'], Size::COVER_BIG, false);
                        }
                    }
                }
            }
        }

        return $game;
    }

}















/** AJOUTER LES DETAILS DES JEUX QUE L'ON VEUT RECUPERER
bundles
collection.games 
dlcs.*
expansions.*
franchises.games.*,
similar_games.*,
 **/

/** INFO
platforms.*, affecter les logos a logo_id via ENUM
involved_companies.company.websites.url peut retrouner un tableau, recuper [0]
involved_companies.company.country recupere un INT, le convertir en ISO 3166 (voir avec API pour drapeau)

status  recuperer le nom via ENUM deja present
 **/



/** PAS PERTINENT
age_ratings.*,
age_ratings.content_descriptions.*,
checksum,
created_at,
external_games.*,
follows,
forks,
hypes,
tags,
updated_at,
url,
 **/

/** PERTINENT ?
alternative_names.*,
expanded_games,
keywords.name,
 **/

/** REMPLACER ?
aggregated_rating,
aggregated_rating_count,
franchise,
release_dates.*, (sortie par platforme)
total_rating,
total_rating_count,
 **/

/** A PAS DE DONNEES 
collections (AKA Series)
game_localizations,
language_supports,
multiplayer_modes,
parent_game,



 **/