import "./style/style.scss";
import { DOMGrabs } from "./app/dom";
import { collectForm} from "./app/factory";
import {StoredItems} from "./app/storage";
import { ElDom } from "./app/eventListener";
import { projectModalEl } from "./app/projects";



const DOM = function domEvents (e) {
    DOMGrabs(e);
    StoredItems.retrieveObjects()
    StoredItems.createCardsFromLS();
    StoredItems.callArray();
    collectForm(e);
    ElDom();
    projectModalEl(e)
};

window.onload = DOM();


