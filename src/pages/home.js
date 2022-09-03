//import components
import createHeader from "../components/header";
import createNav from "../components/nav";
import createFooter from "../components/footer";
import { makeBreak, makeDiv, makePar, makeBtn } from "../components/tagMaker";


const createHomeTitle = () => {
    let container = makeDiv('home-title');
    let homeTitle = makePar('');
    homeTitle.textContent = 'Home of the Potato';

    container.appendChild(homeTitle);
    return container;
}

const createHeroSlider = () => {
    let container = makeDiv('hero-slider');
    let images = [];
    //add images
    //set background image to currentSlide
    let currentSlide = 0;
    
    const changeSlide = () => {
        if (currentSlide < images.length - 1){
            currentSlide +=1;
        } else {
            currentSlide = 0;
        }
        //background = images[currentSlide]
    }
    
    setTimeout(changeSlide, 4000);

    const homeOverlay = makeDiv('home-overlay');

    const overlayText = makePar('overlay-text');
    overlayText.textContent = `Get that chip off your shoulder ${makeBreak()}`

    let overlayBtn = makeBtn('overlay-btn', 'Order Now!');

    homeOverlay.appendChild(overlayText, overlayBtn);
    container.appendChild(homeOverlay);

    return container;

}

const createContent = () => {
    createHeader();
    createNav();
    createHomeTitle();
    createHeroSlider();
    createFooter();
}

//something about window onload for the carousel

export default createContent;