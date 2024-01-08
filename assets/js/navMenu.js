const navMenu = () => {
    document.querySelector('.menu-button').addEventListener('click', toggleMenu);
    let searchButton = document.querySelector('.link-search');
    let searchInput = document.querySelector('#search-input'); // Assurez-vous que c'est le bon sélecteur pour votre champ de recherche
    let searchForm = document.querySelector('#search-form'); // Assurez-vous que c'est le bon sélecteur pour votre formulaire de recherche

    searchButton.addEventListener('click', function(event) {
        var menu = document.querySelector('.menu');
        if (menu.classList.contains('menu-hidden')) {
            openMenu();
        } else if (searchInput.value.trim() !== '') {
            searchForm.submit();
        }
    });

    let userLink = document.querySelector('.list_item_user-link');
    if (userLink) {
        userLink.addEventListener('click', openMenu);
    }
    
    function toggleMenu() {
        var menu = document.querySelector('.menu');
        var iconBack = document.querySelector('.chevron-back');
        var iconForward = document.querySelector('.chevron-forward');
        menu.classList.toggle('menu-hidden');
        if (menu.classList.contains('menu-hidden')) {
            iconBack.style.display = "none";
            iconForward.style.display = "block";
        } else {
            iconBack.style.display = "block";
            iconForward.style.display = "none";
        }
    }
    
    function openMenu() {
        var menu = document.querySelector('.menu');
        var iconBack = document.querySelector('.chevron-back');
        var iconForward = document.querySelector('.chevron-forward');
        if (menu.classList.contains('menu-hidden')) {
            menu.classList.remove('menu-hidden');
            iconBack.style.display = "block";
            iconForward.style.display = "none";
        }
    }
    
    // Blur background when menu is open
    // document.querySelector('.menu-button').addEventListener('click', function() {
    //     document.querySelector('.body-content').classList.toggle('menu-open');
    // });
}
export default navMenu;