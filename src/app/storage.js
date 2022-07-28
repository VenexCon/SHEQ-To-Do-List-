import {createNewHero, removeCard} from "./dom.js"
import {AssignMethods} from "./factory.js"

//These should all handle LS events, editing should follow the following code
//converts LS to array of objects
//loop through to match object 
// call the setter method 
// add back into LS, overwriting existing stringified object
// Key is currently task title
// Array is created at instance of method call, not existing in perpetuity

function storedObjects () {
        let objectArray = [];
        for(const key in window.localStorage){
         let object = JSON.parse(window.localStorage.getItem(key))
            if (object === null) {break;}
            AssignMethods(object);
            objectArray.push(object);
          }
          deleteBtnEventListener()
          sortByDate(objectArray)
          return objectArray
};

//standard array
function sortByDate(array){
  array.sort((a,b) => {return new Date(a.date) - new Date(b.date);});
};

//is called in factory.js, collectForm();
const createOneCard = (object) => {
  createNewHero(object)
  deleteBtnEventListener()
};

// is called in index.js to create all cards from LS
function createCardsFromLS (){
            let storedobjects = storedObjects();
              storedobjects.forEach(object => {
                createNewHero(object);
                console.log(object)
            })
            deleteBtnEventListener();
            console.log(storedobjects)
};

// this is used to send a single object to LS, currently overwrites a object with the same key.
function sendToLocalStorage (obj) {
            const {key} = obj;
            console.log(`${key}`)
            return window.localStorage.setItem(`${key}`, JSON.stringify(obj));
};


function deleteFromLS (e) {
      let key = e.target.closest(".hero-card").getAttribute("data-key")
      window.localStorage.removeItem(key)
};


function deleteBtnEventListener (e) {
  const deleteBtns = document.querySelectorAll(".fa-gear");
      deleteBtns.forEach(button => {
        button.addEventListener("click", (e) => {
          deleteFromLS(e)
          removeCard(e)
        })
      })
};


export {storedObjects, createCardsFromLS, sendToLocalStorage, deleteBtnEventListener, createOneCard}
