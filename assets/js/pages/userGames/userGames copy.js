export function userGames() {

    const filterAllGames = document.querySelector('.filter_collections');

    if (!filterAllGames) {
        return
    }

    const filterButtons = document.querySelectorAll('.user_filter_button');
    const filterCollections = document.querySelector('#filterCollections');
    const filterLikes = document.querySelector('#filterLikes');
    const filterWishes = document.querySelector('#filterWishes');

    const allGames = filterAllGames.getAttribute('data-all');

console.log(allGames);

    filterCollections.addEventListener('click', function () {
        const userCollections = this.getAttribute('data-collections');
        handleFilterClick(this, filterButtons);
        sendRequest('collections', userCollections);
    });

    filterLikes.addEventListener('click', function () {
        const userLikes = this.getAttribute('data-likes');
        handleFilterClick(this, filterButtons);
        const removeLike = document.querySelectorAll('.game-card.remove-like');
        if (removeLike.length > 0) {
            sendRequest('likes', userLikes);
        } else {
            toastr.error('Vous ne pouvez pas voir vos jeux aimés si vous n\'en avez pas !');
        }
    });

    filterWishes.addEventListener('click', function () {
        const userWishes = this.getAttribute('data-wishes');
        handleFilterClick(this, filterButtons);
        sendRequest('wishes', userWishes);
    });

}

function handleFilterClick(clickedButton, filterButtons) {
    filterButtons.forEach(button => {
        if (button === clickedButton) {
            button.classList.toggle('filter-active');
        } else {
            button.classList.remove('filter-active');
        }
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