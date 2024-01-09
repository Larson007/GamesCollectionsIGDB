<?php

declare(strict_types=1);

namespace App\IGDB\Enums\AgeRatingContentDescription;

enum Category: int
{
    case PEGI_violence = 50;
    case PEGI_sex = 51;
    case PEGI_drugs = 52;
    case PEGI_fear = 53;
    case PEGI_discrimination = 54;
    case PEGI_bad_language = 55;
    case PEGI_gambling = 57;
    case PEGI_online_gameplay = 58;
    case PEGI_in_game_purchases = 59;
}