/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpeg */ "./src/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    font-family:'Times New Roman', Times, serif;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n    width: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1300px;\n    margin: auto;\n}\n\n#projectBar {\n    height: 800px;\n    width: 300px;\n    background-color: rgba(225, 225, 225, 0.8);\n    border-radius: 20px 0px 0px 20px;\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 40px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding-right: 20px;\n    gap: 20px;\n    overflow: auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    box-sizing: border-box;\n    height: 80px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 80px;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #f87171;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #fcd34d;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #bef264;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    font-weight: 500;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 700;\n    width: 80px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #FF6E40;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(200, 200, 200, 0.8);\n    border-radius: 10px;\n  }\n\n::-webkit-scrollbar-thumb {\n    background: rgba(180, 180, 180, 0.8);\n    border-radius: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,aAAa;IACb,WAAW;IACX,yDAAwC;IACxC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,0CAA0C;IAC1C,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;IAClB,0CAA0C;IAC1C,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,0CAA0C;IAC1C,mBAAmB;EACrB;;AAEF;IACI,oCAAoC;IACpC,mBAAmB;AACvB","sourcesContent":["body {\n    margin: 0px;\n    font-family:'Times New Roman', Times, serif;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n    width: 100%;\n    background-image: url(./background.jpeg);\n    background-size: cover;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1300px;\n    margin: auto;\n}\n\n#projectBar {\n    height: 800px;\n    width: 300px;\n    background-color: rgba(225, 225, 225, 0.8);\n    border-radius: 20px 0px 0px 20px;\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 40px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding-right: 20px;\n    gap: 20px;\n    overflow: auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    box-sizing: border-box;\n    height: 80px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 80px;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #f87171;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #fcd34d;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #bef264;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    font-weight: 500;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 700;\n    width: 80px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #FF6E40;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(200, 200, 200, 0.8);\n    border-radius: 10px;\n  }\n\n::-webkit-scrollbar-thumb {\n    background: rgba(180, 180, 180, 0.8);\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/command.js":
/*!************************!*\
  !*** ./src/command.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commandFactory = (commandType, parameters) => {
    return { commandType, parameters };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commandFactory);

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/view.js");



// CONTROLLER
const controller = {
    // Forwards commands to model
    handleCommand(command) {
        _model_js__WEBPACK_IMPORTED_MODULE_0__.model.handleCommand(command);
    },

    // Handles request to open modal
    openModalReq() {
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].openModal();
    },

    setModalMode(mode, id) {
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].setModalButtonBehavior("update", id);
    },

    // Handles request to inject data into modal
    addDataModalReq(todo) {
        let taskName = todo.taskName;
        let priority = todo.priority;
        let dueDate = todo.dueDate;
        let description = todo.description;
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].addDataModal(taskName, priority, dueDate, description);
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].openModal();
    },

    // Handles request to close modal
    closeModalReq() {
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
    },

    // Handles open modal click event
    handleOpenModalClick() {
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].setModalButtonBehavior("create");
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].openModal();
    },

    // Handles close modal click event
    handleCloseModalClick() {
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
    },
    // Sends request to update DOM Projects
    
    // Sends request to update DOM Todos
    refreshViewTodosReq(project) {
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTodos(project);
    },
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "model": () => (/* binding */ model)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");


// Constructor for Project objects
const projectFactory = (projectName, colorTag) => {
    const listItems = [];
    return { listItems, projectName, colorTag }
}

// Default project object
const defaultProject = projectFactory('default', 'white');

