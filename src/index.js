//imports
import {createContent as renderHome} from "./pages/home";

export const content = document.querySelector('#content');

window.addEventListener('load', renderHome());

 export let currentPage = 'home';

 export const clearPage = () => {
    content.innerHTML = '';
}

export const setCurrentPage = (x) => {
    currentPage = x
}




