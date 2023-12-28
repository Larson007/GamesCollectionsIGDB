import { gameNavInfos } from './gameNavInfos.js';
import { gameCollections } from './gameCollections.js';
import { gameMedias } from './gameMedias.js';

export function initGame() {

    console.log('Hello from game.js');


    //* Fonction pour la navigation dans les informations du jeu

    document.addEventListener('DOMContentLoaded', (event) => {
    
        gameNavInfos();
        gameCollections();
        gameMedias();
        
    
    });



}