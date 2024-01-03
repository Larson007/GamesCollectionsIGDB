export function gameFranchises() {

const franchisesButtons = document.querySelectorAll('.franchises_nav-buttons');
const franchisesData = document.querySelector('.franchises_body');
let data = JSON.parse(franchisesData.dataset.franchises);

// Fonction pour générer le HTML pour un seul jeu
function generateGameHtml(game) {
    if (game.first_release_date) {
        let gameHtml = document.createElement('div');
        gameHtml.classList.add('franchise_card');
        gameHtml.innerHTML = `
            <div class="franchise_card-cover">
                <img src="${game.cover.url}" alt="cover de ${game.name}" loading='lazy'>
            </div>
            <div class="franchise_card-body">
                <div class="franchise_card-title">
                    <h3>${game.name}</h3>
                </div>
                <div class="franchise_card-released">
                    <p>${new Date(game.first_release_date * 1000).toLocaleDateString("fr-FR", { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                </div>
            </div>
        `;

        // Ajouter un écouteur d'événements click aux éléments du nom et de la couverture du jeu
        gameHtml.querySelector('.franchise_card-cover img').addEventListener('click', () => generateGameDetailsHtml(game));
        gameHtml.querySelector('.franchise_card-title h3').addEventListener('click', (event) => {
            event.preventDefault();
            generateGameDetailsHtml(game);
        });

        return gameHtml.outerHTML;
    }
    return '';
}

// Fonction pour générer le HTML pour les jeux d'une franchise
function generateGamesHtml(franchise) {
    if (franchise && franchise.games) {
        let filteredGames = franchise.games
            .filter(game => game.category === 0 && game.version_parent === undefined)
            .sort((a, b) => (b.first_release_date || 0) - (a.first_release_date || 0));
        
        let franchiseGameList = filteredGames.map(generateGameHtml).join('');
        document.querySelector('.franchises_list-game').innerHTML = franchiseGameList;
    } else {
        console.log('Aucune franchise trouvée avec cet ID ou la franchise n\'a pas de jeux');
    }
}

// Fonction pour générer le HTML pour les détails d'un jeu
function generateGameDetailsHtml(game) {
    if (game) {
        let html = `
            <div class="franchise_detail-cover">
                <img src="${game.cover.url}" alt="cover de ${game.name}">
                <div class="add_collections">
                    <button class="add_collections-collection">add</button>
                    <button class="add_collections-like">like</button>
                    <button class="add_collections-wishlist">wish</button>
                </div>
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
                    <p>${new Date(game.first_release_date * 1000).toLocaleDateString("fr-FR", { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                </div>
            </div>
            <div class="franchise_detail-platforms">
                <h3>Platformes Displonibles :</h3>
                <div class="franchise-platforms">
                    ${game.platforms.map(platform => `<p>${platform.abbreviation || platform.name}</p>`).join('')}
                </div>
            </div>
        `;

        document.querySelector('.franchise_detail').innerHTML = html;
    } else {
        console.log('Aucun jeu trouvé avec cet ID');
    }
}

// Trouver la première franchise qui contient le champ 'games' et générer le HTML pour ses jeux
let firstFranchiseWithGames = data.find(franchise => franchise.games && franchise.games.length > 0);
generateGamesHtml(firstFranchiseWithGames);

if (franchisesButtons) {
    franchisesButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', function () {
                const franchiseId = this.id;
                let franchise = data.find(franchise => franchise.id == franchiseId);

                // Générer le HTML pour les jeux de la franchise sélectionnée
                generateGamesHtml(franchise);
            });
        }
    });
}






    const franchiseNextButton = document.querySelector('#franchise-next');
    const franchisePreviousButton = document.querySelector('#franchise-previous');

    franchiseNextButton.addEventListener('click', function () {
        console.log('franchiseNextButton');
    });
    franchisePreviousButton.addEventListener('click', function () {
        console.log('franchisePreviousButton');
    });

}