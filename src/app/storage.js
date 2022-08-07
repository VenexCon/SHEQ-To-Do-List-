import { createNewHero,} from "./dom.js"
import { deleteBtnEventListener, editorModalEL} from "./eventListener";
import { AssignMethods } from "./factory.js";
// Remodel to ensure an array fo objects is present inside the local storage. 

export const StoredItems = (() => {
  
  let objectArray = [];

  //updates array at window load with retrieveing of objects from LS 
  const retrieveObjects = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    if(tasks === null){return}
      tasks.forEach(task => {
        task.index = objectArray.length
        objectArray.push(task)
        console.log(task)
      })
    return arrayByDate()
  }

  const arrayByDate = () => {
    objectArray.sort(function (a, b ) {
      return new Date(a.date) - new Date (b.date)
    })
  };


    //called second to create cards from LS 
  const createCardsFromLS = () => {
      objectArray.forEach(object => {
        createNewHero(object);
        AssignMethods(object)
    })
  }


  //called during the collectForm function in factory.js
  const sendToArray = (obj) => objectArray.push(obj)


    //currently stores the array in LS, called during the event listener in App
  const sendToLocalStorage= () => {
    return localStorage.setItem("tasks", JSON.stringify(objectArray));
  }


  //allows access for methods. 
  const callArray = () => objectArray;
  

  const deleteCard = (e) => {
    let index = e.target.closest(".hero-card").getAttribute("data-index")
    objectArray.splice(index,1)
    console.log(index)
    sendToLocalStorage()
  }


  //called during the form submit to create a single hero-card
  const createOneCard = (object) => {
    createNewHero(object)
    sendToArray(object)
    sendToLocalStorage()
    deleteBtnEventListener()
    editorModalEL()
  };


  return {
    retrieveObjects, createCardsFromLS, sendToArray, callArray,
    createOneCard, deleteCard, sendToLocalStorage
  }
})();

