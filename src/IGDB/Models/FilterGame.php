<?php

namespace App\IGDB\Models;


use App\IGDB\Enums\Image\Size;
use App\IGDB\Service\IGDBService;
use App\IGDB\Traits\CategoryTrait;
use App\IGDB\Traits\ImageSizeTrait;


class FilterGame
{
    use ImageSizeTrait;
    use CategoryTrait;

    private $igdbService;

    public function __construct(IGDBService $igdbService)
    {
        $this->igdbService = $igdbService;
    }

    public function filter($data)
    {

        //* Definir la date pour les jeux afficher par defaut
        $thisYear = strtotime(date('2023-01-01'));
        $today = strtotime(date('Y-m-d'));

        // 1 : on va vérifier que $data contient bien les clés attendues
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


        // 2 : on va créer une requête en fonction des données de $data
        $query = "
            fields
            id, 
            name, 
            category,
            cover.url, 
            platforms.id, platforms.name, platforms.abbreviation,
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
            $query .= " where category = (0, 2, 4, 8, 9) & version_parent = null & cover != null & rating != null & first_release_date != null & rating >= 50 & first_release_date >= " . $thisYear . " & first_release_date <= " . $today . ";";
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
            $results = $this->igdbService->makeRequest('games', $queryCopy);
            $games = array_merge($games, $results);
        }

        // 3 : on va traiter les données récupérées
            foreach ($games as &$game) {
                if (isset($game['cover']['url'])) {
                    $bigImageUrl = $this->getImageUrl($game['cover']['url'], Size::HD_READY, false);
                    $headers = @get_headers($bigImageUrl);

                    if ($headers && $headers[0] != 'HTTP/1.1 404 Not Found') {
                        // L'image de grande taille existe
                        $game['cover']['url'] = $bigImageUrl;
                    } else {
                        $smallImageUrl = $this->getImageUrl($game['cover']['url'], Size::COVER_SMALL, true);
                        $game['cover']['url'] = $smallImageUrl;
                    }
                }

                if (isset($game['category'])) {
                    $game['category'] = $this->getCategoryName($game['category']);
                }
            }


        // FIN : on va retourner les données traitées
        return $games;
    }
}