const navMenu = () => {
    document.querySelector('.menu-button').addEventListener('click', toggleMenu);
    document.querySelector('.link-search').addEventListener('click', openMenu);
    document.querySelector('.list_item_user-link').addEventListener('click', openMenu);
    
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