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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Montserrat:wght@300&family=Poppins:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 16px;\n    --cards-color: #222844;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to right bottom, #3d4564, #424b70, #47507c, #4d5688, #545b94);\n    color: #ffffff;\n}\n\nh1 {\n    font-size: 1.2rem;\n    font-family: 'Comfortaa', cursive;\n    letter-spacing: 2px;\n    cursor: pointer;\n    color: #6FFACC;\n}\n\nheader {\n    padding: 16px 24px 8px;\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.search-bar input {\n    padding: 4px 8px 4px 32px;\n    color: white;\n    font-size: 1rem;\n    border-radius: 16px;\n    border: 2px solid white;\n    width: 100%;\n    background-color: transparent;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n.search-bar {\n    position: relative;\n    flex: 1;\n    max-width: 300px;\n}\n\n.search-bar label {\n    height: 16px;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.search-bar .icon {\n    height: 100%;\n    position: absolute;\n}\n\n.search-bar button {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    border: none;\n    background-color: transparent;\n    color: #6FFACC;\n    font-weight: 700;\n    cursor: pointer;\n}\n\nmain {\n    padding: 32px 64px;\n    justify-content: center;\n    flex: 1 0 auto;\n    display: flex;\n    gap: 64px;\n    width: 100vw;\n}\n\n.current-weather {\n    padding: 32px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--cards-color);\n    border-radius: 8px;\n    flex: 0 0 400px;\n}\n\n.current-weather .city-info {\n    text-align: center;\n}\n\n.current-weather .city-name {\n    font-size: 3rem;\n    color: #6FFACC;\n}\n\n.weather-info {\n    margin-top: 24px;\n}\n\n.weather-info .temperature {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.weather-info .temperature .small {\n    font-size: 1.5rem;\n    position: relative;\n    bottom: 32px;\n}\n\n.extra {\n    margin-top: 24px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    justify-items: center;\n    font-size: 1rem;\n    gap: 32px;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data img {\n    width: 32px;\n}\n\n.weather-condition {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-condition img {\n    width: 84px;\n}\n\n.card-container {\n    overflow: auto;\n    display: flex;\n    gap: 24px;\n    flex: 1;\n}\n\n.card {\n    width: 314px;\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 auto;\n    text-align: center;\n    background-color: var(--cards-color);\n    border-radius: 16px;\n    justify-content: center;\n}\n\n.card h3 {\n    font-size: 1.2rem;\n}\n\n.card,\n.card p {\n    font-size: 0.9rem;\n}\n\n.forecast-container {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    flex: 1;\n}\n\n.forecast {\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.card .data-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    justify-content: center;\n    row-gap: 16px;\n    margin-top: 16px;\n}\n\n.forecast h2 {\n    margin-bottom: 8px;\n}\n\n.card .condition-container {\n    width: 64px;\n    height: 32px;\n    overflow: hidden;\n    position: relative;\n    margin-top: 16px;\n}\n\n.card .weather-condition img {\n    width: 64px;\n    object-fit: scale-down;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.forecast .temperature-maxmin {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n\n::-webkit-scrollbar {\n    height: 10px;\n}\n\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n    background: #6FFACC;\n    border-radius: 32px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,+FAA+F;IAC/F,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,2BAA2B;IAC3B,YAAY;IACZ,6BAA6B;IAC7B,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,cAAc;IACd,aAAa;IACb,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,4DAA4D;IAC5D,qBAAqB;IACrB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,aAAa;IACb,SAAS;IACT,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,oCAAoC;IACpC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,OAAO;AACX;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,uBAAuB;IACvB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Montserrat:wght@300&family=Poppins:wght@300&display=swap');\n\n:root {\n    font-size: 16px;\n    --cards-color: #222844;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to right bottom, #3d4564, #424b70, #47507c, #4d5688, #545b94);\n    color: #ffffff;\n}\n\nh1 {\n    font-size: 1.2rem;\n    font-family: 'Comfortaa', cursive;\n    letter-spacing: 2px;\n    cursor: pointer;\n    color: #6FFACC;\n}\n\nheader {\n    padding: 16px 24px 8px;\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.search-bar input {\n    padding: 4px 8px 4px 32px;\n    color: white;\n    font-size: 1rem;\n    border-radius: 16px;\n    border: 2px solid white;\n    width: 100%;\n    background-color: transparent;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n.search-bar {\n    position: relative;\n    flex: 1;\n    max-width: 300px;\n}\n\n.search-bar label {\n    height: 16px;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.search-bar .icon {\n    height: 100%;\n    position: absolute;\n}\n\n.search-bar button {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    border: none;\n    background-color: transparent;\n    color: #6FFACC;\n    font-weight: 700;\n    cursor: pointer;\n}\n\nmain {\n    padding: 32px 64px;\n    justify-content: center;\n    flex: 1 0 auto;\n    display: flex;\n    gap: 64px;\n    width: 100vw;\n}\n\n.current-weather {\n    padding: 32px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--cards-color);\n    border-radius: 8px;\n    flex: 0 0 400px;\n}\n\n.current-weather .city-info {\n    text-align: center;\n}\n\n.current-weather .city-name {\n    font-size: 3rem;\n    color: #6FFACC;\n}\n\n.weather-info {\n    margin-top: 24px;\n}\n\n.weather-info .temperature {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.weather-info .temperature .small {\n    font-size: 1.5rem;\n    position: relative;\n    bottom: 32px;\n}\n\n.extra {\n    margin-top: 24px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    justify-items: center;\n    font-size: 1rem;\n    gap: 32px;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data img {\n    width: 32px;\n}\n\n.weather-condition {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-condition img {\n    width: 84px;\n}\n\n.card-container {\n    overflow: auto;\n    display: flex;\n    gap: 24px;\n    flex: 1;\n}\n\n.card {\n    width: 314px;\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 auto;\n    text-align: center;\n    background-color: var(--cards-color);\n    border-radius: 16px;\n    justify-content: center;\n}\n\n.card h3 {\n    font-size: 1.2rem;\n}\n\n.card,\n.card p {\n    font-size: 0.9rem;\n}\n\n.forecast-container {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    flex: 1;\n}\n\n.forecast {\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.card .data-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    justify-content: center;\n    row-gap: 16px;\n    margin-top: 16px;\n}\n\n.forecast h2 {\n    margin-bottom: 8px;\n}\n\n.card .condition-container {\n    width: 64px;\n    height: 32px;\n    overflow: hidden;\n    position: relative;\n    margin-top: 16px;\n}\n\n.card .weather-condition img {\n    width: 64px;\n    object-fit: scale-down;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.forecast .temperature-maxmin {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n\n::-webkit-scrollbar {\n    height: 10px;\n}\n\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n    background: #6FFACC;\n    border-radius: 32px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/apiHandler.js":
/*!***************************!*\
  !*** ./src/apiHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataStuff */ "./src/dataStuff.js");


