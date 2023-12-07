export function initSearchGames() {

    console.log('Hello from searchGames.js');

    // Formulaire de recherche dynamique des jeux
    let searchTimeout;
    document.getElementById('search-form').addEventListener('submit', function (e) {
        e.preventDefault();

        let query = document.getElementById('search-input').value;

        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(function () {
            fetch('/search?query=' + query)
                .then(response => response.json())
                .then(data => {
                    let resultsDiv = document.getElementById('search-results');
                    resultsDiv.innerHTML = '';

                    let overlayDiv = document.createElement('div');
                    overlayDiv.className = 'overlay';

                    data.forEach(game => {
                        let gameLink = document.createElement('a');
                        gameLink.href = '/game/' + game.id;
                        gameLink.textContent = game.name;

                        let gameImage = document.createElement('img');
                        gameImage.src = game.cover ? game.cover.url : 'build/images/placeholder.jpg';
                        gameImage.alt = game.name;

                        let searchGameDiv = document.createElement('div');
                        searchGameDiv.className = 'search-game';
                        searchGameDiv.appendChild(gameImage);
                        searchGameDiv.appendChild(gameLink);

                        overlayDiv.appendChild(searchGameDiv);
                    });

                    resultsDiv.appendChild(overlayDiv);
                });
        }, 1000);
    });
}