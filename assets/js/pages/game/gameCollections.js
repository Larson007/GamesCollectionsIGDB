export function gameCollections() {


    // verfier sir la div avec la class game_collection existe
    const gameCollection = document.querySelector('.game_collection');
    if (!gameCollection) {
        console.log('Pas de collection/dlcs/expansions pour ce jeu.');
        return; // Arrête l'exécution de la fonction
    }

    // Définir collectionType par défaut
    let collectionType;


    // Collection nav buttons
    const collectionNavButtons = document.querySelectorAll('.collection_nav-link');
    const collectionNavButtonSeries = document.querySelector('#collection_button-series');
    const collectionNavButtonDlcs = document.querySelector('#collection_button-dlcs');
    const collectionNavButtonExpansions = document.querySelector('#collection_button-expansions');

    if (collectionNavButtons) {
        collectionNavButtons.forEach(button => {
            if (button) {
                button.addEventListener('click', function () {
                    const buttonId = this.id;
                    switch (buttonId) {
                        case 'collection_button-series':
                            if (collectionNavButtonSeries) {
                                collectionNavButtonSeries.classList.add('collection_nav-link-active');
                            }
                            if (collectionNavButtonDlcs) {
                                collectionNavButtonDlcs.classList.remove('collection_nav-link-active');
                            }
                            if (collectionNavButtonExpansions) {
                                collectionNavButtonExpansions.classList.remove('collection_nav-link-active');
                            }
                            collectionType = 'series';
                            currentIndexCollection = 0;
                            break;
                        case 'collection_button-dlcs':
                            if (collectionNavButtonSeries) {
                                collectionNavButtonSeries.classList.remove('collection_nav-link-active');
                            }
                            if (collectionNavButtonDlcs) {
                                collectionNavButtonDlcs.classList.add('collection_nav-link-active');
                            }
                            if (collectionNavButtonExpansions) {
                                collectionNavButtonExpansions.classList.remove('collection_nav-link-active');
                            }
                            collectionType = 'dlcs';
                            currentIndexCollection = 0;
                            break;
                        case 'collection_button-expansions':
                            if (collectionNavButtonSeries) {
                                collectionNavButtonSeries.classList.remove('collection_nav-link-active');
                            }
                            if (collectionNavButtonDlcs) {
                                collectionNavButtonDlcs.classList.remove('collection_nav-link-active');
                            }
                            if (collectionNavButtonExpansions) {
                                collectionNavButtonExpansions.classList.add('collection_nav-link-active');
                            }
                            collectionType = 'expansions';
                            currentIndexCollection = 0;
                            break;
                    }
                    displayCollection(collectionType);
                });
            }
        });
    } else {
        console.error('Les boutons de navigation de collection sont manquants.');
    }

    // Display collection
    let currentIndexCollection = 0;
    const collectionBody = document.querySelector('.collection_body');
    let collectionData = JSON.parse(collectionBody.getAttribute('data-collection'));
    let data;

    // si collectionData contient collection/dlcs/expansions
    if (collectionData.collection) {
        collectionType = 'series';
        currentIndexCollection = 0;
    } else if (collectionData.dlcs) {
        collectionType = 'dlcs';
        currentIndexCollection = 0;
    } else if (collectionData.expansions) {
        collectionType = 'expansions';
        currentIndexCollection = 0;
    }


    function displayCollection(collectionType) {
        // Vérifier si collection, dlcs ou expansions sont null
        if (collectionData.collection === null || collectionData.dlcs === null || collectionData.expansions === null) {
            console.error('Les données de collection, dlcs ou expansions sont manquantes.');
            return; // Arrête l'exécution de la fonction
        }

        switch (collectionType) {
            case 'series':

                collectionData.collection.games = collectionData.collection.games
                    .filter(game => game.category === 0 && !('version_parent' in game))
                    .sort((a, b) => b.first_release_date - a.first_release_date);

                data = collectionData.collection.games;
                // console.log(data);
                break;
            case 'dlcs':
                data = collectionData.dlcs;
                // console.log(data);
                break;
            case 'expansions':
                data = collectionData.expansions;
                // console.log(data);
                break;
        }

        const currentGame = data[currentIndexCollection];

        const index = currentIndexCollection % data.length;

        const collectionInformations = document.querySelector('.left_informations');
        if (collectionType === 'series') {
            // Affichage du titre de la collection collection
            const collectionSeriesTitle = document.createElement('h3');
            collectionSeriesTitle.classList.add('collection_series-title');
            collectionSeriesTitle.textContent = 'Jeux de la serie';

            // Affichage du nom de la collection
            const collectionSeriesName = document.createElement('h4');
            collectionSeriesName.classList.add('collection_series-name');
            collectionSeriesName.textContent = collectionData.collection.name;

            // Affichage du nom du jeu
            const collectionTitle = document.createElement('h2');
            collectionTitle.classList.add('collection_title');
            collectionTitle.textContent = data[index].name;

            // Affichage de la descrpition summary du jeu
            const collectionSummary = document.createElement('p');
            collectionSummary.classList.add('collection_summary');
            let summaryText = data[index].summary;
            if (summaryText.length > 800) { // Limite à 100 caractères
                summaryText = summaryText.substring(0, 800) + '...'; // Ajoute '...' à la fin
            }
            collectionSummary.textContent = summaryText;

            collectionInformations.innerHTML = '';
            collectionInformations.appendChild(collectionSeriesTitle);
            collectionInformations.appendChild(collectionSeriesName);
            collectionInformations.appendChild(collectionTitle);
            collectionInformations.appendChild(collectionSummary);


        } if (collectionType === 'dlcs') {
            // Affichage du titre de la collection 
            const collectionGameTitle = document.createElement('h3');
            collectionGameTitle.classList.add('collection_series-title');
            collectionGameTitle.textContent = 'DLCS';

            // Affichage du nom du jeu DLCS et Expansions
            const collectionTitle = document.createElement('h2');
            collectionTitle.classList.add('collection_title');
            collectionTitle.textContent = data[index].name;

            // Affichage de la descrpition summary du jeu
            const collectionSummary = document.createElement('p');
            collectionSummary.classList.add('collection_summary');
            let summaryText = data[index].summary;
            if (summaryText.length > 100) { // Limite à 100 caractères
                summaryText = summaryText.substring(0, 100) + '...'; // Ajoute '...' à la fin
            }
            collectionSummary.textContent = summaryText;

            collectionInformations.innerHTML = '';
            collectionInformations.appendChild(collectionGameTitle);
            collectionInformations.appendChild(collectionTitle);
            collectionInformations.appendChild(collectionSummary);
        } if (collectionType === 'expansions') {
            // Affichage du titre de la collection 
            const collectionGameTitle = document.createElement('h3');
            collectionGameTitle.classList.add('collection_series-title');
            collectionGameTitle.textContent = 'Extansions';

            // Affichage du nom du jeu DLCS et Expansions
            const collectionTitle = document.createElement('h2');
            collectionTitle.classList.add('collection_title');
            collectionTitle.textContent = data[index].name;

            // Affichage de la descrpition summary du jeu
            const collectionSummary = document.createElement('p');
            collectionSummary.classList.add('collection_summary');
            let summaryText = data[index].summary;
            if (summaryText.length > 100) { // Limite à 100 caractères
                summaryText = summaryText.substring(0, 100) + '...'; // Ajoute '...' à la fin
            }
            collectionSummary.textContent = summaryText;

            collectionInformations.innerHTML = '';
            collectionInformations.appendChild(collectionGameTitle);
            collectionInformations.appendChild(collectionTitle);
            collectionInformations.appendChild(collectionSummary);

        }



        // Affichage des plateformes
        const collectionPlatforms = document.querySelector('.collections_platforms');
        collectionPlatforms.innerHTML = '';
        for (const platform of data[index].platforms) {
            const platformElement = document.createElement('p');
            platformElement.textContent = platform.abbreviation || platform.name;
            collectionPlatforms.appendChild(platformElement);
        }

        // Affiche des images de couverture
        const collectionImages = document.querySelector('.left_covers');

        const collectionCoverActive = document.querySelector('.collection_cover-active');

        const collectionCovers = document.querySelector('.collection_covers');

        const collectionCoverBackground = document.querySelector('.collection_cover-background');

        // Image active
        collectionCoverActive.innerHTML = '';
        let linkElement = document.createElement('a');
        linkElement.href = `/game/${currentGame.id}`;
        let imgElement = document.createElement('img');
        imgElement.src = currentGame.cover ? currentGame.cover.url : '/build/images/placeholder.jpg';
        imgElement.alt = currentGame.name;

        linkElement.appendChild(imgElement);
        collectionCoverActive.appendChild(linkElement);


        // Image de fond
        collectionCoverBackground.innerHTML = '';
        let imgElementBackground = document.createElement('img');
        imgElementBackground.src = currentGame.cover.url;
        collectionCoverBackground.appendChild(imgElementBackground);

        // Autres images
        collectionCovers.innerHTML = '';
        if (data.length > 1) {
            collectionCovers.style.display = '';
            for (let i = 0; i < 2; i++) {
                const index = (currentIndexCollection + i + 1) % data.length; // Utilisation de l'opérateur modulo pour boucler sur le tableau
                const collectionCover = document.createElement('img');
                // Si nous sommes sur la dernière image active, afficher l'image du premier jeu
                collectionCover.src = (currentIndexCollection === data.length - 1) ? data[i].cover.url : (data[index].cover ? data[index].cover.url : '/build/images/placeholder.jpg');
                collectionCovers.appendChild(collectionCover);
            }
        } else {
            collectionCovers.style.display = 'none';
        }


    }

    //* Permet de savoir si on est sur la page collection, dlcs ou expansions pour lui mettre la class active
    if (collectionNavButtonSeries) {
        collectionNavButtonSeries.classList.add('collection_nav-link-active');
        collectionType = 'series';
    } else if (collectionNavButtonDlcs) {
        collectionNavButtonDlcs.classList.add('collection_nav-link-active');
        collectionType = 'dlcs';
    } else if (collectionNavButtonExpansions) {
        collectionNavButtonExpansions.classList.add('collection_nav-link-active');
        collectionType = 'expansions';
    }
    currentIndexCollection = 0;
    displayCollection(collectionType);

    // Bouttons Next/Previous
    const collectionNextButton = document.querySelector('#collection-next');
    const collectionPreviousButton = document.querySelector('#collection-previous');
    collectionNextButton.addEventListener('click', function () {
        currentIndexCollection++;
        if (currentIndexCollection > data.length - 1) {
            currentIndexCollection = 0;
        }
        displayCollection(collectionType);
    });
    collectionPreviousButton.addEventListener('click', function () {
        currentIndexCollection--;
        if (currentIndexCollection < 0) {
            currentIndexCollection = data.length - 1;
        }
        displayCollection(collectionType);
    });

    // Appel de la fonction displayCollection (par defaut series) car definit plus haut
    displayCollection(collectionType);
}