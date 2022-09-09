//import components
import createHeader from "../components/header";
import createNav from "../components/nav";
import createFooter from "../components/footer";
import {makeDiv, makePar, makeInput, createImg, makeBtn } from "../components/tagMaker";
import { content } from "../index";
import "../styles/page.scss"

//import images
import clockImg from "../../img/clock.svg"
import locImg from "../../img/gps.svg"
import phoneImg from "../../img/phone.svg"
import twitterImg from "../../img/twitter.png"
import instaImg from "../../img/instagram.png"
import fbImg from "../../img/facebook.png"
import yelpImg from "../../img/yelp.png"


const contactMain = makeDiv('contact-main');

const createContactTitle = () => {
    let container = makeDiv('contact-title');
    let topLine = makePar('contact-call');
    topLine.textContent = 'Have Something to Say?'

    let mainTitle = makePar('cTitle-main');
    mainTitle.textContent = 'CONTACT US';

    container.append(topLine, mainTitle);
    contactMain.appendChild(container);
    return container;
}

//the left side concerns details about the stores opening and closing times

const createContactLeft = () => {
    let container = makeDiv('contact-left');
    
    let hours = makeDiv('hours-service');
    let hoursIcon = createImg(clockImg, 'clock img');
    let hoursText = makeDiv('hours-text');
    let hText1 = makePar('');
    let hText2 = makePar('');
    hoursText.append(hText1, hText2);
    hText1.textContent = `Monday - Friday: 10AM - 8PM`
    hText2.textContent = `Saturday - Sunday: 10AM - 6PM`;
    hours.append(hoursIcon, hoursText);

    let location = makeDiv('contact-location');
    let locationIcon = createImg(locImg, 'location img');
    let locationText = makePar('location-text');
    locationText.textContent = `1514 Edwards Street \n Greenville \n NC 27834`;
    location.append(locationIcon, locationText);

    let phone = makeDiv('contact-phone');
    let phoneIcon = createImg(phoneImg, 'phone img');
    let phoneText = makePar('phone-text');
    phoneText.textContent = `+1 (545) 732 0553`;
    phone.append(phoneIcon, phoneText);

    container.append(hours, location, phone);
    contactMain.appendChild(container);
    //return container;
}

//contact right should be a contact form
const createContactRight = () => {
    let container = document.createElement('form');
    container.setAttribute('id', 'contact-form');

    let name = makeInput('text', 'contact-name');
    name.placeholder = 'Name: ';

    let email = makeInput('email', 'contact-email');
    email.placeholder = 'Email: ';

    let message = document.createElement('textarea');
    message.setAttribute('id', 'contact-message');
    message.placeholder = 'You can write your message here...';

    let submit = makeBtn('submit', 'Submit');

    container.append(name, email, message, submit);
    contactMain.appendChild(container);
    //return container;

}

const createContactMain = () => {
    createContactLeft();
    createContactRight();
    return contactMain;
}


const createSocials = () => {
    let container = makeDiv('socials-box');

    let socialsTitle = makePar('socials-title');
    socialsTitle.textContent = '... Find us on social media';

    let twitIcon = createImg(twitterImg, 'twitter-icon')
    let igIcon = createImg(instaImg, 'instagram-icon')
    let fbIcon = createImg(fbImg, 'facebook-icon')
    let yelpIcon = createImg(yelpImg, 'yelp-icon')

    let twitterCon = document.createElement('a');
    twitterCon.setAttribute('href','https://twitter.com')
    twitterCon.setAttribute('id', 'twitter-container');
    twitterCon.appendChild(twitIcon);

    let igCon = document.createElement('a');
    igCon.setAttribute('href', 'https://instagram.com')
    igCon.setAttribute('id', 'ig-container');
    igCon.appendChild(igIcon);

    let fbCon = document.createElement('a');
    fbCon.setAttribute('href', 'https://facebook.com')
    fbCon.setAttribute('id','fb-container');
    fbCon.appendChild(fbIcon);

    let yelpCon = document.createElement('a');
    yelpCon.setAttribute('href', 'https://yelp.com')
    yelpCon.setAttribute('id', 'yelp-container');
    yelpCon.appendChild(yelpIcon);

    const iconContainer = makeDiv('icon-container');
    iconContainer.append(twitterCon, igCon, fbCon, yelpCon);

    container.append(socialsTitle, iconContainer);
    return container;
}


//add map img
const createContactMap = () => {
    const mapContainer = makeDiv('contact-map');
    const mapText = makeBtn('map-text', 'Find us here!');
    mapContainer.appendChild(mapText);
    return mapContainer;
}


export const createContent = () => {

    document.body.append(createHeader(),
    createNav(), createFooter());

   content.append(
   createContactTitle(),
   createContactMain(),
   createSocials(),
   createContactMap()
   )
}
