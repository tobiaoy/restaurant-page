//import components
import createHeader from "../components/header";
import createNav from "../components/nav";
import createFooter from "../components/footer";
import { makeBreak, makeDiv} from "../components/tagMaker";
import {content} from "../index";
import "../styles/page.scss"

const makePar = (cl, id) => {
    let par = document.createElement('p');
    par.classList.add(cl);
    par.setAttribute('id', id);
    return par;
}

const makeMenuItem = (id, title, underText, price) => {
    let item = makeDiv(id);
    let ttl = makePar('menu-title', '');
    let uText = makePar('menu-undertext', '')
    let prc = makePar('menu-price', '');

    ttl.textContent = title;
    uText.textContent = underText;
    prc.textContent = price;

    item.classList.add('menu-item');

    item.append(ttl, uText, prc);
    return item;
}

const createMenu = () => {
    let container = makeDiv('menu-container');
    let menuTitle = makePar('main-title', 'menu-title');
    menuTitle.textContent = 'MENU';

    //create container for straight fries
    let straightFr = makeDiv('straight-fries');
    let sfTitle = makePar('sub-title', 'sf-title');
    sfTitle.textContent = 'STRAIGHT FRIES';

    let chipotleFries = makeMenuItem('chipotle-fries', 'Chipotle Fries', 'Spicy fries in pepper and chipotle sauces', '$12.50');
    let garlicFries = makeMenuItem('garlic-fries', 'Garlic Fries', 'Fries made with onions and doused in roast garlic aioli', '$11.50');
    let nachoFries = makeMenuItem('nacho-fries', 'Nacho Fries', 'Fries drowned in chili and covered in a cheese sauce', '$15.00');
    let seafoodFries = makeMenuItem('seafood-fries', 'Seafood Fries', 'Fish & Chips in tartar sauce', '$15.00');
    let bbqFries = makeMenuItem('bbq-fries', 'BBQ Fries', 'Peppered fries made in our specialty bbq sauce', '$12.50');

    straightFr.append(sfTitle, chipotleFries, garlicFries, nachoFries, seafoodFries, bbqFries);

    //create container for poutine
    let poutines = makeDiv('poutines-block');
    let poTitle = makePar('sub-title', 'poutine-title');
    poTitle.textContent = 'POUTINE';

    let classicPo = makeMenuItem('classic-poutine', 'Classic', 'Fries in gravy with cheese curds', '$12.50');
    let baconPo = makeMenuItem('bacon-poutine', 'Bacon Poutine', 'The classic with a touch of pork/turkey bacon', '$13.50');
    let chickenPo = makeMenuItem('chicken-poutine', 'Chicken Poutine', 'The classic with shredded fried/roasted chicken', '$14.50');
    let beefPo = makeMenuItem('beef-poutine', 'Beef Poutine', 'The classic with a shredded, peppered beef glaze', '$14.50');
    let spicyPo = makeMenuItem('spicy-poutine', 'Spicy Poutine', 'Fries in a spicy cheese sauce and a side of gravy', '12.00');

    poutines.append(poTitle, classicPo, baconPo, chickenPo, beefPo, spicyPo);


    //create container for big fries
    let bigFr = makeDiv('big-fries');
    let bfTitle = makePar('sub-title', 'bf-title');
    bfTitle.textContent = 'BIG FRIES';

    let classicBu = makeMenuItem('classic-bucket', 'Classic Bucket',  '16oz of our best salted shoestrings', '$12.00');
    let chickenFr = makeMenuItem('chicken-fries', 'Chicken Fries', '16oz bucket of fry-shaped chicken', '$30.00');
    
    bigFr.append(bfTitle, classicBu, chickenFr);

    //create container for alt cuts
    let altCuts = makeDiv('alt-cuts');
    let altTitle = makePar('sub-title', 'alt-title');
    altTitle.textContent = 'ALTERNATIVE CUTS';

    let waffleFr = makeMenuItem('waffle-fries', 'Waffle Fries', 'waffle shaped potato cuts', '$12.00');
    let hashBr = makeMenuItem('hash-browns', 'Hash browns', '', '$12.00');
    let miniMash = makeMenuItem('mash-potatoes', 'Mini Mash Potatoes', '5oz of mash potatoes with a topping of choice', '$14.00');
    let roastCl = makeMenuItem('roast-potato', 'Roasted Classic', 'Three well-spiced roast potatoes', '$18.00');
    let stuffedRs = makeMenuItem('stuffed-potato', 'Stuffed Roast', 'A stuffed roasted potato with fillings of choice', '$15.00');

    altCuts.append(altTitle, waffleFr, hashBr, miniMash, roastCl, stuffedRs);

    container.append(menuTitle, straightFr, poutines, bigFr, altCuts);
    return container; 

}

export const createContent = () => {
    document.body.append(createHeader(),
    createNav(), createFooter());
  content.appendChild(
  createMenu());
}