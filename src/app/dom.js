import { format, parse, parseISO } from 'date-fns'
import { projectStorage } from './projects'
import { StoredItems } from './storage'

//DOM Grabs
//Aside fills screen in mobile
function displayAside () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
};

/* clears options to stop array duplication. */
const clearOptions = () => {
    const options = document.getElementById("assigned-project")
    while (options.hasChildNodes()) {
        options.removeChild(options.firstChild);
      }
}

/* Populate task modal with options from projects() */
const populateOptions = () => {
    let options = projectStorage.callArray()
    clearOptions();
    options.forEach(object => {
        let {title} = object;
        let option = document.createElement("option")
            option.setAttribute("value", `${title}`)
            option.innerText = `${title}`
         document.getElementById("assigned-project").appendChild(option)   
    })
};


//currently refered as the task button
function TaskBtnToggle () {
    const task = document.querySelector(".add-task-modal")
    return task.classList.toggle("is-active") 
};


/* displays modal upon taskbtn click  */
function taskBtnEL () {
    const taskBtn = document.querySelector(".addTaskButton")
    taskBtn.addEventListener("click", (e) => {
        populateOptions()
        TaskBtnToggle();
        overlayToggle()
    })
};


//Add project Toggle & EL 
const projectToggle = () => {
    const modal = document.querySelector(".project-modal-container")
    modal.classList.toggle("is-active")
};

// places project input upon click, this appends a div to the aside. 
const projectModalEl = () => {
    const addProjectBtn = document.querySelector(".add-project")
    addProjectBtn.addEventListener("click", () => {
        projectToggle();
    })
};

//once submitted, the project modal closes. 
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



/* Called to create and re-create all hero elements */
function createNewHero (object) {
    let {title, date,priority,catagorey,description, project} = object;
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

    const heroProject = document.createElement("div");
    heroProject.className = "hero-project";
        heroProject.setAttribute("id", `${project}`)
        const projectText = document.createElement("p")
            projectText.innerText = `${project}`;
                heroProject.appendChild(projectText)
                    heroCard.appendChild(heroProject);
};


/* Creates a named project button and appends it to aside-left */
const createProjectCard = (object) => {
 const {title} = object;

 const parent = document.querySelector(".projects-list")

 const projectContainer = document.createElement("button")
    projectContainer.classList.add("project")

 //const projectTitle = document.createElement("p")
        projectContainer.innerText = `${title}`
    
    //projectContainer.appendChild(projectTitle)
    return parent.appendChild(projectContainer)
};

//removes card from DOM, when delete button is clicked
function removeCard (e) {
    e.target.closest(".hero-card").remove();
};


//currently unused
function clearDOM () {
    const container = document.querySelector(".innerContainer")
        while(container.firstChild) {
            container.removeChild(container.lastChild)
    }
};

/* Displays all tasks regardless of project assigned*/
const displayAllTasks = () => {
    const heros = document.querySelectorAll(".hero-card")
    heros.forEach(hero => hero.style.display = "flex")
    return
}

const displayAllTasksEL = () => {
    const allTasksBtn = document.querySelector(".alltasks")
        allTasksBtn.addEventListener("click", () => {
            displayAllTasks()
        } )
}


/* Edit Task Changes */
const prompt = () => {
    let prompt = prompt("Enter New Value")
    return prompt
};


//returns the desired object 
const getObject = (e) => {
    let title = e.target.closest(".hero-card").querySelector(".hero-title").innerText
    let index = StoredItems.callArray().findIndex(object => object.title === title);
    return StoredItems.callArray()[index]
};


//call correct setter on object when prompt is clicked! 
//EL's on items of array 


//exported to index.js
function DOMGrabs () {
    displayAside();
    taskBtnEL();
    overlayRemoveModals();
    modalSubmitCollapse();
    projectModalEl()
    projectSubmitEL()
    displayAllTasksEL();
};


export {DOMGrabs, 
        createNewHero, 
        TaskBtnToggle, 
        overlayToggle, 
        clearDOM, 
        removeCard, 
        createProjectCard,
        projectToggle
};