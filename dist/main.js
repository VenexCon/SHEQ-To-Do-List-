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
___CSS_LOADER_EXPORT___.push([module.id, "/* Imports */\n#high {\n  background-color: Red;\n  color: white;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n#medium {\n  background-color: orangered;\n  color: white;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n#low {\n  background-color: green;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n/* Nav */\n.nav {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: rgba(160, 154, 154, 0.986);\n  align-items: center;\n  height: 4rem;\n}\n.nav .hamburger-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 2.5rem;\n  height: 4rem;\n  padding: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  background-color: teal;\n}\n.nav .hamburger-menu span {\n  display: block;\n  border: 2px solid black;\n  width: 100%;\n  transition: 0.4s;\n}\n.nav .hamburger-menu:hover {\n  cursor: pointer;\n}\n.nav .hamburger-menu:hover span {\n  border-color: white;\n}\n.nav .hamburger-menu:active {\n  border-color: white;\n}\n.nav .title-wrapper {\n  margin: auto;\n  justify-self: center;\n  align-self: center;\n}\n.nav .title-wrapper .title {\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n}\n.nav .company-logo {\n  width: 4rem;\n  height: 4rem;\n}\n.nav .company-logo img {\n  color: black;\n}\n\n/* Aside enters upon hamburger click */\n.aside-left {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  min-width: 15vw;\n  width: 25vw;\n  height: 90vh;\n  align-items: center;\n  left: -200%;\n  transition: 0.5s;\n  background-color: white;\n  z-index: 100;\n}\n.aside-left.is-active {\n  display: flex;\n  position: static;\n  left: 0;\n}\n.aside-left .aside-links {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 1rem;\n  align-items: center;\n}\n.aside-left .aside-links button {\n  cursor: pointer;\n  width: 80%;\n  border: none;\n  min-height: 2rem;\n  font-size: large;\n  height: fit-content;\n  border-radius: 3px;\n  font-weight: bolder;\n  transition: 0.2s;\n}\n.aside-left .aside-links button:hover {\n  background-color: teal;\n  color: white;\n}\n.aside-left .aside-links button.add-project:before {\n  font: var(--fa-font-solid);\n  content: \"\\f0fe\";\n  margin-right: 1rem;\n}\n.aside-left .aside-links hr {\n  width: 80%;\n  border: 1px solid black;\n}\n.aside-left .aside-links .projects-list {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  width: 80%;\n  align-items: center;\n  gap: 1rem;\n  z-index: 1001;\n}\n.aside-left .aside-links .projects-list .project {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  min-height: 2rem;\n  font-size: large;\n  height: fit-content;\n  border-radius: 3px;\n  font-weight: bolder;\n  transition: 0.2s;\n  background-color: #e9e9ed;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n.aside-left .aside-links .projects-list .project:hover {\n  background-color: teal;\n  color: white;\n}\n\n.project-modal-container {\n  display: none;\n  border-radius: 5px;\n  width: 80%;\n  height: fit-content;\n}\n.project-modal-container.is-active {\n  display: flex;\n}\n.project-modal-container .project-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #e9e9ed;\n  width: 100%;\n}\n.project-modal-container .project-form label {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.project-modal-container .project-form label input {\n  width: 100%;\n  height: 2rem;\n}\n.project-modal-container .project-form button {\n  align-self: flex-end;\n  height: 1.5rem;\n  width: 100%;\n}\n\n/* MQ 600PX */\n@media only screen and (max-width: 600px) {\n  .aside-left {\n    width: 100vw;\n  }\n  .aside-left.is-active {\n    position: fixed;\n  }\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif;\n}\n* .icon::before {\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  height: 200vh;\n}\n\n.app {\n  position: relative;\n  overflow: hidden;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  transition: 1s;\n}\n\n.cardcontainer {\n  justify-self: center;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n}\n.cardcontainer .innerContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 80%;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  padding: 1rem;\n}\n.cardcontainer .hero-card {\n  border: 2px solid grey;\n  border-radius: 5px;\n  min-width: 70%;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  transition: 0.4s;\n  z-index: 1;\n}\n.cardcontainer .hero-card:hover {\n  box-shadow: 2px 4px grey;\n  transform: scale(1.025);\n}\n.cardcontainer .hero-card .hero-check {\n  height: 1.25rem;\n  width: 1.25rem;\n  accent-color: teal;\n}\n.cardcontainer .hero-card .hero-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  flex-grow: 0;\n}\n.cardcontainer .hero-card .hero-title {\n  max-width: 50%;\n  flex-grow: 1;\n  text-align: left;\n}\n.cardcontainer .hero-card .hero-edit {\n  font-size: 1.25rem;\n  transition: 0.4s;\n}\n.cardcontainer .hero-card .hero-edit:hover {\n  color: teal;\n  cursor: pointer;\n  transform: rotate(180deg);\n}\n.cardcontainer .hero-card .hero-description {\n  min-width: 60%;\n  width: 80%;\n  min-height: 2rem;\n  height: fit-content;\n}\n.cardcontainer .hero-card .hero-catagorey {\n  min-width: fit-content;\n  width: 10%;\n  border: 2px solid black;\n  height: fit-content;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 3px;\n  vertical-align: middle;\n  padding: 0.25rem;\n}\n\n/*600px MQ */\n@media only screen and (max-width: 600px) {\n  .hero-card {\n    flex-direction: column;\n  }\n  .modal-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n  }\n  .editor-modal {\n    min-width: 80vw;\n  }\n}\n/* Fixed Positioned Element */\n.addTaskButton {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-right: 5rem;\n  background-color: teal;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.4s;\n  z-index: 1000;\n}\n.addTaskButton:hover {\n  cursor: pointer;\n  background-color: rgb(216, 147, 19);\n}\n.addTaskButton button {\n  background-color: transparent;\n  text-decoration: none;\n  border: none;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: 0.4s;\n}\n.addTaskButton button:hover {\n  color: white;\n  transform: rotate(180deg);\n}\n\n/* Fixed position Modal  */\n.modal-container {\n  width: 60vw;\n  min-height: 10rem;\n  height: fit-content;\n  border: 2px solid grey;\n  border-radius: 5px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  transform: scale(0);\n  margin-bottom: 8rem;\n  margin-left: 15%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: 0.4s;\n  background-color: white;\n  z-index: 1000;\n  padding: 0.5em;\n}\n.modal-container.is-active {\n  transform: scale(1);\n}\n.modal-container h3 {\n  margin-left: 3rem;\n  font-weight: 600;\n}\n.modal-container hr {\n  width: 90%;\n  margin: auto;\n}\n.modal-container .modal-form-container {\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n}\n.modal-container .modal-form-container #task-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: space-between;\n}\n.modal-container .modal-form-container #task-form label {\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n}\n.modal-container .modal-form-container #task-form #TDLabel {\n  width: 80%;\n}\n.modal-container .modal-form-container #task-form #task-description {\n  width: 100%;\n  height: 3rem;\n  margin-bottom: 1rem;\n  resize: none;\n}\n.modal-container .modal-form-container #task-form button {\n  align-self: center;\n  justify-content: center;\n  padding: 0.15rem;\n}\n\n/* -------------- */\n/* Editor Modal */\n/* ------------ */\n.editor-modal {\n  width: 15vw;\n  min-height: 10rem;\n  height: fit-content;\n  border: 2px solid grey;\n  border-radius: 5px;\n  position: fixed;\n  scale: 0;\n  right: 0;\n  transition: 0.4s;\n  background-color: white;\n  z-index: 1000;\n  padding: 0.5em;\n}\n.editor-modal.is-active {\n  scale: 1;\n}\n.editor-modal form {\n  display: flex;\n  gap: 0.5rem;\n  flex-direction: column;\n}\n.editor-modal form label {\n  display: flex;\n  flex-direction: column;\n}\n\n/*OVERLAY */\n.overlay {\n  position: absolute;\n  display: none;\n}\n.overlay.is-active {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  z-index: 999;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss","webpack://./src/style/abstractions/variables.scss","webpack://./src/style/abstractions/nav-bar.scss"],"names":[],"mappings":"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","sourcesContent":["$env: undefined;\n/* Imports */\n\n@import \"./abstractions/variables.scss\";\n@import \"./abstractions/nav-bar.scss\";\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: $baseFont;\n\n  .icon::before {\n    display: inline-block;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n  }\n}\n\nbody {\n  height: 200vh;\n}\n\n.app {\n  position: relative;\n  overflow: hidden;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  transition: 1s;\n}\n\n.cardcontainer {\n  //border: 2px solid red;\n  justify-self: center;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n\n  .innerContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    //border: 2px dashed blue;\n    height: 80%;\n    width: 80%;\n    margin: auto;\n    align-items: center;\n    padding: 1rem;\n  }\n\n  .hero-card {\n    border: 2px solid $heroBorder;\n    border-radius: 5px;\n    min-width: 70%;\n    min-height: 4rem;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem;\n    transition: 0.4s;\n    z-index: 1;\n\n    &:hover {\n      box-shadow: 2px 4px grey;\n      transform: scale(1.025);\n    }\n    .hero-check {\n      height: 1.25rem;\n      width: 1.25rem;\n      accent-color: $teal;\n    }\n\n    .hero-icon {\n      font-size: 1.5rem;\n      width: 1.5rem;\n      flex-grow: 0;\n    }\n\n    .hero-title {\n      max-width: 50%;\n      flex-grow: 1;\n      text-align: left;\n    }\n    .hero-edit {\n      font-size: 1.25rem;\n      transition: 0.4s;\n\n      &:hover {\n        color: $teal;\n        cursor: pointer;\n        transform: rotate(180deg);\n      }\n    }\n    .hero-description {\n      min-width: 60%;\n      width: 80%;\n      min-height: 2rem;\n      height: fit-content;\n    }\n\n    .hero-catagorey {\n      min-width: fit-content;\n      width: 10%;\n      border: 2px solid black;\n      height: fit-content;\n      text-align: center;\n      font-weight: bold;\n      border-radius: 3px;\n      vertical-align: middle;\n      padding: 0.25rem;\n    }\n  }\n}\n\n/*600px MQ */\n@media only screen and (max-width: 600px) {\n  .hero-card {\n    flex-direction: column;\n  }\n\n  .modal-form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n  }\n\n  .editor-modal {\n    min-width: 80vw;\n  }\n}\n\n/* Fixed Positioned Element */\n.addTaskButton {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-right: 5rem;\n  background-color: $teal;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.4s;\n  z-index: 1000;\n\n  &:hover {\n    cursor: pointer;\n    background-color: $orange;\n  }\n\n  button {\n    background-color: transparent;\n    text-decoration: none;\n    border: none;\n    font-size: 2rem;\n    cursor: pointer;\n    transition: 0.4s;\n\n    &:hover {\n      color: $white;\n      transform: rotate(180deg);\n    }\n  }\n}\n\n/* Fixed position Modal  */\n.modal-container {\n  width: 60vw;\n  min-height: 10rem;\n  height: fit-content;\n  border: 2px solid $grey;\n  border-radius: 5px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  transform: scale(0);\n  margin-bottom: 8rem;\n  margin-left: 15%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: 0.4s;\n  background-color: $white;\n  z-index: 1000;\n  padding: 0.5em;\n\n  &.is-active {\n    transform: scale(1);\n  }\n\n  h3 {\n    margin-left: 3rem;\n    font-weight: 600;\n  }\n\n  hr {\n    width: 90%;\n    margin: auto;\n  }\n\n  .modal-form-container {\n    //border: 2px solid black;\n    width: 100%;\n    height: fit-content;\n    display: flex;\n    flex-direction: row;\n\n    #task-form {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      gap: 2rem;\n      justify-content: space-between;\n\n      label {\n        display: flex;\n        flex-direction: column;\n        //border: 2px dashed black;\n        height: fit-content;\n      }\n\n      #TDLabel {\n        width: 80%;\n      }\n\n      #task-description {\n        width: 100%;\n        height: 3rem;\n        margin-bottom: 1rem;\n        resize: none;\n      }\n\n      button {\n        align-self: center;\n        justify-content: center;\n        padding: 0.15rem;\n      }\n    }\n  }\n}\n\n/* -------------- */\n/* Editor Modal */\n/* ------------ */\n\n.editor-modal {\n  width: 15vw;\n  min-height: 10rem;\n  height: fit-content;\n  border: 2px solid $grey;\n  border-radius: 5px;\n  position: fixed;\n  scale: 0;\n  right: 0;\n  transition: 0.4s;\n  background-color: $white;\n  z-index: 1000;\n  padding: 0.5em;\n\n  &.is-active {\n    scale: (1);\n  }\n\n  form {\n    display: flex;\n    gap: 0.5rem;\n    flex-direction: column;\n\n    label {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n}\n\n/*OVERLAY */\n.overlay {\n  position: absolute;\n  display: none;\n\n  &.is-active {\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    display: block;\n    z-index: 999; // 1 less than the modal\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=B612+Mono&family=Lato:wght@300&display=swap\");\n\n$baseFont: \"Lato\", sans-serif;\n$teal: teal;\n$spanHover: white;\n$navBGcolor: rgba(160, 154, 154, 0.986);\n$white: white;\n$grey: grey;\n$heroBorder: grey;\n$orange: rgb(216, 147, 19);\n$buttonGrey: #e9e9ed;\n\n// Hero-catagorey styles\n#high {\n  background-color: Red;\n  color: $white;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n#medium {\n  background-color: orangered;\n  color: $white;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n#low {\n  background-color: green;\n  border-radius: 5px;\n  font-weight: bold;\n}\n","/* Nav */\n.nav {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: $navBGcolor;\n  align-items: center;\n  height: 4rem;\n\n  .hamburger-menu {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    width: 2.5rem;\n    height: 4rem;\n    padding: 0.5rem;\n    align-items: center;\n    justify-content: center;\n    background-color: $teal;\n\n    span {\n      display: block;\n      border: 2px solid black;\n      width: 100%;\n      transition: 0.4s;\n    }\n\n    &:hover {\n      cursor: pointer;\n\n      span {\n        border-color: $spanHover;\n      }\n    }\n\n    &:active {\n      border-color: $white;\n    }\n  }\n\n  .title-wrapper {\n    margin: auto;\n    justify-self: center;\n    align-self: center;\n\n    .title {\n      color: white;\n      font-size: 2rem;\n      font-weight: bolder;\n    }\n  }\n\n  .company-logo {\n    width: 4rem;\n    height: 4rem;\n\n    img {\n      color: black;\n    }\n  }\n}\n/* Aside enters upon hamburger click */\n\n.aside-left {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  min-width: 15vw;\n  width: 25vw;\n  height: 90vh;\n  align-items: center;\n  left: -200%;\n  transition: 0.5s;\n  background-color: $white;\n  z-index: 100;\n\n  &.is-active {\n    display: flex;\n    position: static;\n    left: 0;\n  }\n\n  .aside-links {\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 1rem;\n    align-items: center;\n\n    button {\n      cursor: pointer;\n      width: 80%;\n      border: none;\n      min-height: 2rem;\n      font-size: large;\n      height: fit-content;\n      border-radius: 3px;\n      font-weight: bolder;\n      transition: 0.2s;\n\n      &:hover {\n        background-color: $teal;\n        color: $white;\n      }\n\n      &.add-project:before {\n        font: var(--fa-font-solid);\n        content: \"\\f0fe\";\n        margin-right: 1rem;\n      }\n    }\n\n    hr {\n      width: 80%;\n      border: 1px solid black;\n    }\n\n    .projects-list {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      width: 80%;\n      align-items: center;\n      gap: 1rem;\n      z-index: 1001;\n\n      .project {\n        display: flex;\n        cursor: pointer;\n        width: 100%;\n        min-height: 2rem;\n        font-size: large;\n        height: fit-content;\n        border-radius: 3px;\n        font-weight: bolder;\n        transition: 0.2s;\n        background-color: $buttonGrey;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n\n        &:hover {\n          background-color: $teal;\n          color: $white;\n        }\n      }\n    }\n  }\n}\n\n.project-modal-container {\n  display: none;\n  border-radius: 5px;\n  width: 80%;\n  height: fit-content;\n\n  &.is-active {\n    display: flex;\n  }\n\n  .project-form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: $buttonGrey;\n    width: 100%;\n\n    label {\n      display: flex;\n      align-items: center;\n      width: 100%;\n\n      input {\n        width: 100%;\n        height: 2rem;\n      }\n    }\n\n    button {\n      align-self: flex-end;\n      height: 1.5rem;\n      width: 100%;\n    }\n  }\n}\n\n/* MQ 600PX */\n\n@media only screen and (max-width: 600px) {\n  .aside-left {\n    width: 100vw;\n    &.is-active {\n      position: fixed;\n    }\n  }\n} ;\n"],"sourceRoot":""}]);
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





