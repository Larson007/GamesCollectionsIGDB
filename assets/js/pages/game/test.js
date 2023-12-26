export function gameCollections() {


    function gameFranchises() {


        // Sélectionnez les boutons et le conteneur de la collection
        const collectionButtons = document.querySelectorAll('.collection_nav-link');
        const franchisesContent = document.querySelector('.franchises-content');
        const dlcsContent = document.querySelector('.dlcs-content');
        const expansionsContent = document.querySelector('.expansions-content');

        // Ajoutez un écouteur d'événements à chaque bouton
        collectionButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Obtenez l'ID du bouton sur lequel l'utilisateur a cliqué
                const buttonId = this.id;

                // Modifiez le contenu de collection_body en fonction de l'ID du bouton
                switch (buttonId) {
                    case 'collection-franchises-button':
                        franchisesContent.style.display = 'block';
                        dlcsContent.style.display = 'none';
                        expansionsContent.style.display = 'none';
                        displayGame('franchises'); // Affichez le contenu des franchises
                        break;
                    case 'collection-dlcs-button':
                        franchisesContent.style.display = 'none';
                        dlcsContent.style.display = 'block';
                        expansionsContent.style.display = 'none';
                        displayGame('dlcs'); // Affichez le contenu des dlcs
                        break;
                    case 'collection-expansions-button':
                        franchisesContent.style.display = 'none';
                        dlcsContent.style.display = 'none';
                        expansionsContent.style.display = 'block';
                        displayGame('expansions'); // Affichez le contenu des expansions
                        break;
                }
            });
        });

        // let currentIndex = 0;
        // let currentGameIndex = 0;

        let currentIndexFranchises = 0;
        let currentGameIndexFranchises = 0;
        let currentIndexDlcs = 0;
        let currentGameIndexDlcs = 0;
        let currentIndexExpansions = 0;
        let currentGameIndexExpansions = 0;
        const franchisesElement = document.querySelector('.collection_body');
        const dlcsElement = document.querySelector('.dlcs_body');
        const expansionsElement = document.querySelector('.expansions_body');
        let franchises;
        let dlcs;
        let expansions;

        franchises = JSON.parse(franchisesElement.getAttribute('data-franchises'));
        dlcs = JSON.parse(dlcsElement.getAttribute('data-dlcs'));
        expansions = JSON.parse(expansionsElement.getAttribute('data-expansions'));


        const displayGame = (contentType) => {
            let content;
            let item;
            let game;
            let franchise;
            switch (contentType) {
                case 'franchises':
                    content = franchises;
                    item = content[currentIndexFranchises];
                    game = item.games[currentGameIndexFranchises];
                    franchise = franchises[currentIndexFranchises];
                    break;
                case 'dlcs':
                    // content = dlcs;
                    // game = content[currentGameIndex];
                    // console.log(game);
                    content = dlcs;
                    item = content[currentIndexDlcs];
                    game = item.games[currentGameIndexDlcs];
                    break;
                case 'expansions':
                    // content = expansions;
                    // item = content[currentIndex];
                    // game = item.games[currentGameIndex];
                    content = expansions;
                    item = content[currentIndexExpansions];
                    game = item.games[currentGameIndexExpansions];
                    break;
            }

            // const item = content[currentIndex];
            // const game = item.games[currentGameIndex];
            // const franchise = franchises[currentIndex];

            if (contentType === 'franchises') {
                // Cibler l'image active et mettre à jour son src
                const activeImage = document.querySelector('.cover_collection-active');
                activeImage.src = game.cover.url;

                // Cibler l'image de fond et mettre à jour son src
                const backgroundImage = document.querySelector('.background_image');
                backgroundImage.src = game.cover.url;

                // Cibler les autres images et mettre à jour leur src
                const otherImages = document.querySelectorAll('.cover_collection');
                otherImages.forEach((img, index) => {
                    const game = franchise.games[currentGameIndex + index + 1];
                    if (game) {
                        img.src = game.cover.url;
                    }
                });
            } else {
                // Cibler l'image active et mettre à jour son src
                const activeImage = document.querySelector('.cover_collection-active');
                activeImage.src = game.cover.url;

                // Cibler l'image de fond et mettre à jour son src
                const backgroundImage = document.querySelector('.background_image');
                backgroundImage.src = game.cover.url;

                // Cibler les autres images et mettre à jour leur src
                const otherImages = document.querySelectorAll('.cover_collection');
                otherImages.forEach((img, index) => {
                    const game = content[currentGameIndex + index + 1];
                    if (game) {
                        img.src = game.cover.url;
                    }
                });
            }

            // Mettre à jour le titre du jeu
            document.querySelector('.collection_title').textContent = game.name;

            // Mettre à jour la description du jeu
            document.querySelector('.collection_summary').textContent = game.summary;

            // Mettre à jour les plateformes disponibles
            const platformsContainer = document.querySelector('.collection_platforms');
            platformsContainer.innerHTML = '';
            for (const platform of game.platforms) {
                const platformElement = document.createElement('p');
                platformElement.textContent = platform.abbreviation || platform.name;
                platformsContainer.appendChild(platformElement);
            }
        };

        document.getElementById('next-franchises').addEventListener('click', () => {
            if (currentGameIndexFranchises < franchises[currentIndexFranchises].games.length - 1) {
                currentGameIndexFranchises++;
            } else if (currentIndexFranchises < franchises.length - 1) {
                currentIndexFranchises++;
                currentGameIndexFranchises = 0; // Réinitialiser l'indice du jeu pour la nouvelle franchise
            }
            displayGame('franchises');
        });

        document.getElementById('previous-franchises').addEventListener('click', () => {
            if (currentGameIndexFranchises > 0) {
                currentGameIndexFranchises--;
            } else if (currentIndexFranchises > 0) {
                currentIndexFranchises--;
                currentGameIndexFranchises = franchises[currentIndexFranchises].games.length - 1; // Définir l'indice du jeu sur le dernier jeu de la franchise précédente
            }
            displayGame('franchises');
        });

        document.getElementById('next-dlcs').addEventListener('click', () => {
            if (currentGameIndexDlcs < dlcs[currentIndexDlcs].games.length - 1) {
                currentGameIndexDlcs++;
            } else if (currentIndexDlcs < dlcs.length - 1) {
                currentIndexDlcs++;
                currentGameIndexDlcs = 0; // Réinitialiser l'indice du jeu pour la nouvelle franchise
            }
            displayGame('dlcs');
        });

        document.getElementById('previous-dlcs').addEventListener('click', () => {
            if (currentGameIndexDlcs > 0) {
                currentGameIndexDlcs--;
            } else if (currentIndexDlcs > 0) {
                currentIndexDlcs--;
                currentGameIndexDlcs = dlcs[currentIndexDlcs].games.length - 1; // Définir l'indice du jeu sur le dernier jeu du dlc précédent
            }
            displayGame('dlcs');
        });

        document.getElementById('next-expansions').addEventListener('click', () => {
            if (currentGameIndex < franchises[currentIndex].games.length - 1) {
                currentGameIndex++;
            } else if (currentIndex < franchises.length - 1) {
                currentIndex++;
                currentGameIndex = 0; // Réinitialiser l'indice du jeu pour la nouvelle franchise
            }
            displayGame('expansions');
        });

        document.getElementById('previous-expansions').addEventListener('click', () => {
            if (currentGameIndex > 0) {
                currentGameIndex--;
            } else if (currentIndex > 0) {
                currentIndex--;
                currentGameIndex = franchises[currentIndex].games.length - 1; // Définir l'indice du jeu sur le dernier jeu de la franchise précédente
            }
            displayGame('expansions');
        });

        displayGame('franchises');
    }
    gameFranchises();
}