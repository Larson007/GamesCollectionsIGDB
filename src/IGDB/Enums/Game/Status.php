<?php

declare(strict_types=1);

namespace App\IGDB\Enums\Game;

enum Status: int
{
    case released = 0;
    case alpha = 2;
    case beta = 3;
    case early_access = 4;
    case offline = 5;
    case cancelled  = 6;
    case rumored = 7;
    case delisted = 8;
}
