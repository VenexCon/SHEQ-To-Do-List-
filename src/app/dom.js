import { format, parse, parseISO } from 'date-fns'

//DOM Grabs
//Aside fills screen in mobile
function displayAside () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
};

//currently reffered as the task button
function TaskBtnToggle () {
    const task = document.querySelector(".add-task-modal")
    return task.classList.toggle("is-active") 
};

/* displays modal upon taskbtn click  */
function taskBtnEL () {
    const taskBtn = document.querySelector(".addTaskButton")
    taskBtn.addEventListener("click", (e) => {
        TaskBtnToggle();
        overlayToggle()
    })
};

//Add project Toggle & EL 
const projectToggle = () => {
    const modal = document.querySelector(".project-modal-container")
    modal.classList.toggle("is-active")
};

const projectModalEl = () => {
    const addProjectBtn = document.querySelector(".add-project")
    addProjectBtn.addEventListener("click", () => {
        projectToggle();
    })
};

const projectSubmitEL = () => {
    const projectSubmitBtn = document.querySelector(".project_submit")
    projectSubmitBtn.addEventListener("submit", () => {
        projectToggle()
    })
};

/* inserts an overlay, which can beclicked to remove all overlays */
function overlayToggle () {
    const overlay = document.querySelector(".overlay")
    return overlay.classList.toggle("is-active");
}

/* removals modals on click in background*/
function overlayRemoveModals () {
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", () => {
        overlayToggle()
        TaskBtnToggle()
    })
};

//Collapses modals on submit
function modalSubmitCollapse () {
    const formBtn = document.querySelector(".project_submit")
        formBtn.addEventListener("submit", () => {
            TaskBtnToggle()
            overlayToggle()
        })
}

/*Date formatting - currently Invalid*/ 
function formatDate (object) {
    let {date} = object
    parseISO(date)
    return format(date, `dd/MM/yyyy`);
};

/* Called to create and re-create all hero elements */
function createNewHero (object) {
    let {title, date,priority,catagorey,description} = object;
    const container = document.querySelector(".innerContainer")
    
    const heroCard = document.createElement("Div"); 
        heroCard.classList.add("hero-card");
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
             // const objdate = formatDate(object); 
                dateText.innerText = `Due Date: ${date}`;
                    heroDate.appendChild(dateText)
                        heroCard.appendChild(heroDate);
    
    const heroPriority = document.createElement("div")
        heroPriority.classList.add("hero-priority");
        heroPriority.setAttribute("id", `${priority}`)
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

    const heroDeleteIcon = document.createElement("div")
    heroDeleteIcon.classList.add("hero-edit");
        const deleteIcon = document.createElement("i")
            deleteIcon.className = "fa-solid fa-trash"; 
                heroDeleteIcon.appendChild(deleteIcon)
                    heroCard.appendChild(heroDeleteIcon);
    
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

/* Creates a named project Div and appends it to aside-left */

const createProjectCard = (object) => {
 const {title} = object;

 const parent = document.querySelector(".projects-list")

 const projectContainer = document.createElement("div")
    projectContainer.classList.add(".project")




}


//currently unused
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
    projectModalEl()
    projectSubmitEL()
};

export {DOMGrabs, 
        createNewHero, 
        TaskBtnToggle, 
        overlayToggle, 
        clearDOM, 
        removeCard, 
};