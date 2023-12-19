import jsonData from '../json/searchFilter.json';
import { multiRangeSliders } from './multiRangeSliders';

export function initHomepage() {
    $(document).ready(function () {
        console.log('Homepage js est chargé !');

        let currentButton = null;

        //* TABLEAU JSON QUI CONTIENT LES DONNEES DES FILTRES
        let selectedValues = {
            "platforms": [],
            "themes": [],
            "genres": [],
            "modes": [],
            "rating": { "min": null, "max": null },
            "released": { "min": null, "max": null },
            "sort": { "rating": null, "released": null }
        };



        //* Fonction pour ajouter/modifier/supprimer les valeurs des filtres dans selectedValues
        function updateSelectedValues() {
            // sélectionner tous les éléments avec la classe '.result'
            let results = document.querySelectorAll('.result');
            // vider selectedValues
            selectedValues = {
                "platforms": [],
                "themes": [],
                "genres": [],
                "modes": [],
                "rating": { "min": null, "max": null },
                "released": { "min": null, "max": null },
                "sort": { "rating": null, "released": null }

            };
            // parcourir tous les éléments avec la classe '.result'
            results.forEach(result => {
                // obtenir la catégorie de l'élément
                let category = result.getAttribute('data-category');
                // obtenir l'id de l'élément
                let id = result.getAttribute('data-id');
                // obtenir le min de l'élément
                let min = result.getAttribute('data-min');
                // obtenir le max de l'élément
                let max = result.getAttribute('data-max');
                // vérifier si l'élément est un rating ou un released
                if (category == 'rating' || category == 'released') {
                    // si oui, mettre à jour selectedValues
                    selectedValues[category].min = min;
                    selectedValues[category].max = max;
                } else {
                    // sinon, mettre à jour selectedValues
                    selectedValues[category].push(id);
                }
            });

            // obtenir les éléments sortRating et sortReleased
            let sortRatingElement = document.querySelector('.sort_rating');
            let sortReleasedElement = document.querySelector('.sort_released');

            if (sortRatingElement && sortReleasedElement) {
                // obtenir la valeur de l'attribut 'data-sort' de sortRating et sortReleased
                let sortRating = sortRatingElement.getAttribute('data-sort');
                let sortReleased = sortReleasedElement.getAttribute('data-sort');
                // mettre à jour selectedValues.sort.rating et selectedValues.sort.released
                selectedValues.sort.rating = sortRating === 'null' ? null : sortRating;
                selectedValues.sort.released = sortReleased === 'null' ? null : sortReleased;
            } else {
                console.log('sortRatingElement or sortReleasedElement does not exist');
            }

            // Appeler sendSelectedValues après avoir mis à jour selectedValues
            sendSelectedValues();
            // Afficher selectedValues dans la console
            console.log(selectedValues);
        }



        //* VERIFIE SI LA FONCTION HOMEPAGE() EXISTE VIA LA CLASS .homepage_games ETAPE 1
        let sortButtons = document.querySelector('#games_sort');
        if (document.querySelector('.homepage_games')) {
            sortButtons.style.display = 'none';
        }


        //* Envoyer les données de selectedValues dynamiquement au format JSON
        function sendSelectedValues() {
            // pas de données à envoyer si selectedValues est vide
            // if (Object.keys(selectedValues).length === 0) {
            //     return;
            // }

            // envoyer les données de selectedValues au format JSON
            $.ajax({
                url: '/dynamiqueSearch',
                type: 'POST',
                data: JSON.stringify(selectedValues),
                contentType: 'application/json',
                dataType: 'json',
                
                success: function (data) {

                    //* VERIFIE SI LA FONCTION HOMEPAGE() EXISTE VIA LA CLASS .homepage_games ETAPE 2
                    let sortButtons = document.querySelector('#games_sort');
                    if (document.querySelector('.homepage_games')) {
                        sortButtons.style.display = 'block';
                    }

                    // afficher les données reçues dans la console
                    console.log(data);
                    // afficher les données reçues dans le DOM
                    let result = document.querySelector('#games_list');
                    result.innerHTML = '';

                    if (Array.isArray(data)) {
                        sortButtons.style.display = 'block';
                        // Créer une nouvelle div games_cards
                        let gamesCards = document.createElement('div');
                        gamesCards.classList.add('games_cards');

                        data.forEach(game => {
                            let gameDiv = document.createElement('div');
                            gameDiv.classList.add('game_card');

                            if (game.cover == undefined || !game.cover.url.includes('t_cover_big')) {
                                gameDiv.innerHTML = `
                                    <a href="/game/${game.id}">
                                        <div class="game_card_img">
                                            <img src="build/images/placeholder.jpg" alt="${game.name}" loading="lazy">
                                        </div>
                                        <div class="game_card_info">
                                            <h3>${game.name}</h3>
                                        </div>
                                    </a>
                                `;
                            } else {
                                gameDiv.innerHTML = `
                                    <a href="/game/${game.id}">
                                        <div class="game_card_img">
                                            <img src="${game.cover.url}" alt="${game.name}">
                                        </div>
                                        <div class="game_card_info">
                                            <h3>${game.name}</h3>
                                        </div>
                                    </a>
                                `;
                            }

                            // Ajouter gameDiv à gamesCards
                            gamesCards.appendChild(gameDiv);
                        });

                        // Ajouter gamesCards à result
                        result.appendChild(gamesCards);
                    } else {
                        sortButtons.style.display = 'none';
                        // Si data est vide (pas de filtre selectionné ou pas de résultat)
                        result.innerHTML = '';
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }


        //* Fonction pour selectionner les bouttons de filtres et les afficher dans filter-show
        function filterBtn() {
            // sélectionner les boutons de filtre_btn
            let filterBtn = document.querySelectorAll('.filter-btn');
            // sélectionner le conteneur filter-show
            let filterShow = document.querySelector('.filter_show');

            //* POUR TOUS LES BOUTTONS DE FILTRES
            filterBtn.forEach(button => {
                button.addEventListener('click', function () {
                    // retirer la classe active de tous les boutons
                    filterBtn.forEach(btn => {
                        // si le bouton cliqué est différent du bouton en cours de boucle sur lequel on clique
                        if (btn !== this) {
                            btn.classList.remove('active');
                        }
                    });

                    // si le bouton cliqué a déjà la classe 'active', vider filterShow et sortir de la fonction
                    if (this.classList.contains('active')) {
                        filterShow.innerHTML = '';
                        this.classList.remove('active');
                        return;
                    }

                    // ajouter la classe active du bouton cliqué
                    this.classList.add('active');

                    // stocker le bouton cliqué dans currentButton
                    currentButton = this.id;

                    console.log(currentButton);

                    // On récupère les données du fichier json
                    let data = jsonData[currentButton];

                    // vider filterShow lorsqu'on clique sur un autre bouton
                    filterShow.innerHTML = '';

                    //* POUR LES BOUTTON DE FILTRES RATING ET RELEASED
                    if (currentButton == 'rating' || currentButton == 'released') {
                        // Div qui contient le slider et le boutton add
                        let categoryDiv = document.createElement('div');
                        categoryDiv.classList.add('slider');
                        categoryDiv.setAttribute('data-category', `${currentButton}`);

                        // Div qui contient le slider
                        let categoryDivSlider = document.createElement('div');
                        categoryDivSlider.setAttribute('id', `${currentButton}-slider`);
                        categoryDivSlider.classList.add(`slider_${currentButton}`);
                        // on verifie si on est sur released ou rating pour pour appelé la fonction multiRangeSliders
                        if (currentButton == 'released') {
                            multiRangeSliders(categoryDivSlider, 1970, 2025, 1970, 2023);
                            // let min = categoryDivSlider.noUiSlider.get()[0];
                            // let max = categoryDivSlider.noUiSlider.get()[1];
                        } else {
                            multiRangeSliders(categoryDivSlider, 0, 100, 0, 100);
                        }

                        // Boutton add
                        let categoryAddButton = document.createElement('button');
                        categoryAddButton.classList.add(`add_button-${currentButton}`);
                        let addImg = document.createElement('img');
                        addImg.src = 'build/images/add-outline.svg';
                        // categoryAddButton.innerText = 'Add';

                        // On ajoute les éléments dans le DOM
                        categoryAddButton.appendChild(addImg);
                        categoryDiv.appendChild(categoryDivSlider);
                        categoryDiv.appendChild(categoryAddButton);
                        filterShow.appendChild(categoryDiv);

                        let filterSelected = document.querySelector('.filter_selected');

                        // ajouter un écouteur d'événements de clic au bouton 'add'
                        categoryAddButton.addEventListener('click', function () {
                            // obtenir les valeurs min et max du slider
                            let min = categoryDivSlider.noUiSlider.get()[0];
                            let max = categoryDivSlider.noUiSlider.get()[1];
                            // créer une nouvelle div
                            let categoryDiv = filterSelected.querySelector(`.result-${currentButton}`);
                            if (categoryDiv) {
                                // si un élément avec la classe `result-${currentButton}` existe déjà, mettre à jour son textContent
                                categoryDiv.setAttribute('data-min', `${min}`);
                                categoryDiv.setAttribute('data-max', `${max}`);
                                categoryDiv.textContent = '';
                                let resultTextCategory = document.createElement('p');

                                // Vérifier la valeur de l'attribut data-category
                                if (categoryDiv.getAttribute('data-category') === 'released') {
                                    resultTextCategory.classList.add('result-text-released');
                                    resultTextCategory.textContent = 'Date de sortie : Entre ' + min + ' & ' + max;
                                } else if (categoryDiv.getAttribute('data-category') === 'rating') {
                                    resultTextCategory.classList.add('result-text-rating');
                                    resultTextCategory.textContent = 'Notes : min ' + min + ' max ' + max;
                                } else {
                                    resultTextCategory.textContent = 'Min ' + min + ' Max ' + max;
                                }

                                // resultTextCategory.textContent = 'Min ' + min + ' Max ' + max;
                                categoryDiv.appendChild(resultTextCategory);
                                // ajouter la classe 'update-result' à categoryDiv
                                categoryDiv.classList.add('update-result');

                                // appeler updateSelectedValues après avoir supprimé un élément
                                updateSelectedValues();
                            }
                            else {
                                // sinon, créer un nouvel élément et l'ajouter à filterSelected
                                categoryDiv = document.createElement('div');
                                categoryDiv.classList.add('result', `result-${currentButton}`);
                                categoryDiv.setAttribute('data-category', `${currentButton}`);
                                categoryDiv.setAttribute('data-min', `${min}`);
                                categoryDiv.setAttribute('data-max', `${max}`);
                                let resultTextCategory = document.createElement('p');
                                resultTextCategory.classList.add('result-text');

                                // Vérifier la valeur de l'attribut data-category
                                if (categoryDiv.getAttribute('data-category') === 'released') {
                                    resultTextCategory.classList.add('result-text-released');
                                    resultTextCategory.textContent = 'Date de sortie : Entre ' + min + ' & ' + max;
                                } else if (categoryDiv.getAttribute('data-category') === 'rating') {
                                    resultTextCategory.classList.add('result-text-rating');
                                    resultTextCategory.textContent = 'Notes : min ' + min + ' max ' + max;
                                } else {
                                    resultTextCategory.textContent = 'Min ' + min + ' Max ' + max;
                                }


                                // resultTextCategory.textContent = 'Min ' + min + ' Max ' + max;
                                categoryDiv.appendChild(resultTextCategory);
                                filterSelected.appendChild(categoryDiv);

                                // appeler updateSelectedValues après avoir supprimé un élément
                                updateSelectedValues();
                            }
                            // ajouter un bouton 'remove'
                            let resultRemoveCategory = document.createElement('button');
                            resultRemoveCategory.classList.add('result-remove');
                            resultRemoveCategory.setAttribute('data-category', `${currentButton}`);
                            resultRemoveCategory.textContent = 'X';
                            // let removeImg = document.createElement('img');
                            // removeImg.src = 'build/images/close-outline.svg';
                            // resultRemoveCategory.appendChild(removeImg);


                            resultRemoveCategory.addEventListener('click', function () {
                                // supprimer categoryDiv de .filter_selected lorsque cliqué
                                filterSelected.removeChild(categoryDiv);

                                // appeler updateSelectedValues après avoir supprimé un élément
                                updateSelectedValues();
                            });
                            categoryDiv.appendChild(resultRemoveCategory);
                            // ajouter la classe 'active-result' au bouton 'add'
                            this.classList.add('active-result');
                        });
                    }

                    //* POUR LE BOUTTON DE FILTRE PLATFORMS
                    if (currentButton == 'platforms') {
                        // Créer un champ de recherche
                        let inputDiv = document.createElement('div');
                        inputDiv.classList.add('input-platforms');
                        let searchInput = document.createElement('input');
                        searchInput.setAttribute('type', 'search');
                        searchInput.setAttribute('placeholder', 'Rechercher par nom...');
                        inputDiv.appendChild(searchInput);
                        filterShow.appendChild(inputDiv);

                        // Trier les add_button par ordre alphabétique
                        data.sort((a, b) => a.name.localeCompare(b.name));

                        // Créer les boutons
                        data.forEach(category => {
                            let categoryDiv = document.createElement('div');
                            let categoryAddButton = document.createElement('button');
                            categoryAddButton.classList.add(`add_button-${currentButton}`);
                            categoryAddButton.setAttribute('data-id', `${category.id}`);
                            categoryAddButton.innerText = `${category.name}`;
                            categoryDiv.appendChild(categoryAddButton);
                            filterShow.appendChild(categoryDiv);

                            // Initialiser tous les boutons avec display = "none" pour platforms
                            categoryDiv.style.display = "none";

                            // AJOUTE LORS DU CLIQUE SUR LE BOUTON ADD DANS .filter_selected
                            // sélectionner l'élément avec la classe '.filter_selected'
                            let filterSelected = document.querySelector('.filter_selected');

                            // ajouter un écouteur d'événements de clic au bouton 'add'
                            categoryAddButton.addEventListener('click', function () {
                                // vérifier si le innerText du bouton 'add' est déjà présent dans filterSelected
                                if (!filterSelected.textContent.includes(this.innerText)) {
                                    // div qui contiendra le innerText du bouton 'add'
                                    let resultDivCategory = document.createElement('div');
                                    resultDivCategory.classList.add('result', `result-${currentButton}`);
                                    resultDivCategory.setAttribute('data-category', `${currentButton}`);
                                    resultDivCategory.setAttribute('data-id', `${category.id}`);

                                    // p qui contiendra le innerText
                                    let resultTextCategory = document.createElement('p');
                                    resultTextCategory.classList.add('result-text');
                                    resultTextCategory.textContent = this.innerText;

                                    // bouton 'remove'
                                    let resultRemoveCategory = document.createElement('button');
                                    resultRemoveCategory.classList.add('result-remove');
                                    resultRemoveCategory.textContent = 'X';
                                    // let removeImg = document.createElement('img');
                                    // removeImg.src = 'build/images/close-outline.svg';
                                    // resultRemoveCategory.appendChild(removeImg);

                                    // ajouter la nouvelle div à filterSelected
                                    filterSelected.appendChild(resultDivCategory);
                                    resultDivCategory.appendChild(resultTextCategory);
                                    resultDivCategory.appendChild(resultRemoveCategory);

                                    // appeler updateSelectedValues après avoir ajouté un nouvel élément
                                    updateSelectedValues();

                                    // ajouter un écouteur d'événement à chaque bouton 'remove'
                                    document.addEventListener('click', function (event) {
                                        if (event.target.classList.contains('result-remove')) {
                                            // obtenir la div parent de ce bouton 'remove'
                                            let categoryDiv = event.target.parentElement;
                                            // vérifier si categoryDiv a un parent
                                            if (categoryDiv.parentElement) {
                                                // supprimer categoryDiv de .filter_selected
                                                categoryDiv.parentElement.removeChild(categoryDiv);

                                                // appeler updateSelectedValues après avoir supprimé un élément
                                                updateSelectedValues();
                                            }
                                        }
                                    });

                                    // ajouter la classe 'active-result' au bouton 'add'
                                    this.classList.add('active-result');
                                } else {
                                    // si le innerText du bouton 'add' n'est plus présent dans filterSelected, retirer la classe 'active-result'
                                    this.classList.remove('active-result');
                                }
                            });
                        });

                        // Filtrer les boutons en fonction de la recherche
                        let timeout = null;
                        searchInput.addEventListener('input', function () {
                            clearTimeout(timeout);
                            timeout = setTimeout(() => {
                                let filter = this.value.toUpperCase();
                                data.forEach(category => {
                                    let btn = filterShow.querySelector(`.add_button-${currentButton}[data-id="${category.id}"]`);
                                    if (btn.innerText.toUpperCase().includes(filter)) {
                                        btn.parentElement.style.display = "";
                                    } else {
                                        btn.parentElement.style.display = "none";
                                    }
                                });
                            }, 500); // Délai de 500 ms
                        });
                    }

                    //* POUR LES BOUTTON DE FILTRES THEMES, GENRES, MODES
                    if (currentButton == 'themes' || currentButton == 'genres' || currentButton == 'modes') {
                        // On met à jour le contenu de filterShow en fonction du bouton cliqué pour récuperer les données en fonction de la catégorie

                        // Trier les add_button par ordre alphabétique
                        data.sort((a, b) => a.name.localeCompare(b.name));

                        data.forEach(category => {
                            let categoryDiv = document.createElement('div');
                            categoryDiv.classList.add('category', `category_${currentButton}`);
                            let categoryAddButton = document.createElement('button');
                            categoryAddButton.classList.add(`add_button-${currentButton}`);
                            // categoryAddButton.setAttribute('data-category', `${currentButton}`);
                            // categoryAddButton.setAttribute('data-id', `${category.id}`);
                            categoryAddButton.innerText = `${category.name}`;

                            //* AJOUTE LORS DU CLIQUE SUR LE BOUTON ADD DANS .filter_selected
                            // sélectionner l'élément avec la classe '.filter_selected'
                            let filterSelected = document.querySelector('.filter_selected');

                            // ajouter un écouteur d'événements de clic au bouton 'add'
                            categoryAddButton.addEventListener('click', function () {
                                // vérifier si le innerText du bouton 'add' est déjà présent dans filterSelected
                                if (!filterSelected.textContent.includes(this.innerText)) {
                                    // div qui contiendra le innerText du bouton 'add'
                                    let resultDivCategory = document.createElement('div');
                                    resultDivCategory.classList.add('result', `result-${currentButton}`);
                                    resultDivCategory.setAttribute('data-category', `${currentButton}`);
                                    resultDivCategory.setAttribute('data-id', `${category.id}`);

                                    // p qui contiendra le innerText
                                    let resultTextCategory = document.createElement('p');
                                    resultTextCategory.classList.add('result-text');
                                    resultTextCategory.textContent = this.innerText;

                                    // bouton 'remove'
                                    let resultRemoveCategory = document.createElement('button');
                                    resultRemoveCategory.classList.add('result-remove');
                                    resultRemoveCategory.textContent = 'X';
                                    // let removeImg = document.createElement('img');
                                    // removeImg.src = 'build/images/close-outline.svg';
                                    // resultRemoveCategory.appendChild(removeImg);

                                    // ajouter la nouvelle div à filterSelected
                                    filterSelected.appendChild(resultDivCategory);
                                    resultDivCategory.appendChild(resultTextCategory);
                                    resultDivCategory.appendChild(resultRemoveCategory);

                                    // appeler updateSelectedValues après avoir ajouté un nouvel élément
                                    updateSelectedValues();

                                    // ajouter un écouteur d'événement à chaque bouton 'remove'
                                    document.addEventListener('click', function (event) {
                                        if (event.target.classList.contains('result-remove')) {
                                            // obtenir la div parent de ce bouton 'remove'
                                            let categoryDiv = event.target.parentElement;
                                            // vérifier si categoryDiv a un parent
                                            if (categoryDiv && categoryDiv.parentElement) {
                                                // supprimer categoryDiv de .filter_selected
                                                categoryDiv.parentElement.removeChild(categoryDiv);

                                                // appeler updateSelectedValues après avoir supprimé un élément
                                                updateSelectedValues();
                                            }
                                        }
                                    });

                                    // ajouter la classe 'active-result' au bouton 'add'
                                    this.classList.add('active-result');
                                } else {
                                    // si le innerText du bouton 'add' n'est plus présent dans filterSelected, retirer la classe 'active-result'
                                    this.classList.remove('active-result');
                                }
                            });

                            // On ajoute les éléments dans le DOM de chaque catégorie
                            categoryDiv.appendChild(categoryAddButton);
                            filterShow.appendChild(categoryDiv);
                        });
                    }

                });
            });
        }

        //* FONCTION POUR LES BOUTTONS SORT RATING ET RELEASED
        function sortResult() {
            let gameShowDiv = document.querySelector('#games_sort');
            let sortDiv = document.createElement('div');
            sortDiv.classList.add('sort_games');

            let sortRating = document.createElement('button');
            sortRating.classList.add('sort_rating');
            // sortRating.classList.add('sort-active'); // Ajouter la classe 'sort-active' à sortRating
            sortRating.setAttribute('data-sort', 'desc');
            sortRating.innerText = 'Sort by rating';

            let sortReleased = document.createElement('button');
            sortReleased.classList.add('sort_released');
            sortReleased.classList.add('sort-active'); // Ajouter la classe 'sort-active' à sortRating
            sortReleased.setAttribute('data-sort', 'desc');
            sortReleased.innerText = 'Sort by released';

            // Ajouter une image à sortRating 
            let sortRatingImg = document.createElement('img');
            sortRatingImg.src = 'build/images/caret-down-outline.svg';
            sortRating.appendChild(sortRatingImg);

            // Ajouter une image à sortReleased 
            let sortReleasedImg = document.createElement('img');
            sortReleasedImg.src = 'build/images/caret-down-outline.svg';
            sortReleased.appendChild(sortReleasedImg);


            sortDiv.appendChild(sortReleased);
            sortDiv.appendChild(sortRating);
            gameShowDiv.appendChild(sortDiv);

            // Ajouter un écouteur d'événement de clic à sortRating
            sortRating.addEventListener('click', function () {
                let currentSort = this.getAttribute('data-sort');
                if (currentSort === 'desc') {
                    this.setAttribute('data-sort', 'asc');
                    sortRatingImg.src = 'build/images/caret-up-outline.svg';
                } else {
                    this.setAttribute('data-sort', 'desc');
                    sortRatingImg.src = 'build/images/caret-down-outline.svg';
                }
                // Mettre à jour l'attribut data-sort de sortReleased
                sortReleased.setAttribute('data-sort', null);
                // Ajouter la classe 'sort-active' à sortRating et la supprimer de sortReleased
                this.classList.add('sort-active');
                sortReleased.classList.remove('sort-active');
                updateSelectedValues();
            });

            // Ajouter un écouteur d'événement de clic à sortReleased
            sortReleased.addEventListener('click', function () {
                let currentSort = this.getAttribute('data-sort');
                if (currentSort === 'desc') {
                    this.setAttribute('data-sort', 'asc');
                    sortReleasedImg.src = 'build/images/caret-up-outline.svg';

                } else {
                    this.setAttribute('data-sort', 'desc');
                    sortReleasedImg.src = 'build/images/caret-down-outline.svg';
                }
                // Mettre à jour l'attribut data-sort de sortRating
                sortRating.setAttribute('data-sort', null);
                this.classList.add('sort-active');
                sortRating.classList.remove('sort-active');
                updateSelectedValues();
            });
        }


        //* APPEL DES FONCTIONS
        filterBtn();
        sortResult();

    });
}


