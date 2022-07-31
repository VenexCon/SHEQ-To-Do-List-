import {createNewHero, removeCard} from "./dom.js"
import {AssignMethods} from "./factory.js"

// Remodel to ensure an array fo objects is present inside the local storage. 

export const StoredItems = (() => {
  
  let objectArray = [];

  //updates array at first load with LS objects, include check for null. 
  const retrieveObjects=  () => {
    let projects = JSON.parse(localStorage.getItem("projects"))
    return projects.forEach(object => objectArray.push(object))
  }


    //2nd call
  const createCardsFromLS = () => {
      objectArray.forEach(object => {
        createNewHero(object);
        AssignMethods(object)
        console.log(object)
    })
    deleteBtnEventListener();
    console.log(`cards created`)
  }

  //called during the collectForm function in factory.js
  const sendToArray = (obj) => {
    return objectArray.push(obj)
  }

    //currently stores the array in LS, need to implement a check to overwrite exiting LS
  const sendToLocalStorage= () => {
    return localStorage.setItem("projects", JSON.stringify(objectArray));
  }

  //allows access for methods. 
  const callArray = () => {
    console.log(objectArray)
    return objectArray
  }

  //called durting the form submit to create a single hero-card
  const createOneCard = (object) => {
    createNewHero(object)
    deleteBtnEventListener()
  }


  return {
    retrieveObjects, createCardsFromLS, sendToArray, sendToLocalStorage, callArray,
    createOneCard
  }

})();

//unsued ATM
function sortByDate(array){
  array.sort((a,b) => {return new Date(a.date) - new Date(b.date);});
};

//unused ATM
function deleteBtnEventListener (e) {
  const deleteBtns = document.querySelectorAll(".fa-trash");
      deleteBtns.forEach(button => {
        button.addEventListener("click", (e) => {
          deleteFromLS(e)
          removeCard(e)
        })
      })
};


export {}
