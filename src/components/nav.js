import { makeDiv, } from "../components/tagMaker";

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

    let home = createLink('#', 'Home', 'home');
    let contact = createLink('#', 'Contact', 'contact');

    nv1.appendChild(home, makeDiv(), contact);

    let menu = createLink('#', 'Menu', 'menu');
    let about = createLink('#', 'About', 'about');

    nv2.appendChild(menu, makeDiv(), about);

    container.appendChild(nv1, nv2);
    
    return container;
}

export default createNav;