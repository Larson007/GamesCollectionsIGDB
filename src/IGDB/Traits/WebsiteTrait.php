<?php

declare(strict_types=1);

namespace App\IGDB\Traits;

use App\IGDB\Enums\Website\Category;
use App\IGDB\Enums\Website\Image;

trait WebsiteTrait
{
    public function getWebsiteCategoryName(int $categoryId): string
    {
        $categoryNames = [
            Category::OFFICIAL->value => 'official',
            Category::WIKIA->value => 'wikia',
            Category::WIKIPEDIA->value => 'wikipedia',
            Category::FACEBOOK->value => 'facebook',
            Category::TWITTER->value => 'twitter',
            Category::TWITCH->value => 'twitch',
            Category::INSTAGRAM->value => 'instagram',
            Category::YOUTUBE->value => 'youtube',
            Category::IPHONE->value => 'iphone',
            Category::IPAD->value => 'ipad',
            Category::ANDROID->value => 'android',
            Category::STEAM->value => 'steam',
            Category::REDDIT->value => 'reddit',
            Category::ITCH->value => 'itch',
            Category::EPIC_GAMES->value => 'epic games',
            Category::GOG->value => 'gog',
            Category::DISCORD->value => 'discord',
        ];

        return $categoryNames[$categoryId] ?? 'unknown';
    }

    public function getWebsiteImage(int $categoryId): string
    {
        $images = [
            Category::OFFICIAL->value => Image::OFFICIAL->value,
            Category::WIKIA->value => Image::WIKIA->value,
            Category::WIKIPEDIA->value => Image::WIKIPEDIA->value,
            Category::FACEBOOK->value => Image::FACEBOOK->value,
            Category::TWITTER->value => Image::TWITTER->value,
            Category::TWITCH->value => Image::TWITCH->value,
            Category::INSTAGRAM->value => Image::INSTAGRAM->value,
            Category::YOUTUBE->value => Image::YOUTUBE->value,
            Category::IPHONE->value => Image::IPHONE->value,
            Category::IPAD->value => Image::IPAD->value,
            Category::ANDROID->value => Image::ANDROID->value,
            Category::STEAM->value => Image::STEAM->value,
            Category::REDDIT->value => Image::REDDIT->value,
            Category::ITCH->value => Image::ITCH->value,
            Category::EPIC_GAMES->value => Image::EPICGAMES->value,
            Category::GOG->value => Image::GOG->value,
            Category::DISCORD->value => Image::DISCORD->value,
        ];

        return $images[$categoryId] ?? 'unknown';
    }
}