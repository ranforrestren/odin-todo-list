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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    font-family:'Times New Roman', Times, serif;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n    width: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1300px;\n    margin: auto;\n}\n\n#projectBar {\n    height: 800px;\n    width: 300px;\n    background-color: rgba(225, 225, 225, 0.8);\n    border-radius: 20px 0px 0px 20px;\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 40px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding-right: 20px;\n    gap: 20px;\n    overflow: auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    box-sizing: border-box;\n    height: 80px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 80px;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #f87171;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #fcd34d;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #bef264;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    font-weight: 500;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 700;\n    width: 80px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 300px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.edit {\n    background-color: #FFD740;\n}\n\n.button.delete {\n    background-color: #FF6E40;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(200, 200, 200, 0.8);\n    border-radius: 10px;\n  }\n\n::-webkit-scrollbar-thumb {\n    background: rgba(180, 180, 180, 0.8);\n    border-radius: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,aAAa;IACb,WAAW;IACX,yDAAwC;IACxC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,0CAA0C;IAC1C,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;IAClB,0CAA0C;IAC1C,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,0CAA0C;IAC1C,mBAAmB;EACrB;;AAEF;IACI,oCAAoC;IACpC,mBAAmB;AACvB","sourcesContent":["body {\n    margin: 0px;\n    font-family:'Times New Roman', Times, serif;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n    width: 100%;\n    background-image: url(./background.jpeg);\n    background-size: cover;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1300px;\n    margin: auto;\n}\n\n#projectBar {\n    height: 800px;\n    width: 300px;\n    background-color: rgba(225, 225, 225, 0.8);\n    border-radius: 20px 0px 0px 20px;\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 40px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding-right: 20px;\n    gap: 20px;\n    overflow: auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    box-sizing: border-box;\n    height: 80px;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 80px;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #f87171;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #fcd34d;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #bef264;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    font-weight: 500;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 700;\n    width: 80px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 300px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.edit {\n    background-color: #FFD740;\n}\n\n.button.delete {\n    background-color: #FF6E40;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(200, 200, 200, 0.8);\n    border-radius: 10px;\n  }\n\n::-webkit-scrollbar-thumb {\n    background: rgba(180, 180, 180, 0.8);\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
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
    // Sends request to add Todo
    createTodoReq(taskName, priority, dueDate, description) {
        _model_js__WEBPACK_IMPORTED_MODULE_0__.model.createTodo(_model_js__WEBPACK_IMPORTED_MODULE_0__.defaultProject, taskName, priority, dueDate, description);
    },

    // Sends request to delete Todo
    deleteTodoReq(id) {
        _model_js__WEBPACK_IMPORTED_MODULE_0__.model.deleteTodo(_model_js__WEBPACK_IMPORTED_MODULE_0__.defaultProject, id);
    },

    // Handles create todo click event
    handleCreateTodoClick(taskName, priority, dueDate, description) {
        _model_js__WEBPACK_IMPORTED_MODULE_0__.model.createTodo(_model_js__WEBPACK_IMPORTED_MODULE_0__.defaultProject, taskName, priority, dueDate, description);
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
    },

    // Handle read todo click event
    handleReadTodoClick(e) {
        const readTodo = _model_js__WEBPACK_IMPORTED_MODULE_0__.model.readTodo(_model_js__WEBPACK_IMPORTED_MODULE_0__.defaultProject, e.currentTarget.dataset.id);
        // Populates modal with correct info and opens it
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].addDataModal(readTodo.taskName, readTodo.priority, readTodo.dueDate, readTodo.description);
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].setModalButtonBehavior("update", e.currentTarget.dataset.id);
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].openModal();
    },
    
    // Handle update todo click event
    handleUpdateTodoClick(id, taskName, priority, dueDate, description) {
        _model_js__WEBPACK_IMPORTED_MODULE_0__.model.updateTodo(undefined, id, taskName, priority, dueDate, description);
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
    },

    // Handle delete todo click event
    handleDeleteTodoClick(e) {
        _model_js__WEBPACK_IMPORTED_MODULE_0__.model.deleteTodo(_model_js__WEBPACK_IMPORTED_MODULE_0__.defaultProject, e.target.dataset.id);
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

    // Constructor for List objects
    todoFactory(id, taskName, priority, dueDate, description) {
        return { id, taskName, priority, dueDate, description };
    },

    // Create todo
    createTodo(project = defaultProject, taskName, priority, dueDate = '', description) {
        const todo = model.todoFactory(project.listItems.length, taskName, priority, dueDate, description);
        project.listItems.push(todo);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].refreshViewTodosReq(defaultProject);
    },

    // Read todo
    readTodo(project = defaultProject, id) {
        const todo = project.listItems.find(matchTodo => matchTodo.id == id);
        return todo;
    },

    // Update todo
    updateTodo(project = defaultProject, id, newName, newPrio, newDate, newDesc) {
        // Finds todo with correct id and edits values
        const todo = project.listItems.find(matchTodo => matchTodo.id == id);
        if (newName != undefined) { todo.taskName = newName }
        if (newPrio != undefined) { todo.priority = newPrio }
        if (newDate != undefined) { todo.dueDate = newDate }
        if (newDesc != undefined) { todo.description = newDesc }
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].refreshViewTodosReq(defaultProject);
    },

    // Delete todo
    deleteTodo(project = defaultProject, id) {
        // Finds todo with correct id and deletes it
        const index = project.listItems.findIndex(todo => todo.id == id);
        if (index > -1) { project.listItems.splice(index, 1) }
        // Remaps ids for index
        project.listItems.forEach((todo, i) => {
            todo.id = i;
        })
        // Sends request to refresh todo list
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].refreshViewTodosReq(defaultProject);
    },
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
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");



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
        const todoEditButton = document.createElement('button');
        todoEditButton.classList.add('button', 'edit');
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
        todoElement.append(todoPriority, todoName, todoDueDate, todoDescription, todoEditButton, todoDeleteButton);
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

    // Event for when create todo button is clicked
    createTodoClickEvent() {
        const taskName = document.getElementById('taskName').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleCreateTodoClick(taskName, priority, dueDate, description);
    },
    
    // Event for when update todo button is click
    updateTodoClickEvent(e) {
        const id = e.currentTarget.dataset.id;
        const taskName = document.getElementById('taskName').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleUpdateTodoClick(id, taskName, priority, dueDate, description);
    },

    // Event for when read todo event is fired
    readTodoClickEvent(e) {
        _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleReadTodoClick(e);
    },

    // Event for when delete todo button is clicked
    deleteTodoClickEvent(e) {
        e.stopPropagation();
        _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleDeleteTodoClick(e);
    },

    // Event for when open modal button is clicked
    openModalClickEvent() {
        _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleOpenModalClick();
    },

    // Event for when the close modal area (overlay) is clicked
    closeModalClickEvent(e) {
        // Check if overlay and not modal was targetted with click
        if (e.target === this) {
            _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleCloseModalClick();
        }
    }, 
}

