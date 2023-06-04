import * as flsFunctions from './modules/functions.js';
import './header.js';
import './description.js';
import './jquery-3.7.0.min.js';
import './slick.min.js';
import './partners_slider.js';
import './button-top.js';

flsFunctions.testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
}); 
