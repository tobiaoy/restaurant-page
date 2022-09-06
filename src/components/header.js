import fritesLogo from "../../img/frites-logo.png"
import '../styles/component.scss'

const createHeader = () => {
    let container = document.createElement('header');
    container.setAttribute('id', 'header')
    
    let title = document.createElement('h2');
    title.setAttribute('id', 'header-title');
    title.textContent = 'Frites';
    
    let img = document.createElement('img');
    img.setAttribute('id', 'header-image');
    img.src = fritesLogo;
    img.alt = `frites logo`

    
    container.append(title, img);
    return container;
}

export default createHeader;