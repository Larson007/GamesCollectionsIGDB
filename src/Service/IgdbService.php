<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\Friend;
use App\Service\ImagesProcess;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Console\Output\NullOutput;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class IgdbService
{
    private $client;
    private $clientId;
    private $apiToken;
    private $imagesProcess;

    // Définir les noms des sites web
    private $websiteNames = [
        1 => ['name' => 'official', 'icon' => 'build/images/icons/websites/official.svg'],
        2 => ['name' => 'wikia', 'icon' => 'build/images/icons/websites/wikia.svg'],
        3 => ['name' => 'wikipedia', 'icon' => 'build/images/icons/websites/wikipedia.svg'],
        4 => ['name' => 'facebook', 'icon' => 'build/images/icons/websites/facebook.svg'],
        5 => ['name' => 'twitter', 'icon' => 'build/images/icons/websites/twitter.svg'],
        6 => ['name' => 'twitch', 'icon' => 'build/images/icons/websites/twitch.svg'],
        8 => ['name' => 'instagram', 'icon' => 'build/images/icons/websites/instagram.svg'],
        9 => ['name' => 'youtube', 'icon' => 'build/images/icons/websites/youtube.svg'],
        10 => ['name' => 'iphone', 'icon' => 'build/images/icons/websites/iphone.svg'],
        11 => ['name' => 'ipad', 'icon' => 'build/images/icons/websites/ipad.svg'],
        12 => ['name' => 'android', 'icon' => 'build/images/icons/websites/android.svg'],
        13 => ['name' => 'steam', 'icon' => 'build/images/icons/websites/steam.svg'],
        14 => ['name' => 'reddit', 'icon' => 'build/images/icons/websites/reddit.svg'],
        15 => ['name' => 'itch', 'icon' => 'build/images/icons/websites/itch.svg'],
        16 => ['name' => 'epicgames', 'icon' => 'build/images/icons/websites/epicgames.svg'],
        17 => ['name' => 'gog', 'icon' => 'build/images/icons/websites/gog.svg'],
        18 => ['name' => 'discord', 'icon' => 'build/images/icons/websites/discord.svg'],
    ];

    #FC573B dark orange
    #FD907E light orange

    // Define the game types
    private $gameTypes = [
        0 => 'main_game',
        1 => 'dlc_addon',
        2 => 'expansion',
        3 => 'bundle',
        4 => 'standalone_expansion',
        5 => 'mod',
        6 => 'episode',
        7 => 'season',
        8 => 'remake',
        9 => 'remaster',
        10 => 'expanded_game',
        11 => 'port',
        12 => 'fork',
        13 => 'pack',
        14 => 'update',
    ];

    public function __construct(HttpClientInterface $client, string $clientId, string $apiToken, ImagesProcess $imagesProcess)
    {
        $this->client = $client;
        $this->clientId = $clientId;
        $this->apiToken = $apiToken;
        $this->imagesProcess = $imagesProcess;
    }

    private function makeRequest(string $endpoint, string $body)
    {
        // dump($this->clientId);
        // dump($this->apiToken);

        $response = $this->client->request('POST', $endpoint, [
            'headers' => [
                'Client-ID' => $this->clientId,
                'Authorization' => 'Bearer ' . $this->apiToken,
            ],
            'body' => $body,
        ]);

        return $response->toArray();
    }

    // private function processCoverImages(array &$games)
    // {
    //     foreach ($games as &$game) {
    //         if (isset($game['cover'])) {
    //             $game['cover']['url'] = str_replace('t_thumb', 't_cover_big', $game['cover']['url']);
    //         }
    //     }
    // }

    public function getGamesReleasedThisMonth()
    {
        $today = date('Y-m-d');
        $threeMonthsAgo = date('Y-m-d', strtotime('-3 months'));

        $games = $this->makeRequest('https://api.igdb.com/v4/games', '
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
        where category = (0, 2, 4, 8, 9) & first_release_date >= ' . strtotime($threeMonthsAgo) . ' 
        & rating >= 0 
        & first_release_date < ' . strtotime($today) . '; 
        sort first_release_date desc;
        limit 100;');

        $this->imagesProcess->processCoverBig($games);


        // Process the game category
        $desiredCategories = [0, 2, 4, 8, 9];

        $games = array_filter($games, function ($game) use ($desiredCategories) {
            return isset($game['category']) && in_array($game['category'], $desiredCategories);
        });

        foreach ($games as &$game) {
            $game['category'] = $this->gameTypes[$game['category']];
        }

        //  dump($games);

        return $games;
    }

    public function getRecentPopularGames()
    {

        $threeMonthsAgo = strtotime(date('Y-m-d', strtotime('-3 months')));
        $limit = 100;

        $games = $this->makeRequest('https://api.igdb.com/v4/games', '
        fields 
        name, 
        category,
        genres.name, 
        themes.name,
        game_modes.name,
        cover.url, 
        first_release_date, 
        rating, 
        platforms.name, 
        platforms.abbreviation; 
        
        sort rating desc; 
        
        where rating >= 80 
        & first_release_date >= ' . $threeMonthsAgo . '; limit ' . $limit . ';
        ');

        // Process the game category
        $desiredCategories = [0, 2, 4, 8, 9];

        $games = array_filter($games, function ($game) use ($desiredCategories) {
            return isset($game['category']) && in_array($game['category'], $desiredCategories);
        });

        foreach ($games as &$game) {
            $game['category'] = $this->gameTypes[$game['category']];
        }

        $this->imagesProcess->processCoverBig($games);

        return $games;
    }


    public function searchGames(string $query)
    {
        $response = $this->client->request('POST', 'https://api.igdb.com/v4/games', [
            'headers' => [
                'Client-ID' => $this->clientId,
                'Authorization' => 'Bearer ' . $this->apiToken,
            ],
            'body' => '
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
                where version_parent = null;',
        ]);

        // process the response to get the cover images
        $games = $response->toArray();
        $this->imagesProcess->processCoverSmall($games);

        // Process the game category
        $desiredCategories = [0, 2, 4, 8, 9]; // Replace this with the game categories you want to retrieve

        foreach ($games as $key => $game) {
            if (isset($game['category']) && !in_array($game['category'], $desiredCategories)) {
                unset($games[$key]);
            }
        }



        return $games;
    }


    public function getGameById(int $gameId)
    {

        $response = $this->makeRequest('https://api.igdb.com/v4/games', '
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

        $game = $response[0];

        // Process Category Name
        if (isset($game['category'])) {
            $game['category'] = $this->gameTypes[$game['category']];
        }

        // Process the cover image
        $this->imagesProcess->processCoverDetail($game, "cover");

        // Process the screenshots
        $this->imagesProcess->processScreenshotSmall($game, "screenshots");

        // Process the cover dlcs
        $this->imagesProcess->processDlcsExpansionsBig($game, "dlcs");

        // Process the cover expansions
        $this->imagesProcess->processDlcsExpansionsBig($game, "expansions");

        // Process the artworks
        $this->imagesProcess->processArtworksBig($game);

        // Process the franchises
        if (isset($game['franchises'])) {
            foreach ($game['franchises'] as &$franchise) {
                if (isset($franchise['games'])) {
                    // Traiter les images de couverture
                    $this->imagesProcess->processCoverBig($franchise['games']);

                    // Exclure certaines catégories
                    $franchise['games'] = array_filter($franchise['games'], function ($game) {
                        return in_array($game['category'], [0, 4]);
                    });

                    // Supprimer les jeux sans rating
                    $franchise['games'] = array_filter($franchise['games'], function ($game) {
                        return isset($game['rating']) && $game['rating'] != null;
                    });

                    // Trier les jeux par date de sortie
                    usort($franchise['games'], function ($a, $b) {
                        $aDate = isset($a['first_release_date']) ? $a['first_release_date'] : null;
                        $bDate = isset($b['first_release_date']) ? $b['first_release_date'] : null;
                        return $bDate <=> $aDate;
                    });
                }
            }
        }

        // Process the websites
        if (isset($game['websites'])) {
            foreach ($game['websites'] as &$website) {
                if (isset($this->websiteNames[$website['category']])) {
                    $website['name'] = $this->websiteNames[$website['category']]['name'];
                    $website['icon'] = $this->websiteNames[$website['category']]['icon'];
                }
            }
        }



        // // Process dlcs cover images
        // if (isset($game['dlcs'])) {
        //     foreach ($game['dlcs'] as &$dlc) {
        //         if (isset($dlc['cover'])) {
        //             $dlc['cover']['url'] = str_replace('t_thumb', 't_cover_big', $dlc['cover']['url']);
        //         }
        //     }
        // }

        // // Process expansions cover images
        // if (isset($game['expansions'])) {
        //     foreach ($game['expansions'] as &$expansion) {
        //         if (isset($expansion['cover'])) {
        //             $expansion['cover']['url'] = str_replace('t_thumb', 't_cover_big', $expansion['cover']['url']);
        //         }
        //     }
        // }

        // // Process artworks
        // if (isset($game['artworks'])) {
        //     foreach ($game['artworks'] as &$artwork) {
        //         $artwork['url'] = str_replace('t_thumb', 't_screenshot_big', $artwork['url']);
        //     }
        // }

        // dump($game);

        return $game;
    }

    public function userCollection($gameIdsString)
    {
        // Faites une requête à l'API iGDB
        $igdbGames = $this->makeRequest('https://api.igdb.com/v4/games', "
            fields name, genres.name, cover.url, first_release_date, rating, platforms.name, platforms.abbreviation;
            where id = ($gameIdsString);
        ");

        // Process the cover image
        $this->imagesProcess->processCoverBig($igdbGames);

        return $igdbGames;
    }

    public function homepage()
    {

        $games = $this->makeRequest('https://api.igdb.com/v4/games', '
        fields 
        name,
        category,
        cover.url, 
        first_release_date, 
        rating, 
        platforms.name, 
        platforms.abbreviation; 
        
        sort first_release_date desc; 
        
        where rating >= 75 & category = (0, 2, 4, 8, 9);
        limit 24;
        ');

        // retirer de $games les jeux qui n'on pas de cover
        $games = array_filter($games, function ($game) {
            return isset($game['cover']);
        });

        // retirer les jeux qui n'ont pas de rating
        $games = array_filter($games, function ($game) {
            return isset($game['rating']);
        });

        // retirer les jeux qui n'ont pas de date de sortie
        $games = array_filter($games, function ($game) {
            return isset($game['first_release_date']);
        });

        // retirer les jeux qui n'ont pas de plateforme
        $games = array_filter($games, function ($game) {
            return isset($game['platforms']);
        });

        // retirer les jeux dont la date de sortie est dans le futur
        $games = array_filter($games, function ($game) {
            return $game['first_release_date'] < time();
        });

        // Process the game category
        $desiredCategories = [0, 2, 8, 9]; // Replace this with the game categories you want to retrieve

        foreach ($games as $key => $game) {
            if (isset($game['category']) && !in_array($game['category'], $desiredCategories)) {
                unset($games[$key]);
            }
        }

        // $this->processCoverImages($games);
        $this->imagesProcess->processCoverBig($games);
        return $games;
    }




    public function dynamiqueSearch($data)
    {
        // 1 : on vérifie si $data est vide ou non
        // Vérifier si tous les sous-éléments de $data sont vides ou null
        if (empty($data['platforms']) && empty($data['themes']) && empty($data['genres']) && empty($data['modes']) && $data['rating']['min'] === null && $data['rating']['max'] === null && $data['released']['min'] === null && $data['released']['max'] === null) {

            // NE SERT A RIEN CAR LA FONCTION EST APPELER UNIQUEMENT SI $data N'EST PAS VIDE
            return null;
        } else {

            // 2 : on va récupérer les données de $data pour les stocker dans des variables
            $platforms =  implode(",", $data['platforms']);
            $genres = implode(",", $data['genres']);
            $themes = implode(",", $data['themes']);
            $modes = implode(",", $data['modes']);
            $ratingMin = $data['rating']['min'];
            $ratingMax = $data['rating']['max'];
            $releasedMin =  $data['released']['min'];
            $releasedMax = $data['released']['max'];
            $sortReleased = $data['sort']['released'];
            $sortRating = $data['sort']['rating'];


            // 3 : on va créer une requête en fonction des données de $data
            $query = "
            fields
            id, 
            name, 
            category,
            cover.url, 
            platforms,
            themes,
            genres,
            game_modes,
            first_release_date, 
            release_dates.*,
            rating;
        ";
            if (!empty($sortReleased)) {
                $query .= "sort first_release_date " . $sortReleased . "; ";
            } elseif (!empty($sortRating)) {
                $query .= "sort rating " . $sortRating . "; ";
            } else {
                $query .= "sort first_release_date desc; ";
            }

            if (empty($platforms) && empty($genres) && empty($themes) && empty($modes) && $ratingMin == null && $ratingMax == null && $releasedMin == null && $releasedMax == null) {
                $query .= "";
            } else {
                $conditions = ["category = (0) & version_parent = null & cover != null & rating != null & first_release_date != null"];

                if (!empty($platforms)) {
                    $conditions[] = "platforms = (" . $platforms . ") & platforms = {" . $platforms . "}";
                }
                if (!empty($themes)) {
                    $conditions[] = "themes = (" . $themes . ") & themes = {" . $themes . "}";
                }
                if (!empty($genres)) {
                    $conditions[] = "genres = (" . $genres . ") & genres = {" . $genres . "}";
                }
                if (!empty($modes)) {
                    $conditions[] = "game_modes = (" . $modes . ") & game_modes = {" . $modes . "}" ;
                }
                if (!empty($ratingMin)) {
                    $conditions[] = "rating >= " . $ratingMin;
                }
                if (!empty($ratingMax)) {
                    $conditions[] = "rating <= " . $ratingMax;
                }
                if (!empty($releasedMin)) {
                    $conditions[] = "first_release_date >= " . strtotime($releasedMin . '-01-01');
                }
                if (!empty($releasedMax)) {
                    $conditions[] = "first_release_date <= " . strtotime($releasedMax . '-12-31');
                }

                if (!empty($conditions)) {
                    $query .= "where " . implode(" & ", $conditions) . "; ";
                }
            }

            $query .= "limit 104;";
            // dump($query);

            // 4 : on va faire une requête à l'API iGDB
            $dynamicGames = $this->makeRequest('https://api.igdb.com/v4/games', $query);

            // 5 : on va traiter les données reçues de l'API iGDB
            foreach ($dynamicGames as &$game) {
                if (isset($game['cover'])) {
                    $game['cover']['url'] = str_replace('t_thumb', 't_cover_big', $game['cover']['url']);
                }
            }

            // 6 : on va retourner les données traitées
            return $dynamicGames;
        }
    }












    public function platforms()
    {

        $platforms = $this->makeRequest('https://api.igdb.com/v4/platforms', '
        fields id, name;
        limit 500; } ;
        ');

        return $platforms;
    }

    public function genres()
    {

        $genres = $this->makeRequest('https://api.igdb.com/v4/genres', '
        fields id, name;
        limit 500; } ;
        ');

        return $genres;
    }

    public function themes()
    {

        $themes = $this->makeRequest('https://api.igdb.com/v4/themes', '
        fields id, name;
        limit 500; } ;
        ');

        return $themes;
    }

    public function gameModes()
    {

        $gameModes = $this->makeRequest('https://api.igdb.com/v4/game_modes', '
        fields id, name;
        limit 500; } ;
        ');

        return $gameModes;
    }


    public function getGamesWithOffset()
    {
        $games = [];
        $limit = 500;
        $letter = "B";
        for ($offset = 0; $offset < 1000; $offset += $limit) {
            $query = "
                fields name, rating;
                where name = \"" . $letter . "\"*;
                limit $limit;
                offset $offset;
                sort name;

            ";
            // Exécutez la requête et ajoutez les résultats à $games
            $results = $this->makeRequest('https://api.igdb.com/v4/games', $query);
            $games = array_merge($games, $results);
        }
        return $games;
    }

    public function pagination($page = 1)
    {
        $games = [];
        $limit = 500;

        $offset = ($page - 1) * $limit;
        for ($i = 0; $i < $limit; $i += 500) {
            $query = "
                fields 
                name,
                cover.url;
                limit 500;
                offset " . ($offset + $i) . ";
                sort name;
                where cover != null & rating != null & first_release_date != null;
            ";
            // Exécutez la requête et ajoutez les résultats à $games
            $results = $this->makeRequest('https://api.igdb.com/v4/games', $query);
            $games = array_merge($games, $results);
        }

        $this->imagesProcess->processCoverBig($games);
        return $games;
    }


    public function test()
    {

        $games = $this->makeRequest('https://api.igdb.com/v4/games', '
        fields 
        id,
        name,
        rating,
        first_release_date,
        cover.url;
        where category = 0 & release_dates.platform = (167, 6, 14,169, 6, 14,170) & genres = (12, 15, 16, 24, 31) & themes = (1, 17) & game_modes = (1,2,3,4) ;
        limit 10; 
        ');

        // $this->imagesProcess->processCoverThumb($games); // Pas recommander car image cropper
        // $this->imagesProcess->processCoverMicro($games); //  Format tres petit (voir trop petit)
        // $this->imagesProcess->processCoverSmall($games); // petit format parfait pour les listes
        $this->imagesProcess->processCoverBig($games); //  format parfait pour les cartes
        // $this->imagesProcess->processCover720p($games); // parfais pour les pages de détails
        // $this->imagesProcess->processCover1080p($games); // Pour background

        return $games;
    }

















    // public function platforms()
    // {

    //     $response = $this->makeRequest('https://api.igdb.com/v4/multiquery', '
    //     query platforms "Platforms" { fields id, name, platform_logo, platform_family; limit 500; } ;
    //     query platform_logos "Platforms Logos" { fields id, url, image_id; limit 500;  } ;
    //     query platform_families "Platforms Families" { fields id, name, slug; limit 500; } ;
    //     ');

    //     $platforms = $response[0]['result'];
    //     $logos = $response[1]['result'];
    //     $families = $response[2]['result'];

    //     foreach ($platforms as &$platform) {
    //         foreach ($logos as $logo) {
    //             if (isset($logo) && array_key_exists('platform_logo', $platform) && $platform['platform_logo'] == $logo['id']) {
    //                 $platform['platform_logo'] = $logo;
    //                 break;
    //             }
    //         }

    //         foreach ($families as $family) {
    //             if (isset($family) && array_key_exists('platform_family', $platform) && $platform['platform_family'] == $family['id']) {
    //                 $platform['platform_family'] = $family;
    //                 break;
    //             }
    //         }
    //     }

    //     return $platforms;
    // }
}