const API_KEY = 'b8bedc2110030101dd9c8d0c74f2336c';

async function getCoordinates(locationName) {
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`);
  const json = await response.json();
  const obj = {
    name: json[0].name,
    country: json[0].country,
    lat: json[0].lat,
    lon: json[0].lon,
  };
  return obj;
}

async function getData(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`);
  const json = await response.json();
  return json;
}

async function getWeatherData(locationName) {
  const obj = await getCoordinates(locationName);
  const weatherData = await getData(obj);
  weatherData.city = obj.name;
  weatherData.country = obj.country;
  (0,_dataStuff__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData);
  return weatherData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);


/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stringFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringFunctions */ "./src/stringFunctions.js");


function cardDomNodeFactory(title, type) {
  const card = document.createElement('div');
  card.classList.add('card');
  const h3 = document.createElement('h3');
  h3.textContent = title;
  h3.classList.add('title');
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('data-container');
  const weatherCondition = document.createElement('div');
  weatherCondition.classList.add('weather-condition');
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('condition-container');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = 'http://openweathermap.org/img/wn/01n@2x.png';
  iconContainer.append(weatherIcon);
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = '--';
  weatherCondition.append(iconContainer, weatherDescription);
  if (type === 'Daily') {
    const maxMin = document.createElement('div');
    maxMin.classList.add('temperature-maxmin');

    const maxDiv = document.createElement('div');
    maxDiv.classList.add('max');

    const max = document.createElement('p');

    const maxValue = document.createElement('span');
    maxValue.textContent = '--';
    maxValue.classList.add('value');

    const maxUnit = document.createElement('span');
    maxUnit.classList.add('unit');
    maxUnit.textContent = '°C';
    max.append(maxValue, maxUnit);

    const maxText = document.createElement('p');
    maxText.textContent = 'MAX';

    maxDiv.append(max, maxText);
    const minDiv = document.createElement('div');
    minDiv.classList.add('min');

    const min = document.createElement('p');

    const minValue = document.createElement('span');
    minValue.textContent = '--';
    minValue.classList.add('value');

    const minUnit = document.createElement('span');
    minUnit.classList.add('unit');
    minUnit.textContent = '°C';
    min.append(minValue, minUnit);

    const minText = document.createElement('p');
    minText.textContent = 'MIN';

    minDiv.append(min, minText);

    maxMin.append(maxDiv, minDiv);

    card.append(h3, weatherCondition, maxMin, dataContainer);
  } else card.append(h3, weatherCondition, dataContainer);
  return card;
}

class Card {
  constructor(title, type) {
    this.domNode = cardDomNodeFactory(title, type);
    this.title = this.domNode.querySelector('.title');
    this.weatherConditionImg = this.domNode.querySelector('.weather-condition img');
    this.weatherConditionDesc = this.domNode.querySelector('.weather-condition p');
  }

  addInfo(infoObj) {
    const div = document.createElement('div');
    div.classList.add('data', infoObj.varName);
    const value = document.createElement('p');
    value.classList.add('value');
    value.textContent = '--';
    const legend = document.createElement('div');
    legend.classList.add('description');
    const desc = document.createElement('p');
    desc.textContent = infoObj.name;
    const image = document.createElement('img');
    image.setAttribute('alt', infoObj.name);
    image.src = infoObj.icon;
    legend.append(image, desc);
    div.append(legend, value);
    this.domNode.querySelector('.data-container').append(div);
  }

  updateData(data, dataArr) {
    this.title.textContent = data.dt;
    this.weatherConditionImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.weatherConditionDesc.textContent = _stringFunctions__WEBPACK_IMPORTED_MODULE_0__["default"].capitalize(data.weather[0].description);
    if (this.domNode.querySelector('.temperature-maxmin')) {
      this.domNode.querySelector('.max .value').textContent = Math.round(data.temp.max);
      this.domNode.querySelector('.min .value').textContent = Math.round(data.temp.min);
    }
    dataArr.forEach((datum) => {
      this.domNode.querySelector(`.data.${datum.varName} .value`).textContent = data[datum.varName] + datum.unit;
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ "./src/currentWeather.js":
/*!*******************************!*\
  !*** ./src/currentWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");
/* harmony import */ var _stringFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringFunctions */ "./src/stringFunctions.js");




const currentWeather = (() => {
  const container = document.createElement('div');
  container.classList.add('current-weather');
  const cityInfo = document.createElement('div');
  cityInfo.classList.add('city-info');
  const cityName = document.createElement('p');
  cityName.classList.add('city-name');
  cityName.textContent = 'City';
  const localDate = document.createElement('p');
  localDate.textContent = '--';
  localDate.classList.add('date');
  cityInfo.append(cityName, localDate);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather-info');

  const temperature = document.createElement('p');
  const temperatureValue = document.createElement('span');
  temperatureValue.textContent = '--';
  temperature.classList.add('temperature', 'value');
  const spanSmall = document.createElement('span');
  spanSmall.classList.add('small');
  spanSmall.textContent = '°C';
  temperature.append(temperatureValue, spanSmall);

  const weatherCondition = document.createElement('div');
  weatherCondition.classList.add('weather-condition');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = 'http://openweathermap.org/img/wn/01n@2x.png';
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = '--';
  weatherCondition.append(weatherIcon, weatherDescription);

  const weatherExtra = document.createElement('div');
  weatherExtra.classList.add('extra');

  const addInfo = (obj) => {
    const div = document.createElement('div');
    div.classList.add('data', obj.varName);
    const value = document.createElement('p');
    value.classList.add('value');
    value.textContent = '--';
    const legend = document.createElement('div');
    legend.classList.add('description');
    const desc = document.createElement('p');
    desc.textContent = obj.name;
    const image = document.createElement('img');
    image.setAttribute('alt', obj.name);
    image.src = obj.icon;
    legend.append(image, desc);
    div.append(legend, value);
    weatherExtra.append(div);
  };

  const dataArr = [
    _data__WEBPACK_IMPORTED_MODULE_0__["default"].feelsLike,
    _data__WEBPACK_IMPORTED_MODULE_0__["default"].windSpeed,
    _data__WEBPACK_IMPORTED_MODULE_0__["default"].cloudiness,
    _data__WEBPACK_IMPORTED_MODULE_0__["default"].humidity,
    _data__WEBPACK_IMPORTED_MODULE_0__["default"].visibility,
    _data__WEBPACK_IMPORTED_MODULE_0__["default"].uvIndex,
  ];

  dataArr.forEach((datum) => {
    addInfo(datum);
  });

  weatherInfo.append(temperature, weatherCondition, weatherExtra);
  container.append(cityInfo, weatherInfo);

  _pubSub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('newData', (data) => {
    cityName.textContent = data.city;
    localDate.textContent = data.current.dt;
    temperatureValue.textContent = Math.round(data.current.temp);
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    weatherDescription.textContent = _stringFunctions__WEBPACK_IMPORTED_MODULE_2__["default"].capitalize(data
      .current.weather[0].description);
    dataArr.forEach((datum) => {
      container.querySelector(`.data.${datum.varName} .value`).textContent = data.current[datum.varName] + datum.unit;
    });
  });

  return container;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentWeather);


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_weather_thermometer_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/weather/thermometer.svg */ "./src/icons/weather/thermometer.svg");
/* harmony import */ var _icons_weather_humidity_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/weather/humidity.svg */ "./src/icons/weather/humidity.svg");
/* harmony import */ var _icons_weather_wind_speed_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/weather/wind-speed.svg */ "./src/icons/weather/wind-speed.svg");
/* harmony import */ var _icons_weather_cloudiness_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/weather/cloudiness.svg */ "./src/icons/weather/cloudiness.svg");
/* harmony import */ var _icons_weather_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/weather/sunrise.svg */ "./src/icons/weather/sunrise.svg");
/* harmony import */ var _icons_weather_sunset_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/weather/sunset.svg */ "./src/icons/weather/sunset.svg");
/* harmony import */ var _icons_weather_uv_index_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/weather/uv-index.svg */ "./src/icons/weather/uv-index.svg");
/* harmony import */ var _icons_weather_visibility_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/weather/visibility.svg */ "./src/icons/weather/visibility.svg");
/* harmony import */ var _icons_weather_rain_probability_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/weather/rain-probability.svg */ "./src/icons/weather/rain-probability.svg");










