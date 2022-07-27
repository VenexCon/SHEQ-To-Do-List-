import "./style/style.scss";
import { DOMGrabs } from "./app/dom";
import { collectForm} from "./app/factory";
import {createCardFromLS} from "./app/storage";



const DOM = function domEvents (e) {
    DOMGrabs(e);
    collectForm(e);
    createCardFromLS();
};

window.onload = DOM();


