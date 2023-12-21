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
        0 => 'jeu de base',
        1 => 'dlc addon',
        2 => 'extension',
        3 => 'bundle',
        4 => 'standalone extension',
        5 => 'mod',
        6 => 'episode',
        7 => 'season',
        8 => 'remake',
        9 => 'remaster',
        10 => 'expanded game',
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

    public function getRecentPopularGames($platform = null)
    {
        $platformId = "6, 167, 48, 169, 49, 130"; // Default value for all platforms

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
        
        sort first_release_date desc; 
        
        where 
        category = (0, 2, 4, 8, 9)
        & platforms = (' . $platformId . ')
        & rating >= 75
        & first_release_date >= ' . $threeMonthsAgo . '
        & first_release_date < ' . $today . ';

        limit ' . $limit . ';
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
        $this->imagesProcess->processScreenshotBig($game, "screenshots");

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
            fields 
            name,
            genres.name, 
            cover.url, 
            first_release_date, 
            rating, 
            platforms.name, platforms.abbreviation,
            themes.name,
            game_modes.name;
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
        limit 105;
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
        $this->imagesProcess->processCoverSmall($games);

        return $games;
    }




    public function filterGames($data)
    {

        // // 1 : on va si data est bien un tableau et si il contient bien les clés attendues     
        // if (!is_array($data) || empty($data['platforms']) && empty($data['themes']) && empty($data['genres']) && empty($data['modes']) && $data['rating']['min'] === null && $data['rating']['max'] === null && $data['released']['min'] === null && $data['released']['max'] === null) {
        //     return $this->homepage();
        // }


        // 2 : on va vérifier que $data contient bien les clés attendues
        $platforms = isset($data['platforms']) ? implode(",", $data['platforms']) : '';
        $genres = isset($data['genres']) ? implode(",", $data['genres']) : '';
        $themes = isset($data['themes']) ? implode(",", $data['themes']) : '';
        $modes = isset($data['modes']) ? implode(",", $data['modes']) : '';
        $ratingMin = isset($data['rating']['min']) ? $data['rating']['min'] : null;
        $ratingMax = isset($data['rating']['max']) ? $data['rating']['max'] : null;
        $releasedMin = isset($data['released']['min']) ? $data['released']['min'] : null;
        $releasedMax = isset($data['released']['max']) ? $data['released']['max'] : null;
        $sortReleased = isset($data['sort']['released']) ? $data['sort']['released'] : null;
        $sortRating = isset($data['sort']['rating']) ? $data['sort']['rating'] : null;

        $thisYear = strtotime(date('Y-01-01'));
        $today = strtotime(date('Y-m-d'));


        // 3 : on va créer une requête en fonction des données de $data
        $query = "
            fields
            id, 
            name, 
            category,
            cover.url, 
            platforms.id,
            themes.id,
            genres.id,
            game_modes.id,
            first_release_date, 
            release_dates.*,
            rating,
            total_rating,
            total_rating_count,
            rating_count;
            ";
        if (!empty($sortReleased)) {
            $query .= "sort first_release_date " . $sortReleased . "; ";
        } elseif (!empty($sortRating)) {
            $query .= "sort rating " . $sortRating . "; ";
        } else {
            $query .= "sort first_release_date desc; ";
        }

        if (empty($platforms) && empty($genres) && empty($themes) && empty($modes) && $ratingMin == null && $ratingMax == null && $releasedMin == null && $releasedMax == null) {
            // Requête de la base pour la page d'accueil
            $query .= " where category = (0, 2, 4, 8, 9) & version_parent = null & cover != null & rating != null & first_release_date != null & rating >= 25 & first_release_date >= " . $thisYear . " & first_release_date <= " . $today . ";";
            if (!empty($sortReleased)) {
                $query .= "sort first_release_date " . $sortReleased . "; ";
            } elseif (!empty($sortRating)) {
                $query .= "sort rating " . $sortRating . "; ";
            } else {
                $query .= "sort first_release_date desc; ";
            }
        } else {
            // Requête de la page d'accueil avec filtres
            $conditions = ["version_parent = null & cover != null & first_release_date != null & category = (0,1,2,4,6,8,9,10,11)"];

            if (!empty($platforms)) {
                $platformsArray = explode(',', $platforms);
                if (count($platformsArray) > 1) {
                    $conditions[] = "platforms = [" . $platforms . "]";
                } else {
                    $conditions[] = "platforms = " . $platforms;
                }
            }
            if (!empty($themes)) {
                $conditions[] = "themes = (" . $themes . ")";
            }
            if (!empty($genres)) {
                $conditions[] = "genres = (" . $genres . ")";
            }
            if (!empty($modes)) {
                $conditions[] = "game_modes = [" . $modes . "]";
            }
            if (!empty($ratingMin) || !empty($ratingMax)) {
                $conditions[] = "rating != null";
                if ($ratingMin == $ratingMax) {
                    $conditions[] = "rating > " . ($ratingMax - 1);
                    $conditions[] = "rating < " . ($ratingMax + 1);
                } else {
                    if (!empty($ratingMin)) {
                        $conditions[] = "rating >= " . $ratingMin;
                    }
                    if (!empty($ratingMax)) {
                        $conditions[] = "rating <= " . $ratingMax;
                    }
                }
            }
            if (!empty($releasedMin)) {
                $conditions[] = "first_release_date >= " . strtotime($releasedMin . '-01-01');
            } else {
                $conditions[] = "first_release_date >= " . strtotime('1970-01-01');
            }

            $currentYear = date("Y");
            if (!empty($releasedMax)) {
                $conditions[] = "first_release_date <= " . strtotime($releasedMax . '-12-31');
            } else {
                $conditions[] = "first_release_date <= " . strtotime($currentYear . '-12-31');
            }

            if (!empty($conditions)) {
                $query .= "where " . implode(" & ", $conditions) . "; ";
            }
        }

        $games = [];
        $limit = 500;
        for ($offset = 0; $offset < 1000; $offset += $limit) {
            $queryCopy = $query; // Créer une copie de la requête pour ne pas modifier la requête originale
            $queryCopy .= "limit $limit; offset $offset;";

            // Exécutez la requête et ajoutez les résultats à $games
            $results = $this->makeRequest('https://api.igdb.com/v4/games', $queryCopy);
            $games = array_merge($games, $results);
        }

        // 5 : on va traiter les données reçues de l'API iGDB
        $this->imagesProcess->processCoverSmall($games);

        // 6 : On va arrondir les notes et ne garder que celles qui sont égales à $ratingMin/Max lorsqu'il sont egault à eux même dans le filtre
        if (!empty($ratingMin) && !empty($ratingMax)) {
            if ($ratingMin == $ratingMax) {
                $games = array_filter($games, function ($game) use ($ratingMin, $ratingMax) {
                    $roundedRating = round($game['rating']);
                    return $roundedRating == $ratingMin;
                });
            }
        }

        // 7 : Process the game category
        foreach ($games as $key => $game) {
            if (isset($game['category']) && isset($this->gameTypes[$game['category']])) {
                $games[$key]['category'] = $this->gameTypes[$game['category']];
            }
        }


        // Optionnel: Voir la requête envoyée à l'API iGDB
        // dump($query);
        // dump($games);

        // 8 : on va retourner les données traitées
        return $games;
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

    public function character()
    {

        $games = $this->makeRequest('https://api.igdb.com/v4/characters', '
        fields 
        *, mug_shot.url;
        where mug_shot != null;
        limit 500; 
        ');

        // $this->imagesProcess->processCoverThumb($games); // Pas recommander car image cropper
        // $this->imagesProcess->processCoverMicro($games); //  Format tres petit (voir trop petit)
        // $this->imagesProcess->processCoverSmall($games); // petit format parfait pour les listes
        // $this->imagesProcess->processCoverBig($games); //  format parfait pour les cartes
        // $this->imagesProcess->processCover720p($games); // parfais pour les pages de détails
        // $this->imagesProcess->processCover1080p($games); // Pour background

        foreach ($games as &$cover) {
            if (isset($cover['mug_shot'])) {
                $cover['mug_shot']['url'] = str_replace('t_thumb', 't_cover_big', $cover['mug_shot']['url']);
                $pathInfo = pathinfo($cover['mug_shot']['url']);
                if ($pathInfo['extension'] !== 'png') {
                    $cover['mug_shot']['url'] = $pathInfo['dirname'] . '/' . $pathInfo['filename'] . '.png';
                }
            }
        }
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
