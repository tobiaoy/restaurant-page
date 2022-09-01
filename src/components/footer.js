const createFooter = () => {
    let container = document.createElement('footer');
    container.setAttribute('id', footer);
    let text = document.createElement('a');
    text.setAttribute('href', 'https://github.com/tobiaoy');
    let icon = document.createElement('i');
    icon.classList.add('fa fa-github');
    text.textContent = '  Tobi Oyero';

    text.appendChild(icon);
    container.appendChild(text);

    return container;
}

export default createFooter;