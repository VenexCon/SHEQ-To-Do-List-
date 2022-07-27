import {createNewHero} from "./dom.js"


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
