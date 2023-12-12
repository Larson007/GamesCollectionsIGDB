import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import data from '../json/searchFilter.json';

export function initHomepage() {

    let selectedValues = {
        "platforms": [],
        "themes": [],
        "genres": [],
        "modes": [],
    };

    function updateSelectedValues(add, category, value) {
        if (add) {
            selectedValues[category].push(value);
        } else {
            selectedValues[category] = selectedValues[category].filter(item => item.id !== value.id);
        }
        console.log(selectedValues);
    }

    function sendSelectedValues() {
        const data = {...selectedValues};

        // Si platforms ou themes sont des objets, les convertir en une chaîne JSON
        if (typeof data.platforms === 'object') {
            data.platforms = JSON.stringify(data.platforms);
        }
        if (typeof data.themes === 'object') {
            data.themes = JSON.stringify(data.themes);
        }
        if (typeof data.genres === 'object') {
            data.genres = JSON.stringify(data.genres);
        }
        if (typeof data.modes === 'object') {
            data.modes = JSON.stringify(data.modes);
        }

        const params = new URLSearchParams();
        for (const key in data) {
            params.append(key, data[key]);
        }

        fetch('/dynamiqueSearch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }



    $(document).ready(function () {

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
                                let value = { id: this.id, name: this.textContent };
                                let selectedHtml = `<div class="search_filter-selected-item selected_${currentButton.id}"><p id="${this.id}" class="selected-button_${currentButton.id}">${this.textContent}</p><button class="remove-button"><ion-icon name="close-outline"></ion-icon></button></div>`;
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
                                        let value = { id: this.previousElementSibling.id, name: this.previousElementSibling.textContent };
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

    function getControllerData() {
        fetch('/dynamiqueSearch')
            .then(response => response.json())
            .then(data => {
                // Utilisez les données ici
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

// window.onload = function() {
//     // Récupérez les données du contrôleur lorsque la page est chargée
//     getControllerData();
// };