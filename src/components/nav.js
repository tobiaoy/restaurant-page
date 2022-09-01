const createSpace = () => {
   return document.createElement('div')

}

const createLink = (x, t) => {
    let link = document.createElement('a');
    link.setAttribute('href', x);
    link.textContent = t;
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

    let home = createLink('#', 'Home');
    let contact = createLink('#', 'Contact');

    nv1.appendChild(home, createSpace(), contact);

    let menu = createLink('#', 'Menu');
    let about = createLink('#', 'About');

    nv2.appendChild(menu, createSpace(), about);

    container.appendChild(nv1, nv2);
    
    return container;
}

export default createNav;