// DOM Grabs
// Aside fills screen in mobile
function displayAside() {
  const aside = document.querySelector('.aside-left');
  const hamburger = document.querySelector('.hamburger-menu');
  hamburger.addEventListener('click', () => aside.classList.toggle('is-active'));
}

/* clears options to stop array duplication. */
const clearOptions = () => {
  const options = document.getElementById('assigned-project');
  while (options.hasChildNodes()) {
    options.removeChild(options.firstChild);
  }
};

/* Populate task modal with options from projects() */
const populateOptions = () => {
  const options = _projects__WEBPACK_IMPORTED_MODULE_0__.projectStorage.callArray();
  clearOptions();
  options.forEach((object) => {
    const { title } = object;
    const option = document.createElement('option');
    option.setAttribute('value', `${title}`);
    option.innerText = `${title}`;
    document.getElementById('assigned-project').appendChild(option);
  });
};

// currently refered as the task button
function TaskBtnToggle() {
  const task = document.querySelector('.add-task-modal');
  return task.classList.toggle('is-active');
}

/* displays modal upon taskbtn click  */
function taskBtnEL() {
  const taskBtn = document.querySelector('.addTaskButton');
  taskBtn.addEventListener('click', (e) => {
    populateOptions();
    TaskBtnToggle();
    overlayToggle();
  });
}

// Add project Toggle & EL
const projectToggle = () => {
  const modal = document.querySelector('.project-modal-container');
  modal.classList.toggle('is-active');
};

// places project input upon click, this appends a div to the aside.
const projectModalEl = () => {
  const addProjectBtn = document.querySelector('.add-project');
  addProjectBtn.addEventListener('click', () => {
    projectToggle();
  });
};

// once submitted, the aside left project add modal closes.
const projectSubmitEL = () => {
  const projectSubmitBtn = document.querySelector('.project_submit');
  projectSubmitBtn.addEventListener('submit', () => {
    projectToggle();
  });
};

/* inserts an overlay, which can beclicked to remove the addTaskModal */
function overlayToggle() {
  const overlay = document.querySelector('.overlay');
  return overlay.classList.toggle('is-active');
}

/* removals modals on click in background */
function overlayRemoveModals() {
  const overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', () => {
    overlayToggle();
    TaskBtnToggle();
  });
}

// Collapses modals on submit
function modalSubmitCollapse() {
  const formBtn = document.querySelector('.project_submit');
  formBtn.addEventListener('submit', () => {
    TaskBtnToggle();
    overlayToggle();
  });
}

