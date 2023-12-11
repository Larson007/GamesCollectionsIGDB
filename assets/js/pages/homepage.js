import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import data from '../json/searchFilter.json';

export function initHomepage() {
    // Gestion des sliders
    function initReleasedSlider() {
        var releasedSlider = document.getElementById('released-slider');
        var currentYear = new Date().getFullYear();
        var currentYearMinus3 = currentYear - 3;
    
        noUiSlider.create(releasedSlider, {
            start: [currentYearMinus3, currentYear],
            range: {
                'min': 1972,
                'max': 2025
            },
            connect: true,
            tooltips: [true, true],
            format: {
                to: function (value) {
                    return Math.round(value);
                },
                from: function (value) {
                    return Math.round(value);
                }
            },
        });
    }
    
    function initNoteSlider() {
        var notesSlider = document.getElementById('notes-slider');
    
        noUiSlider.create(notesSlider, {
            start: [50, 100],
            range: {
                'min': 0,
                'max': 100
            },
            connect: true,
            tooltips: [true, true],
            format: {
                to: function (value) {
                    return Math.round(value);
                },
                from: function (value) {
                    return Math.round(value);
                }
            },
        });
    }

    

    // Gestion des filtres
// Gestion des filtres
$(document).ready(function () {
    // Créez une variable pour suivre le bouton actuellement sélectionné
    let currentButton = null;

                // Créez un objet pour stocker les valeurs sélectionnées
                let selectedValues = {
                    "platforms": [],
                    "themes": [],
                    "genres": [],
                    "modes": [],
                    "rating": [],
                    "released": []
                };

    // Ajoutez un écouteur d'événements 'click' à chaque bouton
    let buttons = document.querySelectorAll('.search_filter-btn button');
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            // Supprimez la classe 'active' de tous les boutons
            buttons.forEach((btn) => {
                btn.classList.remove('active');
            });

            // Ajoutez la classe 'active' au bouton cliqué
            this.classList.add('active');
            // Si le bouton cliqué est le même que le bouton actuellement sélectionné, fermez les résultats
            if (this === currentButton) {
                let resultDiv = document.querySelector('.search_filter-result');
                resultDiv.innerHTML = '';
                currentButton = null;
            } else {
                // Utilisez les données correspondant à l'ID du bouton
                let buttonData = data[this.id];

                // Sélectionnez le div pour afficher les résultats
                let resultDiv = document.querySelector('.search_filter-result');

                // Avant d'ajouter des éléments à resultDiv, videz son contenu
                resultDiv.innerHTML = '';

                if (this.id === 'rating' || this.id === 'released') {
                    let sliderId = this.id === 'rating' ? 'notes-slider' : 'released-slider';
                    let parentDivClass = this.id === 'rating' ? 'rating_filter-slider' : 'released_filter-slider';
                    let otherDivClass = this.id === 'rating' ? 'released_filter-slider' : 'rating_filter-slider';
                
                    // Supprimez l'autre div si elle existe
                    let otherDiv = resultDiv.querySelector(`.${otherDivClass}`);
                    if (otherDiv) {
                        otherDiv.remove();
                    }
                
                    // Créez la div parent et ajoutez la classe correspondante
                    let parentDiv = document.createElement('div');
                    parentDiv.classList.add(parentDivClass);
                
                    // Créez la div du slider et ajoutez-la à la div parent
                    let sliderDiv = document.createElement('div');
                    sliderDiv.id = sliderId;
                    parentDiv.appendChild(sliderDiv);
                
                    let addButtonClass = this.id === 'rating' ? 'add-button-rating' : 'add-button-released';

                    // Créez le bouton "Ajouter" et ajoutez-le à la div parent
                    let addButton = document.createElement('button');
                    addButton.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
                    addButton.classList.add(addButtonClass);
                    parentDiv.appendChild(addButton);
                
                    // Ajoutez la div parent à resultDiv
                    resultDiv.appendChild(parentDiv);
                
                    // Initialisez le slider correspondant
                    if (this.id === 'rating') {
                        initNoteSlider();
                    } else {
                        initReleasedSlider();
                    }
                
                    // Stockez l'élément sélectionné actuel
                    let currentSelectedElement = null;
                
                    // Ajoutez un écouteur d'événements 'click' au bouton "Ajouter"
                    addButton.addEventListener('click', function() {
                        // Sélectionnez le div pour afficher les éléments sélectionnés
                        let selectedDiv = document.querySelector('.search_filter-selected');
                
                        // Stockez le résultat dans le format spécifié
                        let selectedHtml = `<div class="search_filter-selected-item selected_${currentButton.id}"><p id="${sliderId}" class="selected-button_${currentButton.id}">${sliderDiv.noUiSlider.get()[0]} <-> ${sliderDiv.noUiSlider.get()[1]}</button><p class="remove-button"><ion-icon name="close-outline"></ion-icon></p></div>`;
                
                        if (currentSelectedElement) {
                            // Si un élément est déjà sélectionné, mettez-le à jour
                            currentSelectedElement.innerHTML = selectedHtml;
                        } else {
                            // Sinon, ajoutez un nouvel élément sélectionné
                            selectedDiv.innerHTML += selectedHtml;
                        }
                
                        // Ajoutez un écouteur d'événements 'click' au bouton de suppression
                        let removeButtons = document.querySelectorAll('.remove-button');
                        removeButtons.forEach(function(button) {
                            button.addEventListener('click', function() {
                                // Retirez l'élément sélectionné
                                this.parentNode.remove();
                            });
                        });
                    });
                }

                    
                    
                    
                    
                    
                    
                    else {
                    // Supprimez les éléments de rating_filter-slider et released_filter-slider s'ils existent
                    let ratingDiv = resultDiv.querySelector('.rating_filter-slider');
                    let releasedDiv = resultDiv.querySelector('.released_filter-slider');
                    if (ratingDiv) {
                        ratingDiv.remove();
                    }
                    if (releasedDiv) {
                        releasedDiv.remove();
                    }

                    // Triez les données par ordre alphabétique
                    buttonData.sort((a, b) => a.name.localeCompare(b.name));

                    // Créez un bouton pour chaque élément de data
                    let html = buttonData.map(item => `<button id="${item.id}" class="result-button ${this.id}-result">${item.name}</button>`).join('');

                    // Ajoutez le HTML à resultDiv
                    resultDiv.innerHTML = html;

                    // Ajoutez un écouteur d'événements 'click' à chaque bouton
                    let resultButtons = document.querySelectorAll('.result-button');
                    resultButtons.forEach((resultButton) => {
                        resultButton.addEventListener('click', function () {
                            // Sélectionnez le div pour afficher les éléments sélectionnés
                            let selectedDiv = document.querySelector('.search_filter-selected');

                            // Vérifiez si un élément avec le même ID existe déjà dans la sélection
                            let existingButton = selectedDiv.querySelector(`.selected-button[id="${this.id}"]`);
                            if (existingButton) {
                                // Si l'élément existe déjà, ne faites rien
                                return;
                            }

                            // Créez un bouton pour l'élément sélectionné et un autre pour le retirer
                            let selectedHtml = `<div class="search_filter-selected-item selected_${currentButton.id}"><p id="${this.id}" class="selected-button_${currentButton.id}">${this.textContent}</p><button class="remove-button"><ion-icon name="close-outline"></ion-icon></button></div>`;

                            // Ajoutez le HTML à selectedDiv
                            selectedDiv.innerHTML += selectedHtml;

                            // Ajoutez un écouteur d'événements 'click' au bouton de suppression
                            let removeButtons = document.querySelectorAll('.remove-button');
                            removeButtons.forEach((removeButton) => {
                                removeButton.addEventListener('click', function () {
                                    // Retirez l'élément sélectionné
                                    this.parentElement.remove();
                                });
                            });
                        });
                    });
                    }


                    // Mettez à jour le bouton actuellement sélectionné
                    currentButton = this;
                }
            });
        });
    });
}





