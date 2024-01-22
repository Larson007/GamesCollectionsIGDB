export function userGames() {

    const gameCarte = document.querySelectorAll('.game-carte');

    const filterCollections = document.getElementById('filterCollections');
    const filterLikes = document.getElementById('filterLikes');
    const filterWishes = document.getElementById('filterWishes');
    const filterPlatforms = document.querySelectorAll('.filterPlatforms');

    // Masquer les cartes de jeu automatiquement si elle est supprimée par l'utilisateur
    function hideDeletedGameCards() {
        gameCarte.forEach(function (cardGame) {
            if (cardGame.classList.contains('game-deleted')) {
                cardGame.style.display = 'none';
            }
        });
    }



    filterCollections.addEventListener('click', function () {
        // Trier les jeux par collections
        console.log('filtre par collections');
        this.classList.toggle('filterCollections-active');
        filterLikes.classList.remove('filterLikes-active');
        filterWishes.classList.remove('filterWishes-active');
        filterPlatforms.forEach(function (button) {
            button.classList.remove('filterPlatforms-active');
        });

        gameCarte.forEach(function (cardGame) {
            let buttons = cardGame.querySelectorAll('.collection_button');
            let hasRemoveCollectionClass = Array.from(buttons).some(button =>
                button.classList.contains('remove-collection')
            );

            if (this.classList.contains('filterCollections-active')) {
                if (!hasRemoveCollectionClass) {
                    cardGame.style.display = 'none';
                } else {
                    cardGame.style.display = 'flex';
                }
            } else {
                cardGame.style.display = 'flex';
            }
        }.bind(this));

        hideDeletedGameCards();
    });



    filterLikes.addEventListener('click', function () {
        // Trier les jeux par likes
        console.log('filtre par likes');
        this.classList.toggle('filterLikes-active');
        filterCollections.classList.remove('filterCollections-active');
        filterWishes.classList.remove('filterWishes-active');
        filterPlatforms.forEach(function (button) {
            button.classList.remove('filterPlatforms-active');
        });

        gameCarte.forEach(function (cardGame) {
            let buttons = cardGame.querySelectorAll('.collection_button');
            let hasRemoveLikeClass = Array.from(buttons).some(button =>
                button.classList.contains('remove-like')
            );

            if (this.classList.contains('filterLikes-active')) {
                if (!hasRemoveLikeClass) {
                    cardGame.style.display = 'none';
                } else {
                    cardGame.style.display = 'flex';
                }
            } else {
                cardGame.style.display = 'flex';
            }
        }.bind(this));

        hideDeletedGameCards();
    });

    filterWishes.addEventListener('click', function () {
        // Trier les jeux par liste de souhaits
        console.log('filtre par liste de souhaits');
        this.classList.toggle('filterWishes-active');
        filterCollections.classList.remove('filterCollections-active');
        filterLikes.classList.remove('filterLikes-active');
        filterPlatforms.forEach(function (button) {
            button.classList.remove('filterPlatforms-active');
        });

        gameCarte.forEach(function (cardGame) {
            let buttons = cardGame.querySelectorAll('.collection_button');
            let hasRemoveWishlistClass = Array.from(buttons).some(button =>
                button.classList.contains('remove-wishlist')
            );

            if (this.classList.contains('filterWishes-active')) {
                if (!hasRemoveWishlistClass) {
                    cardGame.style.display = 'none';
                } else {
                    cardGame.style.display = 'flex';
                }
            } else {
                cardGame.style.display = 'flex';
            }
        }.bind(this));

        hideDeletedGameCards();
    });

    filterPlatforms.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log('Button clicked: ' + this.id);
            this.classList.toggle('filterPlatforms-active');
            filterCollections.classList.remove('filterCollections-active');
            filterLikes.classList.remove('filterLikes-active');
            filterWishes.classList.remove('filterWishes-active');
            hideDeletedGameCards();

            // Retirer la classe filterPlatforms-active des autres éléments
            filterPlatforms.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('filterPlatforms-active');
                }
            });

            let buttonPlatformId = 'platform_id-' + this.id; // Obtient l'ID de la plateforme à partir de l'ID du bouton

            // Filtre les cartes de jeu par plateforme
            gameCarte.forEach(function (gameCard) {
                let gameCardPlatforms = gameCard.querySelectorAll('.carte-platforms'); // Obtient toutes les plateformes de la carte de jeu
                let hasPlatform = Array.from(gameCardPlatforms).some(platform => platform.id === buttonPlatformId); // Vérifie si la carte de jeu a la plateforme

                if (this.classList.contains('filterPlatforms-active')) {
                    if (!hasPlatform) {
                        gameCard.style.display = 'none';
                    } else {
                        gameCard.style.display = 'flex';
                    }
                } else {
                    gameCard.style.display = 'flex';
                }
            }.bind(this));

            hideDeletedGameCards();
        });
    });



}
