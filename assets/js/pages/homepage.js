// import noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

import data from '../json/searchFilter.json';

export function initHomepage() {
    $(document).ready(function () {
        console.log('Homepage js est chargé !');

        sendSelectedValues();

        let selectedValues = {
            "platforms": [],
            "themes": [],
            "genres": [],
            "modes": [],
        };
        

        function updateSelectedValues(add, category, value) {
            if (add) {
                if (!selectedValues[category]) {
                    selectedValues[category] = [];
                }
                selectedValues[category].push(value);
            } else {
                // Parcourir chaque catégorie de filtres
                for (let key in selectedValues) {
                    const index = selectedValues[key].findIndex(item => item.id === value.id);
                    if (index > -1) {
                        // Supprimer la valeur si elle est trouvée
                        selectedValues[key].splice(index, 1);
                    }
                }
            }
            console.log(selectedValues);
        }

        function sendSelectedValues() {
            // récupérer selectedValues
            let jsonSelectedValues = JSON.stringify(selectedValues);
            console.log('stringify : ' + jsonSelectedValues);

            fetch('/dynamiqueSearch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: jsonSelectedValues,
            })
                .then(response => {
                    const contentType = response.headers.get('content-type');
                    if (!contentType || !contentType.includes('application/json')) {
                        throw new TypeError("Oops, nous n'avons pas du JSON!");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);  // Afficher les données dans la console
                    updateGames(data);  // Mettre à jour le DOM avec les données
                })
                .catch((error) => {
                    console.error('Erreur:', error);
                });
        }

        // Lorsque l'utilisateur clique sur un bouton de filtre
        $(".filter_button").click(function () {
            // Récupérer les valeurs sélectionnées
            let selectedValues = getSelectedValues();

            // Faire une requête AJAX à votre serveur
            $.ajax({
                url: '/dynamiqueSearch',
                type: 'POST',
                data: JSON.stringify(selectedValues),
                contentType: 'application/json',
                success: function (data) {
                    // Mettre à jour le contenu de "games" avec la réponse
                    updateGames(data);
                }
            });
        });

        // Mettre à jour le contenu de "games"
        function updateGames(data) {
            // Supprimer le contenu actuel de "games"
            $("#games_list").empty();

            // Convertir data en tableau si c'est un objet
            if (typeof data === 'object') {
                data = Object.values(data);
            }

            console.log(data);
            // Ajouter chaque jeu à "games"
            data.forEach(function (game) {
                // console.log(game);  // Afficher l'objet game dans la console

                // Utiliser game.cover.url si défini, sinon utiliser une image de remplacement
                var coverUrl = game.cover && game.cover.url ? game.cover.url : "build/images/placeholder.jpg";

                $("#games_list").append(`
            <div class="game_card">
                <div class="game_card_img">
                    <a href="/game/${game.id}">
                        <img src="${coverUrl}" alt="${game.name} cover">
                    </a>
                </div>
                <div class="game_card_info">
                    <h2>${game.name}</h2>
                </div>
            </div>
        `);
            });
        }





        // Gestion des sliders
        let currentButton = null;
        // Stockez les valeurs sélectionnées


        // Ajoutez un écouteur d'événements 'click' à chaque bouton de filtre
        let buttons = document.querySelectorAll('.search_filter-btn button');
        buttons.forEach((button) => {
            button.addEventListener('click', function () {

                //* Gestion des boutons de filtre
                // Supprimez la classe 'active' de tous les boutons
                buttons.forEach((btn) => {
                    btn.classList.remove('active');
                });
                // Ajoutez la classe 'active' au bouton actuel
                this.classList.add('active');

                //* Si on reclique sur le bouton actuel, alors on supprime les résultats
                if (this === currentButton) {
                    // Si oui, supprimez les résultats et réinitialisez le bouton sélectionné actuellement
                    let resultDiv = document.querySelector('.search_filter-result');
                    // Supprimez les éléments de rating_filter-slider et released_filter-slider s'ils existent
                    resultDiv.innerHTML = '';
                    // retire la classe active du bouton actuel
                    this.classList.remove('active');
                    // Supprimez la classe 'active' du bouton actuel
                    currentButton = null;
                }
                //* Sinon on affiche les résultats
                else {
                    // Stockez les données correspondantes au bouton actuel
                    let buttonData = data[this.id];
                    // Sélectionnez la div pour afficher les résultats
                    let resultDiv = document.querySelector('.search_filter-result');
                    // Supprimez les résultats existants
                    resultDiv.innerHTML = '';


                    // Triez les données par categorie dans l'ordre alphabétique
                    buttonData.sort((a, b) => a.name.localeCompare(b.name));

                    //* Gestion des boutons de filtre platform/thems/genres/modes
                    // Créez un bouton pour chaque élément de data
                    let html = buttonData.map(item => `<button id="${item.id}" class="result-button ${this.id}-result">${item.name}</button>`).join('');

                    // Ajoutez le HTML à resultDiv
                    resultDiv.innerHTML = html;

                    // Ajoutez un écouteur d'événements 'click' à chaque bouton
                    let resultButtons = document.querySelectorAll('.result-button');
                    // Ajoutez un écouteur d'événements 'click' à chaque bouton
                    resultButtons.forEach((resultButton) => {
                        // Ajoutez un écouteur d'événements 'click' à chaque bouton
                        resultButton.addEventListener('click', function () {
                            // Supprimez la classe 'active' de tous les boutons
                            let selectedDiv = document.querySelector('.search_filter-selected');
                            // Supprimez la classe 'active' de tous les boutons
                            let existingButton = selectedDiv.querySelector(`.selected-button[id="${this.id}"]`);

                            // Vérifiez si l'élément existe déjà dans selectedValues[currentButton.id]
                            let existingValue = selectedValues[currentButton.id].find(item => item.id === this.id);

                            // Vérifiez si l'élément existe déjà dans selectedValues[currentButton.id]
                            if (existingButton || existingValue) {
                                // Si l'élément existe déjà, ne faites rien
                                return;
                                // Vérifiez si l'élément existe déjà dans selectedValues[currentButton.id]
                            } else {
                                //* Ajout au tableau selectedValues
                                // Si l'élément n'existe pas, ajoutez-le
                                let value = { id: this.id };
                                let selectedHtml = `<div class="search_filter-selected-item selected_${currentButton.id}"><p id="${this.id}" class="selected-button_${currentButton.id}">${this.textContent} [${this.id}]</p><button class="remove-button"><ion-icon name="close-outline"></ion-icon></button></div>`;
                                selectedDiv.innerHTML += selectedHtml;

                                // Mettez à jour selectedValues
                                updateSelectedValues(true, currentButton.id, value);

                                // Envoyez selectedValues à votre contrôleur
                                sendSelectedValues();

                                // Ajoutez un écouteur d'événements 'click' au bouton de suppression
                                let removeButtons = document.querySelectorAll('.remove-button');

                                removeButtons.forEach((removeButton) => {
                                    removeButton.addEventListener('click', function () {
                                        // Supprimez l'élément parent du bouton de suppression
                                        this.parentElement.remove();

                                        // Supprimez l'élément du tableau selectedValues
                                        let value = { id: this.previousElementSibling.id };
                                        selectedValues[currentButton.id] = selectedValues[currentButton.id].filter(item => item.id !== value.id);

                                        // Mettez à jour selectedValues
                                        updateSelectedValues(false, currentButton.id, value);

                                        // Envoyez selectedValues à votre contrôleur
                                        sendSelectedValues();
                                    });
                                });

                            }
                        });
                    });
                    // Mettez à jour le bouton actuellement sélectionné
                    currentButton = this;
                }
            });
        });
    });


}

