//Imports

import { add } from "date-fns";
import { createNewHero, clearForm, modalClassToggle, overlayToggle } from "./dom"; //Called during the collectformData
import {localStored} from "./storage"

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

/* Place these in SEPERATE FILE, ADD GETTERS AND SETTERS FOR EDITING PURPOSES*/


function deleteObject (e) {
  
    localStored.storedObjects().forEach(object =>{
      if(e.target.closest(".hero-card").querySelector(".hero-title").innerText === object.title){
        object.deleteself();
      } 
    })
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

/* time_stamp is used to retrieve for edit and deletion*/
function sendToStorage (obj) {
  const {title} = obj
  return window.localStorage.setItem(`${title}`, JSON.stringify(obj));
};


/* Retrives from storage and returns array of objects to be modified*/
function retrieveFromStorage () {
  let storedobjects = [];
  for(const key in window.localStorage){
   let object = JSON.parse(window.localStorage.getItem(key))
      if (object === null) {break;}
      storedobjects.push(object);
    }
    return storedobjects
};

/* Creates cards from LS, and adds methods*/
function createFromStorage () {
  let storedobjects = retrieveFromStorage();
    storedobjects.forEach(object => {
      createNewHero(object);
    })
};

/* Currently displays the collected inputs on the DOM */
function collectForm () {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        createNewHero(collectFormData(e))
        sendToStorage(collectFormData(e))
        modalClassToggle();
        overlayToggle()
        return clearForm();  
      });
};



export {collectForm, createFromStorage,}