function factory(name, icon, varName, unit) {
  return {
    name,
    icon,
    varName,
    unit,
  };
}

const dataSet = {
  temperature: factory('Temperature', _icons_weather_thermometer_svg__WEBPACK_IMPORTED_MODULE_0__, 'temp', '°C'),
  rainProbability: factory('Rain', _icons_weather_rain_probability_svg__WEBPACK_IMPORTED_MODULE_8__, 'pop', '%'),
  feelsLike: factory('Feels like', _icons_weather_thermometer_svg__WEBPACK_IMPORTED_MODULE_0__, 'feels_like', '°C'),
  windSpeed: factory('Wind speed', _icons_weather_wind_speed_svg__WEBPACK_IMPORTED_MODULE_2__, 'wind_speed', ' m/s'),
  cloudiness: factory('Cloudiness', _icons_weather_cloudiness_svg__WEBPACK_IMPORTED_MODULE_3__, 'clouds', '%'),
  humidity: factory('Humidity', _icons_weather_humidity_svg__WEBPACK_IMPORTED_MODULE_1__, 'humidity', '%'),
  sunrise: factory('Sunrise', _icons_weather_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__, 'sunrise', ''),
  sunset: factory('Sunset', _icons_weather_sunset_svg__WEBPACK_IMPORTED_MODULE_5__, 'sunset', ''),
  uvIndex: factory('UV index', _icons_weather_uv_index_svg__WEBPACK_IMPORTED_MODULE_6__, 'uvi', ''),
  visibility: factory('Visibility', _icons_weather_visibility_svg__WEBPACK_IMPORTED_MODULE_7__, 'visibility', ' m'),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataSet);


/***/ }),

/***/ "./src/dataStuff.js":
/*!**************************!*\
  !*** ./src/dataStuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dateFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateFunctions */ "./src/dateFunctions.js");


function convertPopToPercentage(obj) {
  obj.daily.forEach((d) => {
    const day = d;
    day.pop *= 100;
  });
  obj.hourly.forEach((h) => {
    const hour = h;
    hour.pop *= 100;
  });
}

function prepareDataObject(o) {
  const obj = o;
  (0,_dateFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  convertPopToPercentage(obj);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prepareDataObject);


/***/ }),

/***/ "./src/dateFunctions.js":
/*!******************************!*\
  !*** ./src/dateFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function convertCurrentDate(c, timezone, locale = 'en-UK') {
  const options = {
    timeZone: timezone,
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const current = c;
  current.dt = new Date(current.dt * 1000).toLocaleString(locale, options);
}

function convertDailyDates(daily, timezone, locale = 'en-UK') {
  const dtOptions = {
    timeZone: timezone,
    weekday: 'long',
  };
  const sunOptions = {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  };
  daily.forEach((d, index) => {
    const day = d;
    day.sunrise = new Date(day.sunrise * 1000).toLocaleString(locale, sunOptions);
    day.sunset = new Date(day.sunset * 1000).toLocaleString(locale, sunOptions);
    if (index === 0) {
      day.dt = 'Today';
      return;
    }
    day.dt = new Date(day.dt * 1000).toLocaleString(locale, dtOptions);
  });
}

function convertHourlyAndMinutelyDates(obj, timezone, locale = 'en-UK') {
  const options = {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  };
  obj.hourly.forEach((h) => {
    const hour = h;
    hour.dt = new Date(hour.dt * 1000).toLocaleString(locale, options);
  });
  obj.minutely.forEach((m) => {
    const minute = m;
    minute.dt = new Date(minute.dt * 1000).toLocaleString(locale, options);
  });
}

function addDateStrings(obj) {
  convertCurrentDate(obj.current, obj.timezone);
  convertDailyDates(obj.daily, obj.timezone);
  convertHourlyAndMinutelyDates(obj, obj.timezone);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDateStrings);


/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");




function forecastElementFactory(name) {
  const container = document.createElement('div');
  container.classList.add('forecast');
  const h2 = document.createElement('h2');
  h2.textContent = name;
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('card-container');
  container.append(h2, dataContainer);
  return container;
}

class Forecast {
  constructor(name, ...datum) {
    this.name = name;
    this.domNode = forecastElementFactory(name);
    this.dataArr = [...datum];
    this.cards = [];
    this.numberOfCards = (() => {
      switch (this.name) {
        case 'Daily':
          return 8;
        case 'Hourly':
          return 48;
        case 'Minutely':
          return 61;
        default:
          return 4;
      }
    })();
    _pubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('newData', this.updateCards.bind(this));
    this.init();
  }

  init() {
    for (let i = 0; i < this.numberOfCards; i += 1) {
      this.cards[i] = new _cards__WEBPACK_IMPORTED_MODULE_1__["default"]('Title', this.name);
      for (let j = 0; j < this.dataArr.length; j += 1) {
        this.cards[i].addInfo(this.dataArr[j]);
      }
      this.domNode.querySelector('.card-container').append(this.cards[i].domNode);
    }
  }

  updateCards(data) {
    const thisData = data[this.name.toLowerCase()];
    this.cards.forEach((card, index) => {
      card.updateData(thisData[index], this.dataArr);
    });
  }
}

const daily = new Forecast('Daily', _data__WEBPACK_IMPORTED_MODULE_0__["default"].sunrise, _data__WEBPACK_IMPORTED_MODULE_0__["default"].sunset);
const hourly = new Forecast('Hourly', _data__WEBPACK_IMPORTED_MODULE_0__["default"].temperature, _data__WEBPACK_IMPORTED_MODULE_0__["default"].rainProbability, _data__WEBPACK_IMPORTED_MODULE_0__["default"].cloudiness, _data__WEBPACK_IMPORTED_MODULE_0__["default"].humidity);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ daily, hourly });


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/search.svg */ "./src/icons/search.svg");
/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiHandler */ "./src/apiHandler.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");




