import "./style/style.scss";
import { DOMGrabs } from "./app/dom";
import { collectForm} from "./app/factory";
import {StoredItems} from "./app/storage";
import { ElDom } from "./app/eventListener";



const DOM = function domEvents (e) {
    DOMGrabs(e);
    StoredItems.retrieveObjects()
    StoredItems.createCardsFromLS();
    StoredItems.callArray();
    collectForm(e);
    ElDom();
};

window.onload = DOM();


