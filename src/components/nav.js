import { makeDiv, makeBtn } from "../components/tagMaker";
import {createContent as renderAbout} from "../pages/about";
import {createContent as renderHome} from "../pages/home";
import {createContent as renderMenu} from "../pages/menu";
import { createContent as renderContact } from "../pages/contact";
import { clearPage, setCurrentPage, currentPage } from "../index";
import '../styles/component.scss'

const createLink = (x, t, id) => {
    let link = document.createElement('a');
    link.setAttribute('href', x);
    link.textContent = t;
    link.setAttribute('id', id);
    link.classList.add('nav-item')
    return link;
}

const createNav = () => {
    let container = document.createElement('div');
    container.setAttribute('id', 'nav');

    let nv1 = document.createElement('div');
    nv1.setAttribute('id', 'nv1')
    nv1.classList.add('nv');

    let nv2 = document.createElement('div');
    nv2.setAttribute('id', 'nv2');
    nv2.classList.add('nv');

    let home = makeBtn('home', 'Home');
    let contact = makeBtn('contact', 'Contact');

    nv1.append(home, contact);

    let menu = makeBtn('menu', 'Menu');
    let about = makeBtn('about', 'About');

    nv2.append(menu, about);

    container.append(nv1, nv2);

    home.addEventListener('click', () => {
        if (currentPage === 'home'){
            return;
        } else {
            clearPage();
            renderHome();
        }
    
        setCurrentPage('home');
    });
    
    about.addEventListener('click', () => {
        if (currentPage === 'about'){
            return;
        } else {
            clearPage();
            renderAbout();
        }
    
        setCurrentPage('about');
    });
    
    contact.addEventListener('click', () => {
        if (currentPage === 'contact'){
            return;
        } else {
            clearPage();
            renderContact();
        }
    
        setCurrentPage('contact');
    })
    
    menu.addEventListener('click', () => {
        if (currentPage === 'menu'){
            return;
        } else {
            clearPage();
            renderMenu();
        }
    
        setCurrentPage('menu');
    })
    
    return container;
}


export default createNav;