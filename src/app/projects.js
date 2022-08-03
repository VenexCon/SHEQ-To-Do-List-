//Imports
import { createProjectCard } from "./dom"
import { projectToggle } from "./dom";

export const projectStorage = (() => {

    let projectArray = [];

    const pushToProjectArray = (object) => {
        projectArray.push(object)
        sendtoLocalStorage()
    }


    const sendtoLocalStorage = () => {
        return localStorage.setItem("projects", JSON.stringify(projectArray))
    };

    const retrieveProjects = () => {
        let projects = JSON.parse(localStorage.getItem("projects"))
        console.log(projects)
        if (projects === null){return console.log("no projects")}
        projects.forEach(project => {projectArray.push(project)})
    }

    const createProjects = () => {
        projectArray.forEach(project => {
            createProjectCard(project)
        })
        return SelectedProjectEl()
    }

    return {
        sendtoLocalStorage, retrieveProjects, createProjects, pushToProjectArray
    }
})();


const grabProjectForm = ((e) => {
    e.preventDefault()
    const projectName = document.getElementById("project-name").value.trim();
    projectStorage.pushToProjectArray({title: projectName})
    return {title: projectName}
});


const projectFormReset = () => {
    const projectForm = document.getElementById("project-form")
    return projectForm.reset()
};


const SelectedProjectEl = () => {
    const projectBtns = document.querySelectorAll(".project")
        projectBtns.forEach(button => {
            button.addEventListener("click", (e) => {
                console.log(e.target.innerText)
            })
        })
 };


const projectModalEl = () => {
    const projectSubmit = document.querySelector(".project-form");
        projectSubmit.addEventListener("submit", (e) => {
            createProjectCard(grabProjectForm(e))
            projectToggle();
            projectFormReset()
            SelectedProjectEl()

        })
};




export {projectModalEl, SelectedProjectEl}


