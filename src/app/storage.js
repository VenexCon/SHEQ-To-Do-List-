import {createNewHero} from "./dom.js"

const localStored = {
   
    storedObjects : () => {
        let storedobjects = [];
        for(const key in window.localStorage){
         let object = JSON.parse(window.localStorage.getItem(key))
            if (object === null) {break;}
            storedobjects.push(object);
          }
          return storedobjects
        },

    create: () => {
            let storedobjects = retrieveFromStorage();
              storedobjects.forEach(object => {
                createNewHero(object);
            })
        },

    send: (object) => {
            const {title} = object
            return window.localStorage.setItem(`${title}`, JSON.stringify(obj));
       {,

}


export {localStored}
