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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\nbody, input, textarea {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 300;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1400px;\n    margin: auto;\n}\n\n#projectWrapper {\n    box-sizing: border-box;\n    width: 400px;\n    padding: 40px 20px 40px 0px;\n    border-radius: 20px 0px 0px 20px;\n    background-color: rgba(225, 225, 225, 0.8);\n}\n\n#projectBar {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.projectItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.projectItem .colorTag {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.projectItem .colorTag[data-color=\"red\"] {\n    background-color: #ef4444;\n}\n\n.projectItem .colorTag[data-color=\"orange\"] {\n    background-color: #f97316;\n}\n\n.projectItem .colorTag[data-color=\"yellow\"] {\n    background-color: #facc15;\n}\n\n.projectItem .colorTag[data-color=\"green\"] {\n    background-color: #a3e635;\n}\n\n.projectItem .colorTag[data-color=\"cyan\"] {\n    background-color: #22d3ee;\n}\n\n.projectItem .colorTag[data-color=\"blue\"] {\n    background-color: #3b82f6;\n}\n\n.projectItem .colorTag[data-color=\"purple\"] {\n    background-color: #a855f7;\n}\n\n.projectItem .colorTag[data-color=\"pink\"] {\n    background-color: #fb7185;\n}\n\n.projectItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 180px;\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 0px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n    overflow: hidden auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.todoItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #ef4444;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #facc15;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #a3e635;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 500;\n    width: 100px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n.createAnimation {\n    animation: zoomCreate normal 0.7s 1 ease-out;\n}\n\n.updateAnimation p{\n    position: relative;\n    animation: shakeUpdate 1.1s 1;\n}\n\n.deleteAnimation {\n    animation: zoomDelete reverse 0.7s forwards 1 ease-out;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button, .projectItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #FF6E40;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n@keyframes zoomCreate {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: 0;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes tiltRead {\n    100% {\n        transform: scale(1.03);\n        margin-bottom: 10px;\n    }\n}\n@keyframes shakeUpdate {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: -16px;\n    }\n    50% {\n        top: 0px;\n    }\n    75% {\n        top: -8px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes zoomDelete {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: -10px;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    background-image: url(./background.jpeg);\n    background-size: cover;\n}\n\nbody, input, textarea {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 300;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1400px;\n    margin: auto;\n}\n\n#projectWrapper {\n    box-sizing: border-box;\n    width: 400px;\n    padding: 40px 20px 40px 0px;\n    border-radius: 20px 0px 0px 20px;\n    background-color: rgba(225, 225, 225, 0.8);\n}\n\n#projectBar {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.projectItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.projectItem .colorTag {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.projectItem .colorTag[data-color=\"red\"] {\n    background-color: #ef4444;\n}\n\n.projectItem .colorTag[data-color=\"orange\"] {\n    background-color: #f97316;\n}\n\n.projectItem .colorTag[data-color=\"yellow\"] {\n    background-color: #facc15;\n}\n\n.projectItem .colorTag[data-color=\"green\"] {\n    background-color: #a3e635;\n}\n\n.projectItem .colorTag[data-color=\"cyan\"] {\n    background-color: #22d3ee;\n}\n\n.projectItem .colorTag[data-color=\"blue\"] {\n    background-color: #3b82f6;\n}\n\n.projectItem .colorTag[data-color=\"purple\"] {\n    background-color: #a855f7;\n}\n\n.projectItem .colorTag[data-color=\"pink\"] {\n    background-color: #fb7185;\n}\n\n.projectItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 180px;\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 0px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n    overflow: hidden auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.todoItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #ef4444;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #facc15;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #a3e635;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 500;\n    width: 100px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n.createAnimation {\n    animation: zoomCreate normal 0.7s 1 ease-out;\n}\n\n.updateAnimation p{\n    position: relative;\n    animation: shakeUpdate 1.1s 1;\n}\n\n.deleteAnimation {\n    animation: zoomDelete reverse 0.7s forwards 1 ease-out;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button, .projectItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #FF6E40;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n@keyframes zoomCreate {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: 0;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes tiltRead {\n    100% {\n        transform: scale(1.03);\n        margin-bottom: 10px;\n    }\n}\n@keyframes shakeUpdate {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: -16px;\n    }\n    50% {\n        top: 0px;\n    }\n    75% {\n        top: -8px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes zoomDelete {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: -10px;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
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
    // Forwards commands to view
    handleViewCommand(command) {
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleCommand(command);
    },
    
    // Forwards commands to model
    handleModelCommand(command) {
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
/* harmony import */ var _command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command.js */ "./src/command.js");



// Constructor for Project objects
const projectFactory = (id, projectName, colorTag) => {
    const listItems = [];
    return { id, listItems, projectName, colorTag }
}

// Holds every project item
const projectHolder = [];

// Default project object
const defaultProject = projectFactory(1, 'default', 'white');
projectHolder.push(projectHolder);

