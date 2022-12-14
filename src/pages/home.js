//import components
import createHeader from "../components/header";
import createNav from "../components/nav";
import createFooter from "../components/footer";
import { makeDiv, makePar, makeBtn } from "../components/tagMaker";
import {content} from "../index";
import "../styles/page.scss"
import { createContent as renderMenu } from "./menu";
import { clearPage, setCurrentPage } from "../index";

import sImg1 from "../../img/slider-img1.jpeg";
import sImg2 from "../../img/slider-img2.jpeg";
import sImg3 from "../../img/slider-img3.jpeg";
import sImg4 from "../../img/slider-img4.jpeg";

let images = [];
let i = 0;

//add images
images[0] = sImg1;
images[1] = sImg2;
images[2] = sImg3;
images[3] = sImg4;


const changeSlide = (con) => {
    con.style.backgroundImage = `url(${images[i]})`;
    
    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    
}


const createHomeTitle = () => {
    let container = makeDiv('home-title');
    let homeTitle = makePar('');
    homeTitle.textContent = 'HOME OF THE POTATO';

    container.appendChild(homeTitle);
    return container;
}

const createHeroSlider = () => {
    let container = makeDiv('hero-slider');
    setInterval(() => {changeSlide(container)}, 5000);
   
    const homeOverlay = makeDiv('home-overlay');
    const overlayText = makePar('overlay-text');
    overlayText.textContent = `GET THAT CHIP OFF YOUR SHOULDER`
    const overlayBtn = makeBtn('overlay-btn', 'Order Now!');

    overlayBtn.addEventListener('click', () => {
        clearPage();
        renderMenu();
        setCurrentPage('menu');
    });

    homeOverlay.append(overlayText, overlayBtn);
    container.append(homeOverlay);

    return container;
}

export const createContent = () => {

  document.body.append(createHeader(),
  createNav(),createFooter());

  content.append(
    createHomeTitle(),
    createHeroSlider());
}
