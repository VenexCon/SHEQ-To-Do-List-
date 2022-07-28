import { format, parseISO } from 'date-fns'
import {storedObjects, sendToLocalStorage} from "./storage"

//DOM Grabs
//Aside fills screen in mobile
function displayAside () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
};
//currently only the add-task pop-up is considered a modal
function modalClassToggle () {
    const modal = document.querySelector(".modal-container")
    return modal.classList.toggle("is-active")
};

function overlayToggle () {
    const overlay = document.querySelector(".overlay")
    return overlay.classList.toggle("is-active");
}

/* removals modals on click in background*/
function overlayRemoveModals () {
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", () => {
        overlayToggle()
        modalClassToggle()
    })
};

/* displays modal upon taskbtn click  */
function taskBtnEL () {
    const taskBtn = document.querySelector(".addTaskButton")
    taskBtn.addEventListener("click", (e) => {
        modalClassToggle();
        overlayToggle ()
    })
};

//Collapses modal on submit
function modalSubmitCollapse () {
    const formBtn = document.querySelector(".form_submit")
        formBtn.addEventListener("submit", () => {
            modalClassToggle()
            overlayToggle()
        })
}

/*Date formatting*/ 
function formatDate (date) {
    if (typeof date === 'string'){
    return format (parseISO(date), `dd/MM/yyyy`)
    } 
    return format(date, `dd/MM/yyyy`);
};

/* Called to create and re-create all hero elements */
function createNewHero (object) {
    let {title, date,priority,catagorey,description,key} = object;
    const container = document.querySelector(".innerContainer")
    
    const heroCard = document.createElement("Div"); 
        heroCard.classList.add("hero-card");
            heroCard.setAttribute(`data-key`,`${key}`)
            container.appendChild(heroCard);


    const heroCheck = document.createElement("div")
        heroCheck.classList.add("hero-icon")
            const labelforCheck = document.createElement("label")
                labelforCheck.setAttribute("for", "checkbox");
                   const checkInput = document.createElement("input");
                    checkInput.setAttribute("type", "checkbox")
                        checkInput.classList.add("hero-check")
                            checkInput.setAttribute("aria-checked", "false");
        labelforCheck.appendChild(checkInput)
        heroCheck.appendChild(labelforCheck)
        heroCard.appendChild(heroCheck);

    const heroTitle = document.createElement("div"); 
        heroTitle.classList.add("hero-title");
            const titleText = document.createElement("p")
                titleText.innerText = `${title}`;
                    heroTitle.appendChild(titleText);
                        heroCard.appendChild(heroTitle);
    
    const heroDate = document.createElement("div")
        heroDate.classList.add("hero-date")
            const dateText = document.createElement("p")
              const objdate = formatDate(date); 
                dateText.innerText = `Due Date: ${objdate}`;
                    heroDate.appendChild(dateText)
                        heroCard.appendChild(heroDate);
    
    const heroPriority = document.createElement("div")
        heroPriority.classList.add("hero-priority");
           const priorityText = document.createElement("p")
                priorityText.innerText = `${priority}`;
                    heroPriority.appendChild(priorityText);
                    heroCard.appendChild(heroPriority);

    const heroEditIcon = document.createElement("div")
        heroEditIcon.classList.add("hero-edit");
            const icon = document.createElement("i")
                icon.className = "fa-solid fa-gear"; 
                    heroEditIcon.appendChild(icon)
                        heroCard.appendChild(heroEditIcon);
    
    const heroDescript = document.createElement("div"); 
        heroDescript.className = "hero-description";
          const descriptText = document.createElement("p")
                descriptText.innerText= `${description}`;
                    heroDescript.appendChild(descriptText);
                        heroCard.appendChild(heroDescript); 
                        
    const heroCatagorey = document.createElement("div");
        heroCatagorey.className = "hero-catagorey";
            heroCatagorey.setAttribute("id", `${catagorey}`)
           const catagoreyText = document.createElement("p")
                catagoreyText.innerText = `${catagorey}`;
                    heroCatagorey.appendChild(catagoreyText)
                        heroCard.appendChild(heroCatagorey);
};

function clearDOM () {
    const container = document.querySelector(".innerContainer")
        while(container.firstChild) {
            container.removeChild(container.lastChild)
    }
};

function removeCard (e) {
    e.target.closest(".hero-card").remove();
};




//exported to index.js
function DOMGrabs () {
    displayAside();
    taskBtnEL();
    overlayRemoveModals();
    modalSubmitCollapse();
};


export {DOMGrabs, createNewHero, 
    modalClassToggle, overlayToggle, clearDOM, removeCard, 
};