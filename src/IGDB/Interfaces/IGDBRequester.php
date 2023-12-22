<?php

namespace App\IGDB\Interfaces;

interface IGDBRequester
{
    public function makeRequest(string $resource, string $body): array;
}