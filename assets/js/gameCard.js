export function gameCard() {
    addEventListenersToGameCards();
    console.log('gameCard');
}

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

                setTimeout(() => {
                    gameCardButtonsAndLinks.forEach((buttonOrLink) => {
                        buttonOrLink.removeEventListener('click', preventClick);
                        console.log('click');
                    });
                }, 500);
            });
        });
    }
    // if (window.innerWidth <= 768) {
    //     gameCard.forEach((card) => {
    //         let gameCardBody = card.querySelector('.game_card-body');
    //         let gameCardButtonsAndLinks = card.querySelectorAll('button, a');

    //         let preventClick = function (event) {
    //             event.preventDefault();
    //         };

    //         gameCardButtonsAndLinks.forEach((buttonOrLink) => {
    //             buttonOrLink.addEventListener('click', preventClick);
    //         });

    //         card.addEventListener('touchstart', function (event) {
    //             event.stopPropagation();
    //             gameCardBody.classList.add('game_card-body-active');

    //             setTimeout(() => {
    //                 gameCardButtonsAndLinks.forEach((buttonOrLink) => {
    //                     buttonOrLink.removeEventListener('click', preventClick);
    //                     console.log('click');
    //                 });
    //             }, 500);
    //         });
    //     });
    // }
}

// Appeler cette fonction chaque fois que vous mettez à jour le DOM
export function updateGameCards() {
    addEventListenersToGameCards();
}