const taskEditor = (() => {
  let object = null;

  const getObject = (e) => {
    const index = e.target.closest('.hero-card').getAttribute('data-index');
    return (object = _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.callArray()[index]);
  };

  const editorModalFill = () => {
    const {
      title, date, priority, description,
    } = object;
    document.getElementById('new-title').defaultValue = `${title}`;
    document.getElementById('new-date').defaultValue = `${date}`;
    document.getElementById('new-priority').defaultValue = `${priority}`;
    document.getElementById('new-description').defaultValue = `${description}`;
  };

  const editorModalSubmit = (e) => {
    e.preventDefault();
    const { index } = object;

    const titleValue = document.getElementById('new-title').value.trim();
    const dateValue = document.getElementById('new-date').value;
    const priorityValue = document.getElementById('new-priority').value;
    const descriptValue = document.getElementById('new-description').value;

    object.setTitle(titleValue);
    object.setDate(dateValue);
    object.setPriority(priorityValue);
    object.setDescription(descriptValue);
    _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.sendToLocalStorage();

    const container = document
      .querySelector(`[data-index="${index}"]`)
      .remove(); // ensure to wrap in quotes
    createNewHero(_storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.callArray()[index]);
    _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.callAllEL();
    return (object = null);
  };

  const editorReset = () => {
    document.getElementById('edit-task-form').reset();
  };

  return {
    editorModalFill,
    editorModalSubmit,
    editorReset,
    getObject,
  };
})();

const editorModalSubmitEL = () => {
  const editorForm = document.getElementById('edit-task-form');
  editorForm.addEventListener('submit', (e) => {
    taskEditor.editorModalSubmit(e);
    taskEditor.editorReset();
    editModalToggleDisplay();
  });
};

/* Called to create and re-create all hero elements */
function createNewHero(object) {
  const {
    title, date, priority, catagorey, description, project, index,
  } = object;
  const container = document.querySelector('.innerContainer');

  const heroCard = document.createElement('Div');
  heroCard.classList.add('hero-card');
  container.appendChild(heroCard);
  heroCard.setAttribute('data-index', `${index}`);

  const heroCheck = document.createElement('div');
  heroCheck.classList.add('hero-icon');
  const labelforCheck = document.createElement('label');
  labelforCheck.setAttribute('for', 'checkbox');
  const checkInput = document.createElement('input');
  checkInput.setAttribute('type', 'checkbox');
  checkInput.classList.add('hero-check');
  checkInput.setAttribute('aria-checked', 'false');
  labelforCheck.appendChild(checkInput);
  heroCheck.appendChild(labelforCheck);
  heroCard.appendChild(heroCheck);

  const heroTitle = document.createElement('div');
  heroTitle.classList.add('hero-title');
  const titleText = document.createElement('p');
  titleText.innerText = `${title}`;
  heroTitle.appendChild(titleText);
  heroCard.appendChild(heroTitle);

  const heroDate = document.createElement('div');
  heroDate.classList.add('hero-date');
  const dateText = document.createElement('p');
  // const objdate = formatDate(object);
  dateText.innerText = `Due Date: ${date}`;
  heroDate.appendChild(dateText);
  heroCard.appendChild(heroDate);

  const heroPriority = document.createElement('div');
  heroPriority.classList.add('hero-priority');
  heroPriority.setAttribute('id', `${priority}`);
  const priorityText = document.createElement('p');
  priorityText.innerText = `${priority}`;
  heroPriority.appendChild(priorityText);
  heroCard.appendChild(heroPriority);

  const heroEditIcon = document.createElement('div');
  heroEditIcon.classList.add('hero-edit');
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-gear';
  heroEditIcon.appendChild(icon);
  heroCard.appendChild(heroEditIcon);

  const heroDeleteIcon = document.createElement('div');
  heroDeleteIcon.classList.add('hero-edit');
  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fa-solid fa-trash';
  heroDeleteIcon.appendChild(deleteIcon);
  heroCard.appendChild(heroDeleteIcon);

  const heroDescript = document.createElement('div');
  heroDescript.className = 'hero-description';
  const descriptText = document.createElement('p');
  descriptText.innerText = `${description}`;
  heroDescript.appendChild(descriptText);
  heroCard.appendChild(heroDescript);

  const heroCatagorey = document.createElement('div');
  heroCatagorey.className = 'hero-catagorey';
  heroCatagorey.setAttribute('id', `${catagorey}`);
  const catagoreyText = document.createElement('p');
  catagoreyText.innerText = `${catagorey}`;
  heroCatagorey.appendChild(catagoreyText);
  heroCard.appendChild(heroCatagorey);

  const heroProject = document.createElement('div');
  heroProject.className = 'hero-project';
  heroProject.setAttribute('id', `${project}`);
  const projectText = document.createElement('p');
  projectText.innerText = `${project}`;
  heroProject.appendChild(projectText);
  heroCard.appendChild(heroProject);
}

/* Creates a named project button and appends it to aside-left */
const createProjectCard = (object) => {
  const { title } = object;

  const parent = document.querySelector('.projects-list');

  const projectContainer = document.createElement('button');
  projectContainer.classList.add('project');

  // const projectTitle = document.createElement("p")
  projectContainer.innerText = `${title}`;

  // projectContainer.appendChild(projectTitle)
  return parent.appendChild(projectContainer);
};

// removes card from DOM, when delete button is clicked
function removeCard(e) {
  e.target.closest('.hero-card').remove();
}

// currently unused
function clearDOM() {
  const container = document.querySelector('.innerContainer');
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

/* Displays all tasks regardless of project assigned */
const displayAllTasks = () => {
  const heros = document.querySelectorAll('.hero-card');
  heros.forEach((hero) => (hero.style.display = 'flex'));
};

const displayAllTasksEL = () => {
  const allTasksBtn = document.querySelector('.alltasks');
  allTasksBtn.addEventListener('click', () => {
    displayAllTasks();
  });
};
const editModalToggleDisplay = () => {
  const editorModal = document.querySelector('.editor-modal');
  return editorModal.classList.toggle('is-active');
};

// exported to index.js
function DOMGrabs(e) {
  displayAside();
  taskBtnEL();
  overlayRemoveModals();
  modalSubmitCollapse();
  projectModalEl();
  projectSubmitEL();
  displayAllTasksEL();
}




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



function deleteBtnEventListener(e) {
  const deleteBtns = document.querySelectorAll(".fa-trash");
  deleteBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeCard)(e);
      _storage__WEBPACK_IMPORTED_MODULE_0__.StoredItems.deleteCard(e);
    });
  });
}

function editorModalEL(e) {
  const editorIcons = document.querySelectorAll(".fa-gear");
  editorIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      _dom__WEBPACK_IMPORTED_MODULE_1__.taskEditor.editorModalFill(_dom__WEBPACK_IMPORTED_MODULE_1__.taskEditor.getObject(e));
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.editModalToggleDisplay)();
    });
  });
}

const StorageEl = () => {
  addEventListener("storage", () => {
    _storage__WEBPACK_IMPORTED_MODULE_0__.StoredItems.sendToLocalStorage();
  });
};

const ElDom = () => {
  deleteBtnEventListener();
  StorageEl();
  editorModalEL();
};




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
// Imports
 // Called during the collectformData


// factory Function for form.value structure
function Taskobject(
  title,
  date,
  priority,
  catagorey,
  description,
  project,
  index
) {
  return {
    title,
    date,
    priority,
    catagorey,
    description,
    project,
    index,
  };
}

/* Setters */
const titleSetter = (state) => ({
  setTitle: (string) => (state.title = string),
});

const dateSetter = (state) => ({
  setDate: (string) => (state.date = string),
});

const prioritySetter = (state) => ({
  setPriority: (string) => (state.priority = string),
});

const catagoreySetter = (state) => ({
  setCatagorey: (string) => (state.catagorey = string),
});

const descriptionSetter = (state) => ({
  setDescription: (string) => (state.description = string),
});

function AssignMethods(object) {
  return Object.assign(
    object,
    titleSetter(object),
    dateSetter(object),
    prioritySetter(object),
    catagoreySetter(object),
    descriptionSetter(object)
  );
}

/* Collects data from form inputs, returns new object. */
function collectFormData(e) {
  e.preventDefault();

  const title = document.getElementById("task-title").value.trim();
  const date = document.getElementById("task-date").value;
  const priority = document.getElementById("task-priority").value;
  const catagorey = document.getElementById("task-catagorey").value;
  const description = document.getElementById("task-description").value;
  const project = document.getElementById("assigned-project").value;
  const index = _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.callArray().length;

  const newTask = Taskobject(
    title,
    date,
    priority,
    catagorey,
    description,
    project,
    index
  );
  AssignMethods(newTask);

  return newTask;
}

function clearForm() {
  const form = document.getElementById("task-form");
  form.reset();
}

/* Currently displays the collected inputs on the DOM currently used in index.js */
function collectForm() {
  const form = document.getElementById("task-form");
  form.addEventListener("submit", (e) => {
    _storage__WEBPACK_IMPORTED_MODULE_1__.StoredItems.createOneCard(collectFormData(e));
    clearForm();
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.TaskBtnToggle)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.overlayToggle)();
    return clearForm();
  });
}




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
// Imports



// projectStorage Obj
const projectStorage = (() => {
  const projectArray = [];

  const pushToProjectArray = (object) => {
    projectArray.push(object);
    sendtoLocalStorage();
  };

  const callArray = () => projectArray;

  const sendtoLocalStorage = () =>
    localStorage.setItem("projects", JSON.stringify(projectArray));

  const retrieveProjects = () => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
    if (projects === null) {
      return console.log("no projects");
    }
    projects.forEach((project) => {
      projectArray.push(project);
    });
  };

  const createProjects = () => {
    projectArray.forEach((project) => {
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createProjectCard)(project);
    });
    return SelectedProjectEl();
  };

  return {
    sendtoLocalStorage,
    retrieveProjects,
    createProjects,
    pushToProjectArray,
    callArray,
  };
})();

