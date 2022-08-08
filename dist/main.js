/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/style/style.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/style/style.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=B612+Mono&family=Lato:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Imports */\n#high {\n  background-color: Red;\n  color: white;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n#medium {\n  background-color: orangered;\n  color: white;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n#low {\n  background-color: green;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n/* Nav */\n.nav {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: rgba(160, 154, 154, 0.986);\n  align-items: center;\n  height: 4rem;\n}\n.nav .hamburger-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 2.5rem;\n  height: 4rem;\n  padding: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  background-color: teal;\n}\n.nav .hamburger-menu span {\n  display: block;\n  border: 2px solid black;\n  width: 100%;\n  transition: 0.4s;\n}\n.nav .hamburger-menu:hover {\n  cursor: pointer;\n}\n.nav .hamburger-menu:hover span {\n  border-color: white;\n}\n.nav .hamburger-menu:active {\n  border-color: white;\n}\n.nav .title-wrapper {\n  margin: auto;\n  justify-self: center;\n  align-self: center;\n}\n.nav .title-wrapper .title {\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n}\n.nav .company-logo {\n  width: 4rem;\n  height: 4rem;\n}\n.nav .company-logo img {\n  color: black;\n}\n\n/* Aside enters upon hamburger click */\n.aside-left {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  min-width: 15vw;\n  width: 25vw;\n  height: 90vh;\n  align-items: center;\n  left: -200%;\n  transition: 0.5s;\n  background-color: white;\n  z-index: 100;\n}\n.aside-left.is-active {\n  display: flex;\n  position: static;\n  left: 0;\n}\n.aside-left .aside-links {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 1rem;\n  align-items: center;\n}\n.aside-left .aside-links button {\n  cursor: pointer;\n  width: 80%;\n  border: none;\n  min-height: 2rem;\n  font-size: large;\n  height: fit-content;\n  border-radius: 3px;\n  font-weight: bolder;\n  transition: 0.2s;\n}\n.aside-left .aside-links button:hover {\n  background-color: teal;\n  color: white;\n}\n.aside-left .aside-links button.add-project:before {\n  font: var(--fa-font-solid);\n  content: \"\\f0fe\";\n  margin-right: 1rem;\n}\n.aside-left .aside-links hr {\n  width: 80%;\n  border: 1px solid black;\n}\n.aside-left .aside-links .projects-list {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  width: 80%;\n  align-items: center;\n  gap: 1rem;\n  z-index: 1001;\n}\n.aside-left .aside-links .projects-list .project {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  min-height: 2rem;\n  font-size: large;\n  height: fit-content;\n  border-radius: 3px;\n  font-weight: bolder;\n  transition: 0.2s;\n  background-color: #E9E9ED;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n.aside-left .aside-links .projects-list .project:hover {\n  background-color: teal;\n  color: white;\n}\n\n.project-modal-container {\n  display: none;\n  border-radius: 5px;\n  width: 80%;\n  height: fit-content;\n}\n.project-modal-container.is-active {\n  display: flex;\n}\n.project-modal-container .project-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #E9E9ED;\n  width: 100%;\n}\n.project-modal-container .project-form label {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.project-modal-container .project-form label input {\n  width: 100%;\n  height: 2rem;\n}\n.project-modal-container .project-form button {\n  align-self: flex-end;\n  height: 1.5rem;\n  width: 100%;\n}\n\n/* MQ 600PX */\n@media only screen and (max-width: 600px) {\n  .aside-left {\n    width: 100vw;\n  }\n  .aside-left.is-active {\n    position: fixed;\n  }\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif;\n}\n* .icon::before {\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  height: 200vh;\n}\n\n.app {\n  position: relative;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  transition: 1s;\n}\n\n.cardcontainer {\n  justify-self: center;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n}\n.cardcontainer .innerContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 80%;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  padding: 1rem;\n}\n.cardcontainer .hero-card {\n  border: 2px solid grey;\n  border-radius: 5px;\n  min-width: 70%;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  transition: 0.4s;\n  z-index: 1;\n}\n.cardcontainer .hero-card:hover {\n  box-shadow: 2px 4px grey;\n  transform: scale(1.025);\n}\n.cardcontainer .hero-card .hero-check {\n  height: 1.25rem;\n  width: 1.25rem;\n  accent-color: teal;\n}\n.cardcontainer .hero-card .hero-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  flex-grow: 0;\n}\n.cardcontainer .hero-card .hero-title {\n  max-width: 50%;\n  flex-grow: 1;\n  text-align: left;\n}\n.cardcontainer .hero-card .hero-edit {\n  font-size: 1.25rem;\n  transition: 0.4s;\n}\n.cardcontainer .hero-card .hero-edit:hover {\n  color: teal;\n  cursor: pointer;\n  transform: rotate(180deg);\n}\n.cardcontainer .hero-card .hero-description {\n  min-width: 60%;\n  width: 80%;\n  min-height: 2rem;\n  height: fit-content;\n}\n.cardcontainer .hero-card .hero-catagorey {\n  min-width: fit-content;\n  width: 10%;\n  border: 2px solid black;\n  height: fit-content;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 3px;\n  vertical-align: middle;\n  padding: 0.25rem;\n}\n\n/*600px MQ */\n@media only screen and (max-width: 600px) {\n  .hero-card {\n    flex-direction: column;\n  }\n  .modal-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n  }\n  .editor-modal {\n    min-width: 80vw;\n  }\n}\n/* Fixed Positioned Element */\n.addTaskButton {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-right: 5rem;\n  background-color: teal;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.4s;\n  z-index: 1000;\n}\n.addTaskButton:hover {\n  cursor: pointer;\n  background-color: rgb(216, 147, 19);\n}\n.addTaskButton button {\n  background-color: transparent;\n  text-decoration: none;\n  border: none;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: 0.4s;\n}\n.addTaskButton button:hover {\n  color: white;\n  transform: rotate(180deg);\n}\n\n/* Fixed position Modal  */\n.modal-container {\n  width: 60vw;\n  min-height: 10rem;\n  height: fit-content;\n  border: 2px solid grey;\n  border-radius: 5px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  transform: scale(0);\n  margin-bottom: 8rem;\n  margin-left: 15%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: 0.4s;\n  background-color: white;\n  z-index: 1000;\n  padding: 0.5em;\n}\n.modal-container.is-active {\n  transform: scale(1);\n}\n.modal-container h3 {\n  margin-left: 3rem;\n  font-weight: 600;\n}\n.modal-container hr {\n  width: 90%;\n  margin: auto;\n}\n.modal-container .modal-form-container {\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n}\n.modal-container .modal-form-container #task-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: space-between;\n}\n.modal-container .modal-form-container #task-form label {\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n}\n.modal-container .modal-form-container #task-form #TDLabel {\n  width: 80%;\n}\n.modal-container .modal-form-container #task-form #task-description {\n  width: 100%;\n  height: 3rem;\n  margin-bottom: 1rem;\n  resize: none;\n}\n.modal-container .modal-form-container #task-form button {\n  align-self: center;\n  justify-content: center;\n  padding: 0.15rem;\n}\n\n/* -------------- */\n/* Editor Modal */\n/* ------------ */\n.editor-modal {\n  width: 15vw;\n  min-height: 10rem;\n  height: fit-content;\n  border: 2px solid grey;\n  border-radius: 5px;\n  position: fixed;\n  scale: 0;\n  right: 0;\n  transition: 0.4s;\n  background-color: white;\n  z-index: 1000;\n  padding: 0.5em;\n}\n.editor-modal.is-active {\n  scale: 1;\n}\n.editor-modal form {\n  display: flex;\n  gap: 0.5rem;\n  flex-direction: column;\n}\n.editor-modal form label {\n  display: flex;\n  flex-direction: column;\n}\n\n/*OVERLAY */\n.overlay {\n  position: absolute;\n  display: none;\n}\n.overlay.is-active {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  z-index: 999;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss","webpack://./src/style/abstractions/variables.scss","webpack://./src/style/abstractions/nav-bar.scss"],"names":[],"mappings":"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","sourcesContent":["$env: undefined;\n/* Imports */\r\n\r\n@import \"./abstractions/variables.scss\";\r\n@import \"./abstractions/nav-bar.scss\";\r\n\r\n*{\r\n    padding: 0;\r\n    margin:0;\r\n    box-sizing: border-box;\r\n    font-family: $baseFont;\r\n\r\n    .icon::before {\r\n        display: inline-block;\r\n        text-rendering: auto;\r\n        -webkit-font-smoothing: antialiased;\r\n    }\r\n};\r\n\r\nbody{\r\n    height: 200vh;\r\n};\r\n\r\n.app {\r\n    position: relative;\r\n};\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: row;\r\n    transition: 1s;\r\n};\r\n\r\n.cardcontainer {\r\n    //border: 2px solid red;\r\n    justify-self: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 1rem;\r\n\r\n    .innerContainer {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2rem;;\r\n        //border: 2px dashed blue;\r\n        height: 80%;\r\n        width: 80%;\r\n        margin: auto;\r\n        align-items: center;\r\n        padding: 1rem;\r\n    }\r\n\r\n    .hero-card{\r\n        border: 2px solid $heroBorder;\r\n        border-radius: 5px;\r\n        min-width: 70%;\r\n        min-height: 4rem;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        gap: 0.5rem;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 1rem;\r\n        transition: 0.4s;\r\n        z-index: 1;\r\n\r\n        &:hover{\r\n            box-shadow: 2px 4px grey;\r\n            transform: scale(1.025);\r\n            \r\n        }\r\n        .hero-check{\r\n            height: 1.25rem;\r\n            width: 1.25rem;\r\n            accent-color: $teal;\r\n        }\r\n\r\n        .hero-icon {\r\n            font-size: 1.5rem;\r\n            width: 1.5rem;\r\n            flex-grow: 0;\r\n        }\r\n\r\n        .hero-title {\r\n            max-width: 50%;\r\n            flex-grow: 1;\r\n            text-align: left;\r\n        }\r\n        .hero-edit {\r\n            font-size: 1.25rem;\r\n            transition: 0.4s;\r\n\r\n            &:hover {\r\n                color: $teal;\r\n                cursor: pointer;\r\n                transform: rotate(180deg);\r\n            }\r\n        }\r\n        .hero-description{\r\n            min-width: 60%;\r\n            width: 80%;\r\n            min-height: 2rem;\r\n            height: fit-content;\r\n\r\n        }\r\n\r\n\r\n        .hero-catagorey{\r\n            min-width: fit-content;\r\n            width: 10%;\r\n            border: 2px solid black;\r\n            height: fit-content;\r\n            text-align: center;\r\n            font-weight: bold;\r\n            border-radius: 3px;\r\n            vertical-align: middle;\r\n            padding: 0.25rem;\r\n        }\r\n\r\n        \r\n    }\r\n};\r\n\r\n\r\n\r\n\r\n\r\n/*600px MQ */\r\n@media only screen and (max-width: 600px) {\r\n    .hero-card {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .modal-form-container{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-items: center;\r\n        text-align: center\r\n    }\r\n\r\n    .editor-modal {\r\n        min-width: 80vw;\r\n    }\r\n};\r\n\r\n\r\n/* Fixed Positioned Element */\r\n.addTaskButton{\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin-bottom: 5rem;\r\n    margin-right: 5rem;\r\n    background-color:$teal;\r\n    border-radius: 50%;\r\n    width: 2rem;\r\n    height:2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: 0.4s;\r\n    z-index: 1000;\r\n\r\n    &:hover{\r\n        cursor: pointer;\r\n        background-color: $orange;\r\n    }\r\n\r\n   button {\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n\r\n    &:hover{\r\n        color: $white;\r\n        transform: rotate(180deg);\r\n    }\r\n   }\r\n};\r\n\r\n/* Fixed position Modal  */\r\n.modal-container{\r\n    width: 60vw;\r\n    min-height: 10rem;\r\n    height: fit-content;\r\n    border: 2px solid $grey;\r\n    border-radius: 5px;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    transform: scale(0);\r\n    margin-bottom: 8rem;\r\n    margin-left: 15%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    transition: 0.4s;\r\n    background-color: $white;\r\n    z-index: 1000;\r\n    padding: 0.5em;\r\n\r\n    &.is-active{\r\n        transform: scale(1);\r\n    }\r\n\r\n    h3 {\r\n        margin-left: 3rem;\r\n        font-weight: 600;\r\n    }\r\n\r\n    hr{\r\n        width: 90%;\r\n        margin: auto;\r\n    }\r\n\r\n    .modal-form-container {\r\n        //border: 2px solid black;\r\n        width: 100%;\r\n        height: fit-content;\r\n        display: flex;\r\n        flex-direction: row;\r\n        \r\n\r\n        #task-form{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        gap: 2rem;\r\n        justify-content: space-between;\r\n\r\n        label {\r\n            display: flex;\r\n            flex-direction: column;\r\n            //border: 2px dashed black;\r\n            height: fit-content;\r\n            }\r\n\r\n        #TDLabel{\r\n            width: 80%;  \r\n        }\r\n\r\n        #task-description {\r\n        width: 100%;\r\n        height: 3rem;;\r\n        margin-bottom: 1rem;\r\n        resize: none;\r\n        }\r\n\r\n        button {\r\n            align-self: center;\r\n            justify-content: center;\r\n            padding: 0.15rem;\r\n\r\n            }\r\n        }\r\n\r\n    }\r\n};\r\n\r\n\r\n/* -------------- */\r\n/* Editor Modal */\r\n/* ------------ */\r\n\r\n.editor-modal {\r\n    width: 15vw;\r\n    min-height: 10rem;\r\n    height: fit-content;\r\n    border: 2px solid $grey;\r\n    border-radius: 5px;\r\n    position: fixed;\r\n    scale: 0;\r\n    right:0;\r\n    transition: 0.4s;\r\n    background-color: $white;\r\n    z-index: 1000;\r\n    padding: 0.5em;\r\n\r\n    &.is-active {\r\n        scale: (1)\r\n    }\r\n\r\n    form {\r\n        display: flex;\r\n        gap: 0.5rem;\r\n        flex-direction: column;\r\n\r\n\r\n        label{ \r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n/*OVERLAY */ \r\n.overlay {\r\n    position: absolute;\r\n    display: none;\r\n    \r\n    &.is-active{\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    display: block;\r\n    z-index: 999; // 1 less than the modal\r\n    }\r\n\r\n};\r\n","@import url('https://fonts.googleapis.com/css2?family=B612+Mono&family=Lato:wght@300&display=swap');\r\n\r\n$baseFont:'Lato', sans-serif;\r\n$teal: teal;\r\n$spanHover: white;\r\n$navBGcolor: rgba(160, 154, 154, 0.986);\r\n$white: white;\r\n$grey: grey;\r\n$heroBorder: grey;\r\n$orange: rgb(216, 147, 19);\r\n$buttonGrey: #E9E9ED;\r\n\r\n// Hero-catagorey styles\r\n#high { \r\n    background-color: Red;\r\n    color: $white;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\n#medium { \r\n    background-color: orangered;\r\n    color: $white;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\n#low { \r\n    background-color: green;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\n","/* Nav */\r\n.nav {\r\n    position:relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    background-color: $navBGcolor;\r\n    align-items: center;\r\n    height: 4rem;;\r\n\r\n\r\n    .hamburger-menu {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2px;\r\n        width: 2.5rem;\r\n        height:4rem;\r\n        padding: 0.5rem;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: $teal;\r\n\r\n        span {\r\n            display: block;\r\n            border: 2px solid black;\r\n            width: 100%;\r\n            transition: 0.4s;\r\n\r\n        }\r\n\r\n\r\n        &:hover{\r\n            cursor: pointer;\r\n            \r\n            span {\r\n                border-color: $spanHover ;\r\n            };\r\n        }\r\n\r\n        &:active{\r\n            border-color: $white;\r\n        }\r\n    };\r\n\r\n    .title-wrapper {\r\n        margin: auto;\r\n        justify-self: center;\r\n        align-self: center;\r\n\r\n        .title {\r\n            color: white;\r\n            font-size: 2rem;\r\n            font-weight: bolder;\r\n        }\r\n    };\r\n\r\n    .company-logo{\r\n        width: 4rem;\r\n        height: 4rem;\r\n\r\n        img{\r\n            color: black;\r\n        }\r\n    }\r\n}\r\n/* Aside enters upon hamburger click */\r\n\r\n\r\n.aside-left {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid black;\r\n    min-width: 15vw;\r\n    width: 25vw;\r\n    height: 90vh;\r\n    align-items: center;\r\n    left: -200%;\r\n    transition: 0.5s;\r\n    background-color: $white;\r\n    z-index: 100;\r\n\r\n    &.is-active{\r\n        display:flex;\r\n        position: static;\r\n        left: 0;\r\n    }\r\n\r\n    .aside-links {\r\n        margin-top: 2rem;;\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        gap: 1rem;\r\n        align-items: center;\r\n\r\n\r\n        button {\r\n            cursor: pointer;\r\n            width:80%;\r\n            border: none;\r\n            min-height: 2rem;\r\n            font-size: large;\r\n            height: fit-content;\r\n            border-radius: 3px;\r\n            font-weight: bolder;\r\n            transition: 0.2s;\r\n\r\n            &:hover {\r\n                background-color: $teal;\r\n                color: $white;\r\n            }\r\n\r\n            &.add-project:before {\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f0fe\";\r\n                margin-right: 1rem;\r\n                };\r\n            }\r\n\r\n            hr {\r\n                width: 80%;\r\n                border: 1px solid black;\r\n            }\r\n\r\n            .projects-list {\r\n                display: flex;\r\n                flex-wrap: wrap;\r\n                flex-direction: column;\r\n                width: 80%;\r\n                align-items: center;\r\n                gap: 1rem;\r\n                z-index: 1001;\r\n                \r\n\r\n                .project {\r\n                    display: flex;\r\n                    cursor: pointer;\r\n                    width:100%;\r\n                    min-height: 2rem;\r\n                    font-size: large;\r\n                    height: fit-content;\r\n                    border-radius: 3px;\r\n                    font-weight: bolder;\r\n                    transition: 0.2s;\r\n                    background-color: $buttonGrey;\r\n                    text-align: center;\r\n                    align-items: center;\r\n                    justify-content: center;\r\n                    \r\n                    &:hover {\r\n                        background-color: $teal;\r\n                        color: $white;\r\n                    }\r\n                }\r\n            }\r\n\r\n        };\r\n}\r\n\r\n.project-modal-container{\r\n    display: none;\r\n    border-radius: 5px;\r\n    width: 80%;\r\n    height: fit-content;\r\n\r\n    &.is-active{\r\n        display: flex;\r\n    }\r\n\r\n    .project-form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: $buttonGrey;\r\n        width: 100%;\r\n    \r\n        label{\r\n            display: flex;\r\n            align-items: center;\r\n            width: 100%;\r\n\r\n            input{\r\n                width: 100%;;\r\n                height: 2rem;\r\n            }\r\n        }\r\n        \r\n\r\n        button {\r\n            align-self: flex-end;\r\n            height: 1.5rem;\r\n            width: 100%;\r\n        }\r\n    }\r\n}\r\n\r\n/* MQ 600PX */\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .aside-left {\r\n        width: 100vw;\r\n        ;\r\n\r\n        &.is-active {\r\n            position: fixed\r\n        }\r\n    }\r\n};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/dom.js":
/*!************************!*\
  !*** ./src/app/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMGrabs": () => (/* binding */ DOMGrabs),