const searchBar = (() => {
  const container = document.createElement('div');
  container.classList.add('search-bar');
  const searchLabel = document.createElement('label');
  searchLabel.setAttribute('for', 'search-input');
  const searchIcon = document.createElement('img');
  searchIcon.src = _icons_search_svg__WEBPACK_IMPORTED_MODULE_0__;
  searchIcon.classList.add('icon');
  searchLabel.append(searchIcon);
  const searchInput = document.createElement('input');
  searchInput.id = 'search-input';
  searchInput.setAttribute('placeholder', 'City name');
  const searchButton = document.createElement('button');
  searchButton.classList.add('search-button');
  searchButton.textContent = 'Go!';
  searchButton.addEventListener('click', async () => {
    if (!searchInput.value) return;
    const weatherData = await (0,_apiHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(searchInput.value);
    _pubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('newData', weatherData);
  });
  container.append(searchLabel, searchInput, searchButton);
  return container;
})();

const header = (() => {
  const container = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'weather app';
  container.append(h1, searchBar);
  return container;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/mainSection.js":
/*!****************************!*\
  !*** ./src/mainSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentWeather */ "./src/currentWeather.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");



const forecastContainer = document.createElement('div');
forecastContainer.classList.add('forecast-container');

const mainSection = (() => {
  const main = document.createElement('main');
  main.append(_currentWeather__WEBPACK_IMPORTED_MODULE_0__["default"]);
  main.append(forecastContainer);
  forecastContainer.append(_forecast__WEBPACK_IMPORTED_MODULE_1__["default"].daily.domNode, _forecast__WEBPACK_IMPORTED_MODULE_1__["default"].hourly.domNode);
  return main;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSection);


/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _mainSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainSection */ "./src/mainSection.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");
/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiHandler */ "./src/apiHandler.js");





async function pageLoad() {
  document.body.append(_header__WEBPACK_IMPORTED_MODULE_0__["default"], _mainSection__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const weatherData = await (0,_apiHandler__WEBPACK_IMPORTED_MODULE_3__["default"])('london');
  _pubSub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('newData', weatherData);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./src/pubSub.js":
/*!***********************!*\
  !*** ./src/pubSub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const events = {};

function subscribe(eventName, f) {
  if (!events[eventName]) events[eventName] = [];
  events[eventName].push(f);
}

function publish(eventName, data) {
  if (events[eventName]) {
    events[eventName].forEach((f) => {
      f(data);
    });
  }
}

function unsubscribe(eventName, f) {
  if (events[eventName].includes(f)) events[eventName].splice(events[eventName].indexOf(f));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ subscribe, publish, unsubscribe });


/***/ }),

/***/ "./src/stringFunctions.js":
/*!********************************!*\
  !*** ./src/stringFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function capitalize(str) {
  if (typeof str !== 'string') return str;
  return (str.slice(0, 1).toUpperCase() + str.slice(1));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ capitalize });


/***/ }),

/***/ "./src/icons/search.svg":
/*!******************************!*\
  !*** ./src/icons/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c333bc21c16e120c53ed.svg";

/***/ }),

/***/ "./src/icons/weather/cloudiness.svg":
/*!******************************************!*\
  !*** ./src/icons/weather/cloudiness.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55813fb318030be10457.svg";

/***/ }),

/***/ "./src/icons/weather/humidity.svg":
/*!****************************************!*\
  !*** ./src/icons/weather/humidity.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1efab97d3f08360f1ac.svg";

/***/ }),

/***/ "./src/icons/weather/rain-probability.svg":
/*!************************************************!*\
  !*** ./src/icons/weather/rain-probability.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f97a02fefeeae2b0851e.svg";

/***/ }),

/***/ "./src/icons/weather/sunrise.svg":
/*!***************************************!*\
  !*** ./src/icons/weather/sunrise.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50a391651d4067e46149.svg";

/***/ }),

/***/ "./src/icons/weather/sunset.svg":
/*!**************************************!*\
  !*** ./src/icons/weather/sunset.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c53abe2f876c30bcf85f.svg";

/***/ }),

/***/ "./src/icons/weather/thermometer.svg":
/*!*******************************************!*\
  !*** ./src/icons/weather/thermometer.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b88ffc661ff47f29ea17.svg";

/***/ }),

/***/ "./src/icons/weather/uv-index.svg":
/*!****************************************!*\
  !*** ./src/icons/weather/uv-index.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e06994867d1fec31967.svg";

/***/ }),

/***/ "./src/icons/weather/visibility.svg":
/*!******************************************!*\
  !*** ./src/icons/weather/visibility.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aeacaecc0c7ae806dfe2.svg";

/***/ }),

