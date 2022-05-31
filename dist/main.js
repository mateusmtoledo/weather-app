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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 16px;\n    --cards-color: #222844;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to right bottom, #3d4564, #424b70, #47507c, #4d5688, #545b94);\n    color: #ffffff;\n}\n\nh1 {\n    font-size: 1.2rem;\n    font-family: 'Comfortaa', cursive;\n    letter-spacing: 2px;\n    cursor: pointer;\n    color: #6FFACC;\n}\n\nheader {\n    padding: 16px 24px 8px;\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.search-bar input {\n    padding: 4px 8px 4px 32px;\n    color: white;\n    font-size: 1rem;\n    border-radius: 16px;\n    border: 2px solid white;\n    width: 100%;\n    background-color: transparent;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n.search-bar {\n    position: relative;\n    flex: 1;\n    max-width: 300px;\n}\n\n.search-bar label {\n    height: 16px;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.search-bar .icon {\n    height: 100%;\n    position: absolute;\n}\n\n.search-bar button {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    border: none;\n    background-color: transparent;\n    color: #6FFACC;\n    font-weight: 700;\n    cursor: pointer;\n}\n\nmain {\n    padding: 64px;\n    justify-content: center;\n    flex: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 400px 1fr;\n    column-gap: 64px;\n    row-gap: 16px;\n}\n\n.current-weather {\n    padding: 32px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--cards-color);\n    border-radius: 8px;\n    grid-row: 1 / -1;\n}\n\n.current-weather .city-info {\n    text-align: center;\n}\n\n.current-weather .city-name {\n    font-size: 3rem;\n    color: #6FFACC;\n}\n\n.weather-info {\n    margin-top: 24px;\n}\n\n.weather-info .temperature {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.weather-info .temperature .small {\n    font-size: 1.5rem;\n    position: relative;\n    bottom: 32px;\n}\n\n.extra {\n    margin-top: 24px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    justify-items: center;\n    font-size: 1rem;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data img {\n    width: 32px;\n}\n\n.weather-condition {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-condition img {\n    width: 84px;\n}\n\n.card-container {\n    display: flex;\n    gap: 24px;\n    flex: 1;\n}\n\n.card {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    text-align: center;\n    background-color: var(--cards-color);\n    border-radius: 16px;\n    justify-content: center;\n}\n\n.card h3 {\n    font-size: 1.2rem;\n}\n\n.card,\n.card p {\n    font-size: 0.9rem;\n}\n\n.forecast {\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card .data-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    justify-content: center;\n    row-gap: 16px;\n    margin-top: 16px;\n}\n\n.forecast h2 {\n    margin-bottom: 8px;\n}\n\n.card .condition-container {\n    width: 64px;\n    height: 32px;\n    overflow: hidden;\n    position: relative;\n    margin-top: 16px;\n}\n\n.card .weather-condition img {\n    width: 64px;\n    object-fit: scale-down;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.forecast .temperature-maxmin {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,+FAA+F;IAC/F,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,2BAA2B;IAC3B,YAAY;IACZ,6BAA6B;IAC7B,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,OAAO;IACP,aAAa;IACb,2BAA2B;IAC3B,gCAAgC;IAChC,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,4DAA4D;IAC5D,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;IACT,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,kBAAkB;IAClB,oCAAoC;IACpC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,uBAAuB;IACvB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Montserrat:wght@300&family=Poppins:wght@300&display=swap');\n\n:root {\n    font-size: 16px;\n    --cards-color: #222844;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to right bottom, #3d4564, #424b70, #47507c, #4d5688, #545b94);\n    color: #ffffff;\n}\n\nh1 {\n    font-size: 1.2rem;\n    font-family: 'Comfortaa', cursive;\n    letter-spacing: 2px;\n    cursor: pointer;\n    color: #6FFACC;\n}\n\nheader {\n    padding: 16px 24px 8px;\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.search-bar input {\n    padding: 4px 8px 4px 32px;\n    color: white;\n    font-size: 1rem;\n    border-radius: 16px;\n    border: 2px solid white;\n    width: 100%;\n    background-color: transparent;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n.search-bar {\n    position: relative;\n    flex: 1;\n    max-width: 300px;\n}\n\n.search-bar label {\n    height: 16px;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.search-bar .icon {\n    height: 100%;\n    position: absolute;\n}\n\n.search-bar button {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    border: none;\n    background-color: transparent;\n    color: #6FFACC;\n    font-weight: 700;\n    cursor: pointer;\n}\n\nmain {\n    padding: 64px;\n    justify-content: center;\n    flex: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 400px 1fr;\n    column-gap: 64px;\n    row-gap: 16px;\n}\n\n.current-weather {\n    padding: 32px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--cards-color);\n    border-radius: 8px;\n    grid-row: 1 / -1;\n}\n\n.current-weather .city-info {\n    text-align: center;\n}\n\n.current-weather .city-name {\n    font-size: 3rem;\n    color: #6FFACC;\n}\n\n.weather-info {\n    margin-top: 24px;\n}\n\n.weather-info .temperature {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.weather-info .temperature .small {\n    font-size: 1.5rem;\n    position: relative;\n    bottom: 32px;\n}\n\n.extra {\n    margin-top: 24px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    justify-items: center;\n    font-size: 1rem;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data img {\n    width: 32px;\n}\n\n.weather-condition {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-condition img {\n    width: 84px;\n}\n\n.card-container {\n    display: flex;\n    gap: 24px;\n    flex: 1;\n}\n\n.card {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    text-align: center;\n    background-color: var(--cards-color);\n    border-radius: 16px;\n    justify-content: center;\n}\n\n.card h3 {\n    font-size: 1.2rem;\n}\n\n.card,\n.card p {\n    font-size: 0.9rem;\n}\n\n.forecast {\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card .data-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    justify-content: center;\n    row-gap: 16px;\n    margin-top: 16px;\n}\n\n.forecast h2 {\n    margin-bottom: 8px;\n}\n\n.card .condition-container {\n    width: 64px;\n    height: 32px;\n    overflow: hidden;\n    position: relative;\n    margin-top: 16px;\n}\n\n.card .weather-condition img {\n    width: 64px;\n    object-fit: scale-down;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.forecast .temperature-maxmin {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _dateFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateFunctions */ "./src/dateFunctions.js");


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
  (0,_dateFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1M7QUFDVTs7QUFFeEMscUJBQXFCLCtDQUFNLEVBQUUsb0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGlIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0ZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcHViU3ViLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0cmluZ0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRANTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAtLWNhcmRzLWNvbG9yOiAjMjIyODQ0O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMzZDQ1NjQsICM0MjRiNzAsICM0NzUwN2MsICM0ZDU2ODgsICM1NDViOTQpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjNkZGQUNDO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCAzMnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgbGFiZWwge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogOHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4uc2VhcmNoLWJhciAuaWNvbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogOHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogNjRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDY0cHg7XFxuICAgIHJvdy1nYXA6IDE2cHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZHMtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuY2l0eS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi53ZWF0aGVyLWluZm8gLnRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWluZm8gLnRlbXBlcmF0dXJlIC5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMzJweDtcXG59XFxuXFxuLmV4dHJhIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSAuZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkcy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY2FyZCxcXG4uY2FyZCBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmZvcmVjYXN0IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uY2FyZCAuY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmNhcmQgLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uZm9yZWNhc3QgLnRlbXBlcmF0dXJlLW1heG1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHls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QkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRANTAwJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAtLWNhcmRzLWNvbG9yOiAjMjIyODQ0O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMzZDQ1NjQsICM0MjRiNzAsICM0NzUwN2MsICM0ZDU2ODgsICM1NDViOTQpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjNkZGQUNDO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4IDRweCAzMnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgbGFiZWwge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogOHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4uc2VhcmNoLWJhciAuaWNvbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogOHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogNjRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDY0cHg7XFxuICAgIHJvdy1nYXA6IDE2cHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZHMtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuY2l0eS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi53ZWF0aGVyLWluZm8gLnRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWluZm8gLnRlbXBlcmF0dXJlIC5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMzJweDtcXG59XFxuXFxuLmV4dHJhIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSAuZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkcy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY2FyZCxcXG4uY2FyZCBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmZvcmVjYXN0IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uY2FyZCAuY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmNhcmQgLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uZm9yZWNhc3QgLnRlbXBlcmF0dXJlLW1heG1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZERhdGVTdHJpbmdzIGZyb20gJy4vZGF0ZUZ1bmN0aW9ucyc7XG5cbmNvbnN0IEFQSV9LRVkgPSAnYjhiZWRjMjExMDAzMDEwMWRkOWM4ZDBjNzRmMjMzNmMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbk5hbWUpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uTmFtZX0mbGltaXQ9MSZhcHBpZD0ke0FQSV9LRVl9YCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBuYW1lOiBqc29uWzBdLm5hbWUsXG4gICAgY291bnRyeToganNvblswXS5jb3VudHJ5LFxuICAgIGxhdDoganNvblswXS5sYXQsXG4gICAgbG9uOiBqc29uWzBdLmxvbixcbiAgfTtcbiAgcmV0dXJuIG9iajtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsb2NhdGlvbi5sYXR9Jmxvbj0ke2xvY2F0aW9uLmxvbn0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uTmFtZSkge1xuICBjb25zdCBvYmogPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbk5hbWUpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldERhdGEob2JqKTtcbiAgd2VhdGhlckRhdGEuY2l0eSA9IG9iai5uYW1lO1xuICB3ZWF0aGVyRGF0YS5jb3VudHJ5ID0gb2JqLmNvdW50cnk7XG4gIGFkZERhdGVTdHJpbmdzKHdlYXRoZXJEYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsImltcG9ydCBzdHJpbmdGdW5jdGlvbnMgZnJvbSAnLi9zdHJpbmdGdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBjYXJkRG9tTm9kZUZhY3RvcnkodGl0bGUsIHR5cGUpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoMy50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBoMy5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF0YS1jb250YWluZXInKTtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uJyk7XG4gIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb24tY29udGFpbmVyJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdlYXRoZXJJY29uLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wMW5AMngucG5nJztcbiAgaWNvbkNvbnRhaW5lci5hcHBlbmQod2VhdGhlckljb24pO1xuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICctLSc7XG4gIHdlYXRoZXJDb25kaXRpb24uYXBwZW5kKGljb25Db250YWluZXIsIHdlYXRoZXJEZXNjcmlwdGlvbik7XG4gIGlmICh0eXBlID09PSAnRGFpbHknKSB7XG4gICAgY29uc3QgbWF4TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF4TWluLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlLW1heG1pbicpO1xuXG4gICAgY29uc3QgbWF4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWF4RGl2LmNsYXNzTGlzdC5hZGQoJ21heCcpO1xuXG4gICAgY29uc3QgbWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29uc3QgbWF4VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWF4VmFsdWUudGV4dENvbnRlbnQgPSAnLS0nO1xuICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ZhbHVlJyk7XG5cbiAgICBjb25zdCBtYXhVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1heFVuaXQuY2xhc3NMaXN0LmFkZCgndW5pdCcpO1xuICAgIG1heFVuaXQudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgICBtYXguYXBwZW5kKG1heFZhbHVlLCBtYXhVbml0KTtcblxuICAgIGNvbnN0IG1heFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWF4VGV4dC50ZXh0Q29udGVudCA9ICdNQVgnO1xuXG4gICAgbWF4RGl2LmFwcGVuZChtYXgsIG1heFRleHQpO1xuICAgIGNvbnN0IG1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pbkRpdi5jbGFzc0xpc3QuYWRkKCdtaW4nKTtcblxuICAgIGNvbnN0IG1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IG1pblZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1pblZhbHVlLnRleHRDb250ZW50ID0gJy0tJztcbiAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuXG4gICAgY29uc3QgbWluVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtaW5Vbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQnKTtcbiAgICBtaW5Vbml0LnRleHRDb250ZW50ID0gJ8KwQyc7XG4gICAgbWluLmFwcGVuZChtaW5WYWx1ZSwgbWluVW5pdCk7XG5cbiAgICBjb25zdCBtaW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1pblRleHQudGV4dENvbnRlbnQgPSAnTUlOJztcblxuICAgIG1pbkRpdi5hcHBlbmQobWluLCBtaW5UZXh0KTtcblxuICAgIG1heE1pbi5hcHBlbmQobWF4RGl2LCBtaW5EaXYpO1xuXG4gICAgY2FyZC5hcHBlbmQoaDMsIHdlYXRoZXJDb25kaXRpb24sIG1heE1pbiwgZGF0YUNvbnRhaW5lcik7XG4gIH0gZWxzZSBjYXJkLmFwcGVuZChoMywgd2VhdGhlckNvbmRpdGlvbiwgZGF0YUNvbnRhaW5lcik7XG4gIHJldHVybiBjYXJkO1xufVxuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHR5cGUpIHtcbiAgICB0aGlzLmRvbU5vZGUgPSBjYXJkRG9tTm9kZUZhY3RvcnkodGl0bGUsIHR5cGUpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgdGhpcy53ZWF0aGVyQ29uZGl0aW9uSW1nID0gdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbmRpdGlvbiBpbWcnKTtcbiAgICB0aGlzLndlYXRoZXJDb25kaXRpb25EZXNjID0gdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbmRpdGlvbiBwJyk7XG4gIH1cblxuICBhZGRJbmZvKGluZm9PYmopIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF0YScsIGluZm9PYmoudmFyTmFtZSk7XG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICB2YWx1ZS50ZXh0Q29udGVudCA9ICctLSc7XG4gICAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gaW5mb09iai5uYW1lO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBpbmZvT2JqLm5hbWUpO1xuICAgIGltYWdlLnNyYyA9IGluZm9PYmouaWNvbjtcbiAgICBsZWdlbmQuYXBwZW5kKGltYWdlLCBkZXNjKTtcbiAgICBkaXYuYXBwZW5kKGxlZ2VuZCwgdmFsdWUpO1xuICAgIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuZGF0YS1jb250YWluZXInKS5hcHBlbmQoZGl2KTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YSwgZGF0YUFycikge1xuICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLmR0O1xuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbkltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICB0aGlzLndlYXRoZXJDb25kaXRpb25EZXNjLnRleHRDb250ZW50ID0gc3RyaW5nRnVuY3Rpb25zLmNhcGl0YWxpemUoZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICBpZiAodGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1tYXhtaW4nKSkge1xuICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5tYXggLnZhbHVlJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGEudGVtcC5tYXgpO1xuICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5taW4gLnZhbHVlJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGEudGVtcC5taW4pO1xuICAgIH1cbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcihgLmRhdGEuJHtkYXR1bS52YXJOYW1lfSAudmFsdWVgKS50ZXh0Q29udGVudCA9IGRhdGFbZGF0dW0udmFyTmFtZV0gKyBkYXR1bS51bml0O1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgZGF0YVNldCBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YlN1Yic7XG5pbXBvcnQgc3RyaW5nRnVuY3Rpb25zIGZyb20gJy4vc3RyaW5nRnVuY3Rpb25zJztcblxuY29uc3QgY3VycmVudFdlYXRoZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtd2VhdGhlcicpO1xuICBjb25zdCBjaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaXR5SW5mby5jbGFzc0xpc3QuYWRkKCdjaXR5LWluZm8nKTtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHktbmFtZScpO1xuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9ICdDaXR5JztcbiAgY29uc3QgbG9jYWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhbERhdGUudGV4dENvbnRlbnQgPSAnLS0nO1xuICBsb2NhbERhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICBjaXR5SW5mby5hcHBlbmQoY2l0eU5hbWUsIGxvY2FsRGF0ZSk7XG5cbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1pbmZvJyk7XG5cbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRlbXBlcmF0dXJlVmFsdWUudGV4dENvbnRlbnQgPSAnLS0nO1xuICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZScsICd2YWx1ZScpO1xuICBjb25zdCBzcGFuU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5TbWFsbC5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xuICBzcGFuU21hbGwudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgdGVtcGVyYXR1cmUuYXBwZW5kKHRlbXBlcmF0dXJlVmFsdWUsIHNwYW5TbWFsbCk7XG5cbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29uZGl0aW9uJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdlYXRoZXJJY29uLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wMW5AMngucG5nJztcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnLS0nO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmFwcGVuZCh3ZWF0aGVySWNvbiwgd2VhdGhlckRlc2NyaXB0aW9uKTtcblxuICBjb25zdCB3ZWF0aGVyRXh0cmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckV4dHJhLmNsYXNzTGlzdC5hZGQoJ2V4dHJhJyk7XG5cbiAgY29uc3QgYWRkSW5mbyA9IChvYmopID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF0YScsIG9iai52YXJOYW1lKTtcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gJy0tJztcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSBvYmoubmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0Jywgb2JqLm5hbWUpO1xuICAgIGltYWdlLnNyYyA9IG9iai5pY29uO1xuICAgIGxlZ2VuZC5hcHBlbmQoaW1hZ2UsIGRlc2MpO1xuICAgIGRpdi5hcHBlbmQobGVnZW5kLCB2YWx1ZSk7XG4gICAgd2VhdGhlckV4dHJhLmFwcGVuZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGRhdGFBcnIgPSBbXG4gICAgZGF0YVNldC5mZWVsc0xpa2UsXG4gICAgZGF0YVNldC53aW5kU3BlZWQsXG4gICAgZGF0YVNldC5jbG91ZGluZXNzLFxuICAgIGRhdGFTZXQuaHVtaWRpdHksXG4gICAgZGF0YVNldC52aXNpYmlsaXR5LFxuICAgIGRhdGFTZXQudXZJbmRleCxcbiAgXTtcblxuICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgYWRkSW5mbyhkYXR1bSk7XG4gIH0pO1xuXG4gIHdlYXRoZXJJbmZvLmFwcGVuZCh0ZW1wZXJhdHVyZSwgd2VhdGhlckNvbmRpdGlvbiwgd2VhdGhlckV4dHJhKTtcbiAgY29udGFpbmVyLmFwcGVuZChjaXR5SW5mbywgd2VhdGhlckluZm8pO1xuXG4gIHB1YlN1Yi5zdWJzY3JpYmUoJ25ld0RhdGEnLCAoZGF0YSkgPT4ge1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gZGF0YS5jaXR5O1xuICAgIGxvY2FsRGF0ZS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5kdDtcbiAgICB0ZW1wZXJhdHVyZVZhbHVlLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcCk7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBzdHJpbmdGdW5jdGlvbnMuY2FwaXRhbGl6ZShkYXRhXG4gICAgICAuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLmRhdGEuJHtkYXR1bS52YXJOYW1lfSAudmFsdWVgKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudFtkYXR1bS52YXJOYW1lXSArIGRhdHVtLnVuaXQ7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50V2VhdGhlcjtcbiIsImltcG9ydCBUSEVSTU9NRVRFUiBmcm9tICcuL2ljb25zL3dlYXRoZXIvdGhlcm1vbWV0ZXIuc3ZnJztcbmltcG9ydCBIVU1JRElUWSBmcm9tICcuL2ljb25zL3dlYXRoZXIvaHVtaWRpdHkuc3ZnJztcbmltcG9ydCBXSU5EX1NQRUVEIGZyb20gJy4vaWNvbnMvd2VhdGhlci93aW5kLXNwZWVkLnN2Zyc7XG5pbXBvcnQgQ0xPVURJTkVTUyBmcm9tICcuL2ljb25zL3dlYXRoZXIvY2xvdWRpbmVzcy5zdmcnO1xuaW1wb3J0IFNVTlJJU0UgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3N1bnJpc2Uuc3ZnJztcbmltcG9ydCBTVU5TRVQgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3N1bnNldC5zdmcnO1xuaW1wb3J0IFVWX0lOREVYIGZyb20gJy4vaWNvbnMvd2VhdGhlci91di1pbmRleC5zdmcnO1xuaW1wb3J0IFZJU0lCSUxJVFkgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3Zpc2liaWxpdHkuc3ZnJztcbmltcG9ydCBSQUlOX1BST0JBQklMSVRZIGZyb20gJy4vaWNvbnMvd2VhdGhlci9yYWluLXByb2JhYmlsaXR5LnN2Zyc7XG5cbmZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgaWNvbiwgdmFyTmFtZSwgdW5pdCkge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgaWNvbixcbiAgICB2YXJOYW1lLFxuICAgIHVuaXQsXG4gIH07XG59XG5cbmNvbnN0IGRhdGFTZXQgPSB7XG4gIHRlbXBlcmF0dXJlOiBmYWN0b3J5KCdUZW1wZXJhdHVyZScsIFRIRVJNT01FVEVSLCAndGVtcCcsICfCsEMnKSxcbiAgcmFpblByb2JhYmlsaXR5OiBmYWN0b3J5KCdSYWluJywgUkFJTl9QUk9CQUJJTElUWSwgJ3BvcCcsICclJyksXG4gIGZlZWxzTGlrZTogZmFjdG9yeSgnRmVlbHMgbGlrZScsIFRIRVJNT01FVEVSLCAnZmVlbHNfbGlrZScsICfCsEMnKSxcbiAgd2luZFNwZWVkOiBmYWN0b3J5KCdXaW5kIHNwZWVkJywgV0lORF9TUEVFRCwgJ3dpbmRfc3BlZWQnLCAnIG0vcycpLFxuICBjbG91ZGluZXNzOiBmYWN0b3J5KCdDbG91ZGluZXNzJywgQ0xPVURJTkVTUywgJ2Nsb3VkcycsICclJyksXG4gIGh1bWlkaXR5OiBmYWN0b3J5KCdIdW1pZGl0eScsIEhVTUlESVRZLCAnaHVtaWRpdHknLCAnJScpLFxuICBzdW5yaXNlOiBmYWN0b3J5KCdTdW5yaXNlJywgU1VOUklTRSwgJ3N1bnJpc2UnLCAnJyksXG4gIHN1bnNldDogZmFjdG9yeSgnU3Vuc2V0JywgU1VOU0VULCAnc3Vuc2V0JywgJycpLFxuICB1dkluZGV4OiBmYWN0b3J5KCdVViBpbmRleCcsIFVWX0lOREVYLCAndXZpJywgJycpLFxuICB2aXNpYmlsaXR5OiBmYWN0b3J5KCdWaXNpYmlsaXR5JywgVklTSUJJTElUWSwgJ3Zpc2liaWxpdHknLCAnIG0nKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTZXQ7XG4iLCJmdW5jdGlvbiBjb252ZXJ0Q3VycmVudERhdGUoYywgdGltZXpvbmUsIGxvY2FsZSA9ICdlbi1VSycpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgICBtb250aDogJ3Nob3J0JyxcbiAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXG4gIH07XG4gIGNvbnN0IGN1cnJlbnQgPSBjO1xuICBjdXJyZW50LmR0ID0gbmV3IERhdGUoY3VycmVudC5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREYWlseURhdGVzKGRhaWx5LCB0aW1lem9uZSwgbG9jYWxlID0gJ2VuLVVLJykge1xuICBjb25zdCBkdE9wdGlvbnMgPSB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgfTtcbiAgY29uc3Qgc3VuT3B0aW9ucyA9IHtcbiAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9O1xuICBkYWlseS5mb3JFYWNoKChkLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRheSA9IGQ7XG4gICAgZGF5LnN1bnJpc2UgPSBuZXcgRGF0ZShkYXkuc3VucmlzZSAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgc3VuT3B0aW9ucyk7XG4gICAgZGF5LnN1bnNldCA9IG5ldyBEYXRlKGRheS5zdW5zZXQgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHN1bk9wdGlvbnMpO1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgZGF5LmR0ID0gJ1RvZGF5JztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGF5LmR0ID0gbmV3IERhdGUoZGF5LmR0ICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBkdE9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydEhvdXJseUFuZE1pbnV0ZWx5RGF0ZXMob2JqLCB0aW1lem9uZSwgbG9jYWxlID0gJ2VuLVVLJykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXG4gIH07XG4gIG9iai5ob3VybHkuZm9yRWFjaCgoaCkgPT4ge1xuICAgIGNvbnN0IGhvdXIgPSBoO1xuICAgIGhvdXIuZHQgPSBuZXcgRGF0ZShob3VyLmR0ICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBvcHRpb25zKTtcbiAgfSk7XG4gIG9iai5taW51dGVseS5mb3JFYWNoKChtKSA9PiB7XG4gICAgY29uc3QgbWludXRlID0gbTtcbiAgICBtaW51dGUuZHQgPSBuZXcgRGF0ZShtaW51dGUuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRGF0ZVN0cmluZ3Mob2JqKSB7XG4gIGNvbnZlcnRDdXJyZW50RGF0ZShvYmouY3VycmVudCwgb2JqLnRpbWV6b25lKTtcbiAgY29udmVydERhaWx5RGF0ZXMob2JqLmRhaWx5LCBvYmoudGltZXpvbmUpO1xuICBjb252ZXJ0SG91cmx5QW5kTWludXRlbHlEYXRlcyhvYmosIG9iai50aW1lem9uZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZERhdGVTdHJpbmdzO1xuIiwiaW1wb3J0IGRhdGFTZXQgZnJvbSAnLi9kYXRhJztcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZHMnO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YlN1Yic7XG5cbmZ1bmN0aW9uIGZvcmVjYXN0RWxlbWVudEZhY3RvcnkobmFtZSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0Jyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSBuYW1lO1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhdGFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZChoMiwgZGF0YUNvbnRhaW5lcik7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNsYXNzIEZvcmVjYXN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgLi4uZGF0dW0pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZG9tTm9kZSA9IGZvcmVjYXN0RWxlbWVudEZhY3RvcnkobmFtZSk7XG4gICAgdGhpcy5kYXRhQXJyID0gWy4uLmRhdHVtXTtcbiAgICB0aGlzLmNhcmRzID0gW107XG4gICAgcHViU3ViLnN1YnNjcmliZSgnbmV3RGF0YScsIHRoaXMudXBkYXRlQ2FyZHMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmNhcmRzW2ldID0gbmV3IENhcmQoJ1RpdGxlJywgdGhpcy5uYW1lKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kYXRhQXJyLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuY2FyZHNbaV0uYWRkSW5mbyh0aGlzLmRhdGFBcnJbal0pO1xuICAgICAgfVxuICAgICAgdGhpcy5kb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpLmFwcGVuZCh0aGlzLmNhcmRzW2ldLmRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNhcmRzKGRhdGEpIHtcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICBjYXJkLnVwZGF0ZURhdGEoZGF0YVt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKV1baW5kZXhdLCB0aGlzLmRhdGFBcnIpO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGRhaWx5ID0gbmV3IEZvcmVjYXN0KCdEYWlseScsIGRhdGFTZXQuc3VucmlzZSwgZGF0YVNldC5zdW5zZXQpO1xuY29uc3QgaG91cmx5ID0gbmV3IEZvcmVjYXN0KCdIb3VybHknLCBkYXRhU2V0LnRlbXBlcmF0dXJlLCBkYXRhU2V0LnJhaW5Qcm9iYWJpbGl0eSwgZGF0YVNldC5jbG91ZGluZXNzLCBkYXRhU2V0Lmh1bWlkaXR5KTtcblxuZXhwb3J0IGRlZmF1bHQgeyBkYWlseSwgaG91cmx5IH07XG4iLCJpbXBvcnQgU0VBUkNIX0lDT04gZnJvbSAnLi9pY29ucy9zZWFyY2guc3ZnJztcbmltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2FwaUhhbmRsZXInO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YlN1Yic7XG5cbmNvbnN0IHNlYXJjaEJhciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhcicpO1xuICBjb25zdCBzZWFyY2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHNlYXJjaExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlYXJjaC1pbnB1dCcpO1xuICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNlYXJjaEljb24uc3JjID0gU0VBUkNIX0lDT047XG4gIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICBzZWFyY2hMYWJlbC5hcHBlbmQoc2VhcmNoSWNvbik7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoLWlucHV0JztcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWFyY2gnKTtcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XG4gIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdHbyEnO1xuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hJbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoc2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIHB1YlN1Yi5wdWJsaXNoKCduZXdEYXRhJywgd2VhdGhlckRhdGEpO1xuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZChzZWFyY2hMYWJlbCwgc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5jb25zdCBoZWFkZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICd3ZWF0aGVyIGFwcCc7XG4gIGNvbnRhaW5lci5hcHBlbmQoaDEsIHNlYXJjaEJhcik7XG4gIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iLCJpbXBvcnQgY3VycmVudFdlYXRoZXIgZnJvbSAnLi9jdXJyZW50V2VhdGhlcic7XG5pbXBvcnQgZm9yZWNhc3QgZnJvbSAnLi9mb3JlY2FzdCc7XG5cbmNvbnN0IG1haW5TZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5hcHBlbmQoY3VycmVudFdlYXRoZXIpO1xuICBtYWluLmFwcGVuZChmb3JlY2FzdC5kYWlseS5kb21Ob2RlLCBmb3JlY2FzdC5ob3VybHkuZG9tTm9kZSk7XG4gIHJldHVybiBtYWluO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpblNlY3Rpb247XG4iLCJjb25zdCBldmVudHMgPSB7fTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgZikge1xuICBpZiAoIWV2ZW50c1tldmVudE5hbWVdKSBldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGYpO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChmKSA9PiB7XG4gICAgICBmKGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZikge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0uaW5jbHVkZXMoZikpIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGYpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBzdWJzY3JpYmUsIHB1Ymxpc2gsIHVuc3Vic2NyaWJlIH07XG4iLCJmdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBzdHI7XG4gIHJldHVybiAoc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGNhcGl0YWxpemUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IG1haW5TZWN0aW9uIGZyb20gJy4vbWFpblNlY3Rpb24nO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsIG1haW5TZWN0aW9uKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==