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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 16px;\n    --cards-color: #222844;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to right bottom, #3d4564, #424b70, #47507c, #4d5688, #545b94);\n    color: #ffffff;\n}\n\nh1 {\n    font-size: 1.2rem;\n    font-family: 'Comfortaa', cursive;\n    letter-spacing: 2px;\n    cursor: pointer;\n    color: #6FFACC;\n}\n\nheader {\n    padding: 16px 24px 8px;\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.search-bar input {\n    padding: 4px 8px 4px 32px;\n    color: white;\n    font-size: 1rem;\n    border-radius: 16px;\n    border: 2px solid white;\n    width: 100%;\n    background-color: transparent;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n.search-bar {\n    position: relative;\n    flex: 1;\n    max-width: 300px;\n}\n\n.search-bar label {\n    height: 16px;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.search-bar .icon {\n    height: 100%;\n    position: absolute;\n}\n\n.search-bar button {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    border: none;\n    background-color: transparent;\n    color: #6FFACC;\n    font-weight: 700;\n    cursor: pointer;\n}\n\nmain {\n    padding: 32px 64px;\n    justify-content: center;\n    flex: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 400px 1fr;\n    column-gap: 64px;\n    row-gap: 16px;\n}\n\n.current-weather {\n    padding: 32px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--cards-color);\n    border-radius: 8px;\n    grid-row: 1 / -1;\n}\n\n.current-weather .city-info {\n    text-align: center;\n}\n\n.current-weather .city-name {\n    font-size: 3rem;\n    color: #6FFACC;\n}\n\n.weather-info {\n    margin-top: 24px;\n}\n\n.weather-info .temperature {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.weather-info .temperature .small {\n    font-size: 1.5rem;\n    position: relative;\n    bottom: 32px;\n}\n\n.extra {\n    margin-top: 24px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    justify-items: center;\n    font-size: 1rem;\n    gap: 32px;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data img {\n    width: 32px;\n}\n\n.weather-condition {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-condition img {\n    width: 84px;\n}\n\n.card-container {\n    display: flex;\n    gap: 24px;\n    flex: 1;\n}\n\n.card {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    text-align: center;\n    background-color: var(--cards-color);\n    border-radius: 16px;\n    justify-content: center;\n}\n\n.card h3 {\n    font-size: 1.2rem;\n}\n\n.card,\n.card p {\n    font-size: 0.9rem;\n}\n\n.forecast {\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card .data-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    justify-content: center;\n    row-gap: 16px;\n    margin-top: 16px;\n}\n\n.forecast h2 {\n    margin-bottom: 8px;\n}\n\n.card .condition-container {\n    width: 64px;\n    height: 32px;\n    overflow: hidden;\n    position: relative;\n    margin-top: 16px;\n}\n\n.card .weather-condition img {\n    width: 64px;\n    object-fit: scale-down;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.forecast .temperature-maxmin {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,+FAA+F;IAC/F,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,2BAA2B;IAC3B,YAAY;IACZ,6BAA6B;IAC7B,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,OAAO;IACP,aAAa;IACb,2BAA2B;IAC3B,gCAAgC;IAChC,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,4DAA4D;IAC5D,qBAAqB;IACrB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;IACT,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,kBAAkB;IAClB,oCAAoC;IACpC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,uBAAuB;IACvB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Montserrat:wght@300&family=Poppins:wght@300&display=swap');\n\n:root {\n    font-size: 16px;\n    --cards-color: #222844;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to right bottom, #3d4564, #424b70, #47507c, #4d5688, #545b94);\n    color: #ffffff;\n}\n\nh1 {\n    font-size: 1.2rem;\n    font-family: 'Comfortaa', cursive;\n    letter-spacing: 2px;\n    cursor: pointer;\n    color: #6FFACC;\n}\n\nheader {\n    padding: 16px 24px 8px;\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.search-bar input {\n    padding: 4px 8px 4px 32px;\n    color: white;\n    font-size: 1rem;\n    border-radius: 16px;\n    border: 2px solid white;\n    width: 100%;\n    background-color: transparent;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n.search-bar {\n    position: relative;\n    flex: 1;\n    max-width: 300px;\n}\n\n.search-bar label {\n    height: 16px;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.search-bar .icon {\n    height: 100%;\n    position: absolute;\n}\n\n.search-bar button {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    border: none;\n    background-color: transparent;\n    color: #6FFACC;\n    font-weight: 700;\n    cursor: pointer;\n}\n\nmain {\n    padding: 32px 64px;\n    justify-content: center;\n    flex: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 400px 1fr;\n    column-gap: 64px;\n    row-gap: 16px;\n}\n\n.current-weather {\n    padding: 32px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--cards-color);\n    border-radius: 8px;\n    grid-row: 1 / -1;\n}\n\n.current-weather .city-info {\n    text-align: center;\n}\n\n.current-weather .city-name {\n    font-size: 3rem;\n    color: #6FFACC;\n}\n\n.weather-info {\n    margin-top: 24px;\n}\n\n.weather-info .temperature {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.weather-info .temperature .small {\n    font-size: 1.5rem;\n    position: relative;\n    bottom: 32px;\n}\n\n.extra {\n    margin-top: 24px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    justify-items: center;\n    font-size: 1rem;\n    gap: 32px;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data img {\n    width: 32px;\n}\n\n.weather-condition {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-condition img {\n    width: 84px;\n}\n\n.card-container {\n    display: flex;\n    gap: 24px;\n    flex: 1;\n}\n\n.card {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    text-align: center;\n    background-color: var(--cards-color);\n    border-radius: 16px;\n    justify-content: center;\n}\n\n.card h3 {\n    font-size: 1.2rem;\n}\n\n.card,\n.card p {\n    font-size: 0.9rem;\n}\n\n.forecast {\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card .data-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    justify-content: center;\n    row-gap: 16px;\n    margin-top: 16px;\n}\n\n.forecast h2 {\n    margin-bottom: 8px;\n}\n\n.card .condition-container {\n    width: 64px;\n    height: 32px;\n    overflow: hidden;\n    position: relative;\n    margin-top: 16px;\n}\n\n.card .weather-condition img {\n    width: 64px;\n    object-fit: scale-down;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.forecast .temperature-maxmin {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n"],"sourceRoot":""}]);
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
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`);
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
    _pubSub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('newData', this.updateCards.bind(this));
    this.init();
  }

  init() {
    for (let i = 0; i < 4; i += 1) {
      this.cards[i] = new _cards__WEBPACK_IMPORTED_MODULE_1__["default"]('Title', this.name);
      for (let j = 0; j < this.dataArr.length; j += 1) {
        this.cards[i].addInfo(this.dataArr[j]);
      }
      this.domNode.querySelector('.card-container').append(this.cards[i].domNode);
    }
  }

  updateCards(data) {
    this.cards.forEach((card, index) => {
      card.updateData(data[this.name.toLowerCase()][index], this.dataArr);
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
  searchInput.setAttribute('placeholder', 'Search');
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



const mainSection = (() => {
  const main = document.createElement('main');
  main.append(_currentWeather__WEBPACK_IMPORTED_MODULE_0__["default"]);
  main.append(_forecast__WEBPACK_IMPORTED_MODULE_1__["default"].daily.domNode, _forecast__WEBPACK_IMPORTED_MODULE_1__["default"].hourly.domNode);
  return main;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSection);


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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _mainSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainSection */ "./src/mainSection.js");




document.body.append(_header__WEBPACK_IMPORTED_MODULE_1__["default"], _mainSection__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsaUNBQWlDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25CbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTDlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNTO0FBQ1U7O0FBRXhDLHFCQUFxQiwrQ0FBTSxFQUFFLG9EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGFTdHVmZi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3RyaW5nRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWE6d2dodEA1MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC0tY2FyZHMtY29sb3I6ICMyMjI4NDQ7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzNkNDU2NCwgIzQyNGI3MCwgIzQ3NTA3YywgIzRkNTY4OCwgIzU0NWI5NCk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDE2cHggMjRweCA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHggNHB4IDMycHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJhciBsYWJlbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA4cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5zZWFyY2gtYmFyIC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA4cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjNkZGQUNDO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAzMnB4IDY0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHggMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiA2NHB4O1xcbiAgICByb3ctZ2FwOiAxNnB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmRzLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LWluZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxufVxcblxcbi53ZWF0aGVyLWluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIC50ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIC50ZW1wZXJhdHVyZSAuc21hbGwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDMycHg7XFxufVxcblxcbi5leHRyYSB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdhcDogMzJweDtcXG59XFxuXFxuLmRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSAuZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkcy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY2FyZCxcXG4uY2FyZCBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmZvcmVjYXN0IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uY2FyZCAuY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmNhcmQgLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uZm9yZWNhc3QgLnRlbXBlcmF0dXJlLW1heG1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsK0ZBQStGO0lBQy9GLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNERBQTREO0lBQzVELHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsT0FBTztBQUNYOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRANTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAtLWNhcmRzLWNvbG9yOiAjMjIyODQ0O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMzZDQ1NjQsICM0MjRiNzAsICM0NzUwN2MsICM0ZDU2ODgsICM1NDViOTQpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjNkZGQUNDO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCAzMnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgbGFiZWwge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogOHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4uc2VhcmNoLWJhciAuaWNvbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogOHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMzJweCA2NHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDFmcjtcXG4gICAgY29sdW1uLWdhcDogNjRweDtcXG4gICAgcm93LWdhcDogMTZweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkcy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuY2l0eS1pbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LW5hbWUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiAjNkZGQUNDO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLndlYXRoZXItaW5mbyAudGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItaW5mbyAudGVtcGVyYXR1cmUgLnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uZXh0cmEge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5kYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGEgLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGEgaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDg0cHg7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZHMtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNhcmQsXFxuLmNhcmQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkIC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5mb3JlY2FzdCBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNhcmQgLmNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5jYXJkIC53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmZvcmVjYXN0IC50ZW1wZXJhdHVyZS1tYXhtaW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcmVwYXJlRGF0YU9iamVjdCBmcm9tICcuL2RhdGFTdHVmZic7XG5cbmNvbnN0IEFQSV9LRVkgPSAnYjhiZWRjMjExMDAzMDEwMWRkOWM4ZDBjNzRmMjMzNmMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbk5hbWUpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uTmFtZX0mbGltaXQ9MSZhcHBpZD0ke0FQSV9LRVl9YCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBuYW1lOiBqc29uWzBdLm5hbWUsXG4gICAgY291bnRyeToganNvblswXS5jb3VudHJ5LFxuICAgIGxhdDoganNvblswXS5sYXQsXG4gICAgbG9uOiBqc29uWzBdLmxvbixcbiAgfTtcbiAgcmV0dXJuIG9iajtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsb2NhdGlvbi5sYXR9Jmxvbj0ke2xvY2F0aW9uLmxvbn0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uTmFtZSkge1xuICBjb25zdCBvYmogPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbk5hbWUpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldERhdGEob2JqKTtcbiAgd2VhdGhlckRhdGEuY2l0eSA9IG9iai5uYW1lO1xuICB3ZWF0aGVyRGF0YS5jb3VudHJ5ID0gb2JqLmNvdW50cnk7XG4gIHByZXBhcmVEYXRhT2JqZWN0KHdlYXRoZXJEYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsImltcG9ydCBzdHJpbmdGdW5jdGlvbnMgZnJvbSAnLi9zdHJpbmdGdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBjYXJkRG9tTm9kZUZhY3RvcnkodGl0bGUsIHR5cGUpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBoMy5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF0YS1jb250YWluZXInKTtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uJyk7XG4gIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb24tY29udGFpbmVyJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdlYXRoZXJJY29uLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wMW5AMngucG5nJztcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmQod2VhdGhlckljb24pO1xuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICctLSc7XG4gIHdlYXRoZXJDb25kaXRpb24uYXBwZW5kKGljb25Db250YWluZXIsIHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gIGlmICh0eXBlID09PSAnRGFpbHknKSB7XG4gICAgY29uc3QgbWF4TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF4TWluLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlLW1heG1pbicpO1xuXG4gICAgY29uc3QgbWF4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF4RGl2LmNsYXNzTGlzdC5hZGQoJ21heCcpO1xuXG4gICAgY29uc3QgbWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29uc3QgbWF4VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWF4VmFsdWUudGV4dENvbnRlbnQgPSAnLS0nO1xuICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG5cbiAgICBjb25zdCBtYXhVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1heFVuaXQuY2xhc3NMaXN0LmFkZCgndW5pdCcpO1xuICAgIG1heFVuaXQudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgICBtYXguYXBwZW5kKG1heFZhbHVlLCBtYXhVbml0KTtcblxuICAgIGNvbnN0IG1heFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWF4VGV4dC50ZXh0Q29udGVudCA9ICdNQVgnO1xuXG4gICAgbWF4RGl2LmFwcGVuZChtYXgsIG1heFRleHQpO1xuICAgIGNvbnN0IG1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pbkRpdi5jbGFzc0xpc3QuYWRkKCdtaW4nKTtcblxuICAgIGNvbnN0IG1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IG1pblZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1pblZhbHVlLnRleHRDb250ZW50ID0gJy0tJztcbiAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuXG4gICAgY29uc3QgbWluVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtaW5Vbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQnKTtcbiAgICBtaW5Vbml0LnRleHRDb250ZW50ID0gJ8KwQyc7XG4gICAgbWluLmFwcGVuZChtaW5WYWx1ZSwgbWluVW5pdCk7XG5cbiAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1pblRleHQudGV4dENvbnRlbnQgPSAnTUlOJztcblxuICAgIG1pbkRpdi5hcHBlbmQobWluLCBtaW5UZXh0KTtcblxuICAgIG1heE1pbi5hcHBlbmQobWF4RGl2LCBtaW5EaXYpO1xuXG4gICAgY2FyZC5hcHBlbmQoaDMsIHdlYXRoZXJDb25kaXRpb24sIG1heE1pbiwgZGF0YUNvbnRhaW5lcik7XG4gIH0gZWxzZSBjYXJkLmFwcGVuZChoMywgd2VhdGhlckNvbmRpdGlvbiwgZGF0YUNvbnRhaW5lcik7XG4gIHJldHVybiBjYXJkO1xufVxuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHR5cGUpIHtcbiAgICB0aGlzLmRvbU5vZGUgPSBjYXJkRG9tTm9kZUZhY3RvcnkodGl0bGUsIHR5cGUpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgdGhpcy53ZWF0aGVyQ29uZGl0aW9uSW1nID0gdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbmRpdGlvbiBpbWcnKTtcbiAgICB0aGlzLndlYXRoZXJDb25kaXRpb25EZXNjID0gdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbmRpdGlvbiBwJyk7XG4gIH1cblxuICBhZGRJbmZvKGluZm9PYmopIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF0YScsIGluZm9PYmoudmFyTmFtZSk7XG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICB2YWx1ZS50ZXh0Q29udGVudCA9ICctLSc7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gaW5mb09iai5uYW1lO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBpbmZvT2JqLm5hbWUpO1xuICAgIGltYWdlLnNyYyA9IGluZm9PYmouaWNvbjtcbiAgICBsZWdlbmQuYXBwZW5kKGltYWdlLCBkZXNjKTtcbiAgICBkaXYuYXBwZW5kKGxlZ2VuZCwgdmFsdWUpO1xuICAgIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuZGF0YS1jb250YWluZXInKS5hcHBlbmQoZGl2KTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YSwgZGF0YUFycikge1xuICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLmR0O1xuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbkltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICB0aGlzLndlYXRoZXJDb25kaXRpb25EZXNjLnRleHRDb250ZW50ID0gc3RyaW5nRnVuY3Rpb25zLmNhcGl0YWxpemUoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICBpZiAodGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1tYXhtaW4nKSkge1xuICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5tYXggLnZhbHVlJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGEudGVtcC5tYXgpO1xuICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5taW4gLnZhbHVlJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGEudGVtcC5taW4pO1xuICAgIH1cbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcihgLmRhdGEuJHtkYXR1bS52YXJOYW1lfSAudmFsdWVgKS50ZXh0Q29udGVudCA9IGRhdGFbZGF0dW0udmFyTmFtZV0gKyBkYXR1bS51bml0O1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgZGF0YVNldCBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YlN1Yic7XG5pbXBvcnQgc3RyaW5nRnVuY3Rpb25zIGZyb20gJy4vc3RyaW5nRnVuY3Rpb25zJztcblxuY29uc3QgY3VycmVudFdlYXRoZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtd2VhdGhlcicpO1xuICBjb25zdCBjaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaXR5SW5mby5jbGFzc0xpc3QuYWRkKCdjaXR5LWluZm8nKTtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHktbmFtZScpO1xuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9ICdDaXR5JztcbiAgY29uc3QgbG9jYWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhbERhdGUudGV4dENvbnRlbnQgPSAnLS0nO1xuICBsb2NhbERhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICBjaXR5SW5mby5hcHBlbmQoY2l0eU5hbWUsIGxvY2FsRGF0ZSk7XG5cbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1pbmZvJyk7XG5cbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRlbXBlcmF0dXJlVmFsdWUudGV4dENvbnRlbnQgPSAnLS0nO1xuICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZScsICd2YWx1ZScpO1xuICBjb25zdCBzcGFuU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5TbWFsbC5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xuICBzcGFuU21hbGwudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgdGVtcGVyYXR1cmUuYXBwZW5kKHRlbXBlcmF0dXJlVmFsdWUsIHNwYW5TbWFsbCk7XG5cbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdlYXRoZXJJY29uLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wMW5AMngucG5nJztcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnLS0nO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmFwcGVuZCh3ZWF0aGVySWNvbiwgd2VhdGhlckRlc2NyaXB0aW9uKTtcblxuICBjb25zdCB3ZWF0aGVyRXh0cmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckV4dHJhLmNsYXNzTGlzdC5hZGQoJ2V4dHJhJyk7XG5cbiAgY29uc3QgYWRkSW5mbyA9IChvYmopID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF0YScsIG9iai52YXJOYW1lKTtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gJy0tJztcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSBvYmoubmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0Jywgb2JqLm5hbWUpO1xuICAgIGltYWdlLnNyYyA9IG9iai5pY29uO1xuICAgIGxlZ2VuZC5hcHBlbmQoaW1hZ2UsIGRlc2MpO1xuICAgIGRpdi5hcHBlbmQobGVnZW5kLCB2YWx1ZSk7XG4gICAgd2VhdGhlckV4dHJhLmFwcGVuZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGRhdGFBcnIgPSBbXG4gICAgZGF0YVNldC5mZWVsc0xpa2UsXG4gICAgZGF0YVNldC53aW5kU3BlZWQsXG4gICAgZGF0YVNldC5jbG91ZGluZXNzLFxuICAgIGRhdGFTZXQuaHVtaWRpdHksXG4gICAgZGF0YVNldC52aXNpYmlsaXR5LFxuICAgIGRhdGFTZXQudXZJbmRleCxcbiAgXTtcblxuICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgYWRkSW5mbyhkYXR1bSk7XG4gIH0pO1xuXG4gIHdlYXRoZXJJbmZvLmFwcGVuZCh0ZW1wZXJhdHVyZSwgd2VhdGhlckNvbmRpdGlvbiwgd2VhdGhlckV4dHJhKTtcbiAgY29udGFpbmVyLmFwcGVuZChjaXR5SW5mbywgd2VhdGhlckluZm8pO1xuXG4gIHB1YlN1Yi5zdWJzY3JpYmUoJ25ld0RhdGEnLCAoZGF0YSkgPT4ge1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gZGF0YS5jaXR5O1xuICAgIGxvY2FsRGF0ZS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5kdDtcbiAgICB0ZW1wZXJhdHVyZVZhbHVlLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcCk7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBzdHJpbmdGdW5jdGlvbnMuY2FwaXRhbGl6ZShkYXRhXG4gICAgICAuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLmRhdGEuJHtkYXR1bS52YXJOYW1lfSAudmFsdWVgKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudFtkYXR1bS52YXJOYW1lXSArIGRhdHVtLnVuaXQ7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50V2VhdGhlcjtcbiIsImltcG9ydCBUSEVSTU9NRVRFUiBmcm9tICcuL2ljb25zL3dlYXRoZXIvdGhlcm1vbWV0ZXIuc3ZnJztcbmltcG9ydCBIVU1JRElUWSBmcm9tICcuL2ljb25zL3dlYXRoZXIvaHVtaWRpdHkuc3ZnJztcbmltcG9ydCBXSU5EX1NQRUVEIGZyb20gJy4vaWNvbnMvd2VhdGhlci93aW5kLXNwZWVkLnN2Zyc7XG5pbXBvcnQgQ0xPVURJTkVTUyBmcm9tICcuL2ljb25zL3dlYXRoZXIvY2xvdWRpbmVzcy5zdmcnO1xuaW1wb3J0IFNVTlJJU0UgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3N1bnJpc2Uuc3ZnJztcbmltcG9ydCBTVU5TRVQgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3N1bnNldC5zdmcnO1xuaW1wb3J0IFVWX0lOREVYIGZyb20gJy4vaWNvbnMvd2VhdGhlci91di1pbmRleC5zdmcnO1xuaW1wb3J0IFZJU0lCSUxJVFkgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3Zpc2liaWxpdHkuc3ZnJztcbmltcG9ydCBSQUlOX1BST0JBQklMSVRZIGZyb20gJy4vaWNvbnMvd2VhdGhlci9yYWluLXByb2JhYmlsaXR5LnN2Zyc7XG5cbmZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgaWNvbiwgdmFyTmFtZSwgdW5pdCkge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgaWNvbixcbiAgICB2YXJOYW1lLFxuICAgIHVuaXQsXG4gIH07XG59XG5cbmNvbnN0IGRhdGFTZXQgPSB7XG4gIHRlbXBlcmF0dXJlOiBmYWN0b3J5KCdUZW1wZXJhdHVyZScsIFRIRVJNT01FVEVSLCAndGVtcCcsICfCsEMnKSxcbiAgcmFpblByb2JhYmlsaXR5OiBmYWN0b3J5KCdSYWluJywgUkFJTl9QUk9CQUJJTElUWSwgJ3BvcCcsICclJyksXG4gIGZlZWxzTGlrZTogZmFjdG9yeSgnRmVlbHMgbGlrZScsIFRIRVJNT01FVEVSLCAnZmVlbHNfbGlrZScsICfCsEMnKSxcbiAgd2luZFNwZWVkOiBmYWN0b3J5KCdXaW5kIHNwZWVkJywgV0lORF9TUEVFRCwgJ3dpbmRfc3BlZWQnLCAnIG0vcycpLFxuICBjbG91ZGluZXNzOiBmYWN0b3J5KCdDbG91ZGluZXNzJywgQ0xPVURJTkVTUywgJ2Nsb3VkcycsICclJyksXG4gIGh1bWlkaXR5OiBmYWN0b3J5KCdIdW1pZGl0eScsIEhVTUlESVRZLCAnaHVtaWRpdHknLCAnJScpLFxuICBzdW5yaXNlOiBmYWN0b3J5KCdTdW5yaXNlJywgU1VOUklTRSwgJ3N1bnJpc2UnLCAnJyksXG4gIHN1bnNldDogZmFjdG9yeSgnU3Vuc2V0JywgU1VOU0VULCAnc3Vuc2V0JywgJycpLFxuICB1dkluZGV4OiBmYWN0b3J5KCdVViBpbmRleCcsIFVWX0lOREVYLCAndXZpJywgJycpLFxuICB2aXNpYmlsaXR5OiBmYWN0b3J5KCdWaXNpYmlsaXR5JywgVklTSUJJTElUWSwgJ3Zpc2liaWxpdHknLCAnIG0nKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTZXQ7XG4iLCJpbXBvcnQgYWRkRGF0ZVN0cmluZ3MgZnJvbSAnLi9kYXRlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gY29udmVydFBvcFRvUGVyY2VudGFnZShvYmopIHtcbiAgb2JqLmRhaWx5LmZvckVhY2goKGQpID0+IHtcbiAgICBjb25zdCBkYXkgPSBkO1xuICAgIGRheS5wb3AgKj0gMTAwO1xuICB9KTtcbiAgb2JqLmhvdXJseS5mb3JFYWNoKChoKSA9PiB7XG4gICAgY29uc3QgaG91ciA9IGg7XG4gICAgaG91ci5wb3AgKj0gMTAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZURhdGFPYmplY3Qobykge1xuICBjb25zdCBvYmogPSBvO1xuICBhZGREYXRlU3RyaW5ncyhvYmopO1xuICBjb252ZXJ0UG9wVG9QZXJjZW50YWdlKG9iaik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByZXBhcmVEYXRhT2JqZWN0O1xuIiwiZnVuY3Rpb24gY29udmVydEN1cnJlbnREYXRlKGMsIHRpbWV6b25lLCBsb2NhbGUgPSAnZW4tVUsnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9O1xuICBjb25zdCBjdXJyZW50ID0gYztcbiAgY3VycmVudC5kdCA9IG5ldyBEYXRlKGN1cnJlbnQuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGFpbHlEYXRlcyhkYWlseSwgdGltZXpvbmUsIGxvY2FsZSA9ICdlbi1VSycpIHtcbiAgY29uc3QgZHRPcHRpb25zID0ge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gIH07XG4gIGNvbnN0IHN1bk9wdGlvbnMgPSB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgfTtcbiAgZGFpbHkuZm9yRWFjaCgoZCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkYXkgPSBkO1xuICAgIGRheS5zdW5yaXNlID0gbmV3IERhdGUoZGF5LnN1bnJpc2UgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHN1bk9wdGlvbnMpO1xuICAgIGRheS5zdW5zZXQgPSBuZXcgRGF0ZShkYXkuc3Vuc2V0ICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBzdW5PcHRpb25zKTtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIGRheS5kdCA9ICdUb2RheSc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRheS5kdCA9IG5ldyBEYXRlKGRheS5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgZHRPcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIb3VybHlBbmRNaW51dGVseURhdGVzKG9iaiwgdGltZXpvbmUsIGxvY2FsZSA9ICdlbi1VSycpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9O1xuICBvYmouaG91cmx5LmZvckVhY2goKGgpID0+IHtcbiAgICBjb25zdCBob3VyID0gaDtcbiAgICBob3VyLmR0ID0gbmV3IERhdGUoaG91ci5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgb3B0aW9ucyk7XG4gIH0pO1xuICBvYmoubWludXRlbHkuZm9yRWFjaCgobSkgPT4ge1xuICAgIGNvbnN0IG1pbnV0ZSA9IG07XG4gICAgbWludXRlLmR0ID0gbmV3IERhdGUobWludXRlLmR0ICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERhdGVTdHJpbmdzKG9iaikge1xuICBjb252ZXJ0Q3VycmVudERhdGUob2JqLmN1cnJlbnQsIG9iai50aW1lem9uZSk7XG4gIGNvbnZlcnREYWlseURhdGVzKG9iai5kYWlseSwgb2JqLnRpbWV6b25lKTtcbiAgY29udmVydEhvdXJseUFuZE1pbnV0ZWx5RGF0ZXMob2JqLCBvYmoudGltZXpvbmUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGREYXRlU3RyaW5ncztcbiIsImltcG9ydCBkYXRhU2V0IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmRzJztcbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJTdWInO1xuXG5mdW5jdGlvbiBmb3JlY2FzdEVsZW1lbnRGYWN0b3J5KG5hbWUpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29uc3QgZGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXRhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoaDIsIGRhdGFDb250YWluZXIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jbGFzcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIC4uLmRhdHVtKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRvbU5vZGUgPSBmb3JlY2FzdEVsZW1lbnRGYWN0b3J5KG5hbWUpO1xuICAgIHRoaXMuZGF0YUFyciA9IFsuLi5kYXR1bV07XG4gICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ25ld0RhdGEnLCB0aGlzLnVwZGF0ZUNhcmRzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jYXJkc1tpXSA9IG5ldyBDYXJkKCdUaXRsZScsIHRoaXMubmFtZSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGF0YUFyci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmNhcmRzW2ldLmFkZEluZm8odGhpcy5kYXRhQXJyW2pdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKS5hcHBlbmQodGhpcy5jYXJkc1tpXS5kb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDYXJkcyhkYXRhKSB7XG4gICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgY2FyZC51cGRhdGVEYXRhKGRhdGFbdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCldW2luZGV4XSwgdGhpcy5kYXRhQXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBkYWlseSA9IG5ldyBGb3JlY2FzdCgnRGFpbHknLCBkYXRhU2V0LnN1bnJpc2UsIGRhdGFTZXQuc3Vuc2V0KTtcbmNvbnN0IGhvdXJseSA9IG5ldyBGb3JlY2FzdCgnSG91cmx5JywgZGF0YVNldC50ZW1wZXJhdHVyZSwgZGF0YVNldC5yYWluUHJvYmFiaWxpdHksIGRhdGFTZXQuY2xvdWRpbmVzcywgZGF0YVNldC5odW1pZGl0eSk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgZGFpbHksIGhvdXJseSB9O1xuIiwiaW1wb3J0IFNFQVJDSF9JQ09OIGZyb20gJy4vaWNvbnMvc2VhcmNoLnN2Zyc7XG5pbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSAnLi9hcGlIYW5kbGVyJztcbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJTdWInO1xuXG5jb25zdCBzZWFyY2hCYXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXInKTtcbiAgY29uc3Qgc2VhcmNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBzZWFyY2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWFyY2gtaW5wdXQnKTtcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWFyY2hJY29uLnNyYyA9IFNFQVJDSF9JQ09OO1xuICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgc2VhcmNoTGFiZWwuYXBwZW5kKHNlYXJjaEljb24pO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaC1pbnB1dCc7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoJyk7XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xuICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnR28hJztcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VhcmNoSW5wdXQudmFsdWUpIHJldHVybjtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKHNlYXJjaElucHV0LnZhbHVlKTtcbiAgICBwdWJTdWIucHVibGlzaCgnbmV3RGF0YScsIHdlYXRoZXJEYXRhKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmQoc2VhcmNoTGFiZWwsIHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuY29uc3QgaGVhZGVyID0gKCgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnd2VhdGhlciBhcHAnO1xuICBjb250YWluZXIuYXBwZW5kKGgxLCBzZWFyY2hCYXIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IGN1cnJlbnRXZWF0aGVyIGZyb20gJy4vY3VycmVudFdlYXRoZXInO1xuaW1wb3J0IGZvcmVjYXN0IGZyb20gJy4vZm9yZWNhc3QnO1xuXG5jb25zdCBtYWluU2VjdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uYXBwZW5kKGN1cnJlbnRXZWF0aGVyKTtcbiAgbWFpbi5hcHBlbmQoZm9yZWNhc3QuZGFpbHkuZG9tTm9kZSwgZm9yZWNhc3QuaG91cmx5LmRvbU5vZGUpO1xuICByZXR1cm4gbWFpbjtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5TZWN0aW9uO1xuIiwiY29uc3QgZXZlbnRzID0ge307XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGYpIHtcbiAgaWYgKCFldmVudHNbZXZlbnROYW1lXSkgZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmKTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZikgPT4ge1xuICAgICAgZihkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN1YnNjcmliZShldmVudE5hbWUsIGYpIHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdLmluY2x1ZGVzKGYpKSBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihmKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgc3Vic2NyaWJlLCBwdWJsaXNoLCB1bnN1YnNjcmliZSB9O1xuIiwiZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSByZXR1cm4gc3RyO1xuICByZXR1cm4gKHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBjYXBpdGFsaXplIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBtYWluU2VjdGlvbiBmcm9tICcuL21haW5TZWN0aW9uJztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLCBtYWluU2VjdGlvbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=