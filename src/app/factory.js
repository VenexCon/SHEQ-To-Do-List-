//Imports
 
import { createNewHero, clearForm, modalClassToggle, overlayToggle } from "./dom"; //Called during the collectformData


//factory Function
function Taskobject (title, date, priority, catagorey, description) {
  return {  
    title,
    date,
    priority,
    catagorey,
    description,
  }
};

/* Collects data from form inputs for local storage and DOM creation */
function collectFormData (e) {

  e.preventDefault();
  console.log("form prevented")

    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const catagorey = document.getElementById("task-catagorey").value;
    const description = document.getElementById("task-description").value;

    let newTask = Taskobject(title, date, priority,catagorey,description)

    return newTask
};

/* Storage Test */
function sendToStorage (obj) {
  const {title} = obj
  return window.localStorage.setItem(`${title}`, JSON.stringify(obj));
};

function retrieveFromStorage () {
  const obj = window.localStorage;
  for(const key in obj){
    let oldTask = JSON.parse(window.localStorage.getItem(key))
    createNewHero(oldTask)
  }
}



/* Currently displays the collected inputs on the DOM */
function collectForm (e) {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        createNewHero(collectFormData(e))
        sendToStorage(collectFormData(e))
        modalClassToggle();
        overlayToggle()
        return clearForm();  
      });
};


export {collectForm, retrieveFromStorage}