// MODEL CONTROLLER
const model = {
    // ID counter (replace with UUID later?)
    idCounter: 1,

    // Constructor for List objects
    todoFactory(taskName, priority, dueDate, description) {
        return { taskName, priority, dueDate, description };
    },

    // Que for holding previous done commands
    commandQueue: [],

    // Handles commands
    handleCommand(command) {
        if (command.commandType === "create") {
            this.createTodo(undefined, command);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeModalReq();
        }
        if (command.commandType === "read") {
            const todo = this.readTodo(undefined, command);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].addDataModalReq(todo);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].setModalMode("update", command.parameters.id);
        }
        if (command.commandType === "update") {
            this.updateTodo(undefined, command);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeModalReq();
        }
        if (command.commandType === "delete") {
            this.deleteTodo(undefined, command);
        }
        if (command.commandType === "undo") {
            const lastCommand = this.commandQueue.pop();
            console.log(lastCommand);
            this.undoCommand(lastCommand);
        } else if (command.commandType !== "read") {
            this.commandQueue.push(command);
        }
        console.log(defaultProject.listItems);
    },

    // Create todo
    createTodo(project = defaultProject, command) {
        let taskName = command.parameters.taskName;
        if (!taskName) { taskName = "Default Name"};
        let priority = command.parameters.priority;
        let dueDate = command.parameters.dueDate;
        let description = command.parameters.description;
        if (!description) { description = "Default Description"};
        const todo = model.todoFactory(taskName, priority, dueDate, description);
        // Check if there is an ID (undo operation), if not then assign ID
        if (command.parameters.id) {
            todo.id = command.parameters.id;
            const index = project.listItems.findIndex(todo => todo.id > command.parameters.id );
            project.listItems.splice(index, 0, todo);
        } else {
            todo.id = this.idCounter++;
            command.parameters.id = todo.id;
            project.listItems.push(todo);
        }
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].refreshViewTodosReq(defaultProject);
    },

    // Read todo
    readTodo(project = defaultProject, command) {
        const todo = project.listItems.find(todo => todo.id == command.parameters.id);
        console.log(todo);
        return todo;
    },

    // Update todo
    updateTodo(project = defaultProject, command) {
        // Finds todo with correct id
        const todo = project.listItems.find(todo => todo.id == command.parameters.id);
        // Saves info to allow reversal later
        const oldTodo = {};
        for (const property in todo) {
            oldTodo[property] = todo[property];
        }
        // Edits values
        if (command.parameters.taskName != undefined) { todo.taskName = command.parameters.taskName }
        if (command.parameters.priority != undefined) { todo.priority = command.parameters.priority }
        if (command.parameters.dueDate != undefined) { todo.dueDate = command.parameters.dueDate }
        if (command.parameters.description != undefined) { todo.description = command.parameters.description }
        // Reinjects info into command to allow reversal
        for (const property in oldTodo) {
            command.parameters[property] = oldTodo[property];
        }
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].refreshViewTodosReq(defaultProject);
    },

    // Delete todo
    deleteTodo(project = defaultProject, command) {
        // Finds todo with correct index and deletes it
        const index = project.listItems.findIndex(todo => todo.id == command.parameters.id);
        if (index > -1) { 
            // But not before copying the todo info to allow reversal later...
            const todo = (project.listItems.splice(index, 1))[0];
            for (const property in todo) {
                command.parameters[property] = todo[property];
            }
        }
        // Sends request to refresh todo list
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].refreshViewTodosReq(defaultProject);
    },

    // Undoes last command
    undoCommand(command) {
        if (command) {
            if (command.commandType === "create") {
                this.deleteTodo(undefined, command);
            }
            if (command.commandType === "delete") {
                this.createTodo(undefined, command);
            }
            if (command.commandType === "update") {
                this.updateTodo(undefined, command);
            }
        } else {
        alert("THERE ARE NO COMMANDS TO UNDO");
        }
    }
}



/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command.js */ "./src/command.js");



// DOM Element Setup
const root = document.querySelector('#todoBar');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const taskNameInput = document.querySelector('#taskName');
const dueDateInput = document.querySelector('#dueDate');
const priorityInput = document.querySelector('#taskPriority');
const descriptionInput = document.querySelector('#description');

const openModalButton = document.querySelector('#openModalButton');
const modalButton = document.querySelector('#modalButton');
const undoButton = document.querySelector('#undoButton');

// Setup default date for inputs (Can move into own function in refactor?)
const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

