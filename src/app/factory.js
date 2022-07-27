//Imports
import { clearDOM, createNewHero, modalClassToggle, overlayToggle } from "./dom"; //Called during the collectformData
import {storedObjects, createCardFromLS, sendToLocalStorage} from "./storage"

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

/* Collects data from form inputs, returns new object. */
function collectFormData (e) {

  e.preventDefault();
  console.log("form submission prevented")

    const title = document.getElementById("task-title").value.trim();
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const catagorey = document.getElementById("task-catagorey").value;
    const description = document.getElementById("task-description").value;

    let newTask = Taskobject(title, date, priority,catagorey,description)

    return newTask
};

function clearForm () { 
  const form = document.getElementById("task-form")
  form.reset()
};


/* Currently displays the collected inputs on the DOM, Review splitting of this into sperate funcs */
function collectForm () {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        clearDOM()
        sendToLocalStorage(collectFormData(e))
        createCardFromLS()
        modalClassToggle();
        overlayToggle()
        return clearForm();  
      });
};



export {collectForm,}
