import "./style/style.scss";
import { DOMGrabs } from "./app/dom";
import { collectForm} from "./app/factory";
import {localStored} from "./storage.js";



const DOM = function domEvents (e) {
    DOMGrabs(e);
    collectForm(e);
    localStored.create()
   
};

window.onload = DOM();


