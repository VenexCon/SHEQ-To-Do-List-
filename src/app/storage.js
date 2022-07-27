import {createNewHero} from "./dom.js"

//These should all handle LS events, editing should follow the following code
//converts LS to array of objects
//loop through to match object 
// call the setter method 
// add back into LS, overwriting existing stringified object
// Key is currently task title
// Array is created all instance of method call, not existing in perpetuity

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
        };

function sendToLocalStorage (object) {
            const {title} = object;
            return window.localStorage.setItem(`${title}`, JSON.stringify(obj));
    };




export {storedObjects, createCardFromLS, sendToLocalStorage}
