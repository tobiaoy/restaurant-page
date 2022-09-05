//import components
import createHeader from "../components/header";
import createNav from "../components/nav";
import createFooter from "../components/footer";
import { makeBreak, makeDiv, makePar, makeInput, createIcon } from "../components/tagMaker";
import { content } from "../index";
import clockImg from "../../img/clock.svg"
import locImg from "../../img/gps.svg"
import phoneImg from "../../img/phone.svg"
import twitterImg from "../../img/twitter-logo.svg"
import instaImg from "../../img/instagram-logo.svg"
import fbImg from "../../img/facebook-logo.svg"


const createMaterialIcon = (mat, cls) => {
    let con = document.createElement('span');
    con.classList.add(cls);
    con.innerHTML = mat;
    return con;
}

const createContactTitle = () => {
    let container = makeDiv('contact-title');
    let topLine = makePar('contact-call');
    topLine.textContent = 'Have Something to Say?'

    let mainTitle = makePar('cTitle-main');
    mainTitle.textContent = 'CONTACT US';

    container.append(topLine, makeBreak(), mainTitle);
    return container;
}

const createContactLeft = () => {
    //remember to add the icons
    let container = makeDiv('contact-left');
    
    let hours = makeDiv('hours-service');
    let hoursIcon = createMaterialIcon('schedule', 'material-symbols-outlined')
    let hoursText = makePar('hours-text');
    hoursText.textContent = `Monday - Friday: 10AM - 8PM ${makeBreak()} Saturday - Sunday: 10AM - 6PM`

    hours.append(hoursIcon, hoursText);

    let location = makeDiv('contact-location');
    let locationIcon = createMaterialIcon('explore', 'material-symbols-outlined');
    let locationText = makePar('location-text');
    locationText.textContent = `1514 Edwards Street ${makeBreak()} Greenville ${makeBreak()} NC 27834`;

    location.append(locationIcon, locationText);

    let phoneIcon = createMaterialIcon('call', 'material-symbols-outlined');
    let phone = makeDiv('contact-phone');
    let phoneText = makePar('phone-text');
    phoneText.textContent = `+1 (545) 732 0553`;

    phone.append(phoneIcon, phoneText);

    container.append(hours, location, phone);
    return container;

}

const createContactRight = () => {
    let container = document.createElement('form');
    let name = makeInput('text', 'contact-name');
    name.setAttribute('placeholder', 'Name: ');

    let email = makeInput('email', 'contact-email');
    email.setAttribute('placeholder', 'email');

    let message = makeInput('text-area', 'contact-message');
    message.setAttribute('placeholder', 'Write your message here...');

    let submit = makeInput('submit', 'submit-btn');
    submit.textContent('Submit');

    container.append(name, email, message, submit);
    return container;

}

const createSocials = () => {
    let container = makeDiv('socials-box');
    let socialsTitle = makePar('socials-title');
    socialsTitle.textContent = '... Find us on social media';
    
    let twitterCon = makeDiv('twitter-container');
    let twitTitle = makePar()
    twitTitle.textContent = 'Twitter'
    let twitIcon = createIcon('https://twitter.com', 'fa fa-twitter')
    twitterCon.append(twitTitle, twitIcon);
    

    let instaCon = makeDiv('insta-container');
    let inTitle = makePar();
    inTitle.textContent = 'Instagram';
    let insIcon = createIcon('https://instagram.com', 'fa fa-instagram');
    instaCon.append(inTitle, insIcon)


    let fbCon = makeDiv('fb-container');
    let fbTitle = makePar();
    fbTitle.textContent = 'Facebook';
    let fbIcon = createIcon('https://facebook.com', 'fa fa-facebook-official');
    fbCon.append(fbTitle, fbIcon);

    const iconContainer = makeDiv('icon-container');
    iconContainer.append(twitterCon, instaCon, fbCon);

    container.append(socialsTitle, iconContainer);
    return container;
}

const createContactMap = () => {
    const mapContainer = makeDiv('contact-map');
    const mapText = makePar('map-text');
    mapText.textContent = 'Find us here!'

    mapContainer.appendChild(mapText);
    return mapContainer;

}


const createContactMain = () => {
    const container = makeDiv('contact-main');
    container.append(createContactLeft(), createContactRight());
}

export const createContent = () => {
   content.append( createHeader(),
   createNav(),
   createContactTitle(),
   createContactMain(),
   createSocials(),
   createContactMap(),
   createFooter())
}
