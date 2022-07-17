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
___CSS_LOADER_EXPORT___.push([module.id, "/* Imports */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif;\n}\n* .icon::before {\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  height: 200vh;\n}\n\n.app {\n  position: relative;\n}\n\n/* Nav */\n.nav {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: rgba(160, 154, 154, 0.986);\n  align-items: center;\n  height: 4rem;\n}\n.nav .hamburger-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 2.5rem;\n  height: 4rem;\n  padding: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  background-color: teal;\n}\n.nav .hamburger-menu span {\n  display: block;\n  border: 2px solid black;\n  width: 100%;\n  transition: 0.4s;\n}\n.nav .hamburger-menu:hover {\n  cursor: pointer;\n}\n.nav .hamburger-menu:hover span {\n  border-color: white;\n}\n.nav .hamburger-menu:active {\n  border-color: white;\n}\n.nav .title-wrapper {\n  margin: auto;\n  justify-self: center;\n  align-self: center;\n}\n.nav .title-wrapper .title {\n  color: white;\n}\n\n/* Aside enters upon hamburger click */\n.main {\n  display: flex;\n  flex-direction: row;\n  transition: 0.4s;\n}\n\n.aside-left {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  width: 15vw;\n  height: 90vh;\n  align-items: center;\n  left: -100%;\n  transition: 0.4s;\n  background-color: white;\n  z-index: 100;\n}\n.aside-left.is-active {\n  display: flex;\n  position: fixed;\n  left: 0;\n}\n.aside-left .nav-links {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 1rem;\n  align-items: center;\n}\n.aside-left .nav-links button {\n  cursor: pointer;\n  width: 80%;\n  border: none;\n  min-height: 1.5rem;\n  height: fit-content;\n  border-radius: 3px;\n  font-weight: bolder;\n  transition: 0.2s;\n}\n.aside-left .nav-links button:hover {\n  background-color: teal;\n  color: white;\n}\n.aside-left .nav-links button.add-project:before {\n  font: var(--fa-font-solid);\n  content: \"\\f0fe\";\n  margin-right: 1rem;\n}\n.aside-left .nav-links hr {\n  width: 80%;\n  border: 1px solid black;\n}\n\n.cardcontainer {\n  justify-self: center;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n}\n.cardcontainer .innerContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  height: 80%;\n  width: 80%;\n  margin: auto;\n  align-items: center;\n  padding: 1rem;\n}\n.cardcontainer .hero-card {\n  border: 2px solid grey;\n  border-radius: 5px;\n  min-width: 90%;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  transition: 0.4s;\n  z-index: 1;\n}\n.cardcontainer .hero-card:hover {\n  box-shadow: 2px 4px grey;\n  transform: scale(1.025);\n}\n.cardcontainer .hero-card .hero-check {\n  height: 1.25rem;\n  width: 1.25rem;\n  accent-color: teal;\n}\n.cardcontainer .hero-card .hero-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n}\n.cardcontainer .hero-card .hero-title {\n  max-width: 50%;\n  margin-left: 0;\n}\n.cardcontainer .hero-card .hero-edit {\n  font-size: 1.25rem;\n  transition: 0.4s;\n}\n.cardcontainer .hero-card .hero-edit:hover {\n  color: teal;\n  cursor: pointer;\n  transform: rotate(180deg);\n}\n.cardcontainer .hero-card .hero-catagorey {\n  width: 100%;\n  height: fit-content;\n  text-align: center;\n  background-color: rgba(252, 33, 33, 0.795);\n  color: white;\n  font-weight: bold;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\n/*600px MQ */\n@media only screen and (max-width: 600px) {\n  .aside-left {\n    width: 100vw;\n  }\n}\n/* Fixed Positioned Element */\n.addTaskButton {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-right: 5rem;\n  background-color: teal;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.4s;\n}\n.addTaskButton:hover {\n  cursor: pointer;\n  background-color: grey;\n}\n.addTaskButton button {\n  background-color: transparent;\n  text-decoration: none;\n  border: none;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: 0.4s;\n}\n.addTaskButton button:hover {\n  color: white;\n  transform: rotate(180deg);\n}\n\n/* Fixed position Modal  */\n.modal-dialog {\n  width: 70vw;\n  min-height: 10rem;\n  border: 2px solid blue;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 5rem;\n  margin-left: 15%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.modal-dialog h3 {\n  margin-left: 3rem;\n  font-weight: 600;\n}\n.modal-dialog hr {\n  width: 90%;\n  margin: auto;\n}\n.modal-dialog .modal-form {\n  border: 2px solid black;\n  width: 100%;\n  height: 8rem;\n  display: flex;\n  flex-direction: row;\n}\n.modal-dialog .modal-form #task-form {\n  display: flex;\n  flex-direction: row;\n}\n.modal-dialog .modal-form #task-form label {\n  display: flex;\n  flex-direction: column;\n  border: 2px dashed black;\n  height: fit-content;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss","webpack://./src/style/abstractions/variables.scss"],"names":[],"mappings":"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","sourcesContent":["$env: undefined;\n/* Imports */\r\n\r\n@import \"./abstractions/variables.scss\";\r\n\r\n*{\r\n    padding: 0;\r\n    margin:0;\r\n    box-sizing: border-box;\r\n    font-family: $baseFont;\r\n\r\n    .icon::before {\r\n        display: inline-block;\r\n        text-rendering: auto;\r\n        -webkit-font-smoothing: antialiased;\r\n      }\r\n};\r\nbody{\r\n    height: 200vh;\r\n}\r\n\r\n.app {\r\n    position: relative;\r\n}\r\n\r\n\r\n/* Nav */\r\n.nav {\r\n    position:relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    background-color: $navBGcolor;\r\n    align-items: center;\r\n    height: 4rem;;\r\n\r\n\r\n    .hamburger-menu {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2px;\r\n        width: 2.5rem;\r\n        height:4rem;\r\n        padding: 0.5rem;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: $teal;\r\n\r\n        span {\r\n            display: block;\r\n            border: 2px solid black;\r\n            width: 100%;\r\n            transition: 0.4s;\r\n\r\n        }\r\n\r\n\r\n        &:hover{\r\n            cursor: pointer;\r\n            \r\n            span {\r\n                border-color: $spanHover ;\r\n            };\r\n        }\r\n\r\n        &:active{\r\n            border-color: $white;\r\n        }\r\n    };\r\n\r\n    .title-wrapper {\r\n        margin: auto;\r\n        justify-self: center;\r\n        align-self: center;\r\n\r\n        .title {\r\n            color: white;\r\n        }\r\n    };\r\n\r\n}\r\n/* Aside enters upon hamburger click */\r\n\r\n.main {\r\n    display: flex;\r\n    flex-direction: row;\r\n    transition: 0.4s;\r\n}\r\n\r\n\r\n.aside-left {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid black;\r\n    width: 15vw;\r\n    height: 90vh;\r\n    align-items: center;\r\n    left: -100%;\r\n    transition: 0.4s;\r\n    background-color: $white;\r\n    z-index: 100;\r\n\r\n    &.is-active{\r\n        display:flex;\r\n        position: fixed;\r\n        left: 0;\r\n    }\r\n\r\n    .nav-links {\r\n        margin-top: 2rem;;\r\n        //border: 2px solid black;;\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        gap: 1rem;\r\n        align-items: center;\r\n\r\n\r\n        button {\r\n            cursor: pointer;\r\n            width:80%;\r\n            border: none;\r\n            min-height: 1.5rem;\r\n            height: fit-content;\r\n            border-radius: 3px;\r\n            font-weight: bolder;\r\n            transition: 0.2s;\r\n\r\n            &:hover {\r\n                background-color: $teal;\r\n                color: $white;\r\n            }\r\n\r\n            &.add-project:before {\r\n                font: var(--fa-font-solid);\r\n                content: \"\\f0fe\";\r\n                margin-right: 1rem;\r\n                };\r\n            }\r\n\r\n            hr {\r\n                width: 80%;\r\n                border: 1px solid black;\r\n            }\r\n\r\n        };\r\n\r\n}\r\n\r\n.cardcontainer {\r\n    //border: 2px solid red;\r\n    justify-self: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 1rem;\r\n\r\n    .innerContainer {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2rem;;\r\n        //border: 2px dashed blue;\r\n        height: 80%;\r\n        width: 80%;\r\n        margin: auto;\r\n        align-items: center;\r\n        padding: 1rem;\r\n    }\r\n\r\n    .hero-card{\r\n        border: 2px solid $heroBorder;\r\n        border-radius: 5px;\r\n        min-width: 90%;\r\n        min-height: 4rem;\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        gap: 0.5rem;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 1rem;\r\n        transition: 0.4s;\r\n        z-index: 1;\r\n\r\n        &:hover{\r\n            box-shadow: 2px 4px grey;\r\n            transform: scale(1.025);\r\n            \r\n        }\r\n        .hero-check{\r\n            height: 1.25rem;\r\n            width: 1.25rem;\r\n            accent-color: $teal;\r\n        }\r\n\r\n        .hero-icon {\r\n            font-size: 1.5rem;\r\n            width: 1.5rem;\r\n        }\r\n\r\n        .hero-title {\r\n            max-width: 50%;\r\n            margin-left: 0;\r\n            //border: 2px solid red;\r\n        }\r\n        .hero-edit {\r\n            font-size: 1.25rem;\r\n            transition: 0.4s;\r\n\r\n            &:hover {\r\n                color: $teal;\r\n                cursor: pointer;\r\n                transform: rotate(180deg);\r\n            }\r\n        }\r\n        .hero-catagorey{\r\n            width: 100%;;\r\n           //border: 2px solid black;\r\n            height: fit-content;\r\n            text-align: center;\r\n            background-color: rgba(252, 33, 33, 0.795);\r\n            color: $white;\r\n            font-weight: bold;\r\n            border-radius: 3px;\r\n            vertical-align: middle;\r\n        }\r\n\r\n        \r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*600px MQ */\r\n@media only screen and (max-width: 600px) {\r\n    .aside-left {\r\n        width: 100vw;\r\n    }\r\n  }\r\n\r\n\r\n/* Fixed Positioned Element */\r\n.addTaskButton{\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin-bottom: 5rem;\r\n    margin-right: 5rem;\r\n    background-color:$teal;\r\n    border-radius: 50%;\r\n    width: 2rem;\r\n    height:2rem;\r\n    //padding: 0.5rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: 0.4s;\r\n\r\n    &:hover{\r\n        cursor: pointer;\r\n        background-color: $grey;\r\n    }\r\n\r\n   button {\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    border: none;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n\r\n    &:hover{\r\n        color: $white;\r\n        transform: rotate(180deg);\r\n    }\r\n   }\r\n}\r\n\r\n/* Fixed position Modal  */\r\n.modal-dialog{\r\n    width: 70vw;\r\n    min-height: 10rem;\r\n    border: 2px solid blue;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    margin-bottom: 5rem;\r\n    margin-left: 15%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n\r\n    h3 {\r\n        margin-left: 3rem;\r\n        font-weight: 600;\r\n    }\r\n\r\n    hr{\r\n        width: 90%;\r\n        margin: auto;\r\n    }\r\n\r\n    .modal-form {\r\n        border: 2px solid black;\r\n        width: 100%;\r\n        height: 8rem;\r\n        display: flex;\r\n        flex-direction: row;\r\n\r\n        #task-form{\r\n            display: flex;\r\n        flex-direction: row;\r\n\r\n        label {\r\n            display: flex;\r\n            flex-direction: column;\r\n            border: 2px dashed black;\r\n            height: fit-content;\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\n","@import url('https://fonts.googleapis.com/css2?family=B612+Mono&family=Lato:wght@300&display=swap');\r\n\r\n$baseFont:'Lato', sans-serif;\r\n$teal: teal;\r\n$spanHover: white;\r\n$navBGcolor: rgba(160, 154, 154, 0.986);\r\n$white: white;\r\n$grey: grey;\r\n$heroBorder: grey;\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "asideGrab": () => (/* binding */ asideGrab)
/* harmony export */ });
//DOM Grabs

