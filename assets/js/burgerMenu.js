const burgerMenu = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const burgerMenu = document.getElementById('burger-menu');
        const overlay = document.getElementById('navbar');
        const links = document.querySelectorAll('.navbar__menu__item--link');
        burgerMenu.addEventListener('click', function (event) {
            event.stopPropagation();
            this.classList.toggle("close");
            overlay.classList.toggle("overlay");
        });
        links.forEach(link => {
            link.addEventListener('click', function () {
                burgerMenu.classList.remove("close");
                overlay.classList.remove("overlay");
            });
        });
        document.addEventListener('click', function (event) {
            if (!overlay.contains(event.target) && !burgerMenu.contains(event.target)) {
                burgerMenu.classList.remove("close");
                overlay.classList.remove("overlay");
            }
        });
    });
};

export default burgerMenu;