export function gameCollections() {
    let currentIndex = 0;
    let currentGameIndex = 0;
    const franchisesElement = document.querySelector('.collection_body');
    let franchises;

    try {
        franchises = JSON.parse(franchisesElement.getAttribute('data-franchises'));
    } catch (error) {
        console.error('Erreur lors de la conversion des données de franchises en JSON :', error);
        return;
    }

    const displayGame = () => {
        const franchise = franchises[currentIndex];
        const game = franchise.games[currentGameIndex];
    
        // Cibler l'image active et mettre à jour son src
        const activeImage = document.querySelector('.cover_collection-active');
        activeImage.src = game.cover.url;
    
        // Cibler l'image de fond et mettre à jour son src
        const backgroundImage = document.querySelector('.background_image');
        backgroundImage.src = game.cover.url;
    
        // Cibler les autres images et mettre à jour leur src
        const otherImages = document.querySelectorAll('.cover_collection');
        otherImages.forEach((img, index) => {
            if (index !== currentGameIndex && index < franchise.games.length) {
                img.src = franchise.games[index].cover.url;
            }
        });

        // Mettre à jour le titre du jeu
        document.querySelector('.collection_title').textContent = game.name;

        // Mettre à jour les plateformes disponibles
        const platformsContainer = document.querySelector('.collection_platforms');
        platformsContainer.innerHTML = '';
        for (const platform of game.platforms) {
            const platformElement = document.createElement('p');
            platformElement.textContent = platform.abbreviation || platform.name;
            platformsContainer.appendChild(platformElement);
        }
    };

    document.getElementById('next-category').addEventListener('click', () => {
        console.log(currentIndex, currentGameIndex);
        if (currentGameIndex < franchises[currentIndex].games.length - 1) {
            currentGameIndex++;
            displayGame();
        } else if (currentIndex < franchises.length - 1) {
            currentIndex++;
            currentGameIndex = 0; // Réinitialiser l'indice du jeu pour la nouvelle franchise
            displayGame();
        }
    });

    document.getElementById('previous-category').addEventListener('click', () => {
        console.log(currentIndex, currentGameIndex);
        if (currentGameIndex > 0) {
            currentGameIndex--;
            displayGame();
        } else if (currentIndex > 0) {
            currentIndex--;
            currentGameIndex = franchises[currentIndex].games.length - 1; // Définir l'indice du jeu sur le dernier jeu de la franchise précédente
            displayGame();
        }
    });

    displayGame();
}