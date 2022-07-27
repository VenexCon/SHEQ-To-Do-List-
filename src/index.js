import "./style/style.scss";
import { DOMGrabs } from "./app/dom";
import { collectForm, createFromStorage} from "./app/factory";



const DOM = function domEvents (e) {
    DOMGrabs(e);
    collectForm(e);
    createFromStorage();
   
};

window.onload = DOM();


