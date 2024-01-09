<?php

declare(strict_types=1);

namespace App\IGDB\Traits;

use App\IGDB\Enums\AgeRatingContentDescription\Category;
use App\IGDB\Enums\AgeRatingContentDescription\Image;

trait AgeRatingContentDescriptionTrait
{
    public function getAgeRatingContentDescriptionName(int $categoryId): string
    {
        $categoryNames = [
            Category::PEGI_violence->value => 'violence',
            Category::PEGI_sex->value => 'sexe',
            Category::PEGI_drugs->value => 'drogues',
            Category::PEGI_fear->value => 'peur',
            Category::PEGI_discrimination->value => 'discrimination',
            Category::PEGI_bad_language->value => 'langage grossier',
            Category::PEGI_gambling->value => 'jeu de hasard',
            Category::PEGI_online_gameplay->value => 'jeu en ligne',
            Category::PEGI_in_game_purchases->value => 'achats en jeu',
        ];

        return $categoryNames[$categoryId] ?? 'unknown';
    }

    public function getAgeRatingContentDescriptionImage(int $categoryId): string
    {
        $categoryImage = [
            Category::PEGI_violence->value => Image::PEGI_violence->value,
            Category::PEGI_sex->value => Image::PEGI_sex->value,
            Category::PEGI_drugs->value => Image::PEGI_drugs->value,
            Category::PEGI_fear->value => Image::PEGI_fear->value,
            Category::PEGI_discrimination->value => Image::PEGI_discrimination->value,
            Category::PEGI_bad_language->value => Image::PEGI_bad_language->value,
            Category::PEGI_gambling->value => Image::PEGI_gambling->value,
            Category::PEGI_online_gameplay->value => Image::PEGI_online_gameplay->value,
            Category::PEGI_in_game_purchases->value => Image::PEGI_in_game_purchases->value,
        ];

        return $categoryImage[$categoryId] ?? 'build/images/placeholders.jpg';
    }
}