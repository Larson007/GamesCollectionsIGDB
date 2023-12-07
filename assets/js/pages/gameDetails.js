export function initGameDetails() {
    console.log('Game details page loaded')
    // Loader
    // window.onload = function () {
    //     const loader = document.querySelector('.loader');
    //     loader.className += ' hidden'; // class "loader hidden"
    // };

    // Carousel
    $(document).ready(function () {
        $('.carousel-image').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            variableWidth: true,
            arrows: true,
            // lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
        });
        $('.carousel-video').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            variableWidth: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
        });



        // Gestion des jeux dans la collection
        if ($('#toggleCollection').data('action') === 'add-to-collection') {
            $('#toggleAchieved, #togglePlatined').hide();
        } else {
            $('#toggleAchieved, #togglePlatined').show();
        }


        $("#toggleCollection").on("click", function () {
            var gameId = $(this).data('game-id');
            var action = $(this).data('action');

            $.ajax({
                url: '/' + action,
                type: 'POST',
                data: {
                    'gameId': gameId
                },
                success: function (data) {
                    if (data.success) {
                        // Toggle the action data attribute
                        var newAction = (action === 'add-to-collection') ? 'remove-from-collection' : 'add-to-collection';
                        $('#toggleCollection').data('action', newAction);
                        // Toggle the button text
                        var newText = (action === 'add-to-collection') ? 'Collection' : 'Collection';
                        // Toggle the button icon
                        $('#toggleCollection').text(newText);
                        var newIcon = (action === 'add-to-collection') ? '<ion-icon name="remove-circle-outline" class="button-icon"></ion-icon>' : '<ion-icon name="add-circle-outline" class="button-icon"></ion-icon>';
                        $('#toggleCollection').html(newText + ' ' + newIcon);
                        // Toggle the button class
                        var newClass = (action === 'add-to-collection') ? 'btn-warning' : 'btn-primary';
                        $('#toggleCollection').removeClass('btn-primary btn-warning').addClass(newClass);
                        // Toggle the achieved and platined buttons
                        if (newAction === 'add-to-collection') {
                            $('#toggleAchieved, #togglePlatined').hide();
                        } else {
                            $('#toggleAchieved, #togglePlatined').show();
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    var message;
                    switch (errorThrown) {
                        case 'Forbidden':
                            message = 'Vous devez être connecté pour ajouter un jeu à votre collection.';
                            break;
                        case 'Internal Server Error':
                            message = 'Une erreur interne du serveur s\'est produite.';
                            break;
                        // Ajoutez d'autres cas au besoin
                        default:
                            message = 'Une erreur s\'est produite : ' + errorThrown;
                    }
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        });

        $("#toggleAchieved").on("click", function () {
            var gameId = $(this).data('game-id');
            var action = $(this).data('action');
            var newAction = (action === 'achieved') ? 'unachieved' : 'achieved';
            var newText = (action === 'achieved') ? 'Terminer' : 'Terminer';
            var newClass = (action === 'achieved') ? 'btn-danger' : 'btn-success';

            console.log('Game ID: ' + gameId);
            console.log('Current action: ' + action);
            console.log('New action: ' + newAction);
            console.log('New text: ' + newText);
            console.log('New class: ' + newClass);

            $.ajax({
                url: '/' + action,
                type: 'POST',
                data: {
                    'gameId': gameId
                },
                success: function (data) {
                    if (data.success) {
                        // Toggle the action data attribute
                        $('#toggleAchieved').data('action', newAction);
                        // Toggle the button text
                        $('#toggleAchieved').text(newText);
                        // Toggle the button class
                        $('#toggleAchieved').removeClass('btn-success btn-danger').addClass(newClass);
                        // Toggle the button icon
                        $('#toggleAchieved').text(newText);
                        var newIcon = (action === 'achieved') ? '<ion-icon name="remove-circle-outline" class="button-icon"></ion-icon>' : '<ion-icon name="add-circle-outline" class="button-icon"></ion-icon>';
                        $('#toggleAchieved').html(newText + ' ' + newIcon);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $('#message').html('<div class="alert alert-danger">An error occurred: ' + errorThrown + '</div>');
                }
            });
        });

        $("#togglePlatined").on("click", function () {
            var gameId = $(this).data('game-id');
            var action = $(this).data('action');
            var newAction = (action === 'platined') ? 'unplatined' : 'platined';
            var newText = (action === 'platined') ? 'Platine' : 'Platine';
            var newClass = (action === 'platined') ? 'btn-danger' : 'btn-success';

            console.log('Game ID: ' + gameId);
            console.log('Current action: ' + action);
            console.log('New action: ' + newAction);
            console.log('New text: ' + newText);
            console.log('New class: ' + newClass);

            $.ajax({
                url: '/' + action,
                type: 'POST',
                data: {
                    'gameId': gameId
                },
                success: function (data) {
                    if (data.success) {
                        // Toggle the action data attribute
                        $('#togglePlatined').data('action', newAction);
                        // Toggle the button text
                        $('#togglePlatined').text(newText);
                        // Toggle the button class
                        $('#togglePlatined').removeClass('btn-success btn-danger').addClass(newClass);
                        // Toggle the button icon
                        $('#togglePlatined').text(newText);
                        var newIcon = (action === 'platined') ? '<ion-icon name="remove-circle-outline" class="button-icon"></ion-icon>' : '<ion-icon name="add-circle-outline" class="button-icon"></ion-icon>';
                        $('#togglePlatined').html(newText + ' ' + newIcon);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $('#message').html('<div class="alert alert-danger">An error occurred: ' + errorThrown + '</div>');
                }
            });
        });



        // Graphique de notation MetaCritic
        function ratingChart(gameRating, x, y) {
            let width = x / 2;
            let height = y / 2;
            let rayon = width / 2;

            let ratingColor;
            if (gameRating >= 75) {
                ratingColor = '#c4e791'; // Vert pour 100% à 75%
            } else if (gameRating >= 50) {
                ratingColor = '#84acfc'; // Bleu pour 74% à 50%
            } else if (gameRating >= 25) {
                ratingColor = '#feca72'; // Jaune pour 49% à 25%
            } else {
                ratingColor = '#ee727a'; // Rouge pour 24% à 0%
            }

            let rating = gameRating;
            let remaining = 100 - gameRating;

            let ratings = [rating, remaining];
            let colors = [ratingColor, 'rgba(0, 0, 0, 0)']; // Couleurs de fond pour chaque section

            let canvas = document.getElementById('myCanvas');
            let ctx = canvas.getContext('2d');

            let startAngle = -Math.PI / 2;

            for (let i = 0; i < ratings.length; i++) {
                let sliceAngle = 2 * Math.PI * ratings[i] / 100;

                ctx.beginPath();
                ctx.fillStyle = colors[i];
                ctx.moveTo(rayon, rayon);
                ctx.arc(rayon, rayon, rayon, startAngle, startAngle + sliceAngle);
                ctx.lineTo(rayon, rayon);
                ctx.fill();

                startAngle += sliceAngle;
            }

            // Dessiner un cercle blanc au centre pour créer l'effet de donut
            ctx.beginPath();
            ctx.fillStyle = '#3a3a3a'; // Changez ceci à la couleur de votre fond
            // taille du cercle blanc : rayon * 0.5
            ctx.arc(rayon, rayon, rayon * 0.8, 0, 2 * Math.PI);
            ctx.fill();
        }

        // Appel de la fonction dans game/show.html.twig
        let canvas = $('#myCanvas');
        console.log(canvas);
        let rating = canvas.data('rating');
        ratingChart(rating, 300, 300);
    });

    // Afficher / Masquer les jeux


}