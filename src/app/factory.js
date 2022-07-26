//Imports


import { el } from "date-fns/locale";
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

function timeStamp () {
  
};

/* time_stamp is used to retrieve for edit and deletion*/
function sendToStorage (obj) {
  const time_stamp = new Date().toString();
  object.setAttribute("data-key", `${time_stamp}`)
  return window.localStorage.setItem(`time_stamp`, JSON.stringify(obj));
};

/* Retrives from storage */
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
    addMethod(object)
    createNewHero(object);
  })
};

/* Place these in SEPERATE FILE, ADD GETTERS AND SETTERS FOR EDITING PURPOSES*/
const removeSelf = (obj) => ({
  deleteself: () => localStorage.removeItem(obj.title)
});


function addMethod (object) {
  return Object.assign(object, removeSelf(object)) 
};

function removeObject () {
  const array = document.querySelectorAll(".hero-title")
    document.addEventListener("click", (e) => {
      let key = (e.target.closest(`.hero-card`).querySelector(".hero-date").innerText);
      console.log(key)
      return localStorage.removeItem(key)
    })
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


export {collectForm, createFromStorage, removeObject}
