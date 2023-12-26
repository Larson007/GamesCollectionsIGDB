export function gameFranchises() {
    const franchisesContent = document.querySelector('.franchises-content');
    const franchisesElement = document.querySelector('.collection_body');
    let franchises = JSON.parse(franchisesElement.getAttribute('data-franchises'));

    let currentIndexFranchises = 0;
    let currentGameIndexFranchises = 0;

    const displayGame = () => {
        let content = franchises;
        let item = content[currentIndexFranchises];
        let game = item.games[currentGameIndexFranchises];
        let franchise = franchises[currentIndexFranchises];

        // Cibler l'image active et mettre à jour son src
        const activeImage = document.querySelector('.cover_collection-active');
        activeImage.src = game.cover.url;

        // Cibler l'image de fond et mettre à jour son src
        const backgroundImage = document.querySelector('.background_image');
        backgroundImage.src = game.cover.url;

        // Cibler les autres images et mettre à jour leur src
        const otherImages = document.querySelectorAll('.cover_collection');
        otherImages.forEach((img, index) => {
            const game = franchise.games[currentGameIndexFranchises + index + 1];
            if (game) {
                img.src = game.cover.url;
            }
        });

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
        displayGame();
    });

    document.getElementById('previous-franchises').addEventListener('click', () => {
        if (currentGameIndexFranchises > 0) {
            currentGameIndexFranchises--;
        } else if (currentIndexFranchises > 0) {
            currentIndexFranchises--;
            currentGameIndexFranchises = franchises[currentIndexFranchises].games.length - 1; // Définir l'indice du jeu sur le dernier jeu de la franchise précédente
        }
        displayGame();
    });

    displayGame();
}