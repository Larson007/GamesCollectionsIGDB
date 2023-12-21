export function filterCollectionsToggle() {
    // Sélectionnez tous les boutons avec la classe 'collection_button'
    let buttons = document.querySelectorAll('.collection_button');

    // Parcourez chaque bouton
    buttons.forEach((button) => {
        // Ajoutez un écouteur d'événements 'click' à chaque bouton
        button.addEventListener('click', function () {
            // Récupérez l'attribut 'class' du bouton
            let buttonClass = this.getAttribute('class');

            // Récupérez l'ID du jeu à partir de l'attribut 'data-gameId' du bouton
            let gameId = this.getAttribute('data-gameId');

            // Vérifiez si le bouton a la classe 'add-collection'
            if (buttonClass.includes('add-collection')) {
                // Envoyez une requête POST à l'API pour ajouter le jeu à la collection
                fetch('/add-to-collection', {
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
                    console.error('Erreur:', error.message);
                });
            } else if (buttonClass.includes('remove-collection')) {
                // Envoyez une requête POST à l'API pour supprimer le jeu de la collection
                fetch('/remove-from-collection', {
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
                    } else {
                        // Si la suppression a échoué, affichez une erreur
                        console.error('Erreur lors de la suppression du jeu de la collection');
                    }
                })
                .catch((error) => {
                    console.error('Erreur:', error);
                });
            }

            // Faites de même pour 'add-like' et 'remove-like'
            // Faites de même pour 'add-wishlist' et 'remove-wishlist'
        });
    });
}