<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UserUpdateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        // get current user
        $current_user = $options['data'];

        $builder
            ->add('email', TextType::class, [
                'attr' => ['placeholder' => $current_user->getEmail(), 'readonly' => true],
                'label' => false,
                'required' => false,
                // 'disabled' => false,
            ])
            // ->add('password', PasswordType::class, [
            //     // instead of being set onto the object directly,
            //     // this is read and encoded in the controller
            //     'mapped' => false,
            //     'attr' => [
            //         'placeholder' => 'New Password',
            //         'readonly' => true
            //     ],
            //     'constraints' => [
            //         new NotBlank([
            //             'message' => 'Please enter a password',
            //         ]),
            //         new Length([
            //             'min' => 6,
            //             'minMessage' => 'Your password should be at least {{ limit }} characters',
            //             // max length allowed by Symfony for security reasons
            //             'max' => 4096,
            //         ]),
            //     ],
            //     'label' => false,
            // ])
            ->add('pseudo', TextType::class, [
                'attr' => ['placeholder' => $current_user->getPseudo(), 'readonly' => true],
                'label' => false,
                'required' => false,
                // 'disabled' => false,
            ])
            ->add('avatar', FileType::class, [
                'data_class' => null,
                'data' => $current_user->getAvatar(),
                'mapped' => false,
                'required' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'current_user' => null,
        ]);
    }
}
