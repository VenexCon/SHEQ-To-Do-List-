//Imports
 
import { createNewHero, clearForm, displayForm } from "./dom"; //Called during the collectformData


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

function collectFormData (e) {

  e.preventDefault();
  console.log("form prevented")
    //collect values

    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const catagorey = document.getElementById("task-catagorey").value;
    const description = document.getElementById("task-description").value;

    let newTask = Taskobject(title, date, priority,catagorey,description)

    return newTask

};


function collectForm (e) {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        createNewHero(collectFormData(e))
        displayForm()
        return clearForm()  
      });
};






export {collectForm}
