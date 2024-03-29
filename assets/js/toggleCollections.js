import toastr from 'toastr';

export function toggleCollections() {
    console.log('toggleCollections');
    // Sélectionnez tous les boutons avec la classe 'collection_button'
    let buttons = document.querySelectorAll('.collection_button');

    // Parcourez chaque bouton
    buttons.forEach((button) => {
        // Ajoutez un écouteur d'événements 'click' à chaque bouton
        button.addEventListener('click', function () {
            // Récupérez l'attribut 'class' du bouton
            let buttonClass = this.getAttribute('class');

            console.log(buttonClass);

            // Récupérez l'ID du jeu à partir de l'attribut 'data-gameId' du bouton
            let gameId = this.getAttribute('data-gameId');



            //* Si le bouton a la classe 'add-collection'
            // Vérifiez si le bouton a la classe 'add-collection'
            if (buttonClass.includes('add-collection')) {
                // Envoyez une requête POST à l'API pour ajouter le jeu à la collection
                fetch('/add-collection', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `gameId=${gameId}`,
                })
                .then(response => {
                    if (response.status === 403) {
                        // Si le statut de la réponse est 403, affichez l'overlay
                        document.getElementById('overlay-connection').style.display = 'flex';
                    } else if (!response.ok) {
                        // Si le statut de la réponse n'est pas ok, renvoyez la réponse en tant qu'objet JSON
                        return response.json();
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        // Si l'ajout a réussi, changez la classe du bouton en 'remove-collection'
                        this.classList.remove('add-collection');
                        this.classList.add('remove-collection');
                    } else {
                        // Si l'ajout a échoué, lancez une erreur avec le message d'erreur
                        throw new Error(data.error);
                    }
                })
                .catch((error) => {
                    toastr.error("Vous devez être connecté pour ajouter un jeu à votre collection");
                    console.error('Erreur:', error.message);
                });
            } else if (buttonClass.includes('remove-collection')) {
                // Envoyez une requête POST à l'API pour supprimer le jeu de la collection
                fetch('/remove-collection', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `gameId=${gameId}`,
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Si la suppression a réussi, changez la classe du bouton en 'add-collection'
                        this.classList.remove('remove-collection');
                        this.classList.add('add-collection');

                        // Si aucun autre bouton de la carte n'a la classe 'remove-collection', masquez la carte
                        hideCardGameIfNoRemoveClass(gameId);

                    } else {
                        // Si la suppression a échoué, affichez une erreur
                        console.error('Erreur lors de la suppression du jeu de la collection');
                    }
                })
                .catch((error) => {
                    console.error('Erreur:', error);
                });
            }



            //* Si le bouton a la classe 'add-like
            if (buttonClass.includes('add-like')) {
                fetch('/add-like', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `gameId=${gameId}`,
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        this.classList.remove('add-like');
                        this.classList.add('remove-like');
                    } else {
                        console.error('Erreur lors de l\'ajout du jeu aux likes');
                    }
                })
                .catch((error) => {
                    toastr.error("Vous devez être connecté pour ajouter un jeu à vos likes");
                    console.error('Erreur:', error);
                });
            } else if (buttonClass.includes('remove-like')) {
                fetch('/remove-like', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `gameId=${gameId}`,
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        this.classList.remove('remove-like');
                        this.classList.add('add-like');
                        
                        // Si aucun autre bouton de la carte n'a la classe 'remove-collection', masquez la carte
                        hideCardGameIfNoRemoveClass(gameId);

                    } else {
                        console.error('Erreur lors de la suppression du jeu des likes');
                    }
                })
                .catch((error) => {
                    console.error('Erreur:', error);
                });
            }



            //* Si le bouton a la classe 'add-wishlist
            if (buttonClass.includes('add-wishlist')) {
                fetch('/add-wish', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `gameId=${gameId}`,
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        this.classList.remove('add-wishlist');
                        this.classList.add('remove-wishlist');
                    } else {
                        console.error('Erreur lors de l\'ajout du jeu à la wishlist');
                    }
                })
                .catch((error) => {
                    toastr.error("Vous devez être connecté pour ajouter un jeu à votre wishlist");
                    console.error('Erreur:', error);
                });
            } else if (buttonClass.includes('remove-wishlist')) {
                fetch('/remove-wish', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `gameId=${gameId}`,
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        this.classList.remove('remove-wishlist');
                        this.classList.add('add-wishlist');
                        
                        // Si aucun autre bouton de la carte n'a la classe 'remove-collection', masquez la carte
                        hideCardGameIfNoRemoveClass(gameId);

                    } else {
                        console.error('Erreur lors de la suppression du jeu de la wishlist');
                    }
                })
                .catch((error) => {
                    console.error('Erreur:', error);
                });
            }
            //* Si le bouton a la classe 'delete-all'
            if (buttonClass.includes('delete-all')) {
                fetch('/delete-all', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `gameId=${gameId}`,
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        toastr.success("Le jeu a bien été supprimée");
                        let cardGame = document.getElementById(gameId);
                        cardGame.classList.add('game-deleted');
                        cardGame.style.display = 'none';
                    } else {
                        console.error('Erreur lors de l\'a suppression du jeu');
                    }
                })
                .catch((error) => {
                    toastr.error("Vous devez être connecté pour supprimer un jeu");
                    console.error('Erreur:', error);
                });
            }

            
        });
    });
}

//* Fonction pour masquer la carte du jeu si aucun autre bouton de la carte n'a la classe 'remove-collection' dans userGamesCollection
function hideCardGameIfNoRemoveClass(gameId) {
    let cardGame = document.getElementById(gameId);
    if (cardGame) {
        let buttons = cardGame.querySelectorAll('.collection_button');
        let hasRemoveClass = Array.from(buttons).some(button => 
            button.classList.contains('remove-collection') ||
            button.classList.contains('remove-like') ||
            button.classList.contains('remove-wishlist')
        );

        if (!hasRemoveClass) {
            cardGame.style.display = 'none';
            toastr.success("Le jeu a bien été supprimée");
            console.log(cardGame);
        }
    }
}