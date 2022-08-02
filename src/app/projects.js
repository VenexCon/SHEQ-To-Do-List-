//Imports
import { createProjectCard } from "./dom"


const grabProjectForm = ((e) => {
    e.preventDefault()
    const projectName = document.getElementById("project-name")
    return {title: projectName}
});


const projectModalEl = () => {
    const projectSubmit = document.querySelector(".project-form");
        projectSubmit.addEventListener("submit", (e) => {
            createProjectCard(grabProjectForm(e))
        })
};

export {projectModalEl}


