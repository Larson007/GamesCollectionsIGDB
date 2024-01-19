export function gameFranchises() {



    const franchisesButtons = document.querySelectorAll('.franchises_nav-buttons');
    const franchisesData = document.querySelector('.franchises_body');

    if (!franchisesData) {
        return;
    }

    let data = JSON.parse(franchisesData.dataset.franchises);

    if (!data) {
        return;
    }

    const franchisesNav = document.querySelector('.franchises_nav');
    const franchisesNavContent = document.querySelector('.franchises_nav-content');
    const firstButton = franchisesNav.querySelector('button');
    const firstButtonId = firstButton.id;
    const franchisesNavItems = franchisesNavContent.querySelectorAll('button');

    const franchisesNavigationButtons = document.querySelector('.franchises_nav-buttons-navigation');
    const franchisesNavNext = document.querySelector('.franchises_nav-link-next');
    const franchisesNavPrevious = document.querySelector('.franchises_nav-link-previous');


    // Ajouter la classe 'active' au premier bouton
    firstButton.classList.add('franchises_nav-active');

    let activeIndex = 0; // Index du bouton actif

    // Ajouter un écouteur d'événements à chaque bouton
    franchisesNavItems.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Retirer la classe 'active' de tous les boutons
            franchisesNavItems.forEach((btn) => {
                btn.classList.remove('franchises_nav-active');
            });

            // Ajouter la classe 'active' au bouton cliqué
            this.classList.add('franchises_nav-active');

            // Mettre à jour l'index actif
            activeIndex = index;
        });
    });

    if (franchisesNavItems.length <= 1) {
        franchisesNavigationButtons.style.display = 'none';

    } else {
        // Scroll horizontal avec la molette de la souris du menu
        franchisesNavContent.addEventListener('wheel', function (e) {
            e.preventDefault();
            this.scrollLeft += e.deltaY;
        }, { passive: false });
    }


    franchisesNavNext.addEventListener('click', function () {
        // Passer à la franchise suivante
        if (activeIndex < franchisesNavItems.length - 1) {
            franchisesNavItems[activeIndex].classList.remove('franchises_nav-active');

            // Mettre à jour l'index actif
            activeIndex++;

            // Mettre à jour l'affichage
            currentGameIndex = (currentGameIndex + 1) % games.length;
            displayFranchisesList(franchisesNavItems[activeIndex].id);
            displayFranchisesDetails(games[currentGameIndex]);

            // Faites défiler le conteneur pour centrer l'élément actif
            franchisesNavContent.scrollLeft = franchisesNavItems[activeIndex].offsetLeft
                - (franchisesNavContent.offsetWidth / 2)
                + (franchisesNavItems[activeIndex].offsetWidth / 2);

            franchisesNavItems[activeIndex].classList.add('franchises_nav-active');
        }
    });

    franchisesNavPrevious.addEventListener('click', function () {
        // Passer à la franchise précédente
        if (activeIndex > 0) {
            franchisesNavItems[activeIndex].classList.remove('franchises_nav-active');

            // Mettre à jour l'index actif
            activeIndex--;

            // Mettre à jour l'affichage
            currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
            displayFranchisesList(franchisesNavItems[activeIndex].id);
            displayFranchisesDetails(games[currentGameIndex]);

            // Faites défiler le conteneur pour centrer l'élément actif
            franchisesNavContent.scrollLeft = franchisesNavItems[activeIndex].offsetLeft
                - (franchisesNavContent.offsetWidth / 2)
                + (franchisesNavItems[activeIndex].offsetWidth / 2);

            franchisesNavItems[activeIndex].classList.add('franchises_nav-active');
        }
    });



    let currentGameIndex = 0;
    let games = [];

    function displayFranchisesList(franchiseId) {
        let franchise = data.find(franchise => franchise.id == franchiseId);

        games = franchise.games
            .filter(game => game.category === 0 && game.version_parent === undefined && game.cover !== undefined)
            .sort((a, b) => (b.first_release_date || 0) - (a.first_release_date || 0));

        let html = games.map((game, index) => {
            if (game.first_release_date) {
                return `
                    <div class="franchise_card ${index === currentGameIndex ? 'franchise_card-active' : ''}" data-game-id="${game.id}">
                        <div class="franchise_card-cover">
                            <img src="${game.cover ? game.cover.url : 'build/images/placeholder.jpg'}" alt="cover de ${game.name}" loading='lazy'>
                        </div>
                        <div class="franchise_card-body">
                            <div class="franchise_card-title">
                            <h3>${game.name.length > 40 ? game.name.substring(0, 40) + '...' : game.name}</h3>
                            </div>
                            <div class="franchise_card-released">
                                <p>${new Date(game.first_release_date * 1000).toLocaleDateString("fr-FR", { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
            return '';
        }).join('');

        let franchisesListGame = document.querySelector('.franchises_list-game');
        franchisesListGame.innerHTML = html;
    }

    function displayFranchisesDetails(game) {
        let html = `

                <div class="franchise_detail-cover">
                <a href="/game/${game.id}">
                <img src="${game.cover ? game.cover.url : 'public/build/images/placeholder.jpg'}" alt="cover de ${game.name}" loading='lazy'>
                </a>
                </div>
                <div class="franchise_detail-body">
                    <div class="franchise_detail-title">
                        <a href="/game/${game.id}">
                            <h3>${game.name}</h3>
                        </a>
                    </div>
                    <div class="franchise_detail-summary">
                        <p>${game.summary}</p>
                    </div>
                    <div class="franchise_detail-released">
                        <p>${game.first_release_date
                ? new Date(game.first_release_date * 1000).toLocaleDateString("fr-FR", { day: '2-digit', month: '2-digit', year: 'numeric' })
                : 'Date de sortie non disponible'
            }</p>
                    </div>
                </div>
                <div class="franchise_detail-platforms">
                    <h3>Platformes Displonibles :</h3>
                    <div class="franchise-platforms">
                        ${game.platforms.map(platform => `<p>${platform.abbreviation || platform.name}</p>`).join('')}
                    </div>
                </div>
        `;

        let franchiseDetail = document.querySelector('.franchise_detail');
        franchiseDetail.innerHTML = html;
    }

    displayFranchisesList(firstButtonId);
    displayFranchisesDetails(games[currentGameIndex]);

    let franchisesListGame = document.querySelector('.franchises_list-game');
    franchisesListGame.addEventListener('click', function (event) {
        let target = event.target;
        while (target != this) {
            if (target.className == 'franchise_card-cover') {
                let card = target.closest('.franchise_card');
                let gameId = card.getAttribute('data-game-id');
                let game = games.find(game => game.id == gameId);
                console.log(gameId);
                if (game) {
                    currentGameIndex = games.indexOf(game);
                    displayFranchisesDetails(game);
                    displayFranchisesList(currentFranchiseId); // Update the active game in the list
                }
                break;
            }
            target = target.parentNode;
        }
    });

    let currentFranchiseId = firstButtonId;

    // Bouttons franchises
    if (franchisesButtons) {
        franchisesButtons.forEach(button => {
            if (button) {
                button.addEventListener('click', function () {
                    currentFranchiseId = button.id;
                    currentGameIndex = 0; // Reset the current game index
                    displayFranchisesList(currentFranchiseId);
                    displayFranchisesDetails(games[currentGameIndex]);
                });
            }
        });
    }

    // Bouttons next et previous
    const franchiseNextButton = document.querySelector('#franchise-next');
    const franchisePreviousButton = document.querySelector('#franchise-previous');

    franchiseNextButton.addEventListener('click', function () {
        currentGameIndex = (currentGameIndex + 1) % games.length;
        displayFranchisesList(currentFranchiseId);
        displayFranchisesDetails(games[currentGameIndex]);
    });

    franchisePreviousButton.addEventListener('click', function () {
        currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
        displayFranchisesList(currentFranchiseId);
        displayFranchisesDetails(games[currentGameIndex]);
    });

}