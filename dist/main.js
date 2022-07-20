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
___CSS_LOADER_EXPORT___.push([module.id, "/* Imports */ /* Nav */\n.nav {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: rgba(160, 154, 154, 0.986);\n  align-items: center;\n  height: 4rem;\n}\n.nav .hamburger-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 2.5rem;\n  height: 4rem;\n  padding: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  background-color: teal;\n}\n.nav .hamburger-menu span {\n  display: block;\n  border: 2px solid black;\n  width: 100%;\n  transition: 0.4s;\n}\n.nav .hamburger-menu:hover {\n  cursor: pointer;\n}\n.nav .hamburger-menu:hover span {\n  border-color: white;\n}\n.nav .hamburger-menu:active {\n  border-color: white;\n}\n.nav .title-wrapper {\n  margin: auto;\n  justify-self: center;\n  align-self: center;\n}\n.nav .title-wrapper .title {\n  color: white;\n}\n.nav .company-logo {\n  border: 2px solid red;\n  width: 4rem;\n  height: 4rem;\n}\n.nav .company-logo img {\n  color: black;\n}\n\n/* Aside enters upon hamburger click */\n.main {\n  display: flex;\n  flex-direction: row;\n  transition: 0.4s;\n}\n\n.aside-left {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  width: 15vw;\n  height: 90vh;\n  align-items: center;\n  left: -100%;\n  transition: 0.4s;\n  background-color: white;\n  z-index: 100;\n}\n.aside-left.is-active {\n  display: flex;\n  position: fixed;\n  left: 0;\n}\n.aside-left .nav-links {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 1rem;\n  align-items: center;\n}\n.aside-left .nav-links button {\n  cursor: pointer;\n  width: 80%;\n  border: none;\n  min-height: 1.5rem;\n  height: fit-content;\n  border-radius: 3px;\n  font-weight: bolder;\n  transition: 0.2s;\n}\n.aside-left .nav-links button:hover {\n  background-color: teal;\n  color: white;\n}\n.aside-left .nav-links button.add-project:before {\n  font: var(--fa-font-solid);\n  content: \"\\f0fe\";\n  margin-right: 1rem;\n}\n.aside-left .nav-links hr {\n  width: 80%;\n  border: 1px solid black;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif;\n}\n* .icon::before {\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  height: 200vh;\n}\n\n.app {\n  position: relative;\n}\n\n.cardcontainer {\n  justify-self: center;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n}\n.cardcontainer .innerContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 80%;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  padding: 1rem;\n}\n.cardcontainer .hero-card {\n  border: 2px solid grey;\n  border-radius: 5px;\n  min-width: 90%;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  transition: 0.4s;\n  z-index: 1;\n}\n.cardcontainer .hero-card:hover {\n  box-shadow: 2px 4px grey;\n  transform: scale(1.025);\n}\n.cardcontainer .hero-card .hero-check {\n  height: 1.25rem;\n  width: 1.25rem;\n  accent-color: teal;\n}\n.cardcontainer .hero-card .hero-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n}\n.cardcontainer .hero-card .hero-title {\n  max-width: 50%;\n  margin-left: 0;\n}\n.cardcontainer .hero-card .hero-edit {\n  font-size: 1.25rem;\n  transition: 0.4s;\n}\n.cardcontainer .hero-card .hero-edit:hover {\n  color: teal;\n  cursor: pointer;\n  transform: rotate(180deg);\n}\n.cardcontainer .hero-card .hero-description {\n  min-width: 60%;\n  border: 2px red solid;\n  min-height: 2rem;\n  height: fit-content;\n}\n.cardcontainer .hero-card .hero-catagorey {\n  width: 25%;\n  height: fit-content;\n  text-align: center;\n  background-color: rgba(252, 33, 33, 0.795);\n  color: white;\n  font-weight: bold;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\n/*600px MQ */\n@media only screen and (max-width: 600px) {\n  .aside-left {\n    width: 100vw;\n  }\n}\n/* Fixed Positioned Element */\n.addTaskButton {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-right: 5rem;\n  background-color: teal;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.4s;\n  z-index: 1000;\n}\n.addTaskButton:hover {\n  cursor: pointer;\n  background-color: grey;\n}\n.addTaskButton button {\n  background-color: transparent;\n  text-decoration: none;\n  border: none;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: 0.4s;\n}\n.addTaskButton button:hover {\n  color: white;\n  transform: rotate(180deg);\n}\n\n/* Fixed position Modal  */\n.modal-dialog {\n  width: 60vw;\n  min-height: 10rem;\n  height: fit-content;\n  border: 2px solid grey;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-left: 15%;\n  display: none;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.modal-dialog.is-active {\n  display: flex;\n}\n.modal-dialog h3 {\n  margin-left: 3rem;\n  font-weight: 600;\n}\n.modal-dialog hr {\n  width: 90%;\n  margin: auto;\n}\n.modal-dialog .modal-form-container {\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n}\n.modal-dialog .modal-form-container #task-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: space-between;\n}\n.modal-dialog .modal-form-container #task-form label {\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n}\n.modal-dialog .modal-form-container #task-form #TDLabel {\n  width: 80%;\n}\n.modal-dialog .modal-form-container #task-form #task-description {\n  width: 100%;\n  height: 3rem;\n  margin-bottom: 1rem;\n  resize: none;\n}\n.modal-dialog .modal-form-container #task-form button {\n  align-self: center;\n  justify-content: center;\n  padding: 0.25rem;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss","webpack://./src/style/abstractions/variables.scss","webpack://./src/style/abstractions/nav-bar.scss"],"names":[],"mappings":"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","sourcesContent":["$env: undefined;\n/* Imports */\r\n\r\n@import \"./abstractions/variables.scss\";\r\n@import \"./abstractions/nav-bar.scss\";\r\n\r\n*{\r\n    padding: 0;\r\n    margin:0;\r\n    box-sizing: border-box;\r\n    font-family: $baseFont;\r\n\r\n    .icon::before {\r\n        display: inline-block;\r\n        text-rendering: auto;\r\n        -webkit-font-smoothing: antialiased;\r\n      }\r\n};\r\nbody{\r\n    height: 200vh;\r\n}\r\n\r\n.app {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.cardcontainer {\r\n    //border: 2px solid red;\r\n    justify-self: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 1rem;\r\n\r\n    .innerContainer {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2rem;;\r\n        //border: 2px dashed blue;\r\n        height: 80%;\r\n        width: 80%;\r\n        margin: auto;\r\n        align-items: center;\r\n        padding: 1rem;\r\n    }\r\n\r\n    .hero-card{\r\n        border: 2px solid $heroBorder;\r\n        border-radius: 5px;\r\n        min-width: 90%;\r\n        min-height: 4rem;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        gap: 0.5rem;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 1rem;\r\n        transition: 0.4s;\r\n        z-index: 1;\r\n\r\n        &:hover{\r\n            box-shadow: 2px 4px grey;\r\n            transform: scale(1.025);\r\n            \r\n        }\r\n        .hero-check{\r\n            height: 1.25rem;\r\n            width: 1.25rem;\r\n            accent-color: $teal;\r\n        }\r\n\r\n        .hero-icon {\r\n            font-size: 1.5rem;\r\n            width: 1.5rem;\r\n        }\r\n\r\n        .hero-title {\r\n            max-width: 50%;\r\n            margin-left: 0;\r\n            //border: 2px solid red;\r\n        }\r\n        .hero-edit {\r\n            font-size: 1.25rem;\r\n            transition: 0.4s;\r\n\r\n            &:hover {\r\n                color: $teal;\r\n                cursor: pointer;\r\n                transform: rotate(180deg);\r\n            }\r\n        }\r\n        .hero-description{\r\n            min-width: 60%;\r\n            border: 2px red solid;\r\n            min-height: 2rem;\r\n            height: fit-content;\r\n\r\n        }\r\n\r\n\r\n        .hero-catagorey{\r\n            width: 25%;;\r\n           //border: 2px solid black;\r\n            height: fit-content;\r\n            text-align: center;\r\n            background-color: rgba(252, 33, 33, 0.795);\r\n            color: $white;\r\n            font-weight: bold;\r\n            border-radius: 3px;\r\n            vertical-align: middle;\r\n        }\r\n\r\n        \r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*600px MQ */\r\n@media only screen and (max-width: 600px) {\r\n    .aside-left {\r\n        width: 100vw;\r\n    }\r\n  }\r\n\r\n\r\n/* Fixed Positioned Element */\r\n.addTaskButton{\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin-bottom: 5rem;\r\n    margin-right: 5rem;\r\n    background-color:$teal;\r\n    border-radius: 50%;\r\n    width: 2rem;\r\n    height:2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: 0.4s;\r\n    z-index: 1000;\r\n\r\n    &:hover{\r\n        cursor: pointer;\r\n        background-color: $grey;\r\n    }\r\n\r\n   button {\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n\r\n    &:hover{\r\n        color: $white;\r\n        transform: rotate(180deg);\r\n    }\r\n   }\r\n}\r\n\r\n/* Fixed position Modal  */\r\n.modal-dialog{\r\n    width: 60vw;\r\n    min-height: 10rem;\r\n    height: fit-content;\r\n    border: 2px solid $grey;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    margin-bottom: 5rem;\r\n    margin-left: 15%;\r\n    display: none;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n\r\n    &.is-active{\r\n        display: flex;\r\n    }\r\n\r\n    h3 {\r\n        margin-left: 3rem;\r\n        font-weight: 600;\r\n    }\r\n\r\n    hr{\r\n        width: 90%;\r\n        margin: auto;\r\n    }\r\n\r\n    .modal-form-container {\r\n        //border: 2px solid black;\r\n        width: 100%;\r\n        height: fit-content;\r\n        display: flex;\r\n        flex-direction: row;\r\n        \r\n\r\n        #task-form{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        gap: 2rem;\r\n        justify-content: space-between;\r\n\r\n        label {\r\n            display: flex;\r\n            flex-direction: column;\r\n            //border: 2px dashed black;\r\n            height: fit-content;\r\n            }\r\n\r\n        #TDLabel{\r\n            width: 80%;  \r\n        }\r\n\r\n        #task-description {\r\n        width: 100%;\r\n        height: 3rem;;\r\n        margin-bottom: 1rem;\r\n        resize: none;\r\n        }\r\n\r\n        button {\r\n            align-self: center;\r\n            justify-content: center;\r\n            padding: 0.25rem;\r\n\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\n","@import url('https://fonts.googleapis.com/css2?family=B612+Mono&family=Lato:wght@300&display=swap');\r\n\r\n$baseFont:'Lato', sans-serif;\r\n$teal: teal;\r\n$spanHover: white;\r\n$navBGcolor: rgba(160, 154, 154, 0.986);\r\n$white: white;\r\n$grey: grey;\r\n$heroBorder: grey;\r\n\r\n","/* Nav */\r\n.nav {\r\n    position:relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    background-color: $navBGcolor;\r\n    align-items: center;\r\n    height: 4rem;;\r\n\r\n\r\n    .hamburger-menu {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2px;\r\n        width: 2.5rem;\r\n        height:4rem;\r\n        padding: 0.5rem;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: $teal;\r\n\r\n        span {\r\n            display: block;\r\n            border: 2px solid black;\r\n            width: 100%;\r\n            transition: 0.4s;\r\n\r\n        }\r\n\r\n\r\n        &:hover{\r\n            cursor: pointer;\r\n            \r\n            span {\r\n                border-color: $spanHover ;\r\n            };\r\n        }\r\n\r\n        &:active{\r\n            border-color: $white;\r\n        }\r\n    };\r\n\r\n    .title-wrapper {\r\n        margin: auto;\r\n        justify-self: center;\r\n        align-self: center;\r\n\r\n        .title {\r\n            color: white;\r\n        }\r\n    };\r\n\r\n    .company-logo{\r\n        border: 2px solid red;\r\n        width: 4rem;\r\n        height: 4rem;\r\n\r\n        img{\r\n            color: black;\r\n        }\r\n    }\r\n}\r\n/* Aside enters upon hamburger click */\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: row;\r\n    transition: 0.4s;\r\n}\r\n\r\n\r\n.aside-left {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid black;\r\n    width: 15vw;\r\n    height: 90vh;\r\n    align-items: center;\r\n    left: -100%;\r\n    transition: 0.4s;\r\n    background-color: $white;\r\n    z-index: 100;\r\n\r\n    &.is-active{\r\n        display:flex;\r\n        position: fixed;\r\n        left: 0;\r\n    }\r\n\r\n    .nav-links {\r\n        margin-top: 2rem;;\r\n        //border: 2px solid black;;\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        gap: 1rem;\r\n        align-items: center;\r\n\r\n\r\n        button {\r\n            cursor: pointer;\r\n            width:80%;\r\n            border: none;\r\n            min-height: 1.5rem;\r\n            height: fit-content;\r\n            border-radius: 3px;\r\n            font-weight: bolder;\r\n            transition: 0.2s;\r\n\r\n            &:hover {\r\n                background-color: $teal;\r\n                color: $white;\r\n            }\r\n\r\n            &.add-project:before {\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f0fe\";\r\n                margin-right: 1rem;\r\n                };\r\n            }\r\n\r\n            hr {\r\n                width: 80%;\r\n                border: 1px solid black;\r\n            }\r\n\r\n        };\r\n\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "clearForm": () => (/* binding */ clearForm),
/* harmony export */   "createNewHero": () => (/* binding */ createNewHero),
/* harmony export */   "displayForm": () => (/* binding */ displayForm)
/* harmony export */ });
//DOM Grabs

