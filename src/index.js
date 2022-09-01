//console.log('Is this thing on?');
//there should be logic to load the page
//there should be something to wipe the pages when a nav btn is pressed
//imports for all the necessary things
//we want to make each page a distinct module and write all the html in JS

const content = document.querySelector('#content');
let currentPage = 'home';

const clearPage = () => {
    content.innerHTML = '';
}

