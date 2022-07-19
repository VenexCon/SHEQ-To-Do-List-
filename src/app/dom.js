//DOM Grabs

function asideGrab () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
    
};

function newTaskGrab () {
    const newTaskBtn = document.querySelector(".addTaskButton")
    const modal = document.querySelector(".modal-dialog")
        newTaskBtn.addEventListener("click", () => {
            return modal.classList.toggle("is-active");
        })
}

/* Called to create and re-create all card elements */
function createNewHero (object) {
    let {title, date,priority,catagorey,description,} = object;
    const container = document.querySelector(".innerContainer")
    
    const heroCard = document.createElement("Div"); 
        heroCard.classList.add("hero-card");
            container.appendChild(heroCard);

    const heroTitle = document.createElement("div"); 
        heroTitle.classList.add("hero-date");
            const titleText = document.createElement("p")
                titleText.innerText = `${title}`;
                    heroTitle.appendChild(titleText);
                        heroCard.appendChild(heroTitle);
    
    const heroDate = document.createElement("div")
        heroDate.classList.add("hero-date")
            const dateText = document.createElement("p")
                dateText.innerText = `Due Date:${date}`;
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
                icon.className = "fa-solid fa-gear" 
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
           const catagoreyText = document.createElement("p")
                catagoreyText.innerText = `${catagorey}`;
                    heroCatagorey.appendChild(catagoreyText)
                        heroCard.appendChild(heroCatagorey);
 
    console.log("taskDOMcreated");
}

function clearForm () {
    const form = document.getElementById("task-form")
    form.reset()
}

function DOMGrabs () {
    asideGrab();
    newTaskGrab();
}

export {DOMGrabs, createNewHero, clearForm};