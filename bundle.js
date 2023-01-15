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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\nbody, input, textarea {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 300;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1400px;\n    margin: auto;\n}\n\n#projectWrapper {\n    box-sizing: border-box;\n    width: 400px;\n    padding: 40px 20px 40px 0px;\n    border-radius: 20px 0px 0px 20px;\n    background-color: rgba(225, 225, 225, 0.8);\n}\n\n#projectBar {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.projectItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.projectItem .colorTag {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.projectItem .colorTag[data-color=\"white\"] {\n    background-color: #e2e8f0;\n}\n\n.projectItem .colorTag[data-color=\"red\"] {\n    background-color: #ef4444;\n}\n\n.projectItem .colorTag[data-color=\"orange\"] {\n    background-color: #f97316;\n}\n\n.projectItem .colorTag[data-color=\"yellow\"] {\n    background-color: #facc15;\n}\n\n.projectItem .colorTag[data-color=\"green\"] {\n    background-color: #a3e635;\n}\n\n.projectItem .colorTag[data-color=\"cyan\"] {\n    background-color: #22d3ee;\n}\n\n.projectItem .colorTag[data-color=\"blue\"] {\n    background-color: #3b82f6;\n}\n\n.projectItem .colorTag[data-color=\"purple\"] {\n    background-color: #a855f7;\n}\n\n.projectItem .colorTag[data-color=\"pink\"] {\n    background-color: #fb7185;\n}\n\n.projectItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 180px;\n}\n\n#createProjectButton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    width: auto;\n    margin-left: 40px;\n    border: 4px dotted white;\n    border-radius: 20px;\n    background-color: rgba(255,255,255,0);\n    box-shadow: 0px 5px 3px rgba(122,122,122,0.2);\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 0px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n    overflow: hidden auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.todoItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #ef4444;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #facc15;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #a3e635;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 500;\n    width: 100px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n.createAnimation {\n    animation: zoomCreate normal 0.7s 1 ease-out;\n}\n\n.updateAnimation p{\n    position: relative;\n    animation: shakeUpdate 0.8s 1;\n}\n\n.deleteAnimation {\n    animation: zoomDelete reverse 0.7s forwards 1 ease-out;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button, .projectItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #ef4444;\n}\n\n.button.edit {\n    background-color: #facc15;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n#devButtons {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    bottom: 20px;\n    right: 20px;\n    color: white;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n@keyframes zoomCreate {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: 0;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes tiltRead {\n    100% {\n        transform: scale(1.03);\n        margin-bottom: 10px;\n    }\n}\n@keyframes shakeUpdate {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: -16px;\n    }\n    50% {\n        top: 0px;\n    }\n    75% {\n        top: -8px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes zoomDelete {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: -10px;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    background-image: url(./background.jpeg);\n    background-size: cover;\n}\n\nbody, input, textarea {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 300;\n}\n\n#container {\n    display: flex;\n    height: 100vh;\n}\n\n#mainContent {\n    display: flex;\n    height: 800px;\n    width: 1400px;\n    margin: auto;\n}\n\n#projectWrapper {\n    box-sizing: border-box;\n    width: 400px;\n    padding: 40px 20px 40px 0px;\n    border-radius: 20px 0px 0px 20px;\n    background-color: rgba(225, 225, 225, 0.8);\n}\n\n#projectBar {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden auto;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n}\n\n.projectItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.projectItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.projectItem .colorTag {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.projectItem .colorTag[data-color=\"white\"] {\n    background-color: #e2e8f0;\n}\n\n.projectItem .colorTag[data-color=\"red\"] {\n    background-color: #ef4444;\n}\n\n.projectItem .colorTag[data-color=\"orange\"] {\n    background-color: #f97316;\n}\n\n.projectItem .colorTag[data-color=\"yellow\"] {\n    background-color: #facc15;\n}\n\n.projectItem .colorTag[data-color=\"green\"] {\n    background-color: #a3e635;\n}\n\n.projectItem .colorTag[data-color=\"cyan\"] {\n    background-color: #22d3ee;\n}\n\n.projectItem .colorTag[data-color=\"blue\"] {\n    background-color: #3b82f6;\n}\n\n.projectItem .colorTag[data-color=\"purple\"] {\n    background-color: #a855f7;\n}\n\n.projectItem .colorTag[data-color=\"pink\"] {\n    background-color: #fb7185;\n}\n\n.projectItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 180px;\n}\n\n#createProjectButton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80px;\n    width: auto;\n    margin-left: 40px;\n    border: 4px dotted white;\n    border-radius: 20px;\n    background-color: rgba(255,255,255,0);\n    box-shadow: 0px 5px 3px rgba(122,122,122,0.2);\n}\n\n#todoWrapper{\n    box-sizing: border-box;\n    height: 800px;\n    width: 900px;\n    padding: 40px 20px 40px 0px;\n    margin-right: 20px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 0px 20px 20px 0px;\n}\n\n#todoBar {\n    display: flex;\n    flex-direction: column;\n    height: 720px;\n    padding: 5px 20px 20px 0px;\n    gap: 20px;\n    overflow: hidden auto;\n}\n\n.todoItem {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    height: 80px;\n    margin-left: 40px;\n    background-color: white;\n    border-radius: 20px;\n    box-shadow: 0px 5px 3px 3px rgba(122,122,122,0.2);\n}\n\n.todoItem.updatePlayable:hover {\n    animation: tiltRead 0.4s forwards 1 ease-in;\n}\n\n.todoItem .priority {\n    width: 20px;\n    height: 100%;\n    border-radius: 20px 0px 0px 20px;\n    background: rgba(180, 180, 180, 0.8);\n}\n\n.todoItem .priority[data-priority=\"High\"] {\n    background-color: #ef4444;\n}\n\n.todoItem .priority[data-priority=\"Medium\"] {\n    background-color: #facc15;\n}\n\n.todoItem .priority[data-priority=\"Low\"] {\n    background-color: #a3e635;\n}\n\n.todoItem .name {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 2rem;\n    width: 160px;\n    padding-left: 40px;\n}\n\n.todoItem .dueDate {\n    font-weight: 500;\n    width: 100px;\n}\n\n.todoItem .description {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 1rem;\n    width: 340px;\n}\n\n.createAnimation {\n    animation: zoomCreate normal 0.7s 1 ease-out;\n}\n\n.updateAnimation p{\n    position: relative;\n    animation: shakeUpdate 0.8s 1;\n}\n\n.deleteAnimation {\n    animation: zoomDelete reverse 0.7s forwards 1 ease-out;\n}\n\n#buttonBar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.button {\n    display: block;\n    height: 80px;\n    width: 80px;\n    border: 0px;\n    border-radius: 40px;\n    padding: 0px;\n    font-size: 4rem;\n    color: white;\n    background-color: #B2FF59;\n}\n\n.button#undoButton {\n    background-color: #d4d4d8;\n}\n\n.button.small {\n    height: 50px;\n    width: 120px;\n    border-radius: 25px;\n    font-size: 1.5rem;\n}\n\n.todoItem .button, .projectItem .button {\n    height: 40px;\n    width: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n}\n\n.button.delete {\n    background-color: #ef4444;\n}\n\n.button.edit {\n    background-color: #facc15;\n}\n\n.overlay {\n    position: fixed;\n    top: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 800px;\n    height: 600px;\n    padding: 40px;\n    gap: 20px;\n    margin: auto;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.input {\n    height: 50px;\n    border: 0px;\n    border-radius: 25px;\n    background-color: rgba(225, 225, 225, 0.8);\n    padding-left: 40px;\n}\n\n.textInput {\n    font-size: 1.5rem;\n}\n\n.dateInput {\n    padding-right: 40px;\n    font-size: 1.2rem;\n}\n\n.priorityInput {\n    font-size: 1.2rem;\n    appearance: none;\n}\n\n.input#description {\n    padding: 10px 10px 10px 40px;\n    font-size: 1.2rem;\n    flex-grow: 1;\n    resize: none;\n}\n\n.input#description::-webkit-scrollbar {\n    width: 10px;\n}\n\n#devButtons {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    bottom: 20px;\n    right: 20px;\n    color: white;\n}\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n::-webkit-scrollbar-track {\n    border: solid 2px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n@keyframes zoomCreate {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: 0;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes tiltRead {\n    100% {\n        transform: scale(1.03);\n        margin-bottom: 10px;\n    }\n}\n@keyframes shakeUpdate {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: -16px;\n    }\n    50% {\n        top: 0px;\n    }\n    75% {\n        top: -8px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes zoomDelete {\n    0% {\n        transform: scale(0);\n        background-color: #AAAAAA;\n        opacity: 0;\n        transform-origin: 50% 25%;\n        height: 0;\n        margin: -10px;\n        padding: 0;\n        font-size: 0rem;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
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
let projectHolder = [];