function displayAside () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
    
};

function displayForm () { 
    const modal = document.querySelector(".modal-dialog");
    return modal.classList.toggle("is-active");
}

 
function newTaskGrab () { // displays form upon plus symbol click
    const newTaskBtn = document.querySelector(".addTaskButton")
        newTaskBtn.addEventListener("click", () => {
            displayForm();
        });
    };

/* Called to create and re-create all hero elements */
function createNewHero (object) {
    let {title, date,priority,catagorey,description,} = object;
    const container = document.querySelector(".innerContainer")
    
    const heroCard = document.createElement("Div"); 
        heroCard.classList.add("hero-card");
            container.appendChild(heroCard);

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
        heroTitle.classList.add("hero-date");
            const titleText = document.createElement("p")
                titleText.innerText = `${title}`;
                    heroTitle.appendChild(titleText);
                        heroCard.appendChild(heroTitle);
    
    const heroDate = document.createElement("div")
        heroDate.classList.add("hero-date")
            const dateText = document.createElement("p")
                dateText.innerText = `Due Date:${date}`;
                    heroDate.appendChild(dateText)
                        heroCard.appendChild(heroDate);
    
    const heroPriority = document.createElement("div")
        heroPriority.classList.add("hero-priority");
           const priorityText = document.createElement("p")
                priorityText.innerText = `${priority}`;
                    heroPriority.appendChild(priorityText);
                    heroCard.appendChild(heroPriority);

    const heroEditIcon = document.createElement("div")
        heroEditIcon.classList.add("hero-edit");
            const icon = document.createElement("i")
                icon.className = "fa-solid fa-gear" 
                    heroEditIcon.appendChild(icon)
                        heroCard.appendChild(heroEditIcon);
    
    const heroDescript = document.createElement("div"); 
        heroDescript.className = "hero-description";
          const descriptText = document.createElement("p")
                descriptText.innerText= `${description}`;
                    heroDescript.appendChild(descriptText);
                        heroCard.appendChild(heroDescript); 
                        
    const heroCatagorey = document.createElement("div");
        heroCatagorey.className = "hero-catagorey";
           const catagoreyText = document.createElement("p")
                catagoreyText.innerText = `${catagorey}`;
                    heroCatagorey.appendChild(catagoreyText)
                        heroCard.appendChild(heroCatagorey);
 
    console.log("taskDOMcreated");
}


