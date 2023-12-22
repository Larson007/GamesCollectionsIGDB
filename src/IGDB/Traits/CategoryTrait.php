<?php

declare(strict_types=1);

namespace App\IGDB\Traits;

use App\IGDB\Enums\Game\Category;

trait CategoryTrait
{
    public function getCategoryName($category): string
    {
        $categoryNames = [
            Category::MAIN_GAME->value => 'jeu de base',
            Category::DLC_ADDON->value => 'dlc addon',
            Category::EXPANSION->value => 'extension',
            Category::BUNDLE->value => 'bundle',
            Category::STANDALONE_EXPANSION->value => 'standalone extension',
            Category::MOD->value => 'mod',
            Category::EPISODE->value => 'episode',
            Category::SEASON->value => 'season',
            Category::REMAKE->value => 'remake',
            Category::REMASTER->value => 'remaster',
            Category::EXPANDED_GAME->value => 'expanded game',
            Category::PORT->value => 'port',
            Category::FORK->value => 'fork',
            Category::PACK->value => 'pack',
            Category::UPDATE->value => 'update',
        ];
    
        if (!is_int($category)) {
            return 'unknown';
        }
    
        return $categoryNames[$category] ?? 'unknown';
    }
}