// $(document).ready(function () {
//     // Créez une variable pour suivre le bouton actuellement sélectionné
//     let currentButton = null;

//     // Ajoutez un écouteur d'événements 'click' à chaque bouton
//     let buttons = document.querySelectorAll('.search_filter-btn button');
//     buttons.forEach((button) => {
//         button.addEventListener('click', function () {
//             // Supprimez la classe 'active' de tous les boutons
//             buttons.forEach((btn) => {
//                 btn.classList.remove('active');
//             });

//             // Ajoutez la classe 'active' au bouton cliqué
//             this.classList.add('active');
//             // Si le bouton cliqué est le même que le bouton actuellement sélectionné, fermez les résultats
//             if (this === currentButton) {
//                 let resultDiv = document.querySelector('.search_filter-result');
//                 resultDiv.innerHTML = '';
//                 currentButton = null;
//             } else {
//                 // Utilisez les données correspondant à l'ID du bouton
//                 let buttonData = data[this.id];

//                 // Sélectionnez le div pour afficher les résultats
//                 let resultDiv = document.querySelector('.search_filter-result');

                


//                 // Triez les données par ordre alphabétique
//                 buttonData.sort((a, b) => a.name.localeCompare(b.name));

//                 // Créez un bouton pour chaque élément de data
//                 let html = buttonData.map(item => `<button id="${item.id}" class="result-button ${this.id}-result">${item.name}</button>`).join('');

