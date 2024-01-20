export function userGames() {

    const filterCollections = document.querySelector('#filterCollection');
    const filterLikes = document.querySelector('#filterLikes');
    const filterWishes = document.querySelector('#filterWishes');

    filterCollections.addEventListener('click', function () {
        const userCollections = this.getAttribute('data-collections');
        sendRequest('collections', userCollections);
    });

    filterLikes.addEventListener('click', function () {
        const userLikes = this.getAttribute('data-likes');
        sendRequest('likes', userLikes);
    });

    filterWishes.addEventListener('click', function () {
        const userWishes = this.getAttribute('data-wishes');
        sendRequest('wishes', userWishes);
    });

}

function sendRequest(filterType, data) {
    $.ajax({
        url: '/user/collection',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ filterType: filterType, data: data }),
        success: function(response) {
            // Faites quelque chose avec les données
            $('.user-game-template').html(response);
            console.log(data);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}