function asideGrab () {
    const aside = document.querySelector(".aside-left")
    const hamburger = document.querySelector(".hamburger-menu")
    hamburger.addEventListener("click", () => {
        return aside.classList.toggle("is-active");
    })
    
};



/***/ }),

/***/ "./src/imgs/todoIcon.png":
/*!*******************************!*\
  !*** ./src/imgs/todoIcon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/todoIcon.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _imgs_todoIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/todoIcon.png */ "./src/imgs/todoIcon.png");
/* harmony import */ var _app_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/dom */ "./src/app/dom.js");




window.onload = _app_dom__WEBPACK_IMPORTED_MODULE_2__.asideGrab



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLE9BQU8sZ0pBQWdKLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxX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Q0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDQTtBQUNVO0FBQ3RDO0FBQ0EsZ0JBQWdCLCtDQUFTO0FBQ3pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz84ZDZiIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS8uL3NyYy9hcHAvZG9tLmpzIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2hlcS10by1kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVxLXRvLWRvLWxpc3QtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoZXEtdG8tZG8tbGlzdC0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CNjEyK01vbm8mZmFtaWx5PUxhdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSW1wb3J0cyAqL1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4qIC5pY29uOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDIwMHZoO1xcbn1cXG5cXG4uYXBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogTmF2ICovXFxuLm5hdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNTQsIDE1NCwgMC45ODYpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudSBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5uYXYgLmhhbWJ1cmdlci1tZW51OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdiAuaGFtYnVyZ2VyLW1lbnU6aG92ZXIgc3BhbiB7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG4ubmF2IC5oYW1idXJnZXItbWVudTphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdiAudGl0bGUtd3JhcHBlciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLm5hdiAudGl0bGUtd3JhcHBlciAudGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBBc2lkZSBlbnRlcnMgdXBvbiBoYW1idXJnZXIgY2xpY2sgKi9cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5hc2lkZS1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTV2dztcXG4gIGhlaWdodDogOTB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmFzaWRlLWxlZnQuaXMtYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbn1cXG4uYXNpZGUtbGVmdCAubmF2LWxpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyBidXR0b24uYWRkLXByb2plY3Q6YmVmb3JlIHtcXG4gIGZvbnQ6IHZhcigtLWZhLWZvbnQtc29saWQpO1xcbiAgY29udGVudDogXFxcIlxcXFxmMGZlXFxcIjtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmFzaWRlLWxlZnQgLm5hdi1saW5rcyBociB7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYXJkY29udGFpbmVyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uY2FyZGNvbnRhaW5lciAuaW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWluLXdpZHRoOiA5MCU7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDRweCBncmV5O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tY2hlY2sge1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgd2lkdGg6IDEuMjVyZW07XFxuICBhY2NlbnQtY29sb3I6IHRlYWw7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8taWNvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tdGl0bGUge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLmNhcmRjb250YWluZXIgLmhlcm8tY2FyZCAuaGVyby1lZGl0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tZWRpdDpob3ZlciB7XFxuICBjb2xvcjogdGVhbDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5jYXJkY29udGFpbmVyIC5oZXJvLWNhcmQgLmhlcm8tY2F0YWdvcmV5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAzMywgMzMsIDAuNzk1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyo2MDBweCBNUSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5hc2lkZS1sZWZ0IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbn1cXG4vKiBGaXhlZCBQb3NpdGlvbmVkIEVsZW1lbnQgKi9cXG4uYWRkVGFza0J1dHRvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmFkZFRhc2tCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLmFkZFRhc2tCdXR0b24gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmFkZFRhc2tCdXR0b24gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi8qIEZpeGVkIHBvc2l0aW9uIE1vZGFsICAqL1xcbi5tb2RhbC1kaWFsb2cge1xcbiAgd2lkdGg6IDcwdnc7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGgzIHtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1vZGFsLWRpYWxvZyBociB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZm9ybSAjdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1mb3JtICN0YXNrLWZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDJweCBkYXNoZWQgYmxhY2s7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2Fic3RyYWN0aW9ucy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxZQUFBO0FBSUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0JDUE07QURLVjtBQUlJO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0FBRlI7O0FBS0E7RUFDSSxhQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQU1BLFFBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsNENDNUJTO0VENkJULG1CQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQzVDRDtBRHdDUDtBQU1RO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSlo7QUFTUTtFQUNJLGVBQUE7QUFQWjtBQVNZO0VBQ0ksbUJDMURKO0FEbURaO0FBV1E7RUFDSSxtQkM3REo7QURvRFI7QUFhSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBWFI7QUFhUTtFQUNJLFlBQUE7QUFYWjs7QUFnQkEsc0NBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZEo7O0FBa0JBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQy9GSTtFRGdHSixZQUFBO0FBZko7QUFpQkk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUFmUjtBQWtCSTtFQUNJLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQWpCUjtBQW9CUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFsQlo7QUFvQlk7RUFDSSxzQkNoSVQ7RURpSVMsWUM5SFI7QUQ0R1I7QUFxQlk7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuQmhCO0FBdUJZO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0FBckJoQjs7QUE0QkE7RUFFSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQTFCSjtBQTRCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUEzQlI7QUE4Qkk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQTVCUjtBQThCUTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7QUE1Qlo7QUErQlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQzlMTDtBRGlLUDtBQWdDUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQTlCWjtBQWlDUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBL0JaO0FBa0NRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWhDWjtBQWtDWTtFQUNJLFdDaE5UO0VEaU5TLGVBQUE7RUFDQSx5QkFBQTtBQWhDaEI7QUFtQ1E7RUFDSSxXQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUN4Tko7RUR5TkksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBbENaOztBQTZDQSxZQUFBO0FBQ0E7RUFDSTtJQUNJLFlBQUE7RUExQ047QUFDRjtBQThDQSw2QkFBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQ3hQRztFRHlQSCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQTdDSjtBQStDSTtFQUNJLGVBQUE7RUFDQSxzQkNoUUQ7QURtTlA7QUFnREc7RUFDQyw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE5Q0o7QUFnREk7RUFDSSxZQzdRQTtFRDhRQSx5QkFBQTtBQTlDUjs7QUFtREEsMEJBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFoREo7QUFrREk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBaERSO0FBbURJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFqRFI7QUFvREk7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBbERSO0FBb0RRO0VBQ0ksYUFBQTtFQUNKLG1CQUFBO0FBbERSO0FBb0RRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQWxEWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZW52OiB1bmRlZmluZWQ7XFxuLyogSW1wb3J0cyAqL1xcclxcblxcclxcbkBpbXBvcnQgXFxcIi4vYWJzdHJhY3Rpb25zL3ZhcmlhYmxlcy5zY3NzXFxcIjtcXHJcXG5cXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRiYXNlRm9udDtcXHJcXG5cXHJcXG4gICAgLmljb246OmJlZm9yZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAgIH1cXHJcXG59O1xcclxcbmJvZHl7XFxyXFxuICAgIGhlaWdodDogMjAwdmg7XFxyXFxufVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE5hdiAqL1xcclxcbi5uYXYge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZCR2NvbG9yO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07O1xcclxcblxcclxcblxcclxcbiAgICAuaGFtYnVyZ2VyLW1lbnUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDJweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6NHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzcGFuSG92ZXIgO1xcclxcbiAgICAgICAgICAgIH07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOmFjdGl2ZXtcXHJcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG4gICAgLnRpdGxlLXdyYXBwZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAudGl0bGUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG5cXHJcXG59XFxyXFxuLyogQXNpZGUgZW50ZXJzIHVwb24gaGFtYnVyZ2VyIGNsaWNrICovXFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtbGVmdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxNXZ3O1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxlZnQ6IC0xMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG5cXHJcXG4gICAgJi5pcy1hY3RpdmV7XFxyXFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtbGlua3Mge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTs7XFxyXFxuICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIGJsYWNrOztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcblxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgd2lkdGg6ODAlO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi5hZGQtcHJvamVjdDpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBmb250OiB2YXIoLS1mYS1mb250LXNvbGlkKTtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxmMGZlXFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBociB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIH07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXJkY29udGFpbmVyIHtcXHJcXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAuaW5uZXJDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDJyZW07O1xcclxcbiAgICAgICAgLy9ib3JkZXI6IDJweCBkYXNoZWQgYmx1ZTtcXHJcXG4gICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWNhcmR7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkaGVyb0JvcmRlcjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xcclxcbiAgICAgICAgbWluLWhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggNHB4IGdyZXk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuaGVyby1jaGVja3tcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgYWNjZW50LWNvbG9yOiAkdGVhbDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5oZXJvLWljb24ge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaGVyby10aXRsZSB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuaGVyby1lZGl0IHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZWFsO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmhlcm8tY2F0YWdvcmV5e1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOztcXHJcXG4gICAgICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDMzLCAzMywgMC43OTUpO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKjYwMHB4IE1RICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuYXNpZGUtbGVmdCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGaXhlZCBQb3NpdGlvbmVkIEVsZW1lbnQgKi9cXHJcXG4uYWRkVGFza0J1dHRvbntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6JHRlYWw7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGhlaWdodDoycmVtO1xcclxcbiAgICAvL3BhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRml4ZWQgcG9zaXRpb24gTW9kYWwgICovXFxyXFxuLm1vZGFsLWRpYWxvZ3tcXHJcXG4gICAgd2lkdGg6IDcwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgIGgzIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBocntcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vZGFsLWZvcm0ge1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogOHJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbiAgICAgICAgI3Rhc2stZm9ybXtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG4gICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QjYxMitNb25vJmZhbWlseT1MYXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRiYXNlRm9udDonTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuJHRlYWw6IHRlYWw7XFxyXFxuJHNwYW5Ib3Zlcjogd2hpdGU7XFxyXFxuJG5hdkJHY29sb3I6IHJnYmEoMTYwLCAxNTQsIDE1NCwgMC45ODYpO1xcclxcbiR3aGl0ZTogd2hpdGU7XFxyXFxuJGdyZXk6IGdyZXk7XFxyXFxuJGhlcm9Cb3JkZXI6IGdyZXk7XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL0RPTSBHcmFic1xyXG5cclxuZnVuY3Rpb24gYXNpZGVHcmFiICgpIHtcclxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZS1sZWZ0XCIpXHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51XCIpXHJcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCB7YXNpZGVHcmFifTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4vaW1ncy90b2RvSWNvbi5wbmdcIlxyXG5pbXBvcnQgeyBhc2lkZUdyYWIgfSBmcm9tIFwiLi9hcHAvZG9tXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gYXNpZGVHcmFiXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9