//                 // Ajoutez le HTML à resultDiv
//                 resultDiv.innerHTML = html;

//                 // Ajoutez un écouteur d'événements 'click' à chaque bouton
//                 let resultButtons = document.querySelectorAll('.result-button');
//                 resultButtons.forEach((resultButton) => {
//                     resultButton.addEventListener('click', function () {
//                         // Sélectionnez le div pour afficher les éléments sélectionnés
//                         let selectedDiv = document.querySelector('.search_filter-selected');

//                         // Vérifiez si un élément avec le même ID existe déjà dans la sélection
//                         let existingButton = selectedDiv.querySelector(`.selected-button[id="${this.id}"]`);
//                         if (existingButton) {
//                             // Si l'élément existe déjà, ne faites rien
//                             return;
//                         }

//                         // Créez un bouton pour l'élément sélectionné et un autre pour le retirer
//                         let selectedHtml = `<div class="search_filter-selected-item selected_${currentButton.id}"><p id="${this.id}" class="selected-button_${currentButton.id}">${this.textContent}</p><button class="remove-button"><ion-icon name="close-outline"></ion-icon></button></div>`;

//                         // Ajoutez le HTML à selectedDiv
//                         selectedDiv.innerHTML += selectedHtml;

//                         // Ajoutez un écouteur d'événements 'click' au bouton de suppression
//                         let removeButtons = document.querySelectorAll('.remove-button');
//                         removeButtons.forEach((removeButton) => {
//                             removeButton.addEventListener('click', function () {
//                                 // Retirez l'élément sélectionné
//                                 this.parentElement.remove();
//                             });
//                         });
//                     });
//                 });

//                 // Mettez à jour le bouton actuellement sélectionné
//                 currentButton = this;
//             }
//         });
//     });
// });





    // $(document).ready(function () {

    //     // Import noUiSlider
    //     var releasedSlider = document.getElementById('released-slider');
    //     var noteSlider = document.getElementById('note-slider');

    //     // Année actuelle
    //     var currentYear = new Date().getFullYear();
    //     // année actuel -3 ans
    //     var currentYearMinus3 = currentYear - 3;

    //     noUiSlider.create(releasedSlider, {
    //         // Start with two handles at 2020 and 2030
    //         start: [currentYearMinus3, currentYear],
    //         // Create two steps, from 1900 to 2099
    //         range: {
    //             'min': 1972,
    //             'max': 2025
    //         },
    //         // Two handles means sliders are always selected
    //         connect: true,
    //         // Show the values above the handles
    //         tooltips: [true, true],
    //         // Display the full date when the handle is released
    //         format: {
    //             to: function (value) {
    //                 return Math.round(value);
    //             },
    //             from: function (value) {
    //                 return Math.round(value);
    //             }
    //         },
    //         // pips: {
    //         //     mode: 'steps',
    //         //     stepped: true,
    //         //     density: 100
    //         // },
    //         // behaviour: 'tap-drag',
    //     });

    //     noUiSlider.create(noteSlider, {
    //         // Start with two handles at 2020 and 2030
    //         start: [50, 100],
    //         // Create two steps, from 1900 to 2099
    //         range: {
    //             'min': 0,
    //             'max': 100
    //         },
    //         // Two handles means sliders are always selected
    //         connect: true,
    //         // Show the values above the handles
    //         tooltips: [true, true],
    //         // Display the full date when the handle is released
    //         format: {
    //             to: function (value) {
    //                 return Math.round(value);
    //             },
    //             from: function (value) {
    //                 return Math.round(value);
    //             }
    //         },
    //         // pips: {
    //         //     mode: 'steps',
    //         //     stepped: true,
    //         //     density: 100
    //         // },
    //         // behaviour: 'tap-drag',
    //         // step: 5,
    //     });
    // });
