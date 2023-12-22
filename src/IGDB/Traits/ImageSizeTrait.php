<?php

declare(strict_types=1);

namespace App\IGDB\Traits;

use App\IGDB\Enums\Image\Size;

trait ImageSizeTrait
{
    public function getImageUrl(string $imageUrl, Size $size, bool $isRetina = false): string
    {
        $sizeValue = 't_' . $size->value;

        if ($isRetina) {
            $sizeValue .= '_2x';
        }

        // Remplacez 't_thumb' par la taille d'image souhaitée
        return str_replace('t_thumb', $sizeValue, $imageUrl);
    }
}