function clearForm () { 
    const form = document.getElementById("task-form")
    form.reset()
}

function DOMGrabs () {
    displayAside();
    newTaskGrab();
}



/***/ }),

/***/ "./src/app/factory.js":
/*!****************************!*\
  !*** ./src/app/factory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectForm": () => (/* binding */ collectForm)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/app/dom.js");
//Imports
 
 //Called during the collectformData


//factory Function
function Taskobject (title, date, priority, catagorey, description) {
  return {  
    title,
    date,
    priority,
    catagorey,
    description,
  }
};

function collectFormData (e) {

  e.preventDefault();
  console.log("form prevented")
    //collect values

    const title = document.getElementById("task-title").value;
    const date = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;
    const catagorey = document.getElementById("task-catagorey").value;
    const description = document.getElementById("task-description").value;

    let newTask = Taskobject(title, date, priority,catagorey,description)

    return newTask

};


function collectForm (e) {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createNewHero)(collectFormData(e))
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayForm)()
        return (0,_dom__WEBPACK_IMPORTED_MODULE_0__.clearForm)()  
      });
};









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






const DOM = function domEvents (e) {
    (0,_app_dom__WEBPACK_IMPORTED_MODULE_1__.DOMGrabs)(e)
    ;(0,_app_factory__WEBPACK_IMPORTED_MODULE_2__.collectForm)(e)
}



