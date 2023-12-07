export function initSearchFriends() {
    
    console.log('Hello from searchFriends.js');

    // Formulaire de recherche dynamique des amis
    document.getElementById('search-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var pseudo = document.querySelector('input[name="form[pseudo]"]').value;

        fetch('/user/friends', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'form[pseudo]': pseudo
            })
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(function (html) {
                document.getElementById('friend-search-results').innerHTML = html;
            })
            .catch(function (error) {
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
}