/* functional codes */
const grabProjectForm = (e) => {
  e.preventDefault();
  const projectName = document.getElementById("project-name").value.trim();
  projectStorage.pushToProjectArray({ title: projectName });
  return { title: projectName };
};

/* Sets non-wanted cards to display: none */
const sortTasksByProject = (e) => {
  const selection = e.target.innerText;
  const heros = document.querySelectorAll(".hero-card");
  heros.forEach((hero) => {
    if (hero.querySelector(".hero-project").innerText != selection) {
      hero.style.display = "none";
    } else hero.style.display = "flex";
  });
};

const projectFormReset = () => {
  const projectForm = document.getElementById("project-form");
  return projectForm.reset();
};

const SelectedProjectEl = () => {
  const projectBtns = document.querySelectorAll(".project");
  projectBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      sortTasksByProject(e);
    });
  });
};

const projectModalEl = () => {
  const projectSubmit = document.querySelector(".project-form");
  projectSubmit.addEventListener("submit", (e) => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createProjectCard)(grabProjectForm(e));
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectToggle)();
    projectFormReset();
    SelectedProjectEl();
  });
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
  const objectArray = [];

  // updates array at window load with retrieveing of objects from LS
  const retrieveObjects = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null) {
      return;
    }
    tasks.forEach((task) => {
      task.index = objectArray.length;
      objectArray.push(task);
    });
    return arrayByDate();
  };

  const arrayByDate = () => {
    objectArray.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  // called second to create cards from LS
  const createCardsFromLS = () => {
    objectArray.forEach((object) => {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createNewHero)(object);
      (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__.AssignMethods)(object);
    });
  };

  // called during the collectForm function in factory.js
  const sendToArray = (obj) => objectArray.push(obj);

  // currently stores the array in LS, called during the event listener in App
  const sendToLocalStorage = () =>
    localStorage.setItem("tasks", JSON.stringify(objectArray));

  // allows access for methods.
  const callArray = () => objectArray;

  const deleteCard = (e) => {
    const index = e.target.closest(".hero-card").getAttribute("data-index");
    objectArray.splice(index, 1);
    sendToLocalStorage();
  };

  function callAllEL() {
    (0,_eventListener__WEBPACK_IMPORTED_MODULE_1__.deleteBtnEventListener)();
    (0,_eventListener__WEBPACK_IMPORTED_MODULE_1__.editorModalEL)();
  }

  // called during the form submit to create a single hero-card
  const createOneCard = (object) => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createNewHero)(object);
    sendToArray(object);
    sendToLocalStorage();
    callAllEL();
  };

  return {
    retrieveObjects,
    createCardsFromLS,
    sendToArray,
    callArray,
    createOneCard,
    deleteCard,
    sendToLocalStorage,
    callAllEL,
  };
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







const DOM = function domEvents(e) {
  (0,_app_dom__WEBPACK_IMPORTED_MODULE_1__.DOMGrabs)(e);
  _app_projects__WEBPACK_IMPORTED_MODULE_5__.projectStorage.retrieveProjects();
  _app_projects__WEBPACK_IMPORTED_MODULE_5__.projectStorage.createProjects();
  _app_storage__WEBPACK_IMPORTED_MODULE_3__.StoredItems.retrieveObjects();
  _app_storage__WEBPACK_IMPORTED_MODULE_3__.StoredItems.createCardsFromLS();
  _app_storage__WEBPACK_IMPORTED_MODULE_3__.StoredItems.callArray();
  (0,_app_factory__WEBPACK_IMPORTED_MODULE_2__.collectForm)(e);
  (0,_app_eventListener__WEBPACK_IMPORTED_MODULE_4__.ElDom)();
  (0,_app_projects__WEBPACK_IMPORTED_MODULE_5__.projectModalEl)(e);
  (0,_app_projects__WEBPACK_IMPORTED_MODULE_5__.SelectedProjectEl)(e);
  (0,_app_dom__WEBPACK_IMPORTED_MODULE_1__.editorModalSubmitEL)(e);
};