/* harmony export */   "TaskBtnToggle": () => (/* binding */ TaskBtnToggle),
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM),
/* harmony export */   "createNewHero": () => (/* binding */ createNewHero),
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard),
/* harmony export */   "editModalToggleDisplay": () => (/* binding */ editModalToggleDisplay),
/* harmony export */   "editorModalSubmitEL": () => (/* binding */ editorModalSubmitEL),
/* harmony export */   "overlayToggle": () => (/* binding */ overlayToggle),
/* harmony export */   "projectToggle": () => (/* binding */ projectToggle),
/* harmony export */   "removeCard": () => (/* binding */ removeCard),
/* harmony export */   "taskEditor": () => (/* binding */ taskEditor)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/app/projects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/app/storage.js");
/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListener */ "./src/app/eventListener.js");





//DOM Grabs
//Aside fills screen in mobile
function displayAside () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
};

/* clears options to stop array duplication. */
const clearOptions = () => {
    const options = document.getElementById("assigned-project")
    while (options.hasChildNodes()) {
        options.removeChild(options.firstChild);
      }
}

/* Populate task modal with options from projects() */
const populateOptions = () => {
    let options = _projects__WEBPACK_IMPORTED_MODULE_0__.projectStorage.callArray()
    clearOptions();
    options.forEach(object => {
        let {title} = object;
        let option = document.createElement("option")
            option.setAttribute("value", `${title}`)
            option.innerText = `${title}`
         document.getElementById("assigned-project").appendChild(option)   
    })
};


//currently refered as the task button
function TaskBtnToggle () {
    const task = document.querySelector(".add-task-modal")
    return task.classList.toggle("is-active") 
};


/* displays modal upon taskbtn click  */
function taskBtnEL () {
    const taskBtn = document.querySelector(".addTaskButton")
    taskBtn.addEventListener("click", (e) => {
        populateOptions()
        TaskBtnToggle();
        overlayToggle()
    })
};


//Add project Toggle & EL 
const projectToggle = () => {
    const modal = document.querySelector(".project-modal-container")
    modal.classList.toggle("is-active")
};

// places project input upon click, this appends a div to the aside. 
const projectModalEl = () => {
    const addProjectBtn = document.querySelector(".add-project")
    addProjectBtn.addEventListener("click", () => {
        projectToggle();
    })
};

//once submitted, the aside left project add modal closes.
const projectSubmitEL = () => {
    const projectSubmitBtn = document.querySelector(".project_submit")
    projectSubmitBtn.addEventListener("submit", () => {
        projectToggle()
    })
};


/* inserts an overlay, which can beclicked to remove the addTaskModal */
function overlayToggle () {
    const overlay = document.querySelector(".overlay")
    return overlay.classList.toggle("is-active");
}


/* removals modals on click in background*/
function overlayRemoveModals () {
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", () => {
        overlayToggle()
        TaskBtnToggle()
    })
};


//Collapses modals on submit
function modalSubmitCollapse () {
    const formBtn = document.querySelector(".project_submit")
        formBtn.addEventListener("submit", () => {
            TaskBtnToggle()
            overlayToggle()
        })
};

const taskEditor = (() => {

    let object = null;


    const getObject = (e) => {
        let index = e.target.closest(".hero-card").getAttribute("data-index")
        return object = _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.callArray()[index];
    };

   

    const editorModalFill = () => {
        
        let {title, date, priority, description} = object;
        document.getElementById("new-title").defaultValue = `${title}`
        document.getElementById("new-date").defaultValue = `${date}`
        document.getElementById("new-priority").defaultValue = `${priority}`
        document.getElementById("new-description").defaultValue = `${description}`

    };

    const editorModalSubmit = (e) => {
    
        e.preventDefault()
        let {index} = object
    
        let titleValue = document.getElementById("new-title").value.trim(); 
        let dateValue = document.getElementById("new-date").value;
        let priorityValue = document.getElementById("new-priority").value;
        let descriptValue = document.getElementById("new-description").value;

        object.setTitle(titleValue)
        object.setDate(dateValue)
        object.setPriority(priorityValue)
        object.setDescription(descriptValue)
        _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.sendToLocalStorage()

        const container = document.querySelector(`[data-index="${index}"]`).remove() // ensure to wrap in quotes
        createNewHero(_storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.callArray()[index])
        _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.callAllEL();
        return object = null
    }

    const editorReset = () => {
        document.getElementById("edit-task-form").reset()
    }

    return {editorModalFill, editorModalSubmit, editorReset,getObject}

})(); 


const editorModalSubmitEL = () => {
    const editorForm = document.getElementById("edit-task-form");
        editorForm.addEventListener("submit", (e) => {
            taskEditor.editorModalSubmit(e)
            taskEditor.editorReset()
            editModalToggleDisplay()
        })

};

