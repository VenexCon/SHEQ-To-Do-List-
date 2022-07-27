import {createNewHero} from "./dom.js"


const storedObjects = () => {
        let storedobjects = [];
        for(const key in window.localStorage){
         let object = JSON.parse(window.localStorage.getItem(key))
            if (object === null) {break;}
            storedobjects.push(object);
          }
          return storedobjects
        },

const create = () => {
            let storedobjects = storedObjects();
              storedobjects.forEach(object => {
                createNewHero(object);
            })
        },

const send = (object) => {
            const {title} = object
            return window.localStorage.setItem(`${title}`, JSON.stringify(obj));
    }




export {storedObjects, create, send}
