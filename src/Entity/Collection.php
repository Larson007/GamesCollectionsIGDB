<?php

namespace App\Entity;

use App\Repository\CollectionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CollectionRepository::class)]
class Collection
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?array $games = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGames(): ?array
    {
        return $this->games;
    }

    public function setGames(?array $games): static
    {
        $this->games = $games;

        return $this;
    }
}
