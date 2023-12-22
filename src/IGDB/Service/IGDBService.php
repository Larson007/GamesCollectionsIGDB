<?php

namespace App\IGDB\Service;

use App\IGDB\Interfaces\IGDBRequester;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class IGDBService implements IGDBRequester
{

    private $client;
    private $clientId;
    private $apiToken;

    public function __construct(HttpClientInterface $client, string $clientId, string $apiToken)
    {
        $this->client = $client;
        $this->clientId = $clientId;
        $this->apiToken = $apiToken;
    }


    public function makeRequest(string $resource, string $body): array
    {
        $endpoint = "https://api.igdb.com/v4/$resource";

        $response = $this->client->request('POST', $endpoint, [
            'headers' => [
                'Client-ID' => $this->clientId,
                'Authorization' => 'Bearer ' . $this->apiToken,
            ],
            'body' => $body,
        ]);

        return $response->toArray();
    }
}