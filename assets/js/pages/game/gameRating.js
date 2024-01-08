export function gameRating() {
    
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
}