// Setup event listeners
openModalButton.addEventListener('click', view.openModalClickEvent);
overlay.addEventListener('click', view.closeModalClickEvent);

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



const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test1", "High", currentDate, "Test Description 1");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Really Really Really Long Name Test", "Default", currentDate, "Really Really Really Really Really Really Long Description Test");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test3", "Default", currentDate, "Test Description 3");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test4", "Default", currentDate, "Test Description 4");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test5", "Medium", currentDate, "Test Description 5");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test6", "Default", currentDate, "Test Description 6");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test7", "Default", currentDate, "Test Description 7");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test8", "Default", currentDate, "Test Description 8");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test9", "Low", currentDate, "Test Description 9");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test10", "Default", currentDate, "Test Description 10");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test11", "Default", currentDate, "Test Description 11");
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createTodo(undefined, "Test12", "Low", currentDate, "Test Description 12");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM4Qjs7QUFFbkQ7QUFDQTs7QUFFQSx1REFBZ0I7QUFDaEIsdURBQWdCO0FBQ2hCLHVEQUFnQjtBQUNoQix1REFBZ0I7QUFDaEIsdURBQWdCO0FBQ2hCLHVEQUFnQjtBQUNoQix1REFBZ0I7QUFDaEIsdURBQWdCO0FBQ2hCLHVEQUFnQjtBQUNoQix1REFBZ0I7QUFDaEIsdURBQWdCO0FBQ2hCLHVEQUFnQixpRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI21haW5Db250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDEzMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdEJhciB7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG59XFxuXFxuI3RvZG9XcmFwcGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDQwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcXG59XFxuXFxuI3RvZG9CYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kb0l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHkge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkhpZ2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiTWVkaXVtXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkMzRkO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlZjI2NDtcXG59XFxuXFxuLnRvZG9JdGVtIC5uYW1lIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50b2RvSXRlbSAuZHVlRGF0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJGRjU5O1xcbn1cXG5cXG4uYnV0dG9uLnNtYWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW0gLmJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDc0MDtcXG59XFxuXFxuLmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RTQwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udGV4dElucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kYXRlSW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaW9yaXR5SW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW5wdXQjZGVzY3JpcHRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLHlEQUF3QztJQUN4QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG1CQUFtQjtFQUNyQjs7QUFFRjtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2JhY2tncm91bmQuanBlZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNtYWluQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiAxMzAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI3Byb2plY3RCYXIge1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxufVxcblxcbiN0b2RvV3JhcHBlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDkwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggNDBweCA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XFxufVxcblxcbiN0b2RvQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA3MjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG9JdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJIaWdoXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg3MTcxO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIk1lZGl1bVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDM0ZDtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJMb3dcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWYyNjQ7XFxufVxcblxcbi50b2RvSXRlbSAubmFtZSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmR1ZURhdGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuLnRvZG9JdGVtIC5kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IyRkY1OTtcXG59XFxuXFxuLmJ1dHRvbi5zbWFsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtIC5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idXR0b24uZWRpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3NDA7XFxufVxcblxcbi5idXR0b24uZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkU0MDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnRleHRJbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGF0ZUlucHV0IHtcXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmlvcml0eUlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5pbnB1dCNkZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG1vZGVsLCBkZWZhdWx0UHJvamVjdCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi92aWV3LmpzJztcblxuLy8gQ09OVFJPTExFUlxuY29uc3QgY29udHJvbGxlciA9IHtcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIGFkZCBUb2RvXG4gICAgY3JlYXRlVG9kb1JlcSh0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIG1vZGVsLmNyZWF0ZVRvZG8oZGVmYXVsdFByb2plY3QsIHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgIH0sXG5cbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIGRlbGV0ZSBUb2RvXG4gICAgZGVsZXRlVG9kb1JlcShpZCkge1xuICAgICAgICBtb2RlbC5kZWxldGVUb2RvKGRlZmF1bHRQcm9qZWN0LCBpZCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgY3JlYXRlIHRvZG8gY2xpY2sgZXZlbnRcbiAgICBoYW5kbGVDcmVhdGVUb2RvQ2xpY2sodGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBtb2RlbC5jcmVhdGVUb2RvKGRlZmF1bHRQcm9qZWN0LCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdmlldy5jbG9zZU1vZGFsKCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZSByZWFkIHRvZG8gY2xpY2sgZXZlbnRcbiAgICBoYW5kbGVSZWFkVG9kb0NsaWNrKGUpIHtcbiAgICAgICAgY29uc3QgcmVhZFRvZG8gPSBtb2RlbC5yZWFkVG9kbyhkZWZhdWx0UHJvamVjdCwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICAvLyBQb3B1bGF0ZXMgbW9kYWwgd2l0aCBjb3JyZWN0IGluZm8gYW5kIG9wZW5zIGl0XG4gICAgICAgIHZpZXcuYWRkRGF0YU1vZGFsKHJlYWRUb2RvLnRhc2tOYW1lLCByZWFkVG9kby5wcmlvcml0eSwgcmVhZFRvZG8uZHVlRGF0ZSwgcmVhZFRvZG8uZGVzY3JpcHRpb24pO1xuICAgICAgICB2aWV3LnNldE1vZGFsQnV0dG9uQmVoYXZpb3IoXCJ1cGRhdGVcIiwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICB2aWV3Lm9wZW5Nb2RhbCgpO1xuICAgIH0sXG4gICAgXG4gICAgLy8gSGFuZGxlIHVwZGF0ZSB0b2RvIGNsaWNrIGV2ZW50XG4gICAgaGFuZGxlVXBkYXRlVG9kb0NsaWNrKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIG1vZGVsLnVwZGF0ZVRvZG8odW5kZWZpbmVkLCBpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHZpZXcuY2xvc2VNb2RhbCgpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGUgZGVsZXRlIHRvZG8gY2xpY2sgZXZlbnRcbiAgICBoYW5kbGVEZWxldGVUb2RvQ2xpY2soZSkge1xuICAgICAgICBtb2RlbC5kZWxldGVUb2RvKGRlZmF1bHRQcm9qZWN0LCBlLnRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyBvcGVuIG1vZGFsIGNsaWNrIGV2ZW50XG4gICAgaGFuZGxlT3Blbk1vZGFsQ2xpY2soKSB7XG4gICAgICAgIHZpZXcuc2V0TW9kYWxCdXR0b25CZWhhdmlvcihcImNyZWF0ZVwiKTtcbiAgICAgICAgdmlldy5vcGVuTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyBjbG9zZSBtb2RhbCBjbGljayBldmVudFxuICAgIGhhbmRsZUNsb3NlTW9kYWxDbGljaygpIHtcbiAgICAgICAgdmlldy5jbG9zZU1vZGFsKCk7XG4gICAgfSxcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIHVwZGF0ZSBET00gUHJvamVjdHNcbiAgICBcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIHVwZGF0ZSBET00gVG9kb3NcbiAgICByZWZyZXNoVmlld1RvZG9zUmVxKHByb2plY3QpIHtcbiAgICAgICAgdmlldy5kaXNwbGF5VG9kb3MocHJvamVjdCk7XG4gICAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjsiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5cbi8vIENvbnN0cnVjdG9yIGZvciBQcm9qZWN0IG9iamVjdHNcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHByb2plY3ROYW1lLCBjb2xvclRhZykgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IFtdO1xuICAgIHJldHVybiB7IGxpc3RJdGVtcywgcHJvamVjdE5hbWUsIGNvbG9yVGFnIH1cbn1cblxuLy8gRGVmYXVsdCBwcm9qZWN0IG9iamVjdFxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSgnZGVmYXVsdCcsICd3aGl0ZScpO1xuXG4vLyBNT0RFTCBDT05UUk9MTEVSXG5jb25zdCBtb2RlbCA9IHtcblxuICAgIC8vIENvbnN0cnVjdG9yIGZvciBMaXN0IG9iamVjdHNcbiAgICB0b2RvRmFjdG9yeShpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4geyBpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbiB9O1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgdG9kb1xuICAgIGNyZWF0ZVRvZG8ocHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0LCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUgPSAnJywgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IG1vZGVsLnRvZG9GYWN0b3J5KHByb2plY3QubGlzdEl0ZW1zLmxlbmd0aCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHByb2plY3QubGlzdEl0ZW1zLnB1c2godG9kbyk7XG4gICAgICAgIGNvbnRyb2xsZXIucmVmcmVzaFZpZXdUb2Rvc1JlcShkZWZhdWx0UHJvamVjdCk7XG4gICAgfSxcblxuICAgIC8vIFJlYWQgdG9kb1xuICAgIHJlYWRUb2RvKHByb2plY3QgPSBkZWZhdWx0UHJvamVjdCwgaWQpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmQobWF0Y2hUb2RvID0+IG1hdGNoVG9kby5pZCA9PSBpZCk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgdG9kb1xuICAgIHVwZGF0ZVRvZG8ocHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0LCBpZCwgbmV3TmFtZSwgbmV3UHJpbywgbmV3RGF0ZSwgbmV3RGVzYykge1xuICAgICAgICAvLyBGaW5kcyB0b2RvIHdpdGggY29ycmVjdCBpZCBhbmQgZWRpdHMgdmFsdWVzXG4gICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0Lmxpc3RJdGVtcy5maW5kKG1hdGNoVG9kbyA9PiBtYXRjaFRvZG8uaWQgPT0gaWQpO1xuICAgICAgICBpZiAobmV3TmFtZSAhPSB1bmRlZmluZWQpIHsgdG9kby50YXNrTmFtZSA9IG5ld05hbWUgfVxuICAgICAgICBpZiAobmV3UHJpbyAhPSB1bmRlZmluZWQpIHsgdG9kby5wcmlvcml0eSA9IG5ld1ByaW8gfVxuICAgICAgICBpZiAobmV3RGF0ZSAhPSB1bmRlZmluZWQpIHsgdG9kby5kdWVEYXRlID0gbmV3RGF0ZSB9XG4gICAgICAgIGlmIChuZXdEZXNjICE9IHVuZGVmaW5lZCkgeyB0b2RvLmRlc2NyaXB0aW9uID0gbmV3RGVzYyB9XG4gICAgICAgIGNvbnRyb2xsZXIucmVmcmVzaFZpZXdUb2Rvc1JlcShkZWZhdWx0UHJvamVjdCk7XG4gICAgfSxcblxuICAgIC8vIERlbGV0ZSB0b2RvXG4gICAgZGVsZXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGlkKSB7XG4gICAgICAgIC8vIEZpbmRzIHRvZG8gd2l0aCBjb3JyZWN0IGlkIGFuZCBkZWxldGVzIGl0XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC5saXN0SXRlbXMuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PSBpZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7IHByb2plY3QubGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMSkgfVxuICAgICAgICAvLyBSZW1hcHMgaWRzIGZvciBpbmRleFxuICAgICAgICBwcm9qZWN0Lmxpc3RJdGVtcy5mb3JFYWNoKCh0b2RvLCBpKSA9PiB7XG4gICAgICAgICAgICB0b2RvLmlkID0gaTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gU2VuZHMgcmVxdWVzdCB0byByZWZyZXNoIHRvZG8gbGlzdFxuICAgICAgICBjb250cm9sbGVyLnJlZnJlc2hWaWV3VG9kb3NSZXEoZGVmYXVsdFByb2plY3QpO1xuICAgIH0sXG59XG5cbmV4cG9ydCB7XG4gICAgbW9kZWwsXG4gICAgZGVmYXVsdFByb2plY3Rcbn0iLCJpbXBvcnQgeyBtb2RlbCwgZGVmYXVsdFByb2plY3QgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cbi8vIERPTSBFbGVtZW50IFNldHVwXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9CYXInKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTmFtZScpO1xuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbmNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1ByaW9yaXR5Jyk7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5cbmNvbnN0IG9wZW5Nb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuTW9kYWxCdXR0b24nKTtcbmNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQnV0dG9uJyk7XG5cbi8vIFNldHVwIGRlZmF1bHQgZGF0ZSBmb3IgaW5wdXRzIChDYW4gbW92ZSBpbnRvIG93biBmdW5jdGlvbiBpbiByZWZhY3Rvcj8pXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuLy8gVklFVyBDT05UUk9MTEVSXG5jb25zdCB2aWV3ID0ge1xuXG4gICAgLy8gQ3JlYXRlcyB0b2RvIGl0ZW1cbiAgICBjcmVhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0b2RvIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2VkaXQnKTtcbiAgICAgICAgY29uc3QgdG9kb0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdkZWxldGUnKTtcbiAgICAgICAgLy8gQWRkIGlkIGRhdGEtYXR0cmlidXRlIHRvIGVsZW1lbnRzXG4gICAgICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIC8vIEFkZHMgZXZlbnQgaGFuZGxlciBmb3IgZGVsZXRpbmcgdG9kb1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIC8vIEFkZHMgZXZlbnQgaGFuZGxlciBmb3Igb3BlbmluZyB0b2RvXG4gICAgICAgIHRvZG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWFkVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICAvLyBTZXRzIGNvcnJlY3QgcHJpb3JpdHkgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgICAgICAvLyBJbmplY3RzIGRhdGEgdG8gdG9kbyBlbGVtZW50c1xuICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAvLyBBZGRzIHRvZG8gdG8gdGhlIERPTVxuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb1ByaW9yaXR5LCB0b2RvTmFtZSwgdG9kb0R1ZURhdGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0VkaXRCdXR0b24sIHRvZG9EZWxldGVCdXR0b24pO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICB9LFxuXG4gICAgLy8gVXBkYXRlcyBlbnRpcmUgdG9kbyBsaXN0XG4gICAgZGlzcGxheVRvZG9zKHByb2plY3QpIHtcbiAgICAgICAgcm9vdC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgcHJvamVjdC5saXN0SXRlbXMuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyh0b2RvLmlkLCB0b2RvLnRhc2tOYW1lLCB0b2RvLnByaW9yaXR5LCB0b2RvLmR1ZURhdGUsIHRvZG8uZGVzY3JpcHRpb24pO1xuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICAvLyBQb3B1bGF0ZXMgbW9kYWwgd2l0aCBwcm92aWRlZCBpbmZvXG4gICAgYWRkRGF0YU1vZGFsKHRhc2tOYW1lID0gXCJcIiwgcHJpb3JpdHkgPSBcIkRlZmF1bHRcIiwgZHVlRGF0ZSA9IGN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcbiAgICAgICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IHRhc2tOYW1lO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnREYXRlO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb247XG4gICAgfSxcblxuICAgIC8vIE9wZW5zIG1vZGFsXG4gICAgb3Blbk1vZGFsKCkge1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9LFxuXG4gICAgLy8gQ2xvc2UgbW9kYWxcbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICAvLyBSZXNldHMgaW5wdXRzIGluIG1vZGFsXG4gICAgICAgIHRoaXMuYWRkRGF0YU1vZGFsKCk7XG4gICAgICAgIC8vIEhpZGVzIG1vZGFsXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0sXG4gICAgXG4gICAgLy8gU2V0cyBiZWhhdmlvciBtb2RhbCBidXR0b24gdG8gYWRkIC8gZWRpdFxuICAgIHNldE1vZGFsQnV0dG9uQmVoYXZpb3IobW9kZSwgaWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVNb2RhbEJ1dHRvbkxpc3RlbmVycygpO1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJjcmVhdGVcIikge1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1tb2RlXCIsIFwiY3JlYXRlXCIpO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyZWF0ZVRvZG9DbGlja0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RlID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGVcIiwgXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZXMgbW9kYWwgYnV0dG9uIGxpc3RlbmVyc1xuICAgIHJlbW92ZU1vZGFsQnV0dG9uTGlzdGVuZXJzKCkge1xuICAgICAgICBtb2RhbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICBtb2RhbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiBjcmVhdGUgdG9kbyBidXR0b24gaXMgY2xpY2tlZFxuICAgIGNyZWF0ZVRvZG9DbGlja0V2ZW50KCkge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQ3JlYXRlVG9kb0NsaWNrKHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgIH0sXG4gICAgXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gdXBkYXRlIHRvZG8gYnV0dG9uIGlzIGNsaWNrXG4gICAgdXBkYXRlVG9kb0NsaWNrRXZlbnQoZSkge1xuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVXBkYXRlVG9kb0NsaWNrKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gcmVhZCB0b2RvIGV2ZW50IGlzIGZpcmVkXG4gICAgcmVhZFRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVSZWFkVG9kb0NsaWNrKGUpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiBkZWxldGUgdG9kbyBidXR0b24gaXMgY2xpY2tlZFxuICAgIGRlbGV0ZVRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVEZWxldGVUb2RvQ2xpY2soZSk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIG9wZW4gbW9kYWwgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBvcGVuTW9kYWxDbGlja0V2ZW50KCkge1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU9wZW5Nb2RhbENsaWNrKCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIHRoZSBjbG9zZSBtb2RhbCBhcmVhIChvdmVybGF5KSBpcyBjbGlja2VkXG4gICAgY2xvc2VNb2RhbENsaWNrRXZlbnQoZSkge1xuICAgICAgICAvLyBDaGVjayBpZiBvdmVybGF5IGFuZCBub3QgbW9kYWwgd2FzIHRhcmdldHRlZCB3aXRoIGNsaWNrXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVDbG9zZU1vZGFsQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH0sIFxufVxuXG4vLyBTZXR1cCBldmVudCBsaXN0ZW5lcnNcbm9wZW5Nb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXcub3Blbk1vZGFsQ2xpY2tFdmVudCk7XG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlldy5jbG9zZU1vZGFsQ2xpY2tFdmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbW9kZWwsIGRlZmF1bHRQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG5tb2RlbC5jcmVhdGVUb2RvKHVuZGVmaW5lZCwgXCJUZXN0MVwiLCBcIkhpZ2hcIiwgY3VycmVudERhdGUsIFwiVGVzdCBEZXNjcmlwdGlvbiAxXCIpO1xubW9kZWwuY3JlYXRlVG9kbyh1bmRlZmluZWQsIFwiUmVhbGx5IFJlYWxseSBSZWFsbHkgTG9uZyBOYW1lIFRlc3RcIiwgXCJEZWZhdWx0XCIsIGN1cnJlbnREYXRlLCBcIlJlYWxseSBSZWFsbHkgUmVhbGx5IFJlYWxseSBSZWFsbHkgUmVhbGx5IExvbmcgRGVzY3JpcHRpb24gVGVzdFwiKTtcbm1vZGVsLmNyZWF0ZVRvZG8odW5kZWZpbmVkLCBcIlRlc3QzXCIsIFwiRGVmYXVsdFwiLCBjdXJyZW50RGF0ZSwgXCJUZXN0IERlc2NyaXB0aW9uIDNcIik7XG5tb2RlbC5jcmVhdGVUb2RvKHVuZGVmaW5lZCwgXCJUZXN0NFwiLCBcIkRlZmF1bHRcIiwgY3VycmVudERhdGUsIFwiVGVzdCBEZXNjcmlwdGlvbiA0XCIpO1xubW9kZWwuY3JlYXRlVG9kbyh1bmRlZmluZWQsIFwiVGVzdDVcIiwgXCJNZWRpdW1cIiwgY3VycmVudERhdGUsIFwiVGVzdCBEZXNjcmlwdGlvbiA1XCIpO1xubW9kZWwuY3JlYXRlVG9kbyh1bmRlZmluZWQsIFwiVGVzdDZcIiwgXCJEZWZhdWx0XCIsIGN1cnJlbnREYXRlLCBcIlRlc3QgRGVzY3JpcHRpb24gNlwiKTtcbm1vZGVsLmNyZWF0ZVRvZG8odW5kZWZpbmVkLCBcIlRlc3Q3XCIsIFwiRGVmYXVsdFwiLCBjdXJyZW50RGF0ZSwgXCJUZXN0IERlc2NyaXB0aW9uIDdcIik7XG5tb2RlbC5jcmVhdGVUb2RvKHVuZGVmaW5lZCwgXCJUZXN0OFwiLCBcIkRlZmF1bHRcIiwgY3VycmVudERhdGUsIFwiVGVzdCBEZXNjcmlwdGlvbiA4XCIpO1xubW9kZWwuY3JlYXRlVG9kbyh1bmRlZmluZWQsIFwiVGVzdDlcIiwgXCJMb3dcIiwgY3VycmVudERhdGUsIFwiVGVzdCBEZXNjcmlwdGlvbiA5XCIpO1xubW9kZWwuY3JlYXRlVG9kbyh1bmRlZmluZWQsIFwiVGVzdDEwXCIsIFwiRGVmYXVsdFwiLCBjdXJyZW50RGF0ZSwgXCJUZXN0IERlc2NyaXB0aW9uIDEwXCIpO1xubW9kZWwuY3JlYXRlVG9kbyh1bmRlZmluZWQsIFwiVGVzdDExXCIsIFwiRGVmYXVsdFwiLCBjdXJyZW50RGF0ZSwgXCJUZXN0IERlc2NyaXB0aW9uIDExXCIpO1xubW9kZWwuY3JlYXRlVG9kbyh1bmRlZmluZWQsIFwiVGVzdDEyXCIsIFwiTG93XCIsIGN1cnJlbnREYXRlLCBcIlRlc3QgRGVzY3JpcHRpb24gMTJcIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9