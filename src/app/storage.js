import {createNewHero, removeCard} from "./dom.js"

//These should all handle LS events, editing should follow the following code
//converts LS to array of objects
//loop through to match object 
// call the setter method 
// add back into LS, overwriting existing stringified object
// Key is currently task title
// Array is created at instance of method call, not existing in perpetuity

function storedObjects () {
        let storedobjects = [];
        for(const key in window.localStorage){
         let object = JSON.parse(window.localStorage.getItem(key))
            if (object === null) {break;}
            storedobjects.push(object);
          }
          return storedobjects
        };

function createCardFromLS (){
            let storedobjects = storedObjects();
              storedobjects.forEach(object => {
                createNewHero(object);
            })
            deleteEventListener();
        };

function sendToLocalStorage (obj) {
            const {title} = obj;
            return window.localStorage.setItem(`${title}`, JSON.stringify(obj));
    };

function deleteFromLS (e) {
  storedObjects().forEach(object => {
    if(e.target.closest(".hero-card").querySelector(".hero-title").innerText === object.title){
      let {title} = object;
      return window.localStorage.removeItem(`${title}`)
    }
  })
};

function deleteEventListener (e) {
  const deleteBtns = document.querySelectorAll(".fa-gear");
      deleteBtns.forEach(button => {
        button.addEventListener("click", (e) => {
          deleteFromLS(e)
          removeCard(e)
        })
      })
}


export {storedObjects, createCardFromLS, sendToLocalStorage, deleteEventListener}
