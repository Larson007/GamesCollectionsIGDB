<?php

declare(strict_types=1);

namespace App\IGDB\Enums\AgeRatingContentDescription;

enum Image: string
{
    case PEGI_violence = 'build/images/icons/age_rating_content_description/PEGI_violence.svg';
    case PEGI_sex = 'build/images/icons/age_rating_content_description/PEGI_sex.svg';
    case PEGI_drugs = 'build/images/icons/age_rating_content_description/PEGI_drugs.svg';
    case PEGI_fear = 'build/images/icons/age_rating_content_description/PEGI_fear.svg';
    case PEGI_discrimination = 'build/images/icons/age_rating_content_description/PEGI_discrimination.svg';
    case PEGI_bad_language = 'build/images/icons/age_rating_content_description/PEGI_bad_language.svg';
    case PEGI_gambling = 'build/images/icons/age_rating_content_description/PEGI_gambling.svg';
    case PEGI_online_gameplay = 'build/images/icons/age_rating_content_description/PEGI_online_gameplay.svg';
    case PEGI_in_game_purchases = 'build/images/icons/age_rating_content_description/PEGI_in_game_purchases.svg';

}
