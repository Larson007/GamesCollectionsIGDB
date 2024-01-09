<?php

declare(strict_types=1);

namespace App\IGDB\Enums\AgeRating;

enum Image: string
{
    case Three = 'build/images/icons/age_rating/PEGI-3.svg';
    case Seven = 'build/images/icons/age_rating/PEGI-7.svg';
    case Twelve = 'build/images/icons/age_rating/PEGI-12.svg';
    case Sixteen = 'build/images/icons/age_rating/PEGI-16.svg';
    case Eighteen = 'build/images/icons/age_rating/PEGI-18.svg';

}
