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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\nbody, input, textarea {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 300;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1400px;\n    margin: auto;\n}\n\n#projectWrapper {\n    box-sizing: border-box;\n    width: 400px;\n    padding: 40px 20px 40px 0px;\n    border-radius: 20px 0px 0px 20px;\n    background-color: rgba(225, 225, 225, 0.8);\n}\n\n#projectBar {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.projectItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.projectItem .colorTag {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.projectItem .colorTag[data-color=\"red\"] {\n    background-color: #ef4444;\n}\n\n.projectItem .colorTag[data-color=\"orange\"] {\n    background-color: #f97316;\n}\n\n.projectItem .colorTag[data-color=\"yellow\"] {\n    background-color: #facc15;\n}\n\n.projectItem .colorTag[data-color=\"green\"] {\n    background-color: #a3e635;\n}\n\n.projectItem .colorTag[data-color=\"cyan\"] {\n    background-color: #22d3ee;\n}\n\n.projectItem .colorTag[data-color=\"blue\"] {\n    background-color: #3b82f6;\n}\n\n.projectItem .colorTag[data-color=\"purple\"] {\n    background-color: #a855f7;\n}\n\n.projectItem .colorTag[data-color=\"pink\"] {\n    background-color: #fb7185;\n}\n\n.projectItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 180px;\n}\n\n#createProjectButton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    width: auto;\n    margin-left: 40px;\n    border: 4px dotted white;\n    border-radius: 20px;\n    background-color: rgba(255,255,255,0);\n    box-shadow: 0px 5px 3px rgba(122,122,122,0.2);\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 0px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n    overflow: hidden auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.todoItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #ef4444;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #facc15;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #a3e635;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 500;\n    width: 100px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n.createAnimation {\n    animation: zoomCreate normal 0.7s 1 ease-out;\n}\n\n.updateAnimation p{\n    position: relative;\n    animation: shakeUpdate 1.1s 1;\n}\n\n.deleteAnimation {\n    animation: zoomDelete reverse 0.7s forwards 1 ease-out;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button, .projectItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #FF6E40;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n@keyframes zoomCreate {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: 0;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes tiltRead {\n    100% {\n        transform: scale(1.03);\n        margin-bottom: 10px;\n    }\n}\n@keyframes shakeUpdate {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: -16px;\n    }\n    50% {\n        top: 0px;\n    }\n    75% {\n        top: -8px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes zoomDelete {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: -10px;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    background-image: url(./background.jpeg);\n    background-size: cover;\n}\n\nbody, input, textarea {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 300;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1400px;\n    margin: auto;\n}\n\n#projectWrapper {\n    box-sizing: border-box;\n    width: 400px;\n    padding: 40px 20px 40px 0px;\n    border-radius: 20px 0px 0px 20px;\n    background-color: rgba(225, 225, 225, 0.8);\n}\n\n#projectBar {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.projectItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.projectItem .colorTag {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.projectItem .colorTag[data-color=\"red\"] {\n    background-color: #ef4444;\n}\n\n.projectItem .colorTag[data-color=\"orange\"] {\n    background-color: #f97316;\n}\n\n.projectItem .colorTag[data-color=\"yellow\"] {\n    background-color: #facc15;\n}\n\n.projectItem .colorTag[data-color=\"green\"] {\n    background-color: #a3e635;\n}\n\n.projectItem .colorTag[data-color=\"cyan\"] {\n    background-color: #22d3ee;\n}\n\n.projectItem .colorTag[data-color=\"blue\"] {\n    background-color: #3b82f6;\n}\n\n.projectItem .colorTag[data-color=\"purple\"] {\n    background-color: #a855f7;\n}\n\n.projectItem .colorTag[data-color=\"pink\"] {\n    background-color: #fb7185;\n}\n\n.projectItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 180px;\n}\n\n#createProjectButton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    width: auto;\n    margin-left: 40px;\n    border: 4px dotted white;\n    border-radius: 20px;\n    background-color: rgba(255,255,255,0);\n    box-shadow: 0px 5px 3px rgba(122,122,122,0.2);\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 0px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n    overflow: hidden auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.todoItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #ef4444;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #facc15;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #a3e635;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 500;\n    width: 100px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n.createAnimation {\n    animation: zoomCreate normal 0.7s 1 ease-out;\n}\n\n.updateAnimation p{\n    position: relative;\n    animation: shakeUpdate 1.1s 1;\n}\n\n.deleteAnimation {\n    animation: zoomDelete reverse 0.7s forwards 1 ease-out;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button, .projectItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #FF6E40;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n@keyframes zoomCreate {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: 0;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes tiltRead {\n    100% {\n        transform: scale(1.03);\n        margin-bottom: 10px;\n    }\n}\n@keyframes shakeUpdate {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: -16px;\n    }\n    50% {\n        top: 0px;\n    }\n    75% {\n        top: -8px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes zoomDelete {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: -10px;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
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
const projectFactory = (id, projName, color) => {
    const listItems = [];
    return { id, listItems, projName, color}
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
    projIdCounter: 1,

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
        if (command.commandType === "deleteProj") {
            console.log(projectHolder);
            this.deleteProject(command);
        }
        if (command.commandType === "undo") {
            const lastCommand = this.commandQueue.pop();
            this.undoCommand(lastCommand);
        } else if (command.commandType !== "read") {
            this.commandQueue.push(command);
        }
        console.log(this.commandQueue);
        console.log(projectHolder);
    },
    
    // Create project
    createProject(command) {
        let projName = command.parameters.projName;
        let color = command.parameters.color;
        let id;
        // Check if there is an ID (undo operation), if not then assign ID
        if (command.parameters.id) {
            command.commandType = "createProj";
            id = command.parameters.id;
            const index = projectHolder.findIndex(project => project.id > command.parameters.id );
            if (projectHolder[index]) {
                command.parameters.indexID = projectHolder[index].id;
            } else {
                command.parameters.indexID = undefined;
            }
            const project = projectFactory(id, projName, color);
            projectHolder.splice(index, 0, project);
        } else {
            const project = projectFactory(this.projIdCounter, projName, color);
            id = this.projIdCounter++;
            projectHolder.push(project);
        }
        command.parameters.id = id;
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
    },

    // Read (change) project
    readProject(command) {
        const project = projectHolder.find(project => project.id == command.parameters.id);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
        for (const todo of project.listItems) {
            const id = todo.id;
            const taskName = todo.taskName;
            const priority = todo.priority;
            const dueDate = todo.dueDate;
            const description = todo.description;
            const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("create", {id, taskName, priority, dueDate, description});
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
        }
        command.parameters.id = this.currentProject.id;
        this.currentProject = project;
    },

    // Delete project
    deleteProject(command) {
        command.commandType = "deleteProj";
        // Finds project with correct index and deletes it
        const index = projectHolder.findIndex(project => project.id == command.parameters.id);
        if (index > -1) { 
            // But not before copying the project info to allow reversal later...
            const project = (projectHolder.splice(index, 1))[0];
            command.parameters.color = project.color;
            command.parameters.projName = project.projName;
        }
        // Sends a command for deleting the DOM element visually
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
    },

    // Create todo
    createTodo(project = defaultProject, command) {
        let taskName = command.parameters.taskName;
        if (!taskName) { 
            taskName = "Default Name";
            command.parameters.taskName = taskName; 
        };
        let priority = command.parameters.priority;
        let dueDate = command.parameters.dueDate;
        let description = command.parameters.description;
        if (!description) { 
            description = "Default Description";
            command.parameters.description = description; 
        };
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
            else if (command.commandType === "createProj") {
                this.deleteProject(command);
            }
            else if (command.commandType === "deleteProj") {
                this.createProject(command);
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

const createProjectButton = document.querySelector('#createProjectButton');
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
        let indexID = command.parameters.indexID;
        if (command.commandType === "create") {
            this.createTodo(id, taskName, priority, dueDate, description, indexID);
        }
        if (command.commandType === "update") {
            this.updateTodo(id, taskName, priority, dueDate, description);
        }
        if (command.commandType === "delete") {
            this.deleteTodo(id);
        }
        if (command.commandType === "createProj") {
            this.createProject(id, projName, color, indexID);
        }
        if (command.commandType === "readProj") {
            this.readProject(id);
            todoBar.replaceChildren();
        }
        if (command.commandType === "deleteProj") {
            this.deleteProject(id);
        }
    },

    // Creates project item
    createProject(id, name, color, indexID = undefined) {
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
        projDeleteButton.addEventListener('click', this.deleteProjClickEvent);
        // Adds event handler for opening proj
        projElement.addEventListener('click', this.readProjClickEvent);
        // Adds event handler for when animation ends
        projElement.addEventListener('animationend', this.animationEndEvent);
        // Sets correct color tag data attribute
        projColorTag.setAttribute("data-color", color);
        // Injects data to todo elements
        projName.textContent = name;
        projDeleteButton.textContent = 'X';
        // Adds project to the DOM
        // Adds todo to the DOM
        projElement.append(projColorTag, projName, projDeleteButton);
        if (indexID) {
            // Undo operation
            const afterNode = projBar.querySelector(`[data-id="${indexID}"`);
            projBar.insertBefore(projElement, afterNode);
        } else {
            projBar.insertBefore(projElement, createProjectButton);
        }
    },

    // Reads project item
    readProject(id) {
        // Tags all required elements of the project item
        const projElement = projBar.querySelector(`[data-id="${id}"`);
        // Adds update animation
        projElement.classList.add('updateAnimation');
    },

    // Delete project item
    deleteProject(id) {
        // Finds todo element to delete
        const projectElement = projBar.querySelector(`[data-id="${id}"`);
        // Attaches delete animation
        projectElement.classList.add('deleteAnimation');
        projectElement.classList.remove("updatePlayable");
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

    // Event for when create proj event is fired
    createProjectClickEvent() {
        // Create and pass "create" command
        const parameters = { projName: "New Project", color: "" };
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("createProj", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
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

    // Event for when delete proj event is fired
    deleteProjClickEvent(e) {
        e.stopPropagation();
        // Create and pass "delete" command
        const id = e.currentTarget.dataset.id;
        const parameters = { id: id };
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("deleteProj", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
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
createProjectButton.addEventListener('click', view.createProjectClickEvent);
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

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command1);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command2);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command3);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command4);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command5);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command6);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command7);
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command8);

