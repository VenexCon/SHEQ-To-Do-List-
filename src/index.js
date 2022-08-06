import "./style/style.scss";
import { DOMGrabs, editorModalEL, editorModalSubmitEL } from "./app/dom";
import { collectForm} from "./app/factory";
import {StoredItems} from "./app/storage";
import { ElDom } from "./app/eventListener";
import { projectModalEl, SelectedProjectEl, projectStorage } from "./app/projects";



const DOM = function domEvents (e) {
    DOMGrabs(e);
    projectStorage.retrieveProjects()
    projectStorage.createProjects()
    StoredItems.retrieveObjects()
    StoredItems.createCardsFromLS();
    StoredItems.callArray();
    collectForm(e);
    ElDom();
    projectModalEl(e)
    SelectedProjectEl(e)
    editorModalEL(e)
    editorModalSubmitEL(e)
};

window.onload = DOM();