/* Called to create and re-create all hero elements */
function createNewHero (object) {
    let {title, date,priority,catagorey,description, project, index} = object;
    const container = document.querySelector(".innerContainer")
    
    const heroCard = document.createElement("Div"); 
        heroCard.classList.add("hero-card");
            container.appendChild(heroCard);
            heroCard.setAttribute("data-index", `${index}`)


    const heroCheck = document.createElement("div")
        heroCheck.classList.add("hero-icon")
            const labelforCheck = document.createElement("label")
                labelforCheck.setAttribute("for", "checkbox");
                   const checkInput = document.createElement("input");
                    checkInput.setAttribute("type", "checkbox")
                        checkInput.classList.add("hero-check")
                            checkInput.setAttribute("aria-checked", "false");
        labelforCheck.appendChild(checkInput)
        heroCheck.appendChild(labelforCheck)
        heroCard.appendChild(heroCheck);

    const heroTitle = document.createElement("div"); 
        heroTitle.classList.add("hero-title");
            const titleText = document.createElement("p")
                titleText.innerText = `${title}`;
                    heroTitle.appendChild(titleText);
                        heroCard.appendChild(heroTitle);
    
    const heroDate = document.createElement("div")
        heroDate.classList.add("hero-date")
            const dateText = document.createElement("p")
             // const objdate = formatDate(object); 
                dateText.innerText = `Due Date: ${date}`;
                    heroDate.appendChild(dateText)
                        heroCard.appendChild(heroDate);
    
    const heroPriority = document.createElement("div")
        heroPriority.classList.add("hero-priority");
        heroPriority.setAttribute("id", `${priority}`)
           const priorityText = document.createElement("p")
                priorityText.innerText = `${priority}`;
                    heroPriority.appendChild(priorityText);
                    heroCard.appendChild(heroPriority);

    const heroEditIcon = document.createElement("div")
        heroEditIcon.classList.add("hero-edit");
            const icon = document.createElement("i")
                icon.className = "fa-solid fa-gear"; 
                    heroEditIcon.appendChild(icon)
                        heroCard.appendChild(heroEditIcon);

    const heroDeleteIcon = document.createElement("div")
    heroDeleteIcon.classList.add("hero-edit");
        const deleteIcon = document.createElement("i")
            deleteIcon.className = "fa-solid fa-trash"; 
                heroDeleteIcon.appendChild(deleteIcon)
                    heroCard.appendChild(heroDeleteIcon);
    
    const heroDescript = document.createElement("div"); 
        heroDescript.className = "hero-description";
          const descriptText = document.createElement("p")
                descriptText.innerText= `${description}`;
                    heroDescript.appendChild(descriptText);
                        heroCard.appendChild(heroDescript); 
                        
    const heroCatagorey = document.createElement("div");
        heroCatagorey.className = "hero-catagorey";
            heroCatagorey.setAttribute("id", `${catagorey}`)
           const catagoreyText = document.createElement("p")
                catagoreyText.innerText = `${catagorey}`;
                    heroCatagorey.appendChild(catagoreyText)
                        heroCard.appendChild(heroCatagorey);

    const heroProject = document.createElement("div");
    heroProject.className = "hero-project";
        heroProject.setAttribute("id", `${project}`)
        const projectText = document.createElement("p")
            projectText.innerText = `${project}`;
                heroProject.appendChild(projectText)
                    heroCard.appendChild(heroProject);

};


/* Creates a named project button and appends it to aside-left */
const createProjectCard = (object) => {
 const {title} = object;

 const parent = document.querySelector(".projects-list")

 const projectContainer = document.createElement("button")
    projectContainer.classList.add("project")

 //const projectTitle = document.createElement("p")
        projectContainer.innerText = `${title}`
    
    //projectContainer.appendChild(projectTitle)
    return parent.appendChild(projectContainer)
};

//removes card from DOM, when delete button is clicked
function removeCard (e) {
    e.target.closest(".hero-card").remove();
};


//currently unused
function clearDOM () {
    const container = document.querySelector(".innerContainer")
        while(container.firstChild) {
            container.removeChild(container.lastChild)
    }
};

/* Displays all tasks regardless of project assigned*/
const displayAllTasks = () => {
    const heros = document.querySelectorAll(".hero-card")
    heros.forEach(hero => hero.style.display = "flex")
    return
}

const displayAllTasksEL = () => {
    const allTasksBtn = document.querySelector(".alltasks")
        allTasksBtn.addEventListener("click", () => {
            displayAllTasks()
        } )
}
const editModalToggleDisplay = () => {
    const editorModal = document.querySelector(".editor-modal")
    return editorModal.classList.toggle("is-active")
};


//exported to index.js
function DOMGrabs (e) {
    displayAside();
    taskBtnEL();
    overlayRemoveModals();
    modalSubmitCollapse();
    projectModalEl()
    projectSubmitEL()
    displayAllTasksEL();
};




/***/ }),

/***/ "./src/app/eventListener.js":
/*!**********************************!*\
  !*** ./src/app/eventListener.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElDom": () => (/* binding */ ElDom),
/* harmony export */   "deleteBtnEventListener": () => (/* binding */ deleteBtnEventListener),
/* harmony export */   "editorModalEL": () => (/* binding */ editorModalEL)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/app/storage.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/app/dom.js");





function deleteBtnEventListener (e) {
  const deleteBtns = document.querySelectorAll(".fa-trash");
      deleteBtns.forEach(button => {
        button.addEventListener("click", (e) => {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeCard)(e)
          _storage__WEBPACK_IMPORTED_MODULE_0__.StoredItems.deleteCard(e)
        })
      })
};

function editorModalEL (e) {
  const editorIcons = document.querySelectorAll(".fa-gear")
      editorIcons.forEach(icon => {
           icon.addEventListener("click", (e) => {
              _dom__WEBPACK_IMPORTED_MODULE_1__.taskEditor.editorModalFill(_dom__WEBPACK_IMPORTED_MODULE_1__.taskEditor.getObject(e))
              ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.editModalToggleDisplay)()
           })
      })
};

const StorageEl = () => {
    addEventListener(`storage`, () => {
        _storage__WEBPACK_IMPORTED_MODULE_0__.StoredItems.sendToLocalStorage();
    })
};


const ElDom =() => {
    deleteBtnEventListener()
    StorageEl();
    editorModalEL()

}



/***/ }),

/***/ "./src/app/factory.js":
/*!****************************!*\
  !*** ./src/app/factory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignMethods": () => (/* binding */ AssignMethods),
/* harmony export */   "collectForm": () => (/* binding */ collectForm)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/app/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/app/storage.js");
//Imports
 //Called during the collectformData


//factory Function for form.value structure
function Taskobject (title, date, priority, catagorey, description, project,index) {
  return {  
    title,
    date,
    priority,
    catagorey,
    description,
    project,
    index,
  }
};

/* Setters */
const titleSetter =  (state) => ({
  setTitle: (string) => state.title = string
})

const dateSetter = (state) => ({
  setDate : (string) => state.date = string
});

const prioritySetter = (state) => ({
  setPriority: (string) => state.priority = string
});

const catagoreySetter = (state) => ({
  setCatagorey: (string) => state.catagorey = string
});

const descriptionSetter = (state) => ({
  setDescription: (string) => state.description = string
});

function AssignMethods (object) {
  return Object.assign(object, titleSetter(object), 
        dateSetter(object), prioritySetter(object),
        catagoreySetter(object), descriptionSetter(object) )
};





/* Collects data from form inputs, returns new object. */
function collectFormData (e) {

  e.preventDefault();
 
    const title = document.getElementById("task-title").value.trim();
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const catagorey = document.getElementById("task-catagorey").value;
    const description = document.getElementById("task-description").value;
    const project = document.getElementById("assigned-project").value
    let index = _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.callArray().length

    let newTask = Taskobject(title, date, priority,catagorey,description, project, index)
    AssignMethods(newTask)

    return newTask
};


function clearForm () { 
  const form = document.getElementById("task-form")
  form.reset()
};


/* Currently displays the collected inputs on the DOM currently used in index.js */
function collectForm () {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.createOneCard(collectFormData(e))
        clearForm()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.TaskBtnToggle)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.overlayToggle)()
        return clearForm();  
      });
};






/***/ }),

/***/ "./src/app/projects.js":
/*!*****************************!*\
  !*** ./src/app/projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedProjectEl": () => (/* binding */ SelectedProjectEl),
/* harmony export */   "projectModalEl": () => (/* binding */ projectModalEl),
/* harmony export */   "projectStorage": () => (/* binding */ projectStorage)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/app/dom.js");
//Imports




// projectStorage Obj
const projectStorage = (() => {

    let projectArray = [];

    const pushToProjectArray = (object) => {
        projectArray.push(object)
        sendtoLocalStorage()
    }

    const callArray = () => {
        return projectArray
    }

    const sendtoLocalStorage = () => {
        return localStorage.setItem("projects", JSON.stringify(projectArray))
    };

    const retrieveProjects = () => {
        let projects = JSON.parse(localStorage.getItem("projects"))
        console.log(projects)
        if (projects === null){return console.log("no projects")}
        projects.forEach(project => {projectArray.push(project)})
    }

    const createProjects = () => {
        projectArray.forEach(project => {
            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createProjectCard)(project)
        })
        return SelectedProjectEl()
    }

    return {
        sendtoLocalStorage, retrieveProjects, 
        createProjects, pushToProjectArray, callArray
    }
})();


/*functional codes */
const grabProjectForm = ((e) => {
    e.preventDefault()
    const projectName = document.getElementById("project-name").value.trim();
    projectStorage.pushToProjectArray({title: projectName})
    return {title: projectName}
});

/* Sets non-wanted cards to display: none */
const sortTasksByProject = (e) => {
    let selection = e.target.innerText;
const heros = document.querySelectorAll(".hero-card")
    heros.forEach(hero => {
        if (hero.querySelector(".hero-project").innerText != selection){
            hero.style.display = "none"
        } else hero.style.display = "flex"
    })
};


const projectFormReset = () => {
    const projectForm = document.getElementById("project-form")
    return projectForm.reset()
};



const SelectedProjectEl = () => {
    const projectBtns = document.querySelectorAll(".project")
        projectBtns.forEach(button => {
            button.addEventListener("click", (e) => {
                sortTasksByProject(e)
            })
        })
 };


const projectModalEl = () => {
    const projectSubmit = document.querySelector(".project-form");
        projectSubmit.addEventListener("submit", (e) => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createProjectCard)(grabProjectForm(e))
            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectToggle)();
            projectFormReset()
            SelectedProjectEl()

        })
};







/***/ }),

/***/ "./src/app/storage.js":
/*!****************************!*\
  !*** ./src/app/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredItems": () => (/* binding */ StoredItems)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/app/dom.js");
/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListener */ "./src/app/eventListener.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./src/app/factory.js");



// Remodel to ensure an array fo objects is present inside the local storage. 

const StoredItems = (() => {
  
  let objectArray = [];

  //updates array at window load with retrieveing of objects from LS 
  const retrieveObjects = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    if(tasks === null){return}
      tasks.forEach(task => {
        task.index = objectArray.length
        objectArray.push(task)
      })
    return arrayByDate()
  }

  const arrayByDate = () => {
    objectArray.sort(function (a, b ) {
      return new Date(a.date) - new Date (b.date)
    })
  };


    //called second to create cards from LS 
  const createCardsFromLS = () => {
      objectArray.forEach(object => {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createNewHero)(object);
        (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__.AssignMethods)(object)
    })
  }


  //called during the collectForm function in factory.js
  const sendToArray = (obj) => objectArray.push(obj)


    //currently stores the array in LS, called during the event listener in App
  const sendToLocalStorage= () => {
    return localStorage.setItem("tasks", JSON.stringify(objectArray));
  }


  //allows access for methods. 
  const callArray = () => objectArray;
  

  const deleteCard = (e) => {
    let index = e.target.closest(".hero-card").getAttribute("data-index")
    objectArray.splice(index,1)
    sendToLocalStorage()
  }

   function callAllEL () {
    ;(0,_eventListener__WEBPACK_IMPORTED_MODULE_1__.deleteBtnEventListener)()
    ;(0,_eventListener__WEBPACK_IMPORTED_MODULE_1__.editorModalEL)()
  }


  //called during the form submit to create a single hero-card
  const createOneCard = (object) => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createNewHero)(object)
    sendToArray(object)
    sendToLocalStorage()
    callAllEL()
  };


  return {
    retrieveObjects, createCardsFromLS, sendToArray, callArray,
    createOneCard, deleteCard, sendToLocalStorage, callAllEL
  }
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _app_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/dom */ "./src/app/dom.js");
/* harmony import */ var _app_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/factory */ "./src/app/factory.js");
/* harmony import */ var _app_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/storage */ "./src/app/storage.js");
/* harmony import */ var _app_eventListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/eventListener */ "./src/app/eventListener.js");
/* harmony import */ var _app_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/projects */ "./src/app/projects.js");









