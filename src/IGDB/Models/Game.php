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
        *,
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

        franchises.*, 
        franchises.games.*, franchises.games.cover.url, franchises.games.platforms.*,

        dlcs.*,
        dlcs.cover.url, dlcs.platforms.*,
        expansions.*,

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
            $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_BIG, false);
        }


        // if (isset($game['cover']['url'])) {
        //     $bigImageUrl = $this->getImageUrl($game['cover']['url'], Size::COVER_BIG, false);
        //     $headers = @get_headers($bigImageUrl);

        //     if ($headers && $headers[0] != 'HTTP/1.1 404 Not Found') {
        //         // L'image de grande taille existe
        //         $game['cover']['url'] = $bigImageUrl;
        //     } else {
        //         $smallImageUrl = $this->getImageUrl($game['cover']['url'], Size::COVER_SMALL, true);
        //         $game['cover']['url'] = $smallImageUrl;
        //     }
        // }

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
                    $image['url'] = $this->getImageUrl($image['url'], Size::SCREENSHOT_BIG, false);
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
        
        if (isset($game['dlcs'])) {
            foreach ($game['dlcs'] as &$dlc) {
                if (isset($dlc['cover']['url'])) {
                    $dlc['cover']['url'] = $this->getImageUrl($dlc['cover']['url'], Size::COVER_BIG, false);
                }
            }
        }

        return $game;
    }

    public function gameCollection($gameId) {

        $game = $this->igdbService->makeRequest('games', "
        fields  
        
        name,

        franchises.name, 
        franchises.games.name, franchises.games.summary,franchises.games.category, franchises.games.cover.url, franchises.games.platforms.*,
        franchises.games.version_parent, franchises.games.first_release_date,

        collection.name, 
        collection.games.name, collection.games.summary,collection.games.category, collection.games.cover.url, collection.games.platforms.*,
        collection.games.version_parent, collection.games.first_release_date,

        dlcs.name, dlcs.summary, dlcs.category, dlcs.cover.url, dlcs.platforms.*, dlcs.first_release_date,

        expansions.name, expansions.summary, expansions.category, expansions.cover.url, expansions.platforms.*, expansions.first_release_date;

        where id = " . $gameId . " & franchises.games.version_parent = null
        ;
        ");

        $game =  $game[0];

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
        
        if (isset($game['dlcs'])) {
            foreach ($game['dlcs'] as &$dlc) {
                if (isset($dlc['cover']['url'])) {
                    $dlc['cover']['url'] = $this->getImageUrl($dlc['cover']['url'], Size::COVER_BIG, false);
                }
            }
        }

        if (isset($game['expansions'])) {
            foreach ($game['expansions'] as &$expansion) {
                if (isset($expansion['cover']['url'])) {
                    $expansion['cover']['url'] = $this->getImageUrl($expansion['cover']['url'], Size::COVER_BIG, false);
                }
            }
        }

        // collection
        if (isset($game['collection'])) {
            foreach ($game['collection'] as &$collection) {
                if (isset($collection['games'])) {
                    foreach ($collection['games'] as &$game) {
                        if (isset($game['cover']['url'])) {
                            $game['cover']['url'] = $this->getImageUrl($game['cover']['url'], Size::COVER_BIG, false);
                        }
                    }
                }
            }
        }

        return $game;
    }

    public function gameMedias($gameId) {

        $game = $this->igdbService->makeRequest('games', "
        fields  
        
        name,

        screenshots.*,
        videos.name, videos.video_id;

        where id = " . $gameId . "
        ;
        ");

        $game =  $game[0];

        // screenshots
        if (isset($game['screenshots'])) {
            foreach ($game['screenshots'] as &$image) {
                if (isset($image['url'])) {
                    $image['url'] = $this->getImageUrl($image['url'], Size::SCREENSHOT_HUGE, false);
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
