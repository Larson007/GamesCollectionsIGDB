<?php

namespace App\Repository;

use App\Entity\UserUpdate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserUpdate>
 *
 * @method UserUpdate|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserUpdate|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserUpdate[]    findAll()
 * @method UserUpdate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserUpdateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserUpdate::class);
    }

//    /**
//     * @return UserUpdate[] Returns an array of UserUpdate objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('u.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?UserUpdate
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
