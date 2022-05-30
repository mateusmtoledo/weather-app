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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 16px;\n    --cards-color: #222844;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to right bottom, #3d4564, #424b70, #47507c, #4d5688, #545b94);\n    color: #ffffff;\n}\n\nh1 {\n    font-size: 1.2rem;\n    font-family: 'Comfortaa', cursive;\n    letter-spacing: 2px;\n    cursor: pointer;\n    color: #6FFACC;\n}\n\nheader {\n    padding: 16px 24px 8px;\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.search-bar input {\n    padding: 4px 8px 4px 32px;\n    color: white;\n    font-size: 1rem;\n    border-radius: 16px;\n    border: 2px solid white;\n    width: 100%;\n    background-color: transparent;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n.search-bar {\n    position: relative;\n    flex: 1;\n    max-width: 300px;\n}\n\n.search-bar label {\n    height: 16px;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.search-bar .icon {\n    height: 100%;\n    position: absolute;\n}\n\n.search-bar button {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    border: none;\n    background-color: transparent;\n    color: #6FFACC;\n    font-weight: 700;\n    cursor: pointer;\n}\n\nmain {\n    padding: 64px;\n    justify-content: center;\n    flex: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 500px 1fr;\n    gap: 64px;\n}\n\n.current-weather {\n    padding: 32px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--cards-color);\n    border-radius: 8px;\n    grid-row: 1 / -1;\n}\n\n.current-weather .city-info {\n    text-align: center;\n}\n\n.current-weather .city-name {\n    font-size: 3rem;\n    color: #6FFACC;\n}\n\n.weather-info {\n    margin-top: 24px;\n}\n\n.weather-info .temperature {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.weather-info .temperature .small {\n    font-size: 1.5rem;\n    position: relative;\n    bottom: 32px;\n}\n\n.extra {\n    margin-top: 24px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    justify-items: center;\n    font-size: 1rem;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data img {\n    width: 32px;\n}\n\n.weather-condition {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-condition img {\n    width: 84px;\n}\n\n.card-container {\n    display: flex;\n    gap: 24px;\n    flex: 1;\n}\n\n.card {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    text-align: center;\n    background-color: var(--cards-color);\n    border-radius: 16px;\n    justify-content: center;\n}\n\n.card h3 {\n    font-size: 1.2rem;\n}\n\n.card,\n.card p {\n    font-size: 0.9rem;\n}\n\n.forecast {\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card .data-container {\n    display: flex;\n    justify-content: center;\n    gap: 48px;\n    margin-top: 16px;\n}\n\n.forecast h2 {\n    margin-bottom: 8px;\n}\n\n.card .condition-container {\n    width: 64px;\n    height: 32px;\n    overflow: hidden;\n    position: relative;\n    margin-top: 16px;\n}\n\n.card .weather-condition img {\n    width: 64px;\n    object-fit: scale-down;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.forecast .temperature-maxmin {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kCAAkC;IAClC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,+FAA+F;IAC/F,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,2BAA2B;IAC3B,YAAY;IACZ,6BAA6B;IAC7B,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,OAAO;IACP,aAAa;IACb,2BAA2B;IAC3B,gCAAgC;IAChC,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,4DAA4D;IAC5D,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;IACT,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,OAAO;IACP,kBAAkB;IAClB,oCAAoC;IACpC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Montserrat:wght@300&family=Poppins:wght@300&display=swap');\n\n:root {\n    font-size: 16px;\n    --cards-color: #222844;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to right bottom, #3d4564, #424b70, #47507c, #4d5688, #545b94);\n    color: #ffffff;\n}\n\nh1 {\n    font-size: 1.2rem;\n    font-family: 'Comfortaa', cursive;\n    letter-spacing: 2px;\n    cursor: pointer;\n    color: #6FFACC;\n}\n\nheader {\n    padding: 16px 24px 8px;\n    display: flex;\n    gap: 16px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.search-bar input {\n    padding: 4px 8px 4px 32px;\n    color: white;\n    font-size: 1rem;\n    border-radius: 16px;\n    border: 2px solid white;\n    width: 100%;\n    background-color: transparent;\n}\n\n.search-bar input:focus {\n    outline: none;\n}\n\n.search-bar {\n    position: relative;\n    flex: 1;\n    max-width: 300px;\n}\n\n.search-bar label {\n    height: 16px;\n    position: absolute;\n    left: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.search-bar .icon {\n    height: 100%;\n    position: absolute;\n}\n\n.search-bar button {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    border: none;\n    background-color: transparent;\n    color: #6FFACC;\n    font-weight: 700;\n    cursor: pointer;\n}\n\nmain {\n    padding: 64px;\n    justify-content: center;\n    flex: 1;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 500px 1fr;\n    gap: 64px;\n}\n\n.current-weather {\n    padding: 32px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--cards-color);\n    border-radius: 8px;\n    grid-row: 1 / -1;\n}\n\n.current-weather .city-info {\n    text-align: center;\n}\n\n.current-weather .city-name {\n    font-size: 3rem;\n    color: #6FFACC;\n}\n\n.weather-info {\n    margin-top: 24px;\n}\n\n.weather-info .temperature {\n    font-size: 4rem;\n    text-align: center;\n}\n\n.weather-info .temperature .small {\n    font-size: 1.5rem;\n    position: relative;\n    bottom: 32px;\n}\n\n.extra {\n    margin-top: 24px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    justify-items: center;\n    font-size: 1rem;\n}\n\n.data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.data img {\n    width: 32px;\n}\n\n.weather-condition {\n    font-size: 1.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.weather-condition img {\n    width: 84px;\n}\n\n.card-container {\n    display: flex;\n    gap: 24px;\n    flex: 1;\n}\n\n.card {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    text-align: center;\n    background-color: var(--cards-color);\n    border-radius: 16px;\n    justify-content: center;\n}\n\n.card h3 {\n    font-size: 1.2rem;\n}\n\n.card,\n.card p {\n    font-size: 0.9rem;\n}\n\n.forecast {\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n}\n\n.card .data-container {\n    display: flex;\n    justify-content: center;\n    gap: 48px;\n    margin-top: 16px;\n}\n\n.forecast h2 {\n    margin-bottom: 8px;\n}\n\n.card .condition-container {\n    width: 64px;\n    height: 32px;\n    overflow: hidden;\n    position: relative;\n    margin-top: 16px;\n}\n\n.card .weather-condition img {\n    width: 64px;\n    object-fit: scale-down;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.forecast .temperature-maxmin {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    margin-top: 16px;\n}\n"],"sourceRoot":""}]);
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
function cardDomNodeFactory(title, type) {
  const card = document.createElement('div');
  card.classList.add('card');
  const h3 = document.createElement('h3');
  h3.textContent = title;
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('data-container');
  const weatherCondition = document.createElement('div');
  weatherCondition.classList.add('weather-condition');
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('condition-container');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = 'http://openweathermap.org/img/wn/02d@2x.png';
  iconContainer.append(weatherIcon);
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = 'Few clouds';
  weatherCondition.append(iconContainer, weatherDescription);
  if (type === 'Daily') {
    const maxMin = document.createElement('div');
    maxMin.classList.add('temperature-maxmin');

    const maxDiv = document.createElement('div');
    maxDiv.classList.add('max');

    const max = document.createElement('p');

    const maxValue = document.createElement('span');
    maxValue.textContent = '21';
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
    minValue.textContent = '15';
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
  }

  addInfo(infoObj) {
    const div = document.createElement('div');
    div.classList.add('data');
    const value = document.createElement('p');
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


function newData(obj) {
  const div = document.createElement('div');
  div.classList.add('data');
  const value = document.createElement('p');
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
  return div;
}

const currentWeather = (() => {
  const container = document.createElement('div');
  container.classList.add('current-weather');
  const cityInfo = document.createElement('div');
  cityInfo.classList.add('city-info');
  const cityName = document.createElement('p');
  cityName.classList.add('city-name');
  cityName.textContent = 'London';
  const localDate = document.createElement('p');
  localDate.textContent = 'Wed, 25 May 2022, 19:43';
  cityInfo.append(cityName, localDate);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather-info');

  const temperatureValue = document.createElement('p');
  temperatureValue.textContent = '21';
  temperatureValue.classList.add('temperature');
  const spanSmall = document.createElement('span');
  spanSmall.classList.add('small');
  spanSmall.textContent = '°C';
  temperatureValue.append(spanSmall);

  const weatherCondition = document.createElement('div');
  weatherCondition.classList.add('weather-condition');
  const weatherIcon = document.createElement('img');
  weatherIcon.src = 'http://openweathermap.org/img/wn/02d@2x.png';
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = 'Few clouds';
  weatherCondition.append(weatherIcon, weatherDescription);

  const weatherExtra = document.createElement('div');
  weatherExtra.classList.add('extra');
  const feelsLike = newData(_data__WEBPACK_IMPORTED_MODULE_0__["default"].feelsLike);
  const windSpeed = newData(_data__WEBPACK_IMPORTED_MODULE_0__["default"].windSpeed);
  const cloudiness = newData(_data__WEBPACK_IMPORTED_MODULE_0__["default"].cloudiness);
  const humidity = newData(_data__WEBPACK_IMPORTED_MODULE_0__["default"].humidity);
  const visibility = newData(_data__WEBPACK_IMPORTED_MODULE_0__["default"].visibility);
  const uvIndex = newData(_data__WEBPACK_IMPORTED_MODULE_0__["default"].uvIndex);
  weatherExtra.append(feelsLike, humidity, windSpeed, cloudiness, visibility, uvIndex);

  weatherInfo.append(temperatureValue, weatherCondition, weatherExtra);

  container.append(cityInfo, weatherInfo);

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









function factory(name, icon) {
  return {
    name,
    icon,
  };
}

const dataSet = {
  feelsLike: factory('Feels like', _icons_weather_thermometer_svg__WEBPACK_IMPORTED_MODULE_0__),
  windSpeed: factory('Wind speed', _icons_weather_wind_speed_svg__WEBPACK_IMPORTED_MODULE_2__),
  cloudiness: factory('Cloudiness', _icons_weather_cloudiness_svg__WEBPACK_IMPORTED_MODULE_3__),
  humidity: factory('Humidity', _icons_weather_humidity_svg__WEBPACK_IMPORTED_MODULE_1__),
  sunrise: factory('Sunrise', _icons_weather_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__),
  sunset: factory('Sunset', _icons_weather_sunset_svg__WEBPACK_IMPORTED_MODULE_5__),
  uvIndex: factory('UV index', _icons_weather_uv_index_svg__WEBPACK_IMPORTED_MODULE_6__),
  visibility: factory('Visibility', _icons_weather_visibility_svg__WEBPACK_IMPORTED_MODULE_7__),
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
function convertCurrentDate(c, timezone, locale = 'en-US') {
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

function convertDailyDates(daily, timezone, locale = 'en-US') {
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

function convertHourlyAndMinutelyDates(obj, timezone, locale = 'en-US') {
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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./src/cards.js");



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
  constructor(name, obj, ...datum) {
    this.name = name;
    this.data = obj;
    this.domNode = forecastElementFactory(name);
    this.dataArr = [...datum];
    this.cards = [];
    this.init();
  }

  init() {
    for (let i = 0; i < 4; i += 1) {
      this.cards[i] = new _cards__WEBPACK_IMPORTED_MODULE_1__["default"](i.toString(), this.name);
      for (let j = 0; j < this.dataArr.length; j += 1) {
        this.cards[i].addInfo(this.dataArr[j]);
      }
      this.domNode.querySelector('.card-container').append(this.cards[i].domNode);
    }
  }
}

// const daily = new Forecast('Daily', .daily, dataSet.sunrise, dataSet.sunset);
// const hourly = new Forecast('Hourly', .hourly, dataSet.cloudiness, dataSet.humidity);

// export default { daily, hourly };


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
    console.log(await (0,_apiHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(searchInput.value));
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
  // main.append(forecast.daily.domNode, forecast.hourly.domNode);
  return main;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSection);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUQsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDd0I7QUFDWjs7QUFFbEM7QUFDQTtBQUNBLGNBQWMsdURBQWM7QUFDNUI7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNTO0FBQ1U7O0FBRXhDLHFCQUFxQiwrQ0FBTSxFQUFFLG9EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGVGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW5TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWE6d2dodEA1MDAmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC0tY2FyZHMtY29sb3I6ICMyMjI4NDQ7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzNkNDU2NCwgIzQyNGI3MCwgIzQ3NTA3YywgIzRkNTY4OCwgIzU0NWI5NCk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDE2cHggMjRweCA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHggNHB4IDMycHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJhciBsYWJlbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA4cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5zZWFyY2gtYmFyIC5pY29uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA4cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjNkZGQUNDO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiA2NHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwMHB4IDFmcjtcXG4gICAgZ2FwOiA2NHB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIHtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmRzLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LWluZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxufVxcblxcbi53ZWF0aGVyLWluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIC50ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIC50ZW1wZXJhdHVyZSAuc21hbGwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDMycHg7XFxufVxcblxcbi5leHRyYSB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGEgLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGEgaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDg0cHg7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjRweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZHMtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNhcmQsXFxuLmNhcmQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkIC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDQ4cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5mb3JlY2FzdCBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmNhcmQgLmNvbmRpdGlvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5jYXJkIC53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmZvcmVjYXN0IC50ZW1wZXJhdHVyZS1tYXhtaW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJ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XCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDUwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgLS1jYXJkcy1jb2xvcjogIzIyMjg0NDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjM2Q0NTY0LCAjNDI0YjcwLCAjNDc1MDdjLCAjNGQ1Njg4LCAjNTQ1Yjk0KTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTZweCAyNHB4IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0IHtcXG4gICAgcGFkZGluZzogNHB4IDhweCA0cHggMzJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi5zZWFyY2gtYmFyIGxhYmVsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDhweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgLmljb24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICM2RkZBQ0M7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDY0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAwcHggMWZyO1xcbiAgICBnYXA6IDY0cHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZHMtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuY2l0eS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogIzZGRkFDQztcXG59XFxuXFxuLndlYXRoZXItaW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi53ZWF0aGVyLWluZm8gLnRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWluZm8gLnRlbXBlcmF0dXJlIC5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMzJweDtcXG59XFxuXFxuLmV4dHJhIHtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSAuZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGF0YSBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkcy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY2FyZCxcXG4uY2FyZCBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNDhweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmZvcmVjYXN0IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uY2FyZCAuY29uZGl0aW9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmNhcmQgLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uZm9yZWNhc3QgLnRlbXBlcmF0dXJlLW1heG1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZERhdGVTdHJpbmdzIGZyb20gJy4vZGF0ZUZ1bmN0aW9ucyc7XG5cbmNvbnN0IEFQSV9LRVkgPSAnYjhiZWRjMjExMDAzMDEwMWRkOWM4ZDBjNzRmMjMzNmMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbk5hbWUpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uTmFtZX0mbGltaXQ9MSZhcHBpZD0ke0FQSV9LRVl9YCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICBuYW1lOiBqc29uWzBdLm5hbWUsXG4gICAgY291bnRyeToganNvblswXS5jb3VudHJ5LFxuICAgIGxhdDoganNvblswXS5sYXQsXG4gICAgbG9uOiBqc29uWzBdLmxvbixcbiAgfTtcbiAgcmV0dXJuIG9iajtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsb2NhdGlvbi5sYXR9Jmxvbj0ke2xvY2F0aW9uLmxvbn0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uTmFtZSkge1xuICBjb25zdCBvYmogPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbk5hbWUpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldERhdGEob2JqKTtcbiAgd2VhdGhlckRhdGEuY2l0eSA9IG9iai5uYW1lO1xuICB3ZWF0aGVyRGF0YS5jb3VudHJ5ID0gb2JqLmNvdW50cnk7XG4gIGFkZERhdGVTdHJpbmdzKHdlYXRoZXJEYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsImZ1bmN0aW9uIGNhcmREb21Ob2RlRmFjdG9yeSh0aXRsZSwgdHlwZSkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF0YUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYXRhLWNvbnRhaW5lcicpO1xuICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJDb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb25kaXRpb24nKTtcbiAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbi1jb250YWluZXInKTtcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgd2VhdGhlckljb24uc3JjID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzAyZEAyeC5wbmcnO1xuICBpY29uQ29udGFpbmVyLmFwcGVuZCh3ZWF0aGVySWNvbik7XG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0ZldyBjbG91ZHMnO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmFwcGVuZChpY29uQ29udGFpbmVyLCB3ZWF0aGVyRGVzY3JpcHRpb24pO1xuICBpZiAodHlwZSA9PT0gJ0RhaWx5Jykge1xuICAgIGNvbnN0IG1heE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1heE1pbi5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZS1tYXhtaW4nKTtcblxuICAgIGNvbnN0IG1heERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1heERpdi5jbGFzc0xpc3QuYWRkKCdtYXgnKTtcblxuICAgIGNvbnN0IG1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IG1heFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1heFZhbHVlLnRleHRDb250ZW50ID0gJzIxJztcbiAgICBtYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuXG4gICAgY29uc3QgbWF4VW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtYXhVbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQnKTtcbiAgICBtYXhVbml0LnRleHRDb250ZW50ID0gJ8KwQyc7XG4gICAgbWF4LmFwcGVuZChtYXhWYWx1ZSwgbWF4VW5pdCk7XG5cbiAgICBjb25zdCBtYXhUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1heFRleHQudGV4dENvbnRlbnQgPSAnTUFYJztcblxuICAgIG1heERpdi5hcHBlbmQobWF4LCBtYXhUZXh0KTtcbiAgICBjb25zdCBtaW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaW5EaXYuY2xhc3NMaXN0LmFkZCgnbWluJyk7XG5cbiAgICBjb25zdCBtaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBtaW5WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtaW5WYWx1ZS50ZXh0Q29udGVudCA9ICcxNSc7XG4gICAgbWluVmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcblxuICAgIGNvbnN0IG1pblVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWluVW5pdC5jbGFzc0xpc3QuYWRkKCd1bml0Jyk7XG4gICAgbWluVW5pdC50ZXh0Q29udGVudCA9ICfCsEMnO1xuICAgIG1pbi5hcHBlbmQobWluVmFsdWUsIG1pblVuaXQpO1xuXG4gICAgY29uc3QgbWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtaW5UZXh0LnRleHRDb250ZW50ID0gJ01JTic7XG5cbiAgICBtaW5EaXYuYXBwZW5kKG1pbiwgbWluVGV4dCk7XG5cbiAgICBtYXhNaW4uYXBwZW5kKG1heERpdiwgbWluRGl2KTtcblxuICAgIGNhcmQuYXBwZW5kKGgzLCB3ZWF0aGVyQ29uZGl0aW9uLCBtYXhNaW4sIGRhdGFDb250YWluZXIpO1xuICB9IGVsc2UgY2FyZC5hcHBlbmQoaDMsIHdlYXRoZXJDb25kaXRpb24sIGRhdGFDb250YWluZXIpO1xuICByZXR1cm4gY2FyZDtcbn1cblxuY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0eXBlKSB7XG4gICAgdGhpcy5kb21Ob2RlID0gY2FyZERvbU5vZGVGYWN0b3J5KHRpdGxlLCB0eXBlKTtcbiAgfVxuXG4gIGFkZEluZm8oaW5mb09iaikge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkYXRhJyk7XG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdmFsdWUudGV4dENvbnRlbnQgPSAnLS0nO1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IGluZm9PYmoubmFtZTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgaW5mb09iai5uYW1lKTtcbiAgICBpbWFnZS5zcmMgPSBpbmZvT2JqLmljb247XG4gICAgbGVnZW5kLmFwcGVuZChpbWFnZSwgZGVzYyk7XG4gICAgZGl2LmFwcGVuZChsZWdlbmQsIHZhbHVlKTtcbiAgICB0aGlzLmRvbU5vZGUucXVlcnlTZWxlY3RvcignLmRhdGEtY29udGFpbmVyJykuYXBwZW5kKGRpdik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBkYXRhU2V0IGZyb20gJy4vZGF0YSc7XG5cbmZ1bmN0aW9uIG5ld0RhdGEob2JqKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF0YScpO1xuICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdmFsdWUudGV4dENvbnRlbnQgPSAnLS0nO1xuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBvYmoubmFtZTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBvYmoubmFtZSk7XG4gIGltYWdlLnNyYyA9IG9iai5pY29uO1xuICBsZWdlbmQuYXBwZW5kKGltYWdlLCBkZXNjKTtcblxuICBkaXYuYXBwZW5kKGxlZ2VuZCwgdmFsdWUpO1xuICByZXR1cm4gZGl2O1xufVxuXG5jb25zdCBjdXJyZW50V2VhdGhlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyJyk7XG4gIGNvbnN0IGNpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNpdHlJbmZvLmNsYXNzTGlzdC5hZGQoJ2NpdHktaW5mbycpO1xuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eS1uYW1lJyk7XG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gJ0xvbmRvbic7XG4gIGNvbnN0IGxvY2FsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbG9jYWxEYXRlLnRleHRDb250ZW50ID0gJ1dlZCwgMjUgTWF5IDIwMjIsIDE5OjQzJztcbiAgY2l0eUluZm8uYXBwZW5kKGNpdHlOYW1lLCBsb2NhbERhdGUpO1xuXG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJJbmZvLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItaW5mbycpO1xuXG4gIGNvbnN0IHRlbXBlcmF0dXJlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRlbXBlcmF0dXJlVmFsdWUudGV4dENvbnRlbnQgPSAnMjEnO1xuICB0ZW1wZXJhdHVyZVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IHNwYW5TbWFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3BhblNtYWxsLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XG4gIHNwYW5TbWFsbC50ZXh0Q29udGVudCA9ICfCsEMnO1xuICB0ZW1wZXJhdHVyZVZhbHVlLmFwcGVuZChzcGFuU21hbGwpO1xuXG4gIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbicpO1xuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB3ZWF0aGVySWNvbi5zcmMgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDJkQDJ4LnBuZyc7XG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0ZldyBjbG91ZHMnO1xuICB3ZWF0aGVyQ29uZGl0aW9uLmFwcGVuZCh3ZWF0aGVySWNvbiwgd2VhdGhlckRlc2NyaXB0aW9uKTtcblxuICBjb25zdCB3ZWF0aGVyRXh0cmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckV4dHJhLmNsYXNzTGlzdC5hZGQoJ2V4dHJhJyk7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IG5ld0RhdGEoZGF0YVNldC5mZWVsc0xpa2UpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBuZXdEYXRhKGRhdGFTZXQud2luZFNwZWVkKTtcbiAgY29uc3QgY2xvdWRpbmVzcyA9IG5ld0RhdGEoZGF0YVNldC5jbG91ZGluZXNzKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBuZXdEYXRhKGRhdGFTZXQuaHVtaWRpdHkpO1xuICBjb25zdCB2aXNpYmlsaXR5ID0gbmV3RGF0YShkYXRhU2V0LnZpc2liaWxpdHkpO1xuICBjb25zdCB1dkluZGV4ID0gbmV3RGF0YShkYXRhU2V0LnV2SW5kZXgpO1xuICB3ZWF0aGVyRXh0cmEuYXBwZW5kKGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmRTcGVlZCwgY2xvdWRpbmVzcywgdmlzaWJpbGl0eSwgdXZJbmRleCk7XG5cbiAgd2VhdGhlckluZm8uYXBwZW5kKHRlbXBlcmF0dXJlVmFsdWUsIHdlYXRoZXJDb25kaXRpb24sIHdlYXRoZXJFeHRyYSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZChjaXR5SW5mbywgd2VhdGhlckluZm8pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50V2VhdGhlcjtcbiIsImltcG9ydCBUSEVSTU9NRVRFUiBmcm9tICcuL2ljb25zL3dlYXRoZXIvdGhlcm1vbWV0ZXIuc3ZnJztcbmltcG9ydCBIVU1JRElUWSBmcm9tICcuL2ljb25zL3dlYXRoZXIvaHVtaWRpdHkuc3ZnJztcbmltcG9ydCBXSU5EX1NQRUVEIGZyb20gJy4vaWNvbnMvd2VhdGhlci93aW5kLXNwZWVkLnN2Zyc7XG5pbXBvcnQgQ0xPVURJTkVTUyBmcm9tICcuL2ljb25zL3dlYXRoZXIvY2xvdWRpbmVzcy5zdmcnO1xuaW1wb3J0IFNVTlJJU0UgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3N1bnJpc2Uuc3ZnJztcbmltcG9ydCBTVU5TRVQgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3N1bnNldC5zdmcnO1xuaW1wb3J0IFVWX0lOREVYIGZyb20gJy4vaWNvbnMvd2VhdGhlci91di1pbmRleC5zdmcnO1xuaW1wb3J0IFZJU0lCSUxJVFkgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3Zpc2liaWxpdHkuc3ZnJztcblxuZnVuY3Rpb24gZmFjdG9yeShuYW1lLCBpY29uKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBpY29uLFxuICB9O1xufVxuXG5jb25zdCBkYXRhU2V0ID0ge1xuICBmZWVsc0xpa2U6IGZhY3RvcnkoJ0ZlZWxzIGxpa2UnLCBUSEVSTU9NRVRFUiksXG4gIHdpbmRTcGVlZDogZmFjdG9yeSgnV2luZCBzcGVlZCcsIFdJTkRfU1BFRUQpLFxuICBjbG91ZGluZXNzOiBmYWN0b3J5KCdDbG91ZGluZXNzJywgQ0xPVURJTkVTUyksXG4gIGh1bWlkaXR5OiBmYWN0b3J5KCdIdW1pZGl0eScsIEhVTUlESVRZKSxcbiAgc3VucmlzZTogZmFjdG9yeSgnU3VucmlzZScsIFNVTlJJU0UpLFxuICBzdW5zZXQ6IGZhY3RvcnkoJ1N1bnNldCcsIFNVTlNFVCksXG4gIHV2SW5kZXg6IGZhY3RvcnkoJ1VWIGluZGV4JywgVVZfSU5ERVgpLFxuICB2aXNpYmlsaXR5OiBmYWN0b3J5KCdWaXNpYmlsaXR5JywgVklTSUJJTElUWSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhU2V0O1xuIiwiZnVuY3Rpb24gY29udmVydEN1cnJlbnREYXRlKGMsIHRpbWV6b25lLCBsb2NhbGUgPSAnZW4tVVMnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdzaG9ydCcsXG4gICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9O1xuICBjb25zdCBjdXJyZW50ID0gYztcbiAgY3VycmVudC5kdCA9IG5ldyBEYXRlKGN1cnJlbnQuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGFpbHlEYXRlcyhkYWlseSwgdGltZXpvbmUsIGxvY2FsZSA9ICdlbi1VUycpIHtcbiAgY29uc3QgZHRPcHRpb25zID0ge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gIH07XG4gIGNvbnN0IHN1bk9wdGlvbnMgPSB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgfTtcbiAgZGFpbHkuZm9yRWFjaCgoZCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkYXkgPSBkO1xuICAgIGRheS5zdW5yaXNlID0gbmV3IERhdGUoZGF5LnN1bnJpc2UgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHN1bk9wdGlvbnMpO1xuICAgIGRheS5zdW5zZXQgPSBuZXcgRGF0ZShkYXkuc3Vuc2V0ICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBzdW5PcHRpb25zKTtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIGRheS5kdCA9ICdUb2RheSc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRheS5kdCA9IG5ldyBEYXRlKGRheS5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgZHRPcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIb3VybHlBbmRNaW51dGVseURhdGVzKG9iaiwgdGltZXpvbmUsIGxvY2FsZSA9ICdlbi1VUycpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9O1xuICBvYmouaG91cmx5LmZvckVhY2goKGgpID0+IHtcbiAgICBjb25zdCBob3VyID0gaDtcbiAgICBob3VyLmR0ID0gbmV3IERhdGUoaG91ci5kdCAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgb3B0aW9ucyk7XG4gIH0pO1xuICBvYmoubWludXRlbHkuZm9yRWFjaCgobSkgPT4ge1xuICAgIGNvbnN0IG1pbnV0ZSA9IG07XG4gICAgbWludXRlLmR0ID0gbmV3IERhdGUobWludXRlLmR0ICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZERhdGVTdHJpbmdzKG9iaikge1xuICBjb252ZXJ0Q3VycmVudERhdGUob2JqLmN1cnJlbnQsIG9iai50aW1lem9uZSk7XG4gIGNvbnZlcnREYWlseURhdGVzKG9iai5kYWlseSwgb2JqLnRpbWV6b25lKTtcbiAgY29udmVydEhvdXJseUFuZE1pbnV0ZWx5RGF0ZXMob2JqLCBvYmoudGltZXpvbmUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGREYXRlU3RyaW5ncztcbiIsImltcG9ydCBkYXRhU2V0IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmRzJztcblxuZnVuY3Rpb24gZm9yZWNhc3RFbGVtZW50RmFjdG9yeShuYW1lKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QnKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF0YUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kKGgyLCBkYXRhQ29udGFpbmVyKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY2xhc3MgRm9yZWNhc3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBvYmosIC4uLmRhdHVtKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGEgPSBvYmo7XG4gICAgdGhpcy5kb21Ob2RlID0gZm9yZWNhc3RFbGVtZW50RmFjdG9yeShuYW1lKTtcbiAgICB0aGlzLmRhdGFBcnIgPSBbLi4uZGF0dW1dO1xuICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2FyZHNbaV0gPSBuZXcgQ2FyZChpLnRvU3RyaW5nKCksIHRoaXMubmFtZSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGF0YUFyci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmNhcmRzW2ldLmFkZEluZm8odGhpcy5kYXRhQXJyW2pdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKS5hcHBlbmQodGhpcy5jYXJkc1tpXS5kb21Ob2RlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gY29uc3QgZGFpbHkgPSBuZXcgRm9yZWNhc3QoJ0RhaWx5JywgLmRhaWx5LCBkYXRhU2V0LnN1bnJpc2UsIGRhdGFTZXQuc3Vuc2V0KTtcbi8vIGNvbnN0IGhvdXJseSA9IG5ldyBGb3JlY2FzdCgnSG91cmx5JywgLmhvdXJseSwgZGF0YVNldC5jbG91ZGluZXNzLCBkYXRhU2V0Lmh1bWlkaXR5KTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgeyBkYWlseSwgaG91cmx5IH07XG4iLCJpbXBvcnQgU0VBUkNIX0lDT04gZnJvbSAnLi9pY29ucy9zZWFyY2guc3ZnJztcbmltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2FwaUhhbmRsZXInO1xuXG5jb25zdCBzZWFyY2hCYXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXInKTtcbiAgY29uc3Qgc2VhcmNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBzZWFyY2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWFyY2gtaW5wdXQnKTtcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzZWFyY2hJY29uLnNyYyA9IFNFQVJDSF9JQ09OO1xuICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgc2VhcmNoTGFiZWwuYXBwZW5kKHNlYXJjaEljb24pO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaC1pbnB1dCc7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoJyk7XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xuICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnR28hJztcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VhcmNoSW5wdXQudmFsdWUpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZyhhd2FpdCBnZXRXZWF0aGVyRGF0YShzZWFyY2hJbnB1dC52YWx1ZSkpO1xuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZChzZWFyY2hMYWJlbCwgc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5jb25zdCBoZWFkZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICd3ZWF0aGVyIGFwcCc7XG4gIGNvbnRhaW5lci5hcHBlbmQoaDEsIHNlYXJjaEJhcik7XG4gIHJldHVybiBjb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iLCJpbXBvcnQgY3VycmVudFdlYXRoZXIgZnJvbSAnLi9jdXJyZW50V2VhdGhlcic7XG5pbXBvcnQgZm9yZWNhc3QgZnJvbSAnLi9mb3JlY2FzdCc7XG5cbmNvbnN0IG1haW5TZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgbWFpbi5hcHBlbmQoY3VycmVudFdlYXRoZXIpO1xuICAvLyBtYWluLmFwcGVuZChmb3JlY2FzdC5kYWlseS5kb21Ob2RlLCBmb3JlY2FzdC5ob3VybHkuZG9tTm9kZSk7XG4gIHJldHVybiBtYWluO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpblNlY3Rpb247XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBtYWluU2VjdGlvbiBmcm9tICcuL21haW5TZWN0aW9uJztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLCBtYWluU2VjdGlvbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=