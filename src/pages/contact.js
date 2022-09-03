//import components
import createHeader from "../components/header";
import createNav from "../components/nav";
import createFooter from "../components/footer";
import { makeBreak, makeDiv, makePar, makeInput, createIcon } from "../components/tagMaker";

const createMaterialIcon = (mat, cls) => {
    let con = document.createElement('span');
    con.classList.add(cls);
    con.innerHTML = mat;
}

const createContactTitle = () => {
    let container = makeDiv('contact-title');
    let topLine = makePar('contact-call');
    topLine.textContent = 'Have Something to Say?'

    let mainTitle = makePar('cTitle-main');
    mainTitle.textContent = 'CONTACT US';

    container.appendChild(topLine, makeBreak(), mainTitle);
    return container;
}

const createContactLeft = () => {
    //remember to add the icons
    let container = makeDiv('contact-left');
    
    let hours = makeDiv('hours-service');
    let hoursIcon = createMaterialIcon('schedule', 'material-symbols-outlined')
    let hoursText = makePar('hours-text');
    hoursText.textContent = `Monday - Friday: 10AM - 8PM ${makeBreak()} Saturday - Sunday: 10AM - 6PM`

    hours.appendChild(hoursIcon, hoursText);

    let location = makeDiv('contact-location');
    let locationIcon = createMaterialIcon('explore', 'material-symbols-outlined');
    let locationText = makePar('location-text');
    locationText.textContent = `1514 Edwards Street ${makeBreak()} Greenville ${makeBreak()} NC 27834`;

    location.appendChild(locationIcon, locationText);
    let phoneIcon = createMaterialIcon('call', 'material-symbols-outlined');
    let phone = makeDiv('contact-phone');
    let phoneText = makePar('phone-text');
    phoneText.textContent = `+1 (545) 732 0553`;

    phone.appendChild(phoneIcon, phoneText);

    container.appendChild(hours, location, phone);
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

    container.appendChild(name, email, message, submit);
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
    twitterCon.appendChild(twitTitle, twitIcon);
    

    let instaCon = makeDiv('insta-container');
    let inTitle = makePar();
    inTitle.textContent = 'Instagram';
    let insIcon = createIcon('https://instagram.com', 'fa fa-instagram');
    instaCon.appendChild(inTitle, insIcon)


    let fbCon = makeDiv('fb-container');
    let fbTitle = makePar();
    fbTitle.textContent = 'Facebook';
    let fbIcon = createIcon('https://facebook.com', 'fa fa-facebook-official');
    fbCon.appendChild(fbTitle, fbIcon);

    const iconContainer = makeDiv('icon-container');
    iconContainer.appendChild(twitterCon, instaCon, fbCon);

    container.appendChild(socialsTitle, iconContainer);
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
    container.appendChild(createContactLeft(), createContactRight());
}

const createContent = () => {
    createHeader();
    createNav();
    createContactTitle();
    createContactMain();
    createSocials();
    createContactMap();
    createFooter();
}

export default createContent();