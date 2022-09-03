//imports
import {createContent as renderAbout} from "./pages/about";
import {createContent as renderHome} from "./pages/home";
import {createContent as renderMenu} from "./pages/menu";
import {createContent as renderContact} from "./pages/contact";

const content = document.querySelector('#content');
let currentPage = 'home';

const clearPage = () => {
    content.innerHTML = '';
}

window.addEventListener('onload', renderHome());

const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const contactBtn  = document.querySelector('#contact');
const menuBtn = document.querySelector('#menu');

homeBtn.addEventListener('click', () => {
    if (currentPage === 'home'){
        return;
    } else {
        clearPage();
        content.appendChild(renderHome());
    }

    currentPage = 'home';
});

aboutBtn.addEventListener('click', () => {
    if (currentPage === 'about'){
        return;
    } else {
        clearPage();
        content.appendChild(renderAbout());
    }

    currentPage = 'about';
});

contactBtn.addEventListener('click', () => {
    if (currentPage === 'contact'){
        return;
    } else {
        clearPage();
        content.appendChild(renderContact());
    }

    currentPage = 'contact';
})

menuBtn.addEventListener('click', () => {
    if (currentPage === 'menu'){
        return;
    } else {
        clearPage();
        content.appendChild(renderMenu());
    }

    currentPage = 'menu';
})