/***/ "./src/icons/weather/wind-speed.svg":
/*!******************************************!*\
  !*** ./src/icons/weather/wind-speed.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5adc577b45ff0bff7d2c.svg";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");



(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYTs7QUFFbEMscURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGlIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YVN0dWZmLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGVGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW5TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHJpbmdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDUwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgLS1jYXJkcy1jb2xvcjogIzIyMjg0NDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjM2Q0NTY0LCAjNDI0YjcwLCAjNDc1MDdjLCAjNGQ1Njg4LCAjNTQ1Yjk0KTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTZweCAyNHB4IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0IHtcXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggMzJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi5zZWFyY2gtYmFyIGxhYmVsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDhweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgLmljb24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDMycHggNjRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDY0cHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkcy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZmxleDogMCAwIDQwMHB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LWluZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxufVxcblxcbi53ZWF0aGVyLWluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIC50ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIC50ZW1wZXJhdHVyZSAuc21hbGwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDMycHg7XFxufVxcblxcbi5leHRyYSB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdhcDogMzJweDtcXG59XFxuXFxuLmRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSAuZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICB3aWR0aDogMzE0cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZHMtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNhcmQsXFxuLmNhcmQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2FyZCAuZGF0YS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uZm9yZWNhc3QgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5jYXJkIC5jb25kaXRpb24tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uY2FyZCAud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5mb3JlY2FzdCAudGVtcGVyYXR1cmUtbWF4bWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICM2RkZBQ0M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsK0ZBQStGO0lBQy9GLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixTQUFTO0lBQ1QsT0FBTztBQUNYOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDUwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgLS1jYXJkcy1jb2xvcjogIzIyMjg0NDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjM2Q0NTY0LCAjNDI0YjcwLCAjNDc1MDdjLCAjNGQ1Njg4LCAjNTQ1Yjk0KTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTZweCAyNHB4IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0IHtcXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggMzJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi5zZWFyY2gtYmFyIGxhYmVsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDhweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgLmljb24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDMycHggNjRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDY0cHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkcy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZmxleDogMCAwIDQwMHB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LWluZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxufVxcblxcbi53ZWF0aGVyLWluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIC50ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIC50ZW1wZXJhdHVyZSAuc21hbGwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDMycHg7XFxufVxcblxcbi5leHRyYSB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdhcDogMzJweDtcXG59XFxuXFxuLmRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSAuZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICB3aWR0aDogMzE0cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZHMtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNhcmQsXFxuLmNhcmQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2FyZCAuZGF0YS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uZm9yZWNhc3QgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5jYXJkIC5jb25kaXRpb24tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uY2FyZCAud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5mb3JlY2FzdCAudGVtcGVyYXR1cmUtbWF4bWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICM2RkZBQ0M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByZXBhcmVEYXRhT2JqZWN0IGZyb20gJy4vZGF0YVN0dWZmJztcblxuY29uc3QgQVBJX0tFWSA9ICdiOGJlZGMyMTEwMDMwMTAxZGQ5YzhkMGM3NGYyMzM2Yyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGxvY2F0aW9uTmFtZSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uTmFtZX0mbGltaXQ9MSZhcHBpZD0ke0FQSV9LRVl9YCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBuYW1lOiBqc29uWzBdLm5hbWUsXG4gICAgY291bnRyeToganNvblswXS5jb3VudHJ5LFxuICAgIGxhdDoganNvblswXS5sYXQsXG4gICAgbG9uOiBqc29uWzBdLmxvbixcbiAgfTtcbiAgcmV0dXJuIG9iajtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsb2NhdGlvbi5sYXR9Jmxvbj0ke2xvY2F0aW9uLmxvbn0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uTmFtZSkge1xuICBjb25zdCBvYmogPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbk5hbWUpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldERhdGEob2JqKTtcbiAgd2VhdGhlckRhdGEuY2l0eSA9IG9iai5uYW1lO1xuICB3ZWF0aGVyRGF0YS5jb3VudHJ5ID0gb2JqLmNvdW50cnk7XG4gIHByZXBhcmVEYXRhT2JqZWN0KHdlYXRoZXJEYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsImltcG9ydCBzdHJpbmdGdW5jdGlvbnMgZnJvbSAnLi9zdHJpbmdGdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBjYXJkRG9tTm9kZUZhY3RvcnkodGl0bGUsIHR5cGUpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBoMy5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF0YS1jb250YWluZXInKTtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uJyk7XG4gIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb24tY29udGFpbmVyJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdlYXRoZXJJY29uLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wMW5AMngucG5nJztcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmQod2VhdGhlckljb24pO1xuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICctLSc7XG4gIHdlYXRoZXJDb25kaXRpb24uYXBwZW5kKGljb25Db250YWluZXIsIHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gIGlmICh0eXBlID09PSAnRGFpbHknKSB7XG4gICAgY29uc3QgbWF4TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF4TWluLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlLW1heG1pbicpO1xuXG4gICAgY29uc3QgbWF4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF4RGl2LmNsYXNzTGlzdC5hZGQoJ21heCcpO1xuXG4gICAgY29uc3QgbWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29uc3QgbWF4VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWF4VmFsdWUudGV4dENvbnRlbnQgPSAnLS0nO1xuICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG5cbiAgICBjb25zdCBtYXhVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1heFVuaXQuY2xhc3NMaXN0LmFkZCgndW5pdCcpO1xuICAgIG1heFVuaXQudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgICBtYXguYXBwZW5kKG1heFZhbHVlLCBtYXhVbml0KTtcblxuICAgIGNvbnN0IG1heFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWF4VGV4dC50ZXh0Q29udGVudCA9ICdNQVgnO1xuXG4gICAgbWF4RGl2LmFwcGVuZChtYXgsIG1heFRleHQpO1xuICAgIGNvbnN0IG1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pbkRpdi5jbGFzc0xpc3QuYWRkKCdtaW4nKTtcblxuICAgIGNvbnN0IG1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IG1pblZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1pblZhbHVlLnRleHRDb250ZW50ID0gJy0tJztcbiAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuXG4gICAgY29uc3QgbWluVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtaW5Vbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQnKTtcbiAgICBtaW5Vbml0LnRleHRDb250ZW50ID0gJ8KwQyc7XG4gICAgbWluLmFwcGVuZChtaW5WYWx1ZSwgbWluVW5pdCk7XG5cbiAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1pblRleHQudGV4dENvbnRlbnQgPSAnTUlOJztcblxuICAgIG1pbkRpdi5hcHBlbmQobWluLCBtaW5UZXh0KTtcblxuICAgIG1heE1pbi5hcHBlbmQobWF4RGl2LCBtaW5EaXYpO1xuXG4gICAgY2FyZC5hcHBlbmQoaDMsIHdlYXRoZXJDb25kaXRpb24sIG1heE1pbiwgZGF0YUNvbnRhaW5lcik7XG4gIH0gZWxzZSBjYXJkLmFwcGVuZChoMywgd2VhdGhlckNvbmRpdGlvbiwgZGF0YUNvbnRhaW5lcik7XG4gIHJldHVybiBjYXJkO1xufVxuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHR5cGUpIHtcbiAgICB0aGlzLmRvbU5vZGUgPSBjYXJkRG9tTm9kZUZhY3RvcnkodGl0bGUsIHR5cGUpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgdGhpcy53ZWF0aGVyQ29uZGl0aW9uSW1nID0gdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbmRpdGlvbiBpbWcnKTtcbiAgICB0aGlzLndlYXRoZXJDb25kaXRpb25EZXNjID0gdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbmRpdGlvbiBwJyk7XG4gIH1cblxuICBhZGRJbmZvKGluZm9PYmopIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF0YScsIGluZm9PYmoudmFyTmFtZSk7XG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICB2YWx1ZS50ZXh0Q29udGVudCA9ICctLSc7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gaW5mb09iai5uYW1lO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBpbmZvT2JqLm5hbWUpO1xuICAgIGltYWdlLnNyYyA9IGluZm9PYmouaWNvbjtcbiAgICBsZWdlbmQuYXBwZW5kKGltYWdlLCBkZXNjKTtcbiAgICBkaXYuYXBwZW5kKGxlZ2VuZCwgdmFsdWUpO1xuICAgIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuZGF0YS1jb250YWluZXInKS5hcHBlbmQoZGl2KTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YSwgZGF0YUFycikge1xuICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLmR0O1xuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbkltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICB0aGlzLndlYXRoZXJDb25kaXRpb25EZXNjLnRleHRDb250ZW50ID0gc3RyaW5nRnVuY3Rpb25zLmNhcGl0YWxpemUoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICBpZiAodGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1tYXhtaW4nKSkge1xuICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5tYXggLnZhbHVlJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGEudGVtcC5tYXgpO1xuICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5taW4gLnZhbHVlJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGEudGVtcC5taW4pO1xuICAgIH1cbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcihgLmRhdGEuJHtkYXR1bS52YXJOYW1lfSAudmFsdWVgKS50ZXh0Q29udGVudCA9IGRhdGFbZGF0dW0udmFyTmFtZV0gKyBkYXR1bS51bml0O1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgZGF0YVNldCBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YlN1Yic7XG5pbXBvcnQgc3RyaW5nRnVuY3Rpb25zIGZyb20gJy4vc3RyaW5nRnVuY3Rpb25zJztcblxuY29uc3QgY3VycmVudFdlYXRoZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtd2VhdGhlcicpO1xuICBjb25zdCBjaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaXR5SW5mby5jbGFzc0xpc3QuYWRkKCdjaXR5LWluZm8nKTtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHktbmFtZScpO1xuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9ICdDaXR5JztcbiAgY29uc3QgbG9jYWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhbERhdGUudGV4dENvbnRlbnQgPSAnLS0nO1xuICBsb2NhbERhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICBjaXR5SW5mby5hcHBlbmQoY2l0eU5hbWUsIGxvY2FsRGF0ZSk7XG5cbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1pbmZvJyk7XG5cbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRlbXBlcmF0dXJlVmFsdWUudGV4dENvbnRlbnQgPSAnLS0nO1xuICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZScsICd2YWx1ZScpO1xuICBjb25zdCBzcGFuU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5TbWFsbC5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xuICBzcGFuU21hbGwudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgdGVtcGVyYXR1cmUuYXBwZW5kKHRlbXBlcmF0dXJlVmFsdWUsIHNwYW5TbWFsbCk7XG5cbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdlYXRoZXJJY29uLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wMW5AMngucG5nJztcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnLS0nO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmFwcGVuZCh3ZWF0aGVySWNvbiwgd2VhdGhlckRlc2NyaXB0aW9uKTtcblxuICBjb25zdCB3ZWF0aGVyRXh0cmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckV4dHJhLmNsYXNzTGlzdC5hZGQoJ2V4dHJhJyk7XG5cbiAgY29uc3QgYWRkSW5mbyA9IChvYmopID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF0YScsIG9iai52YXJOYW1lKTtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gJy0tJztcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSBvYmoubmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0Jywgb2JqLm5hbWUpO1xuICAgIGltYWdlLnNyYyA9IG9iai5pY29uO1xuICAgIGxlZ2VuZC5hcHBlbmQoaW1hZ2UsIGRlc2MpO1xuICAgIGRpdi5hcHBlbmQobGVnZW5kLCB2YWx1ZSk7XG4gICAgd2VhdGhlckV4dHJhLmFwcGVuZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGRhdGFBcnIgPSBbXG4gICAgZGF0YVNldC5mZWVsc0xpa2UsXG4gICAgZGF0YVNldC53aW5kU3BlZWQsXG4gICAgZGF0YVNldC5jbG91ZGluZXNzLFxuICAgIGRhdGFTZXQuaHVtaWRpdHksXG4gICAgZGF0YVNldC52aXNpYmlsaXR5LFxuICAgIGRhdGFTZXQudXZJbmRleCxcbiAgXTtcblxuICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgYWRkSW5mbyhkYXR1bSk7XG4gIH0pO1xuXG4gIHdlYXRoZXJJbmZvLmFwcGVuZCh0ZW1wZXJhdHVyZSwgd2VhdGhlckNvbmRpdGlvbiwgd2VhdGhlckV4dHJhKTtcbiAgY29udGFpbmVyLmFwcGVuZChjaXR5SW5mbywgd2VhdGhlckluZm8pO1xuXG4gIHB1YlN1Yi5zdWJzY3JpYmUoJ25ld0RhdGEnLCAoZGF0YSkgPT4ge1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gZGF0YS5jaXR5O1xuICAgIGxvY2FsRGF0ZS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5kdDtcbiAgICB0ZW1wZXJhdHVyZVZhbHVlLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcCk7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBzdHJpbmdGdW5jdGlvbnMuY2FwaXRhbGl6ZShkYXRhXG4gICAgICAuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLmRhdGEuJHtkYXR1bS52YXJOYW1lfSAudmFsdWVgKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudFtkYXR1bS52YXJOYW1lXSArIGRhdHVtLnVuaXQ7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50V2VhdGhlcjtcbiIsImltcG9ydCBUSEVSTU9NRVRFUiBmcm9tICcuL2ljb25zL3dlYXRoZXIvdGhlcm1vbWV0ZXIuc3ZnJztcbmltcG9ydCBIVU1JRElUWSBmcm9tICcuL2ljb25zL3dlYXRoZXIvaHVtaWRpdHkuc3ZnJztcbmltcG9ydCBXSU5EX1NQRUVEIGZyb20gJy4vaWNvbnMvd2VhdGhlci93aW5kLXNwZWVkLnN2Zyc7XG5pbXBvcnQgQ0xPVURJTkVTUyBmcm9tICcuL2ljb25zL3dlYXRoZXIvY2xvdWRpbmVzcy5zdmcnO1xuaW1wb3J0IFNVTlJJU0UgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3N1bnJpc2Uuc3ZnJztcbmltcG9ydCBTVU5TRVQgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3N1bnNldC5zdmcnO1xuaW1wb3J0IFVWX0lOREVYIGZyb20gJy4vaWNvbnMvd2VhdGhlci91di1pbmRleC5zdmcnO1xuaW1wb3J0IFZJU0lCSUxJVFkgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3Zpc2liaWxpdHkuc3ZnJztcbmltcG9ydCBSQUlOX1BST0JBQklMSVRZIGZyb20gJy4vaWNvbnMvd2VhdGhlci9yYWluLXByb2JhYmlsaXR5LnN2Zyc7XG5cbmZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgaWNvbiwgdmFyTmFtZSwgdW5pdCkge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgaWNvbixcbiAgICB2YXJOYW1lLFxuICAgIHVuaXQsXG4gIH07XG59XG5cbmNvbnN0IGRhdGFTZXQgPSB7XG4gIHRlbXBlcmF0dXJlOiBmYWN0b3J5KCdUZW1wZXJhdHVyZScsIFRIRVJNT01FVEVSLCAndGVtcCcsICfCsEMnKSxcbiAgcmFpblByb2JhYmlsaXR5OiBmYWN0b3J5KCdSYWluJywgUkFJTl9QUk9CQUJJTElUWSwgJ3BvcCcsICclJyksXG4gIGZlZWxzTGlrZTogZmFjdG9yeSgnRmVlbHMgbGlrZScsIFRIRVJNT01FVEVSLCAnZmVlbHNfbGlrZScsICfCsEMnKSxcbiAgd2luZFNwZWVkOiBmYWN0b3J5KCdXaW5kIHNwZWVkJywgV0lORF9TUEVFRCwgJ3dpbmRfc3BlZWQnLCAnIG0vcycpLFxuICBjbG91ZGluZXNzOiBmYWN0b3J5KCdDbG91ZGluZXNzJywgQ0xPVURJTkVTUywgJ2Nsb3VkcycsICclJyksXG4gIGh1bWlkaXR5OiBmYWN0b3J5KCdIdW1pZGl0eScsIEhVTUlESVRZLCAnaHVtaWRpdHknLCAnJScpLFxuICBzdW5yaXNlOiBmYWN0b3J5KCdTdW5yaXNlJywgU1VOUklTRSwgJ3N1bnJpc2UnLCAnJyksXG4gIHN1bnNldDogZmFjdG9yeSgnU3Vuc2V0JywgU1VOU0VULCAnc3Vuc2V0JywgJycpLFxuICB1dkluZGV4OiBmYWN0b3J5KCdVViBpbmRleCcsIFVWX0lOREVYLCAndXZpJywgJycpLFxuICB2aXNpYmlsaXR5OiBmYWN0b3J5KCdWaXNpYmlsaXR5JywgVklTSUJJTElUWSwgJ3Zpc2liaWxpdHknLCAnIG0nKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTZXQ7XG4iLCJpbXBvcnQgYWRkRGF0ZVN0cmluZ3MgZnJvbSAnLi9kYXRlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gY29udmVydFBvcFRvUGVyY2VudGFnZShvYmopIHtcbiAgb2JqLmRhaWx5LmZvckVhY2goKGQpID0+IHtcbiAgICBjb25zdCBkYXkgPSBkO1xuICAgIGRheS5wb3AgKj0gMTAwO1xuICB9KTtcbiAgb2JqLmhvdXJseS5mb3JFYWNoKChoKSA9PiB7XG4gICAgY29uc3QgaG91ciA9IGg7XG4gICAgaG91ci5wb3AgKj0gMTAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZURhdGFPYmplY3Qobykge1xuICBjb25zdCBvYmogPSBvO1xuICBhZGREYXRlU3RyaW5ncyhvYmopO1xuICBjb252ZXJ0UG9wVG9QZXJjZW50YWdlKG9iaik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByZXBhcmVEYXRhT2JqZWN0O1xuIiwiZnVuY3Rpb24gY29udmVydEN1cnJlbnREYXRlKGMsIHRpbWV6b25lLCBsb2NhbGUgPSAnZW4tVUsnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9O1xuICBjb25zdCBjdXJyZW50ID0gYztcbiAgY3VycmVudC5kdCA9IG5ldyBEYXRlKGN1cnJlbnQuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGFpbHlEYXRlcyhkYWlseSwgdGltZXpvbmUsIGxvY2FsZSA9ICdlbi1VSycpIHtcbiAgY29uc3QgZHRPcHRpb25zID0ge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gIH07XG4gIGNvbnN0IHN1bk9wdGlvbnMgPSB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgfTtcbiAgZGFpbHkuZm9yRWFjaCgoZCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkYXkgPSBkO1xuICAgIGRheS5zdW5yaXNlID0gbmV3IERhdGUoZGF5LnN1bnJpc2UgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHN1bk9wdGlvbnMpO1xuICAgIGRheS5zdW5zZXQgPSBuZXcgRGF0ZShkYXkuc3Vuc2V0ICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBzdW5PcHRpb25zKTtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIGRheS5kdCA9ICdUb2RheSc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRheS5kdCA9IG5ldyBEYXRlKGRheS5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgZHRPcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIb3VybHlBbmRNaW51dGVseURhdGVzKG9iaiwgdGltZXpvbmUsIGxvY2FsZSA9ICdlbi1VSycpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9O1xuICBvYmouaG91cmx5LmZvckVhY2goKGgpID0+IHtcbiAgICBjb25zdCBob3VyID0gaDtcbiAgICBob3VyLmR0ID0gbmV3IERhdGUoaG91ci5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgb3B0aW9ucyk7XG4gIH0pO1xuICBvYmoubWludXRlbHkuZm9yRWFjaCgobSkgPT4ge1xuICAgIGNvbnN0IG1pbnV0ZSA9IG07XG4gICAgbWludXRlLmR0ID0gbmV3IERhdGUobWludXRlLmR0ICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERhdGVTdHJpbmdzKG9iaikge1xuICBjb252ZXJ0Q3VycmVudERhdGUob2JqLmN1cnJlbnQsIG9iai50aW1lem9uZSk7XG4gIGNvbnZlcnREYWlseURhdGVzKG9iai5kYWlseSwgb2JqLnRpbWV6b25lKTtcbiAgY29udmVydEhvdXJseUFuZE1pbnV0ZWx5RGF0ZXMob2JqLCBvYmoudGltZXpvbmUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGREYXRlU3RyaW5ncztcbiIsImltcG9ydCBkYXRhU2V0IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmRzJztcbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJTdWInO1xuXG5mdW5jdGlvbiBmb3JlY2FzdEVsZW1lbnRGYWN0b3J5KG5hbWUpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29uc3QgZGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXRhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoaDIsIGRhdGFDb250YWluZXIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jbGFzcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIC4uLmRhdHVtKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRvbU5vZGUgPSBmb3JlY2FzdEVsZW1lbnRGYWN0b3J5KG5hbWUpO1xuICAgIHRoaXMuZGF0YUFyciA9IFsuLi5kYXR1bV07XG4gICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgIHRoaXMubnVtYmVyT2ZDYXJkcyA9ICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRoaXMubmFtZSkge1xuICAgICAgICBjYXNlICdEYWlseSc6XG4gICAgICAgICAgcmV0dXJuIDg7XG4gICAgICAgIGNhc2UgJ0hvdXJseSc6XG4gICAgICAgICAgcmV0dXJuIDQ4O1xuICAgICAgICBjYXNlICdNaW51dGVseSc6XG4gICAgICAgICAgcmV0dXJuIDYxO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiA0O1xuICAgICAgfVxuICAgIH0pKCk7XG4gICAgcHViU3ViLnN1YnNjcmliZSgnbmV3RGF0YScsIHRoaXMudXBkYXRlQ2FyZHMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkNhcmRzOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2FyZHNbaV0gPSBuZXcgQ2FyZCgnVGl0bGUnLCB0aGlzLm5hbWUpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRhdGFBcnIubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5jYXJkc1tpXS5hZGRJbmZvKHRoaXMuZGF0YUFycltqXSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJykuYXBwZW5kKHRoaXMuY2FyZHNbaV0uZG9tTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2FyZHMoZGF0YSkge1xuICAgIGNvbnN0IHRoaXNEYXRhID0gZGF0YVt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgY2FyZC51cGRhdGVEYXRhKHRoaXNEYXRhW2luZGV4XSwgdGhpcy5kYXRhQXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBkYWlseSA9IG5ldyBGb3JlY2FzdCgnRGFpbHknLCBkYXRhU2V0LnN1bnJpc2UsIGRhdGFTZXQuc3Vuc2V0KTtcbmNvbnN0IGhvdXJseSA9IG5ldyBGb3JlY2FzdCgnSG91cmx5JywgZGF0YVNldC50ZW1wZXJhdHVyZSwgZGF0YVNldC5yYWluUHJvYmFiaWxpdHksIGRhdGFTZXQuY2xvdWRpbmVzcywgZGF0YVNldC5odW1pZGl0eSk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgZGFpbHksIGhvdXJseSB9O1xuIiwiaW1wb3J0IFNFQVJDSF9JQ09OIGZyb20gJy4vaWNvbnMvc2VhcmNoLnN2Zyc7XG5pbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9hcGlIYW5kbGVyJztcbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJTdWInO1xuXG5jb25zdCBzZWFyY2hCYXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXInKTtcbiAgY29uc3Qgc2VhcmNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBzZWFyY2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWFyY2gtaW5wdXQnKTtcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWFyY2hJY29uLnNyYyA9IFNFQVJDSF9JQ09OO1xuICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgc2VhcmNoTGFiZWwuYXBwZW5kKHNlYXJjaEljb24pO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaC1pbnB1dCc7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQ2l0eSBuYW1lJyk7XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xuICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnR28hJztcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VhcmNoSW5wdXQudmFsdWUpIHJldHVybjtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKHNlYXJjaElucHV0LnZhbHVlKTtcbiAgICBwdWJTdWIucHVibGlzaCgnbmV3RGF0YScsIHdlYXRoZXJEYXRhKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmQoc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuY29uc3QgaGVhZGVyID0gKCgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnd2VhdGhlciBhcHAnO1xuICBjb250YWluZXIuYXBwZW5kKGgxLCBzZWFyY2hCYXIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IGN1cnJlbnRXZWF0aGVyIGZyb20gJy4vY3VycmVudFdlYXRoZXInO1xuaW1wb3J0IGZvcmVjYXN0IGZyb20gJy4vZm9yZWNhc3QnO1xuXG5jb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtY29udGFpbmVyJyk7XG5cbmNvbnN0IG1haW5TZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5hcHBlbmQoY3VycmVudFdlYXRoZXIpO1xuICBtYWluLmFwcGVuZChmb3JlY2FzdENvbnRhaW5lcik7XG4gIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZChmb3JlY2FzdC5kYWlseS5kb21Ob2RlLCBmb3JlY2FzdC5ob3VybHkuZG9tTm9kZSk7XG4gIHJldHVybiBtYWluO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpblNlY3Rpb247XG4iLCJpbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBtYWluU2VjdGlvbiBmcm9tICcuL21haW5TZWN0aW9uJztcbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJTdWInO1xuaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vYXBpSGFuZGxlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsIG1haW5TZWN0aW9uKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgnbG9uZG9uJyk7XG4gIHB1YlN1Yi5wdWJsaXNoKCduZXdEYXRhJywgd2VhdGhlckRhdGEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcbiIsImNvbnN0IGV2ZW50cyA9IHt9O1xuXG5mdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBmKSB7XG4gIGlmICghZXZlbnRzW2V2ZW50TmFtZV0pIGV2ZW50c1tldmVudE5hbWVdID0gW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZik7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGYpID0+IHtcbiAgICAgIGYoZGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmKSB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXS5pbmNsdWRlcyhmKSkgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IHN1YnNjcmliZSwgcHVibGlzaCwgdW5zdWJzY3JpYmUgfTtcbiIsImZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykgcmV0dXJuIHN0cjtcbiAgcmV0dXJuIChzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgY2FwaXRhbGl6ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZUxvYWQnO1xuXG5wYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9