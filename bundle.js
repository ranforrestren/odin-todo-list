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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\nbody, input, textarea {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 300;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1400px;\n    margin: auto;\n}\n\n#projectWrapper {\n    box-sizing: border-box;\n    width: 400px;\n    padding: 40px 20px 40px 0px;\n    border-radius: 20px 0px 0px 20px;\n    background-color: rgba(225, 225, 225, 0.8);\n}\n\n#projectBar {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.projectItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.projectItem .colorTag {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.projectItem .colorTag[data-color=\"white\"] {\n    background-color: #e2e8f0;\n}\n\n.projectItem .colorTag[data-color=\"red\"] {\n    background-color: #ef4444;\n}\n\n.projectItem .colorTag[data-color=\"orange\"] {\n    background-color: #f97316;\n}\n\n.projectItem .colorTag[data-color=\"yellow\"] {\n    background-color: #facc15;\n}\n\n.projectItem .colorTag[data-color=\"green\"] {\n    background-color: #a3e635;\n}\n\n.projectItem .colorTag[data-color=\"cyan\"] {\n    background-color: #22d3ee;\n}\n\n.projectItem .colorTag[data-color=\"blue\"] {\n    background-color: #3b82f6;\n}\n\n.projectItem .colorTag[data-color=\"purple\"] {\n    background-color: #a855f7;\n}\n\n.projectItem .colorTag[data-color=\"pink\"] {\n    background-color: #fb7185;\n}\n\n.projectItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 180px;\n}\n\n#createProjectButton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    width: auto;\n    margin-left: 40px;\n    border: 4px dotted white;\n    border-radius: 20px;\n    background-color: rgba(255,255,255,0);\n    box-shadow: 0px 5px 3px rgba(122,122,122,0.2);\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 0px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n    overflow: hidden auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.todoItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #ef4444;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #facc15;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #a3e635;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 500;\n    width: 100px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n.createAnimation {\n    animation: zoomCreate normal 0.7s 1 ease-out;\n}\n\n.updateAnimation p{\n    position: relative;\n    animation: shakeUpdate 0.8s 1;\n}\n\n.deleteAnimation {\n    animation: zoomDelete reverse 0.7s forwards 1 ease-out;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button, .projectItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #ef4444;\n}\n\n.button.edit {\n    background-color: #facc15;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n@keyframes zoomCreate {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: 0;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes tiltRead {\n    100% {\n        transform: scale(1.03);\n        margin-bottom: 10px;\n    }\n}\n@keyframes shakeUpdate {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: -16px;\n    }\n    50% {\n        top: 0px;\n    }\n    75% {\n        top: -8px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes zoomDelete {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: -10px;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    background-image: url(./background.jpeg);\n    background-size: cover;\n}\n\nbody, input, textarea {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 300;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1400px;\n    margin: auto;\n}\n\n#projectWrapper {\n    box-sizing: border-box;\n    width: 400px;\n    padding: 40px 20px 40px 0px;\n    border-radius: 20px 0px 0px 20px;\n    background-color: rgba(225, 225, 225, 0.8);\n}\n\n#projectBar {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.projectItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.projectItem .colorTag {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.projectItem .colorTag[data-color=\"white\"] {\n    background-color: #e2e8f0;\n}\n\n.projectItem .colorTag[data-color=\"red\"] {\n    background-color: #ef4444;\n}\n\n.projectItem .colorTag[data-color=\"orange\"] {\n    background-color: #f97316;\n}\n\n.projectItem .colorTag[data-color=\"yellow\"] {\n    background-color: #facc15;\n}\n\n.projectItem .colorTag[data-color=\"green\"] {\n    background-color: #a3e635;\n}\n\n.projectItem .colorTag[data-color=\"cyan\"] {\n    background-color: #22d3ee;\n}\n\n.projectItem .colorTag[data-color=\"blue\"] {\n    background-color: #3b82f6;\n}\n\n.projectItem .colorTag[data-color=\"purple\"] {\n    background-color: #a855f7;\n}\n\n.projectItem .colorTag[data-color=\"pink\"] {\n    background-color: #fb7185;\n}\n\n.projectItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 180px;\n}\n\n#createProjectButton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    width: auto;\n    margin-left: 40px;\n    border: 4px dotted white;\n    border-radius: 20px;\n    background-color: rgba(255,255,255,0);\n    box-shadow: 0px 5px 3px rgba(122,122,122,0.2);\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 0px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n    overflow: hidden auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.todoItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #ef4444;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #facc15;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #a3e635;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 500;\n    width: 100px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n.createAnimation {\n    animation: zoomCreate normal 0.7s 1 ease-out;\n}\n\n.updateAnimation p{\n    position: relative;\n    animation: shakeUpdate 0.8s 1;\n}\n\n.deleteAnimation {\n    animation: zoomDelete reverse 0.7s forwards 1 ease-out;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button, .projectItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #ef4444;\n}\n\n.button.edit {\n    background-color: #facc15;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n@keyframes zoomCreate {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: 0;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes tiltRead {\n    100% {\n        transform: scale(1.03);\n        margin-bottom: 10px;\n    }\n}\n@keyframes shakeUpdate {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: -16px;\n    }\n    50% {\n        top: 0px;\n    }\n    75% {\n        top: -8px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes zoomDelete {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: -10px;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
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
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].setModalButtonBehavior(mode, id);
    },

    // Handles request to inject data into modal
    addTodoModalReq(todo) {
        let taskName = todo.taskName;
        let priority = todo.priority;
        let dueDate = todo.dueDate;
        let description = todo.description;
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTodoModal(taskName, priority, dueDate, description);
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].openModal();
    },

    // Handles request to inject data into modal
    addProjModalReq(project) {
        let projName = project.projName;
        let color = project.color;
        _view_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProjModal(projName, color);
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
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].setModalMode("update", command.parameters.id);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoModalReq(todo);
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
        if (command.commandType === "editProj") {
            const project = this.editProject(command);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].setModalMode("updateProj", command.parameters.id);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProjModalReq(project);
        }
        if (command.commandType === "updateProj") {
            this.updateProject(command);
            _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].closeModalReq();
        }
        if (command.commandType === "deleteProj") {
            this.deleteProject(command);
        }
        if (command.commandType === "undo") {
            const lastCommand = this.commandQueue.pop();
            this.undoCommand(lastCommand);
        } else if (command.commandType !== "read" && command.commandType !== "editProj") {
            this.commandQueue.push(command);
        }
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
            project.listItems = command.parameters.listItems;
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

    editProject(command) {
        const project = projectHolder.find(project => project.id == command.parameters.id);
        return project;
    },

    // Update todo
    updateProject(command) {
        console.log(command);
        // Finds proj with correct id
        const project = projectHolder.find(project => project.id == command.parameters.id);
        // Saves info to allow reversal later
        const oldProj = { projName: project.projName, color: project.color};
        // Edits values
        if (command.parameters.projName != undefined) { project.projName = command.parameters.projName }
        if (command.parameters.color != undefined) { project.color = command.parameters.color }
        // Sends a command for updating the DOM element visually
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
        // Reinjects info into command to allow reversal
        command.parameters.projName = oldProj.projName;
        command.parameters.color = oldProj.color;
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
            command.parameters.listItems = project.listItems;
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
            else if (command.commandType === "updateProj") {
                this.updateProject(command);
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

// Modal elements
const modalSelect = document.querySelector('#taskPriority');
const modalDueDate = document.querySelector('#dueDate');
const modalDescription = document.querySelector('#description');

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
        if (command.commandType === "updateProj") {
            this.updateProject(id, projName, color);
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
        // Changes delete button into edit button
        const prevDeleteButton = projBar.querySelector('.edit');
        if (prevDeleteButton !== null) {
            prevDeleteButton.classList.remove('edit');
            prevDeleteButton.textContent = "X";
            prevDeleteButton.removeEventListener('click', this.editProjClickEvent);
            prevDeleteButton.addEventListener('click', this.deleteProjClickEvent);
        }
        const projDeleteButton = projElement.querySelector('.delete');
        projDeleteButton.textContent = "✎";
        projDeleteButton.classList.add('edit');
        projDeleteButton.removeEventListener('click', this.deleteProjClickEvent);
        projDeleteButton.addEventListener('click', this.editProjClickEvent);
    },

    // Updates project item
    updateProject(id, projName, color) {
        // Tags all required elements of the todo item
        const projElement = projBar.querySelector(`[data-id="${id}"`);
        const projColor = projElement.querySelector('.colorTag');
        const name = projElement.querySelector('.name');
        // Injects new values to elements
        projColor.setAttribute("data-color", color);
        name.textContent = projName;
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
    addTodoModal(taskName = "", priority = "Default", dueDate = currentDate, description = "") {
        taskNameInput.value = taskName;
        priorityInput.value = priority;
        dueDateInput.value = currentDate;
        descriptionInput.value = description;
    },

    // Populates modal with provided info
    addProjModal(project = "", color = "") {
        taskNameInput.value = project;
        console.log(color);
        priorityInput.value = color;
    },

    // Opens modal
    openModal() {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    },

    // Close modal
    closeModal() {
        // Resets inputs in modal
        this.addTodoModal();
        // Hides modal
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    },

    // Sets behavior modal button to add / edit
    setModalButtonBehavior(mode, id) {
        modalDueDate.classList.remove("hidden");
        modalDescription.classList.remove("hidden");
        this.removeModalButtonListeners();
        if (mode === "create") {
            modalButton.setAttribute("data-mode", "create");
            modalButton.textContent = "Create";
            this.setPrioSelectMode("todo");
            modalButton.addEventListener('click', this.createTodoClickEvent);
        }
        else if (mode === "update") {
            modalButton.setAttribute("data-mode", "update");
            modalButton.textContent = "Update";
            modalButton.setAttribute('data-id', id);
            this.setPrioSelectMode("todo");
            modalButton.addEventListener('click', this.updateTodoClickEvent);
        }
        else if (mode === "updateProj") {
            modalDueDate.classList.add("hidden");
            modalDescription.classList.add("hidden");
            modalButton.setAttribute("data-mode", "updateProj");
            modalButton.textContent = "Update";
            modalButton.setAttribute('data-id', id);
            this.setPrioSelectMode("project");
            modalButton.addEventListener('click', this.updateProjClickEvent);
        }
    },

    // Set priority select mode
    setPrioSelectMode(mode) {
        if (mode === "todo") {
            const high = this.createOption("High");
            const medium = this.createOption("Medium");
            const low = this.createOption("Low");
            const defaultval = this.createOption("Default");
            modalSelect.replaceChildren(high, medium, low, defaultval);
        }
        else if (mode === "project") {
            const white = this.createOption("white");
            const red = this.createOption("red");
            const orange = this.createOption("orange");
            const yellow = this.createOption("yellow");
            const green = this.createOption("green");
            const cyan = this.createOption("cyan");
            const blue = this.createOption("blue");
            const purple = this.createOption("purple");
            const pink = this.createOption("pink");
            modalSelect.replaceChildren(white, red, orange, yellow, green, cyan, blue, purple, pink);
        }
    },

    createOption(value) {
        const optionElement = document.createElement('option');
        optionElement.classList.add('selectOpt');
        optionElement.value = value;
        optionElement.textContent = value.charAt(0).toUpperCase() + value.slice(1);
        return optionElement;
    },

    // Removes modal button listeners
    removeModalButtonListeners() {
        modalButton.removeEventListener('click', this.createTodoClickEvent);
        modalButton.removeEventListener('click', this.updateTodoClickEvent);
        //modalButton.remmoveEventListener('click', this.updateProjClickEvent);
    },

    // Event for when create proj event is fired
    createProjectClickEvent() {
        // Create and pass "create" command
        const parameters = { projName: "New Project", color: "white" };
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

    // Event for when update proj event is fired
    editProjClickEvent(e) {
        e.stopPropagation();
        // Create and pass "edit" command (actually opens Modal)
        const id = e.currentTarget.dataset.id;
        const parameters = { id: id };
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("editProj", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
    },

    // Event for when update proj event is fired
    updateProjClickEvent(e) {
        const id = e.currentTarget.dataset.id;
        const projName = document.getElementById('taskName').value;
        const color = document.getElementById('taskPriority').value;
        // Create and pass "create" command
        const parameters = { id: id, projName: projName, color: color };
        const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("updateProj", parameters);
        _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleModelCommand(command);
        console.log("FIRED");
        console.log(command);
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

const command9 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 1});
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

const command10 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 2});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command10);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test13", priority:"High", dueDate:currentDate, description:"Test Description 13"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test14", priority:"Medium", dueDate:currentDate, description:"Test Description 14"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test15", priority:"Low", dueDate:currentDate, description:"Test Description 15"}));

const command11 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 3});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command11);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test16", priority:"Low", dueDate:currentDate, description:"Test Description 16"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test17", priority:"Low", dueDate:currentDate, description:"Test Description 17"}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {taskName:"Test18", priority:"Low", dueDate:currentDate, description:"Test Description 18"}));

