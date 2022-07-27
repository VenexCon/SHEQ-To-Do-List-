//Imports

import { add } from "date-fns";
import { createNewHero, clearForm, modalClassToggle, overlayToggle } from "./dom"; //Called during the collectformData
import {storedObjects, create, send} from "./storage"

//factory Function for form.value structure
function Taskobject (title, date, priority, catagorey, description) {
  return {  
    title,
    date,
    priority,
    catagorey,
    description,
  }
};

/*Added in object methods*/

/* Required refactoring with now imported local.stored*/
function deleteObject (e) {
    storedObjects().forEach(object =>{
      if(e.target.closest(".hero-card").querySelector(".hero-title").innerText === object.title){
        object.deleteself();
      } 
    })
};

/* Collects data from form inputs for local storage and DOM creation */
function collectFormData (e) {

  e.preventDefault();
  console.log("form submission prevented")

    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const catagorey = document.getElementById("task-catagorey").value;
    const description = document.getElementById("task-description").value;

    let newTask = Taskobject(title, date, priority,catagorey,description)

    return newTask
};


/* Currently displays the collected inputs on the DOM */
function collectForm () {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        create(collectFormData(e))
        send(collectFormData(e))
        modalClassToggle();
        overlayToggle()
        return clearForm();  
      });
};



export {collectForm,}
