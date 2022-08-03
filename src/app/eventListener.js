import {StoredItems} from "./storage"
import {removeCard} from "./dom"



function deleteBtnEventListener (e) {
  const deleteBtns = document.querySelectorAll(".fa-trash");
      deleteBtns.forEach(button => {
        button.addEventListener("click", (e) => {
          removeCard(e)
          StoredItems.deleteCard(e)
        })
      })
};

const StorageEl = () => {
    addEventListener(`storage`, () => {
        StoredItems.sendToLocalStorage();
    })
};


const ElDom =() => {
    deleteBtnEventListener()
    StorageEl();

}

export {ElDom, deleteBtnEventListener}