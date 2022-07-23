import "./style/style.scss";
import { DOMGrabs } from "./app/dom";
import { collectForm, retrieveFromStorage } from "./app/factory";


const DOM = function domEvents (e) {
    DOMGrabs(e)
    collectForm(e)
    retrieveFromStorage()
};

window.onload = DOM();