const command9 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 2});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command9);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcs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Q0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCx3REFBd0Q7QUFDeEQsdURBQXVEO0FBQ3ZELDJEQUEyRDtBQUMzRDtBQUNBLFFBQVEsd0VBQTRCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQTRCO0FBQ3BDLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzT3lDO0FBQ0M7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsUUFBUTtBQUN6RTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwr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QUFZLHVLQUF1SztBQUN0TiwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDRGQUE0RjtBQUMzSSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDRGQUE0RjtBQUMzSSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDJGQUEyRjtBQUMxSSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDRGQUE0RjtBQUMzSSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDRGQUE0RjtBQUMzSSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDRGQUE0RjtBQUMzSSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLHdGQUF3RjtBQUN2SSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDhGQUE4RjtBQUM3SSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDhGQUE4RjtBQUM3SSwwREFBbUIsRUFBRSx1REFBYyxZQUFZLDBGQUEwRixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5LCBpbnB1dCwgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbWFpbkNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogMTQwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNwcm9qZWN0V3JhcHBlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjgpO1xcbn1cXG5cXG4jcHJvamVjdEJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gICAgaGVpZ2h0OiA3MjBweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHggMjBweCAwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzcHggM3B4IHJnYmEoMTIyLDEyMiwxMjIsMC4yKTtcXG59XFxuXFxuLnByb2plY3RJdGVtLnVwZGF0ZVBsYXlhYmxlOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiB0aWx0UmVhZCAwLjRzIGZvcndhcmRzIDEgZWFzZS1pbjtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuOCk7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwicmVkXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcIm9yYW5nZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NzMxNjtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJ5ZWxsb3dcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNjMTU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwiZ3JlZW5cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwiY3lhblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZDNlZTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJibHVlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInB1cnBsZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4NTVmNztcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJwaW5rXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI3MTg1O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLm5hbWUge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogMTgwcHg7XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBib3JkZXI6IDRweCBkb3R0ZWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggM3B4IHJnYmEoMTIyLDEyMiwxMjIsMC4yKTtcXG59XFxuXFxuI3RvZG9XcmFwcGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4jdG9kb0JhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNzIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDIwcHggMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG59XFxuXFxuLnRvZG9JdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzcHggM3B4IHJnYmEoMTIyLDEyMiwxMjIsMC4yKTtcXG59XFxuXFxuLnRvZG9JdGVtLnVwZGF0ZVBsYXlhYmxlOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiB0aWx0UmVhZCAwLjRzIGZvcndhcmRzIDEgZWFzZS1pbjtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuOCk7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiSGlnaFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJNZWRpdW1cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNjMTU7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiTG93XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcbn1cXG5cXG4udG9kb0l0ZW0gLm5hbWUge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnRvZG9JdGVtIC5kdWVEYXRlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDM0MHB4O1xcbn1cXG5cXG4uY3JlYXRlQW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiB6b29tQ3JlYXRlIG5vcm1hbCAwLjdzIDEgZWFzZS1vdXQ7XFxufVxcblxcbi51cGRhdGVBbmltYXRpb24gcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IHNoYWtlVXBkYXRlIDEuMXMgMTtcXG59XFxuXFxuLmRlbGV0ZUFuaW1hdGlvbiB7XFxuICAgIGFuaW1hdGlvbjogem9vbURlbGV0ZSByZXZlcnNlIDAuN3MgZm9yd2FyZHMgMSBlYXNlLW91dDtcXG59XFxuXFxuI2J1dHRvbkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IyRkY1OTtcXG59XFxuXFxuLmJ1dHRvbiN1bmRvQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkODtcXG59XFxuXFxuLmJ1dHRvbi5zbWFsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtIC5idXR0b24sIC5wcm9qZWN0SXRlbSAuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLmRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZFNDA7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50ZXh0SW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmRhdGVJbnB1dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlJbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uaW5wdXQjZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbnB1dCNkZXNjcmlwdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21DcmVhdGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQUFBQTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMjUlO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGlsdFJlYWQge1xcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgc2hha2VVcGRhdGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgdG9wOiAtMTZweDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRvcDogLThweDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbURlbGV0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAyNSU7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBtYXJnaW46IC0xMHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gseURBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLFNBQVM7UUFDVCxTQUFTO1FBQ1QsVUFBVTtRQUNWLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLHlCQUF5QjtRQUN6QixTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7UUFDVixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9iYWNrZ3JvdW5kLmpwZWcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5LCBpbnB1dCwgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbWFpbkNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogMTQwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNwcm9qZWN0V3JhcHBlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjgpO1xcbn1cXG5cXG4jcHJvamVjdEJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG4gICAgaGVpZ2h0OiA3MjBweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHggMjBweCAwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzcHggM3B4IHJnYmEoMTIyLDEyMiwxMjIsMC4yKTtcXG59XFxuXFxuLnByb2plY3RJdGVtLnVwZGF0ZVBsYXlhYmxlOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiB0aWx0UmVhZCAwLjRzIGZvcndhcmRzIDEgZWFzZS1pbjtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuOCk7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwicmVkXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcIm9yYW5nZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NzMxNjtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJ5ZWxsb3dcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNjMTU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwiZ3JlZW5cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwiY3lhblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZDNlZTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJibHVlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInB1cnBsZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4NTVmNztcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJwaW5rXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI3MTg1O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLm5hbWUge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogMTgwcHg7XFxufVxcblxcbiNjcmVhdGVQcm9qZWN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBib3JkZXI6IDRweCBkb3R0ZWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggM3B4IHJnYmEoMTIyLDEyMiwxMjIsMC4yKTtcXG59XFxuXFxuI3RvZG9XcmFwcGVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xcbn1cXG5cXG4jdG9kb0JhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNzIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDIwcHggMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcXG59XFxuXFxuLnRvZG9JdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzcHggM3B4IHJnYmEoMTIyLDEyMiwxMjIsMC4yKTtcXG59XFxuXFxuLnRvZG9JdGVtLnVwZGF0ZVBsYXlhYmxlOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiB0aWx0UmVhZCAwLjRzIGZvcndhcmRzIDEgZWFzZS1pbjtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuOCk7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiSGlnaFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJNZWRpdW1cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNjMTU7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiTG93XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcbn1cXG5cXG4udG9kb0l0ZW0gLm5hbWUge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnRvZG9JdGVtIC5kdWVEYXRlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDM0MHB4O1xcbn1cXG5cXG4uY3JlYXRlQW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiB6b29tQ3JlYXRlIG5vcm1hbCAwLjdzIDEgZWFzZS1vdXQ7XFxufVxcblxcbi51cGRhdGVBbmltYXRpb24gcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IHNoYWtlVXBkYXRlIDEuMXMgMTtcXG59XFxuXFxuLmRlbGV0ZUFuaW1hdGlvbiB7XFxuICAgIGFuaW1hdGlvbjogem9vbURlbGV0ZSByZXZlcnNlIDAuN3MgZm9yd2FyZHMgMSBlYXNlLW91dDtcXG59XFxuXFxuI2J1dHRvbkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IyRkY1OTtcXG59XFxuXFxuLmJ1dHRvbiN1bmRvQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkODtcXG59XFxuXFxuLmJ1dHRvbi5zbWFsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG9JdGVtIC5idXR0b24sIC5wcm9qZWN0SXRlbSAuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLmRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZFNDA7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50ZXh0SW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmRhdGVJbnB1dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlJbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uaW5wdXQjZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbnB1dCNkZXNjcmlwdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21DcmVhdGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQUFBQTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMjUlO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGlsdFJlYWQge1xcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgc2hha2VVcGRhdGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgdG9wOiAtMTZweDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRvcDogLThweDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbURlbGV0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAyNSU7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBtYXJnaW46IC0xMHB4O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb21tYW5kRmFjdG9yeSA9IChjb21tYW5kVHlwZSwgcGFyYW1ldGVycykgPT4ge1xuICAgIHJldHVybiB7IGNvbW1hbmRUeXBlLCBwYXJhbWV0ZXJzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tYW5kRmFjdG9yeTsiLCJpbXBvcnQgeyBtb2RlbCwgZGVmYXVsdFByb2plY3QgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCB2aWV3IGZyb20gJy4vdmlldy5qcyc7XG5cbi8vIENPTlRST0xMRVJcbmNvbnN0IGNvbnRyb2xsZXIgPSB7XG4gICAgLy8gRm9yd2FyZHMgY29tbWFuZHMgdG8gdmlld1xuICAgIGhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgdmlldy5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG4gICAgXG4gICAgLy8gRm9yd2FyZHMgY29tbWFuZHMgdG8gbW9kZWxcbiAgICBoYW5kbGVNb2RlbENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGVzIHJlcXVlc3QgdG8gb3BlbiBtb2RhbFxuICAgIG9wZW5Nb2RhbFJlcSgpIHtcbiAgICAgICAgdmlldy5vcGVuTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgc2V0TW9kYWxNb2RlKG1vZGUsIGlkKSB7XG4gICAgICAgIHZpZXcuc2V0TW9kYWxCdXR0b25CZWhhdmlvcihcInVwZGF0ZVwiLCBpZCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgcmVxdWVzdCB0byBpbmplY3QgZGF0YSBpbnRvIG1vZGFsXG4gICAgYWRkRGF0YU1vZGFsUmVxKHRvZG8pIHtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gdG9kby50YXNrTmFtZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIHZpZXcuYWRkRGF0YU1vZGFsKHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICB2aWV3Lm9wZW5Nb2RhbCgpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGVzIHJlcXVlc3QgdG8gY2xvc2UgbW9kYWxcbiAgICBjbG9zZU1vZGFsUmVxKCkge1xuICAgICAgICB2aWV3LmNsb3NlTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyBvcGVuIG1vZGFsIGNsaWNrIGV2ZW50XG4gICAgaGFuZGxlT3Blbk1vZGFsQ2xpY2soKSB7XG4gICAgICAgIHZpZXcuc2V0TW9kYWxCdXR0b25CZWhhdmlvcihcImNyZWF0ZVwiKTtcbiAgICAgICAgdmlldy5vcGVuTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyBjbG9zZSBtb2RhbCBjbGljayBldmVudFxuICAgIGhhbmRsZUNsb3NlTW9kYWxDbGljaygpIHtcbiAgICAgICAgdmlldy5jbG9zZU1vZGFsKCk7XG4gICAgfSxcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIHVwZGF0ZSBET00gUHJvamVjdHNcbiAgICBcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIHVwZGF0ZSBET00gVG9kb3NcbiAgICByZWZyZXNoVmlld1RvZG9zUmVxKHByb2plY3QpIHtcbiAgICAgICAgdmlldy5kaXNwbGF5VG9kb3MocHJvamVjdCk7XG4gICAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjsiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgY29tbWFuZEZhY3RvcnkgZnJvbSBcIi4vY29tbWFuZC5qc1wiO1xuXG4vLyBDb25zdHJ1Y3RvciBmb3IgUHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChpZCwgcHJvak5hbWUsIGNvbG9yKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW107XG4gICAgcmV0dXJuIHsgaWQsIGxpc3RJdGVtcywgcHJvak5hbWUsIGNvbG9yfVxufVxuXG4vLyBIb2xkcyBldmVyeSBwcm9qZWN0IGl0ZW1cbmNvbnN0IHByb2plY3RIb2xkZXIgPSBbXTtcblxuLy8gRGVmYXVsdCBwcm9qZWN0IG9iamVjdFxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSgxLCAnZGVmYXVsdCcsICd3aGl0ZScpO1xucHJvamVjdEhvbGRlci5wdXNoKHByb2plY3RIb2xkZXIpO1xuXG4vLyBNT0RFTCBDT05UUk9MTEVSXG5jb25zdCBtb2RlbCA9IHtcbiAgICAvLyBJRCBjb3VudGVyIChyZXBsYWNlIHdpdGggVVVJRCBsYXRlcj8pXG4gICAgaWRDb3VudGVyOiAxLFxuICAgIC8vIElEIGNvdW50ZXIgZm9yIHByb2plY3QgaXRlbXNcbiAgICBwcm9qSWRDb3VudGVyOiAxLFxuXG4gICAgLy8gQ29uc3RydWN0b3IgZm9yIExpc3Qgb2JqZWN0c1xuICAgIHRvZG9GYWN0b3J5KHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHsgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbiB9O1xuICAgIH0sXG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gY3VycmVudGx5IGFjdGl2ZSBwcm9qZWN0XG4gICAgY3VycmVudFByb2plY3Q6IGRlZmF1bHRQcm9qZWN0LFxuXG4gICAgLy8gUXVlIGZvciBob2xkaW5nIHByZXZpb3VzIGRvbmUgY29tbWFuZHNcbiAgICBjb21tYW5kUXVldWU6IFtdLFxuXG4gICAgLy8gSGFuZGxlcyBjb21tYW5kc1xuICAgIGhhbmRsZUNvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVcIikge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKHRoaXMuY3VycmVudFByb2plY3QsIGNvbW1hbmQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZU1vZGFsUmVxKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gdGhpcy5yZWFkVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkRGF0YU1vZGFsUmVxKHRvZG8pO1xuICAgICAgICAgICAgY29udHJvbGxlci5zZXRNb2RhbE1vZGUoXCJ1cGRhdGVcIiwgY29tbWFuZC5wYXJhbWV0ZXJzLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvKHRoaXMuY3VycmVudFByb2plY3QsIGNvbW1hbmQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZU1vZGFsUmVxKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVQcm9qXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJyZWFkUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRQcm9qZWN0KGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVByb2pcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEhvbGRlcik7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidW5kb1wiKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0Q29tbWFuZCA9IHRoaXMuY29tbWFuZFF1ZXVlLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy51bmRvQ29tbWFuZChsYXN0Q29tbWFuZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSAhPT0gXCJyZWFkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZFF1ZXVlLnB1c2goY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21tYW5kUXVldWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SG9sZGVyKTtcbiAgICB9LFxuICAgIFxuICAgIC8vIENyZWF0ZSBwcm9qZWN0XG4gICAgY3JlYXRlUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGxldCBwcm9qTmFtZSA9IGNvbW1hbmQucGFyYW1ldGVycy5wcm9qTmFtZTtcbiAgICAgICAgbGV0IGNvbG9yID0gY29tbWFuZC5wYXJhbWV0ZXJzLmNvbG9yO1xuICAgICAgICBsZXQgaWQ7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFuIElEICh1bmRvIG9wZXJhdGlvbiksIGlmIG5vdCB0aGVuIGFzc2lnbiBJRFxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLmlkKSB7XG4gICAgICAgICAgICBjb21tYW5kLmNvbW1hbmRUeXBlID0gXCJjcmVhdGVQcm9qXCI7XG4gICAgICAgICAgICBpZCA9IGNvbW1hbmQucGFyYW1ldGVycy5pZDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEhvbGRlci5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID4gY29tbWFuZC5wYXJhbWV0ZXJzLmlkICk7XG4gICAgICAgICAgICBpZiAocHJvamVjdEhvbGRlcltpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHByb2plY3RIb2xkZXJbaW5kZXhdLmlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShpZCwgcHJvak5hbWUsIGNvbG9yKTtcbiAgICAgICAgICAgIHByb2plY3RIb2xkZXIuc3BsaWNlKGluZGV4LCAwLCBwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aGlzLnByb2pJZENvdW50ZXIsIHByb2pOYW1lLCBjb2xvcik7XG4gICAgICAgICAgICBpZCA9IHRoaXMucHJvaklkQ291bnRlcisrO1xuICAgICAgICAgICAgcHJvamVjdEhvbGRlci5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5pZCA9IGlkO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBSZWFkIChjaGFuZ2UpIHByb2plY3RcbiAgICByZWFkUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SG9sZGVyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0Lmxpc3RJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0b2RvLmlkO1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0b2RvLnRhc2tOYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7aWQsIHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb259KTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmlkID0gdGhpcy5jdXJyZW50UHJvamVjdC5pZDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgfSxcblxuICAgIC8vIERlbGV0ZSBwcm9qZWN0XG4gICAgZGVsZXRlUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGNvbW1hbmQuY29tbWFuZFR5cGUgPSBcImRlbGV0ZVByb2pcIjtcbiAgICAgICAgLy8gRmluZHMgcHJvamVjdCB3aXRoIGNvcnJlY3QgaW5kZXggYW5kIGRlbGV0ZXMgaXRcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0SG9sZGVyLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHsgXG4gICAgICAgICAgICAvLyBCdXQgbm90IGJlZm9yZSBjb3B5aW5nIHRoZSBwcm9qZWN0IGluZm8gdG8gYWxsb3cgcmV2ZXJzYWwgbGF0ZXIuLi5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSAocHJvamVjdEhvbGRlci5zcGxpY2UoaW5kZXgsIDEpKVswXTtcbiAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5jb2xvciA9IHByb2plY3QuY29sb3I7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMucHJvak5hbWUgPSBwcm9qZWN0LnByb2pOYW1lO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlbmRzIGEgY29tbWFuZCBmb3IgZGVsZXRpbmcgdGhlIERPTSBlbGVtZW50IHZpc3VhbGx5XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZSB0b2RvXG4gICAgY3JlYXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lO1xuICAgICAgICBpZiAoIXRhc2tOYW1lKSB7IFxuICAgICAgICAgICAgdGFza05hbWUgPSBcIkRlZmF1bHQgTmFtZVwiO1xuICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lID0gdGFza05hbWU7IFxuICAgICAgICB9O1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBjb21tYW5kLnBhcmFtZXRlcnMucHJpb3JpdHk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gY29tbWFuZC5wYXJhbWV0ZXJzLmR1ZURhdGU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNvbW1hbmQucGFyYW1ldGVycy5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbikgeyBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gXCJEZWZhdWx0IERlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjsgXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9GYWN0b3J5KHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPiBjb21tYW5kLnBhcmFtZXRlcnMuaWQgKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYW4gSUQgKHVuZG8gb3BlcmF0aW9uKSwgaWYgbm90IHRoZW4gYXNzaWduIElEXG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMuaWQpIHtcbiAgICAgICAgICAgIGNvbW1hbmQuY29tbWFuZFR5cGUgPSBcImNyZWF0ZVwiO1xuICAgICAgICAgICAgdG9kby5pZCA9IGNvbW1hbmQucGFyYW1ldGVycy5pZDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC5saXN0SXRlbXMuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA+IGNvbW1hbmQucGFyYW1ldGVycy5pZCApO1xuICAgICAgICAgICAgaWYgKHByb2plY3QubGlzdEl0ZW1zW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5pbmRleElEID0gcHJvamVjdC5saXN0SXRlbXNbaW5kZXhdLmlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3QubGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMCwgdG9kbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvLmlkID0gdGhpcy5pZENvdW50ZXIrKztcbiAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5pZCA9IHRvZG8uaWQ7XG4gICAgICAgICAgICBwcm9qZWN0Lmxpc3RJdGVtcy5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlbmRzIGEgY29tbWFuZCBmb3IgY3JlYXRpbmcgdGhlIERPTSBlbGVtZW50IHZpc3VhbGx5XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIFJlYWQgdG9kb1xuICAgIHJlYWRUb2RvKHByb2plY3QgPSBkZWZhdWx0UHJvamVjdCwgY29tbWFuZCkge1xuICAgICAgICBjb25zdCB0b2RvID0gcHJvamVjdC5saXN0SXRlbXMuZmluZCh0b2RvID0+IHRvZG8uaWQgPT0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkKTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSB0b2RvXG4gICAgdXBkYXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgLy8gRmluZHMgdG9kbyB3aXRoIGNvcnJlY3QgaWRcbiAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIC8vIFNhdmVzIGluZm8gdG8gYWxsb3cgcmV2ZXJzYWwgbGF0ZXJcbiAgICAgICAgY29uc3Qgb2xkVG9kbyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRvZG8pIHtcbiAgICAgICAgICAgIG9sZFRvZG9bcHJvcGVydHldID0gdG9kb1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWRpdHMgdmFsdWVzXG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMudGFza05hbWUgIT0gdW5kZWZpbmVkKSB7IHRvZG8udGFza05hbWUgPSBjb21tYW5kLnBhcmFtZXRlcnMudGFza05hbWUgfVxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLnByaW9yaXR5ICE9IHVuZGVmaW5lZCkgeyB0b2RvLnByaW9yaXR5ID0gY29tbWFuZC5wYXJhbWV0ZXJzLnByaW9yaXR5IH1cbiAgICAgICAgaWYgKGNvbW1hbmQucGFyYW1ldGVycy5kdWVEYXRlICE9IHVuZGVmaW5lZCkgeyB0b2RvLmR1ZURhdGUgPSBjb21tYW5kLnBhcmFtZXRlcnMuZHVlRGF0ZSB9XG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb24gIT0gdW5kZWZpbmVkKSB7IHRvZG8uZGVzY3JpcHRpb24gPSBjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb24gfVxuICAgICAgICAvLyBTZW5kcyBhIGNvbW1hbmQgZm9yIHVwZGF0aW5nIHRoZSBET00gZWxlbWVudCB2aXN1YWxseVxuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAvLyBSZWluamVjdHMgaW5mbyBpbnRvIGNvbW1hbmQgdG8gYWxsb3cgcmV2ZXJzYWxcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvbGRUb2RvKSB7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnNbcHJvcGVydHldID0gb2xkVG9kb1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGVsZXRlIHRvZG9cbiAgICBkZWxldGVUb2RvKHByb2plY3QgPSBkZWZhdWx0UHJvamVjdCwgY29tbWFuZCkge1xuICAgICAgICBjb21tYW5kLmNvbW1hbmRUeXBlID0gXCJkZWxldGVcIjtcbiAgICAgICAgLy8gRmluZHMgdG9kbyB3aXRoIGNvcnJlY3QgaW5kZXggYW5kIGRlbGV0ZXMgaXRcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0Lmxpc3RJdGVtcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7IFxuICAgICAgICAgICAgLy8gQnV0IG5vdCBiZWZvcmUgY29weWluZyB0aGUgdG9kbyBpbmZvIHRvIGFsbG93IHJldmVyc2FsIGxhdGVyLi4uXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gKHByb2plY3QubGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMSkpWzBdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0b2RvKSB7XG4gICAgICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzW3Byb3BlcnR5XSA9IHRvZG9bcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNlbmRzIGEgY29tbWFuZCBmb3IgZGVsZXRpbmcgdGhlIERPTSBlbGVtZW50IHZpc3VhbGx5XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIFVuZG9lcyBsYXN0IGNvbW1hbmRcbiAgICB1bmRvQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvKHRoaXMuY3VycmVudFByb2plY3QsIGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVQcm9qXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVByb2pcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFByb2pcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFByb2plY3QoY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiVEhFUkUgQVJFIE5PIENPTU1BTkRTIFRPIFVORE9cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgbW9kZWwsXG4gICAgZGVmYXVsdFByb2plY3Rcbn0iLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbW1hbmRGYWN0b3J5IGZyb20gJy4vY29tbWFuZC5qcyc7XG5cbi8vIERPTSBFbGVtZW50IFNldHVwXG5jb25zdCBwcm9qQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCYXInKTtcbmNvbnN0IHRvZG9CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0JhcicpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tOYW1lJyk7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrUHJpb3JpdHknKTtcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0QnV0dG9uJyk7XG5jb25zdCBvcGVuTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbk1vZGFsQnV0dG9uJyk7XG5jb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEJ1dHRvbicpO1xuY29uc3QgdW5kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bmRvQnV0dG9uJyk7XG5cbi8vIFNldHVwIGRlZmF1bHQgZGF0ZSBmb3IgaW5wdXRzIChDYW4gbW92ZSBpbnRvIG93biBmdW5jdGlvbiBpbiByZWZhY3Rvcj8pXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuLy8gVklFVyBDT05UUk9MTEVSXG5jb25zdCB2aWV3ID0ge1xuICAgIC8vIEhhbmRsZXMgY29tbWFuZHNcbiAgICBoYW5kbGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgbGV0IGlkID0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkO1xuICAgICAgICBsZXQgcHJvak5hbWUgPSBjb21tYW5kLnBhcmFtZXRlcnMucHJvak5hbWU7XG4gICAgICAgIGxldCBjb2xvciA9IGNvbW1hbmQucGFyYW1ldGVycy5jb2xvcjtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBjb21tYW5kLnBhcmFtZXRlcnMucHJpb3JpdHk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gY29tbWFuZC5wYXJhbWV0ZXJzLmR1ZURhdGU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNvbW1hbmQucGFyYW1ldGVycy5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IGluZGV4SUQgPSBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRDtcbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyhpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgaW5kZXhJRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kbyhpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVG9kbyhpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3QoaWQsIHByb2pOYW1lLCBjb2xvciwgaW5kZXhJRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFByb2pcIikge1xuICAgICAgICAgICAgdGhpcy5yZWFkUHJvamVjdChpZCk7XG4gICAgICAgICAgICB0b2RvQmFyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVByb2pcIikge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KGlkKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDcmVhdGVzIHByb2plY3QgaXRlbVxuICAgIGNyZWF0ZVByb2plY3QoaWQsIG5hbWUsIGNvbG9yLCBpbmRleElEID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIENyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJdGVtJywgJ2NyZWF0ZUFuaW1hdGlvbicpO1xuICAgICAgICBjb25zdCBwcm9qQ29sb3JUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakNvbG9yVGFnLmNsYXNzTGlzdC5hZGQoJ2NvbG9yVGFnJyk7XG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgIGNvbnN0IHByb2pEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvakRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnZGVsZXRlJyk7XG4gICAgICAgIC8vIEFkZCBpZCBkYXRhLWF0dHJpYnV0ZSB0byBlbGVtZW50c1xuICAgICAgICBwcm9qRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIHByb2pEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIGRlbGV0aW5nIHByb2pcbiAgICAgICAgcHJvakRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlUHJvakNsaWNrRXZlbnQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIG9wZW5pbmcgcHJvalxuICAgICAgICBwcm9qRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVhZFByb2pDbGlja0V2ZW50KTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciB3aGVuIGFuaW1hdGlvbiBlbmRzXG4gICAgICAgIHByb2pFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuYW5pbWF0aW9uRW5kRXZlbnQpO1xuICAgICAgICAvLyBTZXRzIGNvcnJlY3QgY29sb3IgdGFnIGRhdGEgYXR0cmlidXRlXG4gICAgICAgIHByb2pDb2xvclRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIsIGNvbG9yKTtcbiAgICAgICAgLy8gSW5qZWN0cyBkYXRhIHRvIHRvZG8gZWxlbWVudHNcbiAgICAgICAgcHJvak5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBwcm9qRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAvLyBBZGRzIHByb2plY3QgdG8gdGhlIERPTVxuICAgICAgICAvLyBBZGRzIHRvZG8gdG8gdGhlIERPTVxuICAgICAgICBwcm9qRWxlbWVudC5hcHBlbmQocHJvakNvbG9yVGFnLCBwcm9qTmFtZSwgcHJvakRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGlmIChpbmRleElEKSB7XG4gICAgICAgICAgICAvLyBVbmRvIG9wZXJhdGlvblxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJOb2RlID0gcHJvakJhci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aW5kZXhJRH1cImApO1xuICAgICAgICAgICAgcHJvakJhci5pbnNlcnRCZWZvcmUocHJvakVsZW1lbnQsIGFmdGVyTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qQmFyLmluc2VydEJlZm9yZShwcm9qRWxlbWVudCwgY3JlYXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmVhZHMgcHJvamVjdCBpdGVtXG4gICAgcmVhZFByb2plY3QoaWQpIHtcbiAgICAgICAgLy8gVGFncyBhbGwgcmVxdWlyZWQgZWxlbWVudHMgb2YgdGhlIHByb2plY3QgaXRlbVxuICAgICAgICBjb25zdCBwcm9qRWxlbWVudCA9IHByb2pCYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiYCk7XG4gICAgICAgIC8vIEFkZHMgdXBkYXRlIGFuaW1hdGlvblxuICAgICAgICBwcm9qRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1cGRhdGVBbmltYXRpb24nKTtcbiAgICB9LFxuXG4gICAgLy8gRGVsZXRlIHByb2plY3QgaXRlbVxuICAgIGRlbGV0ZVByb2plY3QoaWQpIHtcbiAgICAgICAgLy8gRmluZHMgdG9kbyBlbGVtZW50IHRvIGRlbGV0ZVxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IHByb2pCYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiYCk7XG4gICAgICAgIC8vIEF0dGFjaGVzIGRlbGV0ZSBhbmltYXRpb25cbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQW5pbWF0aW9uJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ1cGRhdGVQbGF5YWJsZVwiKTtcbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlcyB0b2RvIGl0ZW1cbiAgICBjcmVhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBpbmRleElEID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0b2RvIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJywgJ2NyZWF0ZUFuaW1hdGlvbicpO1xuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnZGVsZXRlJyk7XG4gICAgICAgIC8vIEFkZCBpZCBkYXRhLWF0dHJpYnV0ZSB0byBlbGVtZW50c1xuICAgICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIGRlbGV0aW5nIHRvZG9cbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIG9wZW5pbmcgdG9kb1xuICAgICAgICB0b2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVhZFRvZG9DbGlja0V2ZW50KTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciB3aGVuIGFuaW1hdGlvbiBlbmRzXG4gICAgICAgIHRvZG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuYW5pbWF0aW9uRW5kRXZlbnQpO1xuICAgICAgICAvLyBTZXRzIGNvcnJlY3QgcHJpb3JpdHkgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgICAgICAvLyBJbmplY3RzIGRhdGEgdG8gdG9kbyBlbGVtZW50c1xuICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAvLyBBZGRzIHRvZG8gdG8gdGhlIERPTVxuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb1ByaW9yaXR5LCB0b2RvTmFtZSwgdG9kb0R1ZURhdGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGlmIChpbmRleElEKSB7XG4gICAgICAgICAgICAvLyBVbmRvIG9wZXJhdGlvblxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJOb2RlID0gdG9kb0Jhci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aW5kZXhJRH1cImApO1xuICAgICAgICAgICAgdG9kb0Jhci5pbnNlcnRCZWZvcmUodG9kb0VsZW1lbnQsIGFmdGVyTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvQmFyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBVcGRhdGVzIHRvZG8gaXRlbVxuICAgIHVwZGF0ZVRvZG8oaWQsIHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gVGFncyBhbGwgcmVxdWlyZWQgZWxlbWVudHMgb2YgdGhlIHRvZG8gaXRlbVxuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IHRvZG9CYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiYCk7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgIC8vIEluamVjdHMgbmV3IHZhbHVlcyB0byBlbGVtZW50c1xuICAgICAgICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBwcmlvcml0eSk7XG4gICAgICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gdGFza05hbWU7XG4gICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIC8vIEFkZHMgdXBkYXRlIGFuaW1hdGlvblxuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1cGRhdGVBbmltYXRpb24nKTtcbiAgICB9LFxuXG4gICAgLy8gRGVsZXRlcyB0b2RvIGl0ZW1cbiAgICBkZWxldGVUb2RvKGlkKSB7XG4gICAgICAgIC8vIEZpbmRzIHRvZG8gZWxlbWVudCB0byBkZWxldGVcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSB0b2RvQmFyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cImApO1xuICAgICAgICAvLyBBdHRhY2hlcyBkZWxldGUgYW5pbWF0aW9uXG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUFuaW1hdGlvbicpO1xuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidXBkYXRlUGxheWFibGVcIik7XG4gICAgfSxcblxuICAgIC8vIFBvcHVsYXRlcyBtb2RhbCB3aXRoIHByb3ZpZGVkIGluZm9cbiAgICBhZGREYXRhTW9kYWwodGFza05hbWUgPSBcIlwiLCBwcmlvcml0eSA9IFwiRGVmYXVsdFwiLCBkdWVEYXRlID0gY3VycmVudERhdGUsIGRlc2NyaXB0aW9uID0gXCJcIikge1xuICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gdGFza05hbWU7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBwcmlvcml0eTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gY3VycmVudERhdGU7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICB9LFxuXG4gICAgLy8gT3BlbnMgbW9kYWxcbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0sXG5cbiAgICAvLyBDbG9zZSBtb2RhbFxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIC8vIFJlc2V0cyBpbnB1dHMgaW4gbW9kYWxcbiAgICAgICAgdGhpcy5hZGREYXRhTW9kYWwoKTtcbiAgICAgICAgLy8gSGlkZXMgbW9kYWxcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSxcblxuICAgIC8vIFNldHMgYmVoYXZpb3IgbW9kYWwgYnV0dG9uIHRvIGFkZCAvIGVkaXRcbiAgICBzZXRNb2RhbEJ1dHRvbkJlaGF2aW9yKG1vZGUsIGlkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTW9kYWxCdXR0b25MaXN0ZW5lcnMoKTtcbiAgICAgICAgaWYgKG1vZGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiLCBcImNyZWF0ZVwiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1tb2RlXCIsIFwidXBkYXRlXCIpO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZVRvZG9DbGlja0V2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZW1vdmVzIG1vZGFsIGJ1dHRvbiBsaXN0ZW5lcnNcbiAgICByZW1vdmVNb2RhbEJ1dHRvbkxpc3RlbmVycygpIHtcbiAgICAgICAgbW9kYWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyZWF0ZVRvZG9DbGlja0V2ZW50KTtcbiAgICAgICAgbW9kYWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZVRvZG9DbGlja0V2ZW50KTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gY3JlYXRlIHByb2ogZXZlbnQgaXMgZmlyZWRcbiAgICBjcmVhdGVQcm9qZWN0Q2xpY2tFdmVudCgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwiY3JlYXRlXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBwcm9qTmFtZTogXCJOZXcgUHJvamVjdFwiLCBjb2xvcjogXCJcIiB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gcmVhZCBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgcmVhZFByb2pDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRleHQgaXMgbm90IGJlaW5nIHNlbGVjdGVkXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24udHlwZSAhPSBcIlJhbmdlXCIpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcInJlYWRcIiBjb21tYW5kXG4gICAgICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkIH07XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkUHJvalwiLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIGRlbGV0ZSBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgZGVsZXRlUHJvakNsaWNrRXZlbnQoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJkZWxldGVcIiBjb21tYW5kXG4gICAgICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7IGlkOiBpZCB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJkZWxldGVQcm9qXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gY3JlYXRlIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICBjcmVhdGVUb2RvQ2xpY2tFdmVudCgpIHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJjcmVhdGVcIiBjb21tYW5kXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7IHRhc2tOYW1lOiB0YXNrTmFtZSwgcHJpb3JpdHk6IHByaW9yaXR5LCBkdWVEYXRlOiBkdWVEYXRlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfTtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gcmVhZCB0b2RvIGV2ZW50IGlzIGZpcmVkXG4gICAgcmVhZFRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRleHQgaXMgbm90IGJlaW5nIHNlbGVjdGVkXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24udHlwZSAhPSBcIlJhbmdlXCIpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcInJlYWRcIiBjb21tYW5kXG4gICAgICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkIH07XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVNb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gdXBkYXRlIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICB1cGRhdGVUb2RvQ2xpY2tFdmVudChlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwiY3JlYXRlXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBpZDogaWQsIHRhc2tOYW1lOiB0YXNrTmFtZSwgcHJpb3JpdHk6IHByaW9yaXR5LCBkdWVEYXRlOiBkdWVEYXRlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfTtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwidXBkYXRlXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gZGVsZXRlIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICBkZWxldGVUb2RvQ2xpY2tFdmVudChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImRlbGV0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkIH07XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcImRlbGV0ZVwiLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVNb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIGFuIGFuaW1hdGlvbiBlbmRzXG4gICAgYW5pbWF0aW9uRW5kRXZlbnQoZSkge1xuICAgICAgICBpZiAoZS5hbmltYXRpb25OYW1lID09PSBcInpvb21DcmVhdGVcIikge1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJjcmVhdGVBbmltYXRpb25cIik7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcInVwZGF0ZVBsYXlhYmxlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYW5pbWF0aW9uTmFtZSA9PT0gXCJzaGFrZVVwZGF0ZVwiKSB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInVwZGF0ZUFuaW1hdGlvblwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFuaW1hdGlvbk5hbWUgPT09IFwiem9vbURlbGV0ZVwiKSB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gdW5kbyBldmVudCBpcyBmaXJlZFxuICAgIHVuZG9DbGlja0V2ZW50KCkge1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJ1bmRvXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJ1bmRvXCIsIHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiBvcGVuIG1vZGFsIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgb3Blbk1vZGFsQ2xpY2tFdmVudCgpIHtcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVPcGVuTW9kYWxDbGljaygpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiB0aGUgY2xvc2UgbW9kYWwgYXJlYSAob3ZlcmxheSkgaXMgY2xpY2tlZFxuICAgIGNsb3NlTW9kYWxDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgb3ZlcmxheSBhbmQgbm90IG1vZGFsIHdhcyB0YXJnZXR0ZWQgd2l0aCBjbGlja1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQ2xvc2VNb2RhbENsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9LFxufVxuXG4vLyBTZXR1cCBldmVudCBsaXN0ZW5lcnNcbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWV3LmNyZWF0ZVByb2plY3RDbGlja0V2ZW50KTtcbm9wZW5Nb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXcub3Blbk1vZGFsQ2xpY2tFdmVudCk7XG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHZpZXcuY2xvc2VNb2RhbENsaWNrRXZlbnQpO1xudW5kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXcudW5kb0NsaWNrRXZlbnQpO1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG1vZGVsLCBkZWZhdWx0UHJvamVjdCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IGNvbW1hbmRGYWN0b3J5IGZyb20gJy4vY29tbWFuZC5qcyc7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG5jb25zdCBjb21tYW5kMSA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7cHJvak5hbWU6XCJQcm9qZWN0IDFcIiwgY29sb3I6XCJyZWRcIn0pO1xuY29uc3QgY29tbWFuZDIgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwge3Byb2pOYW1lOlwiUHJvamVjdCAyXCIsIGNvbG9yOlwib3JhbmdlXCJ9KTtcbmNvbnN0IGNvbW1hbmQzID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgM1wiLCBjb2xvcjpcInllbGxvd1wifSk7XG5jb25zdCBjb21tYW5kNCA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7cHJvak5hbWU6XCJQcm9qZWN0IDRcIiwgY29sb3I6XCJncmVlblwifSk7XG5jb25zdCBjb21tYW5kNSA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7cHJvak5hbWU6XCJQcm9qZWN0IDVcIiwgY29sb3I6XCJjeWFuXCJ9KTtcbmNvbnN0IGNvbW1hbmQ2ID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgNlwiLCBjb2xvcjpcImJsdWVcIn0pO1xuY29uc3QgY29tbWFuZDcgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwge3Byb2pOYW1lOlwiUHJvamVjdCA3XCIsIGNvbG9yOlwicHVycGxlXCJ9KTtcbmNvbnN0IGNvbW1hbmQ4ID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgOFwiLCBjb2xvcjpcInBpbmtcIn0pO1xuXG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDIpO1xubW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kMyk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQ0KTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDUpO1xubW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kNik7XG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQ3KTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDgpO1xuXG5jb25zdCBjb21tYW5kOSA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwge2lkOiAyfSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQ5KTtcblxubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDFcIiwgcHJpb3JpdHk6XCJIaWdoXCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxXCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJSZWFsbHkgUmVhbGx5IFJlYWxseSBMb25nIE5hbWUgVGVzdFwiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJSZWFsbHkgUmVhbGx5IFJlYWxseSBSZWFsbHkgUmVhbGx5IFJlYWxseSBMb25nIERlc2NyaXB0aW9uIFRlc3RcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3QzXCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gM1wifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDRcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiA0XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0NVwiLCBwcmlvcml0eTpcIk1lZGl1bVwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gNVwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDZcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiA2XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0N1wiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDdcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3Q4XCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gOFwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDlcIiwgcHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDlcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3QxMFwiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDEwXCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0MTFcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxMVwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDEyXCIsIHByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxMlwifSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==