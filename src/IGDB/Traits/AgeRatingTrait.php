<?php

declare(strict_types=1);

namespace App\IGDB\Traits;

use App\IGDB\Enums\AgeRating\Category;
use App\IGDB\Enums\AgeRating\Image;
use App\IGDB\Enums\AgeRating\Rating;

trait AgeRatingTrait
{
    public function getAgeRatingCompany(int $categoryId): string
    {
        $categoryNames = [
            Category::ESRB->value => 'esrb',
            Category::PEGI->value => 'pegi',
            Category::CERO->value => 'cero',
            Category::USK->value => 'usk',
            Category::GRAC->value => 'grac',
            Category::CLASS_IND->value => 'class_ind',
            Category::ACB->value => 'acb',
        ];
    
        if (!is_int($categoryId)) {
            return 'unknown';
        }
    
        return $categoryNames[$categoryId] ?? 'unknown';
    }

    public function getAgeRatingName(int $categoryId): string
    {
        $categoryNames = [
            Rating::Three->value => '3+',
            Rating::Seven->value => '7+',
            Rating::Twelve->value => '12+',
            Rating::Sixteen->value => '16+',
            Rating::Eighteen->value => '18+',
        ];
    
        if (!is_int($categoryId)) {
            return 'unknown';
        }
    
        return $categoryNames[$categoryId] ?? 'unknown';
    }

    public function getAgeRatingImage(int $ratingId): string
    {
        $ratingImage = [
            Rating::Three->value => Image::Three->value,
            Rating::Seven->value => Image::Seven->value,
            Rating::Twelve->value => Image::Twelve->value,
            Rating::Sixteen->value => Image::Sixteen->value,
            Rating::Eighteen->value => Image::Eighteen->value,

        ];

        return $ratingImage[$ratingId] ?? 'unknown';
    }

}