window.onload = DOM();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFN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QjtBQUNBLEVBQUUsa0RBQVE7QUFDVixFQUFFLDBFQUErQjtBQUNqQyxFQUFFLHdFQUE2QjtBQUMvQixFQUFFLHFFQUEyQjtBQUM3QixFQUFFLHVFQUE2QjtBQUMvQixFQUFFLCtEQUFxQjtBQUN2QixFQUFFLHlEQUFXO0FBQ2IsRUFBRSx5REFBSztBQUNQLEVBQUUsNkRBQWM7QUFDaEIsRUFBRSxnRUFBaUI7QUFDbkIsRUFBRSw2REFBbUI7QUFDckI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz84ZDZiIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9hcHAvZG9tLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvYXBwL2V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9hcHAvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL2FwcC9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL2FwcC9zdG9yYWdlLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CNjEyK01vbm8mZmFtaWx5PUxhdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSW1wb3J0cyAqL1xcbiNoaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIE5hdiAqL1xcbi5uYXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTU0LCAxNTQsIDAuOTg2KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51OmhvdmVyIHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnU6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcbi5uYXYgLnRpdGxlLXdyYXBwZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5uYXYgLnRpdGxlLXdyYXBwZXIgLnRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5uYXYgLmNvbXBhbnktbG9nbyB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuLm5hdiAuY29tcGFueS1sb2dvIGltZyB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEFzaWRlIGVudGVycyB1cG9uIGhhbWJ1cmdlciBjbGljayAqL1xcbi5hc2lkZS1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtaW4td2lkdGg6IDE1dnc7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogOTB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAtMjAwJTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmFzaWRlLWxlZnQuaXMtYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgbGVmdDogMDtcXG59XFxuLmFzaWRlLWxlZnQgLmFzaWRlLWxpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFzaWRlLWxlZnQgLmFzaWRlLWxpbmtzIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWluLWhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbi5hc2lkZS1sZWZ0IC5hc2lkZS1saW5rcyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmFzaWRlLWxlZnQgLmFzaWRlLWxpbmtzIGJ1dHRvbi5hZGQtcHJvamVjdDpiZWZvcmUge1xcbiAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZmVcXFwiO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYXNpZGUtbGVmdCAuYXNpZGUtbGlua3MgaHIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uYXNpZGUtbGVmdCAuYXNpZGUtbGlua3MgLnByb2plY3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogODAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHotaW5kZXg6IDEwMDE7XFxufVxcbi5hc2lkZS1sZWZ0IC5hc2lkZS1saW5rcyAucHJvamVjdHMtbGlzdCAucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hc2lkZS1sZWZ0IC5hc2lkZS1saW5rcyAucHJvamVjdHMtbGlzdCAucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIuaXMtYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAucHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIgLnByb2plY3QtZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIgLnByb2plY3QtZm9ybSBsYWJlbCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLnByb2plY3QtbW9kYWwtY29udGFpbmVyIC5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogTVEgNjAwUFggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYXNpZGUtbGVmdCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIC5hc2lkZS1sZWZ0LmlzLWFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG59XFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbiogLmljb246OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMjAwdmg7XFxufVxcblxcbi5hcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLmNhcmRjb250YWluZXIge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5jYXJkY29udGFpbmVyIC5pbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtaW4td2lkdGg6IDcwJTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAycHggNHB4IGdyZXk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1jaGVjayB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICB3aWR0aDogMS4yNXJlbTtcXG4gIGFjY2VudC1jb2xvcjogdGVhbDtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby10aXRsZSB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tZWRpdCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWVkaXQ6aG92ZXIge1xcbiAgY29sb3I6IHRlYWw7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWRlc2NyaXB0aW9uIHtcXG4gIG1pbi13aWR0aDogNjAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1pbi1oZWlnaHQ6IDJyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWNhdGFnb3JleSB7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDEwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVxcblxcbi8qNjAwcHggTVEgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVyby1jYXJkIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLmVkaXRvci1tb2RhbCB7XFxuICAgIG1pbi13aWR0aDogODB2dztcXG4gIH1cXG59XFxuLyogRml4ZWQgUG9zaXRpb25lZCBFbGVtZW50ICovXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG4uYWRkVGFza0J1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAxNDcsIDE5KTtcXG59XFxuLmFkZFRhc2tCdXR0b24gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmFkZFRhc2tCdXR0b24gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi8qIEZpeGVkIHBvc2l0aW9uIE1vZGFsICAqL1xcbi5tb2RhbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDYwdnc7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcbi5tb2RhbC1jb250YWluZXIuaXMtYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi5tb2RhbC1jb250YWluZXIgaDMge1xcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIGhyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybS1jb250YWluZXIgI3Rhc2stZm9ybSAjVERMYWJlbCB7XFxuICB3aWR0aDogODAlO1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtICN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybS1jb250YWluZXIgI3Rhc2stZm9ybSBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjE1cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLSAqL1xcbi8qIEVkaXRvciBNb2RhbCAqL1xcbi8qIC0tLS0tLS0tLS0tLSAqL1xcbi5lZGl0b3ItbW9kYWwge1xcbiAgd2lkdGg6IDE1dnc7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgc2NhbGU6IDA7XFxuICByaWdodDogMDtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuLmVkaXRvci1tb2RhbC5pcy1hY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcbi5lZGl0b3ItbW9kYWwgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZWRpdG9yLW1vZGFsIGZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qT1ZFUkxBWSAqL1xcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5vdmVybGF5LmlzLWFjdGl2ZSB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHotaW5kZXg6IDk5OTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9hYnN0cmFjdGlvbnMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9hYnN0cmFjdGlvbnMvbmF2LWJhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLFlBQUE7QUNZQTtFQUNFLHFCQUFBO0VBQ0EsWUFUTTtFQVVOLGtCQUFBO0VBQ0EsaUJBQUE7QURWRjs7QUNhQTtFQUNFLDJCQUFBO0VBQ0EsWUFoQk07RUFpQk4sa0JBQUE7RUFDQSxpQkFBQTtBRFZGOztBQ2FBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEVkY7O0FFcEJBLFFBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsNENERlc7RUNHWCxtQkFBQTtFQUNBLFlBQUE7QUZ1QkY7QUVyQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCRGpCRztBRHdDUDtBRXJCSTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRnVCTjtBRXBCSTtFQUNFLGVBQUE7QUZzQk47QUVwQk07RUFDRSxtQkQ3Qkk7QURtRFo7QUVsQkk7RUFDRSxtQkRoQ0U7QURvRFI7QUVoQkU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRmtCSjtBRWhCSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUZrQk47QUVkRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FGZ0JKO0FFZEk7RUFDRSxZQUFBO0FGZ0JOOztBRVpBLHNDQUFBO0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Es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O0FBOEtKO0FBNUtJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQThLTjtBQTVLTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FBNktSO0FBMUtNO0VBQ0UsVUFBQTtBQTRLUjtBQXpLTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBMktSO0FBeEtNO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBMEtSOztBQXBLQSxtQkFBQTtBQUNBLGlCQUFBO0FBQ0EsaUJBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJDcFFNO0VEcVFOLGFBQUE7RUFDQSxjQUFBO0FBc0tGO0FBcEtFO0VBQ0UsUUFBQTtBQXNLSjtBQW5LRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFxS0o7QUFuS0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFxS047O0FBaEtBLFdBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQW1LRjtBQWpLRTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQW1LSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZW52OiB1bmRlZmluZWQ7XFxuLyogSW1wb3J0cyAqL1xcblxcbkBpbXBvcnQgXFxcIi4vYWJzdHJhY3Rpb25zL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Fic3RyYWN0aW9ucy9uYXYtYmFyLnNjc3NcXFwiO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJGJhc2VGb250O1xcblxcbiAgLmljb246OmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMjAwdmg7XFxufVxcblxcbi5hcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLmNhcmRjb250YWluZXIge1xcbiAgLy9ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIC5pbm5lckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgLy9ib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNhcmQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkaGVyb0JvcmRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAycHggNHB4IGdyZXk7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxuICAgIH1cXG4gICAgLmhlcm8tY2hlY2sge1xcbiAgICAgIGhlaWdodDogMS4yNXJlbTtcXG4gICAgICB3aWR0aDogMS4yNXJlbTtcXG4gICAgICBhY2NlbnQtY29sb3I6ICR0ZWFsO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLWljb24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgZmxleC1ncm93OiAwO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLXRpdGxlIHtcXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAuaGVyby1lZGl0IHtcXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgdHJhbnNpdGlvbjogMC40cztcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAkdGVhbDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5oZXJvLWRlc2NyaXB0aW9uIHtcXG4gICAgICBtaW4td2lkdGg6IDYwJTtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAuaGVyby1jYXRhZ29yZXkge1xcbiAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgd2lkdGg6IDEwJTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qNjAwcHggTVEgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVyby1jYXJkIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5tb2RhbC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVkaXRvci1tb2RhbCB7XFxuICAgIG1pbi13aWR0aDogODB2dztcXG4gIH1cXG59XFxuXFxuLyogRml4ZWQgUG9zaXRpb25lZCBFbGVtZW50ICovXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWw7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgei1pbmRleDogMTAwMDtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogRml4ZWQgcG9zaXRpb24gTW9kYWwgICovXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICRncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcblxcbiAgJi5pcy1hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgaDMge1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG4gIGhyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcblxcbiAgLm1vZGFsLWZvcm0tY29udGFpbmVyIHtcXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgICN0YXNrLWZvcm0ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZ2FwOiAycmVtO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICBsYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC8vYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICB9XFxuXFxuICAgICAgI1RETGFiZWwge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICB9XFxuXFxuICAgICAgI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAwLjE1cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLSAqL1xcbi8qIEVkaXRvciBNb2RhbCAqL1xcbi8qIC0tLS0tLS0tLS0tLSAqL1xcblxcbi5lZGl0b3ItbW9kYWwge1xcbiAgd2lkdGg6IDE1dnc7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAkZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHNjYWxlOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcblxcbiAgJi5pcy1hY3RpdmUge1xcbiAgICBzY2FsZTogKDEpO1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBsYWJlbCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qT1ZFUkxBWSAqL1xcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAmLmlzLWFjdGl2ZSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHotaW5kZXg6IDk5OTsgLy8gMSBsZXNzIHRoYW4gdGhlIG1vZGFsXFxuICB9XFxufVxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QjYxMitNb25vJmZhbWlseT1MYXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRiYXNlRm9udDogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiR0ZWFsOiB0ZWFsO1xcbiRzcGFuSG92ZXI6IHdoaXRlO1xcbiRuYXZCR2NvbG9yOiByZ2JhKDE2MCwgMTU0LCAxNTQsIDAuOTg2KTtcXG4kd2hpdGU6IHdoaXRlO1xcbiRncmV5OiBncmV5O1xcbiRoZXJvQm9yZGVyOiBncmV5O1xcbiRvcmFuZ2U6IHJnYigyMTYsIDE0NywgMTkpO1xcbiRidXR0b25HcmV5OiAjZTllOWVkO1xcblxcbi8vIEhlcm8tY2F0YWdvcmV5IHN0eWxlc1xcbiNoaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFJlZDtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsXCIvKiBOYXYgKi9cXG4ubmF2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdkJHY29sb3I7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0cmVtO1xcblxcbiAgLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWw7XFxuXFxuICAgIHNwYW4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkc3BhbkhvdmVyO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50aXRsZS13cmFwcGVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICAudGl0bGUge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvbXBhbnktbG9nbyB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuXFxuICAgIGltZyB7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuICB9XFxufVxcbi8qIEFzaWRlIGVudGVycyB1cG9uIGhhbWJ1cmdlciBjbGljayAqL1xcblxcbi5hc2lkZS1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtaW4td2lkdGg6IDE1dnc7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogOTB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAtMjAwJTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICB6LWluZGV4OiAxMDA7XFxuXFxuICAmLmlzLWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuXFxuICAuYXNpZGUtbGlua3Mge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWw7XFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgIH1cXG5cXG4gICAgICAmLmFkZC1wcm9qZWN0OmJlZm9yZSB7XFxuICAgICAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjBmZVxcXCI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGhyIHtcXG4gICAgICB3aWR0aDogODAlO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy1saXN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDFyZW07XFxuICAgICAgei1pbmRleDogMTAwMTtcXG5cXG4gICAgICAucHJvamVjdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b25HcmV5O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgJi5pcy1hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uR3JleTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogTVEgNjAwUFggKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYXNpZGUtbGVmdCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgJi5pcy1hY3RpdmUge1xcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgfVxcbiAgfVxcbn0gO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZSwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBwcm9qZWN0U3RvcmFnZSB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgU3RvcmVkSXRlbXMgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgZWRpdG9yTW9kYWxFTCB9IGZyb20gJy4vZXZlbnRMaXN0ZW5lcic7XG5cbi8vIERPTSBHcmFic1xuLy8gQXNpZGUgZmlsbHMgc2NyZWVuIGluIG1vYmlsZVxuZnVuY3Rpb24gZGlzcGxheUFzaWRlKCkge1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1sZWZ0Jyk7XG4gIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xuICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKSk7XG59XG5cbi8qIGNsZWFycyBvcHRpb25zIHRvIHN0b3AgYXJyYXkgZHVwbGljYXRpb24uICovXG5jb25zdCBjbGVhck9wdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNzaWduZWQtcHJvamVjdCcpO1xuICB3aGlsZSAob3B0aW9ucy5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBvcHRpb25zLnJlbW92ZUNoaWxkKG9wdGlvbnMuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbi8qIFBvcHVsYXRlIHRhc2sgbW9kYWwgd2l0aCBvcHRpb25zIGZyb20gcHJvamVjdHMoKSAqL1xuY29uc3QgcG9wdWxhdGVPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gcHJvamVjdFN0b3JhZ2UuY2FsbEFycmF5KCk7XG4gIGNsZWFyT3B0aW9ucygpO1xuICBvcHRpb25zLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHsgdGl0bGUgfSA9IG9iamVjdDtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3RpdGxlfWApO1xuICAgIG9wdGlvbi5pbm5lclRleHQgPSBgJHt0aXRsZX1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc3NpZ25lZC1wcm9qZWN0JykuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG59O1xuXG4vLyBjdXJyZW50bHkgcmVmZXJlZCBhcyB0aGUgdGFzayBidXR0b25cbmZ1bmN0aW9uIFRhc2tCdG5Ub2dnbGUoKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stbW9kYWwnKTtcbiAgcmV0dXJuIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59XG5cbi8qIGRpc3BsYXlzIG1vZGFsIHVwb24gdGFza2J0biBjbGljayAgKi9cbmZ1bmN0aW9uIHRhc2tCdG5FTCgpIHtcbiAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrQnV0dG9uJyk7XG4gIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBvcHVsYXRlT3B0aW9ucygpO1xuICAgIFRhc2tCdG5Ub2dnbGUoKTtcbiAgICBvdmVybGF5VG9nZ2xlKCk7XG4gIH0pO1xufVxuXG4vLyBBZGQgcHJvamVjdCBUb2dnbGUgJiBFTFxuY29uc3QgcHJvamVjdFRvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbC1jb250YWluZXInKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59O1xuXG4vLyBwbGFjZXMgcHJvamVjdCBpbnB1dCB1cG9uIGNsaWNrLCB0aGlzIGFwcGVuZHMgYSBkaXYgdG8gdGhlIGFzaWRlLlxuY29uc3QgcHJvamVjdE1vZGFsRWwgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0VG9nZ2xlKCk7XG4gIH0pO1xufTtcblxuLy8gb25jZSBzdWJtaXR0ZWQsIHRoZSBhc2lkZSBsZWZ0IHByb2plY3QgYWRkIG1vZGFsIGNsb3Nlcy5cbmNvbnN0IHByb2plY3RTdWJtaXRFTCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X3N1Ym1pdCcpO1xuICBwcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICBwcm9qZWN0VG9nZ2xlKCk7XG4gIH0pO1xufTtcblxuLyogaW5zZXJ0cyBhbiBvdmVybGF5LCB3aGljaCBjYW4gYmVjbGlja2VkIHRvIHJlbW92ZSB0aGUgYWRkVGFza01vZGFsICovXG5mdW5jdGlvbiBvdmVybGF5VG9nZ2xlKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgcmV0dXJuIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59XG5cbi8qIHJlbW92YWxzIG1vZGFscyBvbiBjbGljayBpbiBiYWNrZ3JvdW5kICovXG5mdW5jdGlvbiBvdmVybGF5UmVtb3ZlTW9kYWxzKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvdmVybGF5VG9nZ2xlKCk7XG4gICAgVGFza0J0blRvZ2dsZSgpO1xuICB9KTtcbn1cblxuLy8gQ29sbGFwc2VzIG1vZGFscyBvbiBzdWJtaXRcbmZ1bmN0aW9uIG1vZGFsU3VibWl0Q29sbGFwc2UoKSB7XG4gIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9zdWJtaXQnKTtcbiAgZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgVGFza0J0blRvZ2dsZSgpO1xuICAgIG92ZXJsYXlUb2dnbGUoKTtcbiAgfSk7XG59XG5cbmNvbnN0IHRhc2tFZGl0b3IgPSAoKCkgPT4ge1xuICBsZXQgb2JqZWN0ID0gbnVsbDtcblxuICBjb25zdCBnZXRPYmplY3QgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnLmhlcm8tY2FyZCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgIHJldHVybiAob2JqZWN0ID0gU3RvcmVkSXRlbXMuY2FsbEFycmF5KClbaW5kZXhdKTtcbiAgfTtcblxuICBjb25zdCBlZGl0b3JNb2RhbEZpbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbixcbiAgICB9ID0gb2JqZWN0O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGl0bGUnKS5kZWZhdWx0VmFsdWUgPSBgJHt0aXRsZX1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZGF0ZScpLmRlZmF1bHRWYWx1ZSA9IGAke2RhdGV9YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByaW9yaXR5JykuZGVmYXVsdFZhbHVlID0gYCR7cHJpb3JpdHl9YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWRlc2NyaXB0aW9uJykuZGVmYXVsdFZhbHVlID0gYCR7ZGVzY3JpcHRpb259YDtcbiAgfTtcblxuICBjb25zdCBlZGl0b3JNb2RhbFN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgaW5kZXggfSA9IG9iamVjdDtcblxuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRpdGxlJykudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZGVzY3JpcHRpb24nKS52YWx1ZTtcblxuICAgIG9iamVjdC5zZXRUaXRsZSh0aXRsZVZhbHVlKTtcbiAgICBvYmplY3Quc2V0RGF0ZShkYXRlVmFsdWUpO1xuICAgIG9iamVjdC5zZXRQcmlvcml0eShwcmlvcml0eVZhbHVlKTtcbiAgICBvYmplY3Quc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRWYWx1ZSk7XG4gICAgU3RvcmVkSXRlbXMuc2VuZFRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKVxuICAgICAgLnJlbW92ZSgpOyAvLyBlbnN1cmUgdG8gd3JhcCBpbiBxdW90ZXNcbiAgICBjcmVhdGVOZXdIZXJvKFN0b3JlZEl0ZW1zLmNhbGxBcnJheSgpW2luZGV4XSk7XG4gICAgU3RvcmVkSXRlbXMuY2FsbEFsbEVMKCk7XG4gICAgcmV0dXJuIChvYmplY3QgPSBudWxsKTtcbiAgfTtcblxuICBjb25zdCBlZGl0b3JSZXNldCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWZvcm0nKS5yZXNldCgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZWRpdG9yTW9kYWxGaWxsLFxuICAgIGVkaXRvck1vZGFsU3VibWl0LFxuICAgIGVkaXRvclJlc2V0LFxuICAgIGdldE9iamVjdCxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IGVkaXRvck1vZGFsU3VibWl0RUwgPSAoKSA9PiB7XG4gIGNvbnN0IGVkaXRvckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWZvcm0nKTtcbiAgZWRpdG9yRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIHRhc2tFZGl0b3IuZWRpdG9yTW9kYWxTdWJtaXQoZSk7XG4gICAgdGFza0VkaXRvci5lZGl0b3JSZXNldCgpO1xuICAgIGVkaXRNb2RhbFRvZ2dsZURpc3BsYXkoKTtcbiAgfSk7XG59O1xuXG4vKiBDYWxsZWQgdG8gY3JlYXRlIGFuZCByZS1jcmVhdGUgYWxsIGhlcm8gZWxlbWVudHMgKi9cbmZ1bmN0aW9uIGNyZWF0ZU5ld0hlcm8ob2JqZWN0KSB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGFnb3JleSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGluZGV4LFxuICB9ID0gb2JqZWN0O1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXJDb250YWluZXInKTtcblxuICBjb25zdCBoZXJvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RpdicpO1xuICBoZXJvQ2FyZC5jbGFzc0xpc3QuYWRkKCdoZXJvLWNhcmQnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9DYXJkKTtcbiAgaGVyb0NhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgYCR7aW5kZXh9YCk7XG5cbiAgY29uc3QgaGVyb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9DaGVjay5jbGFzc0xpc3QuYWRkKCdoZXJvLWljb24nKTtcbiAgY29uc3QgbGFiZWxmb3JDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsZm9yQ2hlY2suc2V0QXR0cmlidXRlKCdmb3InLCAnY2hlY2tib3gnKTtcbiAgY29uc3QgY2hlY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIGNoZWNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGVyby1jaGVjaycpO1xuICBjaGVja0lucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gIGxhYmVsZm9yQ2hlY2suYXBwZW5kQ2hpbGQoY2hlY2tJbnB1dCk7XG4gIGhlcm9DaGVjay5hcHBlbmRDaGlsZChsYWJlbGZvckNoZWNrKTtcbiAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0NoZWNrKTtcblxuICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVyb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlcm8tdGl0bGUnKTtcbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aXRsZVRleHQuaW5uZXJUZXh0ID0gYCR7dGl0bGV9YDtcbiAgaGVyb1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gIGhlcm9DYXJkLmFwcGVuZENoaWxkKGhlcm9UaXRsZSk7XG5cbiAgY29uc3QgaGVyb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVyb0RhdGUuY2xhc3NMaXN0LmFkZCgnaGVyby1kYXRlJyk7XG4gIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyBjb25zdCBvYmpkYXRlID0gZm9ybWF0RGF0ZShvYmplY3QpO1xuICBkYXRlVGV4dC5pbm5lclRleHQgPSBgRHVlIERhdGU6ICR7ZGF0ZX1gO1xuICBoZXJvRGF0ZS5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XG4gIGhlcm9DYXJkLmFwcGVuZENoaWxkKGhlcm9EYXRlKTtcblxuICBjb25zdCBoZXJvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVyb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hlcm8tcHJpb3JpdHknKTtcbiAgaGVyb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwcmlvcml0eX1gKTtcbiAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcmlvcml0eVRleHQuaW5uZXJUZXh0ID0gYCR7cHJpb3JpdHl9YDtcbiAgaGVyb1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XG4gIGhlcm9DYXJkLmFwcGVuZENoaWxkKGhlcm9Qcmlvcml0eSk7XG5cbiAgY29uc3QgaGVyb0VkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9FZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdoZXJvLWVkaXQnKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgaWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtZ2Vhcic7XG4gIGhlcm9FZGl0SWNvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0VkaXRJY29uKTtcblxuICBjb25zdCBoZXJvRGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvRGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdoZXJvLWVkaXQnKTtcbiAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtdHJhc2gnO1xuICBoZXJvRGVsZXRlSWNvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0RlbGV0ZUljb24pO1xuXG4gIGNvbnN0IGhlcm9EZXNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvRGVzY3JpcHQuY2xhc3NOYW1lID0gJ2hlcm8tZGVzY3JpcHRpb24nO1xuICBjb25zdCBkZXNjcmlwdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0VGV4dC5pbm5lclRleHQgPSBgJHtkZXNjcmlwdGlvbn1gO1xuICBoZXJvRGVzY3JpcHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRUZXh0KTtcbiAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0Rlc2NyaXB0KTtcblxuICBjb25zdCBoZXJvQ2F0YWdvcmV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9DYXRhZ29yZXkuY2xhc3NOYW1lID0gJ2hlcm8tY2F0YWdvcmV5JztcbiAgaGVyb0NhdGFnb3JleS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7Y2F0YWdvcmV5fWApO1xuICBjb25zdCBjYXRhZ29yZXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjYXRhZ29yZXlUZXh0LmlubmVyVGV4dCA9IGAke2NhdGFnb3JleX1gO1xuICBoZXJvQ2F0YWdvcmV5LmFwcGVuZENoaWxkKGNhdGFnb3JleVRleHQpO1xuICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvQ2F0YWdvcmV5KTtcblxuICBjb25zdCBoZXJvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvUHJvamVjdC5jbGFzc05hbWUgPSAnaGVyby1wcm9qZWN0JztcbiAgaGVyb1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3R9YCk7XG4gIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSBgJHtwcm9qZWN0fWA7XG4gIGhlcm9Qcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb1Byb2plY3QpO1xufVxuXG4vKiBDcmVhdGVzIGEgbmFtZWQgcHJvamVjdCBidXR0b24gYW5kIGFwcGVuZHMgaXQgdG8gYXNpZGUtbGVmdCAqL1xuY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAob2JqZWN0KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IG9iamVjdDtcblxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgLy8gY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgcHJvamVjdENvbnRhaW5lci5pbm5lclRleHQgPSBgJHt0aXRsZX1gO1xuXG4gIC8vIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xufTtcblxuLy8gcmVtb3ZlcyBjYXJkIGZyb20gRE9NLCB3aGVuIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZFxuZnVuY3Rpb24gcmVtb3ZlQ2FyZChlKSB7XG4gIGUudGFyZ2V0LmNsb3Nlc3QoJy5oZXJvLWNhcmQnKS5yZW1vdmUoKTtcbn1cblxuLy8gY3VycmVudGx5IHVudXNlZFxuZnVuY3Rpb24gY2xlYXJET00oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lckNvbnRhaW5lcicpO1xuICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLyogRGlzcGxheXMgYWxsIHRhc2tzIHJlZ2FyZGxlc3Mgb2YgcHJvamVjdCBhc3NpZ25lZCAqL1xuY29uc3QgZGlzcGxheUFsbFRhc2tzID0gKCkgPT4ge1xuICBjb25zdCBoZXJvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZXJvLWNhcmQnKTtcbiAgaGVyb3MuZm9yRWFjaCgoaGVybykgPT4gKGhlcm8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JykpO1xufTtcblxuY29uc3QgZGlzcGxheUFsbFRhc2tzRUwgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbHRhc2tzJyk7XG4gIGFsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlBbGxUYXNrcygpO1xuICB9KTtcbn07XG5jb25zdCBlZGl0TW9kYWxUb2dnbGVEaXNwbGF5ID0gKCkgPT4ge1xuICBjb25zdCBlZGl0b3JNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3ItbW9kYWwnKTtcbiAgcmV0dXJuIGVkaXRvck1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xufTtcblxuLy8gZXhwb3J0ZWQgdG8gaW5kZXguanNcbmZ1bmN0aW9uIERPTUdyYWJzKGUpIHtcbiAgZGlzcGxheUFzaWRlKCk7XG4gIHRhc2tCdG5FTCgpO1xuICBvdmVybGF5UmVtb3ZlTW9kYWxzKCk7XG4gIG1vZGFsU3VibWl0Q29sbGFwc2UoKTtcbiAgcHJvamVjdE1vZGFsRWwoKTtcbiAgcHJvamVjdFN1Ym1pdEVMKCk7XG4gIGRpc3BsYXlBbGxUYXNrc0VMKCk7XG59XG5cbmV4cG9ydCB7XG4gIERPTUdyYWJzLFxuICBjcmVhdGVOZXdIZXJvLFxuICBUYXNrQnRuVG9nZ2xlLFxuICBvdmVybGF5VG9nZ2xlLFxuICBjbGVhckRPTSxcbiAgcmVtb3ZlQ2FyZCxcbiAgY3JlYXRlUHJvamVjdENhcmQsXG4gIHByb2plY3RUb2dnbGUsXG4gIGVkaXRvck1vZGFsU3VibWl0RUwsXG4gIHRhc2tFZGl0b3IsXG4gIGVkaXRNb2RhbFRvZ2dsZURpc3BsYXksXG59O1xuIiwiaW1wb3J0IHsgU3RvcmVkSXRlbXMgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyByZW1vdmVDYXJkLCB0YXNrRWRpdG9yLCBlZGl0TW9kYWxUb2dnbGVEaXNwbGF5IH0gZnJvbSBcIi4vZG9tXCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIoZSkge1xuICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYS10cmFzaFwiKTtcbiAgZGVsZXRlQnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICByZW1vdmVDYXJkKGUpO1xuICAgICAgU3RvcmVkSXRlbXMuZGVsZXRlQ2FyZChlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRvck1vZGFsRUwoZSkge1xuICBjb25zdCBlZGl0b3JJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmEtZ2VhclwiKTtcbiAgZWRpdG9ySWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB0YXNrRWRpdG9yLmVkaXRvck1vZGFsRmlsbCh0YXNrRWRpdG9yLmdldE9iamVjdChlKSk7XG4gICAgICBlZGl0TW9kYWxUb2dnbGVEaXNwbGF5KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jb25zdCBTdG9yYWdlRWwgPSAoKSA9PiB7XG4gIGFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsICgpID0+IHtcbiAgICBTdG9yZWRJdGVtcy5zZW5kVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBFbERvbSA9ICgpID0+IHtcbiAgZGVsZXRlQnRuRXZlbnRMaXN0ZW5lcigpO1xuICBTdG9yYWdlRWwoKTtcbiAgZWRpdG9yTW9kYWxFTCgpO1xufTtcblxuZXhwb3J0IHsgRWxEb20sIGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIsIGVkaXRvck1vZGFsRUwgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCB7IFRhc2tCdG5Ub2dnbGUsIG92ZXJsYXlUb2dnbGUgfSBmcm9tIFwiLi9kb21cIjsgLy8gQ2FsbGVkIGR1cmluZyB0aGUgY29sbGVjdGZvcm1EYXRhXG5pbXBvcnQgeyBTdG9yZWRJdGVtcyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy8gZmFjdG9yeSBGdW5jdGlvbiBmb3IgZm9ybS52YWx1ZSBzdHJ1Y3R1cmVcbmZ1bmN0aW9uIFRhc2tvYmplY3QoXG4gIHRpdGxlLFxuICBkYXRlLFxuICBwcmlvcml0eSxcbiAgY2F0YWdvcmV5LFxuICBkZXNjcmlwdGlvbixcbiAgcHJvamVjdCxcbiAgaW5kZXhcbikge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2F0YWdvcmV5LFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByb2plY3QsXG4gICAgaW5kZXgsXG4gIH07XG59XG5cbi8qIFNldHRlcnMgKi9cbmNvbnN0IHRpdGxlU2V0dGVyID0gKHN0YXRlKSA9PiAoe1xuICBzZXRUaXRsZTogKHN0cmluZykgPT4gKHN0YXRlLnRpdGxlID0gc3RyaW5nKSxcbn0pO1xuXG5jb25zdCBkYXRlU2V0dGVyID0gKHN0YXRlKSA9PiAoe1xuICBzZXREYXRlOiAoc3RyaW5nKSA9PiAoc3RhdGUuZGF0ZSA9IHN0cmluZyksXG59KTtcblxuY29uc3QgcHJpb3JpdHlTZXR0ZXIgPSAoc3RhdGUpID0+ICh7XG4gIHNldFByaW9yaXR5OiAoc3RyaW5nKSA9PiAoc3RhdGUucHJpb3JpdHkgPSBzdHJpbmcpLFxufSk7XG5cbmNvbnN0IGNhdGFnb3JleVNldHRlciA9IChzdGF0ZSkgPT4gKHtcbiAgc2V0Q2F0YWdvcmV5OiAoc3RyaW5nKSA9PiAoc3RhdGUuY2F0YWdvcmV5ID0gc3RyaW5nKSxcbn0pO1xuXG5jb25zdCBkZXNjcmlwdGlvblNldHRlciA9IChzdGF0ZSkgPT4gKHtcbiAgc2V0RGVzY3JpcHRpb246IChzdHJpbmcpID0+IChzdGF0ZS5kZXNjcmlwdGlvbiA9IHN0cmluZyksXG59KTtcblxuZnVuY3Rpb24gQXNzaWduTWV0aG9kcyhvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgb2JqZWN0LFxuICAgIHRpdGxlU2V0dGVyKG9iamVjdCksXG4gICAgZGF0ZVNldHRlcihvYmplY3QpLFxuICAgIHByaW9yaXR5U2V0dGVyKG9iamVjdCksXG4gICAgY2F0YWdvcmV5U2V0dGVyKG9iamVjdCksXG4gICAgZGVzY3JpcHRpb25TZXR0ZXIob2JqZWN0KVxuICApO1xufVxuXG4vKiBDb2xsZWN0cyBkYXRhIGZyb20gZm9ybSBpbnB1dHMsIHJldHVybnMgbmV3IG9iamVjdC4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RGb3JtRGF0YShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XG4gIGNvbnN0IGNhdGFnb3JleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1jYXRhZ29yZXlcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3NpZ25lZC1wcm9qZWN0XCIpLnZhbHVlO1xuICBjb25zdCBpbmRleCA9IFN0b3JlZEl0ZW1zLmNhbGxBcnJheSgpLmxlbmd0aDtcblxuICBjb25zdCBuZXdUYXNrID0gVGFza29iamVjdChcbiAgICB0aXRsZSxcbiAgICBkYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNhdGFnb3JleSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwcm9qZWN0LFxuICAgIGluZGV4XG4gICk7XG4gIEFzc2lnbk1ldGhvZHMobmV3VGFzayk7XG5cbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xuICBmb3JtLnJlc2V0KCk7XG59XG5cbi8qIEN1cnJlbnRseSBkaXNwbGF5cyB0aGUgY29sbGVjdGVkIGlucHV0cyBvbiB0aGUgRE9NIGN1cnJlbnRseSB1c2VkIGluIGluZGV4LmpzICovXG5mdW5jdGlvbiBjb2xsZWN0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBTdG9yZWRJdGVtcy5jcmVhdGVPbmVDYXJkKGNvbGxlY3RGb3JtRGF0YShlKSk7XG4gICAgY2xlYXJGb3JtKCk7XG4gICAgVGFza0J0blRvZ2dsZSgpO1xuICAgIG92ZXJsYXlUb2dnbGUoKTtcbiAgICByZXR1cm4gY2xlYXJGb3JtKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb2xsZWN0Rm9ybSwgQXNzaWduTWV0aG9kcyB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IHByb2plY3RUb2dnbGUgfSBmcm9tIFwiLi9kb21cIjtcblxuLy8gcHJvamVjdFN0b3JhZ2UgT2JqXG5leHBvcnQgY29uc3QgcHJvamVjdFN0b3JhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICBjb25zdCBwdXNoVG9Qcm9qZWN0QXJyYXkgPSAob2JqZWN0KSA9PiB7XG4gICAgcHJvamVjdEFycmF5LnB1c2gob2JqZWN0KTtcbiAgICBzZW5kdG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCBjYWxsQXJyYXkgPSAoKSA9PiBwcm9qZWN0QXJyYXk7XG5cbiAgY29uc3Qgc2VuZHRvTG9jYWxTdG9yYWdlID0gKCkgPT5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuXG4gIGNvbnN0IHJldHJpZXZlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICBpZiAocHJvamVjdHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIm5vIHByb2plY3RzXCIpO1xuICAgIH1cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFNlbGVjdGVkUHJvamVjdEVsKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZW5kdG9Mb2NhbFN0b3JhZ2UsXG4gICAgcmV0cmlldmVQcm9qZWN0cyxcbiAgICBjcmVhdGVQcm9qZWN0cyxcbiAgICBwdXNoVG9Qcm9qZWN0QXJyYXksXG4gICAgY2FsbEFycmF5LFxuICB9O1xufSkoKTtcblxuLyogZnVuY3Rpb25hbCBjb2RlcyAqL1xuY29uc3QgZ3JhYlByb2plY3RGb3JtID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlLnRyaW0oKTtcbiAgcHJvamVjdFN0b3JhZ2UucHVzaFRvUHJvamVjdEFycmF5KHsgdGl0bGU6IHByb2plY3ROYW1lIH0pO1xuICByZXR1cm4geyB0aXRsZTogcHJvamVjdE5hbWUgfTtcbn07XG5cbi8qIFNldHMgbm9uLXdhbnRlZCBjYXJkcyB0byBkaXNwbGF5OiBub25lICovXG5jb25zdCBzb3J0VGFza3NCeVByb2plY3QgPSAoZSkgPT4ge1xuICBjb25zdCBzZWxlY3Rpb24gPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gIGNvbnN0IGhlcm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvLWNhcmRcIik7XG4gIGhlcm9zLmZvckVhY2goKGhlcm8pID0+IHtcbiAgICBpZiAoaGVyby5xdWVyeVNlbGVjdG9yKFwiLmhlcm8tcHJvamVjdFwiKS5pbm5lclRleHQgIT0gc2VsZWN0aW9uKSB7XG4gICAgICBoZXJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaGVyby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xufTtcblxuY29uc3QgcHJvamVjdEZvcm1SZXNldCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKTtcbiAgcmV0dXJuIHByb2plY3RGb3JtLnJlc2V0KCk7XG59O1xuXG5jb25zdCBTZWxlY3RlZFByb2plY3RFbCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gIHByb2plY3RCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHNvcnRUYXNrc0J5UHJvamVjdChlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcm9qZWN0TW9kYWxFbCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICBwcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBjcmVhdGVQcm9qZWN0Q2FyZChncmFiUHJvamVjdEZvcm0oZSkpO1xuICAgIHByb2plY3RUb2dnbGUoKTtcbiAgICBwcm9qZWN0Rm9ybVJlc2V0KCk7XG4gICAgU2VsZWN0ZWRQcm9qZWN0RWwoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0TW9kYWxFbCwgU2VsZWN0ZWRQcm9qZWN0RWwgfTtcbiIsImltcG9ydCB7IGNyZWF0ZU5ld0hlcm8sIGVkaXRvck1vZGFsU3VibWl0RUwgfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IGRlbGV0ZUJ0bkV2ZW50TGlzdGVuZXIsIGVkaXRvck1vZGFsRUwgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyBBc3NpZ25NZXRob2RzIH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuLy8gUmVtb2RlbCB0byBlbnN1cmUgYW4gYXJyYXkgZm8gb2JqZWN0cyBpcyBwcmVzZW50IGluc2lkZSB0aGUgbG9jYWwgc3RvcmFnZS5cblxuZXhwb3J0IGNvbnN0IFN0b3JlZEl0ZW1zID0gKCgpID0+IHtcbiAgY29uc3Qgb2JqZWN0QXJyYXkgPSBbXTtcblxuICAvLyB1cGRhdGVzIGFycmF5IGF0IHdpbmRvdyBsb2FkIHdpdGggcmV0cmlldmVpbmcgb2Ygb2JqZWN0cyBmcm9tIExTXG4gIGNvbnN0IHJldHJpZXZlT2JqZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gICAgaWYgKHRhc2tzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2suaW5kZXggPSBvYmplY3RBcnJheS5sZW5ndGg7XG4gICAgICBvYmplY3RBcnJheS5wdXNoKHRhc2spO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheUJ5RGF0ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGFycmF5QnlEYXRlID0gKCkgPT4ge1xuICAgIG9iamVjdEFycmF5LnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZShiLmRhdGUpKTtcbiAgfTtcblxuICAvLyBjYWxsZWQgc2Vjb25kIHRvIGNyZWF0ZSBjYXJkcyBmcm9tIExTXG4gIGNvbnN0IGNyZWF0ZUNhcmRzRnJvbUxTID0gKCkgPT4ge1xuICAgIG9iamVjdEFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgY3JlYXRlTmV3SGVybyhvYmplY3QpO1xuICAgICAgQXNzaWduTWV0aG9kcyhvYmplY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGNhbGxlZCBkdXJpbmcgdGhlIGNvbGxlY3RGb3JtIGZ1bmN0aW9uIGluIGZhY3RvcnkuanNcbiAgY29uc3Qgc2VuZFRvQXJyYXkgPSAob2JqKSA9PiBvYmplY3RBcnJheS5wdXNoKG9iaik7XG5cbiAgLy8gY3VycmVudGx5IHN0b3JlcyB0aGUgYXJyYXkgaW4gTFMsIGNhbGxlZCBkdXJpbmcgdGhlIGV2ZW50IGxpc3RlbmVyIGluIEFwcFxuICBjb25zdCBzZW5kVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PlxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkob2JqZWN0QXJyYXkpKTtcblxuICAvLyBhbGxvd3MgYWNjZXNzIGZvciBtZXRob2RzLlxuICBjb25zdCBjYWxsQXJyYXkgPSAoKSA9PiBvYmplY3RBcnJheTtcblxuICBjb25zdCBkZWxldGVDYXJkID0gKGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuaGVyby1jYXJkXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG4gICAgb2JqZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZW5kVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjYWxsQWxsRUwoKSB7XG4gICAgZGVsZXRlQnRuRXZlbnRMaXN0ZW5lcigpO1xuICAgIGVkaXRvck1vZGFsRUwoKTtcbiAgfVxuXG4gIC8vIGNhbGxlZCBkdXJpbmcgdGhlIGZvcm0gc3VibWl0IHRvIGNyZWF0ZSBhIHNpbmdsZSBoZXJvLWNhcmRcbiAgY29uc3QgY3JlYXRlT25lQ2FyZCA9IChvYmplY3QpID0+IHtcbiAgICBjcmVhdGVOZXdIZXJvKG9iamVjdCk7XG4gICAgc2VuZFRvQXJyYXkob2JqZWN0KTtcbiAgICBzZW5kVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICBjYWxsQWxsRUwoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJldHJpZXZlT2JqZWN0cyxcbiAgICBjcmVhdGVDYXJkc0Zyb21MUyxcbiAgICBzZW5kVG9BcnJheSxcbiAgICBjYWxsQXJyYXksXG4gICAgY3JlYXRlT25lQ2FyZCxcbiAgICBkZWxldGVDYXJkLFxuICAgIHNlbmRUb0xvY2FsU3RvcmFnZSxcbiAgICBjYWxsQWxsRUwsXG4gIH07XG59KSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBET01HcmFicywgZWRpdG9yTW9kYWxTdWJtaXRFTCB9IGZyb20gXCIuL2FwcC9kb21cIjtcbmltcG9ydCB7IGNvbGxlY3RGb3JtIH0gZnJvbSBcIi4vYXBwL2ZhY3RvcnlcIjtcbmltcG9ydCB7IFN0b3JlZEl0ZW1zIH0gZnJvbSBcIi4vYXBwL3N0b3JhZ2VcIjtcbmltcG9ydCB7IEVsRG9tIH0gZnJvbSBcIi4vYXBwL2V2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCB7XG4gIHByb2plY3RNb2RhbEVsLFxuICBTZWxlY3RlZFByb2plY3RFbCxcbiAgcHJvamVjdFN0b3JhZ2UsXG59IGZyb20gXCIuL2FwcC9wcm9qZWN0c1wiO1xuXG5jb25zdCBET00gPSBmdW5jdGlvbiBkb21FdmVudHMoZSkge1xuICBET01HcmFicyhlKTtcbiAgcHJvamVjdFN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xuICBwcm9qZWN0U3RvcmFnZS5jcmVhdGVQcm9qZWN0cygpO1xuICBTdG9yZWRJdGVtcy5yZXRyaWV2ZU9iamVjdHMoKTtcbiAgU3RvcmVkSXRlbXMuY3JlYXRlQ2FyZHNGcm9tTFMoKTtcbiAgU3RvcmVkSXRlbXMuY2FsbEFycmF5KCk7XG4gIGNvbGxlY3RGb3JtKGUpO1xuICBFbERvbSgpO1xuICBwcm9qZWN0TW9kYWxFbChlKTtcbiAgU2VsZWN0ZWRQcm9qZWN0RWwoZSk7XG4gIGVkaXRvck1vZGFsU3VibWl0RUwoZSk7XG59O1xuXG53aW5kb3cub25sb2FkID0gRE9NKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=