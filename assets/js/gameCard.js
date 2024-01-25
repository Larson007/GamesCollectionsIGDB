export function gameCard() {
    addEventListenersToGameCards();
    console.log('gameCard');
}

let timeoutId;

function addEventListenersToGameCards() {
    let gameCardButtonsAndLinks = document.querySelectorAll('.game_card-collections button, .game_card-body a');
    const gameCard = document.querySelectorAll('.game_card, .last_tested_games');

    gameCard.forEach((card) => {
        card.addEventListener('mouseover', function () {
            let gameCardBody = this.querySelector('.game_card-body');
            gameCardBody.classList.add('game_card-body-active');
        });

        card.addEventListener('mouseout', function () {
            let gameCardBody = this.querySelector('.game_card-body');
            gameCardBody.classList.remove('game_card-body-active');
        });
    });

    if ('ontouchstart' in window) {
        gameCard.forEach((card) => {
            let gameCardBody = card.querySelector('.game_card-body');
            let gameCardButtonsAndLinks = card.querySelectorAll('button, a');

            let preventClick = function (event) {
                event.preventDefault();
            };

            gameCardButtonsAndLinks.forEach((buttonOrLink) => {
                buttonOrLink.addEventListener('click', preventClick);
            });

            card.addEventListener('touchstart', function (event) {
                event.stopPropagation();
                gameCardBody.classList.add('game_card-body-active');

                // Annule le setTimeout précédent
                clearTimeout(timeoutId);

                timeoutId = setTimeout(() => {
                    gameCardButtonsAndLinks.forEach((buttonOrLink) => {
                        buttonOrLink.removeEventListener('click', preventClick);
                        console.log('click');
                    });
                }, 1000);
            });

            // Supprime la classe lorsque vous faites glisser votre doigt sur l'écran
            gameCardBody.addEventListener('touchmove', function () {
                gameCardBody.classList.remove('game_card-body-active');
            });
        });
    }
}

// Appeler cette fonction chaque fois que vous mettez à jour le DOM
export function updateGameCards() {
    addEventListenersToGameCards();
}