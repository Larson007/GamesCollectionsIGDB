<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PasswordUpdateFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('oldPassword', PasswordType::class, [
                'label' => 'Current Password',
                'attr' => [
                    'placeholder' => 'Enter your current password',
                    'readonly => true'
                ]
            ])
            ->add('newPassword', PasswordType::class, [
                'label' => 'New Password (min 6 characters)',
                'attr' => [
                    'placeholder' => 'Enter your new password',
                    'readonly => true'
                ]
            ])
            ->add('confirmPassword', PasswordType::class, [
                'label' => 'Confirm Password',
                'attr' => [
                    'placeholder' => 'Confirm your new password',
                    'readonly => true'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