window.onload = DOM();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVywwQ0FBMEMsaUVBQWlFLDRDQUE0QyxVQUFVLG1CQUFtQixpQkFBaUIsK0JBQStCLCtCQUErQiwyQkFBMkIsa0NBQWtDLGlDQUFpQyxnREFBZ0QsV0FBVyxNQUFNLFNBQVMsc0JBQXNCLEtBQUssY0FBYywyQkFBMkIsS0FBSyxnQ0FBZ0MsZ0NBQWdDLDZCQUE2QixvQkFBb0IscUJBQXFCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLG1DQUFtQyx1QkFBdUIsc0NBQXNDLHdCQUF3Qix1QkFBdUIseUJBQXlCLGdDQUFnQywwQkFBMEIsU0FBUyx1QkFBdUIsMENBQTBDLCtCQUErQiwyQkFBMkIsNkJBQTZCLDBCQUEwQixnQ0FBZ0MsNEJBQTRCLHdCQUF3QixnQ0FBZ0MsMkNBQTJDLDBCQUEwQiw2QkFBNkIsdUJBQXVCLHdCQUF3Qix5Q0FBeUMsd0NBQXdDLDZCQUE2Qix3QkFBd0IsZ0NBQWdDLCtCQUErQixvQ0FBb0MsYUFBYSw0QkFBNEIsa0NBQWtDLDhCQUE4QixhQUFhLDZCQUE2QiwrQkFBK0IsK0JBQStCLHdDQUF3QyxhQUFhLHdCQUF3QixtQ0FBbUMsaUNBQWlDLDZCQUE2QixpQ0FBaUMsb0NBQW9DLDhDQUE4QyxpQkFBaUIsYUFBYSw4QkFBOEIsK0JBQStCLHNDQUFzQyxpQ0FBaUMsb0NBQW9DLGlCQUFpQixvQ0FBb0MsNEJBQTRCLHlDQUF5QyxvQ0FBb0MsbUNBQW1DLDJEQUEyRCw4QkFBOEIsa0NBQWtDLG1DQUFtQyx1Q0FBdUMsYUFBYSx5QkFBeUIsS0FBSyxvRkFBb0YscUJBQXFCLHlCQUF5QixTQUFTLE9BQU8sNkRBQTZELHdCQUF3QixpQkFBaUIsa0JBQWtCLDRCQUE0QiwyQkFBMkIsK0JBQStCLDJCQUEyQixvQkFBb0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHlCQUF5QixzQkFBc0Isb0JBQW9CLDRCQUE0QixvQ0FBb0MsU0FBUyxtQkFBbUIsc0NBQXNDLDhCQUE4QixxQkFBcUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixzQ0FBc0MsU0FBUyxRQUFRLEtBQUsscURBQXFELG9CQUFvQiwwQkFBMEIsNEJBQTRCLGdDQUFnQyx3QkFBd0IsZ0JBQWdCLGtCQUFrQiw0QkFBNEIseUJBQXlCLHNCQUFzQiwrQkFBK0Isb0JBQW9CLHdCQUF3QiwwQkFBMEIsU0FBUyxnQkFBZ0IsOEJBQThCLDZCQUE2QixTQUFTLGVBQWUsdUJBQXVCLHlCQUF5QixTQUFTLG1DQUFtQyxzQ0FBc0Msd0JBQXdCLGdDQUFnQywwQkFBMEIsZ0NBQWdDLHVDQUF1QywwQkFBMEIsZ0NBQWdDLDRCQUE0QixzQkFBc0IsMkNBQTJDLHVCQUF1Qiw4QkFBOEIsdUNBQXVDLDJDQUEyQyxvQ0FBb0MsaUJBQWlCLHlCQUF5Qiw2QkFBNkIsYUFBYSxtQ0FBbUMsd0JBQXdCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLGFBQWEsd0JBQXdCLG1DQUFtQyx3Q0FBd0MsaUNBQWlDLHFCQUFxQixhQUFhLGFBQWEsS0FBSywrR0FBK0cscUNBQXFDLGdCQUFnQixzQkFBc0IsNENBQTRDLGtCQUFrQixnQkFBZ0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLDRCQUE0Qix3QkFBd0IsdUNBQXVDLHNDQUFzQyw0QkFBNEIsc0JBQXNCLGlDQUFpQywwQkFBMEIsbUNBQW1DLHFCQUFxQiwwQkFBMEIsd0JBQXdCLDRCQUE0QixnQ0FBZ0Msb0NBQW9DLG9DQUFvQyxzQkFBc0IsK0JBQStCLHdDQUF3Qyw0QkFBNEIsaUNBQWlDLGlCQUFpQiw0QkFBNEIsZ0NBQWdDLHNDQUFzQyw4Q0FBOEMsa0JBQWtCLGFBQWEseUJBQXlCLHFDQUFxQyxhQUFhLFVBQVUsNEJBQTRCLHlCQUF5QixpQ0FBaUMsK0JBQStCLHdCQUF3Qiw2QkFBNkIsYUFBYSxVQUFVLDBCQUEwQixrQ0FBa0Msd0JBQXdCLHlCQUF5QixvQkFBb0IsNkJBQTZCLGFBQWEsU0FBUyxLQUFLLDBEQUEwRCxzQkFBc0IsNEJBQTRCLHlCQUF5QixLQUFLLHlCQUF5Qix3QkFBd0Isc0JBQXNCLCtCQUErQixnQ0FBZ0Msb0JBQW9CLHFCQUFxQiw0QkFBNEIsb0JBQW9CLHlCQUF5QixpQ0FBaUMscUJBQXFCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLG9CQUFvQixTQUFTLHdCQUF3Qiw4QkFBOEIsdUNBQXVDLDBCQUEwQixtQ0FBbUMsd0JBQXdCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLGdDQUFnQywwQkFBMEIsNkJBQTZCLG1DQUFtQyxvQ0FBb0MsbUNBQW1DLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLDRDQUE0QyxrQ0FBa0MsaUJBQWlCLDBDQUEwQywrQ0FBK0Msd0NBQXdDLHVDQUF1QyxzQkFBc0IsaUJBQWlCLHdCQUF3QiwrQkFBK0IsNENBQTRDLGlCQUFpQixrQkFBa0IsU0FBUyxtQkFBbUI7QUFDNTJoQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQThLO0FBQzlLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsb0pBQU87Ozs7QUFJd0g7QUFDaEosT0FBTyxpRUFBZSxvSkFBTyxJQUFJLDJKQUFjLEdBQUcsMkpBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZDQUE2QztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFVBQVU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQzhELENBQUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQWE7QUFDckIsUUFBUSxrREFBVztBQUNuQixlQUFlLCtDQUFTO0FBQ3hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQjs7Ozs7OztVQ2pEcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ1M7QUFDTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVE7QUFDWixJQUFJLDBEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz84ZDZiIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9hcHAvZG9tLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvYXBwL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUI2MTIrTW9ubyZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBJbXBvcnRzICovIC8qIE5hdiAqL1xcbi5uYXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTU0LCAxNTQsIDAuOTg2KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycHg7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51OmhvdmVyIHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnU6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcbi5uYXYgLnRpdGxlLXdyYXBwZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5uYXYgLnRpdGxlLXdyYXBwZXIgLnRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdiAuY29tcGFueS1sb2dvIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG4ubmF2IC5jb21wYW55LWxvZ28gaW1nIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogQXNpZGUgZW50ZXJzIHVwb24gaGFtYnVyZ2VyIGNsaWNrICovXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uYXNpZGUtbGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDE1dnc7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogLTEwMCU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi5hc2lkZS1sZWZ0LmlzLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hc2lkZS1sZWZ0IC5uYXYtbGlua3MgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtaW4taGVpZ2h0OiAxLjVyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbi5hc2lkZS1sZWZ0IC5uYXYtbGlua3MgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5hc2lkZS1sZWZ0IC5uYXYtbGlua3MgYnV0dG9uLmFkZC1wcm9qZWN0OmJlZm9yZSB7XFxuICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmZVxcXCI7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5hc2lkZS1sZWZ0IC5uYXYtbGlua3MgaHIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuKiAuaWNvbjo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAyMDB2aDtcXG59XFxuXFxuLmFwcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJkY29udGFpbmVyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWluLXdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDRweCBncmV5O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tY2hlY2sge1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgd2lkdGg6IDEuMjVyZW07XFxuICBhY2NlbnQtY29sb3I6IHRlYWw7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8taWNvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tdGl0bGUge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1lZGl0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tZWRpdDpob3ZlciB7XFxuICBjb2xvcjogdGVhbDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tZGVzY3JpcHRpb24ge1xcbiAgbWluLXdpZHRoOiA2MCU7XFxuICBib3JkZXI6IDJweCByZWQgc29saWQ7XFxuICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1jYXRhZ29yZXkge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMzMsIDMzLCAwLjc5NSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qNjAwcHggTVEgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYXNpZGUtbGVmdCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG59XFxuLyogRml4ZWQgUG9zaXRpb25lZCBFbGVtZW50ICovXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG4uYWRkVGFza0J1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4uYWRkVGFza0J1dHRvbiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uYWRkVGFza0J1dHRvbiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyogRml4ZWQgcG9zaXRpb24gTW9kYWwgICovXFxuLm1vZGFsLWRpYWxvZyB7XFxuICB3aWR0aDogNjB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmlzLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9kYWwtZGlhbG9nIGgzIHtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1vZGFsLWRpYWxvZyBociB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1mb3JtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZm9ybS1jb250YWluZXIgI3Rhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZm9ybS1jb250YWluZXIgI3Rhc2stZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWZvcm0tY29udGFpbmVyICN0YXNrLWZvcm0gI1RETGFiZWwge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZm9ybS1jb250YWluZXIgI3Rhc2stZm9ybSAjdGFzay1kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWZvcm0tY29udGFpbmVyICN0YXNrLWZvcm0gYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9hYnN0cmFjdGlvbnMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9hYnN0cmFjdGlvbnMvbmF2LWJhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLFlBQUEsRUNEUSxRQUFBO0FDQ1I7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLDRDREZTO0VDR1QsbUJBQUE7RUFDQSxZQUFBO0FGRUo7QUVDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JEbEJEO0FEbUJQO0FFQ1E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUZDWjtBRUlRO0VBQ0ksZUFBQTtBRkZaO0FFSVk7RUFDSSxtQkRoQ0o7QUQ4Qlo7QUVNUTtFQUNJLG1CRG5DSjtBRCtCUjtBRVFJO0VB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RlI7O0FBN0VBLDBCQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFnRko7QUE5RUk7RUFDSSxhQUFBO0FBZ0ZSO0FBN0VJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQStFUjtBQTVFSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBOEVSO0FBM0VJO0VBRUksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBNEVSO0FBekVRO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQTJFUjtBQXpFUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0FBMEVaO0FBdkVRO0VBQ0ksVUFBQTtBQXlFWjtBQXRFUTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBd0VSO0FBckVRO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBdUVaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRlbnY6IHVuZGVmaW5lZDtcXG4vKiBJbXBvcnRzICovXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiLi9hYnN0cmFjdGlvbnMvdmFyaWFibGVzLnNjc3NcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4vYWJzdHJhY3Rpb25zL25hdi1iYXIuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkYmFzZUZvbnQ7XFxyXFxuXFxyXFxuICAgIC5pY29uOjpiZWZvcmUge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxyXFxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgICB9XFxyXFxufTtcXHJcXG5ib2R5e1xcclxcbiAgICBoZWlnaHQ6IDIwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY2FyZGNvbnRhaW5lciB7XFxyXFxuICAgIC8vYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgLmlubmVyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAycmVtOztcXHJcXG4gICAgICAgIC8vYm9yZGVyOiAycHggZGFzaGVkIGJsdWU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyby1jYXJke1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGhlcm9Cb3JkZXI7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDRyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGdhcDogMC41cmVtO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDRweCBncmV5O1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmhlcm8tY2hlY2t7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxLjI1cmVtO1xcclxcbiAgICAgICAgICAgIGFjY2VudC1jb2xvcjogJHRlYWw7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaGVyby1pY29uIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmhlcm8tdGl0bGUge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmhlcm8tZWRpdCB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGVhbDtcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5oZXJvLWRlc2NyaXB0aW9ue1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjAlO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHJlZCBzb2xpZDtcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAuaGVyby1jYXRhZ29yZXl7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI1JTs7XFxyXFxuICAgICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAzMywgMzMsIDAuNzk1KTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyo2MDBweCBNUSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmFzaWRlLWxlZnQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogRml4ZWQgUG9zaXRpb25lZCBFbGVtZW50ICovXFxyXFxuLmFkZFRhc2tCdXR0b257XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR0ZWFsO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6MnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRml4ZWQgcG9zaXRpb24gTW9kYWwgICovXFxyXFxuLm1vZGFsLWRpYWxvZ3tcXHJcXG4gICAgd2lkdGg6IDYwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JleTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgICAmLmlzLWFjdGl2ZXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDMge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhye1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9kYWwtZm9ybS1jb250YWluZXIge1xcclxcbiAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICAjdGFzay1mb3Jte1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBnYXA6IDJyZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgICBsYWJlbCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIC8vYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI1RETGFiZWx7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDgwJTsgIFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3Rhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDNyZW07O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QjYxMitNb25vJmZhbWlseT1MYXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRiYXNlRm9udDonTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuJHRlYWw6IHRlYWw7XFxyXFxuJHNwYW5Ib3Zlcjogd2hpdGU7XFxyXFxuJG5hdkJHY29sb3I6IHJnYmEoMTYwLCAxNTQsIDE1NCwgMC45ODYpO1xcclxcbiR3aGl0ZTogd2hpdGU7XFxyXFxuJGdyZXk6IGdyZXk7XFxyXFxuJGhlcm9Cb3JkZXI6IGdyZXk7XFxyXFxuXFxyXFxuXCIsXCIvKiBOYXYgKi9cXHJcXG4ubmF2IHtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2Qkdjb2xvcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtOztcXHJcXG5cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlci1tZW51IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAycHg7XFxyXFxuICAgICAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OjRyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbDtcXHJcXG5cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc3BhbkhvdmVyIDtcXHJcXG4gICAgICAgICAgICB9O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjphY3RpdmV7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIC50aXRsZS13cmFwcGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgLnRpdGxlIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH07XFxyXFxuXFxyXFxuICAgIC5jb21wYW55LWxvZ297XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICB3aWR0aDogNHJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNHJlbTtcXHJcXG5cXHJcXG4gICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyogQXNpZGUgZW50ZXJzIHVwb24gaGFtYnVyZ2VyIGNsaWNrICovXFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtbGVmdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxNXZ3O1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxlZnQ6IC0xMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG5cXHJcXG4gICAgJi5pcy1hY3RpdmV7XFxyXFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtbGlua3Mge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTs7XFxyXFxuICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIGJsYWNrOztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcblxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgd2lkdGg6ODAlO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi5hZGQtcHJvamVjdDpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxmMGZlXFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBociB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIH07XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9ET00gR3JhYnNcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlBc2lkZSAoKSB7XHJcbiAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGUtbGVmdFwiKVxyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXItbWVudVwiKVxyXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICB9KVxyXG4gICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybSAoKSB7IFxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRpYWxvZ1wiKTtcclxuICAgIHJldHVybiBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG59XHJcblxyXG4gXHJcbmZ1bmN0aW9uIG5ld1Rhc2tHcmFiICgpIHsgLy8gZGlzcGxheXMgZm9ybSB1cG9uIHBsdXMgc3ltYm9sIGNsaWNrXHJcbiAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnV0dG9uXCIpXHJcbiAgICAgICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbi8qIENhbGxlZCB0byBjcmVhdGUgYW5kIHJlLWNyZWF0ZSBhbGwgaGVybyBlbGVtZW50cyAqL1xyXG5mdW5jdGlvbiBjcmVhdGVOZXdIZXJvIChvYmplY3QpIHtcclxuICAgIGxldCB7dGl0bGUsIGRhdGUscHJpb3JpdHksY2F0YWdvcmV5LGRlc2NyaXB0aW9uLH0gPSBvYmplY3Q7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlubmVyQ29udGFpbmVyXCIpXHJcbiAgICBcclxuICAgIGNvbnN0IGhlcm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRpdlwiKTsgXHJcbiAgICAgICAgaGVyb0NhcmQuY2xhc3NMaXN0LmFkZChcImhlcm8tY2FyZFwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9DYXJkKTtcclxuXHJcbiAgICBjb25zdCBoZXJvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGVyb0NoZWNrLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWljb25cIilcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxmb3JDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgICAgICAgICAgICAgbGFiZWxmb3JDaGVjay5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGVyby1jaGVja1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICBsYWJlbGZvckNoZWNrLmFwcGVuZENoaWxkKGNoZWNrSW5wdXQpXHJcbiAgICAgICAgaGVyb0NoZWNrLmFwcGVuZENoaWxkKGxhYmVsZm9yQ2hlY2spXHJcbiAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0NoZWNrKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcbiAgICAgICAgaGVyb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWRhdGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgICAgICB0aXRsZVRleHQuaW5uZXJUZXh0ID0gYCR7dGl0bGV9YDtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGVyb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGVyb0RhdGUuY2xhc3NMaXN0LmFkZChcImhlcm8tZGF0ZVwiKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgICAgICBkYXRlVGV4dC5pbm5lclRleHQgPSBgRHVlIERhdGU6JHtkYXRlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVyb0RhdGUuYXBwZW5kQ2hpbGQoZGF0ZVRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcm9DYXJkLmFwcGVuZENoaWxkKGhlcm9EYXRlKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGVyb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGhlcm9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGVyby1wcmlvcml0eVwiKTtcclxuICAgICAgICAgICBjb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUZXh0LmlubmVyVGV4dCA9IGAke3ByaW9yaXR5fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVyb1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb1ByaW9yaXR5KTtcclxuXHJcbiAgICBjb25zdCBoZXJvRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGVyb0VkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWVkaXRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxyXG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLWdlYXJcIiBcclxuICAgICAgICAgICAgICAgICAgICBoZXJvRWRpdEljb24uYXBwZW5kQ2hpbGQoaWNvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0VkaXRJY29uKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGVyb0Rlc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcbiAgICAgICAgaGVyb0Rlc2NyaXB0LmNsYXNzTmFtZSA9IFwiaGVyby1kZXNjcmlwdGlvblwiO1xyXG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0VGV4dC5pbm5lclRleHQ9IGAke2Rlc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVyb0Rlc2NyaXB0LmFwcGVuZENoaWxkKGRlc2NyaXB0VGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcm9DYXJkLmFwcGVuZENoaWxkKGhlcm9EZXNjcmlwdCk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIGNvbnN0IGhlcm9DYXRhZ29yZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlcm9DYXRhZ29yZXkuY2xhc3NOYW1lID0gXCJoZXJvLWNhdGFnb3JleVwiO1xyXG4gICAgICAgICAgIGNvbnN0IGNhdGFnb3JleVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICAgICAgY2F0YWdvcmV5VGV4dC5pbm5lclRleHQgPSBgJHtjYXRhZ29yZXl9YDtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvQ2F0YWdvcmV5LmFwcGVuZENoaWxkKGNhdGFnb3JleVRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcm9DYXJkLmFwcGVuZENoaWxkKGhlcm9DYXRhZ29yZXkpO1xyXG4gXHJcbiAgICBjb25zb2xlLmxvZyhcInRhc2tET01jcmVhdGVkXCIpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJGb3JtICgpIHsgXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIilcclxuICAgIGZvcm0ucmVzZXQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBET01HcmFicyAoKSB7XHJcbiAgICBkaXNwbGF5QXNpZGUoKTtcclxuICAgIG5ld1Rhc2tHcmFiKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7RE9NR3JhYnMsIGNyZWF0ZU5ld0hlcm8sIGNsZWFyRm9ybSwgZGlzcGxheUZvcm19OyIsIi8vSW1wb3J0c1xyXG4gXHJcbmltcG9ydCB7IGNyZWF0ZU5ld0hlcm8sIGNsZWFyRm9ybSwgZGlzcGxheUZvcm0gfSBmcm9tIFwiLi9kb21cIjsgLy9DYWxsZWQgZHVyaW5nIHRoZSBjb2xsZWN0Zm9ybURhdGFcclxuXHJcblxyXG4vL2ZhY3RvcnkgRnVuY3Rpb25cclxuZnVuY3Rpb24gVGFza29iamVjdCAodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBjYXRhZ29yZXksIGRlc2NyaXB0aW9uKSB7XHJcbiAgcmV0dXJuIHsgIFxyXG4gICAgdGl0bGUsXHJcbiAgICBkYXRlLFxyXG4gICAgcHJpb3JpdHksXHJcbiAgICBjYXRhZ29yZXksXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0Rm9ybURhdGEgKGUpIHtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnNvbGUubG9nKFwiZm9ybSBwcmV2ZW50ZWRcIilcclxuICAgIC8vY29sbGVjdCB2YWx1ZXNcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xyXG4gICAgY29uc3QgY2F0YWdvcmV5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWNhdGFnb3JleVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG5cclxuICAgIGxldCBuZXdUYXNrID0gVGFza29iamVjdCh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksY2F0YWdvcmV5LGRlc2NyaXB0aW9uKVxyXG5cclxuICAgIHJldHVybiBuZXdUYXNrXHJcblxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RGb3JtIChlKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xyXG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjcmVhdGVOZXdIZXJvKGNvbGxlY3RGb3JtRGF0YShlKSlcclxuICAgICAgICBkaXNwbGF5Rm9ybSgpXHJcbiAgICAgICAgcmV0dXJuIGNsZWFyRm9ybSgpICBcclxuICAgICAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Y29sbGVjdEZvcm19XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBET01HcmFicyB9IGZyb20gXCIuL2FwcC9kb21cIjtcclxuaW1wb3J0IHsgY29sbGVjdEZvcm0gfSBmcm9tIFwiLi9hcHAvZmFjdG9yeVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBET00gPSBmdW5jdGlvbiBkb21FdmVudHMgKGUpIHtcclxuICAgIERPTUdyYWJzKGUpXHJcbiAgICBjb2xsZWN0Rm9ybShlKVxyXG59XHJcblxyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBET00oKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=