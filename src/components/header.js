const createHeader = () => {
    let container = document.createElement('header');
    container.setAttribute('id', 'header')
    let title = document.createElement('h2');
    let img = document.createElement('img');

    title.textContent = 'Frites';
    container.appendChild(title, img);
}

export default createHeader;