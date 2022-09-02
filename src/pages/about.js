//import components
import createHeader from "../components/header";
import createNav from "../components/nav";
import createFooter from "../components/footer";


const createAbout = () => {
    let container = document.createElement('div');

    let title = document.createElement('h3');
    title.textContent = 'About Us';
    title.setAttribute('id', 'about-title');
    title.classList.add('page-title');

    let aboutBlock = document.createElement('div');
    aboutBlock.setAttribute('id', 'about-block');
    let sec1  = document.createElement('div');
    let sec2 = document.createElement('div');

    let aboutTxt = 'orem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut luctus neque, consequat pharetra lorem. In hac habitasse platea dictumst. Mauris egestas tortor lectus, sodales porttitor erat pharetra vitae. Pellentesque massa risus, sagittis non malesuada nec, vehicula vitae libero. Nam vitae congue libero. Fusce mauris lacus, dictum sed dictum ac, aliquet in mi. Nullam imperdiet, dolor in fermentum vulputate, ante mi faucibus est, vitae tristique diam odio eu est. Fusce quam est, pulvinar vel quam nec, dignissim efficitur ex. Proin ac felis dolor. Morbi aliquet eget nunc ut consectetur. Nam elementum imperdiet lectus volutpat scelerisque. Mauris et risus vulputate, maximus ex sit amet, ornare justo. Etiam odio neque, ullamcorper eleifend mi ac, maximus ornare sapien';

    let aboutTxt2 = 'Vestibulum rutrum elit sed justo pellentesque, sed scelerisque elit mattis. Fusce tempor arcu sit amet euismod sodales. Morbi massa erat, feugiat id ultricies et, mattis sit amet urna. Praesent convallis pharetra magna vel sagittis. Duis sagittis nulla metus, eget maximus leo dictum at. Vivamus nec tempor tortor, eget mattis nisi. Fusce mattis pellentesque ante. Mauris justo libero, ullamcorper sed nibh quis, ornare imperdiet sapien. Proin accumsan, diam a egestas commodo, felis neque consectetur lacus, vel cursus ligula elit nec risus.';

    sec1.textContent = aboutTxt;
    sec2.textContent = aboutTxt2;

    aboutBlock.appendChild(sec1, sec2);

    container.appendChild(title, aboutBlock);
    return container;
}

const createContent = () => {
    createHeader();
    createNav();
    createAbout();
    createFooter();
}

export default createContent;