export function gameNavInfos() {
    // Sélectionnez tous les boutons de navigation
    let navButtons = document.querySelectorAll('.information_nav-link');
    let navButtonsContainer = document.querySelector('.information_nav');

    // Sélectionnez tous les divs avec la classe .information_body-content
    let infoBodyContent = Array.from(document.querySelectorAll('.information_body-content'));

    // Sélectionnez les boutons précédent et suivant
    let prevButton = document.querySelector('.information_nav-link-previous');
    let nextButton = document.querySelector('.information_nav-link-next');

    // Cachez tous les divs qui n'ont pas l'id 'infos'
    infoBodyContent.forEach(function (div) {
        if (div.id !== 'infos') {
            div.style.display = "none";
        } else {
            div.classList.add('information_body-content-active');
            div.style.display = "block";
        }
    });

    // Ajoutez un gestionnaire d'événements click à chaque bouton de navigation
    navButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Supprimez la classe 'information_nav-link-active' de tous les boutons
            navButtons.forEach(function (button) {
                button.classList.remove('information_nav-link-active');
            });

            // Ajoutez la classe 'information_nav-link-active' au bouton cliqué
            this.classList.add('information_nav-link-active');

            // Supprimez la classe 'information_body-content-active' de tous les divs
            infoBodyContent.forEach(function (div) {
                div.classList.remove('information_body-content-active');
                div.style.display = "none";
            });

            // Ajoutez la classe 'information_body-content-active' au div correspondant au bouton sur lequel vous avez cliqué
            let targetDiv = document.getElementById(this.dataset.target);
            targetDiv.classList.add('information_body-content-active');
            targetDiv.style.display = "block";
        });
    });

    // Fonction pour gérer le clic sur les boutons précédent et suivant
    function handleButtonClick(direction) {
        // Trouvez l'index du div actif
        let activeIndex = infoBodyContent.findIndex(div => div.classList.contains('information_body-content-active'));

        // Supprimez la classe 'information_body-content-active' du div actif et cachez-le
        infoBodyContent[activeIndex].classList.remove('information_body-content-active');
        infoBodyContent[activeIndex].style.display = "none";

        // Calculez l'index du div suivant ou précédent
        let newIndex = (activeIndex + direction + infoBodyContent.length) % infoBodyContent.length;

        // Ajoutez la classe 'information_body-content-active' au nouveau div et affichez-le
        infoBodyContent[newIndex].classList.add('information_body-content-active');
        infoBodyContent[newIndex].style.display = "block";

        // Supprimez la classe 'information_nav-link-active' de tous les boutons
        navButtons.forEach(button => button.classList.remove('information_nav-link-active'));

        // Ajoutez la classe 'information_nav-link-active' au nouveau bouton
        let newButton = navButtons[newIndex];
        newButton.classList.add('information_nav-link-active');

        // Calculez la distance de défilement nécessaire
        let scrollLeft = newButton.offsetLeft - (navButtonsContainer.offsetWidth / 2) + (newButton.offsetWidth / 2);

        // Faites défiler le conteneur des boutons de navigation
        navButtonsContainer.scrollLeft = scrollLeft;
    }

    // Ajoutez un gestionnaire d'événements click au bouton précédent
    prevButton.addEventListener('click', () => handleButtonClick(-1));

    // Ajoutez un gestionnaire d'événements click au bouton suivant
    nextButton.addEventListener('click', () => handleButtonClick(1));
}