import "./style/style.scss";
import "./imgs/todoIcon.png"
import { DOMGrabs } from "./app/dom";
import { collectForm } from "./app/factory";



const DOM = function domEvents (e) {
    DOMGrabs(e)
    collectForm(e)
}



window.onload = DOM();


