<?php

declare(strict_types=1);

namespace App\IGDB\Enums\AgeRating;

enum Rating: int
{
    case Three = 1;
    case Seven = 2;
    case Twelve = 3;
    case Sixteen = 4;
    case Eighteen = 5;
}
