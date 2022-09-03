import { createIcon } from "./tagMaker";

const createFooter = () => {
    let container = document.createElement('footer');
    container.setAttribute('id', 'footer');

    let text = createIcon('https://github.com/tobiaoy', 'fa fa-github')
    text.textContent = '  Tobi Oyero'

    container.appendChild(text);

    return container;
}

export default createFooter;