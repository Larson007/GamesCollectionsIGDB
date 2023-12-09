/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// Import JQuery
var $ = require('jquery');
global.$ = global.jQuery = $;

// Import Toastr
import toastr from 'toastr';
import 'toastr/toastr.scss';
window.toastr = toastr;


// Import Bootstrap
import './styles/bootstrap.min.scss';
import './js/bootstrap.bundle.min.js';

// Import Slick
import './slick/slick.scss';
import './slick/slick-theme.scss';
import './slick/slick.min.js';

// CSS
import './styles/app.scss';

// NavMenu
import './js/navMenu.js';
navMenu();


// Import Js
import { notifications } from './js/notifications.js';
import { initGameDetails } from './js/pages/gameDetails.js';
import { initSearchFriends } from './js/pages/searchFriends.js';
import { initDashboard } from './js/pages/dashboard.js';
import navMenu from './js/navMenu.js';

// Start the application
console.log('Hello from app.js');

// Notifications
notifications();

if (document.querySelector('.game-detail')) {
    initGameDetails();
} 
if (document.querySelector('.recherche')) {
    initSearchGames();
}
if (document.querySelector('.recherche-amis')) {
    initSearchFriends();
}
if (document.querySelector('.dashboard')) {
    initDashboard();
}

// Vider l'input Search Game lors du chargement de la page
window.onload = function () {
    document.getElementById('search-input').value = '';
    };