const command12 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 4});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command12);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));

const command13 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 5});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command13);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));

const command14 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 6});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command14);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));

const command15 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 7});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command15);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));

const command16 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", {id: 8});
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command16);

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));
_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand( (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", {priority:"Low", dueDate:currentDate}));

_model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command9);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1B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QUMxQjtBQUNBLHdEQUF3RDtBQUN4RCxxREFBcUQ7QUFDckQ7QUFDQSxRQUFRLHdFQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBNEI7QUFDcEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBNEI7QUFDcEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBQ3hELHVEQUF1RDtBQUN2RCwyREFBMkQ7QUFDM0Q7QUFDQSxRQUFRLHdFQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUE0QjtBQUNwQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVF5QztBQUNDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFFBQVE7QUFDekU7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsK0RBQStELEdBQUc7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsR0FBRztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLEdBQUc7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFFBQVE7QUFDekU7QUFDQSxVQUFVO0FBQ1Y7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QUFDbkYsMERBQW1CLEVBQUUsdURBQWMsWUFBWSxvQ0FBb0M7QUFDbkYsMERBQW1CLEVBQUUsdURBQWMsWUFBWSxvQ0FBb0M7O0FBRW5GLGtCQUFrQix1REFBYyxjQUFjLE1BQU07QUFDcEQsMERBQW1COztBQUVuQiwwREFBbUIsRUFBRSx1REFBYyxZQUFZLG9DQUFvQztBQUNuRiwwREFBbUIsRUFBRSx1REFBYyxZQUFZLG9DQUFvQztBQUNuRiwwREFBbUIsRUFBRSx1REFBYyxZQUFZLG9DQUFvQzs7QUFFbkYsa0JBQWtCLHVEQUFjLGNBQWMsTUFBTTtBQUNwRCwwREFBbUI7O0FBRW5CLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksb0NBQW9DO0FBQ25GLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksb0NBQW9DO0FBQ25GLDBEQUFtQixFQUFFLHVEQUFjLFlBQVksb0NBQW9DOztBQUVuRixrQkFBa0IsdURBQWMsY0FBYyxNQUFNO0FBQ3BELDBEQUFtQjs7QUFFbkIsMERBQW1CLEVBQUUsdURBQWMsWUFBWSxvQ0FBb0M7QUFDbkYsMERBQW1CLEVBQUUsdURBQWMsWUFBWSxvQ0FBb0M7QUFDbkYsMERBQW1CLEVBQUUsdURBQWMsWUFBWSxvQ0FBb0M7O0FBRW5GLGtCQUFrQix1REFBYyxjQUFjLE1BQU07QUFDcEQsMERBQW1COztBQUVuQiwwREFBbUIsRUFBRSx1REFBYyxZQUFZLG9DQUFvQztBQUNuRiwwREFBbUIsRUFBRSx1REFBYyxZQUFZLG9DQUFvQztBQUNuRiwwREFBbUIsRUFBRSx1REFBYyxZQUFZLG9DQUFvQzs7QUFFbkYsMERBQW1CLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tbWFuZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHksIGlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNtYWluQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiAxNDAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI3Byb2plY3RXcmFwcGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggNDBweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxufVxcblxcbiNwcm9qZWN0QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4IDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDNweCAzcHggcmdiYSgxMjIsMTIyLDEyMiwwLjIpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0udXBkYXRlUGxheWFibGU6aG92ZXIge1xcbiAgICBhbmltYXRpb246IHRpbHRSZWFkIDAuNHMgZm9yd2FyZHMgMSBlYXNlLWluO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJyZWRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwib3JhbmdlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk3MzE2O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInllbGxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2MxNTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJncmVlblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJjeWFuXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJkM2VlO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImJsdWVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwicHVycGxlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg1NWY3O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInBpbmtcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjcxODU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAubmFtZSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiAxODBweDtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3RCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJvcmRlcjogNHB4IGRvdHRlZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzcHggcmdiYSgxMjIsMTIyLDEyMiwwLjIpO1xcbn1cXG5cXG4jdG9kb1dyYXBwZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XFxufVxcblxcbiN0b2RvQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA3MjBweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHggMjBweCAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbn1cXG5cXG4udG9kb0l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDNweCAzcHggcmdiYSgxMjIsMTIyLDEyMiwwLjIpO1xcbn1cXG5cXG4udG9kb0l0ZW0udXBkYXRlUGxheWFibGU6aG92ZXIge1xcbiAgICBhbmltYXRpb246IHRpbHRSZWFkIDAuNHMgZm9yd2FyZHMgMSBlYXNlLWluO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJIaWdoXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIk1lZGl1bVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2MxNTtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJMb3dcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcblxcbi50b2RvSXRlbSAubmFtZSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmR1ZURhdGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi50b2RvSXRlbSAuZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogMzQwcHg7XFxufVxcblxcbi5jcmVhdGVBbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IHpvb21DcmVhdGUgbm9ybWFsIDAuN3MgMSBlYXNlLW91dDtcXG59XFxuXFxuLnVwZGF0ZUFuaW1hdGlvbiBwe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogc2hha2VVcGRhdGUgMC44cyAxO1xcbn1cXG5cXG4uZGVsZXRlQW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiB6b29tRGVsZXRlIHJldmVyc2UgMC43cyBmb3J3YXJkcyAxIGVhc2Utb3V0O1xcbn1cXG5cXG4jYnV0dG9uQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJGRjU5O1xcbn1cXG5cXG4uYnV0dG9uI3VuZG9CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ4O1xcbn1cXG5cXG4uYnV0dG9uLnNtYWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW0gLmJ1dHRvbiwgLnByb2plY3RJdGVtIC5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idXR0b24uZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2MxNTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnRleHRJbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGF0ZUlucHV0IHtcXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmlvcml0eUlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5pbnB1dCNkZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUNyZWF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAyNSU7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwcmVtO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aWx0UmVhZCB7XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBzaGFrZVVwZGF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0b3A6IC0xNnB4O1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdG9wOiAtOHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyB6b29tRGVsZXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDI1JTtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIG1hcmdpbjogLTEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwcmVtO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCx5REFBd0M7SUFDeEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtBQUNo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QUF5QjtRQUN6QixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsVUFBVTtRQUNWLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2JhY2tncm91bmQuanBlZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHksIGlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNtYWluQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiAxNDAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI3Byb2plY3RXcmFwcGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggNDBweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxufVxcblxcbiNwcm9qZWN0QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4IDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDNweCAzcHggcmdiYSgxMjIsMTIyLDEyMiwwLjIpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0udXBkYXRlUGxheWFibGU6aG92ZXIge1xcbiAgICBhbmltYXRpb246IHRpbHRSZWFkIDAuNHMgZm9yd2FyZHMgMSBlYXNlLWluO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJyZWRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwib3JhbmdlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk3MzE2O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInllbGxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2MxNTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJncmVlblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJjeWFuXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJkM2VlO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImJsdWVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwicHVycGxlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg1NWY3O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInBpbmtcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjcxODU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAubmFtZSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiAxODBweDtcXG59XFxuXFxuI2NyZWF0ZVByb2plY3RCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJvcmRlcjogNHB4IGRvdHRlZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzcHggcmdiYSgxMjIsMTIyLDEyMiwwLjIpO1xcbn1cXG5cXG4jdG9kb1dyYXBwZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XFxufVxcblxcbiN0b2RvQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA3MjBweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHggMjBweCAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xcbn1cXG5cXG4udG9kb0l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDNweCAzcHggcmdiYSgxMjIsMTIyLDEyMiwwLjIpO1xcbn1cXG5cXG4udG9kb0l0ZW0udXBkYXRlUGxheWFibGU6aG92ZXIge1xcbiAgICBhbmltYXRpb246IHRpbHRSZWFkIDAuNHMgZm9yd2FyZHMgMSBlYXNlLWluO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC44KTtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJIaWdoXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIk1lZGl1bVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2MxNTtcXG59XFxuXFxuLnRvZG9JdGVtIC5wcmlvcml0eVtkYXRhLXByaW9yaXR5PVxcXCJMb3dcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcblxcbi50b2RvSXRlbSAubmFtZSB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udG9kb0l0ZW0gLmR1ZURhdGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi50b2RvSXRlbSAuZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogMzQwcHg7XFxufVxcblxcbi5jcmVhdGVBbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IHpvb21DcmVhdGUgbm9ybWFsIDAuN3MgMSBlYXNlLW91dDtcXG59XFxuXFxuLnVwZGF0ZUFuaW1hdGlvbiBwe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogc2hha2VVcGRhdGUgMC44cyAxO1xcbn1cXG5cXG4uZGVsZXRlQW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uOiB6b29tRGVsZXRlIHJldmVyc2UgMC43cyBmb3J3YXJkcyAxIGVhc2Utb3V0O1xcbn1cXG5cXG4jYnV0dG9uQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJGRjU5O1xcbn1cXG5cXG4uYnV0dG9uI3VuZG9CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ4O1xcbn1cXG5cXG4uYnV0dG9uLnNtYWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kb0l0ZW0gLmJ1dHRvbiwgLnByb2plY3RJdGVtIC5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idXR0b24uZGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLmJ1dHRvbi5lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2MxNTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnRleHRJbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZGF0ZUlucHV0IHtcXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wcmlvcml0eUlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5pbnB1dCNkZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUNyZWF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBQUFBO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAyNSU7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwcmVtO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aWx0UmVhZCB7XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBzaGFrZVVwZGF0ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0b3A6IC0xNnB4O1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdG9wOiAtOHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyB6b29tRGVsZXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDI1JTtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIG1hcmdpbjogLTEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwcmVtO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbW1hbmRGYWN0b3J5ID0gKGNvbW1hbmRUeXBlLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgcmV0dXJuIHsgY29tbWFuZFR5cGUsIHBhcmFtZXRlcnMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hbmRGYWN0b3J5OyIsImltcG9ydCB7IG1vZGVsLCBkZWZhdWx0UHJvamVjdCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi92aWV3LmpzJztcblxuLy8gQ09OVFJPTExFUlxuY29uc3QgY29udHJvbGxlciA9IHtcbiAgICAvLyBGb3J3YXJkcyBjb21tYW5kcyB0byB2aWV3XG4gICAgaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICB2aWV3LmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcbiAgICBcbiAgICAvLyBGb3J3YXJkcyBjb21tYW5kcyB0byBtb2RlbFxuICAgIGhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgcmVxdWVzdCB0byBvcGVuIG1vZGFsXG4gICAgb3Blbk1vZGFsUmVxKCkge1xuICAgICAgICB2aWV3Lm9wZW5Nb2RhbCgpO1xuICAgIH0sXG5cbiAgICBzZXRNb2RhbE1vZGUobW9kZSwgaWQpIHtcbiAgICAgICAgdmlldy5zZXRNb2RhbEJ1dHRvbkJlaGF2aW9yKG1vZGUsIGlkKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyByZXF1ZXN0IHRvIGluamVjdCBkYXRhIGludG8gbW9kYWxcbiAgICBhZGRUb2RvTW9kYWxSZXEodG9kbykge1xuICAgICAgICBsZXQgdGFza05hbWUgPSB0b2RvLnRhc2tOYW1lO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgdmlldy5hZGRUb2RvTW9kYWwodGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHZpZXcub3Blbk1vZGFsKCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgcmVxdWVzdCB0byBpbmplY3QgZGF0YSBpbnRvIG1vZGFsXG4gICAgYWRkUHJvak1vZGFsUmVxKHByb2plY3QpIHtcbiAgICAgICAgbGV0IHByb2pOYW1lID0gcHJvamVjdC5wcm9qTmFtZTtcbiAgICAgICAgbGV0IGNvbG9yID0gcHJvamVjdC5jb2xvcjtcbiAgICAgICAgdmlldy5hZGRQcm9qTW9kYWwocHJvak5hbWUsIGNvbG9yKTtcbiAgICAgICAgdmlldy5vcGVuTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyByZXF1ZXN0IHRvIGNsb3NlIG1vZGFsXG4gICAgY2xvc2VNb2RhbFJlcSgpIHtcbiAgICAgICAgdmlldy5jbG9zZU1vZGFsKCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgb3BlbiBtb2RhbCBjbGljayBldmVudFxuICAgIGhhbmRsZU9wZW5Nb2RhbENsaWNrKCkge1xuICAgICAgICB2aWV3LnNldE1vZGFsQnV0dG9uQmVoYXZpb3IoXCJjcmVhdGVcIik7XG4gICAgICAgIHZpZXcub3Blbk1vZGFsKCk7XG4gICAgfSxcblxuICAgIC8vIEhhbmRsZXMgY2xvc2UgbW9kYWwgY2xpY2sgZXZlbnRcbiAgICBoYW5kbGVDbG9zZU1vZGFsQ2xpY2soKSB7XG4gICAgICAgIHZpZXcuY2xvc2VNb2RhbCgpO1xuICAgIH0sXG4gICAgLy8gU2VuZHMgcmVxdWVzdCB0byB1cGRhdGUgRE9NIFByb2plY3RzXG4gICAgXG4gICAgLy8gU2VuZHMgcmVxdWVzdCB0byB1cGRhdGUgRE9NIFRvZG9zXG4gICAgcmVmcmVzaFZpZXdUb2Rvc1JlcShwcm9qZWN0KSB7XG4gICAgICAgIHZpZXcuZGlzcGxheVRvZG9zKHByb2plY3QpO1xuICAgIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXI7IiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IGNvbW1hbmRGYWN0b3J5IGZyb20gXCIuL2NvbW1hbmQuanNcIjtcblxuLy8gQ29uc3RydWN0b3IgZm9yIFByb2plY3Qgb2JqZWN0c1xuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAoaWQsIHByb2pOYW1lLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IFtdO1xuICAgIHJldHVybiB7IGlkLCBsaXN0SXRlbXMsIHByb2pOYW1lLCBjb2xvcn1cbn1cblxuLy8gSG9sZHMgZXZlcnkgcHJvamVjdCBpdGVtXG5jb25zdCBwcm9qZWN0SG9sZGVyID0gW107XG5cbi8vIERlZmF1bHQgcHJvamVjdCBvYmplY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoMSwgJ2RlZmF1bHQnLCAnd2hpdGUnKTtcbnByb2plY3RIb2xkZXIucHVzaChwcm9qZWN0SG9sZGVyKTtcblxuLy8gTU9ERUwgQ09OVFJPTExFUlxuY29uc3QgbW9kZWwgPSB7XG4gICAgLy8gSUQgY291bnRlciAocmVwbGFjZSB3aXRoIFVVSUQgbGF0ZXI/KVxuICAgIGlkQ291bnRlcjogMSxcbiAgICAvLyBJRCBjb3VudGVyIGZvciBwcm9qZWN0IGl0ZW1zXG4gICAgcHJvaklkQ291bnRlcjogMSxcblxuICAgIC8vIENvbnN0cnVjdG9yIGZvciBMaXN0IG9iamVjdHNcbiAgICB0b2RvRmFjdG9yeSh0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB7IHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24gfTtcbiAgICB9LFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIGN1cnJlbnRseSBhY3RpdmUgcHJvamVjdFxuICAgIGN1cnJlbnRQcm9qZWN0OiBkZWZhdWx0UHJvamVjdCxcblxuICAgIC8vIFF1ZSBmb3IgaG9sZGluZyBwcmV2aW91cyBkb25lIGNvbW1hbmRzXG4gICAgY29tbWFuZFF1ZXVlOiBbXSxcblxuICAgIC8vIEhhbmRsZXMgY29tbWFuZHNcbiAgICBoYW5kbGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNb2RhbFJlcSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcInJlYWRcIikge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IHRoaXMucmVhZFRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNldE1vZGFsTW9kZShcInVwZGF0ZVwiLCBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRUb2RvTW9kYWxSZXEodG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNb2RhbFJlcSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFByb2pcIikge1xuICAgICAgICAgICAgdGhpcy5yZWFkUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJlZGl0UHJvalwiKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5lZGl0UHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc2V0TW9kYWxNb2RlKFwidXBkYXRlUHJvalwiLCBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRQcm9qTW9kYWxSZXEocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidXBkYXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmNsb3NlTW9kYWxSZXEoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJkZWxldGVQcm9qXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1bmRvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDb21tYW5kID0gdGhpcy5jb21tYW5kUXVldWUucG9wKCk7XG4gICAgICAgICAgICB0aGlzLnVuZG9Db21tYW5kKGxhc3RDb21tYW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlICE9PSBcInJlYWRcIiAmJiBjb21tYW5kLmNvbW1hbmRUeXBlICE9PSBcImVkaXRQcm9qXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZFF1ZXVlLnB1c2goY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8vIENyZWF0ZSBwcm9qZWN0XG4gICAgY3JlYXRlUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGxldCBwcm9qTmFtZSA9IGNvbW1hbmQucGFyYW1ldGVycy5wcm9qTmFtZTtcbiAgICAgICAgbGV0IGNvbG9yID0gY29tbWFuZC5wYXJhbWV0ZXJzLmNvbG9yO1xuICAgICAgICBsZXQgaWQ7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFuIElEICh1bmRvIG9wZXJhdGlvbiksIGlmIG5vdCB0aGVuIGFzc2lnbiBJRFxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLmlkKSB7XG4gICAgICAgICAgICBjb21tYW5kLmNvbW1hbmRUeXBlID0gXCJjcmVhdGVQcm9qXCI7XG4gICAgICAgICAgICBpZCA9IGNvbW1hbmQucGFyYW1ldGVycy5pZDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEhvbGRlci5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID4gY29tbWFuZC5wYXJhbWV0ZXJzLmlkICk7XG4gICAgICAgICAgICBpZiAocHJvamVjdEhvbGRlcltpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHByb2plY3RIb2xkZXJbaW5kZXhdLmlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShpZCwgcHJvak5hbWUsIGNvbG9yKTtcbiAgICAgICAgICAgIHByb2plY3QubGlzdEl0ZW1zID0gY29tbWFuZC5wYXJhbWV0ZXJzLmxpc3RJdGVtcztcbiAgICAgICAgICAgIHByb2plY3RIb2xkZXIuc3BsaWNlKGluZGV4LCAwLCBwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aGlzLnByb2pJZENvdW50ZXIsIHByb2pOYW1lLCBjb2xvcik7XG4gICAgICAgICAgICBpZCA9IHRoaXMucHJvaklkQ291bnRlcisrO1xuICAgICAgICAgICAgcHJvamVjdEhvbGRlci5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5pZCA9IGlkO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBSZWFkIChjaGFuZ2UpIHByb2plY3RcbiAgICByZWFkUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SG9sZGVyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0Lmxpc3RJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0b2RvLmlkO1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0b2RvLnRhc2tOYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7aWQsIHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb259KTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmlkID0gdGhpcy5jdXJyZW50UHJvamVjdC5pZDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgfSxcblxuICAgIGVkaXRQcm9qZWN0KGNvbW1hbmQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RIb2xkZXIuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSB0b2RvXG4gICAgdXBkYXRlUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1hbmQpO1xuICAgICAgICAvLyBGaW5kcyBwcm9qIHdpdGggY29ycmVjdCBpZFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEhvbGRlci5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICAvLyBTYXZlcyBpbmZvIHRvIGFsbG93IHJldmVyc2FsIGxhdGVyXG4gICAgICAgIGNvbnN0IG9sZFByb2ogPSB7IHByb2pOYW1lOiBwcm9qZWN0LnByb2pOYW1lLCBjb2xvcjogcHJvamVjdC5jb2xvcn07XG4gICAgICAgIC8vIEVkaXRzIHZhbHVlc1xuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLnByb2pOYW1lICE9IHVuZGVmaW5lZCkgeyBwcm9qZWN0LnByb2pOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnByb2pOYW1lIH1cbiAgICAgICAgaWYgKGNvbW1hbmQucGFyYW1ldGVycy5jb2xvciAhPSB1bmRlZmluZWQpIHsgcHJvamVjdC5jb2xvciA9IGNvbW1hbmQucGFyYW1ldGVycy5jb2xvciB9XG4gICAgICAgIC8vIFNlbmRzIGEgY29tbWFuZCBmb3IgdXBkYXRpbmcgdGhlIERPTSBlbGVtZW50IHZpc3VhbGx5XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIC8vIFJlaW5qZWN0cyBpbmZvIGludG8gY29tbWFuZCB0byBhbGxvdyByZXZlcnNhbFxuICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMucHJvak5hbWUgPSBvbGRQcm9qLnByb2pOYW1lO1xuICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuY29sb3IgPSBvbGRQcm9qLmNvbG9yO1xuICAgIH0sXG5cbiAgICAvLyBEZWxldGUgcHJvamVjdFxuICAgIGRlbGV0ZVByb2plY3QoY29tbWFuZCkge1xuICAgICAgICBjb21tYW5kLmNvbW1hbmRUeXBlID0gXCJkZWxldGVQcm9qXCI7XG4gICAgICAgIC8vIEZpbmRzIHByb2plY3Qgd2l0aCBjb3JyZWN0IGluZGV4IGFuZCBkZWxldGVzIGl0XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEhvbGRlci5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7IFxuICAgICAgICAgICAgLy8gQnV0IG5vdCBiZWZvcmUgY29weWluZyB0aGUgcHJvamVjdCBpbmZvIHRvIGFsbG93IHJldmVyc2FsIGxhdGVyLi4uXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gKHByb2plY3RIb2xkZXIuc3BsaWNlKGluZGV4LCAxKSlbMF07XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuY29sb3IgPSBwcm9qZWN0LmNvbG9yO1xuICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLnByb2pOYW1lID0gcHJvamVjdC5wcm9qTmFtZTtcbiAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5saXN0SXRlbXMgPSBwcm9qZWN0Lmxpc3RJdGVtcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTZW5kcyBhIGNvbW1hbmQgZm9yIGRlbGV0aW5nIHRoZSBET00gZWxlbWVudCB2aXN1YWxseVxuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgdG9kb1xuICAgIGNyZWF0ZVRvZG8ocHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0LCBjb21tYW5kKSB7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IGNvbW1hbmQucGFyYW1ldGVycy50YXNrTmFtZTtcbiAgICAgICAgaWYgKCF0YXNrTmFtZSkgeyBcbiAgICAgICAgICAgIHRhc2tOYW1lID0gXCJEZWZhdWx0IE5hbWVcIjtcbiAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy50YXNrTmFtZSA9IHRhc2tOYW1lOyBcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gY29tbWFuZC5wYXJhbWV0ZXJzLnByaW9yaXR5O1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGNvbW1hbmQucGFyYW1ldGVycy5kdWVEYXRlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb247XG4gICAgICAgIGlmICghZGVzY3JpcHRpb24pIHsgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IFwiRGVmYXVsdCBEZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b2RvID0gdGhpcy50b2RvRmFjdG9yeSh0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0Lmxpc3RJdGVtcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID4gY29tbWFuZC5wYXJhbWV0ZXJzLmlkICk7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFuIElEICh1bmRvIG9wZXJhdGlvbiksIGlmIG5vdCB0aGVuIGFzc2lnbiBJRFxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLmlkKSB7XG4gICAgICAgICAgICBjb21tYW5kLmNvbW1hbmRUeXBlID0gXCJjcmVhdGVcIjtcbiAgICAgICAgICAgIHRvZG8uaWQgPSBjb21tYW5kLnBhcmFtZXRlcnMuaWQ7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPiBjb21tYW5kLnBhcmFtZXRlcnMuaWQgKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lmxpc3RJdGVtc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHByb2plY3QubGlzdEl0ZW1zW2luZGV4XS5pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmluZGV4SUQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0Lmxpc3RJdGVtcy5zcGxpY2UoaW5kZXgsIDAsIHRvZG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kby5pZCA9IHRoaXMuaWRDb3VudGVyKys7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaWQgPSB0b2RvLmlkO1xuICAgICAgICAgICAgcHJvamVjdC5saXN0SXRlbXMucHVzaCh0b2RvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZW5kcyBhIGNvbW1hbmQgZm9yIGNyZWF0aW5nIHRoZSBET00gZWxlbWVudCB2aXN1YWxseVxuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBSZWFkIHRvZG9cbiAgICByZWFkVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgdG9kb1xuICAgIHVwZGF0ZVRvZG8ocHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0LCBjb21tYW5kKSB7XG4gICAgICAgIC8vIEZpbmRzIHRvZG8gd2l0aCBjb3JyZWN0IGlkXG4gICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0Lmxpc3RJdGVtcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PSBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICAvLyBTYXZlcyBpbmZvIHRvIGFsbG93IHJldmVyc2FsIGxhdGVyXG4gICAgICAgIGNvbnN0IG9sZFRvZG8gPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0b2RvKSB7XG4gICAgICAgICAgICBvbGRUb2RvW3Byb3BlcnR5XSA9IHRvZG9bcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVkaXRzIHZhbHVlc1xuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lICE9IHVuZGVmaW5lZCkgeyB0b2RvLnRhc2tOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lIH1cbiAgICAgICAgaWYgKGNvbW1hbmQucGFyYW1ldGVycy5wcmlvcml0eSAhPSB1bmRlZmluZWQpIHsgdG9kby5wcmlvcml0eSA9IGNvbW1hbmQucGFyYW1ldGVycy5wcmlvcml0eSB9XG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMuZHVlRGF0ZSAhPSB1bmRlZmluZWQpIHsgdG9kby5kdWVEYXRlID0gY29tbWFuZC5wYXJhbWV0ZXJzLmR1ZURhdGUgfVxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLmRlc2NyaXB0aW9uICE9IHVuZGVmaW5lZCkgeyB0b2RvLmRlc2NyaXB0aW9uID0gY29tbWFuZC5wYXJhbWV0ZXJzLmRlc2NyaXB0aW9uIH1cbiAgICAgICAgLy8gU2VuZHMgYSBjb21tYW5kIGZvciB1cGRhdGluZyB0aGUgRE9NIGVsZW1lbnQgdmlzdWFsbHlcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVWaWV3Q29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgLy8gUmVpbmplY3RzIGluZm8gaW50byBjb21tYW5kIHRvIGFsbG93IHJldmVyc2FsXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gb2xkVG9kbykge1xuICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzW3Byb3BlcnR5XSA9IG9sZFRvZG9bcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIERlbGV0ZSB0b2RvXG4gICAgZGVsZXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgY29tbWFuZC5jb21tYW5kVHlwZSA9IFwiZGVsZXRlXCI7XG4gICAgICAgIC8vIEZpbmRzIHRvZG8gd2l0aCBjb3JyZWN0IGluZGV4IGFuZCBkZWxldGVzIGl0XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC5saXN0SXRlbXMuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PSBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkgeyBcbiAgICAgICAgICAgIC8vIEJ1dCBub3QgYmVmb3JlIGNvcHlpbmcgdGhlIHRvZG8gaW5mbyB0byBhbGxvdyByZXZlcnNhbCBsYXRlci4uLlxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IChwcm9qZWN0Lmxpc3RJdGVtcy5zcGxpY2UoaW5kZXgsIDEpKVswXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdG9kbykge1xuICAgICAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVyc1twcm9wZXJ0eV0gPSB0b2RvW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTZW5kcyBhIGNvbW1hbmQgZm9yIGRlbGV0aW5nIHRoZSBET00gZWxlbWVudCB2aXN1YWxseVxuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBVbmRvZXMgbGFzdCBjb21tYW5kXG4gICAgdW5kb0NvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKHRoaXMuY3VycmVudFByb2plY3QsIGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlUHJvalwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1cGRhdGVQcm9qXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVByb2pcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFByb2pcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFByb2plY3QoY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiVEhFUkUgQVJFIE5PIENPTU1BTkRTIFRPIFVORE9cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgbW9kZWwsXG4gICAgZGVmYXVsdFByb2plY3Rcbn0iLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbW1hbmRGYWN0b3J5IGZyb20gJy4vY29tbWFuZC5qcyc7XG5cbi8vIERPTSBFbGVtZW50IFNldHVwXG5jb25zdCBwcm9qQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RCYXInKTtcbmNvbnN0IHRvZG9CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0JhcicpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tOYW1lJyk7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrUHJpb3JpdHknKTtcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0QnV0dG9uJyk7XG5jb25zdCBvcGVuTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbk1vZGFsQnV0dG9uJyk7XG5jb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEJ1dHRvbicpO1xuY29uc3QgdW5kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bmRvQnV0dG9uJyk7XG5cbi8vIE1vZGFsIGVsZW1lbnRzXG5jb25zdCBtb2RhbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrUHJpb3JpdHknKTtcbmNvbnN0IG1vZGFsRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG5jb25zdCBtb2RhbERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5cbi8vIFNldHVwIGRlZmF1bHQgZGF0ZSBmb3IgaW5wdXRzIChDYW4gbW92ZSBpbnRvIG93biBmdW5jdGlvbiBpbiByZWZhY3Rvcj8pXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuLy8gVklFVyBDT05UUk9MTEVSXG5jb25zdCB2aWV3ID0ge1xuICAgIC8vIEhhbmRsZXMgY29tbWFuZHNcbiAgICBoYW5kbGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgbGV0IGlkID0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkO1xuICAgICAgICBsZXQgcHJvak5hbWUgPSBjb21tYW5kLnBhcmFtZXRlcnMucHJvak5hbWU7XG4gICAgICAgIGxldCBjb2xvciA9IGNvbW1hbmQucGFyYW1ldGVycy5jb2xvcjtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBjb21tYW5kLnBhcmFtZXRlcnMucHJpb3JpdHk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gY29tbWFuZC5wYXJhbWV0ZXJzLmR1ZURhdGU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNvbW1hbmQucGFyYW1ldGVycy5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IGluZGV4SUQgPSBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRDtcbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyhpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgaW5kZXhJRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kbyhpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVG9kbyhpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3QoaWQsIHByb2pOYW1lLCBjb2xvciwgaW5kZXhJRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFByb2pcIikge1xuICAgICAgICAgICAgdGhpcy5yZWFkUHJvamVjdChpZCk7XG4gICAgICAgICAgICB0b2RvQmFyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcInVwZGF0ZVByb2pcIikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0KGlkLCBwcm9qTmFtZSwgY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVByb2pcIikge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KGlkKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDcmVhdGVzIHByb2plY3QgaXRlbVxuICAgIGNyZWF0ZVByb2plY3QoaWQsIG5hbWUsIGNvbG9yLCBpbmRleElEID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIENyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJdGVtJywgJ2NyZWF0ZUFuaW1hdGlvbicpO1xuICAgICAgICBjb25zdCBwcm9qQ29sb3JUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakNvbG9yVGFnLmNsYXNzTGlzdC5hZGQoJ2NvbG9yVGFnJyk7XG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgIGNvbnN0IHByb2pEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvakRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnZGVsZXRlJyk7XG4gICAgICAgIC8vIEFkZCBpZCBkYXRhLWF0dHJpYnV0ZSB0byBlbGVtZW50c1xuICAgICAgICBwcm9qRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIHByb2pEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIGRlbGV0aW5nIHByb2pcbiAgICAgICAgcHJvakRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlUHJvakNsaWNrRXZlbnQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIG9wZW5pbmcgcHJvalxuICAgICAgICBwcm9qRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVhZFByb2pDbGlja0V2ZW50KTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciB3aGVuIGFuaW1hdGlvbiBlbmRzXG4gICAgICAgIHByb2pFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuYW5pbWF0aW9uRW5kRXZlbnQpO1xuICAgICAgICAvLyBTZXRzIGNvcnJlY3QgY29sb3IgdGFnIGRhdGEgYXR0cmlidXRlXG4gICAgICAgIHByb2pDb2xvclRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIsIGNvbG9yKTtcbiAgICAgICAgLy8gSW5qZWN0cyBkYXRhIHRvIHRvZG8gZWxlbWVudHNcbiAgICAgICAgcHJvak5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBwcm9qRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAvLyBBZGRzIHByb2plY3QgdG8gdGhlIERPTVxuICAgICAgICAvLyBBZGRzIHRvZG8gdG8gdGhlIERPTVxuICAgICAgICBwcm9qRWxlbWVudC5hcHBlbmQocHJvakNvbG9yVGFnLCBwcm9qTmFtZSwgcHJvakRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGlmIChpbmRleElEKSB7XG4gICAgICAgICAgICAvLyBVbmRvIG9wZXJhdGlvblxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJOb2RlID0gcHJvakJhci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aW5kZXhJRH1cImApO1xuICAgICAgICAgICAgcHJvakJhci5pbnNlcnRCZWZvcmUocHJvakVsZW1lbnQsIGFmdGVyTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qQmFyLmluc2VydEJlZm9yZShwcm9qRWxlbWVudCwgY3JlYXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmVhZHMgcHJvamVjdCBpdGVtXG4gICAgcmVhZFByb2plY3QoaWQpIHtcbiAgICAgICAgLy8gVGFncyBhbGwgcmVxdWlyZWQgZWxlbWVudHMgb2YgdGhlIHByb2plY3QgaXRlbVxuICAgICAgICBjb25zdCBwcm9qRWxlbWVudCA9IHByb2pCYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiYCk7XG4gICAgICAgIC8vIEFkZHMgdXBkYXRlIGFuaW1hdGlvblxuICAgICAgICBwcm9qRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1cGRhdGVBbmltYXRpb24nKTtcbiAgICAgICAgLy8gQ2hhbmdlcyBkZWxldGUgYnV0dG9uIGludG8gZWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgcHJldkRlbGV0ZUJ1dHRvbiA9IHByb2pCYXIucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICAgICAgaWYgKHByZXZEZWxldGVCdXR0b24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHByZXZEZWxldGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZWRpdCcpO1xuICAgICAgICAgICAgcHJldkRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICAgICAgcHJldkRlbGV0ZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWRpdFByb2pDbGlja0V2ZW50KTtcbiAgICAgICAgICAgIHByZXZEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVByb2pDbGlja0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9qRGVsZXRlQnV0dG9uID0gcHJvakVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuICAgICAgICBwcm9qRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCLinI5cIjtcbiAgICAgICAgcHJvakRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgIHByb2pEZWxldGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVByb2pDbGlja0V2ZW50KTtcbiAgICAgICAgcHJvakRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZWRpdFByb2pDbGlja0V2ZW50KTtcbiAgICB9LFxuXG4gICAgLy8gVXBkYXRlcyBwcm9qZWN0IGl0ZW1cbiAgICB1cGRhdGVQcm9qZWN0KGlkLCBwcm9qTmFtZSwgY29sb3IpIHtcbiAgICAgICAgLy8gVGFncyBhbGwgcmVxdWlyZWQgZWxlbWVudHMgb2YgdGhlIHRvZG8gaXRlbVxuICAgICAgICBjb25zdCBwcm9qRWxlbWVudCA9IHByb2pCYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiYCk7XG4gICAgICAgIGNvbnN0IHByb2pDb2xvciA9IHByb2pFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvclRhZycpO1xuICAgICAgICBjb25zdCBuYW1lID0gcHJvakVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbiAgICAgICAgLy8gSW5qZWN0cyBuZXcgdmFsdWVzIHRvIGVsZW1lbnRzXG4gICAgICAgIHByb2pDb2xvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIsIGNvbG9yKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2pOYW1lO1xuICAgICAgICAvLyBBZGRzIHVwZGF0ZSBhbmltYXRpb25cbiAgICAgICAgcHJvakVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndXBkYXRlQW5pbWF0aW9uJyk7XG4gICAgfSxcblxuICAgIC8vIERlbGV0ZSBwcm9qZWN0IGl0ZW1cbiAgICBkZWxldGVQcm9qZWN0KGlkKSB7XG4gICAgICAgIC8vIEZpbmRzIHRvZG8gZWxlbWVudCB0byBkZWxldGVcbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBwcm9qQmFyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cImApO1xuICAgICAgICAvLyBBdHRhY2hlcyBkZWxldGUgYW5pbWF0aW9uXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUFuaW1hdGlvbicpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidXBkYXRlUGxheWFibGVcIik7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZXMgdG9kbyBpdGVtXG4gICAgY3JlYXRlVG9kbyhpZCwgdGFza05hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgaW5kZXhJRCA9IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBDcmVhdGUgdG9kbyBlbGVtZW50c1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScsICdjcmVhdGVBbmltYXRpb24nKTtcbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZScpO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2RlbGV0ZScpO1xuICAgICAgICAvLyBBZGQgaWQgZGF0YS1hdHRyaWJ1dGUgdG8gZWxlbWVudHNcbiAgICAgICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciBkZWxldGluZyB0b2RvXG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVRvZG9DbGlja0V2ZW50KTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciBvcGVuaW5nIHRvZG9cbiAgICAgICAgdG9kb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlYWRUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIC8vIEFkZHMgZXZlbnQgaGFuZGxlciBmb3Igd2hlbiBhbmltYXRpb24gZW5kc1xuICAgICAgICB0b2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCB0aGlzLmFuaW1hdGlvbkVuZEV2ZW50KTtcbiAgICAgICAgLy8gU2V0cyBjb3JyZWN0IHByaW9yaXR5IGRhdGEgYXR0cmlidXRlXG4gICAgICAgIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIHByaW9yaXR5KTtcbiAgICAgICAgLy8gSW5qZWN0cyBkYXRhIHRvIHRvZG8gZWxlbWVudHNcbiAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcbiAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgLy8gQWRkcyB0b2RvIHRvIHRoZSBET01cbiAgICAgICAgdG9kb0VsZW1lbnQuYXBwZW5kKHRvZG9Qcmlvcml0eSwgdG9kb05hbWUsIHRvZG9EdWVEYXRlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EZWxldGVCdXR0b24pO1xuICAgICAgICBpZiAoaW5kZXhJRCkge1xuICAgICAgICAgICAgLy8gVW5kbyBvcGVyYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGFmdGVyTm9kZSA9IHRvZG9CYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2luZGV4SUR9XCJgKTtcbiAgICAgICAgICAgIHRvZG9CYXIuaW5zZXJ0QmVmb3JlKHRvZG9FbGVtZW50LCBhZnRlck5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0Jhci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gVXBkYXRlcyB0b2RvIGl0ZW1cbiAgICB1cGRhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIC8vIFRhZ3MgYWxsIHJlcXVpcmVkIGVsZW1lbnRzIG9mIHRoZSB0b2RvIGl0ZW1cbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSB0b2RvQmFyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cImApO1xuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICAvLyBJbmplY3RzIG5ldyB2YWx1ZXMgdG8gZWxlbWVudHNcbiAgICAgICAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAvLyBBZGRzIHVwZGF0ZSBhbmltYXRpb25cbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndXBkYXRlQW5pbWF0aW9uJyk7XG4gICAgfSxcblxuICAgIC8vIERlbGV0ZXMgdG9kbyBpdGVtXG4gICAgZGVsZXRlVG9kbyhpZCkge1xuICAgICAgICAvLyBGaW5kcyB0b2RvIGVsZW1lbnQgdG8gZGVsZXRlXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gdG9kb0Jhci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJgKTtcbiAgICAgICAgLy8gQXR0YWNoZXMgZGVsZXRlIGFuaW1hdGlvblxuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWxldGVBbmltYXRpb24nKTtcbiAgICAgICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInVwZGF0ZVBsYXlhYmxlXCIpO1xuICAgIH0sXG5cbiAgICAvLyBQb3B1bGF0ZXMgbW9kYWwgd2l0aCBwcm92aWRlZCBpbmZvXG4gICAgYWRkVG9kb01vZGFsKHRhc2tOYW1lID0gXCJcIiwgcHJpb3JpdHkgPSBcIkRlZmF1bHRcIiwgZHVlRGF0ZSA9IGN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcbiAgICAgICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IHRhc2tOYW1lO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnREYXRlO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb247XG4gICAgfSxcblxuICAgIC8vIFBvcHVsYXRlcyBtb2RhbCB3aXRoIHByb3ZpZGVkIGluZm9cbiAgICBhZGRQcm9qTW9kYWwocHJvamVjdCA9IFwiXCIsIGNvbG9yID0gXCJcIikge1xuICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gcHJvamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coY29sb3IpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gY29sb3I7XG4gICAgfSxcblxuICAgIC8vIE9wZW5zIG1vZGFsXG4gICAgb3Blbk1vZGFsKCkge1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9LFxuXG4gICAgLy8gQ2xvc2UgbW9kYWxcbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICAvLyBSZXNldHMgaW5wdXRzIGluIG1vZGFsXG4gICAgICAgIHRoaXMuYWRkVG9kb01vZGFsKCk7XG4gICAgICAgIC8vIEhpZGVzIG1vZGFsXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0sXG5cbiAgICAvLyBTZXRzIGJlaGF2aW9yIG1vZGFsIGJ1dHRvbiB0byBhZGQgLyBlZGl0XG4gICAgc2V0TW9kYWxCdXR0b25CZWhhdmlvcihtb2RlLCBpZCkge1xuICAgICAgICBtb2RhbER1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgbW9kYWxEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLnJlbW92ZU1vZGFsQnV0dG9uTGlzdGVuZXJzKCk7XG4gICAgICAgIGlmIChtb2RlID09PSBcImNyZWF0ZVwiKSB7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGVcIiwgXCJjcmVhdGVcIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgICAgICAgICB0aGlzLnNldFByaW9TZWxlY3RNb2RlKFwidG9kb1wiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1tb2RlXCIsIFwidXBkYXRlXCIpO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcmlvU2VsZWN0TW9kZShcInRvZG9cIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IFwidXBkYXRlUHJvalwiKSB7XG4gICAgICAgICAgICBtb2RhbER1ZURhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1vZGFsRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiLCBcInVwZGF0ZVByb2pcIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgICAgICB0aGlzLnNldFByaW9TZWxlY3RNb2RlKFwicHJvamVjdFwiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVQcm9qQ2xpY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU2V0IHByaW9yaXR5IHNlbGVjdCBtb2RlXG4gICAgc2V0UHJpb1NlbGVjdE1vZGUobW9kZSkge1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJ0b2RvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZ2ggPSB0aGlzLmNyZWF0ZU9wdGlvbihcIkhpZ2hcIik7XG4gICAgICAgICAgICBjb25zdCBtZWRpdW0gPSB0aGlzLmNyZWF0ZU9wdGlvbihcIk1lZGl1bVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGxvdyA9IHRoaXMuY3JlYXRlT3B0aW9uKFwiTG93XCIpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdHZhbCA9IHRoaXMuY3JlYXRlT3B0aW9uKFwiRGVmYXVsdFwiKTtcbiAgICAgICAgICAgIG1vZGFsU2VsZWN0LnJlcGxhY2VDaGlsZHJlbihoaWdoLCBtZWRpdW0sIGxvdywgZGVmYXVsdHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHdoaXRlID0gdGhpcy5jcmVhdGVPcHRpb24oXCJ3aGl0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZCA9IHRoaXMuY3JlYXRlT3B0aW9uKFwicmVkXCIpO1xuICAgICAgICAgICAgY29uc3Qgb3JhbmdlID0gdGhpcy5jcmVhdGVPcHRpb24oXCJvcmFuZ2VcIik7XG4gICAgICAgICAgICBjb25zdCB5ZWxsb3cgPSB0aGlzLmNyZWF0ZU9wdGlvbihcInllbGxvd1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGdyZWVuID0gdGhpcy5jcmVhdGVPcHRpb24oXCJncmVlblwiKTtcbiAgICAgICAgICAgIGNvbnN0IGN5YW4gPSB0aGlzLmNyZWF0ZU9wdGlvbihcImN5YW5cIik7XG4gICAgICAgICAgICBjb25zdCBibHVlID0gdGhpcy5jcmVhdGVPcHRpb24oXCJibHVlXCIpO1xuICAgICAgICAgICAgY29uc3QgcHVycGxlID0gdGhpcy5jcmVhdGVPcHRpb24oXCJwdXJwbGVcIik7XG4gICAgICAgICAgICBjb25zdCBwaW5rID0gdGhpcy5jcmVhdGVPcHRpb24oXCJwaW5rXCIpO1xuICAgICAgICAgICAgbW9kYWxTZWxlY3QucmVwbGFjZUNoaWxkcmVuKHdoaXRlLCByZWQsIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgY3lhbiwgYmx1ZSwgcHVycGxlLCBwaW5rKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGVPcHRpb24odmFsdWUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdE9wdCcpO1xuICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gb3B0aW9uRWxlbWVudDtcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZlcyBtb2RhbCBidXR0b24gbGlzdGVuZXJzXG4gICAgcmVtb3ZlTW9kYWxCdXR0b25MaXN0ZW5lcnMoKSB7XG4gICAgICAgIG1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIG1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIC8vbW9kYWxCdXR0b24ucmVtbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVQcm9qQ2xpY2tFdmVudCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIGNyZWF0ZSBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgY3JlYXRlUHJvamVjdENsaWNrRXZlbnQoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImNyZWF0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgcHJvak5hbWU6IFwiTmV3IFByb2plY3RcIiwgY29sb3I6IFwid2hpdGVcIiB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gcmVhZCBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgcmVhZFByb2pDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRleHQgaXMgbm90IGJlaW5nIHNlbGVjdGVkXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24udHlwZSAhPSBcIlJhbmdlXCIpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcInJlYWRcIiBjb21tYW5kXG4gICAgICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkIH07XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkUHJvalwiLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIHVwZGF0ZSBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgZWRpdFByb2pDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwiZWRpdFwiIGNvbW1hbmQgKGFjdHVhbGx5IG9wZW5zIE1vZGFsKVxuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBpZDogaWQgfTtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwiZWRpdFByb2pcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiB1cGRhdGUgcHJvaiBldmVudCBpcyBmaXJlZFxuICAgIHVwZGF0ZVByb2pDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImNyZWF0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkLCBwcm9qTmFtZTogcHJvak5hbWUsIGNvbG9yOiBjb2xvciB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJ1cGRhdGVQcm9qXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGSVJFRFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIGRlbGV0ZSBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgZGVsZXRlUHJvakNsaWNrRXZlbnQoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJkZWxldGVcIiBjb21tYW5kXG4gICAgICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7IGlkOiBpZCB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJkZWxldGVQcm9qXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gY3JlYXRlIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICBjcmVhdGVUb2RvQ2xpY2tFdmVudCgpIHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJjcmVhdGVcIiBjb21tYW5kXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7IHRhc2tOYW1lOiB0YXNrTmFtZSwgcHJpb3JpdHk6IHByaW9yaXR5LCBkdWVEYXRlOiBkdWVEYXRlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfTtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gcmVhZCB0b2RvIGV2ZW50IGlzIGZpcmVkXG4gICAgcmVhZFRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRleHQgaXMgbm90IGJlaW5nIHNlbGVjdGVkXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24udHlwZSAhPSBcIlJhbmdlXCIpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcInJlYWRcIiBjb21tYW5kXG4gICAgICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkIH07XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVNb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gdXBkYXRlIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICB1cGRhdGVUb2RvQ2xpY2tFdmVudChlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwiY3JlYXRlXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBpZDogaWQsIHRhc2tOYW1lOiB0YXNrTmFtZSwgcHJpb3JpdHk6IHByaW9yaXR5LCBkdWVEYXRlOiBkdWVEYXRlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfTtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwidXBkYXRlXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gZGVsZXRlIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICBkZWxldGVUb2RvQ2xpY2tFdmVudChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImRlbGV0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkIH07XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcImRlbGV0ZVwiLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVNb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIGFuIGFuaW1hdGlvbiBlbmRzXG4gICAgYW5pbWF0aW9uRW5kRXZlbnQoZSkge1xuICAgICAgICBpZiAoZS5hbmltYXRpb25OYW1lID09PSBcInpvb21DcmVhdGVcIikge1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJjcmVhdGVBbmltYXRpb25cIik7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcInVwZGF0ZVBsYXlhYmxlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYW5pbWF0aW9uTmFtZSA9PT0gXCJzaGFrZVVwZGF0ZVwiKSB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInVwZGF0ZUFuaW1hdGlvblwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFuaW1hdGlvbk5hbWUgPT09IFwiem9vbURlbGV0ZVwiKSB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gdW5kbyBldmVudCBpcyBmaXJlZFxuICAgIHVuZG9DbGlja0V2ZW50KCkge1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJ1bmRvXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJ1bmRvXCIsIHVuZGVmaW5lZCk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiBvcGVuIG1vZGFsIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgb3Blbk1vZGFsQ2xpY2tFdmVudCgpIHtcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVPcGVuTW9kYWxDbGljaygpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiB0aGUgY2xvc2UgbW9kYWwgYXJlYSAob3ZlcmxheSkgaXMgY2xpY2tlZFxuICAgIGNsb3NlTW9kYWxDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgb3ZlcmxheSBhbmQgbm90IG1vZGFsIHdhcyB0YXJnZXR0ZWQgd2l0aCBjbGlja1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlQ2xvc2VNb2RhbENsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9LFxufVxuXG4vLyBTZXR1cCBldmVudCBsaXN0ZW5lcnNcbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWV3LmNyZWF0ZVByb2plY3RDbGlja0V2ZW50KTtcbm9wZW5Nb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXcub3Blbk1vZGFsQ2xpY2tFdmVudCk7XG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHZpZXcuY2xvc2VNb2RhbENsaWNrRXZlbnQpO1xudW5kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXcudW5kb0NsaWNrRXZlbnQpO1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG1vZGVsLCBkZWZhdWx0UHJvamVjdCB9IGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IGNvbW1hbmRGYWN0b3J5IGZyb20gJy4vY29tbWFuZC5qcyc7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG5jb25zdCBjb21tYW5kMSA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7cHJvak5hbWU6XCJQcm9qZWN0IDFcIiwgY29sb3I6XCJyZWRcIn0pO1xuY29uc3QgY29tbWFuZDIgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwge3Byb2pOYW1lOlwiUHJvamVjdCAyXCIsIGNvbG9yOlwib3JhbmdlXCJ9KTtcbmNvbnN0IGNvbW1hbmQzID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgM1wiLCBjb2xvcjpcInllbGxvd1wifSk7XG5jb25zdCBjb21tYW5kNCA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7cHJvak5hbWU6XCJQcm9qZWN0IDRcIiwgY29sb3I6XCJncmVlblwifSk7XG5jb25zdCBjb21tYW5kNSA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7cHJvak5hbWU6XCJQcm9qZWN0IDVcIiwgY29sb3I6XCJjeWFuXCJ9KTtcbmNvbnN0IGNvbW1hbmQ2ID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgNlwiLCBjb2xvcjpcImJsdWVcIn0pO1xuY29uc3QgY29tbWFuZDcgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwge3Byb2pOYW1lOlwiUHJvamVjdCA3XCIsIGNvbG9yOlwicHVycGxlXCJ9KTtcbmNvbnN0IGNvbW1hbmQ4ID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHtwcm9qTmFtZTpcIlByb2plY3QgOFwiLCBjb2xvcjpcInBpbmtcIn0pO1xuXG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDIpO1xubW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kMyk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQ0KTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDUpO1xubW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kNik7XG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQ3KTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDgpO1xuXG5jb25zdCBjb21tYW5kOSA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwge2lkOiAxfSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQ5KTtcblxubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDFcIiwgcHJpb3JpdHk6XCJIaWdoXCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxXCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJSZWFsbHkgUmVhbGx5IFJlYWxseSBMb25nIE5hbWUgVGVzdFwiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJSZWFsbHkgUmVhbGx5IFJlYWxseSBSZWFsbHkgUmVhbGx5IFJlYWxseSBMb25nIERlc2NyaXB0aW9uIFRlc3RcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3QzXCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gM1wifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDRcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiA0XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0NVwiLCBwcmlvcml0eTpcIk1lZGl1bVwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gNVwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDZcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiA2XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0N1wiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDdcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3Q4XCIsIHByaW9yaXR5OlwiRGVmYXVsdFwiLCBkdWVEYXRlOmN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjpcIlRlc3QgRGVzY3JpcHRpb24gOFwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDlcIiwgcHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDlcIn0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHt0YXNrTmFtZTpcIlRlc3QxMFwiLCBwcmlvcml0eTpcIkRlZmF1bHRcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDEwXCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0MTFcIiwgcHJpb3JpdHk6XCJEZWZhdWx0XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxMVwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDEyXCIsIHByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxMlwifSkpO1xuXG5jb25zdCBjb21tYW5kMTAgPSBjb21tYW5kRmFjdG9yeShcInJlYWRQcm9qXCIsIHtpZDogMn0pO1xubW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kMTApO1xuXG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0MTNcIiwgcHJpb3JpdHk6XCJIaWdoXCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxM1wifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDE0XCIsIHByaW9yaXR5OlwiTWVkaXVtXCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxNFwifSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3Rhc2tOYW1lOlwiVGVzdDE1XCIsIHByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGUsIGRlc2NyaXB0aW9uOlwiVGVzdCBEZXNjcmlwdGlvbiAxNVwifSkpO1xuXG5jb25zdCBjb21tYW5kMTEgPSBjb21tYW5kRmFjdG9yeShcInJlYWRQcm9qXCIsIHtpZDogM30pO1xubW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kMTEpO1xuXG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0MTZcIiwgcHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDE2XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0MTdcIiwgcHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDE3XCJ9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7dGFza05hbWU6XCJUZXN0MThcIiwgcHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246XCJUZXN0IERlc2NyaXB0aW9uIDE4XCJ9KSk7XG5cbmNvbnN0IGNvbW1hbmQxMiA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwge2lkOiA0fSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxMik7XG5cbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHtwcmlvcml0eTpcIkxvd1wiLCBkdWVEYXRlOmN1cnJlbnREYXRlfSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3ByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGV9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7cHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZX0pKTtcblxuY29uc3QgY29tbWFuZDEzID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkUHJvalwiLCB7aWQ6IDV9KTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDEzKTtcblxubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3ByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGV9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7cHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZX0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHtwcmlvcml0eTpcIkxvd1wiLCBkdWVEYXRlOmN1cnJlbnREYXRlfSkpO1xuXG5jb25zdCBjb21tYW5kMTQgPSBjb21tYW5kRmFjdG9yeShcInJlYWRQcm9qXCIsIHtpZDogNn0pO1xubW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kMTQpO1xuXG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7cHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZX0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHtwcmlvcml0eTpcIkxvd1wiLCBkdWVEYXRlOmN1cnJlbnREYXRlfSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3ByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGV9KSk7XG5cbmNvbnN0IGNvbW1hbmQxNSA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwge2lkOiA3fSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxNSk7XG5cbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHtwcmlvcml0eTpcIkxvd1wiLCBkdWVEYXRlOmN1cnJlbnREYXRlfSkpO1xubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3ByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGV9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7cHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZX0pKTtcblxuY29uc3QgY29tbWFuZDE2ID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkUHJvalwiLCB7aWQ6IDh9KTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDE2KTtcblxubW9kZWwuaGFuZGxlQ29tbWFuZCggY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwge3ByaW9yaXR5OlwiTG93XCIsIGR1ZURhdGU6Y3VycmVudERhdGV9KSk7XG5tb2RlbC5oYW5kbGVDb21tYW5kKCBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7cHJpb3JpdHk6XCJMb3dcIiwgZHVlRGF0ZTpjdXJyZW50RGF0ZX0pKTtcbm1vZGVsLmhhbmRsZUNvbW1hbmQoIGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHtwcmlvcml0eTpcIkxvd1wiLCBkdWVEYXRlOmN1cnJlbnREYXRlfSkpO1xuXG5tb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQ5KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=