// Default project object
const defaultProject = projectFactory(1, 'default', 'white');

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
        this.updateStorage();
    },

    // Updates local storage
    updateStorage() {
        localStorage.setItem('projectHolder', JSON.stringify(projectHolder));
        localStorage.setItem('idCounter', JSON.stringify(this.idCounter));
        localStorage.setItem('projIdCounter', JSON.stringify(this.projIdCounter));
        localStorage.setItem('commandQueue', JSON.stringify(this.commandQueue));
        localStorage.setItem('currentProject', JSON.stringify(this.currentProject.id));
    },

    // Load date from storage
    loadStorage() {
        // If there is data to load from storage
        if (JSON.parse(localStorage.getItem('projectHolder') !== null)) {
            // Loads in list of projects
            projectHolder = JSON.parse(localStorage.getItem('projectHolder'));
            for (const project of projectHolder) {
                const parameters = { id: project.id, projName: project.projName, color: project.color };
                const command = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("createProj", parameters);
                _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleViewCommand(command);
            }
            // Loads in correct ID counters
            this.idCounter = JSON.parse(localStorage.getItem('idCounter'));
            this.projIdCounter = JSON.parse(localStorage.getItem('projIdCounter'));
            // Loads in command queue
            this.commandQueue = JSON.parse(localStorage.getItem('commandQueue'));
            // Opens selected project
            let projectID = JSON.parse(localStorage.getItem('currentProject'));
            const selectProj = (0,_command_js__WEBPACK_IMPORTED_MODULE_1__["default"])("readProj", {id: projectID});
            model.readProject(selectProj);
            return true;
        }
        else {
            return false;
        }
    },

    // Clears data
    clearData() {
        projectHolder = [];
        this.idCounter = 1;
        this.projIdCounter = 1;
        this.commandQueue = [];
        this.currentProject = defaultProject;
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
    addTodoModal(taskName = "", priority = "None", dueDate = currentDate, description = "") {
        taskNameInput.value = taskName;
        priorityInput.value = priority;
        dueDateInput.value = currentDate;
        descriptionInput.value = description;
    },

    // Populates modal with provided info
    addProjModal(project = "", color = "") {
        taskNameInput.value = project;
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
            const defaultval = this.createOption("None");
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

    // clears all data
    clearData() {
        projBar.replaceChildren(createProjectButton);
        todoBar.replaceChildren();
    }
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./src/view.js");





const date = new Date();
const currentDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

// Setup dev buttons
const clearStorageButton = document.querySelector('#clearStorage');
clearStorageButton.addEventListener('click', () => { localStorage.clear() });
const loadDefaultButton = document.querySelector('#loadDefault');
loadDefaultButton.addEventListener('click', defaultDataSet);
const clearCurrentButton = document.querySelector('#clearCurrent');
clearCurrentButton.addEventListener('click', () => {
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.clearData();
    _view__WEBPACK_IMPORTED_MODULE_3__["default"].clearData();
})

// Loads default data set if loading fails
if (_model_js__WEBPACK_IMPORTED_MODULE_1__.model.loadStorage() === false) {
    defaultDataSet();
}

// Loads in a hardcoded data set
function defaultDataSet() {
    localStorage.clear();
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.clearData();
    _view__WEBPACK_IMPORTED_MODULE_3__["default"].clearData();
    const command1 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", { projName: "Project 1", color: "red" });
    const command2 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", { projName: "Project 2", color: "orange" });
    const command3 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", { projName: "Project 3", color: "yellow" });
    const command4 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", { projName: "Project 4", color: "green" });
    const command5 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", { projName: "Project 5", color: "cyan" });
    const command6 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", { projName: "Project 6", color: "blue" });
    const command7 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", { projName: "Project 7", color: "purple" });
    const command8 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("createProj", { projName: "Project 8", color: "pink" });

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command1);
    const command9 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", { id: 1 });
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command9);

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test1", priority: "High", dueDate: currentDate, description: "Test Description 1" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Really Really Really Long Name Test", priority: "None", dueDate: currentDate, description: "Really Really Really Really Really Really Long Description Test" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test3", priority: "None", dueDate: currentDate, description: "Test Description 3" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test4", priority: "None", dueDate: currentDate, description: "Test Description 4" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test5", priority: "Medium", dueDate: currentDate, description: "Test Description 5" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test6", priority: "None", dueDate: currentDate, description: "Test Description 6" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test7", priority: "None", dueDate: currentDate, description: "Test Description 7" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test8", priority: "None", dueDate: currentDate, description: "Test Description 8" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test9", priority: "Low", dueDate: currentDate, description: "Test Description 9" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test10", priority: "None", dueDate: currentDate, description: "Test Description 10" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test11", priority: "None", dueDate: currentDate, description: "Test Description 11" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test12", priority: "Low", dueDate: currentDate, description: "Test Description 12" }));

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command2);
    const command10 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", { id: 2 });
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command10);

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test13", priority: "High", dueDate: currentDate, description: "Test Description 13" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test14", priority: "Medium", dueDate: currentDate, description: "Test Description 14" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test15", priority: "Low", dueDate: currentDate, description: "Test Description 15" }));

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command3);
    const command11 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", { id: 3 });
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command11);

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test16", priority: "Low", dueDate: currentDate, description: "Test Description 16" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test17", priority: "Low", dueDate: currentDate, description: "Test Description 17" }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { taskName: "Test18", priority: "Low", dueDate: currentDate, description: "Test Description 18" }));

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command4);
    const command12 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", { id: 4 });
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command12);

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command5);
    const command13 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", { id: 5 });
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command13);

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command6);
    const command14 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", { id: 6 });
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command14);

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command7);
    const command15 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", { id: 7 });
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command15);

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command8);
    const command16 = (0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("readProj", { id: 8 });
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command16);

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));
    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand((0,_command_js__WEBPACK_IMPORTED_MODULE_2__["default"])("create", { priority: "Low", dueDate: currentDate }));

    _model_js__WEBPACK_IMPORTED_MODULE_1__.model.handleCommand(command9); 
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FB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QUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBNEI7QUFDcEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQWMsWUFBWSw2Q0FBNkM7QUFDbkcsWUFBWSx3RUFBNEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSx3REFBd0Q7QUFDeEQscURBQXFEO0FBQ3JEO0FBQ0EsUUFBUSx3RUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQTRCO0FBQ3BDLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQTRCO0FBQ3BDLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUN4RCx1REFBdUQ7QUFDdkQsMkRBQTJEO0FBQzNEO0FBQ0EsUUFBUSx3RUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBNEI7QUFDcEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hUeUM7QUFDQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxRQUFRO0FBQ3pFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxHQUFHO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsK0RBQStELEdBQUc7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxHQUFHO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxRQUFRO0FBQ3pFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxHQUFHO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxHQUFHO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVM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LElBQUksMERBQW1CLENBQUMsdURBQWMsYUFBYSx1Q0FBdUM7QUFDMUYsSUFBSSwwREFBbUIsQ0FBQyx1REFBYyxhQUFhLHVDQUF1Qzs7QUFFMUYsSUFBSSwwREFBbUI7QUFDdkIsc0JBQXNCLHVEQUFjLGVBQWUsT0FBTztBQUMxRCxJQUFJLDBEQUFtQjs7QUFFdkIsSUFBSSwwREFBbUIsQ0FBQyx1REFBYyxhQUFhLHVDQUF1QztBQUMxRixJQUFJLDBEQUFtQixDQUFDLHVEQUFjLGFBQWEsdUNBQXVDO0FBQzFGLElBQUksMERBQW1CLENBQUMsdURBQWMsYUFBYSx1Q0FBdUM7O0FBRTFGLElBQUksMERBQW1CO0FBQ3ZCLHNCQUFzQix1REFBYyxlQUFlLE9BQU87QUFDMUQsSUFBSSwwREFBbUI7O0FBRXZCLElBQUksMERBQW1CLENBQUMsdURBQWMsYUFBYSx1Q0FBdUM7QUFDMUYsSUFBSSwwREFBbUIsQ0FBQyx1REFBYyxhQUFhLHVDQUF1QztBQUMxRixJQUFJLDBEQUFtQixDQUFDLHVEQUFjLGFBQWEsdUNBQXVDOztBQUUxRixJQUFJLDBEQUFtQjtBQUN2QixzQkFBc0IsdURBQWMsZUFBZSxPQUFPO0FBQzFELElBQUksMERBQW1COztBQUV2QixJQUFJLDBEQUFtQixDQUFDLHVEQUFjLGFBQWEsdUNBQXVDO0FBQzFGLElBQUksMERBQW1CLENBQUMsdURBQWMsYUFBYSx1Q0FBdUM7QUFDMUYsSUFBSSwwREFBbUIsQ0FBQyx1REFBYyxhQUFhLHVDQUF1Qzs7QUFFMUYsSUFBSSwwREFBbUI7QUFDdkIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb21tYW5kLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSwgaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI21haW5Db250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDE0MDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdFdyYXBwZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG59XFxuXFxuI3Byb2plY3RCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICAgIGhlaWdodDogNzIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDIwcHggMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggM3B4IDNweCByZ2JhKDEyMiwxMjIsMTIyLDAuMik7XFxufVxcblxcbi5wcm9qZWN0SXRlbS51cGRhdGVQbGF5YWJsZTpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogdGlsdFJlYWQgMC40cyBmb3J3YXJkcyAxIGVhc2UtaW47XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInJlZFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJvcmFuZ2VcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTczMTY7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwieWVsbG93XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjYzE1O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImdyZWVuXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImN5YW5cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmQzZWU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwiYmx1ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJwdXJwbGVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhODU1Zjc7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwicGlua1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzE4NTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5uYW1lIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgYm9yZGVyOiA0cHggZG90dGVkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDNweCByZ2JhKDEyMiwxMjIsMTIyLDAuMik7XFxufVxcblxcbiN0b2RvV3JhcHBlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDkwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggNDBweCAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcXG59XFxuXFxuI3RvZG9CYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4IDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxufVxcblxcbi50b2RvSXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggM3B4IDNweCByZ2JhKDEyMiwxMjIsMTIyLDAuMik7XFxufVxcblxcbi50b2RvSXRlbS51cGRhdGVQbGF5YWJsZTpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogdGlsdFJlYWQgMC40cyBmb3J3YXJkcyAxIGVhc2UtaW47XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHkge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkhpZ2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiTWVkaXVtXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjYzE1O1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcXG59XFxuXFxuLnRvZG9JdGVtIC5uYW1lIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50b2RvSXRlbSAuZHVlRGF0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLnRvZG9JdGVtIC5kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiAzNDBweDtcXG59XFxuXFxuLmNyZWF0ZUFuaW1hdGlvbiB7XFxuICAgIGFuaW1hdGlvbjogem9vbUNyZWF0ZSBub3JtYWwgMC43cyAxIGVhc2Utb3V0O1xcbn1cXG5cXG4udXBkYXRlQW5pbWF0aW9uIHB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZVVwZGF0ZSAwLjhzIDE7XFxufVxcblxcbi5kZWxldGVBbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IHpvb21EZWxldGUgcmV2ZXJzZSAwLjdzIGZvcndhcmRzIDEgZWFzZS1vdXQ7XFxufVxcblxcbiNidXR0b25CYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMkZGNTk7XFxufVxcblxcbi5idXR0b24jdW5kb0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDg7XFxufVxcblxcbi5idXR0b24uc21hbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b2RvSXRlbSAuYnV0dG9uLCAucHJvamVjdEl0ZW0gLmJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4uYnV0dG9uLmVkaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjYzE1O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udGV4dElucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kYXRlSW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaW9yaXR5SW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW5wdXQjZGVzY3JpcHRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbiNkZXZCdXR0b25zIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyB6b29tQ3JlYXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDI1JTtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmb250LXNpemU6IDByZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpbHRSZWFkIHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNoYWtlVXBkYXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRvcDogLTE2cHg7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICB0b3A6IC04cHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21EZWxldGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQUFBQTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMjUlO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgbWFyZ2luOiAtMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmb250LXNpemU6IDByZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLHlEQUF3QztJQUN4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UUFDbkIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO1FBQ1YsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmFja2dyb3VuZC5qcGVnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSwgaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI21haW5Db250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDE0MDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdFdyYXBwZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweCA0MHB4IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG59XFxuXFxuI3Byb2plY3RCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxuICAgIGhlaWdodDogNzIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDIwcHggMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggM3B4IDNweCByZ2JhKDEyMiwxMjIsMTIyLDAuMik7XFxufVxcblxcbi5wcm9qZWN0SXRlbS51cGRhdGVQbGF5YWJsZTpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogdGlsdFJlYWQgMC40cyBmb3J3YXJkcyAxIGVhc2UtaW47XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcInJlZFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJvcmFuZ2VcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTczMTY7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwieWVsbG93XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjYzE1O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImdyZWVuXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gLmNvbG9yVGFnW2RhdGEtY29sb3I9XFxcImN5YW5cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmQzZWU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwiYmx1ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5jb2xvclRhZ1tkYXRhLWNvbG9yPVxcXCJwdXJwbGVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhODU1Zjc7XFxufVxcblxcbi5wcm9qZWN0SXRlbSAuY29sb3JUYWdbZGF0YS1jb2xvcj1cXFwicGlua1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNzE4NTtcXG59XFxuXFxuLnByb2plY3RJdGVtIC5uYW1lIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbn1cXG5cXG4jY3JlYXRlUHJvamVjdEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgYm9yZGVyOiA0cHggZG90dGVkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDNweCByZ2JhKDEyMiwxMjIsMTIyLDAuMik7XFxufVxcblxcbiN0b2RvV3JhcHBlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDkwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggNDBweCAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcXG59XFxuXFxuI3RvZG9CYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4IDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XFxufVxcblxcbi50b2RvSXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggM3B4IDNweCByZ2JhKDEyMiwxMjIsMTIyLDAuMik7XFxufVxcblxcbi50b2RvSXRlbS51cGRhdGVQbGF5YWJsZTpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogdGlsdFJlYWQgMC40cyBmb3J3YXJkcyAxIGVhc2UtaW47XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHkge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDBweCAwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjgpO1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkhpZ2hcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbi50b2RvSXRlbSAucHJpb3JpdHlbZGF0YS1wcmlvcml0eT1cXFwiTWVkaXVtXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjYzE1O1xcbn1cXG5cXG4udG9kb0l0ZW0gLnByaW9yaXR5W2RhdGEtcHJpb3JpdHk9XFxcIkxvd1xcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcXG59XFxuXFxuLnRvZG9JdGVtIC5uYW1lIHtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50b2RvSXRlbSAuZHVlRGF0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLnRvZG9JdGVtIC5kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiAzNDBweDtcXG59XFxuXFxuLmNyZWF0ZUFuaW1hdGlvbiB7XFxuICAgIGFuaW1hdGlvbjogem9vbUNyZWF0ZSBub3JtYWwgMC43cyAxIGVhc2Utb3V0O1xcbn1cXG5cXG4udXBkYXRlQW5pbWF0aW9uIHB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZVVwZGF0ZSAwLjhzIDE7XFxufVxcblxcbi5kZWxldGVBbmltYXRpb24ge1xcbiAgICBhbmltYXRpb246IHpvb21EZWxldGUgcmV2ZXJzZSAwLjdzIGZvcndhcmRzIDEgZWFzZS1vdXQ7XFxufVxcblxcbiNidXR0b25CYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMkZGNTk7XFxufVxcblxcbi5idXR0b24jdW5kb0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDg7XFxufVxcblxcbi5idXR0b24uc21hbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b2RvSXRlbSAuYnV0dG9uLCAucHJvamVjdEl0ZW0gLmJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi5kZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4uYnV0dG9uLmVkaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjYzE1O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4udGV4dElucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kYXRlSW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByaW9yaXR5SW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmlucHV0I2Rlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW5wdXQjZGVzY3JpcHRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbiNkZXZCdXR0b25zIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyB6b29tQ3JlYXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDI1JTtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmb250LXNpemU6IDByZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpbHRSZWFkIHtcXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNoYWtlVXBkYXRlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRvcDogLTE2cHg7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICB0b3A6IC04cHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21EZWxldGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQUFBQTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMjUlO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgbWFyZ2luOiAtMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmb250LXNpemU6IDByZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29tbWFuZEZhY3RvcnkgPSAoY29tbWFuZFR5cGUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICByZXR1cm4geyBjb21tYW5kVHlwZSwgcGFyYW1ldGVycyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZEZhY3Rvcnk7IiwiaW1wb3J0IHsgbW9kZWwsIGRlZmF1bHRQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbC5qcyc7XG5pbXBvcnQgdmlldyBmcm9tICcuL3ZpZXcuanMnO1xuXG4vLyBDT05UUk9MTEVSXG5jb25zdCBjb250cm9sbGVyID0ge1xuICAgIC8vIEZvcndhcmRzIGNvbW1hbmRzIHRvIHZpZXdcbiAgICBoYW5kbGVWaWV3Q29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIHZpZXcuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuICAgIFxuICAgIC8vIEZvcndhcmRzIGNvbW1hbmRzIHRvIG1vZGVsXG4gICAgaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgbW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyByZXF1ZXN0IHRvIG9wZW4gbW9kYWxcbiAgICBvcGVuTW9kYWxSZXEoKSB7XG4gICAgICAgIHZpZXcub3Blbk1vZGFsKCk7XG4gICAgfSxcblxuICAgIHNldE1vZGFsTW9kZShtb2RlLCBpZCkge1xuICAgICAgICB2aWV3LnNldE1vZGFsQnV0dG9uQmVoYXZpb3IobW9kZSwgaWQpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGVzIHJlcXVlc3QgdG8gaW5qZWN0IGRhdGEgaW50byBtb2RhbFxuICAgIGFkZFRvZG9Nb2RhbFJlcSh0b2RvKSB7XG4gICAgICAgIGxldCB0YXNrTmFtZSA9IHRvZG8udGFza05hbWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gdG9kby5kdWVEYXRlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICB2aWV3LmFkZFRvZG9Nb2RhbCh0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdmlldy5vcGVuTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyByZXF1ZXN0IHRvIGluamVjdCBkYXRhIGludG8gbW9kYWxcbiAgICBhZGRQcm9qTW9kYWxSZXEocHJvamVjdCkge1xuICAgICAgICBsZXQgcHJvak5hbWUgPSBwcm9qZWN0LnByb2pOYW1lO1xuICAgICAgICBsZXQgY29sb3IgPSBwcm9qZWN0LmNvbG9yO1xuICAgICAgICB2aWV3LmFkZFByb2pNb2RhbChwcm9qTmFtZSwgY29sb3IpO1xuICAgICAgICB2aWV3Lm9wZW5Nb2RhbCgpO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGVzIHJlcXVlc3QgdG8gY2xvc2UgbW9kYWxcbiAgICBjbG9zZU1vZGFsUmVxKCkge1xuICAgICAgICB2aWV3LmNsb3NlTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyBvcGVuIG1vZGFsIGNsaWNrIGV2ZW50XG4gICAgaGFuZGxlT3Blbk1vZGFsQ2xpY2soKSB7XG4gICAgICAgIHZpZXcuc2V0TW9kYWxCdXR0b25CZWhhdmlvcihcImNyZWF0ZVwiKTtcbiAgICAgICAgdmlldy5vcGVuTW9kYWwoKTtcbiAgICB9LFxuXG4gICAgLy8gSGFuZGxlcyBjbG9zZSBtb2RhbCBjbGljayBldmVudFxuICAgIGhhbmRsZUNsb3NlTW9kYWxDbGljaygpIHtcbiAgICAgICAgdmlldy5jbG9zZU1vZGFsKCk7XG4gICAgfSxcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIHVwZGF0ZSBET00gUHJvamVjdHNcbiAgICBcbiAgICAvLyBTZW5kcyByZXF1ZXN0IHRvIHVwZGF0ZSBET00gVG9kb3NcbiAgICByZWZyZXNoVmlld1RvZG9zUmVxKHByb2plY3QpIHtcbiAgICAgICAgdmlldy5kaXNwbGF5VG9kb3MocHJvamVjdCk7XG4gICAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjsiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgY29tbWFuZEZhY3RvcnkgZnJvbSBcIi4vY29tbWFuZC5qc1wiO1xuXG4vLyBDb25zdHJ1Y3RvciBmb3IgUHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChpZCwgcHJvak5hbWUsIGNvbG9yKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW107XG4gICAgcmV0dXJuIHsgaWQsIGxpc3RJdGVtcywgcHJvak5hbWUsIGNvbG9yfVxufVxuXG4vLyBIb2xkcyBldmVyeSBwcm9qZWN0IGl0ZW1cbmxldCBwcm9qZWN0SG9sZGVyID0gW107XG5cbi8vIERlZmF1bHQgcHJvamVjdCBvYmplY3RcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoMSwgJ2RlZmF1bHQnLCAnd2hpdGUnKTtcblxuLy8gTU9ERUwgQ09OVFJPTExFUlxuY29uc3QgbW9kZWwgPSB7XG4gICAgLy8gSUQgY291bnRlciAocmVwbGFjZSB3aXRoIFVVSUQgbGF0ZXI/KVxuICAgIGlkQ291bnRlcjogMSxcbiAgICAvLyBJRCBjb3VudGVyIGZvciBwcm9qZWN0IGl0ZW1zXG4gICAgcHJvaklkQ291bnRlcjogMSxcblxuICAgIC8vIENvbnN0cnVjdG9yIGZvciBMaXN0IG9iamVjdHNcbiAgICB0b2RvRmFjdG9yeSh0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB7IHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24gfTtcbiAgICB9LFxuXG4gICAgLy8gUmVmZXJlbmNlIHRvIGN1cnJlbnRseSBhY3RpdmUgcHJvamVjdFxuICAgIGN1cnJlbnRQcm9qZWN0OiBkZWZhdWx0UHJvamVjdCxcblxuICAgIC8vIFF1ZSBmb3IgaG9sZGluZyBwcmV2aW91cyBkb25lIGNvbW1hbmRzXG4gICAgY29tbWFuZFF1ZXVlOiBbXSxcblxuICAgIC8vIEhhbmRsZXMgY29tbWFuZHNcbiAgICBoYW5kbGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNb2RhbFJlcSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcInJlYWRcIikge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IHRoaXMucmVhZFRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNldE1vZGFsTW9kZShcInVwZGF0ZVwiLCBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRUb2RvTW9kYWxSZXEodG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNb2RhbFJlcSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiY3JlYXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwicmVhZFByb2pcIikge1xuICAgICAgICAgICAgdGhpcy5yZWFkUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJlZGl0UHJvalwiKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5lZGl0UHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc2V0TW9kYWxNb2RlKFwidXBkYXRlUHJvalwiLCBjb21tYW5kLnBhcmFtZXRlcnMuaWQpO1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRQcm9qTW9kYWxSZXEocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidXBkYXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmNsb3NlTW9kYWxSZXEoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJkZWxldGVQcm9qXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1bmRvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDb21tYW5kID0gdGhpcy5jb21tYW5kUXVldWUucG9wKCk7XG4gICAgICAgICAgICB0aGlzLnVuZG9Db21tYW5kKGxhc3RDb21tYW5kKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlICE9PSBcInJlYWRcIiAmJiBjb21tYW5kLmNvbW1hbmRUeXBlICE9PSBcImVkaXRQcm9qXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZFF1ZXVlLnB1c2goY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdG9yYWdlKCk7XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZXMgbG9jYWwgc3RvcmFnZVxuICAgIHVwZGF0ZVN0b3JhZ2UoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0SG9sZGVyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdEhvbGRlcikpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRDb3VudGVyJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pZENvdW50ZXIpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pJZENvdW50ZXInLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2pJZENvdW50ZXIpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbW1hbmRRdWV1ZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29tbWFuZFF1ZXVlKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudFByb2plY3QuaWQpKTtcbiAgICB9LFxuXG4gICAgLy8gTG9hZCBkYXRlIGZyb20gc3RvcmFnZVxuICAgIGxvYWRTdG9yYWdlKCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBkYXRhIHRvIGxvYWQgZnJvbSBzdG9yYWdlXG4gICAgICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0SG9sZGVyJykgIT09IG51bGwpKSB7XG4gICAgICAgICAgICAvLyBMb2FkcyBpbiBsaXN0IG9mIHByb2plY3RzXG4gICAgICAgICAgICBwcm9qZWN0SG9sZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdEhvbGRlcicpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0SG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IHByb2plY3QuaWQsIHByb2pOYW1lOiBwcm9qZWN0LnByb2pOYW1lLCBjb2xvcjogcHJvamVjdC5jb2xvciB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVWaWV3Q29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvYWRzIGluIGNvcnJlY3QgSUQgY291bnRlcnNcbiAgICAgICAgICAgIHRoaXMuaWRDb3VudGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRDb3VudGVyJykpO1xuICAgICAgICAgICAgdGhpcy5wcm9qSWRDb3VudGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvaklkQ291bnRlcicpKTtcbiAgICAgICAgICAgIC8vIExvYWRzIGluIGNvbW1hbmQgcXVldWVcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZFF1ZXVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tbWFuZFF1ZXVlJykpO1xuICAgICAgICAgICAgLy8gT3BlbnMgc2VsZWN0ZWQgcHJvamVjdFxuICAgICAgICAgICAgbGV0IHByb2plY3RJRCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0JykpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJvaiA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwge2lkOiBwcm9qZWN0SUR9KTtcbiAgICAgICAgICAgIG1vZGVsLnJlYWRQcm9qZWN0KHNlbGVjdFByb2opO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xlYXJzIGRhdGFcbiAgICBjbGVhckRhdGEoKSB7XG4gICAgICAgIHByb2plY3RIb2xkZXIgPSBbXTtcbiAgICAgICAgdGhpcy5pZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLnByb2pJZENvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLmNvbW1hbmRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3Q7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZSBwcm9qZWN0XG4gICAgY3JlYXRlUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGxldCBwcm9qTmFtZSA9IGNvbW1hbmQucGFyYW1ldGVycy5wcm9qTmFtZTtcbiAgICAgICAgbGV0IGNvbG9yID0gY29tbWFuZC5wYXJhbWV0ZXJzLmNvbG9yO1xuICAgICAgICBsZXQgaWQ7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFuIElEICh1bmRvIG9wZXJhdGlvbiksIGlmIG5vdCB0aGVuIGFzc2lnbiBJRFxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLmlkKSB7XG4gICAgICAgICAgICBjb21tYW5kLmNvbW1hbmRUeXBlID0gXCJjcmVhdGVQcm9qXCI7XG4gICAgICAgICAgICBpZCA9IGNvbW1hbmQucGFyYW1ldGVycy5pZDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEhvbGRlci5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID4gY29tbWFuZC5wYXJhbWV0ZXJzLmlkICk7XG4gICAgICAgICAgICBpZiAocHJvamVjdEhvbGRlcltpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHByb2plY3RIb2xkZXJbaW5kZXhdLmlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShpZCwgcHJvak5hbWUsIGNvbG9yKTtcbiAgICAgICAgICAgIHByb2plY3QubGlzdEl0ZW1zID0gY29tbWFuZC5wYXJhbWV0ZXJzLmxpc3RJdGVtcztcbiAgICAgICAgICAgIHByb2plY3RIb2xkZXIuc3BsaWNlKGluZGV4LCAwLCBwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aGlzLnByb2pJZENvdW50ZXIsIHByb2pOYW1lLCBjb2xvcik7XG4gICAgICAgICAgICBpZCA9IHRoaXMucHJvaklkQ291bnRlcisrO1xuICAgICAgICAgICAgcHJvamVjdEhvbGRlci5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5pZCA9IGlkO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBSZWFkIChjaGFuZ2UpIHByb2plY3RcbiAgICByZWFkUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SG9sZGVyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0Lmxpc3RJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0b2RvLmlkO1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0b2RvLnRhc2tOYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7aWQsIHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb259KTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmlkID0gdGhpcy5jdXJyZW50UHJvamVjdC5pZDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgfSxcblxuICAgIGVkaXRQcm9qZWN0KGNvbW1hbmQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RIb2xkZXIuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSB0b2RvXG4gICAgdXBkYXRlUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIC8vIEZpbmRzIHByb2ogd2l0aCBjb3JyZWN0IGlkXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SG9sZGVyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIC8vIFNhdmVzIGluZm8gdG8gYWxsb3cgcmV2ZXJzYWwgbGF0ZXJcbiAgICAgICAgY29uc3Qgb2xkUHJvaiA9IHsgcHJvak5hbWU6IHByb2plY3QucHJvak5hbWUsIGNvbG9yOiBwcm9qZWN0LmNvbG9yfTtcbiAgICAgICAgLy8gRWRpdHMgdmFsdWVzXG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMucHJvak5hbWUgIT0gdW5kZWZpbmVkKSB7IHByb2plY3QucHJvak5hbWUgPSBjb21tYW5kLnBhcmFtZXRlcnMucHJvak5hbWUgfVxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLmNvbG9yICE9IHVuZGVmaW5lZCkgeyBwcm9qZWN0LmNvbG9yID0gY29tbWFuZC5wYXJhbWV0ZXJzLmNvbG9yIH1cbiAgICAgICAgLy8gU2VuZHMgYSBjb21tYW5kIGZvciB1cGRhdGluZyB0aGUgRE9NIGVsZW1lbnQgdmlzdWFsbHlcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVWaWV3Q29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgLy8gUmVpbmplY3RzIGluZm8gaW50byBjb21tYW5kIHRvIGFsbG93IHJldmVyc2FsXG4gICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5wcm9qTmFtZSA9IG9sZFByb2oucHJvak5hbWU7XG4gICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5jb2xvciA9IG9sZFByb2ouY29sb3I7XG4gICAgfSxcblxuICAgIC8vIERlbGV0ZSBwcm9qZWN0XG4gICAgZGVsZXRlUHJvamVjdChjb21tYW5kKSB7XG4gICAgICAgIGNvbW1hbmQuY29tbWFuZFR5cGUgPSBcImRlbGV0ZVByb2pcIjtcbiAgICAgICAgLy8gRmluZHMgcHJvamVjdCB3aXRoIGNvcnJlY3QgaW5kZXggYW5kIGRlbGV0ZXMgaXRcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0SG9sZGVyLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHsgXG4gICAgICAgICAgICAvLyBCdXQgbm90IGJlZm9yZSBjb3B5aW5nIHRoZSBwcm9qZWN0IGluZm8gdG8gYWxsb3cgcmV2ZXJzYWwgbGF0ZXIuLi5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSAocHJvamVjdEhvbGRlci5zcGxpY2UoaW5kZXgsIDEpKVswXTtcbiAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5jb2xvciA9IHByb2plY3QuY29sb3I7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMucHJvak5hbWUgPSBwcm9qZWN0LnByb2pOYW1lO1xuICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLmxpc3RJdGVtcyA9IHByb2plY3QubGlzdEl0ZW1zO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlbmRzIGEgY29tbWFuZCBmb3IgZGVsZXRpbmcgdGhlIERPTSBlbGVtZW50IHZpc3VhbGx5XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZSB0b2RvXG4gICAgY3JlYXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgbGV0IHRhc2tOYW1lID0gY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lO1xuICAgICAgICBpZiAoIXRhc2tOYW1lKSB7IFxuICAgICAgICAgICAgdGFza05hbWUgPSBcIkRlZmF1bHQgTmFtZVwiO1xuICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzLnRhc2tOYW1lID0gdGFza05hbWU7IFxuICAgICAgICB9O1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBjb21tYW5kLnBhcmFtZXRlcnMucHJpb3JpdHk7XG4gICAgICAgIGxldCBkdWVEYXRlID0gY29tbWFuZC5wYXJhbWV0ZXJzLmR1ZURhdGU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNvbW1hbmQucGFyYW1ldGVycy5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbikgeyBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gXCJEZWZhdWx0IERlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjsgXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9GYWN0b3J5KHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPiBjb21tYW5kLnBhcmFtZXRlcnMuaWQgKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYW4gSUQgKHVuZG8gb3BlcmF0aW9uKSwgaWYgbm90IHRoZW4gYXNzaWduIElEXG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMuaWQpIHtcbiAgICAgICAgICAgIGNvbW1hbmQuY29tbWFuZFR5cGUgPSBcImNyZWF0ZVwiO1xuICAgICAgICAgICAgdG9kby5pZCA9IGNvbW1hbmQucGFyYW1ldGVycy5pZDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC5saXN0SXRlbXMuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA+IGNvbW1hbmQucGFyYW1ldGVycy5pZCApO1xuICAgICAgICAgICAgaWYgKHByb2plY3QubGlzdEl0ZW1zW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5pbmRleElEID0gcHJvamVjdC5saXN0SXRlbXNbaW5kZXhdLmlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnMuaW5kZXhJRCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3QubGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMCwgdG9kbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvLmlkID0gdGhpcy5pZENvdW50ZXIrKztcbiAgICAgICAgICAgIGNvbW1hbmQucGFyYW1ldGVycy5pZCA9IHRvZG8uaWQ7XG4gICAgICAgICAgICBwcm9qZWN0Lmxpc3RJdGVtcy5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlbmRzIGEgY29tbWFuZCBmb3IgY3JlYXRpbmcgdGhlIERPTSBlbGVtZW50IHZpc3VhbGx5XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIFJlYWQgdG9kb1xuICAgIHJlYWRUb2RvKHByb2plY3QgPSBkZWZhdWx0UHJvamVjdCwgY29tbWFuZCkge1xuICAgICAgICBjb25zdCB0b2RvID0gcHJvamVjdC5saXN0SXRlbXMuZmluZCh0b2RvID0+IHRvZG8uaWQgPT0gY29tbWFuZC5wYXJhbWV0ZXJzLmlkKTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSB0b2RvXG4gICAgdXBkYXRlVG9kbyhwcm9qZWN0ID0gZGVmYXVsdFByb2plY3QsIGNvbW1hbmQpIHtcbiAgICAgICAgLy8gRmluZHMgdG9kbyB3aXRoIGNvcnJlY3QgaWRcbiAgICAgICAgY29uc3QgdG9kbyA9IHByb2plY3QubGlzdEl0ZW1zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIC8vIFNhdmVzIGluZm8gdG8gYWxsb3cgcmV2ZXJzYWwgbGF0ZXJcbiAgICAgICAgY29uc3Qgb2xkVG9kbyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRvZG8pIHtcbiAgICAgICAgICAgIG9sZFRvZG9bcHJvcGVydHldID0gdG9kb1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWRpdHMgdmFsdWVzXG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMudGFza05hbWUgIT0gdW5kZWZpbmVkKSB7IHRvZG8udGFza05hbWUgPSBjb21tYW5kLnBhcmFtZXRlcnMudGFza05hbWUgfVxuICAgICAgICBpZiAoY29tbWFuZC5wYXJhbWV0ZXJzLnByaW9yaXR5ICE9IHVuZGVmaW5lZCkgeyB0b2RvLnByaW9yaXR5ID0gY29tbWFuZC5wYXJhbWV0ZXJzLnByaW9yaXR5IH1cbiAgICAgICAgaWYgKGNvbW1hbmQucGFyYW1ldGVycy5kdWVEYXRlICE9IHVuZGVmaW5lZCkgeyB0b2RvLmR1ZURhdGUgPSBjb21tYW5kLnBhcmFtZXRlcnMuZHVlRGF0ZSB9XG4gICAgICAgIGlmIChjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb24gIT0gdW5kZWZpbmVkKSB7IHRvZG8uZGVzY3JpcHRpb24gPSBjb21tYW5kLnBhcmFtZXRlcnMuZGVzY3JpcHRpb24gfVxuICAgICAgICAvLyBTZW5kcyBhIGNvbW1hbmQgZm9yIHVwZGF0aW5nIHRoZSBET00gZWxlbWVudCB2aXN1YWxseVxuICAgICAgICBjb250cm9sbGVyLmhhbmRsZVZpZXdDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAvLyBSZWluamVjdHMgaW5mbyBpbnRvIGNvbW1hbmQgdG8gYWxsb3cgcmV2ZXJzYWxcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvbGRUb2RvKSB7XG4gICAgICAgICAgICBjb21tYW5kLnBhcmFtZXRlcnNbcHJvcGVydHldID0gb2xkVG9kb1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGVsZXRlIHRvZG9cbiAgICBkZWxldGVUb2RvKHByb2plY3QgPSBkZWZhdWx0UHJvamVjdCwgY29tbWFuZCkge1xuICAgICAgICBjb21tYW5kLmNvbW1hbmRUeXBlID0gXCJkZWxldGVcIjtcbiAgICAgICAgLy8gRmluZHMgdG9kbyB3aXRoIGNvcnJlY3QgaW5kZXggYW5kIGRlbGV0ZXMgaXRcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0Lmxpc3RJdGVtcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09IGNvbW1hbmQucGFyYW1ldGVycy5pZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7IFxuICAgICAgICAgICAgLy8gQnV0IG5vdCBiZWZvcmUgY29weWluZyB0aGUgdG9kbyBpbmZvIHRvIGFsbG93IHJldmVyc2FsIGxhdGVyLi4uXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gKHByb2plY3QubGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMSkpWzBdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0b2RvKSB7XG4gICAgICAgICAgICAgICAgY29tbWFuZC5wYXJhbWV0ZXJzW3Byb3BlcnR5XSA9IHRvZG9bcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNlbmRzIGEgY29tbWFuZCBmb3IgZGVsZXRpbmcgdGhlIERPTSBlbGVtZW50IHZpc3VhbGx5XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlVmlld0NvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIFVuZG9lcyBsYXN0IGNvbW1hbmRcbiAgICB1bmRvQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVG9kbyh0aGlzLmN1cnJlbnRQcm9qZWN0LCBjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRvZG8odGhpcy5jdXJyZW50UHJvamVjdCwgY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcInVwZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvKHRoaXMuY3VycmVudFByb2plY3QsIGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVQcm9qXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2plY3QoY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kLmNvbW1hbmRUeXBlID09PSBcInVwZGF0ZVByb2pcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiZGVsZXRlUHJvalwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0KGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJyZWFkUHJvalwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkUHJvamVjdChjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJUSEVSRSBBUkUgTk8gQ09NTUFORFMgVE8gVU5ET1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBtb2RlbFxufSIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29tbWFuZEZhY3RvcnkgZnJvbSAnLi9jb21tYW5kLmpzJztcblxuLy8gRE9NIEVsZW1lbnQgU2V0dXBcbmNvbnN0IHByb2pCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJhcicpO1xuY29uc3QgdG9kb0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvQmFyJyk7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbmNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza05hbWUnKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tQcmlvcml0eScpO1xuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3RCdXR0b24nKTtcbmNvbnN0IG9wZW5Nb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuTW9kYWxCdXR0b24nKTtcbmNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQnV0dG9uJyk7XG5jb25zdCB1bmRvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuZG9CdXR0b24nKTtcblxuLy8gTW9kYWwgZWxlbWVudHNcbmNvbnN0IG1vZGFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tQcmlvcml0eScpO1xuY29uc3QgbW9kYWxEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbmNvbnN0IG1vZGFsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcblxuLy8gU2V0dXAgZGVmYXVsdCBkYXRlIGZvciBpbnB1dHMgKENhbiBtb3ZlIGludG8gb3duIGZ1bmN0aW9uIGluIHJlZmFjdG9yPylcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4vLyBWSUVXIENPTlRST0xMRVJcbmNvbnN0IHZpZXcgPSB7XG4gICAgLy8gSGFuZGxlcyBjb21tYW5kc1xuICAgIGhhbmRsZUNvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBsZXQgaWQgPSBjb21tYW5kLnBhcmFtZXRlcnMuaWQ7XG4gICAgICAgIGxldCBwcm9qTmFtZSA9IGNvbW1hbmQucGFyYW1ldGVycy5wcm9qTmFtZTtcbiAgICAgICAgbGV0IGNvbG9yID0gY29tbWFuZC5wYXJhbWV0ZXJzLmNvbG9yO1xuICAgICAgICBsZXQgdGFza05hbWUgPSBjb21tYW5kLnBhcmFtZXRlcnMudGFza05hbWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGNvbW1hbmQucGFyYW1ldGVycy5wcmlvcml0eTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBjb21tYW5kLnBhcmFtZXRlcnMuZHVlRGF0ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gY29tbWFuZC5wYXJhbWV0ZXJzLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgaW5kZXhJRCA9IGNvbW1hbmQucGFyYW1ldGVycy5pbmRleElEO1xuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVcIikge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBpbmRleElEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJkZWxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVUb2RvKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJjcmVhdGVQcm9qXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdChpZCwgcHJvak5hbWUsIGNvbG9yLCBpbmRleElEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tbWFuZC5jb21tYW5kVHlwZSA9PT0gXCJyZWFkUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRQcm9qZWN0KGlkKTtcbiAgICAgICAgICAgIHRvZG9CYXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwidXBkYXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3QoaWQsIHByb2pOYW1lLCBjb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1hbmQuY29tbWFuZFR5cGUgPT09IFwiZGVsZXRlUHJvalwiKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2plY3QoaWQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZXMgcHJvamVjdCBpdGVtXG4gICAgY3JlYXRlUHJvamVjdChpZCwgbmFtZSwgY29sb3IsIGluZGV4SUQgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHByb2plY3QgZWxlbWVudHNcbiAgICAgICAgY29uc3QgcHJvakVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nLCAnY3JlYXRlQW5pbWF0aW9uJyk7XG4gICAgICAgIGNvbnN0IHByb2pDb2xvclRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qQ29sb3JUYWcuY2xhc3NMaXN0LmFkZCgnY29sb3JUYWcnKTtcbiAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2pOYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICAgICAgY29uc3QgcHJvakRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdkZWxldGUnKTtcbiAgICAgICAgLy8gQWRkIGlkIGRhdGEtYXR0cmlidXRlIHRvIGVsZW1lbnRzXG4gICAgICAgIHByb2pFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgcHJvakRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIC8vIEFkZHMgZXZlbnQgaGFuZGxlciBmb3IgZGVsZXRpbmcgcHJvalxuICAgICAgICBwcm9qRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVQcm9qQ2xpY2tFdmVudCk7XG4gICAgICAgIC8vIEFkZHMgZXZlbnQgaGFuZGxlciBmb3Igb3BlbmluZyBwcm9qXG4gICAgICAgIHByb2pFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWFkUHJvakNsaWNrRXZlbnQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gYW5pbWF0aW9uIGVuZHNcbiAgICAgICAgcHJvakVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgdGhpcy5hbmltYXRpb25FbmRFdmVudCk7XG4gICAgICAgIC8vIFNldHMgY29ycmVjdCBjb2xvciB0YWcgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgcHJvakNvbG9yVGFnLnNldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIiwgY29sb3IpO1xuICAgICAgICAvLyBJbmplY3RzIGRhdGEgdG8gdG9kbyBlbGVtZW50c1xuICAgICAgICBwcm9qTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHByb2pEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIC8vIEFkZHMgcHJvamVjdCB0byB0aGUgRE9NXG4gICAgICAgIC8vIEFkZHMgdG9kbyB0byB0aGUgRE9NXG4gICAgICAgIHByb2pFbGVtZW50LmFwcGVuZChwcm9qQ29sb3JUYWcsIHByb2pOYW1lLCBwcm9qRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgaWYgKGluZGV4SUQpIHtcbiAgICAgICAgICAgIC8vIFVuZG8gb3BlcmF0aW9uXG4gICAgICAgICAgICBjb25zdCBhZnRlck5vZGUgPSBwcm9qQmFyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpbmRleElEfVwiYCk7XG4gICAgICAgICAgICBwcm9qQmFyLmluc2VydEJlZm9yZShwcm9qRWxlbWVudCwgYWZ0ZXJOb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2pCYXIuaW5zZXJ0QmVmb3JlKHByb2pFbGVtZW50LCBjcmVhdGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZWFkcyBwcm9qZWN0IGl0ZW1cbiAgICByZWFkUHJvamVjdChpZCkge1xuICAgICAgICAvLyBUYWdzIGFsbCByZXF1aXJlZCBlbGVtZW50cyBvZiB0aGUgcHJvamVjdCBpdGVtXG4gICAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gcHJvakJhci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJgKTtcbiAgICAgICAgLy8gQWRkcyB1cGRhdGUgYW5pbWF0aW9uXG4gICAgICAgIHByb2pFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3VwZGF0ZUFuaW1hdGlvbicpO1xuICAgICAgICAvLyBDaGFuZ2VzIGRlbGV0ZSBidXR0b24gaW50byBlZGl0IGJ1dHRvblxuICAgICAgICBjb25zdCBwcmV2RGVsZXRlQnV0dG9uID0gcHJvakJhci5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgICAgICBpZiAocHJldkRlbGV0ZUJ1dHRvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcHJldkRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0Jyk7XG4gICAgICAgICAgICBwcmV2RGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgICAgICBwcmV2RGVsZXRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0UHJvakNsaWNrRXZlbnQpO1xuICAgICAgICAgICAgcHJldkRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlUHJvakNsaWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2pEZWxldGVCdXR0b24gPSBwcm9qRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgICAgIHByb2pEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIuKcjlwiO1xuICAgICAgICBwcm9qRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgcHJvakRlbGV0ZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlUHJvakNsaWNrRXZlbnQpO1xuICAgICAgICBwcm9qRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5lZGl0UHJvakNsaWNrRXZlbnQpO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGVzIHByb2plY3QgaXRlbVxuICAgIHVwZGF0ZVByb2plY3QoaWQsIHByb2pOYW1lLCBjb2xvcikge1xuICAgICAgICAvLyBUYWdzIGFsbCByZXF1aXJlZCBlbGVtZW50cyBvZiB0aGUgdG9kbyBpdGVtXG4gICAgICAgIGNvbnN0IHByb2pFbGVtZW50ID0gcHJvakJhci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJgKTtcbiAgICAgICAgY29uc3QgcHJvakNvbG9yID0gcHJvakVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yVGFnJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9qRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICAgICAgICAvLyBJbmplY3RzIG5ldyB2YWx1ZXMgdG8gZWxlbWVudHNcbiAgICAgICAgcHJvakNvbG9yLnNldEF0dHJpYnV0ZShcImRhdGEtY29sb3JcIiwgY29sb3IpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvak5hbWU7XG4gICAgICAgIC8vIEFkZHMgdXBkYXRlIGFuaW1hdGlvblxuICAgICAgICBwcm9qRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1cGRhdGVBbmltYXRpb24nKTtcbiAgICB9LFxuXG4gICAgLy8gRGVsZXRlIHByb2plY3QgaXRlbVxuICAgIGRlbGV0ZVByb2plY3QoaWQpIHtcbiAgICAgICAgLy8gRmluZHMgdG9kbyBlbGVtZW50IHRvIGRlbGV0ZVxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IHByb2pCYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiYCk7XG4gICAgICAgIC8vIEF0dGFjaGVzIGRlbGV0ZSBhbmltYXRpb25cbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQW5pbWF0aW9uJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ1cGRhdGVQbGF5YWJsZVwiKTtcbiAgICB9LFxuXG4gICAgLy8gQ3JlYXRlcyB0b2RvIGl0ZW1cbiAgICBjcmVhdGVUb2RvKGlkLCB0YXNrTmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBpbmRleElEID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0b2RvIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJywgJ2NyZWF0ZUFuaW1hdGlvbicpO1xuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnZGVsZXRlJyk7XG4gICAgICAgIC8vIEFkZCBpZCBkYXRhLWF0dHJpYnV0ZSB0byBlbGVtZW50c1xuICAgICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIGRlbGV0aW5nIHRvZG9cbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICAvLyBBZGRzIGV2ZW50IGhhbmRsZXIgZm9yIG9wZW5pbmcgdG9kb1xuICAgICAgICB0b2RvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVhZFRvZG9DbGlja0V2ZW50KTtcbiAgICAgICAgLy8gQWRkcyBldmVudCBoYW5kbGVyIGZvciB3aGVuIGFuaW1hdGlvbiBlbmRzXG4gICAgICAgIHRvZG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuYW5pbWF0aW9uRW5kRXZlbnQpO1xuICAgICAgICAvLyBTZXRzIGNvcnJlY3QgcHJpb3JpdHkgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgdG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgICAgICAvLyBJbmplY3RzIGRhdGEgdG8gdG9kbyBlbGVtZW50c1xuICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAvLyBBZGRzIHRvZG8gdG8gdGhlIERPTVxuICAgICAgICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb1ByaW9yaXR5LCB0b2RvTmFtZSwgdG9kb0R1ZURhdGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGlmIChpbmRleElEKSB7XG4gICAgICAgICAgICAvLyBVbmRvIG9wZXJhdGlvblxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJOb2RlID0gdG9kb0Jhci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aW5kZXhJRH1cImApO1xuICAgICAgICAgICAgdG9kb0Jhci5pbnNlcnRCZWZvcmUodG9kb0VsZW1lbnQsIGFmdGVyTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvQmFyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBVcGRhdGVzIHRvZG8gaXRlbVxuICAgIHVwZGF0ZVRvZG8oaWQsIHRhc2tOYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gVGFncyBhbGwgcmVxdWlyZWQgZWxlbWVudHMgb2YgdGhlIHRvZG8gaXRlbVxuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IHRvZG9CYXIucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiYCk7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgIC8vIEluamVjdHMgbmV3IHZhbHVlcyB0byBlbGVtZW50c1xuICAgICAgICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBwcmlvcml0eSk7XG4gICAgICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gdGFza05hbWU7XG4gICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIC8vIEFkZHMgdXBkYXRlIGFuaW1hdGlvblxuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1cGRhdGVBbmltYXRpb24nKTtcbiAgICB9LFxuXG4gICAgLy8gRGVsZXRlcyB0b2RvIGl0ZW1cbiAgICBkZWxldGVUb2RvKGlkKSB7XG4gICAgICAgIC8vIEZpbmRzIHRvZG8gZWxlbWVudCB0byBkZWxldGVcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSB0b2RvQmFyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cImApO1xuICAgICAgICAvLyBBdHRhY2hlcyBkZWxldGUgYW5pbWF0aW9uXG4gICAgICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUFuaW1hdGlvbicpO1xuICAgICAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidXBkYXRlUGxheWFibGVcIik7XG4gICAgfSxcblxuICAgIC8vIFBvcHVsYXRlcyBtb2RhbCB3aXRoIHByb3ZpZGVkIGluZm9cbiAgICBhZGRUb2RvTW9kYWwodGFza05hbWUgPSBcIlwiLCBwcmlvcml0eSA9IFwiTm9uZVwiLCBkdWVEYXRlID0gY3VycmVudERhdGUsIGRlc2NyaXB0aW9uID0gXCJcIikge1xuICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gdGFza05hbWU7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBwcmlvcml0eTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gY3VycmVudERhdGU7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICB9LFxuXG4gICAgLy8gUG9wdWxhdGVzIG1vZGFsIHdpdGggcHJvdmlkZWQgaW5mb1xuICAgIGFkZFByb2pNb2RhbChwcm9qZWN0ID0gXCJcIiwgY29sb3IgPSBcIlwiKSB7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0O1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gY29sb3I7XG4gICAgfSxcblxuICAgIC8vIE9wZW5zIG1vZGFsXG4gICAgb3Blbk1vZGFsKCkge1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9LFxuXG4gICAgLy8gQ2xvc2UgbW9kYWxcbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICAvLyBSZXNldHMgaW5wdXRzIGluIG1vZGFsXG4gICAgICAgIHRoaXMuYWRkVG9kb01vZGFsKCk7XG4gICAgICAgIC8vIEhpZGVzIG1vZGFsXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0sXG5cbiAgICAvLyBTZXRzIGJlaGF2aW9yIG1vZGFsIGJ1dHRvbiB0byBhZGQgLyBlZGl0XG4gICAgc2V0TW9kYWxCdXR0b25CZWhhdmlvcihtb2RlLCBpZCkge1xuICAgICAgICBtb2RhbER1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgbW9kYWxEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLnJlbW92ZU1vZGFsQnV0dG9uTGlzdGVuZXJzKCk7XG4gICAgICAgIGlmIChtb2RlID09PSBcImNyZWF0ZVwiKSB7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGVcIiwgXCJjcmVhdGVcIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgICAgICAgICB0aGlzLnNldFByaW9TZWxlY3RNb2RlKFwidG9kb1wiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1tb2RlXCIsIFwidXBkYXRlXCIpO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xuICAgICAgICAgICAgbW9kYWxCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcmlvU2VsZWN0TW9kZShcInRvZG9cIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlVG9kb0NsaWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IFwidXBkYXRlUHJvalwiKSB7XG4gICAgICAgICAgICBtb2RhbER1ZURhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1vZGFsRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtbW9kZVwiLCBcInVwZGF0ZVByb2pcIik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgICAgICB0aGlzLnNldFByaW9TZWxlY3RNb2RlKFwicHJvamVjdFwiKTtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVQcm9qQ2xpY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU2V0IHByaW9yaXR5IHNlbGVjdCBtb2RlXG4gICAgc2V0UHJpb1NlbGVjdE1vZGUobW9kZSkge1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJ0b2RvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZ2ggPSB0aGlzLmNyZWF0ZU9wdGlvbihcIkhpZ2hcIik7XG4gICAgICAgICAgICBjb25zdCBtZWRpdW0gPSB0aGlzLmNyZWF0ZU9wdGlvbihcIk1lZGl1bVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGxvdyA9IHRoaXMuY3JlYXRlT3B0aW9uKFwiTG93XCIpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdHZhbCA9IHRoaXMuY3JlYXRlT3B0aW9uKFwiTm9uZVwiKTtcbiAgICAgICAgICAgIG1vZGFsU2VsZWN0LnJlcGxhY2VDaGlsZHJlbihoaWdoLCBtZWRpdW0sIGxvdywgZGVmYXVsdHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHdoaXRlID0gdGhpcy5jcmVhdGVPcHRpb24oXCJ3aGl0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZCA9IHRoaXMuY3JlYXRlT3B0aW9uKFwicmVkXCIpO1xuICAgICAgICAgICAgY29uc3Qgb3JhbmdlID0gdGhpcy5jcmVhdGVPcHRpb24oXCJvcmFuZ2VcIik7XG4gICAgICAgICAgICBjb25zdCB5ZWxsb3cgPSB0aGlzLmNyZWF0ZU9wdGlvbihcInllbGxvd1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGdyZWVuID0gdGhpcy5jcmVhdGVPcHRpb24oXCJncmVlblwiKTtcbiAgICAgICAgICAgIGNvbnN0IGN5YW4gPSB0aGlzLmNyZWF0ZU9wdGlvbihcImN5YW5cIik7XG4gICAgICAgICAgICBjb25zdCBibHVlID0gdGhpcy5jcmVhdGVPcHRpb24oXCJibHVlXCIpO1xuICAgICAgICAgICAgY29uc3QgcHVycGxlID0gdGhpcy5jcmVhdGVPcHRpb24oXCJwdXJwbGVcIik7XG4gICAgICAgICAgICBjb25zdCBwaW5rID0gdGhpcy5jcmVhdGVPcHRpb24oXCJwaW5rXCIpO1xuICAgICAgICAgICAgbW9kYWxTZWxlY3QucmVwbGFjZUNoaWxkcmVuKHdoaXRlLCByZWQsIG9yYW5nZSwgeWVsbG93LCBncmVlbiwgY3lhbiwgYmx1ZSwgcHVycGxlLCBwaW5rKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGVPcHRpb24odmFsdWUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdE9wdCcpO1xuICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICAgICAgICByZXR1cm4gb3B0aW9uRWxlbWVudDtcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZlcyBtb2RhbCBidXR0b24gbGlzdGVuZXJzXG4gICAgcmVtb3ZlTW9kYWxCdXR0b25MaXN0ZW5lcnMoKSB7XG4gICAgICAgIG1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcmVhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIG1vZGFsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVUb2RvQ2xpY2tFdmVudCk7XG4gICAgICAgIC8vbW9kYWxCdXR0b24ucmVtbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVQcm9qQ2xpY2tFdmVudCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIGNyZWF0ZSBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgY3JlYXRlUHJvamVjdENsaWNrRXZlbnQoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImNyZWF0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgcHJvak5hbWU6IFwiTmV3IFByb2plY3RcIiwgY29sb3I6IFwid2hpdGVcIiB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gcmVhZCBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgcmVhZFByb2pDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRleHQgaXMgbm90IGJlaW5nIHNlbGVjdGVkXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChzZWxlY3Rpb24udHlwZSAhPSBcIlJhbmdlXCIpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcInJlYWRcIiBjb21tYW5kXG4gICAgICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkIH07XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkUHJvalwiLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIHVwZGF0ZSBwcm9qIGV2ZW50IGlzIGZpcmVkXG4gICAgZWRpdFByb2pDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwiZWRpdFwiIGNvbW1hbmQgKGFjdHVhbGx5IG9wZW5zIE1vZGFsKVxuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBpZDogaWQgfTtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwiZWRpdFByb2pcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiB1cGRhdGUgcHJvaiBldmVudCBpcyBmaXJlZFxuICAgIHVwZGF0ZVByb2pDbGlja0V2ZW50KGUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImNyZWF0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkLCBwcm9qTmFtZTogcHJvak5hbWUsIGNvbG9yOiBjb2xvciB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJ1cGRhdGVQcm9qXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gZGVsZXRlIHByb2ogZXZlbnQgaXMgZmlyZWRcbiAgICBkZWxldGVQcm9qQ2xpY2tFdmVudChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImRlbGV0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgaWQ6IGlkIH07XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcImRlbGV0ZVByb2pcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiBjcmVhdGUgdG9kbyBldmVudCBpcyBmaXJlZFxuICAgIGNyZWF0ZVRvZG9DbGlja0V2ZW50KCkge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcImNyZWF0ZVwiIGNvbW1hbmRcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHsgdGFza05hbWU6IHRhc2tOYW1lLCBwcmlvcml0eTogcHJpb3JpdHksIGR1ZURhdGU6IGR1ZURhdGUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiByZWFkIHRvZG8gZXZlbnQgaXMgZmlyZWRcbiAgICByZWFkVG9kb0NsaWNrRXZlbnQoZSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGV4dCBpcyBub3QgYmVpbmcgc2VsZWN0ZWRcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKHNlbGVjdGlvbi50eXBlICE9IFwiUmFuZ2VcIikge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwicmVhZFwiIGNvbW1hbmRcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBpZDogaWQgfTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcInJlYWRcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiB1cGRhdGUgdG9kbyBldmVudCBpcyBmaXJlZFxuICAgIHVwZGF0ZVRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICAvLyBDcmVhdGUgYW5kIHBhc3MgXCJjcmVhdGVcIiBjb21tYW5kXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7IGlkOiBpZCwgdGFza05hbWU6IHRhc2tOYW1lLCBwcmlvcml0eTogcHJpb3JpdHksIGR1ZURhdGU6IGR1ZURhdGUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9O1xuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZEZhY3RvcnkoXCJ1cGRhdGVcIiwgcGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaGFuZGxlTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiBkZWxldGUgdG9kbyBldmVudCBpcyBmaXJlZFxuICAgIGRlbGV0ZVRvZG9DbGlja0V2ZW50KGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBwYXNzIFwiZGVsZXRlXCIgY29tbWFuZFxuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0geyBpZDogaWQgfTtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRGYWN0b3J5KFwiZGVsZXRlXCIsIHBhcmFtZXRlcnMpO1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICB9LFxuXG4gICAgLy8gRXZlbnQgZm9yIHdoZW4gYW4gYW5pbWF0aW9uIGVuZHNcbiAgICBhbmltYXRpb25FbmRFdmVudChlKSB7XG4gICAgICAgIGlmIChlLmFuaW1hdGlvbk5hbWUgPT09IFwiem9vbUNyZWF0ZVwiKSB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImNyZWF0ZUFuaW1hdGlvblwiKTtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwidXBkYXRlUGxheWFibGVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbmltYXRpb25OYW1lID09PSBcInNoYWtlVXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwidXBkYXRlQW5pbWF0aW9uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYW5pbWF0aW9uTmFtZSA9PT0gXCJ6b29tRGVsZXRlXCIpIHtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBFdmVudCBmb3Igd2hlbiB1bmRvIGV2ZW50IGlzIGZpcmVkXG4gICAgdW5kb0NsaWNrRXZlbnQoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgcGFzcyBcInVuZG9cIiBjb21tYW5kXG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kRmFjdG9yeShcInVuZG9cIiwgdW5kZWZpbmVkKTtcbiAgICAgICAgY29udHJvbGxlci5oYW5kbGVNb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIG9wZW4gbW9kYWwgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBvcGVuTW9kYWxDbGlja0V2ZW50KCkge1xuICAgICAgICBjb250cm9sbGVyLmhhbmRsZU9wZW5Nb2RhbENsaWNrKCk7XG4gICAgfSxcblxuICAgIC8vIEV2ZW50IGZvciB3aGVuIHRoZSBjbG9zZSBtb2RhbCBhcmVhIChvdmVybGF5KSBpcyBjbGlja2VkXG4gICAgY2xvc2VNb2RhbENsaWNrRXZlbnQoZSkge1xuICAgICAgICAvLyBDaGVjayBpZiBvdmVybGF5IGFuZCBub3QgbW9kYWwgd2FzIHRhcmdldHRlZCB3aXRoIGNsaWNrXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgICAgICAgY29udHJvbGxlci5oYW5kbGVDbG9zZU1vZGFsQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjbGVhcnMgYWxsIGRhdGFcbiAgICBjbGVhckRhdGEoKSB7XG4gICAgICAgIHByb2pCYXIucmVwbGFjZUNoaWxkcmVuKGNyZWF0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICB0b2RvQmFyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cbn1cblxuLy8gU2V0dXAgZXZlbnQgbGlzdGVuZXJzXG5jcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlldy5jcmVhdGVQcm9qZWN0Q2xpY2tFdmVudCk7XG5vcGVuTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWV3Lm9wZW5Nb2RhbENsaWNrRXZlbnQpO1xub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB2aWV3LmNsb3NlTW9kYWxDbGlja0V2ZW50KTtcbnVuZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWV3LnVuZG9DbGlja0V2ZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgdmlldzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBtb2RlbCwgZGVmYXVsdFByb2plY3QgfSBmcm9tICcuL21vZGVsLmpzJztcbmltcG9ydCBjb21tYW5kRmFjdG9yeSBmcm9tICcuL2NvbW1hbmQuanMnO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbi8vIFNldHVwIGRldiBidXR0b25zXG5jb25zdCBjbGVhclN0b3JhZ2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXJTdG9yYWdlJyk7XG5jbGVhclN0b3JhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGxvY2FsU3RvcmFnZS5jbGVhcigpIH0pO1xuY29uc3QgbG9hZERlZmF1bHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZERlZmF1bHQnKTtcbmxvYWREZWZhdWx0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVmYXVsdERhdGFTZXQpO1xuY29uc3QgY2xlYXJDdXJyZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyQ3VycmVudCcpO1xuY2xlYXJDdXJyZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGVsLmNsZWFyRGF0YSgpO1xuICAgIHZpZXcuY2xlYXJEYXRhKCk7XG59KVxuXG4vLyBMb2FkcyBkZWZhdWx0IGRhdGEgc2V0IGlmIGxvYWRpbmcgZmFpbHNcbmlmIChtb2RlbC5sb2FkU3RvcmFnZSgpID09PSBmYWxzZSkge1xuICAgIGRlZmF1bHREYXRhU2V0KCk7XG59XG5cbi8vIExvYWRzIGluIGEgaGFyZGNvZGVkIGRhdGEgc2V0XG5mdW5jdGlvbiBkZWZhdWx0RGF0YVNldCgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBtb2RlbC5jbGVhckRhdGEoKTtcbiAgICB2aWV3LmNsZWFyRGF0YSgpO1xuICAgIGNvbnN0IGNvbW1hbmQxID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHsgcHJvak5hbWU6IFwiUHJvamVjdCAxXCIsIGNvbG9yOiBcInJlZFwiIH0pO1xuICAgIGNvbnN0IGNvbW1hbmQyID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHsgcHJvak5hbWU6IFwiUHJvamVjdCAyXCIsIGNvbG9yOiBcIm9yYW5nZVwiIH0pO1xuICAgIGNvbnN0IGNvbW1hbmQzID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHsgcHJvak5hbWU6IFwiUHJvamVjdCAzXCIsIGNvbG9yOiBcInllbGxvd1wiIH0pO1xuICAgIGNvbnN0IGNvbW1hbmQ0ID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHsgcHJvak5hbWU6IFwiUHJvamVjdCA0XCIsIGNvbG9yOiBcImdyZWVuXCIgfSk7XG4gICAgY29uc3QgY29tbWFuZDUgPSBjb21tYW5kRmFjdG9yeShcImNyZWF0ZVByb2pcIiwgeyBwcm9qTmFtZTogXCJQcm9qZWN0IDVcIiwgY29sb3I6IFwiY3lhblwiIH0pO1xuICAgIGNvbnN0IGNvbW1hbmQ2ID0gY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVQcm9qXCIsIHsgcHJvak5hbWU6IFwiUHJvamVjdCA2XCIsIGNvbG9yOiBcImJsdWVcIiB9KTtcbiAgICBjb25zdCBjb21tYW5kNyA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7IHByb2pOYW1lOiBcIlByb2plY3QgN1wiLCBjb2xvcjogXCJwdXJwbGVcIiB9KTtcbiAgICBjb25zdCBjb21tYW5kOCA9IGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlUHJvalwiLCB7IHByb2pOYW1lOiBcIlByb2plY3QgOFwiLCBjb2xvcjogXCJwaW5rXCIgfSk7XG5cbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxKTtcbiAgICBjb25zdCBjb21tYW5kOSA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwgeyBpZDogMSB9KTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQ5KTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgeyB0YXNrTmFtZTogXCJUZXN0MVwiLCBwcmlvcml0eTogXCJIaWdoXCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjogXCJUZXN0IERlc2NyaXB0aW9uIDFcIiB9KSk7XG4gICAgbW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7IHRhc2tOYW1lOiBcIlJlYWxseSBSZWFsbHkgUmVhbGx5IExvbmcgTmFtZSBUZXN0XCIsIHByaW9yaXR5OiBcIk5vbmVcIiwgZHVlRGF0ZTogY3VycmVudERhdGUsIGRlc2NyaXB0aW9uOiBcIlJlYWxseSBSZWFsbHkgUmVhbGx5IFJlYWxseSBSZWFsbHkgUmVhbGx5IExvbmcgRGVzY3JpcHRpb24gVGVzdFwiIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgdGFza05hbWU6IFwiVGVzdDNcIiwgcHJpb3JpdHk6IFwiTm9uZVwiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiAzXCIgfSkpO1xuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgeyB0YXNrTmFtZTogXCJUZXN0NFwiLCBwcmlvcml0eTogXCJOb25lXCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjogXCJUZXN0IERlc2NyaXB0aW9uIDRcIiB9KSk7XG4gICAgbW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7IHRhc2tOYW1lOiBcIlRlc3Q1XCIsIHByaW9yaXR5OiBcIk1lZGl1bVwiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiA1XCIgfSkpO1xuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgeyB0YXNrTmFtZTogXCJUZXN0NlwiLCBwcmlvcml0eTogXCJOb25lXCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjogXCJUZXN0IERlc2NyaXB0aW9uIDZcIiB9KSk7XG4gICAgbW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7IHRhc2tOYW1lOiBcIlRlc3Q3XCIsIHByaW9yaXR5OiBcIk5vbmVcIiwgZHVlRGF0ZTogY3VycmVudERhdGUsIGRlc2NyaXB0aW9uOiBcIlRlc3QgRGVzY3JpcHRpb24gN1wiIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgdGFza05hbWU6IFwiVGVzdDhcIiwgcHJpb3JpdHk6IFwiTm9uZVwiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiA4XCIgfSkpO1xuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgeyB0YXNrTmFtZTogXCJUZXN0OVwiLCBwcmlvcml0eTogXCJMb3dcIiwgZHVlRGF0ZTogY3VycmVudERhdGUsIGRlc2NyaXB0aW9uOiBcIlRlc3QgRGVzY3JpcHRpb24gOVwiIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgdGFza05hbWU6IFwiVGVzdDEwXCIsIHByaW9yaXR5OiBcIk5vbmVcIiwgZHVlRGF0ZTogY3VycmVudERhdGUsIGRlc2NyaXB0aW9uOiBcIlRlc3QgRGVzY3JpcHRpb24gMTBcIiB9KSk7XG4gICAgbW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kRmFjdG9yeShcImNyZWF0ZVwiLCB7IHRhc2tOYW1lOiBcIlRlc3QxMVwiLCBwcmlvcml0eTogXCJOb25lXCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjogXCJUZXN0IERlc2NyaXB0aW9uIDExXCIgfSkpO1xuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgeyB0YXNrTmFtZTogXCJUZXN0MTJcIiwgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlLCBkZXNjcmlwdGlvbjogXCJUZXN0IERlc2NyaXB0aW9uIDEyXCIgfSkpO1xuXG4gICAgbW9kZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kMik7XG4gICAgY29uc3QgY29tbWFuZDEwID0gY29tbWFuZEZhY3RvcnkoXCJyZWFkUHJvalwiLCB7IGlkOiAyIH0pO1xuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDEwKTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZEZhY3RvcnkoXCJjcmVhdGVcIiwgeyB0YXNrTmFtZTogXCJUZXN0MTNcIiwgcHJpb3JpdHk6IFwiSGlnaFwiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiAxM1wiIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgdGFza05hbWU6IFwiVGVzdDE0XCIsIHByaW9yaXR5OiBcIk1lZGl1bVwiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiAxNFwiIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgdGFza05hbWU6IFwiVGVzdDE1XCIsIHByaW9yaXR5OiBcIkxvd1wiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiAxNVwiIH0pKTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDMpO1xuICAgIGNvbnN0IGNvbW1hbmQxMSA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwgeyBpZDogMyB9KTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxMSk7XG5cbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgdGFza05hbWU6IFwiVGVzdDE2XCIsIHByaW9yaXR5OiBcIkxvd1wiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiAxNlwiIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgdGFza05hbWU6IFwiVGVzdDE3XCIsIHByaW9yaXR5OiBcIkxvd1wiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiAxN1wiIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgdGFza05hbWU6IFwiVGVzdDE4XCIsIHByaW9yaXR5OiBcIkxvd1wiLCBkdWVEYXRlOiBjdXJyZW50RGF0ZSwgZGVzY3JpcHRpb246IFwiVGVzdCBEZXNjcmlwdGlvbiAxOFwiIH0pKTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDQpO1xuICAgIGNvbnN0IGNvbW1hbmQxMiA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwgeyBpZDogNCB9KTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxMik7XG5cbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDUpO1xuICAgIGNvbnN0IGNvbW1hbmQxMyA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwgeyBpZDogNSB9KTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxMyk7XG5cbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDYpO1xuICAgIGNvbnN0IGNvbW1hbmQxNCA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwgeyBpZDogNiB9KTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxNCk7XG5cbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDcpO1xuICAgIGNvbnN0IGNvbW1hbmQxNSA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwgeyBpZDogNyB9KTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxNSk7XG5cbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDgpO1xuICAgIGNvbnN0IGNvbW1hbmQxNiA9IGNvbW1hbmRGYWN0b3J5KFwicmVhZFByb2pcIiwgeyBpZDogOCB9KTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmQxNik7XG5cbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcbiAgICBtb2RlbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRGYWN0b3J5KFwiY3JlYXRlXCIsIHsgcHJpb3JpdHk6IFwiTG93XCIsIGR1ZURhdGU6IGN1cnJlbnREYXRlIH0pKTtcblxuICAgIG1vZGVsLmhhbmRsZUNvbW1hbmQoY29tbWFuZDkpOyBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=