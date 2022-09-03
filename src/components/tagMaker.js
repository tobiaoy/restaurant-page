const makeDiv = (id) => {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    return div;
}

const makeBreak = () => {
    return document.createElement('br');
}

const makePar = (id) => {
    let par = document.createElement('p');
    par.setAttribute('id', id);
    return par;
}

const makeInput = (type, id) => {
    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    return input;
}

const makeBtn = (id, t) => {
    let btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.textContent = t;
    return btn;
}

const createIcon = (link, favicon) => {
    let text = document.createElement('a');
    text.setAttribute('href', link);
    let icon = document.createElement('i');
    icon.classList.add(favicon);

    text.appendChild(icon);
    return text;
}




export {makeDiv, makeBreak, makePar, makeInput, makeBtn, createIcon};