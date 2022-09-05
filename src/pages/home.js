//import components
import createHeader from "../components/header";
import createNav from "../components/nav";
import createFooter from "../components/footer";
import { makeBreak, makeDiv, makePar, makeBtn } from "../components/tagMaker";
import {content} from "../index";
import sImage1 from "../../img/slider-image1.jpeg";
import sImage2 from "../../img/slider-image2.jpeg";
import sImage3 from "../../img/slider-image3.jpeg";
import sImage4 from "../../img/slider-image4.jpeg";
import sImage5 from "../../img/slider-image5.jpeg";
import sImage6 from "../../img/slider-image6.jpeg";


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
    let currentSlide = 0;

    //add images
    images[0] = sImage1;
    images[1] = sImage2;
    images[2] = sImage3;
    images[3] = sImage4;
    images[4] = sImage5;
    images[5] = sImage6;

    //set background image to currentSlide
    const setSlide = () => {
        container.style.background = images[currentSlide];
    }
    
    const changeSlide = () => {
        if (currentSlide < images.length - 1){
            currentSlide +=1;
        } else {
            currentSlide = 0;
        }
        setSlide();

        setTimeout('changeSlide()', 4000);
    }

    window.addEventListener('onload', changeSlide);
    
    const homeOverlay = makeDiv('home-overlay');

    const overlayText = makePar('overlay-text');
    overlayText.textContent = `Get that chip off your shoulder ${makeBreak()}`

    const overlayBtn = makeBtn('overlay-btn', 'Order Now!');

    homeOverlay.append(overlayText, overlayBtn);
    container.append(homeOverlay);

    return container;
}

export const createContent = () => {
  content.append(createHeader(),
    createNav(),
    createHomeTitle(),
    createHeroSlider(),
    createFooter())
}
