"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Poppins:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 16px;\n  --color-cta: #1eff57;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #ebebeb;\n}\n\n.app {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-family: 'Poppins', sans-serif;\n}\n\nheader {\n  background-color: #005268;\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n}\n\nh1 {\n  font-size: 1.2rem;\n  font-family: 'Comfortaa', cursive;\n  letter-spacing: 2px;\n  color: var(--color-cta);\n}\n\nh2 {\n  color: black;\n}\n\n.search-bar input {\n  flex: 1;\n  color: white;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.search-bar input::placeholder {\n  color: #bebebe;\n}\n\n.search-bar input:focus {\n  outline: none;\n}\n\n.search-bar {\n  padding: 2px 6px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 16px;\n  border: 2px solid white;\n  width: 100%;\n  max-width: 300px;\n}\n\n.search-bar .icon {\n  height: 16px;\n  display: block;\n}\n\n.search-bar button {\n  font-size: 0.9rem;\n  border: none;\n  background-color: transparent;\n  color: var(--color-cta);\n  font-weight: 700;\n  cursor: pointer;\n}\n\nmain {\n  flex: 1;\n  max-width: 100vw;\n  display: flex;\n  align-items: center;\n}\n\n.current-weather {\n  background-color: #005268;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n  padding: 32px 8px;\n  text-align: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n\n.current-weather .city-info {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.current-weather .city-name {\n  font-size: 3rem;\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.current-weather .temperature {\n  font-size: 4rem;\n  text-align: center;\n}\n\n.current-weather .temperature .small {\n  font-size: 1.5rem;\n  position: relative;\n  bottom: 32px;\n}\n\n.current-weather .weather-condition {\n  font-size: 1.2rem;\n}\n\n.current-weather .weather-condition img {\n  height: 64px;\n  object-fit: cover;\n}\n\n.current-weather .data-container {\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: repeat(3, max-content);\n}\n\n.forecast {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast .weather-condition img {\n  height: 48px;\n  object-fit: cover;\n}\n\n.weather-data-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.forecast .card-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.data-container {\n  display: grid;\n  gap: 16px 48px;\n  grid-template-columns: 1fr 1fr;\n}\n\n.data-name {\n  font-weight: 700;\n}\n\n.data-container img {\n  width: 32px;\n}\n\n.current-weather .data,\n.current-weather .data .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.forecast .data {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.temperature-minmax {\n  display: flex;\n  gap: 16px;\n}\n\n.weather-condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n\n.weather-condition img {\n  display: block;\n}\n\n.forecast-container {\n  padding: 16px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n}\n\n.forecast-container .buttons-container {\n  display: flex;\n  gap: 32px;\n}\n\n.switch-tab-btn {\n  position: relative;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.switch-tab-btn:before {\n  position: absolute;\n  width: 0;\n  height: 3px;\n  bottom: 0;\n  left: 50%;\n  content: '';\n  transition: all 0.5s;\n  background-color: black;\n}\n\n.switch-tab-btn.active:before {\n  width: 100%;\n  left: 0;\n  background-color: var(--color-cta);\n}\n\n.switch-tab-btn:hover:before {\n  width: 100%;\n  left: 0;\n}\n\n.card {\n  border-radius: 8px;\n  padding: 24px;\n  background: #005268;\n}\n\n.card h3 {\n  font-size: 1.5rem;\n}\n\n.forecast .card {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-template-columns: 130px 1fr;\n  gap: 8px 48px;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,\n    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n  max-width: 610px;\n  width: 100%;\n}\n\n.forecast .title {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\n.logo-mobile {\n  display: none;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.forecast .card .temperature {\n  display: flex;\n  gap: 16px;\n  font-weight: 300;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.loader {\n  border: 12px solid #f3f3f3;\n  border-top: 12px solid #3498db;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 975px) {\n  .current-weather {\n    flex-direction: column;\n    gap: 0;\n    padding: 0 8px 32px;\n  }\n  .current-weather .data-container {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    width: 100%;\n  }\n  .weather-condition {\n    margin-bottom: 16px;\n  }\n}\n\n@media (max-width: 650px) {\n  .logo-desktop {\n    display: none;\n  }\n  .logo-mobile {\n    display: block;\n  }\n  .current-weather .data-container {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: none;\n    gap: 16px;\n    width: 100%;\n  }\n  .forecast .card {\n    grid-template-rows: max-content max-content 1fr;\n    grid-template-columns: 1fr;\n  }\n  .forecast .data-container {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Poppins:wght@300&display=swap');\n\n:root {\n  font-size: 16px;\n  --color-cta: #1eff57;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #ebebeb;\n}\n\n.app {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-family: 'Poppins', sans-serif;\n}\n\nheader {\n  background-color: #005268;\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n}\n\nh1 {\n  font-size: 1.2rem;\n  font-family: 'Comfortaa', cursive;\n  letter-spacing: 2px;\n  color: var(--color-cta);\n}\n\nh2 {\n  color: black;\n}\n\n.search-bar input {\n  flex: 1;\n  color: white;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.search-bar input::placeholder {\n  color: #bebebe;\n}\n\n.search-bar input:focus {\n  outline: none;\n}\n\n.search-bar {\n  padding: 2px 6px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 16px;\n  border: 2px solid white;\n  width: 100%;\n  max-width: 300px;\n}\n\n.search-bar .icon {\n  height: 16px;\n  display: block;\n}\n\n.search-bar button {\n  font-size: 0.9rem;\n  border: none;\n  background-color: transparent;\n  color: var(--color-cta);\n  font-weight: 700;\n  cursor: pointer;\n}\n\nmain {\n  flex: 1;\n  max-width: 100vw;\n  display: flex;\n  align-items: center;\n}\n\n.current-weather {\n  background-color: #005268;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n  padding: 32px 8px;\n  text-align: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n\n.current-weather .city-info {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.current-weather .city-name {\n  font-size: 3rem;\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.current-weather .temperature {\n  font-size: 4rem;\n  text-align: center;\n}\n\n.current-weather .temperature .small {\n  font-size: 1.5rem;\n  position: relative;\n  bottom: 32px;\n}\n\n.current-weather .weather-condition {\n  font-size: 1.2rem;\n}\n\n.current-weather .weather-condition img {\n  height: 64px;\n  object-fit: cover;\n}\n\n.current-weather .data-container {\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: repeat(3, max-content);\n}\n\n.forecast {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast .weather-condition img {\n  height: 48px;\n  object-fit: cover;\n}\n\n.weather-data-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.forecast .card-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.data-container {\n  display: grid;\n  gap: 16px 48px;\n  grid-template-columns: 1fr 1fr;\n}\n\n.data-name {\n  font-weight: 700;\n}\n\n.data-container img {\n  width: 32px;\n}\n\n.current-weather .data,\n.current-weather .data .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.forecast .data {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.temperature-minmax {\n  display: flex;\n  gap: 16px;\n}\n\n.weather-condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n\n.weather-condition img {\n  display: block;\n}\n\n.forecast-container {\n  padding: 16px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n}\n\n.forecast-container .buttons-container {\n  display: flex;\n  gap: 32px;\n}\n\n.switch-tab-btn {\n  position: relative;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.switch-tab-btn:before {\n  position: absolute;\n  width: 0;\n  height: 3px;\n  bottom: 0;\n  left: 50%;\n  content: '';\n  transition: all 0.5s;\n  background-color: black;\n}\n\n.switch-tab-btn.active:before {\n  width: 100%;\n  left: 0;\n  background-color: var(--color-cta);\n}\n\n.switch-tab-btn:hover:before {\n  width: 100%;\n  left: 0;\n}\n\n.card {\n  border-radius: 8px;\n  padding: 24px;\n  background: #005268;\n}\n\n.card h3 {\n  font-size: 1.5rem;\n}\n\n.forecast .card {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-template-columns: 130px 1fr;\n  gap: 8px 48px;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,\n    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n  max-width: 610px;\n  width: 100%;\n}\n\n.forecast .title {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\n.logo-mobile {\n  display: none;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.forecast .card .temperature {\n  display: flex;\n  gap: 16px;\n  font-weight: 300;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.loader {\n  border: 12px solid #f3f3f3;\n  border-top: 12px solid #3498db;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 975px) {\n  .current-weather {\n    flex-direction: column;\n    gap: 0;\n    padding: 0 8px 32px;\n  }\n  .current-weather .data-container {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    width: 100%;\n  }\n  .weather-condition {\n    margin-bottom: 16px;\n  }\n}\n\n@media (max-width: 650px) {\n  .logo-desktop {\n    display: none;\n  }\n  .logo-mobile {\n    display: block;\n  }\n  .current-weather .data-container {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: none;\n    gap: 16px;\n    width: 100%;\n  }\n  .forecast .card {\n    grid-template-rows: max-content max-content 1fr;\n    grid-template-columns: 1fr;\n  }\n  .forecast .data-container {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Api.js":
/*!********************!*\
  !*** ./src/Api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Loader/Loader */ "./src/components/Loader/Loader.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");
