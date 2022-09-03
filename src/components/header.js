const createHeader = () => {
    let container = document.createElement('header');
    container.setAttribute('id', 'header')
    let title = document.createElement('h2');
    title.setAttribute('id', 'header-title');
    let img = document.createElement('img');
    img.setAttribute('id', 'header-image');

    title.textContent = 'Frites';
    container.appendChild(title, img);
    return container;
}

export default createHeader;