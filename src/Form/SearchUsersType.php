<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class SearchUsersType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('id', HiddenType::class)
            ->add('pseudo', TextType::class, [
                'attr' => ['class' => 'form-control', 'placeholder' => 'RECHERCHER UN AUTRE UTILISATEUR', 'aria-label'=>"RECHERCHER UN AUTRE UTILISATEUR", 'aria-describedby' => 'basic-addon2'],
            ])
            ->add('avatar', HiddenType::class)
            ->add('friends', HiddenType::class)
            ->add('collection', HiddenType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
