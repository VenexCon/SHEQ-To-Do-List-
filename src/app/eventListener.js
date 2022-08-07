import {StoredItems} from "./storage"
import {removeCard,  taskEditor, editModalToggleDisplay} from "./dom"



function deleteBtnEventListener (e) {
  const deleteBtns = document.querySelectorAll(".fa-trash");
      deleteBtns.forEach(button => {
        button.addEventListener("click", (e) => {
          removeCard(e)
          StoredItems.deleteCard(e)
        })
      })
};

function editorModalEL (e) {
  const editorIcons = document.querySelectorAll(".fa-gear")
      editorIcons.forEach(icon => {
           icon.addEventListener("click", (e) => {
              editModalToggleDisplay()
              taskEditor.getObject(e)
              taskEditor.editorModalFill()
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
    editorModalEL()

}

export {ElDom, deleteBtnEventListener, editorModalEL}