/* harmony import */ var _utils_WeatherUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/WeatherUtils */ "./src/utils/WeatherUtils.js");




const API_KEY = 'b8bedc2110030101dd9c8d0c74f2336c';

// TODO error handling
class Api {
  static async getLocationData(locationName) {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`
    );
    const json = await response.json();
    return {
      name: json[0].name,
      country: json[0].country,
      lat: json[0].lat,
      lon: json[0].lon,
    };
  }

  static async getWeatherByCoordinates(location) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    return json;
  }

  static async getWeatherByLocationName(locationName) {
    const loader = new _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_0__["default"]();
    loader.show();
    const locationData = await Api.getLocationData(locationName);
    const weatherData = await Api.getWeatherByCoordinates(locationData);
    loader.remove();
    weatherData.city = locationData.name;
    weatherData.country = locationData.country;
    const weather = new _utils_WeatherUtils__WEBPACK_IMPORTED_MODULE_2__["default"](weatherData).getNormalizedData();
    _pubSub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('newData', weather);
  }
}


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _layout_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/Main */ "./src/layout/Main.js");
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DOMUtils */ "./src/utils/DOMUtils.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Api */ "./src/Api.js");





// TODO split view
class App {
  constructor() {
    this.header = new _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.main = new _layout_Main__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.element = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'div',
      {
        class: 'app',
      },
      this.header.element,
      this.main.element
    );
  }

  async init() {
    await _Api__WEBPACK_IMPORTED_MODULE_3__["default"].getWeatherByLocationName('London');
    document.body.append(this.element);
  }
}


/***/ }),

/***/ "./src/components/CurrentWeather/CurrentWeather.js":
/*!*********************************************************!*\
  !*** ./src/components/CurrentWeather/CurrentWeather.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrentWeather)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pubSub */ "./src/pubSub.js");
/* harmony import */ var _utils_StringUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/StringUtils */ "./src/utils/StringUtils.js");
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/DOMUtils */ "./src/utils/DOMUtils.js");





class CurrentWeather {
  constructor() {
    this.element = CurrentWeather.generateCurrentWeatherElement();
    this.dataArr = [
      _data__WEBPACK_IMPORTED_MODULE_0__["default"].feelsLike,
      _data__WEBPACK_IMPORTED_MODULE_0__["default"].windSpeed,
      _data__WEBPACK_IMPORTED_MODULE_0__["default"].cloudiness,
      _data__WEBPACK_IMPORTED_MODULE_0__["default"].humidity,
      _data__WEBPACK_IMPORTED_MODULE_0__["default"].visibility,
      _data__WEBPACK_IMPORTED_MODULE_0__["default"].uvIndex,
    ];
    this.dataArr.forEach((datum) => {
      this.addInfo(datum);
    });
    _pubSub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('newData', this.update.bind(this));
  }

  update(data) {
    this.element.querySelector('.city-name').textContent = data.city;
    this.element.querySelector('.date').textContent = data.current.dt;
    this.element.querySelector('.temperature .value').textContent = Math.round(
      data.current.temp
    );
    this.element.querySelector(
      '.weather-condition img'
    ).src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    this.element.querySelector('.weather-condition .description').textContent =
      _utils_StringUtils__WEBPACK_IMPORTED_MODULE_2__["default"].capitalize(data.current.weather[0].description);
    this.dataArr.forEach((datum) => {
      this.element.querySelector(`.data.${datum.varName} .value`).textContent =
        data.current[datum.varName] + datum.unit;
    });
  }

  static generateCurrentWeatherElement() {
    const cityName = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'p',
      {
        class: 'city-name',
      },
      'City'
    );
    const localDate = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'p',
      {
        class: 'date',
      },
      '--'
    );

    const weatherIcon = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement('img', {
      src: 'https://openweathermap.org/img/wn/01n@2x.png',
      width: '96px',
      height: '96px',
    });
    const weatherDescription = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'p',
      {
        class: 'description',
      },
      '--'
    );
    const weatherCondition = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'div',
      {
        class: 'weather-condition',
      },
      weatherIcon,
      weatherDescription
    );

    const temperatureValue = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'span',
      {
        class: 'value',
      },
      '--'
    ); // FIXME element might not be needed
    const spanSmall = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'span',
      {
        class: 'small',
      },
      '°C'
    );
    const temperature = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'p',
      {
        class: 'temperature',
      },
      temperatureValue,
      spanSmall
    );

    const cityInfo = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'div',
      {
        class: 'city-info',
      },
      cityName,
      localDate,
      temperature
    );

    const weatherDataContainer = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement('div', {
      class: 'data-container',
    });

    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'div',
      {
        class: 'current-weather',
      },
      cityInfo,
      weatherCondition,
      weatherDataContainer
    );
  }

  addInfo(obj) {
    const value = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'p',
      {
        class: 'value',
      },
      '--'
    );
    const desc = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'p',
      {
        class: 'data-name',
      },
      obj.name
    );
    const image = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement('img', {
      alt: obj.name,
      src: obj.icon,
    });
    const legend = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'div',
      {
        class: 'description',
      },
      image,
      desc
    );

    this.element.querySelector('.data-container').append(
      _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
        'div',
        {
          class: `data ${obj.varName}`,
        },
        legend,
        value
      )
    );
  }
}


/***/ }),

/***/ "./src/components/Forecast/DailyForecast.js":
/*!**************************************************!*\
  !*** ./src/components/Forecast/DailyForecast.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DailyForecast)
/* harmony export */ });
/* harmony import */ var _Forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forecast */ "./src/components/Forecast/Forecast.js");


class DailyForecast extends _Forecast__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(dataToDisplay) {
    super('Daily', 8, dataToDisplay);
  }
}


/***/ }),

/***/ "./src/components/Forecast/Forecast.js":
/*!*********************************************!*\
  !*** ./src/components/Forecast/Forecast.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Forecast)
/* harmony export */ });
/* harmony import */ var _ForecastCard_ForecastCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ForecastCard/ForecastCard */ "./src/components/ForecastCard/ForecastCard.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pubSub */ "./src/pubSub.js");
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/DOMUtils */ "./src/utils/DOMUtils.js");




// TODO split view
class Forecast {
  constructor(title, numberOfCards, dataToDisplay) {
    this.title = title;
    this.numberOfCards = numberOfCards;
    this.cards = [];
    this.dataToDisplay = dataToDisplay;
    this.element = this.generateForecastElement(title);
    _pubSub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('newData', this.updateCards.bind(this));
  }

  // TODO review
  generateForecastElement() {
    for (let i = 0; i < this.numberOfCards; i += 1) {
      this.cards[i] = new _ForecastCard_ForecastCard__WEBPACK_IMPORTED_MODULE_0__["default"]('Title', this.title);
      for (let j = 0; j < this.dataToDisplay.length; j += 1) {
        this.cards[i].addInfo(this.dataToDisplay[j]); // FIXME this probably does not belong here
      }
    }
    const cardContainer = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(
      'div',
      {
        class: 'card-container',
      },
      ...this.cards.map((card) => card.element)
    );
    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(
      'div',
      {
        class: 'forecast',
        'data-type': this.title.toLowerCase(),
      },
      cardContainer
    );
  }

  updateCards(data) {
    const thisData = data[this.title.toLowerCase()];
    this.cards.forEach((card, index) => {
      card.update(thisData[index], this.dataToDisplay);
    });
  }
}


/***/ }),

/***/ "./src/components/Forecast/HourlyForecast.js":
/*!***************************************************!*\
  !*** ./src/components/Forecast/HourlyForecast.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HourlyForecast)
/* harmony export */ });
/* harmony import */ var _Forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forecast */ "./src/components/Forecast/Forecast.js");


class HourlyForecast extends _Forecast__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(dataToDisplay) {
    super('Hourly', 48, dataToDisplay);
  }
}


/***/ }),

/***/ "./src/components/ForecastCard/ForecastCard.js":
/*!*****************************************************!*\
  !*** ./src/components/ForecastCard/ForecastCard.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForecastCard)
/* harmony export */ });
/* harmony import */ var _utils_StringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/StringUtils */ "./src/utils/StringUtils.js");
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/DOMUtils */ "./src/utils/DOMUtils.js");



// TODO review
class ForecastCard {
  constructor(title, type) {
    this.type = type;
    this.element = this.generateForecastCardElement();
    this.title = this.element.querySelector('.title');
    this.weatherConditionImg = this.element.querySelector(
      '.weather-condition img'
    );
    this.weatherConditionDesc = this.element.querySelector(
      '.weather-condition p'
    );
  }

  generateForecastCardElement() {
    const h3 = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'h3',
      {
        class: 'title', // TODO naming
      },
      this.title
    );
    const dataContainer = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', {
      class: 'data-container', // TODO naming
    });
    const weatherIcon = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('img', {
      src: 'https://openweathermap.org/img/wn/01n@2x.png',
      width: '64px',
      height: '64px',
    });
    const weatherDescription = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('p', {}, '--');
    const temperatureElement = this.generateTemperatureElement();

    const weatherCondition = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'div',
      {
        class: 'weather-condition',
      },
      weatherIcon,
      weatherDescription,
      temperatureElement
    );
    const card = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'div',
      {
        class: 'card',
      },
      h3,
      weatherCondition,
      dataContainer
    );
    return card;
  }

  static generateTemperatureDisplay(type) {
    const value = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'span',
      {
        class: 'value',
      },
      '--'
    );
    const unit = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'span',
      {
        class: 'unit',
      },
      '°C'
    );
    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'p',
      {
        class: `${type}-temperature`,
      },
      value,
      unit
    );
  }

  generateTemperatureElement() {
    if (this.type === 'Daily') {
      return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
        'div',
        {
          class: 'temperature',
        },
        ForecastCard.generateTemperatureDisplay('min'),
        ForecastCard.generateTemperatureDisplay('max')
      );
    }
    if (this.type === 'Hourly') {
      return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
        'div',
        {
          class: 'temperature',
        },
        ForecastCard.generateTemperatureDisplay('single')
      );
    }
    return null;
  }

  addInfo(infoObj) {
    const value = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'p',
      {
        class: 'value',
      },
      '--'
    );
    const dataName = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'p',
      {
        class: 'data-name',
      },
      infoObj.name
    );
    const legend = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'div',
      {
        class: 'description',
      },
      dataName
    );
    const container = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'div',
      {
        class: `data ${infoObj.varName}`,
      },
      legend,
      value
    );
    this.element.querySelector('.data-container').appendChild(container);
  }

  update(data, dataArr) {
    this.title.textContent = data.dt;
    this.weatherConditionImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.weatherConditionDesc.textContent = _utils_StringUtils__WEBPACK_IMPORTED_MODULE_0__["default"].capitalize(
      data.weather[0].description
    );
    if (this.type === 'Daily') {
      this.element.querySelector('.min-temperature .value').textContent =
        Math.round(data.temp.min);
      this.element.querySelector('.max-temperature .value').textContent =
        Math.round(data.temp.max);
    }
    if (this.type === 'Hourly') {
      this.element.querySelector('.single-temperature .value').textContent =
        Math.round(data.temp);
    }
    dataArr.forEach((datum) => {
      this.element.querySelector(`.data.${datum.varName} .value`).textContent =
        data[datum.varName] + datum.unit;
    });
  }
}


/***/ }),

/***/ "./src/components/ForecastContainer/ForecastContainer.js":
/*!***************************************************************!*\
  !*** ./src/components/ForecastContainer/ForecastContainer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForecastContainer)
/* harmony export */ });
/* harmony import */ var _Forecast_DailyForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Forecast/DailyForecast */ "./src/components/Forecast/DailyForecast.js");
/* harmony import */ var _Forecast_HourlyForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Forecast/HourlyForecast */ "./src/components/Forecast/HourlyForecast.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ "./src/data.js");
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/DOMUtils */ "./src/utils/DOMUtils.js");





class ForecastContainer {
  constructor() {
    this.dailyForecast = new _Forecast_DailyForecast__WEBPACK_IMPORTED_MODULE_0__["default"]([
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].sunrise,
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].sunset,
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].cloudiness,
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].rainProbability,
    ]);
    this.hourlyForecast = new _Forecast_HourlyForecast__WEBPACK_IMPORTED_MODULE_1__["default"]([
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].rainProbability,
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].cloudiness,
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].humidity,
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].uvIndex,
    ]);
    this.element = this.generateForecastContainerElement();
  }

  generateForecastContainerElement() {
    const dailySwitchButton = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'button',
      {
        type: 'button',
        class: 'switch-tab-btn',
        'data-forecast': 'daily',
      },
      'Daily'
    );

    dailySwitchButton.addEventListener('click', () =>
      this.switchTab(this.dailyForecast.element)
    );

    const hourlySwitchButton = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'button',
      {
        type: 'button',
        class: 'switch-tab-btn active',
        'data-forecast': 'hourly',
      },
      'Hourly'
    );

    hourlySwitchButton.addEventListener('click', () =>
      this.switchTab(this.hourlyForecast.element)
    );

    const buttonsContainer = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'div',
      {
        class: 'buttons-container',
      },
      dailySwitchButton,
      hourlySwitchButton
    );

    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'div',
      {
        class: 'forecast-container',
      },
      buttonsContainer,
      this.hourlyForecast.element
    );
  }

  switchTab(newTab) {
    const activeForecast = this.element.querySelector('.forecast');
    if (activeForecast === newTab) return;
    const forecastType = activeForecast.dataset.type;
    this.element
      .querySelector(`.switch-tab-btn[data-forecast=${forecastType}`)
      .classList.remove('active');
    const newForecastType = newTab.dataset.type;
    this.element
      .querySelector(`.switch-tab-btn[data-forecast=${newForecastType}`)
      .classList.add('active');
    this.element.removeChild(activeForecast);
    this.element.append(newTab);
  }
}


/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/DOMUtils */ "./src/utils/DOMUtils.js");
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SearchBar/SearchBar */ "./src/components/SearchBar/SearchBar.js");
/* harmony import */ var _icons_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/logo.svg */ "./src/icons/logo.svg");




// TODO split view
class Header {
  constructor() {
    this.searchBar = new _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.element = this.generateHeaderElement();
  }

  generateHeaderElement() {
    const h1 = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      'h1',
      {
        class: 'logo-desktop',
      },
      'weather app'
    );
    const logo = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('img', {
      class: 'logo-mobile',
      width: '36px',
      src: _icons_logo_svg__WEBPACK_IMPORTED_MODULE_2__,
      alt: 'weather app',
    });
    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      'header',
      {},
      h1,
      logo,
      this.searchBar.element
    );
  }
}


/***/ }),

/***/ "./src/components/Loader/Loader.js":
/*!*****************************************!*\
  !*** ./src/components/Loader/Loader.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/DOMUtils */ "./src/utils/DOMUtils.js");


class Loader {
  constructor() {
    this.element = Loader.generateLoaderElement();
  }

  show() {
    document.body.append(this.element);
  }

  remove() {
    this.element.remove();
  }

  static generateLoaderElement() {
    const loader = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', {
      class: 'loader',
    });
    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      'div',
      {
        class: 'overlay',
      },
      loader
    );
  }
}


/***/ }),

/***/ "./src/components/SearchBar/SearchBar.js":
/*!***********************************************!*\
  !*** ./src/components/SearchBar/SearchBar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api */ "./src/Api.js");
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/DOMUtils */ "./src/utils/DOMUtils.js");
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/search.svg */ "./src/icons/search.svg");




// TODO split view
class SearchBar {
  constructor() {
    this.element = SearchBar.generateSearchBarElement();
  }

  static generateSearchBarElement() {
    const searchIcon = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('img', {
      src: _icons_search_svg__WEBPACK_IMPORTED_MODULE_2__,
      class: 'icon',
    });
    const searchLabel = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'label',
      {
        for: 'search-input',
      },
      searchIcon
    );
    const searchInput = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('input', {
      id: 'search-input',
      placeholder: 'City name',
    });
    const searchButton = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'button',
      {
        class: 'search-button',
      },
      'Go!'
    );
    const searchContainer = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(
      'form',
      {
        class: 'search-bar',
      },
      searchLabel,
      searchInput,
      searchButton
    );
    searchContainer.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!searchInput.value) return;
      await _Api__WEBPACK_IMPORTED_MODULE_0__["default"].getWeatherByLocationName(searchInput.value);
      searchInput.value = '';
    });

    return searchContainer;
  }
}


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
  rainProbability: factory('Rain prob.', _icons_weather_rain_probability_svg__WEBPACK_IMPORTED_MODULE_8__, 'pop', '%'),
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const app = new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.init();


/***/ }),

/***/ "./src/layout/Main.js":
/*!****************************!*\
  !*** ./src/layout/Main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DOMUtils */ "./src/utils/DOMUtils.js");
/* harmony import */ var _components_CurrentWeather_CurrentWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CurrentWeather/CurrentWeather */ "./src/components/CurrentWeather/CurrentWeather.js");
/* harmony import */ var _components_ForecastContainer_ForecastContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ForecastContainer/ForecastContainer */ "./src/components/ForecastContainer/ForecastContainer.js");




// TODO split view
class Main {
  constructor() {
    this.forecastContainer = new _components_ForecastContainer_ForecastContainer__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.currentWeather = new _components_CurrentWeather_CurrentWeather__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.element = this.generateMainElement();
  }

  generateMainElement() {
    const weatherDataContainer = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      'div',
      {
        class: 'weather-data-container',
      },
      this.currentWeather.element,
      this.forecastContainer.element
    );
    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('main', {}, weatherDataContainer);
  }
}


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
class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, f) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(f);
  }

  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((f) => {
        f(data);
      });
    }
  }

  unsubscribe(eventName, f) {
    if (this.events[eventName].includes(f))
      this.events[eventName].splice(this.events[eventName].indexOf(f));
  }
}

const pubSub = new PubSub();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);


/***/ }),

/***/ "./src/utils/DOMUtils.js":
/*!*******************************!*\
  !*** ./src/utils/DOMUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMUtils)
/* harmony export */ });
class DOMUtils {
  static createElement(element, props, ...children) {
    const node = document.createElement(element);
    if (typeof props === 'object') {
      Object.keys(props).forEach((key) => {
        node.setAttribute(key, props[key]);
      });
    }
    children.forEach((child) => {
      node.append(child);
    });
    return node;
  }
}


/***/ }),

/***/ "./src/utils/DateUtils.js":
/*!********************************!*\
  !*** ./src/utils/DateUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateUtils)
/* harmony export */ });
class DateUtils {
  static getDateOptions(timeZone) {
    return {
      daily: {
        timeZone,
        weekday: 'long',
      },
      minutely: {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
      },
      hourly: {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
      },
      current: {
        timeZone,
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      },
      sunset: {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
      },
    };
  }

  static getDateString(date, options, locale = 'en-UK') {
    return new Date(date * 1000).toLocaleString(locale, options);
  }
}


/***/ }),

/***/ "./src/utils/StringUtils.js":
/*!**********************************!*\
  !*** ./src/utils/StringUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StringUtils)
/* harmony export */ });
class StringUtils {
  static capitalize(str) {
    if (typeof str !== 'string') return str;
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
}


/***/ }),

/***/ "./src/utils/WeatherUtils.js":
/*!***********************************!*\
  !*** ./src/utils/WeatherUtils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherUtils)
/* harmony export */ });
/* harmony import */ var _DateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateUtils */ "./src/utils/DateUtils.js");


class WeatherUtils {
  constructor(weatherData) {
    this.data = weatherData;
    this.dateOptions = _DateUtils__WEBPACK_IMPORTED_MODULE_0__["default"].getDateOptions(this.data.timezone);
  }

  normalizeObject(obj, type) {
    const { getDateString } = _DateUtils__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { replaceIfNotUndefined } = WeatherUtils;
    return {
      ...obj,
      dt: getDateString(obj.dt, this.dateOptions[type]),
      pop: replaceIfNotUndefined(obj.pop, Math.round(obj.pop * 10000) / 100),
      sunrise: replaceIfNotUndefined(
        obj.sunrise,
        getDateString(obj.sunrise, this.dateOptions.sunset)
      ),
      sunset: replaceIfNotUndefined(
        obj.sunset,
        getDateString(obj.sunset, this.dateOptions.sunset)
      ),
      moonrise: replaceIfNotUndefined(
        obj.moonrise,
        getDateString(obj.moonrise, this.dateOptions.sunset)
      ),
      moonset: replaceIfNotUndefined(
        obj.moonset,
        getDateString(obj.moonset, this.dateOptions.sunset)
      ),
    };
  }

  static replaceIfNotUndefined(value, newValue) {
    if (value === undefined) return undefined;
    return newValue;
  }

  getNormalizedData() {
    const { data } = this;
    return {
      ...data,
      current: this.normalizeObject(data.current, 'current'),
      daily: data.daily.map((obj) => this.normalizeObject(obj, 'daily')),
      hourly: data.hourly.map((obj) => this.normalizeObject(obj, 'hourly')),
      minutely: data.minutely.map((obj) =>
        this.normalizeObject(obj, 'minutely')
      ),
    };
  }
}


/***/ }),

/***/ "./src/icons/logo.svg":
/*!****************************!*\
  !*** ./src/icons/logo.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39abeda01e687a89d949.svg";

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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9DdXJyZW50V2VhdGhlci9DdXJyZW50V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0L0RhaWx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3JlY2FzdC9Gb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0L0hvdXJseUZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9yZWNhc3RDYXJkL0ZvcmVjYXN0Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0Q29udGFpbmVyL0ZvcmVjYXN0Q29udGFpbmVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbGF5b3V0L01haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcHViU3ViLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxzL0RPTVV0aWxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxzL0RhdGVVdGlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9TdHJpbmdVdGlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9XZWF0aGVyVXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWE6d2dodEA1MDAmZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jb2xvci1jdGE6ICMxZWZmNTc7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XFxufVxcblxcbi5hcHAge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjY4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jdGEpO1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNiZWJlYmU7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIHBhZGRpbmc6IDJweCA2cHg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgLmljb24ge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWN0YSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI2ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNjRweDtcXG4gIHBhZGRpbmc6IDMycHggOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNnB4IDEycHggLTJweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuY2l0eS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1heC13aWR0aDogMjgwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAudGVtcGVyYXR1cmUgLnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gIGhlaWdodDogNjRweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5kYXRhLWNvbnRhaW5lciB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IC53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcmVjYXN0IC5jYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmRhdGEtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE2cHggNDhweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLmRhdGEtbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5kYXRhLFxcbi5jdXJyZW50LXdlYXRoZXIgLmRhdGEgLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmRhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLW1pbm1heCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ud2VhdGhlci1jb25kaXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDE2cHggOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMycHg7XFxufVxcblxcbi5zd2l0Y2gtdGFiLWJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtdGFiLWJ0bjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN3aXRjaC10YWItYnRuLmFjdGl2ZTpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3RhKTtcXG59XFxuXFxuLnN3aXRjaC10YWItYnRuOmhvdmVyOmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBiYWNrZ3JvdW5kOiAjMDA1MjY4O1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0IC5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTMwcHggMWZyO1xcbiAgZ2FwOiA4cHggNDhweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQsIDMwLCAzNywgMC4xMikgMHB4IDJweCA0cHggMHB4LFxcbiAgICByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAycHggMTZweCAwcHg7XFxuICBtYXgtd2lkdGg6IDYxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JlY2FzdCAudGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28tbW9iaWxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QgLmNhcmQgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbi5sb2FkZXIge1xcbiAgYm9yZGVyOiAxMnB4IHNvbGlkICNmM2YzZjM7XFxuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkICMzNDk4ZGI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzVweCkge1xcbiAgLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMzJweDtcXG4gIH1cXG4gIC5jdXJyZW50LXdlYXRoZXIgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgLmxvZ28tZGVza3RvcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubG9nby1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5jdXJyZW50LXdlYXRoZXIgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZvcmVjYXN0IC5jYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgLmZvcmVjYXN0IC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCO3VDQUNxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztFQUNQLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCOzJDQUN5QztFQUN6QyxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsU0FBUztJQUNULFdBQVc7RUFDYjtFQUNBO0lBQ0UsK0NBQStDO0lBQy9DLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMkRBQTJEO0VBQzdEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRANTAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY29sb3ItY3RhOiAjMWVmZjU3O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xcbn1cXG5cXG4uYXBwIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI2ODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY3RhKTtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxufVxcblxcbi5zZWFyY2gtYmFyIC5pY29uIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBidXR0b24ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jdGEpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNjg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDY0cHg7XFxuICBwYWRkaW5nOiAzMnB4IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LWluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktbmFtZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC50ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLnRlbXBlcmF0dXJlIC5zbWFsbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMzJweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAud2VhdGhlci1jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuZGF0YS1jb250YWluZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCAud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gIGhlaWdodDogNDhweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ud2VhdGhlci1kYXRhLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JlY2FzdCAuY2FyZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5kYXRhLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxNnB4IDQ4cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5kYXRhLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRhdGEtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMzJweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuZGF0YSxcXG4uY3VycmVudC13ZWF0aGVyIC5kYXRhIC5kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IC5kYXRhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50ZW1wZXJhdHVyZS1taW5tYXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxNnB4IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4uc3dpdGNoLXRhYi1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXRhYi1idG46YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBjb250ZW50OiAnJztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zd2l0Y2gtdGFiLWJ0bi5hY3RpdmU6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWN0YSk7XFxufVxcblxcbi5zd2l0Y2gtdGFiLWJ0bjpob3ZlcjpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgYmFja2dyb3VuZDogIzAwNTI2ODtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mb3JlY2FzdCAuY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IDFmcjtcXG4gIGdhcDogOHB4IDQ4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMTIpIDBweCAycHggNHB4IDBweCxcXG4gICAgcmdiYSgxNCwgMzAsIDM3LCAwLjMyKSAwcHggMnB4IDE2cHggMHB4O1xcbiAgbWF4LXdpZHRoOiA2MTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9yZWNhc3QgLnRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvLW1vYmlsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmZvcmVjYXN0IC5jYXJkIC50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4ubG9hZGVyIHtcXG4gIGJvcmRlcjogMTJweCBzb2xpZCAjZjNmM2YzO1xcbiAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCAjMzQ5OGRiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTc1cHgpIHtcXG4gIC5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDMycHg7XFxuICB9XFxuICAuY3VycmVudC13ZWF0aGVyIC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAud2VhdGhlci1jb25kaXRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5sb2dvLWRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmxvZ28tbW9iaWxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuY3VycmVudC13ZWF0aGVyIC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mb3JlY2FzdCAuY2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4gIC5mb3JlY2FzdCAuZGF0YS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgcHViU3ViIGZyb20gJy4vcHViU3ViJztcbmltcG9ydCBXZWF0aGVyVXRpbHMgZnJvbSAnLi91dGlscy9XZWF0aGVyVXRpbHMnO1xuXG5jb25zdCBBUElfS0VZID0gJ2I4YmVkYzIxMTAwMzAxMDFkZDljOGQwYzc0ZjIzMzZjJztcblxuLy8gVE9ETyBlcnJvciBoYW5kbGluZ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgc3RhdGljIGFzeW5jIGdldExvY2F0aW9uRGF0YShsb2NhdGlvbk5hbWUpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25OYW1lfSZsaW1pdD0xJmFwcGlkPSR7QVBJX0tFWX1gXG4gICAgKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBqc29uWzBdLm5hbWUsXG4gICAgICBjb3VudHJ5OiBqc29uWzBdLmNvdW50cnksXG4gICAgICBsYXQ6IGpzb25bMF0ubGF0LFxuICAgICAgbG9uOiBqc29uWzBdLmxvbixcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldFdlYXRoZXJCeUNvb3JkaW5hdGVzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsb2NhdGlvbi5sYXR9Jmxvbj0ke2xvY2F0aW9uLmxvbn0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgXG4gICAgKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldFdlYXRoZXJCeUxvY2F0aW9uTmFtZShsb2NhdGlvbk5hbWUpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG4gICAgbG9hZGVyLnNob3coKTtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBBcGkuZ2V0TG9jYXRpb25EYXRhKGxvY2F0aW9uTmFtZSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBBcGkuZ2V0V2VhdGhlckJ5Q29vcmRpbmF0ZXMobG9jYXRpb25EYXRhKTtcbiAgICBsb2FkZXIucmVtb3ZlKCk7XG4gICAgd2VhdGhlckRhdGEuY2l0eSA9IGxvY2F0aW9uRGF0YS5uYW1lO1xuICAgIHdlYXRoZXJEYXRhLmNvdW50cnkgPSBsb2NhdGlvbkRhdGEuY291bnRyeTtcbiAgICBjb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXJVdGlscyh3ZWF0aGVyRGF0YSkuZ2V0Tm9ybWFsaXplZERhdGEoKTtcbiAgICBwdWJTdWIucHVibGlzaCgnbmV3RGF0YScsIHdlYXRoZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFpbiBmcm9tICcuL2xheW91dC9NYWluJztcbmltcG9ydCBET01VdGlscyBmcm9tICcuL3V0aWxzL0RPTVV0aWxzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEFwaSBmcm9tICcuL0FwaSc7XG5cbi8vIFRPRE8gc3BsaXQgdmlld1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XG4gICAgdGhpcy5tYWluID0gbmV3IE1haW4oKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnYXBwJyxcbiAgICAgIH0sXG4gICAgICB0aGlzLmhlYWRlci5lbGVtZW50LFxuICAgICAgdGhpcy5tYWluLmVsZW1lbnRcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCBBcGkuZ2V0V2VhdGhlckJ5TG9jYXRpb25OYW1lKCdMb25kb24nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgZGF0YVNldCBmcm9tICcuLi8uLi9kYXRhJztcbmltcG9ydCBwdWJTdWIgZnJvbSAnLi4vLi4vcHViU3ViJztcbmltcG9ydCBTdHJpbmdVdGlscyBmcm9tICcuLi8uLi91dGlscy9TdHJpbmdVdGlscyc7XG5pbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRE9NVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW50V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IEN1cnJlbnRXZWF0aGVyLmdlbmVyYXRlQ3VycmVudFdlYXRoZXJFbGVtZW50KCk7XG4gICAgdGhpcy5kYXRhQXJyID0gW1xuICAgICAgZGF0YVNldC5mZWVsc0xpa2UsXG4gICAgICBkYXRhU2V0LndpbmRTcGVlZCxcbiAgICAgIGRhdGFTZXQuY2xvdWRpbmVzcyxcbiAgICAgIGRhdGFTZXQuaHVtaWRpdHksXG4gICAgICBkYXRhU2V0LnZpc2liaWxpdHksXG4gICAgICBkYXRhU2V0LnV2SW5kZXgsXG4gICAgXTtcbiAgICB0aGlzLmRhdGFBcnIuZm9yRWFjaCgoZGF0dW0pID0+IHtcbiAgICAgIHRoaXMuYWRkSW5mbyhkYXR1bSk7XG4gICAgfSk7XG4gICAgcHViU3ViLnN1YnNjcmliZSgnbmV3RGF0YScsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdXBkYXRlKGRhdGEpIHtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpLnRleHRDb250ZW50ID0gZGF0YS5jaXR5O1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmR0O1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUgLnZhbHVlJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKFxuICAgICAgZGF0YS5jdXJyZW50LnRlbXBcbiAgICApO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy53ZWF0aGVyLWNvbmRpdGlvbiBpbWcnXG4gICAgKS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb25kaXRpb24gLmRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPVxuICAgICAgU3RyaW5nVXRpbHMuY2FwaXRhbGl6ZShkYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgdGhpcy5kYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmRhdGEuJHtkYXR1bS52YXJOYW1lfSAudmFsdWVgKS50ZXh0Q29udGVudCA9XG4gICAgICAgIGRhdGEuY3VycmVudFtkYXR1bS52YXJOYW1lXSArIGRhdHVtLnVuaXQ7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVDdXJyZW50V2VhdGhlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2NpdHktbmFtZScsXG4gICAgICB9LFxuICAgICAgJ0NpdHknXG4gICAgKTtcbiAgICBjb25zdCBsb2NhbERhdGUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2RhdGUnLFxuICAgICAgfSxcbiAgICAgICctLSdcbiAgICApO1xuXG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICBzcmM6ICdodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDFuQDJ4LnBuZycsXG4gICAgICB3aWR0aDogJzk2cHgnLFxuICAgICAgaGVpZ2h0OiAnOTZweCcsXG4gICAgfSk7XG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdkZXNjcmlwdGlvbicsXG4gICAgICB9LFxuICAgICAgJy0tJ1xuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICd3ZWF0aGVyLWNvbmRpdGlvbicsXG4gICAgICB9LFxuICAgICAgd2VhdGhlckljb24sXG4gICAgICB3ZWF0aGVyRGVzY3JpcHRpb25cbiAgICApO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmVWYWx1ZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAndmFsdWUnLFxuICAgICAgfSxcbiAgICAgICctLSdcbiAgICApOyAvLyBGSVhNRSBlbGVtZW50IG1pZ2h0IG5vdCBiZSBuZWVkZWRcbiAgICBjb25zdCBzcGFuU21hbGwgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgICAnwrBDJ1xuICAgICk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3RlbXBlcmF0dXJlJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wZXJhdHVyZVZhbHVlLFxuICAgICAgc3BhblNtYWxsXG4gICAgKTtcblxuICAgIGNvbnN0IGNpdHlJbmZvID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2NpdHktaW5mbycsXG4gICAgICB9LFxuICAgICAgY2l0eU5hbWUsXG4gICAgICBsb2NhbERhdGUsXG4gICAgICB0ZW1wZXJhdHVyZVxuICAgICk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YUNvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAnZGF0YS1jb250YWluZXInLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdjdXJyZW50LXdlYXRoZXInLFxuICAgICAgfSxcbiAgICAgIGNpdHlJbmZvLFxuICAgICAgd2VhdGhlckNvbmRpdGlvbixcbiAgICAgIHdlYXRoZXJEYXRhQ29udGFpbmVyXG4gICAgKTtcbiAgfVxuXG4gIGFkZEluZm8ob2JqKSB7XG4gICAgY29uc3QgdmFsdWUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3ZhbHVlJyxcbiAgICAgIH0sXG4gICAgICAnLS0nXG4gICAgKTtcbiAgICBjb25zdCBkZXNjID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdkYXRhLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIG9iai5uYW1lXG4gICAgKTtcbiAgICBjb25zdCBpbWFnZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgIGFsdDogb2JqLm5hbWUsXG4gICAgICBzcmM6IG9iai5pY29uLFxuICAgIH0pO1xuICAgIGNvbnN0IGxlZ2VuZCA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdkZXNjcmlwdGlvbicsXG4gICAgICB9LFxuICAgICAgaW1hZ2UsXG4gICAgICBkZXNjXG4gICAgKTtcblxuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1jb250YWluZXInKS5hcHBlbmQoXG4gICAgICBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBgZGF0YSAke29iai52YXJOYW1lfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZCxcbiAgICAgICAgdmFsdWVcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRm9yZWNhc3QgZnJvbSAnLi9Gb3JlY2FzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5Rm9yZWNhc3QgZXh0ZW5kcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGRhdGFUb0Rpc3BsYXkpIHtcbiAgICBzdXBlcignRGFpbHknLCA4LCBkYXRhVG9EaXNwbGF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vRm9yZWNhc3RDYXJkL0ZvcmVjYXN0Q2FyZCc7XG5pbXBvcnQgcHViU3ViIGZyb20gJy4uLy4uL3B1YlN1Yic7XG5pbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRE9NVXRpbHMnO1xuXG4vLyBUT0RPIHNwbGl0IHZpZXdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIG51bWJlck9mQ2FyZHMsIGRhdGFUb0Rpc3BsYXkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5udW1iZXJPZkNhcmRzID0gbnVtYmVyT2ZDYXJkcztcbiAgICB0aGlzLmNhcmRzID0gW107XG4gICAgdGhpcy5kYXRhVG9EaXNwbGF5ID0gZGF0YVRvRGlzcGxheTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdlbmVyYXRlRm9yZWNhc3RFbGVtZW50KHRpdGxlKTtcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCduZXdEYXRhJywgdGhpcy51cGRhdGVDYXJkcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8vIFRPRE8gcmV2aWV3XG4gIGdlbmVyYXRlRm9yZWNhc3RFbGVtZW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkNhcmRzOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2FyZHNbaV0gPSBuZXcgQ2FyZCgnVGl0bGUnLCB0aGlzLnRpdGxlKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kYXRhVG9EaXNwbGF5Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuY2FyZHNbaV0uYWRkSW5mbyh0aGlzLmRhdGFUb0Rpc3BsYXlbal0pOyAvLyBGSVhNRSB0aGlzIHByb2JhYmx5IGRvZXMgbm90IGJlbG9uZyBoZXJlXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnY2FyZC1jb250YWluZXInLFxuICAgICAgfSxcbiAgICAgIC4uLnRoaXMuY2FyZHMubWFwKChjYXJkKSA9PiBjYXJkLmVsZW1lbnQpXG4gICAgKTtcbiAgICByZXR1cm4gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ZvcmVjYXN0JyxcbiAgICAgICAgJ2RhdGEtdHlwZSc6IHRoaXMudGl0bGUudG9Mb3dlckNhc2UoKSxcbiAgICAgIH0sXG4gICAgICBjYXJkQ29udGFpbmVyXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUNhcmRzKGRhdGEpIHtcbiAgICBjb25zdCB0aGlzRGF0YSA9IGRhdGFbdGhpcy50aXRsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICBjYXJkLnVwZGF0ZSh0aGlzRGF0YVtpbmRleF0sIHRoaXMuZGF0YVRvRGlzcGxheSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBGb3JlY2FzdCBmcm9tICcuL0ZvcmVjYXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91cmx5Rm9yZWNhc3QgZXh0ZW5kcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGRhdGFUb0Rpc3BsYXkpIHtcbiAgICBzdXBlcignSG91cmx5JywgNDgsIGRhdGFUb0Rpc3BsYXkpO1xuICB9XG59XG4iLCJpbXBvcnQgU3RyaW5nVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvU3RyaW5nVXRpbHMnO1xuaW1wb3J0IERPTVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL0RPTVV0aWxzJztcblxuLy8gVE9ETyByZXZpZXdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0Q2FyZCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdlbmVyYXRlRm9yZWNhc3RDYXJkRWxlbWVudCgpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgdGhpcy53ZWF0aGVyQ29uZGl0aW9uSW1nID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLndlYXRoZXItY29uZGl0aW9uIGltZydcbiAgICApO1xuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbkRlc2MgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcud2VhdGhlci1jb25kaXRpb24gcCdcbiAgICApO1xuICB9XG5cbiAgZ2VuZXJhdGVGb3JlY2FzdENhcmRFbGVtZW50KCkge1xuICAgIGNvbnN0IGgzID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdoMycsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAndGl0bGUnLCAvLyBUT0RPIG5hbWluZ1xuICAgICAgfSxcbiAgICAgIHRoaXMudGl0bGVcbiAgICApO1xuICAgIGNvbnN0IGRhdGFDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzczogJ2RhdGEtY29udGFpbmVyJywgLy8gVE9ETyBuYW1pbmdcbiAgICB9KTtcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wMW5AMngucG5nJyxcbiAgICAgIHdpZHRoOiAnNjRweCcsXG4gICAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICB9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdwJywge30sICctLScpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlRWxlbWVudCA9IHRoaXMuZ2VuZXJhdGVUZW1wZXJhdHVyZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnd2VhdGhlci1jb25kaXRpb24nLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXJJY29uLFxuICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLFxuICAgICAgdGVtcGVyYXR1cmVFbGVtZW50XG4gICAgKTtcbiAgICBjb25zdCBjYXJkID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2NhcmQnLFxuICAgICAgfSxcbiAgICAgIGgzLFxuICAgICAgd2VhdGhlckNvbmRpdGlvbixcbiAgICAgIGRhdGFDb250YWluZXJcbiAgICApO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlVGVtcGVyYXR1cmVEaXNwbGF5KHR5cGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAndmFsdWUnLFxuICAgICAgfSxcbiAgICAgICctLSdcbiAgICApO1xuICAgIGNvbnN0IHVuaXQgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3VuaXQnLFxuICAgICAgfSxcbiAgICAgICfCsEMnXG4gICAgKTtcbiAgICByZXR1cm4gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6IGAke3R5cGV9LXRlbXBlcmF0dXJlYCxcbiAgICAgIH0sXG4gICAgICB2YWx1ZSxcbiAgICAgIHVuaXRcbiAgICApO1xuICB9XG5cbiAgZ2VuZXJhdGVUZW1wZXJhdHVyZUVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ0RhaWx5Jykge1xuICAgICAgcmV0dXJuIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6ICd0ZW1wZXJhdHVyZScsXG4gICAgICAgIH0sXG4gICAgICAgIEZvcmVjYXN0Q2FyZC5nZW5lcmF0ZVRlbXBlcmF0dXJlRGlzcGxheSgnbWluJyksXG4gICAgICAgIEZvcmVjYXN0Q2FyZC5nZW5lcmF0ZVRlbXBlcmF0dXJlRGlzcGxheSgnbWF4JylcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdIb3VybHknKSB7XG4gICAgICByZXR1cm4gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgRm9yZWNhc3RDYXJkLmdlbmVyYXRlVGVtcGVyYXR1cmVEaXNwbGF5KCdzaW5nbGUnKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhZGRJbmZvKGluZm9PYmopIHtcbiAgICBjb25zdCB2YWx1ZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAndmFsdWUnLFxuICAgICAgfSxcbiAgICAgICctLSdcbiAgICApO1xuICAgIGNvbnN0IGRhdGFOYW1lID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdkYXRhLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIGluZm9PYmoubmFtZVxuICAgICk7XG4gICAgY29uc3QgbGVnZW5kID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIH0sXG4gICAgICBkYXRhTmFtZVxuICAgICk7XG4gICAgY29uc3QgY29udGFpbmVyID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogYGRhdGEgJHtpbmZvT2JqLnZhck5hbWV9YCxcbiAgICAgIH0sXG4gICAgICBsZWdlbmQsXG4gICAgICB2YWx1ZVxuICAgICk7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICB1cGRhdGUoZGF0YSwgZGF0YUFycikge1xuICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLmR0O1xuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbkltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICB0aGlzLndlYXRoZXJDb25kaXRpb25EZXNjLnRleHRDb250ZW50ID0gU3RyaW5nVXRpbHMuY2FwaXRhbGl6ZShcbiAgICAgIGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ0RhaWx5Jykge1xuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4tdGVtcGVyYXR1cmUgLnZhbHVlJykudGV4dENvbnRlbnQgPVxuICAgICAgICBNYXRoLnJvdW5kKGRhdGEudGVtcC5taW4pO1xuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgtdGVtcGVyYXR1cmUgLnZhbHVlJykudGV4dENvbnRlbnQgPVxuICAgICAgICBNYXRoLnJvdW5kKGRhdGEudGVtcC5tYXgpO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAnSG91cmx5Jykge1xuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtdGVtcGVyYXR1cmUgLnZhbHVlJykudGV4dENvbnRlbnQgPVxuICAgICAgICBNYXRoLnJvdW5kKGRhdGEudGVtcCk7XG4gICAgfVxuICAgIGRhdGFBcnIuZm9yRWFjaCgoZGF0dW0pID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuZGF0YS4ke2RhdHVtLnZhck5hbWV9IC52YWx1ZWApLnRleHRDb250ZW50ID1cbiAgICAgICAgZGF0YVtkYXR1bS52YXJOYW1lXSArIGRhdHVtLnVuaXQ7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBEYWlseUZvcmVjYXN0IGZyb20gJy4uL0ZvcmVjYXN0L0RhaWx5Rm9yZWNhc3QnO1xuaW1wb3J0IEhvdXJseUZvcmVjYXN0IGZyb20gJy4uL0ZvcmVjYXN0L0hvdXJseUZvcmVjYXN0JztcbmltcG9ydCBkYXRhU2V0IGZyb20gJy4uLy4uL2RhdGEnO1xuaW1wb3J0IERPTVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL0RPTVV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZWNhc3RDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhaWx5Rm9yZWNhc3QgPSBuZXcgRGFpbHlGb3JlY2FzdChbXG4gICAgICBkYXRhU2V0LnN1bnJpc2UsXG4gICAgICBkYXRhU2V0LnN1bnNldCxcbiAgICAgIGRhdGFTZXQuY2xvdWRpbmVzcyxcbiAgICAgIGRhdGFTZXQucmFpblByb2JhYmlsaXR5LFxuICAgIF0pO1xuICAgIHRoaXMuaG91cmx5Rm9yZWNhc3QgPSBuZXcgSG91cmx5Rm9yZWNhc3QoW1xuICAgICAgZGF0YVNldC5yYWluUHJvYmFiaWxpdHksXG4gICAgICBkYXRhU2V0LmNsb3VkaW5lc3MsXG4gICAgICBkYXRhU2V0Lmh1bWlkaXR5LFxuICAgICAgZGF0YVNldC51dkluZGV4LFxuICAgIF0pO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2VuZXJhdGVGb3JlY2FzdENvbnRhaW5lckVsZW1lbnQoKTtcbiAgfVxuXG4gIGdlbmVyYXRlRm9yZWNhc3RDb250YWluZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IGRhaWx5U3dpdGNoQnV0dG9uID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3M6ICdzd2l0Y2gtdGFiLWJ0bicsXG4gICAgICAgICdkYXRhLWZvcmVjYXN0JzogJ2RhaWx5JyxcbiAgICAgIH0sXG4gICAgICAnRGFpbHknXG4gICAgKTtcblxuICAgIGRhaWx5U3dpdGNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIHRoaXMuc3dpdGNoVGFiKHRoaXMuZGFpbHlGb3JlY2FzdC5lbGVtZW50KVxuICAgICk7XG5cbiAgICBjb25zdCBob3VybHlTd2l0Y2hCdXR0b24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjbGFzczogJ3N3aXRjaC10YWItYnRuIGFjdGl2ZScsXG4gICAgICAgICdkYXRhLWZvcmVjYXN0JzogJ2hvdXJseScsXG4gICAgICB9LFxuICAgICAgJ0hvdXJseSdcbiAgICApO1xuXG4gICAgaG91cmx5U3dpdGNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIHRoaXMuc3dpdGNoVGFiKHRoaXMuaG91cmx5Rm9yZWNhc3QuZWxlbWVudClcbiAgICApO1xuXG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdidXR0b25zLWNvbnRhaW5lcicsXG4gICAgICB9LFxuICAgICAgZGFpbHlTd2l0Y2hCdXR0b24sXG4gICAgICBob3VybHlTd2l0Y2hCdXR0b25cbiAgICApO1xuXG4gICAgcmV0dXJuIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdmb3JlY2FzdC1jb250YWluZXInLFxuICAgICAgfSxcbiAgICAgIGJ1dHRvbnNDb250YWluZXIsXG4gICAgICB0aGlzLmhvdXJseUZvcmVjYXN0LmVsZW1lbnRcbiAgICApO1xuICB9XG5cbiAgc3dpdGNoVGFiKG5ld1RhYikge1xuICAgIGNvbnN0IGFjdGl2ZUZvcmVjYXN0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgIGlmIChhY3RpdmVGb3JlY2FzdCA9PT0gbmV3VGFiKSByZXR1cm47XG4gICAgY29uc3QgZm9yZWNhc3RUeXBlID0gYWN0aXZlRm9yZWNhc3QuZGF0YXNldC50eXBlO1xuICAgIHRoaXMuZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5zd2l0Y2gtdGFiLWJ0bltkYXRhLWZvcmVjYXN0PSR7Zm9yZWNhc3RUeXBlfWApXG4gICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY29uc3QgbmV3Rm9yZWNhc3RUeXBlID0gbmV3VGFiLmRhdGFzZXQudHlwZTtcbiAgICB0aGlzLmVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuc3dpdGNoLXRhYi1idG5bZGF0YS1mb3JlY2FzdD0ke25ld0ZvcmVjYXN0VHlwZX1gKVxuICAgICAgLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZChhY3RpdmVGb3JlY2FzdCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChuZXdUYWIpO1xuICB9XG59XG4iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRE9NVXRpbHMnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9TZWFyY2hCYXIvU2VhcmNoQmFyJztcbmltcG9ydCBMT0dPX0lDT04gZnJvbSAnLi4vLi4vaWNvbnMvbG9nby5zdmcnO1xuXG4vLyBUT0RPIHNwbGl0IHZpZXdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VhcmNoQmFyID0gbmV3IFNlYXJjaEJhcigpO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJFbGVtZW50KCk7XG4gIH1cblxuICBnZW5lcmF0ZUhlYWRlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgaDEgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2gxJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdsb2dvLWRlc2t0b3AnLFxuICAgICAgfSxcbiAgICAgICd3ZWF0aGVyIGFwcCdcbiAgICApO1xuICAgIGNvbnN0IGxvZ28gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICBjbGFzczogJ2xvZ28tbW9iaWxlJyxcbiAgICAgIHdpZHRoOiAnMzZweCcsXG4gICAgICBzcmM6IExPR09fSUNPTixcbiAgICAgIGFsdDogJ3dlYXRoZXIgYXBwJyxcbiAgICB9KTtcbiAgICByZXR1cm4gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdoZWFkZXInLFxuICAgICAge30sXG4gICAgICBoMSxcbiAgICAgIGxvZ28sXG4gICAgICB0aGlzLnNlYXJjaEJhci5lbGVtZW50XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IERPTVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL0RPTVV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gTG9hZGVyLmdlbmVyYXRlTG9hZGVyRWxlbWVudCgpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZUxvYWRlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3M6ICdsb2FkZXInLFxuICAgIH0pO1xuICAgIHJldHVybiBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnb3ZlcmxheScsXG4gICAgICB9LFxuICAgICAgbG9hZGVyXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFwaSBmcm9tICcuLi8uLi9BcGknO1xuaW1wb3J0IERPTVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL0RPTVV0aWxzJztcbmltcG9ydCBTRUFSQ0hfSUNPTiBmcm9tICcuLi8uLi9pY29ucy9zZWFyY2guc3ZnJztcblxuLy8gVE9ETyBzcGxpdCB2aWV3XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBTZWFyY2hCYXIuZ2VuZXJhdGVTZWFyY2hCYXJFbGVtZW50KCk7XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVTZWFyY2hCYXJFbGVtZW50KCkge1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICBzcmM6IFNFQVJDSF9JQ09OLFxuICAgICAgY2xhc3M6ICdpY29uJyxcbiAgICB9KTtcbiAgICBjb25zdCBzZWFyY2hMYWJlbCA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGFiZWwnLFxuICAgICAge1xuICAgICAgICBmb3I6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgfSxcbiAgICAgIHNlYXJjaEljb25cbiAgICApO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICBpZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ0NpdHkgbmFtZScsXG4gICAgfSk7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3NlYXJjaC1idXR0b24nLFxuICAgICAgfSxcbiAgICAgICdHbyEnXG4gICAgKTtcbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2Zvcm0nLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3NlYXJjaC1iYXInLFxuICAgICAgfSxcbiAgICAgIHNlYXJjaExhYmVsLFxuICAgICAgc2VhcmNoSW5wdXQsXG4gICAgICBzZWFyY2hCdXR0b25cbiAgICApO1xuICAgIHNlYXJjaENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCFzZWFyY2hJbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgICAgYXdhaXQgQXBpLmdldFdlYXRoZXJCeUxvY2F0aW9uTmFtZShzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlYXJjaENvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0IFRIRVJNT01FVEVSIGZyb20gJy4vaWNvbnMvd2VhdGhlci90aGVybW9tZXRlci5zdmcnO1xuaW1wb3J0IEhVTUlESVRZIGZyb20gJy4vaWNvbnMvd2VhdGhlci9odW1pZGl0eS5zdmcnO1xuaW1wb3J0IFdJTkRfU1BFRUQgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3dpbmQtc3BlZWQuc3ZnJztcbmltcG9ydCBDTE9VRElORVNTIGZyb20gJy4vaWNvbnMvd2VhdGhlci9jbG91ZGluZXNzLnN2Zyc7XG5pbXBvcnQgU1VOUklTRSBmcm9tICcuL2ljb25zL3dlYXRoZXIvc3VucmlzZS5zdmcnO1xuaW1wb3J0IFNVTlNFVCBmcm9tICcuL2ljb25zL3dlYXRoZXIvc3Vuc2V0LnN2Zyc7XG5pbXBvcnQgVVZfSU5ERVggZnJvbSAnLi9pY29ucy93ZWF0aGVyL3V2LWluZGV4LnN2Zyc7XG5pbXBvcnQgVklTSUJJTElUWSBmcm9tICcuL2ljb25zL3dlYXRoZXIvdmlzaWJpbGl0eS5zdmcnO1xuaW1wb3J0IFJBSU5fUFJPQkFCSUxJVFkgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3JhaW4tcHJvYmFiaWxpdHkuc3ZnJztcblxuZnVuY3Rpb24gZmFjdG9yeShuYW1lLCBpY29uLCB2YXJOYW1lLCB1bml0KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBpY29uLFxuICAgIHZhck5hbWUsXG4gICAgdW5pdCxcbiAgfTtcbn1cblxuY29uc3QgZGF0YVNldCA9IHtcbiAgdGVtcGVyYXR1cmU6IGZhY3RvcnkoJ1RlbXBlcmF0dXJlJywgVEhFUk1PTUVURVIsICd0ZW1wJywgJ8KwQycpLFxuICByYWluUHJvYmFiaWxpdHk6IGZhY3RvcnkoJ1JhaW4gcHJvYi4nLCBSQUlOX1BST0JBQklMSVRZLCAncG9wJywgJyUnKSxcbiAgZmVlbHNMaWtlOiBmYWN0b3J5KCdGZWVscyBsaWtlJywgVEhFUk1PTUVURVIsICdmZWVsc19saWtlJywgJ8KwQycpLFxuICB3aW5kU3BlZWQ6IGZhY3RvcnkoJ1dpbmQgc3BlZWQnLCBXSU5EX1NQRUVELCAnd2luZF9zcGVlZCcsICcgbS9zJyksXG4gIGNsb3VkaW5lc3M6IGZhY3RvcnkoJ0Nsb3VkaW5lc3MnLCBDTE9VRElORVNTLCAnY2xvdWRzJywgJyUnKSxcbiAgaHVtaWRpdHk6IGZhY3RvcnkoJ0h1bWlkaXR5JywgSFVNSURJVFksICdodW1pZGl0eScsICclJyksXG4gIHN1bnJpc2U6IGZhY3RvcnkoJ1N1bnJpc2UnLCBTVU5SSVNFLCAnc3VucmlzZScsICcnKSxcbiAgc3Vuc2V0OiBmYWN0b3J5KCdTdW5zZXQnLCBTVU5TRVQsICdzdW5zZXQnLCAnJyksXG4gIHV2SW5kZXg6IGZhY3RvcnkoJ1VWIGluZGV4JywgVVZfSU5ERVgsICd1dmknLCAnJyksXG4gIHZpc2liaWxpdHk6IGZhY3RvcnkoJ1Zpc2liaWxpdHknLCBWSVNJQklMSVRZLCAndmlzaWJpbGl0eScsICcgbScpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YVNldDtcbiIsImltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5pbml0KCk7XG4iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi4vdXRpbHMvRE9NVXRpbHMnO1xuaW1wb3J0IEN1cnJlbnRXZWF0aGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VycmVudFdlYXRoZXIvQ3VycmVudFdlYXRoZXInO1xuaW1wb3J0IEZvcmVjYXN0Q29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9yZWNhc3RDb250YWluZXIvRm9yZWNhc3RDb250YWluZXInO1xuXG4vLyBUT0RPIHNwbGl0IHZpZXdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZvcmVjYXN0Q29udGFpbmVyID0gbmV3IEZvcmVjYXN0Q29udGFpbmVyKCk7XG4gICAgdGhpcy5jdXJyZW50V2VhdGhlciA9IG5ldyBDdXJyZW50V2VhdGhlcigpO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2VuZXJhdGVNYWluRWxlbWVudCgpO1xuICB9XG5cbiAgZ2VuZXJhdGVNYWluRWxlbWVudCgpIHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YUNvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICd3ZWF0aGVyLWRhdGEtY29udGFpbmVyJyxcbiAgICAgIH0sXG4gICAgICB0aGlzLmN1cnJlbnRXZWF0aGVyLmVsZW1lbnQsXG4gICAgICB0aGlzLmZvcmVjYXN0Q29udGFpbmVyLmVsZW1lbnRcbiAgICApO1xuICAgIHJldHVybiBET01VdGlscy5jcmVhdGVFbGVtZW50KCdtYWluJywge30sIHdlYXRoZXJEYXRhQ29udGFpbmVyKTtcbiAgfVxufVxuIiwiY2xhc3MgUHViU3ViIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgfVxuXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGYpIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZik7XG4gIH1cblxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgZihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluY2x1ZGVzKGYpKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UodGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGYpKTtcbiAgfVxufVxuXG5jb25zdCBwdWJTdWIgPSBuZXcgUHViU3ViKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHB1YlN1YjtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTVV0aWxzIHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgcHJvcHMsIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgbm9kZS5hcHBlbmQoY2hpbGQpO1xuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVXRpbHMge1xuICBzdGF0aWMgZ2V0RGF0ZU9wdGlvbnModGltZVpvbmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGFpbHk6IHtcbiAgICAgICAgdGltZVpvbmUsXG4gICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgIH0sXG4gICAgICBtaW51dGVseToge1xuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIH0sXG4gICAgICBob3VybHk6IHtcbiAgICAgICAgdGltZVpvbmUsXG4gICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICB9LFxuICAgICAgY3VycmVudDoge1xuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIH0sXG4gICAgICBzdW5zZXQ6IHtcbiAgICAgICAgdGltZVpvbmUsXG4gICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGF0ZVN0cmluZyhkYXRlLCBvcHRpb25zLCBsb2NhbGUgPSAnZW4tVUsnKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUgKiAxMDAwKS50b0xvY2FsZVN0cmluZyhsb2NhbGUsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdVdGlscyB7XG4gIHN0YXRpYyBjYXBpdGFsaXplKHN0cikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykgcmV0dXJuIHN0cjtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRlVXRpbHMgZnJvbSAnLi9EYXRlVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyVXRpbHMge1xuICBjb25zdHJ1Y3Rvcih3ZWF0aGVyRGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IHdlYXRoZXJEYXRhO1xuICAgIHRoaXMuZGF0ZU9wdGlvbnMgPSBEYXRlVXRpbHMuZ2V0RGF0ZU9wdGlvbnModGhpcy5kYXRhLnRpbWV6b25lKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZU9iamVjdChvYmosIHR5cGUpIHtcbiAgICBjb25zdCB7IGdldERhdGVTdHJpbmcgfSA9IERhdGVVdGlscztcbiAgICBjb25zdCB7IHJlcGxhY2VJZk5vdFVuZGVmaW5lZCB9ID0gV2VhdGhlclV0aWxzO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5vYmosXG4gICAgICBkdDogZ2V0RGF0ZVN0cmluZyhvYmouZHQsIHRoaXMuZGF0ZU9wdGlvbnNbdHlwZV0pLFxuICAgICAgcG9wOiByZXBsYWNlSWZOb3RVbmRlZmluZWQob2JqLnBvcCwgTWF0aC5yb3VuZChvYmoucG9wICogMTAwMDApIC8gMTAwKSxcbiAgICAgIHN1bnJpc2U6IHJlcGxhY2VJZk5vdFVuZGVmaW5lZChcbiAgICAgICAgb2JqLnN1bnJpc2UsXG4gICAgICAgIGdldERhdGVTdHJpbmcob2JqLnN1bnJpc2UsIHRoaXMuZGF0ZU9wdGlvbnMuc3Vuc2V0KVxuICAgICAgKSxcbiAgICAgIHN1bnNldDogcmVwbGFjZUlmTm90VW5kZWZpbmVkKFxuICAgICAgICBvYmouc3Vuc2V0LFxuICAgICAgICBnZXREYXRlU3RyaW5nKG9iai5zdW5zZXQsIHRoaXMuZGF0ZU9wdGlvbnMuc3Vuc2V0KVxuICAgICAgKSxcbiAgICAgIG1vb25yaXNlOiByZXBsYWNlSWZOb3RVbmRlZmluZWQoXG4gICAgICAgIG9iai5tb29ucmlzZSxcbiAgICAgICAgZ2V0RGF0ZVN0cmluZyhvYmoubW9vbnJpc2UsIHRoaXMuZGF0ZU9wdGlvbnMuc3Vuc2V0KVxuICAgICAgKSxcbiAgICAgIG1vb25zZXQ6IHJlcGxhY2VJZk5vdFVuZGVmaW5lZChcbiAgICAgICAgb2JqLm1vb25zZXQsXG4gICAgICAgIGdldERhdGVTdHJpbmcob2JqLm1vb25zZXQsIHRoaXMuZGF0ZU9wdGlvbnMuc3Vuc2V0KVxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2VJZk5vdFVuZGVmaW5lZCh2YWx1ZSwgbmV3VmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH1cblxuICBnZXROb3JtYWxpemVkRGF0YSgpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBjdXJyZW50OiB0aGlzLm5vcm1hbGl6ZU9iamVjdChkYXRhLmN1cnJlbnQsICdjdXJyZW50JyksXG4gICAgICBkYWlseTogZGF0YS5kYWlseS5tYXAoKG9iaikgPT4gdGhpcy5ub3JtYWxpemVPYmplY3Qob2JqLCAnZGFpbHknKSksXG4gICAgICBob3VybHk6IGRhdGEuaG91cmx5Lm1hcCgob2JqKSA9PiB0aGlzLm5vcm1hbGl6ZU9iamVjdChvYmosICdob3VybHknKSksXG4gICAgICBtaW51dGVseTogZGF0YS5taW51dGVseS5tYXAoKG9iaikgPT5cbiAgICAgICAgdGhpcy5ub3JtYWxpemVPYmplY3Qob2JqLCAnbWludXRlbHknKVxuICAgICAgKSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=