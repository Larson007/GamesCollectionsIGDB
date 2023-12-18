export function initGamesPopular() {
        console.log('gamesPopular.js');

        let currentButton = null;

        let buttonAll = document.querySelector('#popular-all');
        let buttonPopularFilter = document.querySelectorAll('.popular-platforms-filter');

        buttonAll.classList.add('active');

        buttonPopularFilter.forEach(function (button) {
            button.addEventListener('click', function () {
                //* Gestion active class
                buttonPopularFilter.forEach(function (button) {
                    button.classList.remove('active');
                });
                if (this.classList.contains('active')) {
                    filterShow.innerHTML = '';
                    this.classList.remove('active');
                    return;
                }
                this.classList.add('active');
                currentButton = this.id;


                console.log(currentButton);

                // Effectuer une requête AJAX en fonction de l'ID du bouton
                $.ajax({
                    url: '/popular', // Assurez-vous que cette URL est correcte
                    type: 'POST',
                    data: { buttonId: currentButton },
                    success: function(response) {
                        // Mettez à jour votre page avec la réponse ici
                        // Par exemple, si 'response' est un morceau de HTML, vous pouvez l'insérer dans un élément de votre page :
                        $('.popular-game-template').html(response);
                        // console.log(response);
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            });
        });
}