const DOM = function domEvents (e) {
    (0,_app_dom__WEBPACK_IMPORTED_MODULE_1__.DOMGrabs)(e);
    _app_projects__WEBPACK_IMPORTED_MODULE_5__.projectStorage.retrieveProjects()
    _app_projects__WEBPACK_IMPORTED_MODULE_5__.projectStorage.createProjects()
    _app_storage__WEBPACK_IMPORTED_MODULE_3__.StoredItems.retrieveObjects()
    _app_storage__WEBPACK_IMPORTED_MODULE_3__.StoredItems.createCardsFromLS();
    _app_storage__WEBPACK_IMPORTED_MODULE_3__.StoredItems.callArray();
    (0,_app_factory__WEBPACK_IMPORTED_MODULE_2__.collectForm)(e);
    (0,_app_eventListener__WEBPACK_IMPORTED_MODULE_4__.ElDom)();
    (0,_app_projects__WEBPACK_IMPORTED_MODULE_5__.projectModalEl)(e)
    ;(0,_app_projects__WEBPACK_IMPORTED_MODULE_5__.SelectedProjectEl)(e)
    ;(0,_app_dom__WEBPACK_IMPORTED_MODULE_1__.editorModalSubmitEL)(e)
};

window.onload = DOM();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sV0FBVyxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsMENBQTBDLGlFQUFpRSw0Q0FBNEMsVUFBVSxtQkFBbUIsaUJBQWlCLCtCQUErQiwrQkFBK0IsMkJBQTJCLGtDQUFrQyxpQ0FBaUMsZ0RBQWdELFNBQVMsTUFBTSxhQUFhLHNCQUFzQixNQUFNLGNBQWMsMkJBQTJCLE1BQU0sZUFBZSxzQkFBc0IsNEJBQTRCLHVCQUF1QixNQUFNLHdCQUF3QixnQ0FBZ0MsNkJBQTZCLG9CQUFvQixxQkFBcUIsc0JBQXNCLDZCQUE2QiwwQkFBMEIsbUNBQW1DLHVCQUF1QixzQ0FBc0Msd0JBQXdCLHVCQUF1Qix5QkFBeUIsZ0NBQWdDLDBCQUEwQixTQUFTLHVCQUF1QiwwQ0FBMEMsK0JBQStCLDJCQUEyQiw2QkFBNkIsMEJBQTBCLGdDQUFnQyw0QkFBNEIsd0JBQXdCLGdDQUFnQywyQ0FBMkMsMEJBQTBCLDZCQUE2Qix1QkFBdUIsd0JBQXdCLHlDQUF5Qyx3Q0FBd0MsNkJBQTZCLHdCQUF3QixnQ0FBZ0MsK0JBQStCLG9DQUFvQyxhQUFhLDRCQUE0QixrQ0FBa0MsOEJBQThCLDZCQUE2QixhQUFhLDZCQUE2QiwrQkFBK0IsNkJBQTZCLGlDQUFpQyxhQUFhLHdCQUF3QixtQ0FBbUMsaUNBQWlDLDZCQUE2QixpQ0FBaUMsb0NBQW9DLDhDQUE4QyxpQkFBaUIsYUFBYSw4QkFBOEIsK0JBQStCLDJCQUEyQixpQ0FBaUMsb0NBQW9DLGlCQUFpQixvQ0FBb0MsdUNBQXVDLDJCQUEyQix3Q0FBd0Msb0NBQW9DLG1DQUFtQyxrQ0FBa0MsbUNBQW1DLHVDQUF1QyxpQ0FBaUMsYUFBYSx5QkFBeUIsTUFBTSxvRkFBb0Ysb0JBQW9CLG1DQUFtQyxTQUFTLGtDQUFrQywwQkFBMEIsbUNBQW1DLGdDQUFnQyxrQ0FBa0MsdUNBQXVDLDJCQUEyQiw0QkFBNEIsU0FBUyxNQUFNLDZEQUE2RCx3QkFBd0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsMkJBQTJCLCtCQUErQiwyQkFBMkIsb0JBQW9CLG9CQUFvQixzQkFBc0IsNEJBQTRCLGdDQUFnQyx5QkFBeUIsc0JBQXNCLG9CQUFvQiw0QkFBNEIsc0NBQXNDLFNBQVMsbUJBQW1CLHNDQUFzQyw4QkFBOEIscUJBQXFCLHdCQUF3Qix3QkFBd0IseUJBQXlCLG9CQUFvQiwwQkFBMEIsc0NBQXNDLFNBQVMsUUFBUSxNQUFNLHdEQUF3RCxvQkFBb0IsMEJBQTBCLDRCQUE0QixnQ0FBZ0MsMkJBQTJCLHdCQUF3QixnQkFBZ0Isa0JBQWtCLDRCQUE0Qiw0QkFBNEIseUJBQXlCLHNCQUFzQiwrQkFBK0Isb0JBQW9CLHlCQUF5QixpQ0FBaUMsc0JBQXNCLHVCQUF1Qix3QkFBd0IsZ0NBQWdDLFNBQVMsZ0JBQWdCLDhCQUE4Qiw2QkFBNkIsU0FBUyxlQUFlLHVCQUF1Qix5QkFBeUIsU0FBUyxtQ0FBbUMsc0NBQXNDLHdCQUF3QixnQ0FBZ0MsMEJBQTBCLGdDQUFnQyx1Q0FBdUMsMEJBQTBCLGdDQUFnQyw0QkFBNEIsc0JBQXNCLDJDQUEyQyx1QkFBdUIsOEJBQThCLHVDQUF1QywyQ0FBMkMsb0NBQW9DLGlCQUFpQix5QkFBeUIsNkJBQTZCLGFBQWEsbUNBQW1DLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLHlCQUF5QixhQUFhLHdCQUF3QixtQ0FBbUMsd0NBQXdDLGlDQUFpQyxxQkFBcUIsYUFBYSxhQUFhLE1BQU0sbUdBQW1HLG9CQUFvQiwwQkFBMEIsNEJBQTRCLGdDQUFnQywyQkFBMkIsd0JBQXdCLGlCQUFpQixnQkFBZ0IseUJBQXlCLGlDQUFpQyxzQkFBc0IsdUJBQXVCLHlCQUF5QiwrQkFBK0Isa0JBQWtCLDBCQUEwQix3QkFBd0IsbUNBQW1DLDJCQUEyQiw4QkFBOEIsdUNBQXVDLGFBQWEsU0FBUyxLQUFLLHVDQUF1QywyQkFBMkIsc0JBQXNCLDRCQUE0QixlQUFlLGdCQUFnQixrQkFBa0IsaUJBQWlCLHVCQUF1QixzQkFBc0IsaUNBQWlDLFVBQVUsMkdBQTJHLHFDQUFxQyxnQkFBZ0Isc0JBQXNCLDRDQUE0QyxrQkFBa0IsZ0JBQWdCLHNCQUFzQiwrQkFBK0IseUJBQXlCLDRDQUE0Qyw4QkFBOEIsc0JBQXNCLDJCQUEyQiwwQkFBMEIsS0FBSyxrQkFBa0Isb0NBQW9DLHNCQUFzQiwyQkFBMkIsMEJBQTBCLEtBQUssZUFBZSxnQ0FBZ0MsMkJBQTJCLDBCQUEwQixLQUFLLDhCQUE4QiwwQkFBMEIsc0JBQXNCLDRCQUE0Qix3QkFBd0IsdUNBQXVDLHNDQUFzQyw0QkFBNEIsc0JBQXNCLGlDQUFpQywwQkFBMEIsbUNBQW1DLHFCQUFxQiwwQkFBMEIsd0JBQXdCLDRCQUE0QixnQ0FBZ0Msb0NBQW9DLG9DQUFvQyxzQkFBc0IsK0JBQStCLHdDQUF3Qyw0QkFBNEIsaUNBQWlDLGlCQUFpQiw0QkFBNEIsZ0NBQWdDLHNDQUFzQyw4Q0FBOEMsa0JBQWtCLGFBQWEseUJBQXlCLHFDQUFxQyxhQUFhLFVBQVUsNEJBQTRCLHlCQUF5QixpQ0FBaUMsK0JBQStCLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLG9DQUFvQyxhQUFhLFVBQVUsMEJBQTBCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDZCQUE2QixhQUFhLFNBQVMsS0FBSyxvRUFBb0Usd0JBQXdCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLHdCQUF3QixvQkFBb0IscUJBQXFCLDRCQUE0QixvQkFBb0IseUJBQXlCLGlDQUFpQyxxQkFBcUIsd0JBQXdCLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLFNBQVMsMEJBQTBCLDhCQUE4QiwwQkFBMEIsbUNBQW1DLHdCQUF3QixzQkFBc0IsZ0NBQWdDLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLDZCQUE2QixpQ0FBaUMsaUNBQWlDLG9DQUFvQyxtQ0FBbUMsb0NBQW9DLGlDQUFpQyw2QkFBNkIsNENBQTRDLGtDQUFrQyxpQkFBaUIsMENBQTBDLCtDQUErQyx3Q0FBd0MsdUNBQXVDLHNCQUFzQixpQkFBaUIsd0JBQXdCLCtCQUErQiw0Q0FBNEMsaUJBQWlCLG9DQUFvQyxrQ0FBa0Msb0NBQW9DLDJDQUEyQywrQkFBK0Isd0NBQXdDLDhCQUE4QixrQ0FBa0Msc0RBQXNELHNDQUFzQyx3Q0FBd0MsbUNBQW1DLHlDQUF5Qyx5Q0FBeUMsNENBQTRDLDJDQUEyQyw0Q0FBNEMseUNBQXlDLHNEQUFzRCwyQ0FBMkMsNENBQTRDLGdEQUFnRCx5REFBeUQsb0RBQW9ELDBDQUEwQyx5QkFBeUIscUJBQXFCLGlCQUFpQixrQkFBa0IsS0FBSyxpQ0FBaUMsc0JBQXNCLDJCQUEyQixtQkFBbUIsNEJBQTRCLHdCQUF3QiwwQkFBMEIsU0FBUywyQkFBMkIsMEJBQTBCLG1DQUFtQyxnQ0FBZ0Msb0NBQW9DLDBDQUEwQyx3QkFBd0IsMEJBQTBCLDhCQUE4QixvQ0FBb0MsNEJBQTRCLDBCQUEwQixpQ0FBaUMsaUNBQWlDLGlCQUFpQixhQUFhLG9DQUFvQyxxQ0FBcUMsK0JBQStCLDRCQUE0QixhQUFhLFNBQVMsS0FBSyx5RUFBeUUscUJBQXFCLHlCQUF5QixhQUFhLDZCQUE2Qiw0Q0FBNEMsU0FBUyxNQUFNLG1CQUFtQjtBQUN4Z3lCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBOEs7QUFDOUs7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvSkFBTzs7OztBQUl3SDtBQUNoSixPQUFPLGlFQUFlLG9KQUFPLElBQUksMkpBQWMsR0FBRywySkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZrRDtBQUNQO0FBQ0o7QUFDUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrREFBd0I7QUFDMUM7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xELGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9DQUFvQztBQUNqRCwrREFBK0QsTUFBTTtBQUNyRSw4REFBOEQsS0FBSztBQUNuRSxrRUFBa0UsU0FBUztBQUMzRSxxRUFBcUUsWUFBWTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUE4QjtBQUN0QztBQUNBLGlFQUFpRSxNQUFNO0FBQ3ZFLHNCQUFzQiwyREFBcUI7QUFDM0MsUUFBUSwyREFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0REFBNEQ7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxNQUFNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxLQUFLO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUztBQUNwRDtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQSw2Q0FBNkMsVUFBVTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxPQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6VHFDO0FBQ2dDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnREFBVTtBQUNwQixVQUFVLDREQUFzQjtBQUNoQyxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNERBQTBCLENBQUMsc0RBQW9CO0FBQzdELGNBQWMsNkRBQXNCO0FBQ3BDLFlBQVk7QUFDWixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUE4QjtBQUN0QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNvRCxDQUFDO0FBQ2hCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFxQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUF5QjtBQUNqQztBQUNBLFFBQVEsb0RBQWE7QUFDckIsUUFBUSxtREFBYTtBQUNyQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZuQztBQUN5QztBQUNIO0FBQ3RDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IscUNBQXFDLDJCQUEyQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWlCO0FBQzdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsbUJBQW1CO0FBQzFELFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFpQjtBQUM3QixZQUFZLG9EQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDMEM7QUFDMUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0Y2RDtBQUNVO0FBQzFCO0FBQzdDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQWE7QUFDckIsUUFBUSwwREFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBc0I7QUFDMUIsSUFBSSw4REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7OztVQzVFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDOEI7QUFDZjtBQUNEO0FBQ0U7QUFDdUM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSwwRUFBK0I7QUFDbkMsSUFBSSx3RUFBNkI7QUFDakMsSUFBSSxxRUFBMkI7QUFDL0IsSUFBSSx1RUFBNkI7QUFDakMsSUFBSSwrREFBcUI7QUFDekIsSUFBSSx5REFBVztBQUNmLElBQUkseURBQUs7QUFDVCxJQUFJLDZEQUFjO0FBQ2xCLElBQUksaUVBQWlCO0FBQ3JCLElBQUksOERBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz84ZDZiIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9hcHAvZG9tLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvYXBwL2V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9hcHAvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL2FwcC9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL2FwcC9zdG9yYWdlLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CNjEyK01vbm8mZmFtaWx5PUxhdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSW1wb3J0cyAqL1xcbiNoaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIE5hdiAqL1xcbi5uYXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTU0LCAxNTQsIDAuOTg2KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51OmhvdmVyIHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnU6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcbi5uYXYgLnRpdGxlLXdyYXBwZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5uYXYgLnRpdGxlLXdyYXBwZXIgLnRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5uYXYgLmNvbXBhbnktbG9nbyB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuLm5hdiAuY29tcGFueS1sb2dvIGltZyB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEFzaWRlIGVudGVycyB1cG9uIGhhbWJ1cmdlciBjbGljayAqL1xcbi5hc2lkZS1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtaW4td2lkdGg6IDE1dnc7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogOTB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAtMjAwJTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmFzaWRlLWxlZnQuaXMtYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgbGVmdDogMDtcXG59XFxuLmFzaWRlLWxlZnQgLmFzaWRlLWxpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFzaWRlLWxlZnQgLmFzaWRlLWxpbmtzIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWluLWhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbi5hc2lkZS1sZWZ0IC5hc2lkZS1saW5rcyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmFzaWRlLWxlZnQgLmFzaWRlLWxpbmtzIGJ1dHRvbi5hZGQtcHJvamVjdDpiZWZvcmUge1xcbiAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZmVcXFwiO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYXNpZGUtbGVmdCAuYXNpZGUtbGlua3MgaHIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uYXNpZGUtbGVmdCAuYXNpZGUtbGlua3MgLnByb2plY3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogODAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHotaW5kZXg6IDEwMDE7XFxufVxcbi5hc2lkZS1sZWZ0IC5hc2lkZS1saW5rcyAucHJvamVjdHMtbGlzdCAucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RUQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hc2lkZS1sZWZ0IC5hc2lkZS1saW5rcyAucHJvamVjdHMtbGlzdCAucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIuaXMtYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAucHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTlFRDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIgLnByb2plY3QtZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIgLnByb2plY3QtZm9ybSBsYWJlbCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLnByb2plY3QtbW9kYWwtY29udGFpbmVyIC5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogTVEgNjAwUFggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYXNpZGUtbGVmdCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIC5hc2lkZS1sZWZ0LmlzLWFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG59XFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbiogLmljb246OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMjAwdmg7XFxufVxcblxcbi5hcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG4uY2FyZGNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmNhcmRjb250YWluZXIgLmlubmVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1pbi13aWR0aDogNzAlO1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDJweCA0cHggZ3JleTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWNoZWNrIHtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbiAgYWNjZW50LWNvbG9yOiB0ZWFsO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLXRpdGxlIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1lZGl0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tZWRpdDpob3ZlciB7XFxuICBjb2xvcjogdGVhbDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tZGVzY3JpcHRpb24ge1xcbiAgbWluLXdpZHRoOiA2MCU7XFxuICB3aWR0aDogODAlO1xcbiAgbWluLWhlaWdodDogMnJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tY2F0YWdvcmV5IHtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuLyo2MDBweCBNUSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5oZXJvLWNhcmQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuZWRpdG9yLW1vZGFsIHtcXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xcbiAgfVxcbn1cXG4vKiBGaXhlZCBQb3NpdGlvbmVkIEVsZW1lbnQgKi9cXG4uYWRkVGFza0J1dHRvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbi5hZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDE0NywgMTkpO1xcbn1cXG4uYWRkVGFza0J1dHRvbiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uYWRkVGFza0J1dHRvbiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyogRml4ZWQgcG9zaXRpb24gTW9kYWwgICovXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxuICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuLm1vZGFsLWNvbnRhaW5lci5pcy1hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciBoMyB7XFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tb2RhbC1jb250YWluZXIgaHIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0tY29udGFpbmVyICN0YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0tY29udGFpbmVyICN0YXNrLWZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtICNURExhYmVsIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0tY29udGFpbmVyICN0YXNrLWZvcm0gI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtIGJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMTVyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tICovXFxuLyogRWRpdG9yIE1vZGFsICovXFxuLyogLS0tLS0tLS0tLS0tICovXFxuLmVkaXRvci1tb2RhbCB7XFxuICB3aWR0aDogMTV2dztcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBzY2FsZTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4uZWRpdG9yLW1vZGFsLmlzLWFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuLmVkaXRvci1tb2RhbCBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5lZGl0b3ItbW9kYWwgZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLypPVkVSTEFZICovXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm92ZXJsYXkuaXMtYWN0aXZlIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgei1pbmRleDogOTk5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2Fic3RyYWN0aW9ucy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2Fic3RyYWN0aW9ucy9uYXYtYmFyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0EsWUFBQTtBQ1lBO0VBQ0kscUJBQUE7RUFDQSxZQVRJO0VBVUosa0JBQUE7RUFDQSxpQkFBQTtBRFZKOztBQ2FBO0VBQ0ksMkJBQUE7RUFDQSxZQWhCSTtFQWlCSixrQkFBQTtFQUNBLGlCQUFBO0FEVko7O0FDYUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURWSjs7QUVwQkEsUUFBQTtBQUNBO0VB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LHVCQ2pSSTtFRGtSSixhQUFBO0VBQ0EsY0FBQTtBQXdKSjtBQXRKSTtFQUNJLFFBQUE7QUF3SlI7QUFySkk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBdUpSO0FBcEpRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBc0paOztBQWhKQSxXQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFtSko7QUFqSkk7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFtSkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGVudjogdW5kZWZpbmVkO1xcbi8qIEltcG9ydHMgKi9cXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCIuL2Fic3RyYWN0aW9ucy92YXJpYWJsZXMuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9hYnN0cmFjdGlvbnMvbmF2LWJhci5zY3NzXFxcIjtcXHJcXG5cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRiYXNlRm9udDtcXHJcXG5cXHJcXG4gICAgLmljb246OmJlZm9yZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICB9XFxyXFxufTtcXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBoZWlnaHQ6IDIwMHZoO1xcclxcbn07XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59O1xcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxufTtcXHJcXG5cXHJcXG4uY2FyZGNvbnRhaW5lciB7XFxyXFxuICAgIC8vYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgLmlubmVyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAycmVtOztcXHJcXG4gICAgICAgIC8vYm9yZGVyOiAycHggZGFzaGVkIGJsdWU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyby1jYXJke1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGhlcm9Cb3JkZXI7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDcwJTtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDRyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGdhcDogMC41cmVtO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDRweCBncmV5O1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmhlcm8tY2hlY2t7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxLjI1cmVtO1xcclxcbiAgICAgICAgICAgIGFjY2VudC1jb2xvcjogJHRlYWw7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaGVyby1pY29uIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5oZXJvLXRpdGxlIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5oZXJvLWVkaXQge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRlYWw7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuaGVyby1kZXNjcmlwdGlvbntcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5oZXJvLWNhdGFnb3JleXtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxufTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKjYwMHB4IE1RICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuaGVyby1jYXJkIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vZGFsLWZvcm0tY29udGFpbmVye1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVkaXRvci1tb2RhbCB7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDgwdnc7XFxyXFxuICAgIH1cXHJcXG59O1xcclxcblxcclxcblxcclxcbi8qIEZpeGVkIFBvc2l0aW9uZWQgRWxlbWVudCAqL1xcclxcbi5hZGRUYXNrQnV0dG9ue1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjokdGVhbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OjJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgIH1cXHJcXG59O1xcclxcblxcclxcbi8qIEZpeGVkIHBvc2l0aW9uIE1vZGFsICAqL1xcclxcbi5tb2RhbC1jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDhyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcblxcclxcbiAgICAmLmlzLWFjdGl2ZXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDMge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhye1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9kYWwtZm9ybS1jb250YWluZXIge1xcclxcbiAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAjdGFzay1mb3Jte1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBnYXA6IDJyZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgICBsYWJlbCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIC8vYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI1RETGFiZWx7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDgwJTsgIFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3Rhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDNyZW07O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMTVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxufTtcXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIEVkaXRvciBNb2RhbCAqL1xcclxcbi8qIC0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5lZGl0b3ItbW9kYWwge1xcclxcbiAgICB3aWR0aDogMTV2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTByZW07XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgc2NhbGU6IDA7XFxyXFxuICAgIHJpZ2h0OjA7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuXFxyXFxuICAgICYuaXMtYWN0aXZlIHtcXHJcXG4gICAgICAgIHNjYWxlOiAoMSlcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBmb3JtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBsYWJlbHsgXFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qT1ZFUkxBWSAqLyBcXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgXFxyXFxuICAgICYuaXMtYWN0aXZle1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB6LWluZGV4OiA5OTk7IC8vIDEgbGVzcyB0aGFuIHRoZSBtb2RhbFxcclxcbiAgICB9XFxyXFxuXFxyXFxufTtcXHJcXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUI2MTIrTW9ubyZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4kYmFzZUZvbnQ6J0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiR0ZWFsOiB0ZWFsO1xcclxcbiRzcGFuSG92ZXI6IHdoaXRlO1xcclxcbiRuYXZCR2NvbG9yOiByZ2JhKDE2MCwgMTU0LCAxNTQsIDAuOTg2KTtcXHJcXG4kd2hpdGU6IHdoaXRlO1xcclxcbiRncmV5OiBncmV5O1xcclxcbiRoZXJvQm9yZGVyOiBncmV5O1xcclxcbiRvcmFuZ2U6IHJnYigyMTYsIDE0NywgMTkpO1xcclxcbiRidXR0b25HcmV5OiAjRTlFOUVEO1xcclxcblxcclxcbi8vIEhlcm8tY2F0YWdvcmV5IHN0eWxlc1xcclxcbiNoaWdoIHsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IFJlZDtcXHJcXG4gICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI21lZGl1bSB7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNsb3cgeyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcblwiLFwiLyogTmF2ICovXFxyXFxuLm5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdkJHY29sb3I7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNHJlbTs7XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5oYW1idXJnZXItbWVudSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGdhcDogMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDo0cmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWw7XFxyXFxuXFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHNwYW5Ib3ZlciA7XFxyXFxuICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6YWN0aXZle1xcclxcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAudGl0bGUtd3JhcHBlciB7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIC50aXRsZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcblxcclxcbiAgICAuY29tcGFueS1sb2dve1xcclxcbiAgICAgICAgd2lkdGg6IDRyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxyXFxuXFxyXFxuICAgICAgICBpbWd7XFxyXFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi8qIEFzaWRlIGVudGVycyB1cG9uIGhhbWJ1cmdlciBjbGljayAqL1xcclxcblxcclxcblxcclxcbi5hc2lkZS1sZWZ0IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWluLXdpZHRoOiAxNXZ3O1xcclxcbiAgICB3aWR0aDogMjV2dztcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsZWZ0OiAtMjAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuXFxyXFxuICAgICYuaXMtYWN0aXZle1xcclxcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFzaWRlLWxpbmtzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDo4MCU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLmFkZC1wcm9qZWN0OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXGYwZmVcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGhyIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDE7XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgICAgICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkdyZXk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB9O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAgJi5pcy1hY3RpdmV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LWZvcm0ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uR3JleTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGxhYmVse1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1RIDYwMFBYICovXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuYXNpZGUtbGVmdCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgICAgICA7XFxyXFxuXFxyXFxuICAgICAgICAmLmlzLWFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZSwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IHsgcHJvamVjdFN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3RzJ1xyXG5pbXBvcnQgeyBTdG9yZWRJdGVtcyB9IGZyb20gJy4vc3RvcmFnZSdcclxuaW1wb3J0IHsgZWRpdG9yTW9kYWxFTCB9IGZyb20gJy4vZXZlbnRMaXN0ZW5lcidcclxuXHJcbi8vRE9NIEdyYWJzXHJcbi8vQXNpZGUgZmlsbHMgc2NyZWVuIGluIG1vYmlsZVxyXG5mdW5jdGlvbiBkaXNwbGF5QXNpZGUgKCkge1xyXG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlLWxlZnRcIilcclxuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyLW1lbnVcIilcclxuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgfSlcclxufTtcclxuXHJcbi8qIGNsZWFycyBvcHRpb25zIHRvIHN0b3AgYXJyYXkgZHVwbGljYXRpb24uICovXHJcbmNvbnN0IGNsZWFyT3B0aW9ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzc2lnbmVkLXByb2plY3RcIilcclxuICAgIHdoaWxlIChvcHRpb25zLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgIG9wdGlvbnMucmVtb3ZlQ2hpbGQob3B0aW9ucy5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG59XHJcblxyXG4vKiBQb3B1bGF0ZSB0YXNrIG1vZGFsIHdpdGggb3B0aW9ucyBmcm9tIHByb2plY3RzKCkgKi9cclxuY29uc3QgcG9wdWxhdGVPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBwcm9qZWN0U3RvcmFnZS5jYWxsQXJyYXkoKVxyXG4gICAgY2xlYXJPcHRpb25zKCk7XHJcbiAgICBvcHRpb25zLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBsZXQge3RpdGxlfSA9IG9iamVjdDtcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dGl0bGV9YClcclxuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGAke3RpdGxlfWBcclxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3NpZ25lZC1wcm9qZWN0XCIpLmFwcGVuZENoaWxkKG9wdGlvbikgICBcclxuICAgIH0pXHJcbn07XHJcblxyXG5cclxuLy9jdXJyZW50bHkgcmVmZXJlZCBhcyB0aGUgdGFzayBidXR0b25cclxuZnVuY3Rpb24gVGFza0J0blRvZ2dsZSAoKSB7XHJcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1tb2RhbFwiKVxyXG4gICAgcmV0dXJuIHRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKSBcclxufTtcclxuXHJcblxyXG4vKiBkaXNwbGF5cyBtb2RhbCB1cG9uIHRhc2tidG4gY2xpY2sgICovXHJcbmZ1bmN0aW9uIHRhc2tCdG5FTCAoKSB7XHJcbiAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnV0dG9uXCIpXHJcbiAgICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIHBvcHVsYXRlT3B0aW9ucygpXHJcbiAgICAgICAgVGFza0J0blRvZ2dsZSgpO1xyXG4gICAgICAgIG92ZXJsYXlUb2dnbGUoKVxyXG4gICAgfSlcclxufTtcclxuXHJcblxyXG4vL0FkZCBwcm9qZWN0IFRvZ2dsZSAmIEVMIFxyXG5jb25zdCBwcm9qZWN0VG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWwtY29udGFpbmVyXCIpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpXHJcbn07XHJcblxyXG4vLyBwbGFjZXMgcHJvamVjdCBpbnB1dCB1cG9uIGNsaWNrLCB0aGlzIGFwcGVuZHMgYSBkaXYgdG8gdGhlIGFzaWRlLiBcclxuY29uc3QgcHJvamVjdE1vZGFsRWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKVxyXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RUb2dnbGUoKTtcclxuICAgIH0pXHJcbn07XHJcblxyXG4vL29uY2Ugc3VibWl0dGVkLCB0aGUgYXNpZGUgbGVmdCBwcm9qZWN0IGFkZCBtb2RhbCBjbG9zZXMuXHJcbmNvbnN0IHByb2plY3RTdWJtaXRFTCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Rfc3VibWl0XCIpXHJcbiAgICBwcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RUb2dnbGUoKVxyXG4gICAgfSlcclxufTtcclxuXHJcblxyXG4vKiBpbnNlcnRzIGFuIG92ZXJsYXksIHdoaWNoIGNhbiBiZWNsaWNrZWQgdG8gcmVtb3ZlIHRoZSBhZGRUYXNrTW9kYWwgKi9cclxuZnVuY3Rpb24gb3ZlcmxheVRvZ2dsZSAoKSB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpXHJcbiAgICByZXR1cm4gb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG59XHJcblxyXG5cclxuLyogcmVtb3ZhbHMgbW9kYWxzIG9uIGNsaWNrIGluIGJhY2tncm91bmQqL1xyXG5mdW5jdGlvbiBvdmVybGF5UmVtb3ZlTW9kYWxzICgpIHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgb3ZlcmxheVRvZ2dsZSgpXHJcbiAgICAgICAgVGFza0J0blRvZ2dsZSgpXHJcbiAgICB9KVxyXG59O1xyXG5cclxuXHJcbi8vQ29sbGFwc2VzIG1vZGFscyBvbiBzdWJtaXRcclxuZnVuY3Rpb24gbW9kYWxTdWJtaXRDb2xsYXBzZSAoKSB7XHJcbiAgICBjb25zdCBmb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X3N1Ym1pdFwiKVxyXG4gICAgICAgIGZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFRhc2tCdG5Ub2dnbGUoKVxyXG4gICAgICAgICAgICBvdmVybGF5VG9nZ2xlKClcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuY29uc3QgdGFza0VkaXRvciA9ICgoKSA9PiB7XHJcblxyXG4gICAgbGV0IG9iamVjdCA9IG51bGw7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldE9iamVjdCA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuY2xvc2VzdChcIi5oZXJvLWNhcmRcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKVxyXG4gICAgICAgIHJldHVybiBvYmplY3QgPSBTdG9yZWRJdGVtcy5jYWxsQXJyYXkoKVtpbmRleF07XHJcbiAgICB9O1xyXG5cclxuICAgXHJcblxyXG4gICAgY29uc3QgZWRpdG9yTW9kYWxGaWxsID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB7dGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbn0gPSBvYmplY3Q7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGl0bGVcIikuZGVmYXVsdFZhbHVlID0gYCR7dGl0bGV9YFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWRhdGVcIikuZGVmYXVsdFZhbHVlID0gYCR7ZGF0ZX1gXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJpb3JpdHlcIikuZGVmYXVsdFZhbHVlID0gYCR7cHJpb3JpdHl9YFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWRlc2NyaXB0aW9uXCIpLmRlZmF1bHRWYWx1ZSA9IGAke2Rlc2NyaXB0aW9ufWBcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGVkaXRvck1vZGFsU3VibWl0ID0gKGUpID0+IHtcclxuICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGxldCB7aW5kZXh9ID0gb2JqZWN0XHJcbiAgICBcclxuICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRpdGxlXCIpLnZhbHVlLnRyaW0oKTsgXHJcbiAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWRhdGVcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcmlvcml0eVwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICBvYmplY3Quc2V0VGl0bGUodGl0bGVWYWx1ZSlcclxuICAgICAgICBvYmplY3Quc2V0RGF0ZShkYXRlVmFsdWUpXHJcbiAgICAgICAgb2JqZWN0LnNldFByaW9yaXR5KHByaW9yaXR5VmFsdWUpXHJcbiAgICAgICAgb2JqZWN0LnNldERlc2NyaXB0aW9uKGRlc2NyaXB0VmFsdWUpXHJcbiAgICAgICAgU3RvcmVkSXRlbXMuc2VuZFRvTG9jYWxTdG9yYWdlKClcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApLnJlbW92ZSgpIC8vIGVuc3VyZSB0byB3cmFwIGluIHF1b3Rlc1xyXG4gICAgICAgIGNyZWF0ZU5ld0hlcm8oU3RvcmVkSXRlbXMuY2FsbEFycmF5KClbaW5kZXhdKVxyXG4gICAgICAgIFN0b3JlZEl0ZW1zLmNhbGxBbGxFTCgpO1xyXG4gICAgICAgIHJldHVybiBvYmplY3QgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdG9yUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRhc2stZm9ybVwiKS5yZXNldCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtlZGl0b3JNb2RhbEZpbGwsIGVkaXRvck1vZGFsU3VibWl0LCBlZGl0b3JSZXNldCxnZXRPYmplY3R9XHJcblxyXG59KSgpOyBcclxuXHJcblxyXG5jb25zdCBlZGl0b3JNb2RhbFN1Ym1pdEVMID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdG9yRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10YXNrLWZvcm1cIik7XHJcbiAgICAgICAgZWRpdG9yRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2tFZGl0b3IuZWRpdG9yTW9kYWxTdWJtaXQoZSlcclxuICAgICAgICAgICAgdGFza0VkaXRvci5lZGl0b3JSZXNldCgpXHJcbiAgICAgICAgICAgIGVkaXRNb2RhbFRvZ2dsZURpc3BsYXkoKVxyXG4gICAgICAgIH0pXHJcblxyXG59O1xyXG5cclxuLyogQ2FsbGVkIHRvIGNyZWF0ZSBhbmQgcmUtY3JlYXRlIGFsbCBoZXJvIGVsZW1lbnRzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0hlcm8gKG9iamVjdCkge1xyXG4gICAgbGV0IHt0aXRsZSwgZGF0ZSxwcmlvcml0eSxjYXRhZ29yZXksZGVzY3JpcHRpb24sIHByb2plY3QsIGluZGV4fSA9IG9iamVjdDtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5uZXJDb250YWluZXJcIilcclxuICAgIFxyXG4gICAgY29uc3QgaGVyb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRGl2XCIpOyBcclxuICAgICAgICBoZXJvQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaGVyby1jYXJkXCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0NhcmQpO1xyXG4gICAgICAgICAgICBoZXJvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGAke2luZGV4fWApXHJcblxyXG5cclxuICAgIGNvbnN0IGhlcm9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBoZXJvQ2hlY2suY2xhc3NMaXN0LmFkZChcImhlcm8taWNvblwiKVxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbGZvckNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICAgICAgICAgICAgICBsYWJlbGZvckNoZWNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lucHV0LmNsYXNzTGlzdC5hZGQoXCJoZXJvLWNoZWNrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIGxhYmVsZm9yQ2hlY2suYXBwZW5kQ2hpbGQoY2hlY2tJbnB1dClcclxuICAgICAgICBoZXJvQ2hlY2suYXBwZW5kQ2hpbGQobGFiZWxmb3JDaGVjaylcclxuICAgICAgICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvQ2hlY2spO1xyXG5cclxuICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxyXG4gICAgICAgIGhlcm9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVyby10aXRsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgICAgIHRpdGxlVGV4dC5pbm5lclRleHQgPSBgJHt0aXRsZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlcm9UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvVGl0bGUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZXJvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBoZXJvRGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1kYXRlXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgIC8vIGNvbnN0IG9iamRhdGUgPSBmb3JtYXREYXRlKG9iamVjdCk7IFxyXG4gICAgICAgICAgICAgICAgZGF0ZVRleHQuaW5uZXJUZXh0ID0gYER1ZSBEYXRlOiAke2RhdGV9YDtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvRGF0ZS5hcHBlbmRDaGlsZChkYXRlVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0RhdGUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZXJvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGVyb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJoZXJvLXByaW9yaXR5XCIpO1xyXG4gICAgICAgIGhlcm9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcmlvcml0eX1gKVxyXG4gICAgICAgICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eVRleHQuaW5uZXJUZXh0ID0gYCR7cHJpb3JpdHl9YDtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvUHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvUHJpb3JpdHkpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9FZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBoZXJvRWRpdEljb24uY2xhc3NMaXN0LmFkZChcImhlcm8tZWRpdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpXHJcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IFwiZmEtc29saWQgZmEtZ2VhclwiOyBcclxuICAgICAgICAgICAgICAgICAgICBoZXJvRWRpdEljb24uYXBwZW5kQ2hpbGQoaWNvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0VkaXRJY29uKTtcclxuXHJcbiAgICBjb25zdCBoZXJvRGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGhlcm9EZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWVkaXRcIik7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpXHJcbiAgICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gXCJmYS1zb2xpZCBmYS10cmFzaFwiOyBcclxuICAgICAgICAgICAgICAgIGhlcm9EZWxldGVJY29uLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pXHJcbiAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0RlbGV0ZUljb24pO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZXJvRGVzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgICAgICBoZXJvRGVzY3JpcHQuY2xhc3NOYW1lID0gXCJoZXJvLWRlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRUZXh0LmlubmVyVGV4dD0gYCR7ZGVzY3JpcHRpb259YDtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvRGVzY3JpcHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0Rlc2NyaXB0KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3QgaGVyb0NhdGFnb3JleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVyb0NhdGFnb3JleS5jbGFzc05hbWUgPSBcImhlcm8tY2F0YWdvcmV5XCI7XHJcbiAgICAgICAgICAgIGhlcm9DYXRhZ29yZXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Y2F0YWdvcmV5fWApXHJcbiAgICAgICAgICAgY29uc3QgY2F0YWdvcmV5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgICAgICBjYXRhZ29yZXlUZXh0LmlubmVyVGV4dCA9IGAke2NhdGFnb3JleX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlcm9DYXRhZ29yZXkuYXBwZW5kQ2hpbGQoY2F0YWdvcmV5VGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0NhdGFnb3JleSk7XHJcblxyXG4gICAgY29uc3QgaGVyb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVyb1Byb2plY3QuY2xhc3NOYW1lID0gXCJoZXJvLXByb2plY3RcIjtcclxuICAgICAgICBoZXJvUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcm9qZWN0fWApXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSBgJHtwcm9qZWN0fWA7XHJcbiAgICAgICAgICAgICAgICBoZXJvUHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dClcclxuICAgICAgICAgICAgICAgICAgICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvUHJvamVjdCk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qIENyZWF0ZXMgYSBuYW1lZCBwcm9qZWN0IGJ1dHRvbiBhbmQgYXBwZW5kcyBpdCB0byBhc2lkZS1sZWZ0ICovXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RDYXJkID0gKG9iamVjdCkgPT4ge1xyXG4gY29uc3Qge3RpdGxlfSA9IG9iamVjdDtcclxuXHJcbiBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIilcclxuXHJcbiBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxyXG5cclxuIC8vY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVyVGV4dCA9IGAke3RpdGxlfWBcclxuICAgIFxyXG4gICAgLy9wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuICAgIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcclxufTtcclxuXHJcbi8vcmVtb3ZlcyBjYXJkIGZyb20gRE9NLCB3aGVuIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZFxyXG5mdW5jdGlvbiByZW1vdmVDYXJkIChlKSB7XHJcbiAgICBlLnRhcmdldC5jbG9zZXN0KFwiLmhlcm8tY2FyZFwiKS5yZW1vdmUoKTtcclxufTtcclxuXHJcblxyXG4vL2N1cnJlbnRseSB1bnVzZWRcclxuZnVuY3Rpb24gY2xlYXJET00gKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbm5lckNvbnRhaW5lclwiKVxyXG4gICAgICAgIHdoaWxlKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKVxyXG4gICAgfVxyXG59O1xyXG5cclxuLyogRGlzcGxheXMgYWxsIHRhc2tzIHJlZ2FyZGxlc3Mgb2YgcHJvamVjdCBhc3NpZ25lZCovXHJcbmNvbnN0IGRpc3BsYXlBbGxUYXNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlcm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvLWNhcmRcIilcclxuICAgIGhlcm9zLmZvckVhY2goaGVybyA9PiBoZXJvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIilcclxuICAgIHJldHVyblxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5QWxsVGFza3NFTCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGx0YXNrc1wiKVxyXG4gICAgICAgIGFsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBbGxUYXNrcygpXHJcbiAgICAgICAgfSApXHJcbn1cclxuY29uc3QgZWRpdE1vZGFsVG9nZ2xlRGlzcGxheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVkaXRvck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0b3ItbW9kYWxcIilcclxuICAgIHJldHVybiBlZGl0b3JNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpXHJcbn07XHJcblxyXG5cclxuLy9leHBvcnRlZCB0byBpbmRleC5qc1xyXG5mdW5jdGlvbiBET01HcmFicyAoZSkge1xyXG4gICAgZGlzcGxheUFzaWRlKCk7XHJcbiAgICB0YXNrQnRuRUwoKTtcclxuICAgIG92ZXJsYXlSZW1vdmVNb2RhbHMoKTtcclxuICAgIG1vZGFsU3VibWl0Q29sbGFwc2UoKTtcclxuICAgIHByb2plY3RNb2RhbEVsKClcclxuICAgIHByb2plY3RTdWJtaXRFTCgpXHJcbiAgICBkaXNwbGF5QWxsVGFza3NFTCgpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7RE9NR3JhYnMsIFxyXG4gICAgICAgIGNyZWF0ZU5ld0hlcm8sIFxyXG4gICAgICAgIFRhc2tCdG5Ub2dnbGUsIFxyXG4gICAgICAgIG92ZXJsYXlUb2dnbGUsIFxyXG4gICAgICAgIGNsZWFyRE9NLCBcclxuICAgICAgICByZW1vdmVDYXJkLCBcclxuICAgICAgICBjcmVhdGVQcm9qZWN0Q2FyZCxcclxuICAgICAgICBwcm9qZWN0VG9nZ2xlLFxyXG4gICAgICAgIGVkaXRvck1vZGFsU3VibWl0RUwsXHJcbiAgICAgICAgdGFza0VkaXRvcixcclxuICAgICAgICBlZGl0TW9kYWxUb2dnbGVEaXNwbGF5XHJcbn07IiwiaW1wb3J0IHtTdG9yZWRJdGVtc30gZnJvbSBcIi4vc3RvcmFnZVwiXHJcbmltcG9ydCB7cmVtb3ZlQ2FyZCwgIHRhc2tFZGl0b3IsIGVkaXRNb2RhbFRvZ2dsZURpc3BsYXl9IGZyb20gXCIuL2RvbVwiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIgKGUpIHtcclxuICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYS10cmFzaFwiKTtcclxuICAgICAgZGVsZXRlQnRucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgcmVtb3ZlQ2FyZChlKVxyXG4gICAgICAgICAgU3RvcmVkSXRlbXMuZGVsZXRlQ2FyZChlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbn07XHJcblxyXG5mdW5jdGlvbiBlZGl0b3JNb2RhbEVMIChlKSB7XHJcbiAgY29uc3QgZWRpdG9ySWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhLWdlYXJcIilcclxuICAgICAgZWRpdG9ySWNvbnMuZm9yRWFjaChpY29uID0+IHtcclxuICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRhc2tFZGl0b3IuZWRpdG9yTW9kYWxGaWxsKHRhc2tFZGl0b3IuZ2V0T2JqZWN0KGUpKVxyXG4gICAgICAgICAgICAgIGVkaXRNb2RhbFRvZ2dsZURpc3BsYXkoKVxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbn07XHJcblxyXG5jb25zdCBTdG9yYWdlRWwgPSAoKSA9PiB7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGBzdG9yYWdlYCwgKCkgPT4ge1xyXG4gICAgICAgIFN0b3JlZEl0ZW1zLnNlbmRUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfSlcclxufTtcclxuXHJcblxyXG5jb25zdCBFbERvbSA9KCkgPT4ge1xyXG4gICAgZGVsZXRlQnRuRXZlbnRMaXN0ZW5lcigpXHJcbiAgICBTdG9yYWdlRWwoKTtcclxuICAgIGVkaXRvck1vZGFsRUwoKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtFbERvbSwgZGVsZXRlQnRuRXZlbnRMaXN0ZW5lciwgZWRpdG9yTW9kYWxFTH0iLCIvL0ltcG9ydHNcclxuaW1wb3J0IHtUYXNrQnRuVG9nZ2xlLCBvdmVybGF5VG9nZ2xlIH0gZnJvbSBcIi4vZG9tXCI7IC8vQ2FsbGVkIGR1cmluZyB0aGUgY29sbGVjdGZvcm1EYXRhXHJcbmltcG9ydCB7U3RvcmVkSXRlbXN9IGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5cclxuLy9mYWN0b3J5IEZ1bmN0aW9uIGZvciBmb3JtLnZhbHVlIHN0cnVjdHVyZVxyXG5mdW5jdGlvbiBUYXNrb2JqZWN0ICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGFnb3JleSwgZGVzY3JpcHRpb24sIHByb2plY3QsaW5kZXgpIHtcclxuICByZXR1cm4geyAgXHJcbiAgICB0aXRsZSxcclxuICAgIGRhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIGNhdGFnb3JleSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJvamVjdCxcclxuICAgIGluZGV4LFxyXG4gIH1cclxufTtcclxuXHJcbi8qIFNldHRlcnMgKi9cclxuY29uc3QgdGl0bGVTZXR0ZXIgPSAgKHN0YXRlKSA9PiAoe1xyXG4gIHNldFRpdGxlOiAoc3RyaW5nKSA9PiBzdGF0ZS50aXRsZSA9IHN0cmluZ1xyXG59KVxyXG5cclxuY29uc3QgZGF0ZVNldHRlciA9IChzdGF0ZSkgPT4gKHtcclxuICBzZXREYXRlIDogKHN0cmluZykgPT4gc3RhdGUuZGF0ZSA9IHN0cmluZ1xyXG59KTtcclxuXHJcbmNvbnN0IHByaW9yaXR5U2V0dGVyID0gKHN0YXRlKSA9PiAoe1xyXG4gIHNldFByaW9yaXR5OiAoc3RyaW5nKSA9PiBzdGF0ZS5wcmlvcml0eSA9IHN0cmluZ1xyXG59KTtcclxuXHJcbmNvbnN0IGNhdGFnb3JleVNldHRlciA9IChzdGF0ZSkgPT4gKHtcclxuICBzZXRDYXRhZ29yZXk6IChzdHJpbmcpID0+IHN0YXRlLmNhdGFnb3JleSA9IHN0cmluZ1xyXG59KTtcclxuXHJcbmNvbnN0IGRlc2NyaXB0aW9uU2V0dGVyID0gKHN0YXRlKSA9PiAoe1xyXG4gIHNldERlc2NyaXB0aW9uOiAoc3RyaW5nKSA9PiBzdGF0ZS5kZXNjcmlwdGlvbiA9IHN0cmluZ1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEFzc2lnbk1ldGhvZHMgKG9iamVjdCkge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKG9iamVjdCwgdGl0bGVTZXR0ZXIob2JqZWN0KSwgXHJcbiAgICAgICAgZGF0ZVNldHRlcihvYmplY3QpLCBwcmlvcml0eVNldHRlcihvYmplY3QpLFxyXG4gICAgICAgIGNhdGFnb3JleVNldHRlcihvYmplY3QpLCBkZXNjcmlwdGlvblNldHRlcihvYmplY3QpIClcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBDb2xsZWN0cyBkYXRhIGZyb20gZm9ybSBpbnB1dHMsIHJldHVybnMgbmV3IG9iamVjdC4gKi9cclxuZnVuY3Rpb24gY29sbGVjdEZvcm1EYXRhIChlKSB7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuIFxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIikudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICBjb25zdCBjYXRhZ29yZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stY2F0YWdvcmV5XCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3NpZ25lZC1wcm9qZWN0XCIpLnZhbHVlXHJcbiAgICBsZXQgaW5kZXggPSBTdG9yZWRJdGVtcy5jYWxsQXJyYXkoKS5sZW5ndGhcclxuXHJcbiAgICBsZXQgbmV3VGFzayA9IFRhc2tvYmplY3QodGl0bGUsIGRhdGUsIHByaW9yaXR5LGNhdGFnb3JleSxkZXNjcmlwdGlvbiwgcHJvamVjdCwgaW5kZXgpXHJcbiAgICBBc3NpZ25NZXRob2RzKG5ld1Rhc2spXHJcblxyXG4gICAgcmV0dXJuIG5ld1Rhc2tcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhckZvcm0gKCkgeyBcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIilcclxuICBmb3JtLnJlc2V0KClcclxufTtcclxuXHJcblxyXG4vKiBDdXJyZW50bHkgZGlzcGxheXMgdGhlIGNvbGxlY3RlZCBpbnB1dHMgb24gdGhlIERPTSBjdXJyZW50bHkgdXNlZCBpbiBpbmRleC5qcyAqL1xyXG5mdW5jdGlvbiBjb2xsZWN0Rm9ybSAoKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xyXG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBTdG9yZWRJdGVtcy5jcmVhdGVPbmVDYXJkKGNvbGxlY3RGb3JtRGF0YShlKSlcclxuICAgICAgICBjbGVhckZvcm0oKVxyXG4gICAgICAgIFRhc2tCdG5Ub2dnbGUoKTtcclxuICAgICAgICBvdmVybGF5VG9nZ2xlKClcclxuICAgICAgICByZXR1cm4gY2xlYXJGb3JtKCk7ICBcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Y29sbGVjdEZvcm0sIEFzc2lnbk1ldGhvZHN9XHJcbiIsIi8vSW1wb3J0c1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL2RvbVwiXHJcbmltcG9ydCB7IHByb2plY3RUb2dnbGUgfSBmcm9tIFwiLi9kb21cIjtcclxuXHJcblxyXG4vLyBwcm9qZWN0U3RvcmFnZSBPYmpcclxuZXhwb3J0IGNvbnN0IHByb2plY3RTdG9yYWdlID0gKCgpID0+IHtcclxuXHJcbiAgICBsZXQgcHJvamVjdEFycmF5ID0gW107XHJcblxyXG4gICAgY29uc3QgcHVzaFRvUHJvamVjdEFycmF5ID0gKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKG9iamVjdClcclxuICAgICAgICBzZW5kdG9Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGxBcnJheSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdEFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZHRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICAgIGlmIChwcm9qZWN0cyA9PT0gbnVsbCl7cmV0dXJuIGNvbnNvbGUubG9nKFwibm8gcHJvamVjdHNcIil9XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gU2VsZWN0ZWRQcm9qZWN0RWwoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VuZHRvTG9jYWxTdG9yYWdlLCByZXRyaWV2ZVByb2plY3RzLCBcclxuICAgICAgICBjcmVhdGVQcm9qZWN0cywgcHVzaFRvUHJvamVjdEFycmF5LCBjYWxsQXJyYXlcclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG4vKmZ1bmN0aW9uYWwgY29kZXMgKi9cclxuY29uc3QgZ3JhYlByb2plY3RGb3JtID0gKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWUudHJpbSgpO1xyXG4gICAgcHJvamVjdFN0b3JhZ2UucHVzaFRvUHJvamVjdEFycmF5KHt0aXRsZTogcHJvamVjdE5hbWV9KVxyXG4gICAgcmV0dXJuIHt0aXRsZTogcHJvamVjdE5hbWV9XHJcbn0pO1xyXG5cclxuLyogU2V0cyBub24td2FudGVkIGNhcmRzIHRvIGRpc3BsYXk6IG5vbmUgKi9cclxuY29uc3Qgc29ydFRhc2tzQnlQcm9qZWN0ID0gKGUpID0+IHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSBlLnRhcmdldC5pbm5lclRleHQ7XHJcbmNvbnN0IGhlcm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvLWNhcmRcIilcclxuICAgIGhlcm9zLmZvckVhY2goaGVybyA9PiB7XHJcbiAgICAgICAgaWYgKGhlcm8ucXVlcnlTZWxlY3RvcihcIi5oZXJvLXByb2plY3RcIikuaW5uZXJUZXh0ICE9IHNlbGVjdGlvbil7XHJcbiAgICAgICAgICAgIGhlcm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgfSBlbHNlIGhlcm8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXHJcbiAgICB9KVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IHByb2plY3RGb3JtUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpXHJcbiAgICByZXR1cm4gcHJvamVjdEZvcm0ucmVzZXQoKVxyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCBTZWxlY3RlZFByb2plY3RFbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpXHJcbiAgICAgICAgcHJvamVjdEJ0bnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzb3J0VGFza3NCeVByb2plY3QoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gfTtcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0TW9kYWxFbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgICAgICBwcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdENhcmQoZ3JhYlByb2plY3RGb3JtKGUpKVxyXG4gICAgICAgICAgICBwcm9qZWN0VG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIHByb2plY3RGb3JtUmVzZXQoKVxyXG4gICAgICAgICAgICBTZWxlY3RlZFByb2plY3RFbCgpXHJcblxyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHtwcm9qZWN0TW9kYWxFbCwgU2VsZWN0ZWRQcm9qZWN0RWx9XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlTmV3SGVybywgZWRpdG9yTW9kYWxTdWJtaXRFTCx9IGZyb20gXCIuL2RvbS5qc1wiXHJcbmltcG9ydCB7IGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIsIGVkaXRvck1vZGFsRUx9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJcIjtcclxuaW1wb3J0IHsgQXNzaWduTWV0aG9kcyB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcclxuLy8gUmVtb2RlbCB0byBlbnN1cmUgYW4gYXJyYXkgZm8gb2JqZWN0cyBpcyBwcmVzZW50IGluc2lkZSB0aGUgbG9jYWwgc3RvcmFnZS4gXHJcblxyXG5leHBvcnQgY29uc3QgU3RvcmVkSXRlbXMgPSAoKCkgPT4ge1xyXG4gIFxyXG4gIGxldCBvYmplY3RBcnJheSA9IFtdO1xyXG5cclxuICAvL3VwZGF0ZXMgYXJyYXkgYXQgd2luZG93IGxvYWQgd2l0aCByZXRyaWV2ZWluZyBvZiBvYmplY3RzIGZyb20gTFMgXHJcbiAgY29uc3QgcmV0cmlldmVPYmplY3RzID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKVxyXG4gICAgaWYodGFza3MgPT09IG51bGwpe3JldHVybn1cclxuICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICB0YXNrLmluZGV4ID0gb2JqZWN0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgb2JqZWN0QXJyYXkucHVzaCh0YXNrKVxyXG4gICAgICB9KVxyXG4gICAgcmV0dXJuIGFycmF5QnlEYXRlKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGFycmF5QnlEYXRlID0gKCkgPT4ge1xyXG4gICAgb2JqZWN0QXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYiApIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZSAoYi5kYXRlKVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuXHJcbiAgICAvL2NhbGxlZCBzZWNvbmQgdG8gY3JlYXRlIGNhcmRzIGZyb20gTFMgXHJcbiAgY29uc3QgY3JlYXRlQ2FyZHNGcm9tTFMgPSAoKSA9PiB7XHJcbiAgICAgIG9iamVjdEFycmF5LmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBjcmVhdGVOZXdIZXJvKG9iamVjdCk7XHJcbiAgICAgICAgQXNzaWduTWV0aG9kcyhvYmplY3QpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8vY2FsbGVkIGR1cmluZyB0aGUgY29sbGVjdEZvcm0gZnVuY3Rpb24gaW4gZmFjdG9yeS5qc1xyXG4gIGNvbnN0IHNlbmRUb0FycmF5ID0gKG9iaikgPT4gb2JqZWN0QXJyYXkucHVzaChvYmopXHJcblxyXG5cclxuICAgIC8vY3VycmVudGx5IHN0b3JlcyB0aGUgYXJyYXkgaW4gTFMsIGNhbGxlZCBkdXJpbmcgdGhlIGV2ZW50IGxpc3RlbmVyIGluIEFwcFxyXG4gIGNvbnN0IHNlbmRUb0xvY2FsU3RvcmFnZT0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkob2JqZWN0QXJyYXkpKTtcclxuICB9XHJcblxyXG5cclxuICAvL2FsbG93cyBhY2Nlc3MgZm9yIG1ldGhvZHMuIFxyXG4gIGNvbnN0IGNhbGxBcnJheSA9ICgpID0+IG9iamVjdEFycmF5O1xyXG4gIFxyXG5cclxuICBjb25zdCBkZWxldGVDYXJkID0gKGUpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuaGVyby1jYXJkXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIilcclxuICAgIG9iamVjdEFycmF5LnNwbGljZShpbmRleCwxKVxyXG4gICAgc2VuZFRvTG9jYWxTdG9yYWdlKClcclxuICB9XHJcblxyXG4gICBmdW5jdGlvbiBjYWxsQWxsRUwgKCkge1xyXG4gICAgZGVsZXRlQnRuRXZlbnRMaXN0ZW5lcigpXHJcbiAgICBlZGl0b3JNb2RhbEVMKClcclxuICB9XHJcblxyXG5cclxuICAvL2NhbGxlZCBkdXJpbmcgdGhlIGZvcm0gc3VibWl0IHRvIGNyZWF0ZSBhIHNpbmdsZSBoZXJvLWNhcmRcclxuICBjb25zdCBjcmVhdGVPbmVDYXJkID0gKG9iamVjdCkgPT4ge1xyXG4gICAgY3JlYXRlTmV3SGVybyhvYmplY3QpXHJcbiAgICBzZW5kVG9BcnJheShvYmplY3QpXHJcbiAgICBzZW5kVG9Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgY2FsbEFsbEVMKClcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJldHJpZXZlT2JqZWN0cywgY3JlYXRlQ2FyZHNGcm9tTFMsIHNlbmRUb0FycmF5LCBjYWxsQXJyYXksXHJcbiAgICBjcmVhdGVPbmVDYXJkLCBkZWxldGVDYXJkLCBzZW5kVG9Mb2NhbFN0b3JhZ2UsIGNhbGxBbGxFTFxyXG4gIH1cclxufSkoKTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBET01HcmFicywgZWRpdG9yTW9kYWxTdWJtaXRFTCx9IGZyb20gXCIuL2FwcC9kb21cIjtcclxuaW1wb3J0IHsgY29sbGVjdEZvcm19IGZyb20gXCIuL2FwcC9mYWN0b3J5XCI7XHJcbmltcG9ydCB7U3RvcmVkSXRlbXN9IGZyb20gXCIuL2FwcC9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IEVsRG9tIH0gZnJvbSBcIi4vYXBwL2V2ZW50TGlzdGVuZXJcIjtcclxuaW1wb3J0IHsgcHJvamVjdE1vZGFsRWwsIFNlbGVjdGVkUHJvamVjdEVsLCBwcm9qZWN0U3RvcmFnZSB9IGZyb20gXCIuL2FwcC9wcm9qZWN0c1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBET00gPSBmdW5jdGlvbiBkb21FdmVudHMgKGUpIHtcclxuICAgIERPTUdyYWJzKGUpO1xyXG4gICAgcHJvamVjdFN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpXHJcbiAgICBwcm9qZWN0U3RvcmFnZS5jcmVhdGVQcm9qZWN0cygpXHJcbiAgICBTdG9yZWRJdGVtcy5yZXRyaWV2ZU9iamVjdHMoKVxyXG4gICAgU3RvcmVkSXRlbXMuY3JlYXRlQ2FyZHNGcm9tTFMoKTtcclxuICAgIFN0b3JlZEl0ZW1zLmNhbGxBcnJheSgpO1xyXG4gICAgY29sbGVjdEZvcm0oZSk7XHJcbiAgICBFbERvbSgpO1xyXG4gICAgcHJvamVjdE1vZGFsRWwoZSlcclxuICAgIFNlbGVjdGVkUHJvamVjdEVsKGUpXHJcbiAgICBlZGl0b3JNb2RhbFN1Ym1pdEVMKGUpXHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gRE9NKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9