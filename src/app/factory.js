//Imports
import {TaskBtnToggle, overlayToggle } from "./dom"; //Called during the collectformData
import {StoredItems} from "./storage"
import { editorModalEL } from "./dom";

//factory Function for form.value structure
function Taskobject (title, date, priority, catagorey, description, project) {

  let index = StoredItems.callArray().length

  return {  
    title,
    date,
    priority,
    catagorey,
    description,
    project,
    index,
    
  }
};

/* Setters */
const titleSetter =  (state) => ({
  setTitle: (string) => state.title = string
})

const dateSetter = (state) => ({
  setDate : (string) => state.date = string
});

const prioritySetter = (state) => ({
  setPriority: (string) => state.priority = string
});

const catagoreySetter = (state) => ({
  setCatagorey: (string) => state.catagorey = string
});

const descriptionSetter = (state) => ({
  setDescription: (string) => state.description = string
});

function AssignMethods (object) {
  return Object.assign(object, titleSetter(object), 
        dateSetter(object), prioritySetter(object),
        catagoreySetter(object), descriptionSetter(object) )
};





/* Collects data from form inputs, returns new object. */
function collectFormData (e) {

  e.preventDefault();
 
    const title = document.getElementById("task-title").value.trim();
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const catagorey = document.getElementById("task-catagorey").value;
    const description = document.getElementById("task-description").value;
    const project = document.getElementById("assigned-project").value

    let newTask = Taskobject(title, date, priority,catagorey,description, project)

    return newTask
};


function clearForm () { 
  const form = document.getElementById("task-form")
  form.reset()
};


/* Currently displays the collected inputs on the DOM currently used in index.js */
function collectForm () {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        StoredItems.createOneCard(collectFormData(e))
        clearForm()
        AssignMethods(collectFormData(e))
        TaskBtnToggle();
        overlayToggle()
        return clearForm();  
      });
};



export {collectForm, AssignMethods}