// VIEW CONTROLLER
const view = {

    // Creates todo item
    createTodo(id, taskName, priority, dueDate, description) {
        // Create todo elements
        const todoElement = document.createElement('div');
        todoElement.classList.add('todoItem');
        const todoPriority = document.createElement('div');
        todoPriority.classList.add('priority');
        const todoName = document.createElement('p');
        todoName.classList.add('name');
        const todoDueDate = document.createElement('p');
        todoDueDate.classList.add('dueDate');
        const todoDescription = document.createElement('p');
        todoDescription.classList.add('description');
        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.classList.add('button', 'delete');
        // Add id data-attribute to elements
        todoElement.setAttribute('data-id', id);
        todoDeleteButton.setAttribute('data-id', id);
        // Adds event handler for deleting todo
        todoDeleteButton.addEventListener('click', this.deleteTodoClickEvent);
        // Adds event handler for opening todo
        todoElement.addEventListener('click', this.readTodoClickEvent);
        // Sets correct priority data attribute
        todoPriority.setAttribute("data-priority", priority);
        // Injects data to todo elements
        todoName.textContent = taskName;
        todoDueDate.textContent = dueDate;
        todoDescription.textContent = description;
        todoDeleteButton.textContent = 'X';
        // Adds todo to the DOM
        todoElement.append(todoPriority, todoName, todoDueDate, todoDescription, todoDeleteButton);
        root.appendChild(todoElement);
    },

    // Updates entire todo list
    displayTodos(project) {
        root.replaceChildren();
        project.listItems.forEach(todo => {
            this.createTodo(todo.id, todo.taskName, todo.priority, todo.dueDate, todo.description);
        })
    },

    // Populates modal with provided info
    addDataModal(taskName = "", priority = "Default", dueDate = currentDate, description = "") {
        taskNameInput.value = taskName;
        priorityInput.value = priority;
        dueDateInput.value = currentDate;
        descriptionInput.value = description;
    },

    // Opens modal
    openModal() {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    },

    // Close modal
    closeModal() {
        // Resets inputs in modal
        this.addDataModal();
        // Hides modal
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    },
    
    // Sets behavior modal button to add / edit
    setModalButtonBehavior(mode, id) {
        this.removeModalButtonListeners();
        if (mode === "create") {
            modalButton.setAttribute("data-mode", "create");
            modalButton.textContent = "Create";
            modalButton.addEventListener('click', this.createTodoClickEvent);
        }
        else if (mode === "update") {
            modalButton.setAttribute("data-mode", "update");
            modalButton.textContent = "Update";
            modalButton.setAttribute('data-id', id);
            modalButton.addEventListener('click', this.updateTodoClickEvent);
        }
    },

    // Removes modal button listeners
    removeModalButtonListeners() {
        modalButton.removeEventListener('click', this.createTodoClickEvent);
        modalButton.removeEventListener('click', this.updateTodoClickEvent);
    },

    // Event for when create todo event is fired
    createTodoClickEvent() {
        const taskName = document.getElementById('taskName').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        // Create and pass "create" command
        const parameters = {taskName: taskName, priority: priority, dueDate: dueDate, description: description};
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("create", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleCommand(command);
    },

    // Event for when read todo event is fired
    readTodoClickEvent(e) {
        // Create and pass "read" command
        const id = e.currentTarget.dataset.id;
        const parameters = {id: id};
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("read", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleCommand(command);
    },

    // Event for when update todo event is fired
    updateTodoClickEvent(e) {
        const id = e.currentTarget.dataset.id;
        const taskName = document.getElementById('taskName').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        // Create and pass "create" command
        const parameters = {id: id, taskName: taskName, priority: priority, dueDate: dueDate, description: description};
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("update", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleCommand(command);
    },

    // Event for when delete todo event is fired
    deleteTodoClickEvent(e) {
        e.stopPropagation();
        // Create and pass "delete" command
        const id = e.currentTarget.dataset.id;
        const parameters = {id: id};
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("delete", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleCommand(command);
    },

    // Event for when undo event is fired
    undoClickEvent() {
        // Create and pass "undo" command
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("undo", undefined);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleCommand(command);
    },

    // Event for when open modal button is clicked
    openModalClickEvent() {
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleOpenModalClick();
    },

    // Event for when the close modal area (overlay) is clicked
    closeModalClickEvent(e) {
        // Check if overlay and not modal was targetted with click
        if (e.target === this) {
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleCloseModalClick();
        }
    }, 
}

// Setup event listeners
openModalButton.addEventListener('click', view.openModalClickEvent);
overlay.addEventListener('mousedown', view.closeModalClickEvent);
undoButton.addEventListener('click', view.undoClickEvent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);

/***/ }),

/***/ "./src/background.jpeg":
/*!*****************************!*\
  !*** ./src/background.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f4fb11eec982b55c207.jpeg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _command_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command.js */ "./src/command.js");




const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test1", priority:"High", dueDate:currentDate, description:"Test Description 1"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Really Really Really Long Name Test", priority:"Default", dueDate:currentDate, description:"Really Really Really Really Really Really Long Description Test"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test3", priority:"Default", dueDate:currentDate, description:"Test Description 3"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test4", priority:"Default", dueDate:currentDate, description:"Test Description 4"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test5", priority:"Medium", dueDate:currentDate, description:"Test Description 5"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test6", priority:"Default", dueDate:currentDate, description:"Test Description 6"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test7", priority:"Default", dueDate:currentDate, description:"Test Description 7"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test8", priority:"Default", dueDate:currentDate, description:"Test Description 8"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test9", priority:"Low", dueDate:currentDate, description:"Test Description 9"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test10", priority:"Default", dueDate:currentDate, description:"Test Description 10"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test11", priority:"Default", dueDate:currentDate, description:"Test Description 11"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test12", priority:"Low", dueDate:currentDate, description:"Test Description 12"}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksNEZBQTRGO0FBQzNJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksNEZBQTRGO0FBQzNJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksMkZBQTJGO0FBQzFJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksNEZBQTRGO0FBQzNJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksNEZBQTRGO0FBQzNJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksNEZBQTRGO0FBQzNJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksd0ZBQXdGO0FBQ3ZJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksOEZBQThGO0FBQzdJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksOEZBQThGO0FBQzdJLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksMEZBQTBGLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tbWFuZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI21haW5Db250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDEzMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdEJhciB7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG59XFxuXFxuI3RvZG9XcmFwcGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDQwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcXG59XFxuXFxuI3RvZG9CYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kb0l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHkge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkhpZ2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiTWVkaXVtXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkMzRkO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlZjI2NDtcXG59XFxuXFxuLnRvZG9JdGVtIC5uYW1lIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50b2RvSXRlbSAuZHVlRGF0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDM0MHB4O1xcbn1cXG5cXG4jYnV0dG9uQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJGRjU5O1xcbn1cXG5cXG4uYnV0dG9uI3VuZG9CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ4O1xcbn1cXG5cXG4uYnV0dG9uLnNtYWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW0gLmJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RTQwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udGV4dElucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kYXRlSW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaW9yaXR5SW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW5wdXQjZGVzY3JpcHRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLHlEQUF3QztJQUN4QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmFja2dyb3VuZC5qcGVnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI21haW5Db250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDEzMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdEJhciB7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG59XFxuXFxuI3RvZG9XcmFwcGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDQwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcXG59XFxuXFxuI3RvZG9CYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kb0l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHkge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkhpZ2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiTWVkaXVtXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkMzRkO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlZjI2NDtcXG59XFxuXFxuLnRvZG9JdGVtIC5uYW1lIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50b2RvSXRlbSAuZHVlRGF0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDM0MHB4O1xcbn1cXG5cXG4jYnV0dG9uQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJGRjU5O1xcbn1cXG5cXG4uYnV0dG9uI3VuZG9CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ4O1xcbn1cXG5cXG4uYnV0dG9uLnNtYWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW0gLmJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RTQwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udGV4dElucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kYXRlSW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaW9yaXR5SW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW5wdXQjZGVzY3JpcHRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29tbWFuZEZhY3RvcnkgPSAoY29tbWFuZFR5cGUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICByZXR1cm4geyBjb21tYW5kVHlwZSwgcGFyYW1ldGVycyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZEZhY3Rvcnk7IiwiaW1wb3J0IHsgbW9kZWwsIGRlZmF1bHRQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgdmlldyBmcm9tICcuL3ZpZXcuanMnO1xuXG4vLyBDT05UUk9MTEVSXG5jb25zdCBjb250cm9sbGVyID0ge1xuICAgIC8vIEZvcndhcmRzIGNvbW1hbmRzIHRvIG1vZGVsXG4gICAgaGFuZGxlQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgcmVxdWVzdCB0byBvcGVuIG1vZGFsXG4gICAgb3Blbk1vZGFsUmVxKCkge1xuICAgICAgICB2aWV3Lm9wZW5Nb2RhbCgpO1xuICAgIH0sXG5cbiAgICBzZXRNb2RhbE1vZGUobW9kZSwgaWQpIHtcbiAgICAgICAgdmlldy5zZXRNb2RhbEJ1dHRvbkJlaGF2aW9yKFwidXBkYXRlXCIsIGlkKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyByZXF1ZXN0IHRvIGluamVjdCBkYXRhIGludG8gbW9kYWxcbiAgICBhZGREYXRhTW9kYWxSZXEodG9kbykge1xuICAgICAgICBsZXQgdGFza05hbWUgPSB0b2RvLnRhc2tOYW1lO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgdmlldy5hZGREYXRhTW9kYWwodGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHZpZXcub3Blbk1vZGFsKCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgcmVxdWVzdCB0byBjbG9zZSBtb2RhbFxuICAgIGNsb3NlTW9kYWxSZXEoKSB7XG4gICAgICAgIHZpZXcuY2xvc2VNb2RhbCgpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGVzIG9wZW4gbW9kYWwgY2xpY2sgZXZlbnRcbiAgICBoYW5kbGVPcGVuTW9kYWxDbGljaygpIHtcbiAgICAgICAgdmlldy5zZXRNb2RhbEJ1dHRvbkJlaGF2aW9yKFwiY3JlYXRlXCIpO1xuICAgICAgICB2aWV3Lm9wZW5Nb2RhbCgpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGVzIGNsb3NlIG1vZGFsIGNsaWNrIGV2ZW50XG4gICAgaGFuZGxlQ2xvc2VNb2RhbENsaWNrKCkge1xuICAgICAgICB2aWV3LmNsb3NlTW9kYWwoKTtcbiAgICB9LFxuICAgIC8vIFNlbmRzIHJlcXVlc3QgdG8gdXBkYXRlIERPTSBQcm9qZWN0c1xuICAgIFxuICAgIC8vIFNlbmRzIHJlcXVlc3QgdG8gdXBkYXRlIERPTSBUb2Rvc1xuICAgIHJlZnJlc2hWaWV3VG9kb3NSZXEocHJvamVjdCkge1xuICAgICAgICB2aWV3LmRpc3BsYXlUb2Rvcyhwcm9qZWN0KTtcbiAgICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyOyIsImltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcblxuLy8gQ29uc3RydWN0b3IgZm9yIFByb2plY3Qgb2JqZWN0c1xuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAocHJvamVjdE5hbWUsIGNvbG9yVGFnKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW107XG4gICAgcmV0dXJuIHsgbGlzdEl0ZW1zLCBwcm9qZWN0TmFtZSwgY29sb3JUYWcgfVxufVxuXG4vLyBEZWZhdWx0IHByb2plY3Qgb2JqZWN0XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdkZWZhdWx0JywgJ3doaXRlJyk7XG5cbi8vIE1PREVMIENPTlRST0xMRVJcbmNvbnN0IG1vZGVsID0ge1xuICAgIC8vIElEIGNvdW50ZXIgKHJlcGxhY2Ugd2l0aCBVVUlEIGxhdGVyPylcbiAgICBpZENvdW50ZXI6IDEsXG5cbiAgICAvLyBDb25zdHJ1Y3RvciBmb3IgTGlzdCBvYmplY3RzXG4gICAgdG9kb0ZhY3RvcnkodGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4geyB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uIH07XG4gICAgfSxcblxuICAgIC8vIFF1ZSBmb3IgaG9sZGluZyBwcmV2aW91cyBkb25lIGNvbW1hbmRzXG4gICAgY29tbWFuZFF1ZXVlOiBbXSxcblxuICAgIC8vIEhhbmRsZXMgY29tbWFuZHNcbiAgICBoYW5kbGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyh1bmRlZmluZWQsIGNvbW1hbmQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZU1vZGFsUmVxKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gdGhpcy5yZWFkVG9kbyh1bmRlZmluZWQsIGNvbW1hbmQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGREYXRhTW9kYWxSZXEodG9kbyk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNldE1vZGFsTW9kZShcInVwZGF0ZVwiLCBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvZG8odW5kZWZpbmVkLCBjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNb2RhbFJlcSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG8odW5kZWZpbmVkLCBjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1bmRvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDb21tYW5kID0gdGhpcy5jb21tYW5kUXVldWUucG9wKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsYXN0Q29tbWFuZCk7XG4gICAgICAgICAgICB0aGlzLnVuZG9Db21tYW5kKGxhc3RDb21tYW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlICE9PSBcInJlYWRcIikge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kUXVldWUucHVzaChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5saXN0SXRlbXMpO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgdG9kb1xuICAgIGNyZWF0ZVRvZG8ocHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0LCBjb21tYW5kKSB7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IGNvbW1hbmQucGFyYW1ldGVycy50YXNrTmFtZTtcbiAgICAgICAgaWYgKCF0YXNrTmFtZSkgeyB0YXNrTmFtZSA9IFwiRGVmYXVsdCBOYW1lXCJ9O1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBjb21tYW5kLnBhcmFtZXRlcnMucHJpb3JpdHk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gY29tbWFuZC5wYXJhbWV0ZXJzLmR1ZURhdGU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNvbW1hbmQucGFyYW1ldGVycy5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbikgeyBkZXNjcmlwdGlvbiA9IFwiRGVmYXVsdCBEZXNjcmlwdGlvblwifTtcbiAgICAgICAgY29uc3QgdG9kbyA9IG1vZGVsLnRvZG9GYWN0b3J5KHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbiBJRCAodW5kbyBvcGVyYXRpb24pLCBpZiBub3QgdGhlbiBhc3NpZ24gSURcbiAgICAgICAgaWYgKGNvbW1hbmQucGFyYW1ldGVycy5pZCkge1xuICAgICAgICAgICAgdG9kby5pZCA9IGNvbW1hbmQucGFyYW1ldGVycy5pZDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC5saXN0SXRlbXMuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA+IGNvbW1hbmQucGFyYW1ldGVycy5pZCApO1xuICAgICAgICAgICAgcHJvamVjdC5saXN0SXRlbXMuc3BsaWNlKGluZGV4LCAwLCB0b2RvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG8uaWQgPSB0aGlzLmlkQ291bnRlcisrO1xuICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmlkID0gdG9kby5pZDtcbiAgICAgICAgICAgIHByb2plY3QubGlzdEl0ZW1zLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbGxlci5yZWZyZXNoVmlld1RvZG9zUmVxKGRlZmF1bHRQcm9qZWN0KTtcbiAgICB9LFxuXG4gICAgLy8gUmVhZCB0b2RvXG4gICAgcmVhZFRvZG8ocHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0LCBjb21tYW5kKSB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0Lmxpc3RJdGVtcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PSBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSB0b2RvXG4gICAgdXBkYXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgLy8gRmluZHMgdG9kbyB3aXRoIGNvcnJlY3QgaWRcbiAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIC8vIFNhdmVzIGluZm8gdG8gYWxsb3cgcmV2ZXJzYWwgbGF0ZXJcbiAgICAgICAgY29uc3Qgb2xkVG9kbyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRvZG8pIHtcbiAgICAgICAgICAgIG9sZFRvZG9bcHJvcGVydHldID0gdG9kb1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWRpdHMgdmFsdWVzXG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMudGFza05hbWUgIT0gdW5kZWZpbmVkKSB7IHRvZG8udGFza05hbWUgPSBjb21tYW5kLnBhcmFtZXRlcnMudGFza05hbWUgfVxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLnByaW9yaXR5ICE9IHVuZGVmaW5lZCkgeyB0b2RvLnByaW9yaXR5ID0gY29tbWFuZC5wYXJhbWV0ZXJzLnByaW9yaXR5IH1cbiAgICAgICAgaWYgKGNvbW1hbmQucGFyYW1ldGVycy5kdWVEYXRlICE9IHVuZGVmaW5lZCkgeyB0b2RvLmR1ZURhdGUgPSBjb21tYW5kLnBhcmFtZXRlcnMuZHVlRGF0ZSB9XG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb24gIT0gdW5kZWZpbmVkKSB7IHRvZG8uZGVzY3JpcHRpb24gPSBjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb24gfVxuICAgICAgICAvLyBSZWluamVjdHMgaW5mbyBpbnRvIGNvbW1hbmQgdG8gYWxsb3cgcmV2ZXJzYWxcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvbGRUb2RvKSB7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnNbcHJvcGVydHldID0gb2xkVG9kb1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbGxlci5yZWZyZXNoVmlld1RvZG9zUmVxKGRlZmF1bHRQcm9qZWN0KTtcbiAgICB9LFxuXG4gICAgLy8gRGVsZXRlIHRvZG9cbiAgICBkZWxldGVUb2RvKHByb2plY3QgPSBkZWZhdWx0UHJvamVjdCwgY29tbWFuZCkge1xuICAgICAgICAvLyBGaW5kcyB0b2RvIHdpdGggY29ycmVjdCBpbmRleCBhbmQgZGVsZXRlcyBpdFxuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPT0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHsgXG4gICAgICAgICAgICAvLyBCdXQgbm90IGJlZm9yZSBjb3B5aW5nIHRoZSB0b2RvIGluZm8gdG8gYWxsb3cgcmV2ZXJzYWwgbGF0ZXIuLi5cbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSAocHJvamVjdC5saXN0SXRlbXMuc3BsaWNlKGluZGV4LCAxKSlbMF07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRvZG8pIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnNbcHJvcGVydHldID0gdG9kb1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2VuZHMgcmVxdWVzdCB0byByZWZyZXNoIHRvZG8gbGlzdFxuICAgICAgICBjb250cm9sbGVyLnJlZnJlc2hWaWV3VG9kb3NSZXEoZGVmYXVsdFByb2plY3QpO1xuICAgIH0sXG5cbiAgICAvLyBVbmRvZXMgbGFzdCBjb21tYW5kXG4gICAgdW5kb0NvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG8odW5kZWZpbmVkLCBjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKHVuZGVmaW5lZCwgY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kbyh1bmRlZmluZWQsIGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlRIRVJFIEFSRSBOTyBDT01NQU5EUyBUTyBVTkRPXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIG1vZGVsLFxuICAgIGRlZmF1bHRQcm9qZWN0XG59IiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb21tYW5kRmFjdG9yeSBmcm9tICcuL2NvbW1hbmQuanMnO1xuXG4vLyBET00gRWxlbWVudCBTZXR1cFxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvQmFyJyk7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbmNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza05hbWUnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tQcmlvcml0eScpO1xuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuXG5jb25zdCBvcGVuTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbk1vZGFsQnV0dG9uJyk7XG5jb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEJ1dHRvbicpO1xuY29uc3QgdW5kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bmRvQnV0dG9uJyk7XG5cbi8vIFNldHVwIGRlZmF1bHQgZGF0ZSBmb3IgaW5wdXRzIChDYW4gbW92ZSBpbnRvIG93biBmdW5jdGlvbiBpbiByZWZhY3Rvcj8pXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuLy8gVklFVyBDT05UUk9MTEVSXG5jb25zdCB2aWV3ID0ge1xuXG4gICAgLy8gQ3JlYXRlcyB0b2RvIGl0ZW1cbiAgICBjcmVhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0b2RvIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgdG9kb0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdkZWxldGUnKTtcbiAgICAgICAgLy8gQWRkIGlkIGRhdGEtYXR0cmlidXRlIHRvIGVsZW1lbnRzXG4gICAgICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIC8vIEFkZHMgZXZlbnQgaGFuZGxlciBmb3IgZGVsZXRpbmcgdG9kb1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIC8vIEFkZHMgZXZlbnQgaGFuZGxlciBmb3Igb3BlbmluZyB0b2RvXG4gICAgICAgIHRvZG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWFkVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICAvLyBTZXRzIGNvcnJlY3QgcHJpb3JpdHkgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgICAgICAvLyBJbmplY3RzIGRhdGEgdG8gdG9kbyBlbGVtZW50c1xuICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAvLyBBZGRzIHRvZG8gdG8gdGhlIERPTVxuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb1ByaW9yaXR5LCB0b2RvTmFtZSwgdG9kb0R1ZURhdGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGVzIGVudGlyZSB0b2RvIGxpc3RcbiAgICBkaXNwbGF5VG9kb3MocHJvamVjdCkge1xuICAgICAgICByb290LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBwcm9qZWN0Lmxpc3RJdGVtcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKHRvZG8uaWQsIHRvZG8udGFza05hbWUsIHRvZG8ucHJpb3JpdHksIHRvZG8uZHVlRGF0ZSwgdG9kby5kZXNjcmlwdGlvbik7XG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIC8vIFBvcHVsYXRlcyBtb2RhbCB3aXRoIHByb3ZpZGVkIGluZm9cbiAgICBhZGREYXRhTW9kYWwodGFza05hbWUgPSBcIlwiLCBwcmlvcml0eSA9IFwiRGVmYXVsdFwiLCBkdWVEYXRlID0gY3VycmVudERhdGUsIGRlc2NyaXB0aW9uID0gXCJcIikge1xuICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gdGFza05hbWU7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBwcmlvcml0eTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gY3VycmVudERhdGU7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICB9LFxuXG4gICAgLy8gT3BlbnMgbW9kYWxcbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0sXG5cbiAgICAvLyBDbG9zZSBtb2RhbFxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIC8vIFJlc2V0cyBpbnB1dHMgaW4gbW9kYWxcbiAgICAgICAgdGhpcy5hZGREYXRhTW9kYWwoKTtcbiAgICAgICAgLy8gSGlkZXMgbW9kYWxcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSxcbiAgICBcbiAgICAvLyBTZXRzIGJlaGF2aW9yIG1vZGFsIGJ1dHRvbiB0byBhZGQgLyBlZGl0XG4gICAgc2V0TW9kYWxCdXR0b25CZWhhdmlvcihtb2RlLCBpZCkge1xuICAgICAgICB0aGlzLnJlbW92ZU1vZGFsQnV0dG9uTGlzdGVuZXJzKCk7XG4gICAgICAgIGlmIChtb2RlID09PSBcImNyZWF0ZVwiKSB7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGVcIiwgXCJjcmVhdGVcIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiLCBcInVwZGF0ZVwiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnRleHRDb250ZW50ID0gXCJVcGRhdGVcIjtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZlcyBtb2RhbCBidXR0b24gbGlzdGVuZXJzXG4gICAgcmVtb3ZlTW9kYWxCdXR0b25MaXN0ZW5lcnMoKSB7XG4gICAgICAgIG1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIG1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIGNyZWF0ZSB0b2RvIGV2ZW50IGlzIGZpcmVkXG4gICAgY3JlYXRlVG9kb0NsaWNrRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwiY3JlYXRlXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0ge3Rhc2tOYW1lOiB0YXNrTmFtZSwgcHJpb3JpdHk6IHByaW9yaXR5LCBkdWVEYXRlOiBkdWVEYXRlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb259O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gcmVhZCB0b2RvIGV2ZW50IGlzIGZpcmVkXG4gICAgcmVhZFRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwicmVhZFwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHtpZDogaWR9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIHVwZGF0ZSB0b2RvIGV2ZW50IGlzIGZpcmVkXG4gICAgdXBkYXRlVG9kb0NsaWNrRXZlbnQoZSkge1xuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImNyZWF0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHtpZDogaWQsIHRhc2tOYW1lOiB0YXNrTmFtZSwgcHJpb3JpdHk6IHByaW9yaXR5LCBkdWVEYXRlOiBkdWVEYXRlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb259O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJ1cGRhdGVcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gZGVsZXRlIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICBkZWxldGVUb2RvQ2xpY2tFdmVudChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImRlbGV0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHtpZDogaWR9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJkZWxldGVcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gdW5kbyBldmVudCBpcyBmaXJlZFxuICAgIHVuZG9DbGlja0V2ZW50KCkge1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJ1bmRvXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJ1bmRvXCIsIHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gb3BlbiBtb2RhbCBidXR0b24gaXMgY2xpY2tlZFxuICAgIG9wZW5Nb2RhbENsaWNrRXZlbnQoKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlT3Blbk1vZGFsQ2xpY2soKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gdGhlIGNsb3NlIG1vZGFsIGFyZWEgKG92ZXJsYXkpIGlzIGNsaWNrZWRcbiAgICBjbG9zZU1vZGFsQ2xpY2tFdmVudChlKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIG92ZXJsYXkgYW5kIG5vdCBtb2RhbCB3YXMgdGFyZ2V0dGVkIHdpdGggY2xpY2tcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZUNsb3NlTW9kYWxDbGljaygpO1xuICAgICAgICB9XG4gICAgfSwgXG59XG5cbi8vIFNldHVwIGV2ZW50IGxpc3RlbmVyc1xub3Blbk1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlldy5vcGVuTW9kYWxDbGlja0V2ZW50KTtcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdmlldy5jbG9zZU1vZGFsQ2xpY2tFdmVudCk7XG51bmRvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlldy51bmRvQ2xpY2tFdmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbW9kZWwsIGRlZmF1bHRQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgY29tbWFuZEZhY3RvcnkgZnJvbSAnLi9jb21tYW5kLmpzJztcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3QxXCIsIHByaW9yaXR5OlwiSGlnaFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gMVwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiUmVhbGx5IFJlYWxseSBSZWFsbHkgTG9uZyBOYW1lIFRlc3RcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiUmVhbGx5IFJlYWxseSBSZWFsbHkgUmVhbGx5IFJlYWxseSBSZWFsbHkgTG9uZyBEZXNjcmlwdGlvbiBUZXN0XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0M1wiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDNcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3Q0XCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gNFwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDVcIiwgcHJpb3JpdHk6XCJNZWRpdW1cIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDVcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3Q2XCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gNlwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDdcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiA3XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0OFwiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDhcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3Q5XCIsIHByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiA5XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0MTBcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxMFwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDExXCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gMTFcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3QxMlwiLCBwcmlvcml0eTpcIkxvd1wiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gMTJcIn0pKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=