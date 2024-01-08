export function scrollMenu() {
    window.addEventListener('scroll', function() {
        let rubriques = ['.game_informations', '.game_collection', '.game_medias', '.game_franchises'];
        let filArianeItems = document.querySelectorAll('.scroll_menu_list-item');
        let scrollMenu = document.querySelector('.scroll_menu');

        rubriques.forEach((rubriqueClass, index) => {
            let rubrique = document.querySelector(rubriqueClass);
            if (rubrique) {
                let rect = rubrique.getBoundingClientRect();
                if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    filArianeItems.forEach(item => item.classList.remove('scroll-active'));
                    filArianeItems[index].classList.add('scroll-active');

                    // Change the position of the scroll menu based on the currently visible class
                    if (index === 0) {
                        scrollMenu.style.top = '35%';
                    } else {
                        scrollMenu.style.top = '15%';
                    }
                }
            }
        });
        let buttons = document.querySelectorAll('.scroll_menu_list-item button');

        buttons.forEach((button) => {
            button.addEventListener('click', function() {
                if (this.id === 'scroll-game_informations') {
                    window.scrollTo({top: 0, behavior: 'smooth'});
                } else {
                    let rubriqueClass = '.' + this.id.replace('scroll-', '');
                    let rubrique = document.querySelector(rubriqueClass);
                    if (rubrique) {
                        rubrique.scrollIntoView({behavior: 'smooth'});
                    }
                }
            });
        });
    });
}