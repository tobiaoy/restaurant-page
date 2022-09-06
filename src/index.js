//imports
import {createContent as renderAbout} from "./pages/about";
import {createContent as renderHome} from "./pages/home";
import {createContent as renderMenu} from "./pages/menu";
import { createContent as renderContact } from "./pages/contact";


export const content = document.querySelector('#content');

window.addEventListener('onload', renderHome());

 export let currentPage = 'home';

 export const clearPage = () => {
    content.innerHTML = '';
}

export const setCurrentPage = (x) => {
    currentPage = x
}




