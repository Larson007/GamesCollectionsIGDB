export function overlay() {
    console.log('Hello overlay.js');

    // Sélectionnez le bouton de fermeture
    const closeOverlayButton = document.getElementById('close-overlay');

    // Sélectionnez l'overlay
    const overlay = document.getElementById('overlay-connection');

    // Ajoutez un écouteur d'événements au bouton de fermeture
    closeOverlayButton.addEventListener('click', function() {
        // Cachez l'overlay
        overlay.style.display = 'none';
    });

    // Ajoutez un écouteur d'événements à l'overlay
    overlay.addEventListener('click', function(event) {
        // Si le clic a eu lieu en dehors de la div overlay-message, cachez l'overlay
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
}