// MODEL CONTROLLER
const model = {
    // ID counter (replace with UUID later?)
    idCounter: 1,
    // ID counter for project items
    projIdCounter: 2,

    // Constructor for List objects
    todoFactory(taskName, priority, dueDate, description) {
        return { taskName, priority, dueDate, description };
    },

    // Reference to currently active project
    currentProject: defaultProject,

    // Que for holding previous done commands
    commandQueue: [],

    // Handles commands
    handleCommand(command) {
        if (command.commandType === "create") {
            this.createTodo(this.currentProject, command);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeModalReq();
        }
        if (command.commandType === "read") {
            const todo = this.readTodo(this.currentProject, command);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].addDataModalReq(todo);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].setModalMode("update", command.parameters.id);
        }
        if (command.commandType === "update") {
            this.updateTodo(this.currentProject, command);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeModalReq();
        }
        if (command.commandType === "delete") {
            this.deleteTodo(this.currentProject, command);
        }
        if (command.commandType === "createProj") {
            this.createProject(command);
        }
        if (command.commandType === "readProj") {
            this.readProject(command);
        }
        if (command.commandType === "undo") {
            const lastCommand = this.commandQueue.pop();
            this.undoCommand(lastCommand);
        } else if (command.commandType !== "read") {
            this.commandQueue.push(command);
        }
    },
    
    // Create project
    createProject(command) {
        let projName = command.parameters.projName;
        let color = command.parameters.color;
        const project = projectFactory(this.projIdCounter, projName, color);
        projectHolder.push(project);
        this.projIdCounter++;
        command.parameters.id = project.id;
        command.parameters.projName = project.projectName;
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
        console.log(project);
    },

    // Read (change) project
    readProject(command) {
        const project = projectHolder.find(project => project.id == command.parameters.id);
        console.log(project);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
        for (const todo of project.listItems) {
            console.log(todo);
            const id = todo.id;
            const taskName = todo.taskName;
            const priority = todo.priority;
            const dueDate = todo.dueDate;
            const description = todo.description;
            const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("create", {id, taskName, priority, dueDate, description});
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
            console.log("TESTED!");
        }
        command.parameters.id = this.currentProject.id;
        this.currentProject = project;
    },

    // Create todo
    createTodo(project = defaultProject, command) {
        let taskName = command.parameters.taskName;
        if (!taskName) { taskName = "Default Name"};
        let priority = command.parameters.priority;
        let dueDate = command.parameters.dueDate;
        let description = command.parameters.description;
        if (!description) { description = "Default Description"};
        const todo = this.todoFactory(taskName, priority, dueDate, description);
        const index = project.listItems.findIndex(todo => todo.id > command.parameters.id );
        // Check if there is an ID (undo operation), if not then assign ID
        if (command.parameters.id) {
            command.commandType = "create";
            todo.id = command.parameters.id;
            const index = project.listItems.findIndex(todo => todo.id > command.parameters.id );
            if (project.listItems[index]) {
                command.parameters.indexID = project.listItems[index].id;
            } else {
                command.parameters.indexID = undefined;
            }
            project.listItems.splice(index, 0, todo);
        } else {
            todo.id = this.idCounter++;
            command.parameters.id = todo.id;
            project.listItems.push(todo);
        }
        // Sends a command for creating the DOM element visually
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
    },

    // Read todo
    readTodo(project = defaultProject, command) {
        const todo = project.listItems.find(todo => todo.id == command.parameters.id);
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
        // Sends a command for updating the DOM element visually
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
        // Reinjects info into command to allow reversal
        for (const property in oldTodo) {
            command.parameters[property] = oldTodo[property];
        }
    },

    // Delete todo
    deleteTodo(project = defaultProject, command) {
        command.commandType = "delete";
        // Finds todo with correct index and deletes it
        const index = project.listItems.findIndex(todo => todo.id == command.parameters.id);
        if (index > -1) { 
            // But not before copying the todo info to allow reversal later...
            const todo = (project.listItems.splice(index, 1))[0];
            for (const property in todo) {
                command.parameters[property] = todo[property];
            }
        }
        // Sends a command for deleting the DOM element visually
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
    },

    // Undoes last command
    undoCommand(command) {
        if (command) {
            if (command.commandType === "create") {
                this.deleteTodo(this.currentProject, command);
            }
            else if (command.commandType === "delete") {
                this.createTodo(this.currentProject, command);
            }
            else if (command.commandType === "update") {
                this.updateTodo(this.currentProject, command);
            }
            else if (command.commandType === "readProj") {
                this.readProject(command);
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
const projBar = document.querySelector('#projectBar');
const todoBar = document.querySelector('#todoBar');
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
    // Handles commands
    handleCommand(command) {
        let id = command.parameters.id;
        let projName = command.parameters.projName;
        let color = command.parameters.color;
        let taskName = command.parameters.taskName;
        let priority = command.parameters.priority;
        let dueDate = command.parameters.dueDate;
        let description = command.parameters.description;
        if (command.commandType === "create") {
            let indexID = command.parameters.indexID;
            this.createTodo(id, taskName, priority, dueDate, description, indexID);
        }
        if (command.commandType === "update") {
            this.updateTodo(id, taskName, priority, dueDate, description);
        }
        if (command.commandType === "delete") {
            this.deleteTodo(id);
        }
        if (command.commandType === "createProj") {
            this.createProject(id, projName, color);
        }
        if (command.commandType === "readProj") {
            this.readProject(id);
            todoBar.replaceChildren();
        }
    },

    // Creates project item
    createProject(id, name, color) {
        // Create project elements
        const projElement = document.createElement('div');
        projElement.classList.add('projectItem', 'createAnimation');
        const projColorTag = document.createElement('div');
        projColorTag.classList.add('colorTag');
        const projName = document.createElement('p');
        projName.classList.add('name');
        const projDeleteButton = document.createElement('button');
        projDeleteButton.classList.add('button', 'delete');
        // Add id data-attribute to elements
        projElement.setAttribute('data-id', id);
        projDeleteButton.setAttribute('data-id', id);
        // Adds event handler for deleting proj

        //todoDeleteButton.addEventListener('click', this.deleteTodoClickEvent);

        // Adds event handler for opening proj

        projElement.addEventListener('click', this.readProjClickEvent);

        // Adds event handler for when animation ends
        projElement.addEventListener('animationend', this.animationEndEvent);
        // Sets correct color tag data attribute
        projColorTag.setAttribute("data-color", color);
        // Injects data to todo elements
        projName.textContent = name;
        projDeleteButton.textContent = 'X';
        // Adds todo to the DOM
        projElement.append(projColorTag, projName, projDeleteButton);
        projBar.appendChild(projElement);
    },

    // Reads project item
    readProject(id) {
        // Tags all required elements of the project item
        const projElement = projBar.querySelector(`[data-id="${id}"`);
        // Adds update animation
        projElement.classList.add('updateAnimation');
    },

    // Creates todo item
    createTodo(id, taskName, priority, dueDate, description, indexID = undefined) {
        // Create todo elements
        const todoElement = document.createElement('div');
        todoElement.classList.add('todoItem', 'createAnimation');
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
        // Adds event handler for when animation ends
        todoElement.addEventListener('animationend', this.animationEndEvent);
        // Sets correct priority data attribute
        todoPriority.setAttribute("data-priority", priority);
        // Injects data to todo elements
        todoName.textContent = taskName;
        todoDueDate.textContent = dueDate;
        todoDescription.textContent = description;
        todoDeleteButton.textContent = 'X';
        // Adds todo to the DOM
        todoElement.append(todoPriority, todoName, todoDueDate, todoDescription, todoDeleteButton);
        if (indexID) {
            // Undo operation
            const afterNode = todoBar.querySelector(`[data-id="${indexID}"`);
            todoBar.insertBefore(todoElement, afterNode);
        } else {
            todoBar.appendChild(todoElement);
        }
    },

    // Updates todo item
    updateTodo(id, taskName, priority, dueDate, description) {
        // Tags all required elements of the todo item
        const todoElement = todoBar.querySelector(`[data-id="${id}"`);
        const todoPriority = todoElement.querySelector('.priority');
        const todoName = todoElement.querySelector('.name');
        const todoDueDate = todoElement.querySelector('.dueDate');
        const todoDescription = todoElement.querySelector('.description');
        // Injects new values to elements
        todoPriority.setAttribute("data-priority", priority);
        todoName.textContent = taskName;
        todoDueDate.textContent = dueDate;
        todoDescription.textContent = description;
        // Adds update animation
        todoElement.classList.add('updateAnimation');
    },

    // Deletes todo item
    deleteTodo(id) {
        // Finds todo element to delete
        const todoElement = todoBar.querySelector(`[data-id="${id}"`);
        // Attaches delete animation
        todoElement.classList.add('deleteAnimation');
        todoElement.classList.remove("updatePlayable");
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

    // Event for when read proj event is fired
    readProjClickEvent(e) {
        // Make sure text is not being selected
        let selection = window.getSelection();
        if (selection.type != "Range") {
            // Create and pass "read" command
            const id = e.currentTarget.dataset.id;
            const parameters = { id: id };
            const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("readProj", parameters);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
        }
    },

    // Event for when create todo event is fired
    createTodoClickEvent() {
        const taskName = document.getElementById('taskName').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        // Create and pass "create" command
        const parameters = { taskName: taskName, priority: priority, dueDate: dueDate, description: description };
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("create", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
    },

    // Event for when read todo event is fired
    readTodoClickEvent(e) {
        // Make sure text is not being selected
        let selection = window.getSelection();
        if (selection.type != "Range") {
            // Create and pass "read" command
            const id = e.currentTarget.dataset.id;
            const parameters = { id: id };
            const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("read", parameters);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
        }
    },

    // Event for when update todo event is fired
    updateTodoClickEvent(e) {
        const id = e.currentTarget.dataset.id;
        const taskName = document.getElementById('taskName').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        // Create and pass "create" command
        const parameters = { id: id, taskName: taskName, priority: priority, dueDate: dueDate, description: description };
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("update", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
    },

    // Event for when delete todo event is fired
    deleteTodoClickEvent(e) {
        e.stopPropagation();
        // Create and pass "delete" command
        const id = e.currentTarget.dataset.id;
        const parameters = { id: id };
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("delete", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
    },

    // Event for when an animation ends
    animationEndEvent(e) {
        if (e.animationName === "zoomCreate") {
            e.currentTarget.classList.remove("createAnimation");
            e.currentTarget.classList.add("updatePlayable");
        } else if (e.animationName === "shakeUpdate") {
            e.currentTarget.classList.remove("updateAnimation");
        } else if (e.animationName === "zoomDelete") {
            e.currentTarget.remove();
        }
    },

    // Event for when undo event is fired
    undoClickEvent() {
        // Create and pass "undo" command
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("undo", undefined);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
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

const command1 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", {projName:"Project 1", color:"red"});
const command2 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", {projName:"Project 2", color:"orange"});
const command3 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", {projName:"Project 3", color:"yellow"});
const command4 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", {projName:"Project 4", color:"green"});
const command5 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", {projName:"Project 5", color:"cyan"});
const command6 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", {projName:"Project 6", color:"blue"});
const command7 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", {projName:"Project 7", color:"purple"});
const command8 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", {projName:"Project 8", color:"pink"});

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createProject(command1);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createProject(command2);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createProject(command3);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createProject(command4);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createProject(command5);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createProject(command6);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createProject(command7);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.createProject(command8);

const command9 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 2});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.readProject(command9);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxHQUFHO0FBQ2xFO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsUUFBUTtBQUN6RTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsR0FBRztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsR0FBRztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDbkIsMERBQW1CO0FBQ25CLDBEQUFtQjtBQUNuQiwwREFBbUI7QUFDbkIsMERBQW1COztBQUVuQixpQkFBaUIsdURBQWMsY0FBYyxNQUFNO0FBQ25ELHdEQUFpQjs7QUFFakIsMERBQW1CLEVBQUUsdURBQWMsWUFBWSx5RkFBeUY7QUFDeEksMERBQW1CLEVBQUUsdURBQWMsWUFBWSx1S0FBdUs7QUFDdE4sMERBQW1CLEVBQUUsdURBQWMsWUFBWSw0RkFBNEY7QUFDM0ksMERBQW1CLEVBQUUsdURBQWMsWUFBWSw0RkFBNEY7QUFDM0ksMERBQW1CLEVBQUUsdURBQWMsWUFBWSwyRkFBMkY7QUFDMUksMERBQW1CLEVBQUUsdURBQWMsWUFBWSw0RkFBNEY7QUFDM0ksMERBQW1CLEVBQUUsdURBQWMsWUFBWSw0RkFBNEY7QUFDM0ksMERBQW1CLEVBQUUsdURBQWMsWUFBWSw0RkFBNEY7QUFDM0ksMERBQW1CLEVBQUUsdURBQWMsWUFBWSx3RkFBd0Y7QUFDdkksMERBQW1CLEVBQUUsdURBQWMsWUFBWSw4RkFBOEY7QUFDN0ksMERBQW1CLEVBQUUsdURBQWMsWUFBWSw4RkFBOEY7QUFDN0ksMERBQW1CLEVBQUUsdURBQWMsWUFBWSwwRkFBMEYsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21tYW5kLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSwgaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI21haW5Db250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDE0MDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdFdyYXBwZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG59XFxuXFxuI3Byb2plY3RCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICAgIGhlaWdodDogNzIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDIwcHggMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggM3B4IDNweCByZ2JhKDEyMiwxMjIsMTIyLDAuMik7XFxufVxcblxcbi5wcm9qZWN0SXRlbS51cGRhdGVQbGF5YWJsZTpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogdGlsdFJlYWQgMC40cyBmb3J3YXJkcyAxIGVhc2UtaW47XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInJlZFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJvcmFuZ2VcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTczMTY7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwieWVsbG93XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjYzE1O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImdyZWVuXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImN5YW5cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmQzZWU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwiYmx1ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJwdXJwbGVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhODU1Zjc7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwicGlua1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzE4NTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5uYW1lIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbn1cXG5cXG4jdG9kb1dyYXBwZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XFxufVxcblxcbiN0b2RvQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA3MjBweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHggMjBweCAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbn1cXG5cXG4udG9kb0l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDNweCAzcHggcmdiYSgxMjIsMTIyLDEyMiwwLjIpO1xcbn1cXG5cXG4udG9kb0l0ZW0udXBkYXRlUGxheWFibGU6aG92ZXIge1xcbiAgICBhbmltYXRpb246IHRpbHRSZWFkIDAuNHMgZm9yd2FyZHMgMSBlYXNlLWluO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJIaWdoXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIk1lZGl1bVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2MxNTtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJMb3dcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcblxcbi50b2RvSXRlbSAubmFtZSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmR1ZURhdGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi50b2RvSXRlbSAuZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogMzQwcHg7XFxufVxcblxcbi5jcmVhdGVBbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IHpvb21DcmVhdGUgbm9ybWFsIDAuN3MgMSBlYXNlLW91dDtcXG59XFxuXFxuLnVwZGF0ZUFuaW1hdGlvbiBwe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogc2hha2VVcGRhdGUgMS4xcyAxO1xcbn1cXG5cXG4uZGVsZXRlQW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiB6b29tRGVsZXRlIHJldmVyc2UgMC43cyBmb3J3YXJkcyAxIGVhc2Utb3V0O1xcbn1cXG5cXG4jYnV0dG9uQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJGRjU5O1xcbn1cXG5cXG4uYnV0dG9uI3VuZG9CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ4O1xcbn1cXG5cXG4uYnV0dG9uLnNtYWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW0gLmJ1dHRvbiwgLnByb2plY3RJdGVtIC5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idXR0b24uZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkU0MDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnRleHRJbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGF0ZUlucHV0IHtcXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmlvcml0eUlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5pbnB1dCNkZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUNyZWF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAyNSU7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwcmVtO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aWx0UmVhZCB7XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBzaGFrZVVwZGF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0b3A6IC0xNnB4O1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdG9wOiAtOHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyB6b29tRGVsZXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDI1JTtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIG1hcmdpbjogLTEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwcmVtO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCx5REFBd0M7SUFDeEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNa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O1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsVUFBVTtRQUNWLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2JhY2tncm91bmQuanBlZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHksIGlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNtYWluQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiAxNDAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI3Byb2plY3RXcmFwcGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggNDBweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxufVxcblxcbiNwcm9qZWN0QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4IDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDNweCAzcHggcmdiYSgxMjIsMTIyLDEyMiwwLjIpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0udXBkYXRlUGxheWFibGU6aG92ZXIge1xcbiAgICBhbmltYXRpb246IHRpbHRSZWFkIDAuNHMgZm9yd2FyZHMgMSBlYXNlLWluO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJyZWRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwib3JhbmdlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk3MzE2O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInllbGxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2MxNTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJncmVlblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJjeWFuXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJkM2VlO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImJsdWVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwicHVycGxlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg1NWY3O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInBpbmtcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjcxODU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAubmFtZSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiAxODBweDtcXG59XFxuXFxuI3RvZG9XcmFwcGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4jdG9kb0JhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNzIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDIwcHggMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG59XFxuXFxuLnRvZG9JdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzcHggM3B4IHJnYmEoMTIyLDEyMiwxMjIsMC4yKTtcXG59XFxuXFxuLnRvZG9JdGVtLnVwZGF0ZVBsYXlhYmxlOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiB0aWx0UmVhZCAwLjRzIGZvcndhcmRzIDEgZWFzZS1pbjtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuOCk7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiSGlnaFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJNZWRpdW1cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNjMTU7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiTG93XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcbn1cXG5cXG4udG9kb0l0ZW0gLm5hbWUge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnRvZG9JdGVtIC5kdWVEYXRlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDM0MHB4O1xcbn1cXG5cXG4uY3JlYXRlQW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiB6b29tQ3JlYXRlIG5vcm1hbCAwLjdzIDEgZWFzZS1vdXQ7XFxufVxcblxcbi51cGRhdGVBbmltYXRpb24gcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IHNoYWtlVXBkYXRlIDEuMXMgMTtcXG59XFxuXFxuLmRlbGV0ZUFuaW1hdGlvbiB7XFxuICAgIGFuaW1hdGlvbjogem9vbURlbGV0ZSByZXZlcnNlIDAuN3MgZm9yd2FyZHMgMSBlYXNlLW91dDtcXG59XFxuXFxuI2J1dHRvbkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IyRkY1OTtcXG59XFxuXFxuLmJ1dHRvbiN1bmRvQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkODtcXG59XFxuXFxuLmJ1dHRvbi5zbWFsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtIC5idXR0b24sIC5wcm9qZWN0SXRlbSAuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLmRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZFNDA7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50ZXh0SW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmRhdGVJbnB1dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlJbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uaW5wdXQjZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbnB1dCNkZXNjcmlwdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21DcmVhdGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQUFBQTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMjUlO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGlsdFJlYWQge1xcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgc2hha2VVcGRhdGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgdG9wOiAtMTZweDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRvcDogLThweDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbURlbGV0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAyNSU7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBtYXJnaW46IC0xMHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb21tYW5kRmFjdG9yeSA9IChjb21tYW5kVHlwZSwgcGFyYW1ldGVycykgPT4ge1xuICAgIHJldHVybiB7IGNvbW1hbmRUeXBlLCBwYXJhbWV0ZXJzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tYW5kRmFjdG9yeTsiLCJpbXBvcnQgeyBtb2RlbCwgZGVmYXVsdFByb2plY3QgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB2aWV3IGZyb20gJy4vdmlldy5qcyc7XG5cbi8vIENPTlRST0xMRVJcbmNvbnN0IGNvbnRyb2xsZXIgPSB7XG4gICAgLy8gRm9yd2FyZHMgY29tbWFuZHMgdG8gdmlld1xuICAgIGhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgdmlldy5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG4gICAgXG4gICAgLy8gRm9yd2FyZHMgY29tbWFuZHMgdG8gbW9kZWxcbiAgICBoYW5kbGVNb2RlbENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGVzIHJlcXVlc3QgdG8gb3BlbiBtb2RhbFxuICAgIG9wZW5Nb2RhbFJlcSgpIHtcbiAgICAgICAgdmlldy5vcGVuTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgc2V0TW9kYWxNb2RlKG1vZGUsIGlkKSB7XG4gICAgICAgIHZpZXcuc2V0TW9kYWxCdXR0b25CZWhhdmlvcihcInVwZGF0ZVwiLCBpZCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgcmVxdWVzdCB0byBpbmplY3QgZGF0YSBpbnRvIG1vZGFsXG4gICAgYWRkRGF0YU1vZGFsUmVxKHRvZG8pIHtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gdG9kby50YXNrTmFtZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIHZpZXcuYWRkRGF0YU1vZGFsKHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICB2aWV3Lm9wZW5Nb2RhbCgpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGVzIHJlcXVlc3QgdG8gY2xvc2UgbW9kYWxcbiAgICBjbG9zZU1vZGFsUmVxKCkge1xuICAgICAgICB2aWV3LmNsb3NlTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyBvcGVuIG1vZGFsIGNsaWNrIGV2ZW50XG4gICAgaGFuZGxlT3Blbk1vZGFsQ2xpY2soKSB7XG4gICAgICAgIHZpZXcuc2V0TW9kYWxCdXR0b25CZWhhdmlvcihcImNyZWF0ZVwiKTtcbiAgICAgICAgdmlldy5vcGVuTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyBjbG9zZSBtb2RhbCBjbGljayBldmVudFxuICAgIGhhbmRsZUNsb3NlTW9kYWxDbGljaygpIHtcbiAgICAgICAgdmlldy5jbG9zZU1vZGFsKCk7XG4gICAgfSxcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIHVwZGF0ZSBET00gUHJvamVjdHNcbiAgICBcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIHVwZGF0ZSBET00gVG9kb3NcbiAgICByZWZyZXNoVmlld1RvZG9zUmVxKHByb2plY3QpIHtcbiAgICAgICAgdmlldy5kaXNwbGF5VG9kb3MocHJvamVjdCk7XG4gICAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjsiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgY29tbWFuZEZhY3RvcnkgZnJvbSBcIi4vY29tbWFuZC5qc1wiO1xuXG4vLyBDb25zdHJ1Y3RvciBmb3IgUHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChpZCwgcHJvamVjdE5hbWUsIGNvbG9yVGFnKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW107XG4gICAgcmV0dXJuIHsgaWQsIGxpc3RJdGVtcywgcHJvamVjdE5hbWUsIGNvbG9yVGFnIH1cbn1cblxuLy8gSG9sZHMgZXZlcnkgcHJvamVjdCBpdGVtXG5jb25zdCBwcm9qZWN0SG9sZGVyID0gW107XG5cbi8vIERlZmF1bHQgcHJvamVjdCBvYmplY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoMSwgJ2RlZmF1bHQnLCAnd2hpdGUnKTtcbnByb2plY3RIb2xkZXIucHVzaChwcm9qZWN0SG9sZGVyKTtcblxuLy8gTU9ERUwgQ09OVFJPTExFUlxuY29uc3QgbW9kZWwgPSB7XG4gICAgLy8gSUQgY291bnRlciAocmVwbGFjZSB3aXRoIFVVSUQgbGF0ZXI/KVxuICAgIGlkQ291bnRlcjogMSxcbiAgICAvLyBJRCBjb3VudGVyIGZvciBwcm9qZWN0IGl0ZW1zXG4gICAgcHJvaklkQ291bnRlcjogMixcblxuICAgIC8vIENvbnN0cnVjdG9yIGZvciBMaXN0IG9iamVjdHNcbiAgICB0b2RvRmFjdG9yeSh0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB7IHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24gfTtcbiAgICB9LFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIGN1cnJlbnRseSBhY3RpdmUgcHJvamVjdFxuICAgIGN1cnJlbnRQcm9qZWN0OiBkZWZhdWx0UHJvamVjdCxcblxuICAgIC8vIFF1ZSBmb3IgaG9sZGluZyBwcmV2aW91cyBkb25lIGNvbW1hbmRzXG4gICAgY29tbWFuZFF1ZXVlOiBbXSxcblxuICAgIC8vIEhhbmRsZXMgY29tbWFuZHNcbiAgICBoYW5kbGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNb2RhbFJlcSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcInJlYWRcIikge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IHRoaXMucmVhZFRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZERhdGFNb2RhbFJlcSh0b2RvKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc2V0TW9kYWxNb2RlKFwidXBkYXRlXCIsIGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNb2RhbFJlcSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFByb2pcIikge1xuICAgICAgICAgICAgdGhpcy5yZWFkUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1bmRvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDb21tYW5kID0gdGhpcy5jb21tYW5kUXVldWUucG9wKCk7XG4gICAgICAgICAgICB0aGlzLnVuZG9Db21tYW5kKGxhc3RDb21tYW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlICE9PSBcInJlYWRcIikge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kUXVldWUucHVzaChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLy8gQ3JlYXRlIHByb2plY3RcbiAgICBjcmVhdGVQcm9qZWN0KGNvbW1hbmQpIHtcbiAgICAgICAgbGV0IHByb2pOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnByb2pOYW1lO1xuICAgICAgICBsZXQgY29sb3IgPSBjb21tYW5kLnBhcmFtZXRlcnMuY29sb3I7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aGlzLnByb2pJZENvdW50ZXIsIHByb2pOYW1lLCBjb2xvcik7XG4gICAgICAgIHByb2plY3RIb2xkZXIucHVzaChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy5wcm9qSWRDb3VudGVyKys7XG4gICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5pZCA9IHByb2plY3QuaWQ7XG4gICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5wcm9qTmFtZSA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIH0sXG5cbiAgICAvLyBSZWFkIChjaGFuZ2UpIHByb2plY3RcbiAgICByZWFkUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SG9sZGVyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgcHJvamVjdC5saXN0SXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0b2RvLmlkO1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0b2RvLnRhc2tOYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7aWQsIHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb259KTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRFU1RFRCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmlkID0gdGhpcy5jdXJyZW50UHJvamVjdC5pZDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZSB0b2RvXG4gICAgY3JlYXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lO1xuICAgICAgICBpZiAoIXRhc2tOYW1lKSB7IHRhc2tOYW1lID0gXCJEZWZhdWx0IE5hbWVcIn07XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGNvbW1hbmQucGFyYW1ldGVycy5wcmlvcml0eTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBjb21tYW5kLnBhcmFtZXRlcnMuZHVlRGF0ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gY29tbWFuZC5wYXJhbWV0ZXJzLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uKSB7IGRlc2NyaXB0aW9uID0gXCJEZWZhdWx0IERlc2NyaXB0aW9uXCJ9O1xuICAgICAgICBjb25zdCB0b2RvID0gdGhpcy50b2RvRmFjdG9yeSh0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0Lmxpc3RJdGVtcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID4gY29tbWFuZC5wYXJhbWV0ZXJzLmlkICk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFuIElEICh1bmRvIG9wZXJhdGlvbiksIGlmIG5vdCB0aGVuIGFzc2lnbiBJRFxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLmlkKSB7XG4gICAgICAgICAgICBjb21tYW5kLmNvbW1hbmRUeXBlID0gXCJjcmVhdGVcIjtcbiAgICAgICAgICAgIHRvZG8uaWQgPSBjb21tYW5kLnBhcmFtZXRlcnMuaWQ7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPiBjb21tYW5kLnBhcmFtZXRlcnMuaWQgKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lmxpc3RJdGVtc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHByb2plY3QubGlzdEl0ZW1zW2luZGV4XS5pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmluZGV4SUQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0Lmxpc3RJdGVtcy5zcGxpY2UoaW5kZXgsIDAsIHRvZG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kby5pZCA9IHRoaXMuaWRDb3VudGVyKys7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaWQgPSB0b2RvLmlkO1xuICAgICAgICAgICAgcHJvamVjdC5saXN0SXRlbXMucHVzaCh0b2RvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZW5kcyBhIGNvbW1hbmQgZm9yIGNyZWF0aW5nIHRoZSBET00gZWxlbWVudCB2aXN1YWxseVxuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBSZWFkIHRvZG9cbiAgICByZWFkVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgdG9kb1xuICAgIHVwZGF0ZVRvZG8ocHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0LCBjb21tYW5kKSB7XG4gICAgICAgIC8vIEZpbmRzIHRvZG8gd2l0aCBjb3JyZWN0IGlkXG4gICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0Lmxpc3RJdGVtcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PSBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICAvLyBTYXZlcyBpbmZvIHRvIGFsbG93IHJldmVyc2FsIGxhdGVyXG4gICAgICAgIGNvbnN0IG9sZFRvZG8gPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0b2RvKSB7XG4gICAgICAgICAgICBvbGRUb2RvW3Byb3BlcnR5XSA9IHRvZG9bcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVkaXRzIHZhbHVlc1xuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lICE9IHVuZGVmaW5lZCkgeyB0b2RvLnRhc2tOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lIH1cbiAgICAgICAgaWYgKGNvbW1hbmQucGFyYW1ldGVycy5wcmlvcml0eSAhPSB1bmRlZmluZWQpIHsgdG9kby5wcmlvcml0eSA9IGNvbW1hbmQucGFyYW1ldGVycy5wcmlvcml0eSB9XG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMuZHVlRGF0ZSAhPSB1bmRlZmluZWQpIHsgdG9kby5kdWVEYXRlID0gY29tbWFuZC5wYXJhbWV0ZXJzLmR1ZURhdGUgfVxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLmRlc2NyaXB0aW9uICE9IHVuZGVmaW5lZCkgeyB0b2RvLmRlc2NyaXB0aW9uID0gY29tbWFuZC5wYXJhbWV0ZXJzLmRlc2NyaXB0aW9uIH1cbiAgICAgICAgLy8gU2VuZHMgYSBjb21tYW5kIGZvciB1cGRhdGluZyB0aGUgRE9NIGVsZW1lbnQgdmlzdWFsbHlcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVWaWV3Q29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgLy8gUmVpbmplY3RzIGluZm8gaW50byBjb21tYW5kIHRvIGFsbG93IHJldmVyc2FsXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gb2xkVG9kbykge1xuICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzW3Byb3BlcnR5XSA9IG9sZFRvZG9bcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIERlbGV0ZSB0b2RvXG4gICAgZGVsZXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgY29tbWFuZC5jb21tYW5kVHlwZSA9IFwiZGVsZXRlXCI7XG4gICAgICAgIC8vIEZpbmRzIHRvZG8gd2l0aCBjb3JyZWN0IGluZGV4IGFuZCBkZWxldGVzIGl0XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC5saXN0SXRlbXMuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PSBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkgeyBcbiAgICAgICAgICAgIC8vIEJ1dCBub3QgYmVmb3JlIGNvcHlpbmcgdGhlIHRvZG8gaW5mbyB0byBhbGxvdyByZXZlcnNhbCBsYXRlci4uLlxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IChwcm9qZWN0Lmxpc3RJdGVtcy5zcGxpY2UoaW5kZXgsIDEpKVswXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdG9kbykge1xuICAgICAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVyc1twcm9wZXJ0eV0gPSB0b2RvW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTZW5kcyBhIGNvbW1hbmQgZm9yIGRlbGV0aW5nIHRoZSBET00gZWxlbWVudCB2aXN1YWxseVxuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBVbmRvZXMgbGFzdCBjb21tYW5kXG4gICAgdW5kb0NvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKHRoaXMuY3VycmVudFByb2plY3QsIGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFByb2pcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFByb2plY3QoY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiVEhFUkUgQVJFIE5PIENPTU1BTkRTIFRPIFVORE9cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgbW9kZWwsXG4gICAgZGVmYXVsdFByb2plY3Rcbn0iLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbW1hbmRGYWN0b3J5IGZyb20gJy4vY29tbWFuZC5qcyc7XG5cbi8vIERPTSBFbGVtZW50IFNldHVwXG5jb25zdCBwcm9qQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCYXInKTtcbmNvbnN0IHRvZG9CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0JhcicpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tOYW1lJyk7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrUHJpb3JpdHknKTtcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcblxuY29uc3Qgb3Blbk1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW5Nb2RhbEJ1dHRvbicpO1xuY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxCdXR0b24nKTtcbmNvbnN0IHVuZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5kb0J1dHRvbicpO1xuXG4vLyBTZXR1cCBkZWZhdWx0IGRhdGUgZm9yIGlucHV0cyAoQ2FuIG1vdmUgaW50byBvd24gZnVuY3Rpb24gaW4gcmVmYWN0b3I/KVxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbi8vIFZJRVcgQ09OVFJPTExFUlxuY29uc3QgdmlldyA9IHtcbiAgICAvLyBIYW5kbGVzIGNvbW1hbmRzXG4gICAgaGFuZGxlQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGxldCBpZCA9IGNvbW1hbmQucGFyYW1ldGVycy5pZDtcbiAgICAgICAgbGV0IHByb2pOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnByb2pOYW1lO1xuICAgICAgICBsZXQgY29sb3IgPSBjb21tYW5kLnBhcmFtZXRlcnMuY29sb3I7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IGNvbW1hbmQucGFyYW1ldGVycy50YXNrTmFtZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gY29tbWFuZC5wYXJhbWV0ZXJzLnByaW9yaXR5O1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGNvbW1hbmQucGFyYW1ldGVycy5kdWVEYXRlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb247XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImNyZWF0ZVwiKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXhJRCA9IGNvbW1hbmQucGFyYW1ldGVycy5pbmRleElEO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBpbmRleElEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJkZWxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVUb2RvKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVQcm9qXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdChpZCwgcHJvak5hbWUsIGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJyZWFkUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRQcm9qZWN0KGlkKTtcbiAgICAgICAgICAgIHRvZG9CYXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlcyBwcm9qZWN0IGl0ZW1cbiAgICBjcmVhdGVQcm9qZWN0KGlkLCBuYW1lLCBjb2xvcikge1xuICAgICAgICAvLyBDcmVhdGUgcHJvamVjdCBlbGVtZW50c1xuICAgICAgICBjb25zdCBwcm9qRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbScsICdjcmVhdGVBbmltYXRpb24nKTtcbiAgICAgICAgY29uc3QgcHJvakNvbG9yVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pDb2xvclRhZy5jbGFzc0xpc3QuYWRkKCdjb2xvclRhZycpO1xuICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvak5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgICBjb25zdCBwcm9qRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2pEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2RlbGV0ZScpO1xuICAgICAgICAvLyBBZGQgaWQgZGF0YS1hdHRyaWJ1dGUgdG8gZWxlbWVudHNcbiAgICAgICAgcHJvakVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICBwcm9qRGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciBkZWxldGluZyBwcm9qXG5cbiAgICAgICAgLy90b2RvRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUb2RvQ2xpY2tFdmVudCk7XG5cbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciBvcGVuaW5nIHByb2pcblxuICAgICAgICBwcm9qRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVhZFByb2pDbGlja0V2ZW50KTtcblxuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gYW5pbWF0aW9uIGVuZHNcbiAgICAgICAgcHJvakVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgdGhpcy5hbmltYXRpb25FbmRFdmVudCk7XG4gICAgICAgIC8vIFNldHMgY29ycmVjdCBjb2xvciB0YWcgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgcHJvakNvbG9yVGFnLnNldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIiwgY29sb3IpO1xuICAgICAgICAvLyBJbmplY3RzIGRhdGEgdG8gdG9kbyBlbGVtZW50c1xuICAgICAgICBwcm9qTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHByb2pEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIC8vIEFkZHMgdG9kbyB0byB0aGUgRE9NXG4gICAgICAgIHByb2pFbGVtZW50LmFwcGVuZChwcm9qQ29sb3JUYWcsIHByb2pOYW1lLCBwcm9qRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgcHJvakJhci5hcHBlbmRDaGlsZChwcm9qRWxlbWVudCk7XG4gICAgfSxcblxuICAgIC8vIFJlYWRzIHByb2plY3QgaXRlbVxuICAgIHJlYWRQcm9qZWN0KGlkKSB7XG4gICAgICAgIC8vIFRhZ3MgYWxsIHJlcXVpcmVkIGVsZW1lbnRzIG9mIHRoZSBwcm9qZWN0IGl0ZW1cbiAgICAgICAgY29uc3QgcHJvakVsZW1lbnQgPSBwcm9qQmFyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cImApO1xuICAgICAgICAvLyBBZGRzIHVwZGF0ZSBhbmltYXRpb25cbiAgICAgICAgcHJvakVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndXBkYXRlQW5pbWF0aW9uJyk7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZXMgdG9kbyBpdGVtXG4gICAgY3JlYXRlVG9kbyhpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgaW5kZXhJRCA9IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBDcmVhdGUgdG9kbyBlbGVtZW50c1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScsICdjcmVhdGVBbmltYXRpb24nKTtcbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZScpO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2RlbGV0ZScpO1xuICAgICAgICAvLyBBZGQgaWQgZGF0YS1hdHRyaWJ1dGUgdG8gZWxlbWVudHNcbiAgICAgICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciBkZWxldGluZyB0b2RvXG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVRvZG9DbGlja0V2ZW50KTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciBvcGVuaW5nIHRvZG9cbiAgICAgICAgdG9kb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlYWRUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIC8vIEFkZHMgZXZlbnQgaGFuZGxlciBmb3Igd2hlbiBhbmltYXRpb24gZW5kc1xuICAgICAgICB0b2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCB0aGlzLmFuaW1hdGlvbkVuZEV2ZW50KTtcbiAgICAgICAgLy8gU2V0cyBjb3JyZWN0IHByaW9yaXR5IGRhdGEgYXR0cmlidXRlXG4gICAgICAgIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIHByaW9yaXR5KTtcbiAgICAgICAgLy8gSW5qZWN0cyBkYXRhIHRvIHRvZG8gZWxlbWVudHNcbiAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcbiAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgLy8gQWRkcyB0b2RvIHRvIHRoZSBET01cbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kKHRvZG9Qcmlvcml0eSwgdG9kb05hbWUsIHRvZG9EdWVEYXRlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EZWxldGVCdXR0b24pO1xuICAgICAgICBpZiAoaW5kZXhJRCkge1xuICAgICAgICAgICAgLy8gVW5kbyBvcGVyYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGFmdGVyTm9kZSA9IHRvZG9CYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2luZGV4SUR9XCJgKTtcbiAgICAgICAgICAgIHRvZG9CYXIuaW5zZXJ0QmVmb3JlKHRvZG9FbGVtZW50LCBhZnRlck5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0Jhci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gVXBkYXRlcyB0b2RvIGl0ZW1cbiAgICB1cGRhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIFRhZ3MgYWxsIHJlcXVpcmVkIGVsZW1lbnRzIG9mIHRoZSB0b2RvIGl0ZW1cbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSB0b2RvQmFyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cImApO1xuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICAvLyBJbmplY3RzIG5ldyB2YWx1ZXMgdG8gZWxlbWVudHNcbiAgICAgICAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAvLyBBZGRzIHVwZGF0ZSBhbmltYXRpb25cbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndXBkYXRlQW5pbWF0aW9uJyk7XG4gICAgfSxcblxuICAgIC8vIERlbGV0ZXMgdG9kbyBpdGVtXG4gICAgZGVsZXRlVG9kbyhpZCkge1xuICAgICAgICAvLyBGaW5kcyB0b2RvIGVsZW1lbnQgdG8gZGVsZXRlXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gdG9kb0Jhci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJgKTtcbiAgICAgICAgLy8gQXR0YWNoZXMgZGVsZXRlIGFuaW1hdGlvblxuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWxldGVBbmltYXRpb24nKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInVwZGF0ZVBsYXlhYmxlXCIpO1xuICAgIH0sXG5cbiAgICAvLyBQb3B1bGF0ZXMgbW9kYWwgd2l0aCBwcm92aWRlZCBpbmZvXG4gICAgYWRkRGF0YU1vZGFsKHRhc2tOYW1lID0gXCJcIiwgcHJpb3JpdHkgPSBcIkRlZmF1bHRcIiwgZHVlRGF0ZSA9IGN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcbiAgICAgICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IHRhc2tOYW1lO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnREYXRlO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb247XG4gICAgfSxcblxuICAgIC8vIE9wZW5zIG1vZGFsXG4gICAgb3Blbk1vZGFsKCkge1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9LFxuXG4gICAgLy8gQ2xvc2UgbW9kYWxcbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICAvLyBSZXNldHMgaW5wdXRzIGluIG1vZGFsXG4gICAgICAgIHRoaXMuYWRkRGF0YU1vZGFsKCk7XG4gICAgICAgIC8vIEhpZGVzIG1vZGFsXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0sXG5cbiAgICAvLyBTZXRzIGJlaGF2aW9yIG1vZGFsIGJ1dHRvbiB0byBhZGQgLyBlZGl0XG4gICAgc2V0TW9kYWxCdXR0b25CZWhhdmlvcihtb2RlLCBpZCkge1xuICAgICAgICB0aGlzLnJlbW92ZU1vZGFsQnV0dG9uTGlzdGVuZXJzKCk7XG4gICAgICAgIGlmIChtb2RlID09PSBcImNyZWF0ZVwiKSB7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGVcIiwgXCJjcmVhdGVcIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JlYXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiLCBcInVwZGF0ZVwiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnRleHRDb250ZW50ID0gXCJVcGRhdGVcIjtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZlcyBtb2RhbCBidXR0b24gbGlzdGVuZXJzXG4gICAgcmVtb3ZlTW9kYWxCdXR0b25MaXN0ZW5lcnMoKSB7XG4gICAgICAgIG1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIG1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIHJlYWQgcHJvaiBldmVudCBpcyBmaXJlZFxuICAgIHJlYWRQcm9qQ2xpY2tFdmVudChlKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0ZXh0IGlzIG5vdCBiZWluZyBzZWxlY3RlZFxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLnR5cGUgIT0gXCJSYW5nZVwiKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJyZWFkXCIgY29tbWFuZFxuICAgICAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7IGlkOiBpZCB9O1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiBjcmVhdGUgdG9kbyBldmVudCBpcyBmaXJlZFxuICAgIGNyZWF0ZVRvZG9DbGlja0V2ZW50KCkge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImNyZWF0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgdGFza05hbWU6IHRhc2tOYW1lLCBwcmlvcml0eTogcHJpb3JpdHksIGR1ZURhdGU6IGR1ZURhdGUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiByZWFkIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICByZWFkVG9kb0NsaWNrRXZlbnQoZSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGV4dCBpcyBub3QgYmVpbmcgc2VsZWN0ZWRcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKHNlbGVjdGlvbi50eXBlICE9IFwiUmFuZ2VcIikge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwicmVhZFwiIGNvbW1hbmRcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBpZDogaWQgfTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcInJlYWRcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiB1cGRhdGUgdG9kbyBldmVudCBpcyBmaXJlZFxuICAgIHVwZGF0ZVRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJjcmVhdGVcIiBjb21tYW5kXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7IGlkOiBpZCwgdGFza05hbWU6IHRhc2tOYW1lLCBwcmlvcml0eTogcHJpb3JpdHksIGR1ZURhdGU6IGR1ZURhdGUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJ1cGRhdGVcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiBkZWxldGUgdG9kbyBldmVudCBpcyBmaXJlZFxuICAgIGRlbGV0ZVRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwiZGVsZXRlXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBpZDogaWQgfTtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwiZGVsZXRlXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gYW4gYW5pbWF0aW9uIGVuZHNcbiAgICBhbmltYXRpb25FbmRFdmVudChlKSB7XG4gICAgICAgIGlmIChlLmFuaW1hdGlvbk5hbWUgPT09IFwiem9vbUNyZWF0ZVwiKSB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImNyZWF0ZUFuaW1hdGlvblwiKTtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwidXBkYXRlUGxheWFibGVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbmltYXRpb25OYW1lID09PSBcInNoYWtlVXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwidXBkYXRlQW5pbWF0aW9uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYW5pbWF0aW9uTmFtZSA9PT0gXCJ6b29tRGVsZXRlXCIpIHtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiB1bmRvIGV2ZW50IGlzIGZpcmVkXG4gICAgdW5kb0NsaWNrRXZlbnQoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcInVuZG9cIiBjb21tYW5kXG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcInVuZG9cIiwgdW5kZWZpbmVkKTtcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVNb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIG9wZW4gbW9kYWwgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBvcGVuTW9kYWxDbGlja0V2ZW50KCkge1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU9wZW5Nb2RhbENsaWNrKCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIHRoZSBjbG9zZSBtb2RhbCBhcmVhIChvdmVybGF5KSBpcyBjbGlja2VkXG4gICAgY2xvc2VNb2RhbENsaWNrRXZlbnQoZSkge1xuICAgICAgICAvLyBDaGVjayBpZiBvdmVybGF5IGFuZCBub3QgbW9kYWwgd2FzIHRhcmdldHRlZCB3aXRoIGNsaWNrXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVDbG9zZU1vZGFsQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH0sXG59XG5cbi8vIFNldHVwIGV2ZW50IGxpc3RlbmVyc1xub3Blbk1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlldy5vcGVuTW9kYWxDbGlja0V2ZW50KTtcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdmlldy5jbG9zZU1vZGFsQ2xpY2tFdmVudCk7XG51bmRvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlldy51bmRvQ2xpY2tFdmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbW9kZWwsIGRlZmF1bHRQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgY29tbWFuZEZhY3RvcnkgZnJvbSAnLi9jb21tYW5kLmpzJztcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbmNvbnN0IGNvbW1hbmQxID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgMVwiLCBjb2xvcjpcInJlZFwifSk7XG5jb25zdCBjb21tYW5kMiA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7cHJvak5hbWU6XCJQcm9qZWN0IDJcIiwgY29sb3I6XCJvcmFuZ2VcIn0pO1xuY29uc3QgY29tbWFuZDMgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwge3Byb2pOYW1lOlwiUHJvamVjdCAzXCIsIGNvbG9yOlwieWVsbG93XCJ9KTtcbmNvbnN0IGNvbW1hbmQ0ID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgNFwiLCBjb2xvcjpcImdyZWVuXCJ9KTtcbmNvbnN0IGNvbW1hbmQ1ID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgNVwiLCBjb2xvcjpcImN5YW5cIn0pO1xuY29uc3QgY29tbWFuZDYgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwge3Byb2pOYW1lOlwiUHJvamVjdCA2XCIsIGNvbG9yOlwiYmx1ZVwifSk7XG5jb25zdCBjb21tYW5kNyA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7cHJvak5hbWU6XCJQcm9qZWN0IDdcIiwgY29sb3I6XCJwdXJwbGVcIn0pO1xuY29uc3QgY29tbWFuZDggPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwge3Byb2pOYW1lOlwiUHJvamVjdCA4XCIsIGNvbG9yOlwicGlua1wifSk7XG5cbm1vZGVsLmNyZWF0ZVByb2plY3QoY29tbWFuZDEpO1xubW9kZWwuY3JlYXRlUHJvamVjdChjb21tYW5kMik7XG5tb2RlbC5jcmVhdGVQcm9qZWN0KGNvbW1hbmQzKTtcbm1vZGVsLmNyZWF0ZVByb2plY3QoY29tbWFuZDQpO1xubW9kZWwuY3JlYXRlUHJvamVjdChjb21tYW5kNSk7XG5tb2RlbC5jcmVhdGVQcm9qZWN0KGNvbW1hbmQ2KTtcbm1vZGVsLmNyZWF0ZVByb2plY3QoY29tbWFuZDcpO1xubW9kZWwuY3JlYXRlUHJvamVjdChjb21tYW5kOCk7XG5cbmNvbnN0IGNvbW1hbmQ5ID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkUHJvalwiLCB7aWQ6IDJ9KTtcbm1vZGVsLnJlYWRQcm9qZWN0KGNvbW1hbmQ5KTtcblxubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDFcIiwgcHJpb3JpdHk6XCJIaWdoXCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxXCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJSZWFsbHkgUmVhbGx5IFJlYWxseSBMb25nIE5hbWUgVGVzdFwiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJSZWFsbHkgUmVhbGx5IFJlYWxseSBSZWFsbHkgUmVhbGx5IFJlYWxseSBMb25nIERlc2NyaXB0aW9uIFRlc3RcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3QzXCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gM1wifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDRcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiA0XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0NVwiLCBwcmlvcml0eTpcIk1lZGl1bVwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gNVwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDZcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiA2XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0N1wiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDdcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3Q4XCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gOFwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDlcIiwgcHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDlcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3QxMFwiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDEwXCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0MTFcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxMVwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDEyXCIsIHByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxMlwifSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==