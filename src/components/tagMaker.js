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
    input.type = type;
    input.setAttribute('id', id);
    return input;
}

const makeBtn = (id, t) => {
    let btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.textContent = t;
    return btn;
}

const createImg = (src, alt) => {
    let img  = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}


export {makeDiv, makeBreak, makePar, makeInput, makeBtn, createImg};