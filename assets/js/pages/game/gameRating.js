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

        let canvas = document.getElementById('ratingGraph');
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

    function aggregatedRatingChart(gameRating, x, y) {
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

        let canvas = document.getElementById('aggregatedRatingGraph');
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

    function ratingGraphNull(gameRating, x, y) {
        let canvas = document.getElementById('ratingGraphNull');

        // Vérifiez si l'élément canvas existe
        if (!canvas) {
            console.log('Element #ratingGraphNull not found');
            return;
        }

        let ctx = canvas.getContext('2d');

        // Vérifiez si le contexte 2D peut être obtenu
        if (!ctx) {
            console.log('2D context not supported or could not be retrieved');
            return;
        }

        let width = x / 2;
        let height = y / 2;
        let rayon = width / 2;

        let ratingColor = '#888'

        let rating = gameRating;
        let remaining = 100 - gameRating;

        let ratings = [rating, remaining];
        let colors = [ratingColor, 'rgba(0, 0, 0, 0)']; // Couleurs de fond pour chaque section

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

    function aggregatedRatingChartNull(gameRating, x, y) {
        let canvas = document.getElementById('aggregatedRatingChartNull');

        // Vérifiez si l'élément canvas existe
        if (!canvas) {
            console.log('Element #aggregatedRatingChartNull not found');
            return;
        }

        let ctx = canvas.getContext('2d');

        // Vérifiez si le contexte 2D peut être obtenu
        if (!ctx) {
            console.log('2D context not supported or could not be retrieved');
            return;
        }

        let width = x / 2;
        let height = y / 2;
        let rayon = width / 2;

        let ratingColor = '#888'

        let rating = gameRating;
        let remaining = 100 - gameRating;

        let ratings = [rating, remaining];
        let colors = [ratingColor, 'rgba(0, 0, 0, 0)']; // Couleurs de fond pour chaque section

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

    let canvasRatingNull = document.getElementById('ratingGraphNull');
    let ratingNull = 100;
    if (canvasRatingNull) {
        ratingGraphNull(ratingNull, 300, 300);
    }

    let canvasAggregatedRatingNull = document.getElementById('aggregatedRatingChartNull');
    let aggregatedRatingNull = 100;
    if (canvasAggregatedRatingNull) {
        aggregatedRatingChartNull(aggregatedRatingNull, 230, 230);
    }

    let canvas = $('#ratingGraph');
    let rating = canvas.data('rating');
    if (canvas.length === 0 || rating === 0 || rating === null) {
        ratingGraphNull();
    } else {
        ratingChart(rating, 300, 300);
    }

    let canvas2 = $('#aggregatedRatingGraph');
    let rating2 = canvas2.data('rating');
    if (canvas2.length === 0 || rating2 === 0 || rating2 === null) {
        aggregatedRatingChartNull();
    } else {
        aggregatedRatingChart(rating2, 230, 230);
    }

    // let canvas = $('#ratingGraph');
    // if (canvas.length === 0) {
    //     return;
    // }
    // let rating = canvas.data('rating');
    // ratingChart(rating, 300, 300);

    // let canvas2 = $('#aggregatedRatingGraph');
    // if (canvas2.length === 0) {
    //     return;
    // } else {
    //     let rating2 = canvas2.data('rating');
    //     aggregatedRatingChart(rating2, 230, 230);
    // }


}