import githubLogo from "../../img/github-logo.svg"
import '../styles/component.scss'

const createFooter = () => {
    let container = document.createElement('footer');
    container.setAttribute('id', 'footer');

    const githubIcon = document.createElement("img");
    githubIcon.src = githubLogo;
    githubIcon.alt = "github logo";
        
    const text = document.createElement("p");
    text.textContent = "Tobi Oyero";
    
    const content = document.createElement("a");
    content.setAttribute("href", "https://github.com/tobiaoy");
    content.append(githubIcon, text);
        

    container.appendChild(content);

    return container;
}

export default createFooter;

//replace icons with images