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
/* harmony export */   "DOMGrabs": () => (/* binding */ DOMGrabs)
/* harmony export */ });
//DOM Grabs

function asideGrab () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
    
};

function newTaskGrab () {
    const newTaskBtn = document.querySelector(".addTaskButton")
    const modal = document.querySelector(".modal-dialog")
        newTaskBtn.addEventListener("click", () => {
            return modal.classList.toggle("is-active");
        })
}


function displayNewHero (object) {
    let {title, date,priority,catagorey,description,} = object;
    const container = document.querySelector("innerContainer")
    
    const heroCard = document.createElement("Div"); 
        heroCard.classList.add("hero-card");
    
}

function DOMGrabs () {
    asideGrab();
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
    return console.log(newTask);

};


function collectForm (e) {
  const form = document.getElementById("task-form");
      form.addEventListener("submit", function (e) {
        collectFormData(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDRJQUE0STtBQUM1STtBQUNBLHlFQUF5RSx1QkFBdUIsa0JBQWtCLHdCQUF3QixvQkFBb0IsbUNBQW1DLGlEQUFpRCx3QkFBd0IsaUJBQWlCLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsYUFBYSxrQkFBa0IsaUJBQWlCLG9CQUFvQix3QkFBd0IsNEJBQTRCLDJCQUEyQixHQUFHLDZCQUE2QixtQkFBbUIsNEJBQTRCLGdCQUFnQixxQkFBcUIsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRyx1QkFBdUIsaUJBQWlCLHlCQUF5Qix1QkFBdUIsR0FBRyw4QkFBOEIsaUJBQWlCLEdBQUcsc0JBQXNCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEdBQUcsMEJBQTBCLGlCQUFpQixHQUFHLG9EQUFvRCxrQkFBa0Isd0JBQXdCLHFCQUFxQixHQUFHLGlCQUFpQixvQkFBb0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix3QkFBd0IsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsaUJBQWlCLEdBQUcseUJBQXlCLGtCQUFrQixvQkFBb0IsWUFBWSxHQUFHLDBCQUEwQixxQkFBcUIsa0JBQWtCLDJCQUEyQixnQkFBZ0IsY0FBYyx3QkFBd0IsR0FBRyxpQ0FBaUMsb0JBQW9CLGVBQWUsaUJBQWlCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLHdCQUF3QixxQkFBcUIsR0FBRyx1Q0FBdUMsMkJBQTJCLGlCQUFpQixHQUFHLG9EQUFvRCwrQkFBK0Isd0JBQXdCLHVCQUF1QixHQUFHLDZCQUE2QixlQUFlLDRCQUE0QixHQUFHLE9BQU8sZUFBZSxjQUFjLDJCQUEyQixzQ0FBc0MsR0FBRyxtQkFBbUIsMEJBQTBCLHlCQUF5Qix3Q0FBd0MsR0FBRyxVQUFVLGtCQUFrQixHQUFHLFVBQVUsdUJBQXVCLEdBQUcsb0JBQW9CLHlCQUF5QixnQkFBZ0IsaUJBQWlCLGtCQUFrQixHQUFHLGtDQUFrQyxrQkFBa0IsMkJBQTJCLGNBQWMsZ0JBQWdCLGVBQWUsaUJBQWlCLHdCQUF3QixrQkFBa0IsR0FBRyw2QkFBNkIsMkJBQTJCLHVCQUF1QixtQkFBbUIscUJBQXFCLGtCQUFrQix3QkFBd0Isb0JBQW9CLGdCQUFnQix3QkFBd0IsbUNBQW1DLGtCQUFrQixxQkFBcUIsZUFBZSxHQUFHLG1DQUFtQyw2QkFBNkIsNEJBQTRCLEdBQUcseUNBQXlDLG9CQUFvQixtQkFBbUIsdUJBQXVCLEdBQUcsd0NBQXdDLHNCQUFzQixrQkFBa0IsR0FBRyx5Q0FBeUMsbUJBQW1CLG1CQUFtQixHQUFHLHdDQUF3Qyx1QkFBdUIscUJBQXFCLEdBQUcsOENBQThDLGdCQUFnQixvQkFBb0IsOEJBQThCLEdBQUcsK0NBQStDLG1CQUFtQiwwQkFBMEIscUJBQXFCLHdCQUF3QixHQUFHLDZDQUE2QyxlQUFlLHdCQUF3Qix1QkFBdUIsK0NBQStDLGlCQUFpQixzQkFBc0IsdUJBQXVCLDJCQUEyQixHQUFHLDhEQUE4RCxpQkFBaUIsbUJBQW1CLEtBQUssR0FBRyxrREFBa0Qsb0JBQW9CLGFBQWEsY0FBYyx3QkFBd0IsdUJBQXVCLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsa0JBQWtCLEdBQUcsd0JBQXdCLG9CQUFvQiwyQkFBMkIsR0FBRyx5QkFBeUIsa0NBQWtDLDBCQUEwQixpQkFBaUIsb0JBQW9CLG9CQUFvQixxQkFBcUIsR0FBRywrQkFBK0IsaUJBQWlCLDhCQUE4QixHQUFHLGdEQUFnRCxnQkFBZ0Isc0JBQXNCLHdCQUF3QiwyQkFBMkIsb0JBQW9CLFlBQVksY0FBYyx3QkFBd0IscUJBQXFCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLG9CQUFvQixzQkFBc0IscUJBQXFCLEdBQUcsb0JBQW9CLGVBQWUsaUJBQWlCLEdBQUcsdUNBQXVDLGdCQUFnQix3QkFBd0Isa0JBQWtCLHdCQUF3QixHQUFHLGtEQUFrRCxrQkFBa0Isd0JBQXdCLG9CQUFvQixjQUFjLG1DQUFtQyxHQUFHLHdEQUF3RCxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLDJEQUEyRCxlQUFlLEdBQUcsb0VBQW9FLGdCQUFnQixpQkFBaUIsd0JBQXdCLGlCQUFpQixHQUFHLHlEQUF5RCx1QkFBdUIsNEJBQTRCLHFCQUFxQixHQUFHLE9BQU8sNE1BQTRNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsUUFBUSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVywwQ0FBMEMsaUVBQWlFLDRDQUE0QyxVQUFVLG1CQUFtQixpQkFBaUIsK0JBQStCLCtCQUErQiwyQkFBMkIsa0NBQWtDLGlDQUFpQyxnREFBZ0QsV0FBVyxNQUFNLFNBQVMsc0JBQXNCLEtBQUssY0FBYywyQkFBMkIsS0FBSyxnQ0FBZ0MsZ0NBQWdDLDZCQUE2QixvQkFBb0IscUJBQXFCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLG1DQUFtQyx1QkFBdUIsc0NBQXNDLHdCQUF3Qix1QkFBdUIseUJBQXlCLGdDQUFnQywwQkFBMEIsU0FBUyx1QkFBdUIsMENBQTBDLCtCQUErQiwyQkFBMkIsNkJBQTZCLDBCQUEwQixnQ0FBZ0MsNEJBQTRCLHdCQUF3QixnQ0FBZ0MsMkNBQTJDLDBCQUEwQiw2QkFBNkIsdUJBQXVCLHdCQUF3Qix5Q0FBeUMsd0NBQXdDLDZCQUE2Qix3QkFBd0IsZ0NBQWdDLCtCQUErQixvQ0FBb0MsYUFBYSw0QkFBNEIsa0NBQWtDLDhCQUE4QixhQUFhLDZCQUE2QiwrQkFBK0IsK0JBQStCLHdDQUF3QyxhQUFhLHdCQUF3QixtQ0FBbUMsaUNBQWlDLDZCQUE2QixpQ0FBaUMsb0NBQW9DLDhDQUE4QyxpQkFBaUIsYUFBYSw4QkFBOEIsK0JBQStCLHNDQUFzQyxpQ0FBaUMsb0NBQW9DLGlCQUFpQixvQ0FBb0MsNEJBQTRCLHlDQUF5QyxvQ0FBb0MsbUNBQW1DLDJEQUEyRCw4QkFBOEIsa0NBQWtDLG1DQUFtQyx1Q0FBdUMsYUFBYSx5QkFBeUIsS0FBSyxvRkFBb0YscUJBQXFCLHlCQUF5QixTQUFTLE9BQU8sNkRBQTZELHdCQUF3QixpQkFBaUIsa0JBQWtCLDRCQUE0QiwyQkFBMkIsK0JBQStCLDJCQUEyQixvQkFBb0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHlCQUF5QixzQkFBc0Isb0JBQW9CLDRCQUE0QixvQ0FBb0MsU0FBUyxtQkFBbUIsc0NBQXNDLDhCQUE4QixxQkFBcUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixzQ0FBc0MsU0FBUyxRQUFRLEtBQUsscURBQXFELG9CQUFvQiwwQkFBMEIsNEJBQTRCLGdDQUFnQyx3QkFBd0IsZ0JBQWdCLGtCQUFrQiw0QkFBNEIseUJBQXlCLHNCQUFzQiwrQkFBK0Isb0JBQW9CLHdCQUF3QiwwQkFBMEIsU0FBUyxnQkFBZ0IsOEJBQThCLDZCQUE2QixTQUFTLGVBQWUsdUJBQXVCLHlCQUF5QixTQUFTLG1DQUFtQyxzQ0FBc0Msd0JBQXdCLGdDQUFnQywwQkFBMEIsZ0NBQWdDLHVDQUF1QywwQkFBMEIsZ0NBQWdDLDRCQUE0QixzQkFBc0IsMkNBQTJDLHVCQUF1Qiw4QkFBOEIsdUNBQXVDLDJDQUEyQyxvQ0FBb0MsaUJBQWlCLHlCQUF5Qiw2QkFBNkIsYUFBYSxtQ0FBbUMsd0JBQXdCLDBCQUEwQixnQ0FBZ0MseUJBQXlCLGFBQWEsd0JBQXdCLG1DQUFtQyx3Q0FBd0MsaUNBQWlDLHFCQUFxQixhQUFhLGFBQWEsS0FBSywrR0FBK0cscUNBQXFDLGdCQUFnQixzQkFBc0IsNENBQTRDLGtCQUFrQixnQkFBZ0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsc0JBQXNCLDRCQUE0Qix3QkFBd0IsdUNBQXVDLHNDQUFzQyw0QkFBNEIsc0JBQXNCLGlDQUFpQywwQkFBMEIsbUNBQW1DLHFCQUFxQiwwQkFBMEIsd0JBQXdCLDRCQUE0QixnQ0FBZ0Msb0NBQW9DLG9DQUFvQyxzQkFBc0IsK0JBQStCLHdDQUF3Qyw0QkFBNEIsaUNBQWlDLGlCQUFpQiw0QkFBNEIsZ0NBQWdDLHNDQUFzQyw4Q0FBOEMsa0JBQWtCLGFBQWEseUJBQXlCLHFDQUFxQyxhQUFhLFVBQVUsNEJBQTRCLHlCQUF5QixpQ0FBaUMsK0JBQStCLHdCQUF3Qiw2QkFBNkIsYUFBYSxVQUFVLDBCQUEwQixrQ0FBa0Msd0JBQXdCLHlCQUF5QixvQkFBb0IsNkJBQTZCLGFBQWEsU0FBUyxLQUFLLDBEQUEwRCxzQkFBc0IsNEJBQTRCLHlCQUF5QixLQUFLLHlCQUF5Qix3QkFBd0Isc0JBQXNCLCtCQUErQixnQ0FBZ0Msb0JBQW9CLHFCQUFxQiw0QkFBNEIsb0JBQW9CLHlCQUF5QixpQ0FBaUMscUJBQXFCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLG9CQUFvQixTQUFTLHdCQUF3Qiw4QkFBOEIsdUNBQXVDLDBCQUEwQixtQ0FBbUMsd0JBQXdCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLGdDQUFnQywwQkFBMEIsNkJBQTZCLG1DQUFtQyxvQ0FBb0MsbUNBQW1DLG9DQUFvQyxpQ0FBaUMsNkJBQTZCLDRDQUE0QyxrQ0FBa0MsaUJBQWlCLDBDQUEwQywrQ0FBK0Msd0NBQXdDLHVDQUF1QyxzQkFBc0IsaUJBQWlCLHdCQUF3QiwrQkFBK0IsNENBQTRDLGlCQUFpQixrQkFBa0IsU0FBUyxtQkFBbUI7QUFDNTJoQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQThLO0FBQzlLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsb0pBQU87Ozs7QUFJd0g7QUFDaEosT0FBTyxpRUFBZSxvSkFBTyxJQUFJLDJKQUFjLEdBQUcsMkpBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZDQUE2QztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ29COzs7Ozs7O1VDeENwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDUztBQUNPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaLElBQUksMERBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzhkNmIiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL2FwcC9kb20uanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9hcHAvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QjYxMitNb25vJmZhbWlseT1MYXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEltcG9ydHMgKi8gLyogTmF2ICovXFxuLm5hdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNTQsIDE1NCwgMC45ODYpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudSBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnU6aG92ZXIgc3BhbiB7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudTphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdiAudGl0bGUtd3JhcHBlciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLm5hdiAudGl0bGUtd3JhcHBlciAudGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubmF2IC5jb21wYW55LWxvZ28ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbi5uYXYgLmNvbXBhbnktbG9nbyBpbWcge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBBc2lkZSBlbnRlcnMgdXBvbiBoYW1idXJnZXIgY2xpY2sgKi9cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5hc2lkZS1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTV2dztcXG4gIGhlaWdodDogOTB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmFzaWRlLWxlZnQuaXMtYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbn1cXG4uYXNpZGUtbGVmdCAubmF2LWxpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyBidXR0b24uYWRkLXByb2plY3Q6YmVmb3JlIHtcXG4gIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgY29udGVudDogXFxcIlxcXFxmMGZlXFxcIjtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyBociB7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4qIC5pY29uOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDIwMHZoO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcmRjb250YWluZXIge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5jYXJkY29udGFpbmVyIC5pbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtaW4td2lkdGg6IDkwJTtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAycHggNHB4IGdyZXk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1jaGVjayB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICB3aWR0aDogMS4yNXJlbTtcXG4gIGFjY2VudC1jb2xvcjogdGVhbDtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby10aXRsZSB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWVkaXQge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1lZGl0OmhvdmVyIHtcXG4gIGNvbG9yOiB0ZWFsO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1kZXNjcmlwdGlvbiB7XFxuICBtaW4td2lkdGg6IDYwJTtcXG4gIGJvcmRlcjogMnB4IHJlZCBzb2xpZDtcXG4gIG1pbi1oZWlnaHQ6IDJyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWNhdGFnb3JleSB7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAzMywgMzMsIDAuNzk1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyo2MDBweCBNUSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5hc2lkZS1sZWZ0IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbn1cXG4vKiBGaXhlZCBQb3NpdGlvbmVkIEVsZW1lbnQgKi9cXG4uYWRkVGFza0J1dHRvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbi5hZGRUYXNrQnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcbi5hZGRUYXNrQnV0dG9uIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5hZGRUYXNrQnV0dG9uIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiBGaXhlZCBwb3NpdGlvbiBNb2RhbCAgKi9cXG4ubW9kYWwtZGlhbG9nIHtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgbWluLWhlaWdodDogMTByZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5tb2RhbC1kaWFsb2cuaXMtYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb2RhbC1kaWFsb2cgaDMge1xcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGhyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWZvcm0tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZm9ybS1jb250YWluZXIgI3Rhc2stZm9ybSAjVERMYWJlbCB7XFxuICB3aWR0aDogODAlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtICN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZm9ybS1jb250YWluZXIgI3Rhc2stZm9ybSBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2Fic3RyYWN0aW9ucy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2Fic3RyYWN0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O0VBQ0EsZ0JBQUE7QUF1RVpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGVudjogdW5kZWZpbmVkO1xcbi8qIEltcG9ydHMgKi9cXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCIuL2Fic3RyYWN0aW9ucy92YXJpYWJsZXMuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9hYnN0cmFjdGlvbnMvbmF2LWJhci5zY3NzXFxcIjtcXHJcXG5cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRiYXNlRm9udDtcXHJcXG5cXHJcXG4gICAgLmljb246OmJlZm9yZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAgIH1cXHJcXG59O1xcclxcbmJvZHl7XFxyXFxuICAgIGhlaWdodDogMjAwdmg7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jYXJkY29udGFpbmVyIHtcXHJcXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAuaW5uZXJDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDJyZW07O1xcclxcbiAgICAgICAgLy9ib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTtcXHJcXG4gICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWNhcmR7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkaGVyb0JvcmRlcjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xcclxcbiAgICAgICAgbWluLWhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggNHB4IGdyZXk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuaGVyby1jaGVja3tcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgYWNjZW50LWNvbG9yOiAkdGVhbDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5oZXJvLWljb24ge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaGVyby10aXRsZSB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuaGVyby1lZGl0IHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZWFsO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmhlcm8tZGVzY3JpcHRpb257XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MCU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggcmVkIHNvbGlkO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5oZXJvLWNhdGFnb3JleXtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjUlOztcXHJcXG4gICAgICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDMzLCAzMywgMC43OTUpO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKjYwMHB4IE1RICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuYXNpZGUtbGVmdCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGaXhlZCBQb3NpdGlvbmVkIEVsZW1lbnQgKi9cXHJcXG4uYWRkVGFza0J1dHRvbntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6JHRlYWw7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGhlaWdodDoycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBGaXhlZCBwb3NpdGlvbiBNb2RhbCAgKi9cXHJcXG4ubW9kYWwtZGlhbG9ne1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgbWluLWhlaWdodDogMTByZW07XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRncmV5O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgICYuaXMtYWN0aXZle1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMyB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaHJ7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb2RhbC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgICN0YXNrLWZvcm17XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGdhcDogMnJlbTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBkYXNoZWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjVERMYWJlbHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogODAlOyAgXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdGFzay1kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogM3JlbTs7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CNjEyK01vbm8mZmFtaWx5PUxhdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuJGJhc2VGb250OidMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4kdGVhbDogdGVhbDtcXHJcXG4kc3BhbkhvdmVyOiB3aGl0ZTtcXHJcXG4kbmF2Qkdjb2xvcjogcmdiYSgxNjAsIDE1NCwgMTU0LCAwLjk4Nik7XFxyXFxuJHdoaXRlOiB3aGl0ZTtcXHJcXG4kZ3JleTogZ3JleTtcXHJcXG4kaGVyb0JvcmRlcjogZ3JleTtcXHJcXG5cXHJcXG5cIixcIi8qIE5hdiAqL1xcclxcbi5uYXYge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZCR2NvbG9yO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07O1xcclxcblxcclxcblxcclxcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDJweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6NHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzcGFuSG92ZXIgO1xcclxcbiAgICAgICAgICAgIH07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOmFjdGl2ZXtcXHJcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLnRpdGxlLXdyYXBwZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAudGl0bGUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLmNvbXBhbnktbG9nb3tcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgICAgIHdpZHRoOiA0cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcblxcclxcbiAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKiBBc2lkZSBlbnRlcnMgdXBvbiBoYW1idXJnZXIgY2xpY2sgKi9cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hc2lkZS1sZWZ0IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcblxcclxcbiAgICAmLmlzLWFjdGl2ZXtcXHJcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdi1saW5rcyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtOztcXHJcXG4gICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDo4MCU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLmFkZC1wcm9qZWN0OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXGYwZmVcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGhyIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgfTtcXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0RPTSBHcmFic1xyXG5cclxuZnVuY3Rpb24gYXNpZGVHcmFiICgpIHtcclxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZS1sZWZ0XCIpXHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51XCIpXHJcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2tHcmFiICgpIHtcclxuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tCdXR0b25cIilcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1kaWFsb2dcIilcclxuICAgICAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3SGVybyAob2JqZWN0KSB7XHJcbiAgICBsZXQge3RpdGxlLCBkYXRlLHByaW9yaXR5LGNhdGFnb3JleSxkZXNjcmlwdGlvbix9ID0gb2JqZWN0O1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlubmVyQ29udGFpbmVyXCIpXHJcbiAgICBcclxuICAgIGNvbnN0IGhlcm9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRpdlwiKTsgXHJcbiAgICAgICAgaGVyb0NhcmQuY2xhc3NMaXN0LmFkZChcImhlcm8tY2FyZFwiKTtcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBET01HcmFicyAoKSB7XHJcbiAgICBhc2lkZUdyYWIoKTtcclxuICAgIG5ld1Rhc2tHcmFiKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7RE9NR3JhYnN9OyIsIlxyXG4vL2ZhY3RvcnkgRnVuY3Rpb24gXHJcblxyXG5mdW5jdGlvbiBUYXNrb2JqZWN0ICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGFnb3JleSwgZGVzY3JpcHRpb24pIHtcclxuICByZXR1cm4geyAgXHJcbiAgICB0aXRsZSxcclxuICAgIGRhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIGNhdGFnb3JleSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RGb3JtRGF0YSAoZSkge1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5sb2coXCJmb3JtIHByZXZlbnRlZFwiKVxyXG4gICAgLy9jb2xsZWN0IHZhbHVlc1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICBjb25zdCBjYXRhZ29yZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stY2F0YWdvcmV5XCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcblxyXG4gICAgbGV0IG5ld1Rhc2sgPSBUYXNrb2JqZWN0KHRpdGxlLCBkYXRlLCBwcmlvcml0eSxjYXRhZ29yZXksZGVzY3JpcHRpb24pXHJcbiAgICByZXR1cm4gY29uc29sZS5sb2cobmV3VGFzayk7XHJcblxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RGb3JtIChlKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpO1xyXG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb2xsZWN0Rm9ybURhdGEoZSk7XHJcbiAgICAgIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQge2NvbGxlY3RGb3JtfVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgRE9NR3JhYnMgfSBmcm9tIFwiLi9hcHAvZG9tXCI7XHJcbmltcG9ydCB7IGNvbGxlY3RGb3JtIH0gZnJvbSBcIi4vYXBwL2ZhY3RvcnlcIjtcclxuXHJcblxyXG5cclxuY29uc3QgRE9NID0gZnVuY3Rpb24gZG9tRXZlbnRzIChlKSB7XHJcbiAgICBET01HcmFicyhlKVxyXG4gICAgY29sbGVjdEZvcm0oZSlcclxufVxyXG5cclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gRE9NKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9