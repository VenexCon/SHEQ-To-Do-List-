import "./style/style.scss";
import { DOMGrabs } from "./app/dom";
import { collectForm, createFromStorage, removeObject} from "./app/factory";



const DOM = function domEvents (e) {
    DOMGrabs(e);
    collectForm(e);
    createFromStorage();
    removeObject(e);
   
};

window.onload = DOM();


