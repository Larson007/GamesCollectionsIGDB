export function filterImages() {
console.log('filterImages.js');
    //* Fonction pour ajouter un titre au jeux qui non pas d'image mais un placeholder


    const images = document.querySelectorAll('.card-image');


    images.forEach(image => {
        let src = image.getAttribute('src');
        let alt = image.getAttribute('alt');
        if (src.includes('placeholder.jpg')) {
            console.log('Image is a placeholder');
            console.log('Alt attribute is: ' + alt);

            let title = document.createElement('h5');
            title.classList.add('card-title-placeholder');
            title.innerHTML = alt.substring(0, 40);
            // inserer title apres image
            image.insertAdjacentElement('afterend', title);
        }
    });

}