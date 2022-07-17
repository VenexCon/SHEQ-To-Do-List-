//DOM Grabs

function asideGrab () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
    
};

function newTaskGrab () {
    const newTaskBtn = document.querySelector(".addTaskButton")
    const modal = document.querySelector(".modal-dialog")
        newTaskBtn.addEventListener("click", () => {
            return modal.classList.toggle("is-active");
        })
}


function DOMGrabs () {
    asideGrab();
    newTaskGrab();
}

export {DOMGrabs};