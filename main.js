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
___CSS_LOADER_EXPORT___.push([module.id, "/* Imports */\n.hero-catagorey #high {\n  background-color: Red;\n  color: white;\n}\n\n.hero-catagorey #medium {\n  background-color: orangered;\n  color: white;\n}\n\n.hero-catagorey #high {\n  background-color: green;\n}\n\n/* Nav */\n.nav {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: rgba(160, 154, 154, 0.986);\n  align-items: center;\n  height: 4rem;\n}\n.nav .hamburger-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 2.5rem;\n  height: 4rem;\n  padding: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  background-color: teal;\n}\n.nav .hamburger-menu span {\n  display: block;\n  border: 2px solid black;\n  width: 100%;\n  transition: 0.4s;\n}\n.nav .hamburger-menu:hover {\n  cursor: pointer;\n}\n.nav .hamburger-menu:hover span {\n  border-color: white;\n}\n.nav .hamburger-menu:active {\n  border-color: white;\n}\n.nav .title-wrapper {\n  margin: auto;\n  justify-self: center;\n  align-self: center;\n}\n.nav .title-wrapper .title {\n  color: white;\n}\n.nav .company-logo {\n  border: 2px solid red;\n  width: 4rem;\n  height: 4rem;\n}\n.nav .company-logo img {\n  color: black;\n}\n\n/* Aside enters upon hamburger click */\n.main {\n  display: flex;\n  flex-direction: row;\n  transition: 0.4s;\n}\n\n.aside-left {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  width: 15vw;\n  height: 90vh;\n  align-items: center;\n  left: -100%;\n  transition: 0.4s;\n  background-color: white;\n  z-index: 100;\n}\n.aside-left.is-active {\n  display: flex;\n  position: fixed;\n  left: 0;\n}\n.aside-left .nav-links {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 1rem;\n  align-items: center;\n}\n.aside-left .nav-links button {\n  cursor: pointer;\n  width: 80%;\n  border: none;\n  min-height: 1.5rem;\n  height: fit-content;\n  border-radius: 3px;\n  font-weight: bolder;\n  transition: 0.2s;\n}\n.aside-left .nav-links button:hover {\n  background-color: teal;\n  color: white;\n}\n.aside-left .nav-links button.add-project:before {\n  font: var(--fa-font-solid);\n  content: \"\\f0fe\";\n  margin-right: 1rem;\n}\n.aside-left .nav-links hr {\n  width: 80%;\n  border: 1px solid black;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif;\n}\n* .icon::before {\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  height: 200vh;\n}\n\n.app {\n  position: relative;\n}\n\n.cardcontainer {\n  justify-self: center;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n}\n.cardcontainer .innerContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 80%;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  padding: 1rem;\n}\n.cardcontainer .hero-card {\n  border: 2px solid grey;\n  border-radius: 5px;\n  min-width: 90%;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  transition: 0.4s;\n  z-index: 1;\n}\n.cardcontainer .hero-card:hover {\n  box-shadow: 2px 4px grey;\n  transform: scale(1.025);\n}\n.cardcontainer .hero-card .hero-check {\n  height: 1.25rem;\n  width: 1.25rem;\n  accent-color: teal;\n}\n.cardcontainer .hero-card .hero-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n}\n.cardcontainer .hero-card .hero-title {\n  max-width: 50%;\n  margin-left: 0;\n}\n.cardcontainer .hero-card .hero-edit {\n  font-size: 1.25rem;\n  transition: 0.4s;\n}\n.cardcontainer .hero-card .hero-edit:hover {\n  color: teal;\n  cursor: pointer;\n  transform: rotate(180deg);\n}\n.cardcontainer .hero-card .hero-description {\n  min-width: 60%;\n  min-height: 2rem;\n  height: fit-content;\n}\n.cardcontainer .hero-card .hero-catagorey {\n  width: 25%;\n  height: fit-content;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\n/*600px MQ */\n@media only screen and (max-width: 600px) {\n  .aside-left {\n    width: 100vw;\n  }\n}\n/* Fixed Positioned Element */\n.addTaskButton {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-right: 5rem;\n  background-color: teal;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.4s;\n  z-index: 1000;\n}\n.addTaskButton:hover {\n  cursor: pointer;\n  background-color: grey;\n}\n.addTaskButton button {\n  background-color: transparent;\n  text-decoration: none;\n  border: none;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: 0.4s;\n}\n.addTaskButton button:hover {\n  color: white;\n  transform: rotate(180deg);\n}\n\n/* Fixed position Modal  */\n.modal-dialog {\n  width: 60vw;\n  min-height: 10rem;\n  height: fit-content;\n  border: 2px solid grey;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-left: 15%;\n  display: none;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.modal-dialog.is-active {\n  display: flex;\n}\n.modal-dialog h3 {\n  margin-left: 3rem;\n  font-weight: 600;\n}\n.modal-dialog hr {\n  width: 90%;\n  margin: auto;\n}\n.modal-dialog .modal-form-container {\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n}\n.modal-dialog .modal-form-container #task-form {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: space-between;\n}\n.modal-dialog .modal-form-container #task-form label {\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n}\n.modal-dialog .modal-form-container #task-form #TDLabel {\n  width: 80%;\n}\n.modal-dialog .modal-form-container #task-form #task-description {\n  width: 100%;\n  height: 3rem;\n  margin-bottom: 1rem;\n  resize: none;\n}\n.modal-dialog .modal-form-container #task-form button {\n  align-self: center;\n  justify-content: center;\n  padding: 0.25rem;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss","webpack://./src/style/abstractions/variables.scss","webpack://./src/style/abstractions/nav-bar.scss"],"names":[],"mappings":"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","sourcesContent":["$env: undefined;\n/* Imports */\r\n\r\n@import \"./abstractions/variables.scss\";\r\n@import \"./abstractions/nav-bar.scss\";\r\n\r\n*{\r\n    padding: 0;\r\n    margin:0;\r\n    box-sizing: border-box;\r\n    font-family: $baseFont;\r\n\r\n    .icon::before {\r\n        display: inline-block;\r\n        text-rendering: auto;\r\n        -webkit-font-smoothing: antialiased;\r\n      }\r\n};\r\nbody{\r\n    height: 200vh;\r\n}\r\n\r\n.app {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.cardcontainer {\r\n    //border: 2px solid red;\r\n    justify-self: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 1rem;\r\n\r\n    .innerContainer {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2rem;;\r\n        //border: 2px dashed blue;\r\n        height: 80%;\r\n        width: 80%;\r\n        margin: auto;\r\n        align-items: center;\r\n        padding: 1rem;\r\n    }\r\n\r\n    .hero-card{\r\n        border: 2px solid $heroBorder;\r\n        border-radius: 5px;\r\n        min-width: 90%;\r\n        min-height: 4rem;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        gap: 0.5rem;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 1rem;\r\n        transition: 0.4s;\r\n        z-index: 1;\r\n\r\n        &:hover{\r\n            box-shadow: 2px 4px grey;\r\n            transform: scale(1.025);\r\n            \r\n        }\r\n        .hero-check{\r\n            height: 1.25rem;\r\n            width: 1.25rem;\r\n            accent-color: $teal;\r\n        }\r\n\r\n        .hero-icon {\r\n            font-size: 1.5rem;\r\n            width: 1.5rem;\r\n        }\r\n\r\n        .hero-title {\r\n            max-width: 50%;\r\n            margin-left: 0;\r\n            //border: 2px solid red;\r\n        }\r\n        .hero-edit {\r\n            font-size: 1.25rem;\r\n            transition: 0.4s;\r\n\r\n            &:hover {\r\n                color: $teal;\r\n                cursor: pointer;\r\n                transform: rotate(180deg);\r\n            }\r\n        }\r\n        .hero-description{\r\n            min-width: 60%;\r\n            min-height: 2rem;\r\n            height: fit-content;\r\n\r\n        }\r\n\r\n\r\n        .hero-catagorey{\r\n            width: 25%;;\r\n           //border: 2px solid black;\r\n            height: fit-content;\r\n            text-align: center;\r\n            font-weight: bold;\r\n            border-radius: 3px;\r\n            vertical-align: middle;\r\n        }\r\n\r\n        \r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*600px MQ */\r\n@media only screen and (max-width: 600px) {\r\n    .aside-left {\r\n        width: 100vw;\r\n    }\r\n  }\r\n\r\n\r\n/* Fixed Positioned Element */\r\n.addTaskButton{\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin-bottom: 5rem;\r\n    margin-right: 5rem;\r\n    background-color:$teal;\r\n    border-radius: 50%;\r\n    width: 2rem;\r\n    height:2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: 0.4s;\r\n    z-index: 1000;\r\n\r\n    &:hover{\r\n        cursor: pointer;\r\n        background-color: $grey;\r\n    }\r\n\r\n   button {\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n\r\n    &:hover{\r\n        color: $white;\r\n        transform: rotate(180deg);\r\n    }\r\n   }\r\n}\r\n\r\n/* Fixed position Modal  */\r\n.modal-dialog{\r\n    width: 60vw;\r\n    min-height: 10rem;\r\n    height: fit-content;\r\n    border: 2px solid $grey;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    margin-bottom: 5rem;\r\n    margin-left: 15%;\r\n    display: none;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n\r\n    &.is-active{\r\n        display: flex;\r\n    }\r\n\r\n    h3 {\r\n        margin-left: 3rem;\r\n        font-weight: 600;\r\n    }\r\n\r\n    hr{\r\n        width: 90%;\r\n        margin: auto;\r\n    }\r\n\r\n    .modal-form-container {\r\n        //border: 2px solid black;\r\n        width: 100%;\r\n        height: fit-content;\r\n        display: flex;\r\n        flex-direction: row;\r\n        \r\n\r\n        #task-form{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        gap: 2rem;\r\n        justify-content: space-between;\r\n\r\n        label {\r\n            display: flex;\r\n            flex-direction: column;\r\n            //border: 2px dashed black;\r\n            height: fit-content;\r\n            }\r\n\r\n        #TDLabel{\r\n            width: 80%;  \r\n        }\r\n\r\n        #task-description {\r\n        width: 100%;\r\n        height: 3rem;;\r\n        margin-bottom: 1rem;\r\n        resize: none;\r\n        }\r\n\r\n        button {\r\n            align-self: center;\r\n            justify-content: center;\r\n            padding: 0.25rem;\r\n\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\n","@import url('https://fonts.googleapis.com/css2?family=B612+Mono&family=Lato:wght@300&display=swap');\r\n\r\n$baseFont:'Lato', sans-serif;\r\n$teal: teal;\r\n$spanHover: white;\r\n$navBGcolor: rgba(160, 154, 154, 0.986);\r\n$white: white;\r\n$grey: grey;\r\n$heroBorder: grey;\r\n\r\n\r\n.hero-catagorey #high { \r\n    background-color: Red;\r\n    color: $white;\r\n}\r\n\r\n.hero-catagorey #medium { \r\n    background-color: orangered;\r\n    color: $white;\r\n}\r\n\r\n.hero-catagorey #high { \r\n    background-color: green;\r\n}\r\n\r\n","/* Nav */\r\n.nav {\r\n    position:relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    background-color: $navBGcolor;\r\n    align-items: center;\r\n    height: 4rem;;\r\n\r\n\r\n    .hamburger-menu {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2px;\r\n        width: 2.5rem;\r\n        height:4rem;\r\n        padding: 0.5rem;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: $teal;\r\n\r\n        span {\r\n            display: block;\r\n            border: 2px solid black;\r\n            width: 100%;\r\n            transition: 0.4s;\r\n\r\n        }\r\n\r\n\r\n        &:hover{\r\n            cursor: pointer;\r\n            \r\n            span {\r\n                border-color: $spanHover ;\r\n            };\r\n        }\r\n\r\n        &:active{\r\n            border-color: $white;\r\n        }\r\n    };\r\n\r\n    .title-wrapper {\r\n        margin: auto;\r\n        justify-self: center;\r\n        align-self: center;\r\n\r\n        .title {\r\n            color: white;\r\n        }\r\n    };\r\n\r\n    .company-logo{\r\n        border: 2px solid red;\r\n        width: 4rem;\r\n        height: 4rem;\r\n\r\n        img{\r\n            color: black;\r\n        }\r\n    }\r\n}\r\n/* Aside enters upon hamburger click */\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: row;\r\n    transition: 0.4s;\r\n}\r\n\r\n\r\n.aside-left {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid black;\r\n    width: 15vw;\r\n    height: 90vh;\r\n    align-items: center;\r\n    left: -100%;\r\n    transition: 0.4s;\r\n    background-color: $white;\r\n    z-index: 100;\r\n\r\n    &.is-active{\r\n        display:flex;\r\n        position: fixed;\r\n        left: 0;\r\n    }\r\n\r\n    .nav-links {\r\n        margin-top: 2rem;;\r\n        //border: 2px solid black;;\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        gap: 1rem;\r\n        align-items: center;\r\n\r\n\r\n        button {\r\n            cursor: pointer;\r\n            width:80%;\r\n            border: none;\r\n            min-height: 1.5rem;\r\n            height: fit-content;\r\n            border-radius: 3px;\r\n            font-weight: bolder;\r\n            transition: 0.2s;\r\n\r\n            &:hover {\r\n                background-color: $teal;\r\n                color: $white;\r\n            }\r\n\r\n            &.add-project:before {\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f0fe\";\r\n                margin-right: 1rem;\r\n                };\r\n            }\r\n\r\n            hr {\r\n                width: 80%;\r\n                border: 1px solid black;\r\n            }\r\n\r\n        };\r\n\r\n}"],"sourceRoot":""}]);
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
            heroCatagorey.setAttribute("id", `${catagorey}`)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLDBDQUEw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QUFDQTtBQUNBO0FBQ0E7QUFDb0I7Ozs7Ozs7VUNqRHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNTO0FBQ087QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSwwREFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3M/OGQ2YiIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvYXBwL2RvbS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL2FwcC9mYWN0b3J5LmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CNjEyK01vbm8mZmFtaWx5PUxhdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSW1wb3J0cyAqL1xcbi5oZXJvLWNhdGFnb3JleSAjaGlnaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBSZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZXJvLWNhdGFnb3JleSAjbWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlcm8tY2F0YWdvcmV5ICNoaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vKiBOYXYgKi9cXG4ubmF2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE1NCwgMTU0LCAwLjk4Nik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudTpob3ZlciBzcGFuIHtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG4ubmF2IC50aXRsZS13cmFwcGVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ubmF2IC50aXRsZS13cmFwcGVyIC50aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5uYXYgLmNvbXBhbnktbG9nbyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuLm5hdiAuY29tcGFueS1sb2dvIGltZyB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEFzaWRlIGVudGVycyB1cG9uIGhhbWJ1cmdlciBjbGljayAqL1xcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLmFzaWRlLWxlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uYXNpZGUtbGVmdC5pcy1hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5hc2lkZS1sZWZ0IC5uYXYtbGlua3Mge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYXNpZGUtbGVmdCAubmF2LWxpbmtzIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWluLWhlaWdodDogMS41cmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4uYXNpZGUtbGVmdCAubmF2LWxpbmtzIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYXNpZGUtbGVmdCAubmF2LWxpbmtzIGJ1dHRvbi5hZGQtcHJvamVjdDpiZWZvcmUge1xcbiAgZm9udDogdmFyKC0tZmEtZm9udC1zb2xpZCk7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZmVcXFwiO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYXNpZGUtbGVmdCAubmF2LWxpbmtzIGhyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbiogLmljb246OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMjAwdmg7XFxufVxcblxcbi5hcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZGNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmNhcmRjb250YWluZXIgLmlubmVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1pbi13aWR0aDogOTAlO1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDJweCA0cHggZ3JleTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWNoZWNrIHtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbiAgYWNjZW50LWNvbG9yOiB0ZWFsO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWljb24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLXRpdGxlIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tZWRpdCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWVkaXQ6aG92ZXIge1xcbiAgY29sb3I6IHRlYWw7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaGVyby1jYXJkIC5oZXJvLWRlc2NyaXB0aW9uIHtcXG4gIG1pbi13aWR0aDogNjAlO1xcbiAgbWluLWhlaWdodDogMnJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tY2F0YWdvcmV5IHtcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKjYwMHB4IE1RICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmFzaWRlLWxlZnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxufVxcbi8qIEZpeGVkIFBvc2l0aW9uZWQgRWxlbWVudCAqL1xcbi5hZGRUYXNrQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuLmFkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLmFkZFRhc2tCdXR0b24gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmFkZFRhc2tCdXR0b24gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi8qIEZpeGVkIHBvc2l0aW9uIE1vZGFsICAqL1xcbi5tb2RhbC1kaWFsb2cge1xcbiAgd2lkdGg6IDYwdnc7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLm1vZGFsLWRpYWxvZy5pcy1hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsLWRpYWxvZyBoMyB7XFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tb2RhbC1kaWFsb2cgaHIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZm9ybS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWZvcm0tY29udGFpbmVyICN0YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWZvcm0tY29udGFpbmVyICN0YXNrLWZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtICNURExhYmVsIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWZvcm0tY29udGFpbmVyICN0YXNrLWZvcm0gI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1mb3JtLWNvbnRhaW5lciAjdGFzay1mb3JtIGJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvYWJzdHJhY3Rpb25zL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvYWJzdHJhY3Rpb25zL25hdi1iYXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxZQUFBO0FDVUE7RUFDSSxxQkFBQTtFQUNBLFlBUEk7QUREUjs7QUNXQTtF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dW5kZWZpbmVkO1xcbi8qIEltcG9ydHMgKi9cXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCIuL2Fic3RyYWN0aW9ucy92YXJpYWJsZXMuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9hYnN0cmFjdGlvbnMvbmF2LWJhci5zY3NzXFxcIjtcXHJcXG5cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRiYXNlRm9udDtcXHJcXG5cXHJcXG4gICAgLmljb246OmJlZm9yZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAgIH1cXHJcXG59O1xcclxcbmJvZHl7XFxyXFxuICAgIGhlaWdodDogMjAwdmg7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jYXJkY29udGFpbmVyIHtcXHJcXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAuaW5uZXJDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDJyZW07O1xcclxcbiAgICAgICAgLy9ib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTtcXHJcXG4gICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWNhcmR7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkaGVyb0JvcmRlcjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xcclxcbiAgICAgICAgbWluLWhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggNHB4IGdyZXk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuaGVyby1jaGVja3tcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgYWNjZW50LWNvbG9yOiAkdGVhbDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5oZXJvLWljb24ge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaGVyby10aXRsZSB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuaGVyby1lZGl0IHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZWFsO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmhlcm8tZGVzY3JpcHRpb257XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MCU7XFxyXFxuICAgICAgICAgICAgbWluLWhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgLmhlcm8tY2F0YWdvcmV5e1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7O1xcclxcbiAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qNjAwcHggTVEgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5hc2lkZS1sZWZ0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIEZpeGVkIFBvc2l0aW9uZWQgRWxlbWVudCAqL1xcclxcbi5hZGRUYXNrQnV0dG9ue1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjokdGVhbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OjJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcblxcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbi8qIEZpeGVkIHBvc2l0aW9uIE1vZGFsICAqL1xcclxcbi5tb2RhbC1kaWFsb2d7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJGdyZXk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgJi5pcy1hY3RpdmV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgzIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBocntcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vZGFsLWZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIFxcclxcblxcclxcbiAgICAgICAgI3Rhc2stZm9ybXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAvL2JvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNURExhYmVse1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7ICBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcmVtOztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcblxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUI2MTIrTW9ubyZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4kYmFzZUZvbnQ6J0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiR0ZWFsOiB0ZWFsO1xcclxcbiRzcGFuSG92ZXI6IHdoaXRlO1xcclxcbiRuYXZCR2NvbG9yOiByZ2JhKDE2MCwgMTU0LCAxNTQsIDAuOTg2KTtcXHJcXG4kd2hpdGU6IHdoaXRlO1xcclxcbiRncmV5OiBncmV5O1xcclxcbiRoZXJvQm9yZGVyOiBncmV5O1xcclxcblxcclxcblxcclxcbi5oZXJvLWNhdGFnb3JleSAjaGlnaCB7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSZWQ7XFxyXFxuICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNhdGFnb3JleSAjbWVkaXVtIHsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgY29sb3I6ICR3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tY2F0YWdvcmV5ICNoaWdoIHsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cIixcIi8qIE5hdiAqL1xcclxcbi5uYXYge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZCR2NvbG9yO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07O1xcclxcblxcclxcblxcclxcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDJweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6NHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzcGFuSG92ZXIgO1xcclxcbiAgICAgICAgICAgIH07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOmFjdGl2ZXtcXHJcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLnRpdGxlLXdyYXBwZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAudGl0bGUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLmNvbXBhbnktbG9nb3tcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgICAgIHdpZHRoOiA0cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcblxcclxcbiAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKiBBc2lkZSBlbnRlcnMgdXBvbiBoYW1idXJnZXIgY2xpY2sgKi9cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hc2lkZS1sZWZ0IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcblxcclxcbiAgICAmLmlzLWFjdGl2ZXtcXHJcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdi1saW5rcyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtOztcXHJcXG4gICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDo4MCU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLmFkZC1wcm9qZWN0OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXGYwZmVcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIH07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGhyIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgfTtcXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0RPTSBHcmFic1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFzaWRlICgpIHtcclxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZS1sZWZ0XCIpXHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51XCIpXHJcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JtICgpIHsgXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZGlhbG9nXCIpO1xyXG4gICAgcmV0dXJuIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbn1cclxuXHJcbiBcclxuZnVuY3Rpb24gbmV3VGFza0dyYWIgKCkgeyAvLyBkaXNwbGF5cyBmb3JtIHVwb24gcGx1cyBzeW1ib2wgY2xpY2tcclxuICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tCdXR0b25cIilcclxuICAgICAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuLyogQ2FsbGVkIHRvIGNyZWF0ZSBhbmQgcmUtY3JlYXRlIGFsbCBoZXJvIGVsZW1lbnRzICovXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0hlcm8gKG9iamVjdCkge1xyXG4gICAgbGV0IHt0aXRsZSwgZGF0ZSxwcmlvcml0eSxjYXRhZ29yZXksZGVzY3JpcHRpb24sfSA9IG9iamVjdDtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5uZXJDb250YWluZXJcIilcclxuICAgIFxyXG4gICAgY29uc3QgaGVyb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRGl2XCIpOyBcclxuICAgICAgICBoZXJvQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaGVyby1jYXJkXCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0NhcmQpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBoZXJvQ2hlY2suY2xhc3NMaXN0LmFkZChcImhlcm8taWNvblwiKVxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbGZvckNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICAgICAgICAgICAgICBsYWJlbGZvckNoZWNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lucHV0LmNsYXNzTGlzdC5hZGQoXCJoZXJvLWNoZWNrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIGxhYmVsZm9yQ2hlY2suYXBwZW5kQ2hpbGQoY2hlY2tJbnB1dClcclxuICAgICAgICBoZXJvQ2hlY2suYXBwZW5kQ2hpbGQobGFiZWxmb3JDaGVjaylcclxuICAgICAgICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvQ2hlY2spO1xyXG5cclxuXHJcbiAgICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgICAgICBoZXJvVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlcm8tZGF0ZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgICAgIHRpdGxlVGV4dC5pbm5lclRleHQgPSBgJHt0aXRsZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlcm9UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvVGl0bGUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZXJvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBoZXJvRGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1kYXRlXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgICAgIGRhdGVUZXh0LmlubmVyVGV4dCA9IGBEdWUgRGF0ZToke2RhdGV9YDtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvRGF0ZS5hcHBlbmRDaGlsZChkYXRlVGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0RhdGUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZXJvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaGVyb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJoZXJvLXByaW9yaXR5XCIpO1xyXG4gICAgICAgICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eVRleHQuaW5uZXJUZXh0ID0gYCR7cHJpb3JpdHl9YDtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvUHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvUHJpb3JpdHkpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9FZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBoZXJvRWRpdEljb24uY2xhc3NMaXN0LmFkZChcImhlcm8tZWRpdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpXHJcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IFwiZmEtc29saWQgZmEtZ2VhclwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGhlcm9FZGl0SWNvbi5hcHBlbmRDaGlsZChpY29uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZXJvQ2FyZC5hcHBlbmRDaGlsZChoZXJvRWRpdEljb24pO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZXJvRGVzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgICAgICBoZXJvRGVzY3JpcHQuY2xhc3NOYW1lID0gXCJoZXJvLWRlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRUZXh0LmlubmVyVGV4dD0gYCR7ZGVzY3JpcHRpb259YDtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvRGVzY3JpcHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0Rlc2NyaXB0KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3QgaGVyb0NhdGFnb3JleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaGVyb0NhdGFnb3JleS5jbGFzc05hbWUgPSBcImhlcm8tY2F0YWdvcmV5XCI7XHJcbiAgICAgICAgICAgIGhlcm9DYXRhZ29yZXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Y2F0YWdvcmV5fWApXHJcbiAgICAgICAgICAgY29uc3QgY2F0YWdvcmV5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgICAgICBjYXRhZ29yZXlUZXh0LmlubmVyVGV4dCA9IGAke2NhdGFnb3JleX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlcm9DYXRhZ29yZXkuYXBwZW5kQ2hpbGQoY2F0YWdvcmV5VGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb0NhcmQuYXBwZW5kQ2hpbGQoaGVyb0NhdGFnb3JleSk7XHJcbiBcclxuICAgIGNvbnNvbGUubG9nKFwidGFza0RPTWNyZWF0ZWRcIik7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhckZvcm0gKCkgeyBcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZm9ybVwiKVxyXG4gICAgZm9ybS5yZXNldCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERPTUdyYWJzICgpIHtcclxuICAgIGRpc3BsYXlBc2lkZSgpO1xyXG4gICAgbmV3VGFza0dyYWIoKTtcclxufVxyXG5cclxuZXhwb3J0IHtET01HcmFicywgY3JlYXRlTmV3SGVybywgY2xlYXJGb3JtLCBkaXNwbGF5Rm9ybX07IiwiLy9JbXBvcnRzXHJcbiBcclxuaW1wb3J0IHsgY3JlYXRlTmV3SGVybywgY2xlYXJGb3JtLCBkaXNwbGF5Rm9ybSB9IGZyb20gXCIuL2RvbVwiOyAvL0NhbGxlZCBkdXJpbmcgdGhlIGNvbGxlY3Rmb3JtRGF0YVxyXG5cclxuXHJcbi8vZmFjdG9yeSBGdW5jdGlvblxyXG5mdW5jdGlvbiBUYXNrb2JqZWN0ICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNhdGFnb3JleSwgZGVzY3JpcHRpb24pIHtcclxuICByZXR1cm4geyAgXHJcbiAgICB0aXRsZSxcclxuICAgIGRhdGUsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIGNhdGFnb3JleSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RGb3JtRGF0YSAoZSkge1xyXG5cclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5sb2coXCJmb3JtIHByZXZlbnRlZFwiKVxyXG4gICAgLy9jb2xsZWN0IHZhbHVlc1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICBjb25zdCBjYXRhZ29yZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stY2F0YWdvcmV5XCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcblxyXG4gICAgbGV0IG5ld1Rhc2sgPSBUYXNrb2JqZWN0KHRpdGxlLCBkYXRlLCBwcmlvcml0eSxjYXRhZ29yZXksZGVzY3JpcHRpb24pXHJcblxyXG4gICAgcmV0dXJuIG5ld1Rhc2tcclxuXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gY29sbGVjdEZvcm0gKGUpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XHJcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNyZWF0ZU5ld0hlcm8oY29sbGVjdEZvcm1EYXRhKGUpKVxyXG4gICAgICAgIGRpc3BsYXlGb3JtKClcclxuICAgICAgICByZXR1cm4gY2xlYXJGb3JtKCkgIFxyXG4gICAgICB9KTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtjb2xsZWN0Rm9ybX1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IERPTUdyYWJzIH0gZnJvbSBcIi4vYXBwL2RvbVwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0Rm9ybSB9IGZyb20gXCIuL2FwcC9mYWN0b3J5XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IERPTSA9IGZ1bmN0aW9uIGRvbUV2ZW50cyAoZSkge1xyXG4gICAgRE9NR3JhYnMoZSlcclxuICAgIGNvbGxlY3RGb3JtKGUpXHJcbn1cclxuXHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9IERPTSgpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==