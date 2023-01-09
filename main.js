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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 16px;\n  --color-cta: #3aff5b;\n  --color-background: #e1e8ef;\n  --color-current-weather: #0097cf;\n  --color-card: #ffffff;\n  --box-shadow-card: 0 1px 3px rgba(0, 0, 0, 0.12),\n    0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--color-background);\n  color: white;\n}\n\n.app {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: 'Poppins', sans-serif;\n  background-color: var(--color-current-weather);\n}\n\nheader {\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n}\n\nh1 {\n  font-size: 1.2rem;\n  font-family: 'Comfortaa', cursive;\n  letter-spacing: 2px;\n  color: white;\n}\n\n.search-bar input {\n  flex: 1;\n  color: white;\n  font-size: 1rem;\n  background: none;\n  border: none;\n  min-width: 0;\n}\n\n.search-bar input::placeholder {\n  color: #bebebe;\n}\n\n.search-bar input:focus {\n  outline: none;\n}\n\n.search-bar {\n  padding: 2px 6px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 16px;\n  border: 2px solid white;\n  max-width: 250px;\n  min-width: 0;\n}\n\n.search-bar .icon {\n  height: 16px;\n  display: block;\n}\n\n.search-bar button {\n  font-size: 0.9rem;\n  border: none;\n  background-color: transparent;\n  color: var(--color-cta);\n  font-weight: 700;\n  cursor: pointer;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.current-weather {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n  padding: 32px 8px;\n  text-align: center;\n}\n\n.current-weather .city-info {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.current-weather .city-name {\n  font-size: 3rem;\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  color: var(--color-cta);\n  text-shadow: 1px 1px black;\n}\n\n.current-weather .single-temperature .value {\n  font-size: 4rem;\n  text-align: center;\n}\n\n.current-weather .single-temperature .unit {\n  font-size: 1.5rem;\n  position: relative;\n  bottom: 32px;\n}\n\n.current-weather .weather-condition {\n  font-size: 1.2rem;\n}\n\n.current-weather .weather-condition img {\n  height: 64px;\n  object-fit: cover;\n}\n\n.current-weather .data-container {\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: repeat(3, max-content);\n}\n\n.forecast {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.forecast .weather-condition img {\n  height: 48px;\n  object-fit: cover;\n  filter: drop-shadow(0 0 1px black);\n}\n\n.data-container {\n  display: grid;\n  gap: 16px 48px;\n  grid-template-columns: 1fr 1fr;\n}\n\n.data-name {\n  font-weight: 700;\n}\n\n.data-container img {\n  width: 32px;\n}\n\n.current-weather .data,\n.current-weather .data .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.forecast .data {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.temperature-minmax {\n  display: flex;\n  gap: 16px;\n}\n\n.weather-condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  text-align: center;\n}\n\n.weather-condition img {\n  display: block;\n}\n\n.forecast-container {\n  width: 100%;\n  padding: 16px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  background-color: var(--color-background);\n}\n\n.forecast-container .buttons-container {\n  display: flex;\n  gap: 32px;\n}\n\n.switch-tab-btn {\n  position: relative;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.switch-tab-btn:before {\n  position: absolute;\n  width: 0;\n  height: 3px;\n  bottom: 0;\n  left: 50%;\n  content: '';\n  transition: all 0.5s;\n  background-color: black;\n}\n\n.switch-tab-btn.active:before {\n  width: 100%;\n  left: 0;\n  background-color: var(--color-current-weather);\n}\n\n.switch-tab-btn:hover:before {\n  width: 100%;\n  left: 0;\n}\n\n.card {\n  border-radius: 8px;\n  padding: 24px;\n  background-color: var(--color-card);\n  color: black;\n  box-shadow: var(--box-shadow-card);\n}\n\n.card h3 {\n  font-size: 1.5rem;\n}\n\n.forecast .card {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-template-columns: 130px 1fr;\n  gap: 8px 48px;\n  align-items: center;\n  justify-content: center;\n  max-width: 610px;\n  width: 100%;\n}\n\n.forecast .time {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\n.forecast .card .temperature {\n  display: flex;\n  gap: 16px;\n  font-weight: 300;\n  justify-content: center;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.cloud-container {\n  position: relative;\n  width: 160px;\n  height: 50px;\n  background-color: white;\n  border-radius: 50px;\n}\n\n.cloud-container:before {\n  content: '';\n  position: absolute;\n  height: 55px;\n  width: 55px;\n  top: -25px;\n  left: 20px;\n  background-color: white;\n  border-radius: 50%;\n  box-shadow: 45px 5px 0 15px white;\n}\n\n.cloud {\n  position: absolute;\n  background-color: #ffffff00;\n  overflow: hidden;\n}\n\n.cloud:before {\n  content: '';\n  background-color: var(--color-current-weather);\n  position: absolute;\n  height: 160px;\n  width: 160px;\n  bottom: 0;\n  animation: loading 2s infinite;\n}\n\n.cloud:nth-child(2):before {\n  bottom: -20px;\n}\n\n@keyframes loading {\n  from {\n    transform: translateY(160px);\n  }\n  to {\n    transform: translateY(75px);\n  }\n}\n\n.cloud:nth-child(1) {\n  width: 160px;\n  height: 50px;\n  border-radius: 50px;\n}\n\n.cloud:nth-child(2) {\n  top: -25px;\n  left: 20px;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n}\n\n.cloud:nth-child(3) {\n  top: -35px;\n  left: 50px;\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  filter: drop-shadow(1px 1px 2px black);\n}\n\n@media (max-width: 975px) {\n  .current-weather {\n    flex-direction: column;\n    gap: 0;\n    padding: 0 8px 32px;\n  }\n  .current-weather .data-container {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    width: 100%;\n  }\n  .weather-condition {\n    margin-bottom: 16px;\n  }\n}\n\n@media (max-width: 650px) {\n  .current-weather .data-container {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: none;\n    gap: 16px;\n    width: 100%;\n  }\n  .forecast .card {\n    grid-template-rows: max-content max-content 1fr;\n    grid-template-columns: 1fr;\n  }\n  .forecast .data-container {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  }\n  .logo-container h1 {\n    display: none;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Poppins:wght@300&display=swap');\n\n:root {\n  font-size: 16px;\n  --color-cta: #3aff5b;\n  --color-background: #e1e8ef;\n  --color-current-weather: #0097cf;\n  --color-card: #ffffff;\n  --box-shadow-card: 0 1px 3px rgba(0, 0, 0, 0.12),\n    0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--color-background);\n  color: white;\n}\n\n.app {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: 'Poppins', sans-serif;\n  background-color: var(--color-current-weather);\n}\n\nheader {\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n}\n\nh1 {\n  font-size: 1.2rem;\n  font-family: 'Comfortaa', cursive;\n  letter-spacing: 2px;\n  color: white;\n}\n\n.search-bar input {\n  flex: 1;\n  color: white;\n  font-size: 1rem;\n  background: none;\n  border: none;\n  min-width: 0;\n}\n\n.search-bar input::placeholder {\n  color: #bebebe;\n}\n\n.search-bar input:focus {\n  outline: none;\n}\n\n.search-bar {\n  padding: 2px 6px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 16px;\n  border: 2px solid white;\n  max-width: 250px;\n  min-width: 0;\n}\n\n.search-bar .icon {\n  height: 16px;\n  display: block;\n}\n\n.search-bar button {\n  font-size: 0.9rem;\n  border: none;\n  background-color: transparent;\n  color: var(--color-cta);\n  font-weight: 700;\n  cursor: pointer;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.current-weather {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n  padding: 32px 8px;\n  text-align: center;\n}\n\n.current-weather .city-info {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.current-weather .city-name {\n  font-size: 3rem;\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  color: var(--color-cta);\n  text-shadow: 1px 1px black;\n}\n\n.current-weather .single-temperature .value {\n  font-size: 4rem;\n  text-align: center;\n}\n\n.current-weather .single-temperature .unit {\n  font-size: 1.5rem;\n  position: relative;\n  bottom: 32px;\n}\n\n.current-weather .weather-condition {\n  font-size: 1.2rem;\n}\n\n.current-weather .weather-condition img {\n  height: 64px;\n  object-fit: cover;\n}\n\n.current-weather .data-container {\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: repeat(3, max-content);\n}\n\n.forecast {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.forecast .weather-condition img {\n  height: 48px;\n  object-fit: cover;\n  filter: drop-shadow(0 0 1px black);\n}\n\n.data-container {\n  display: grid;\n  gap: 16px 48px;\n  grid-template-columns: 1fr 1fr;\n}\n\n.data-name {\n  font-weight: 700;\n}\n\n.data-container img {\n  width: 32px;\n}\n\n.current-weather .data,\n.current-weather .data .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.forecast .data {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.temperature-minmax {\n  display: flex;\n  gap: 16px;\n}\n\n.weather-condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  text-align: center;\n}\n\n.weather-condition img {\n  display: block;\n}\n\n.forecast-container {\n  width: 100%;\n  padding: 16px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  background-color: var(--color-background);\n}\n\n.forecast-container .buttons-container {\n  display: flex;\n  gap: 32px;\n}\n\n.switch-tab-btn {\n  position: relative;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.switch-tab-btn:before {\n  position: absolute;\n  width: 0;\n  height: 3px;\n  bottom: 0;\n  left: 50%;\n  content: '';\n  transition: all 0.5s;\n  background-color: black;\n}\n\n.switch-tab-btn.active:before {\n  width: 100%;\n  left: 0;\n  background-color: var(--color-current-weather);\n}\n\n.switch-tab-btn:hover:before {\n  width: 100%;\n  left: 0;\n}\n\n.card {\n  border-radius: 8px;\n  padding: 24px;\n  background-color: var(--color-card);\n  color: black;\n  box-shadow: var(--box-shadow-card);\n}\n\n.card h3 {\n  font-size: 1.5rem;\n}\n\n.forecast .card {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-template-columns: 130px 1fr;\n  gap: 8px 48px;\n  align-items: center;\n  justify-content: center;\n  max-width: 610px;\n  width: 100%;\n}\n\n.forecast .time {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\n.forecast .card .temperature {\n  display: flex;\n  gap: 16px;\n  font-weight: 300;\n  justify-content: center;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.cloud-container {\n  position: relative;\n  width: 160px;\n  height: 50px;\n  background-color: white;\n  border-radius: 50px;\n}\n\n.cloud-container:before {\n  content: '';\n  position: absolute;\n  height: 55px;\n  width: 55px;\n  top: -25px;\n  left: 20px;\n  background-color: white;\n  border-radius: 50%;\n  box-shadow: 45px 5px 0 15px white;\n}\n\n.cloud {\n  position: absolute;\n  background-color: #ffffff00;\n  overflow: hidden;\n}\n\n.cloud:before {\n  content: '';\n  background-color: var(--color-current-weather);\n  position: absolute;\n  height: 160px;\n  width: 160px;\n  bottom: 0;\n  animation: loading 2s infinite;\n}\n\n.cloud:nth-child(2):before {\n  bottom: -20px;\n}\n\n@keyframes loading {\n  from {\n    transform: translateY(160px);\n  }\n  to {\n    transform: translateY(75px);\n  }\n}\n\n.cloud:nth-child(1) {\n  width: 160px;\n  height: 50px;\n  border-radius: 50px;\n}\n\n.cloud:nth-child(2) {\n  top: -25px;\n  left: 20px;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n}\n\n.cloud:nth-child(3) {\n  top: -35px;\n  left: 50px;\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  filter: drop-shadow(1px 1px 2px black);\n}\n\n@media (max-width: 975px) {\n  .current-weather {\n    flex-direction: column;\n    gap: 0;\n    padding: 0 8px 32px;\n  }\n  .current-weather .data-container {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    width: 100%;\n  }\n  .weather-condition {\n    margin-bottom: 16px;\n  }\n}\n\n@media (max-width: 650px) {\n  .current-weather .data-container {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: none;\n    gap: 16px;\n    width: 100%;\n  }\n  .forecast .card {\n    grid-template-rows: max-content max-content 1fr;\n    grid-template-columns: 1fr;\n  }\n  .forecast .data-container {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  }\n  .logo-container h1 {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Api.ts":
/*!********************!*\
  !*** ./src/Api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Loader/Loader */ "./src/components/Loader/Loader.ts");
/* harmony import */ var _utils_WeatherUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/WeatherUtils */ "./src/utils/WeatherUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const API_KEY = 'b8bedc2110030101dd9c8d0c74f2336c';
// TODO error handling
class Api {
    static getLocationData(locationName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`);
            const json = yield response.json();
            return {
                name: json[0].name,
                country: json[0].country,
                lat: json[0].lat,
                lon: json[0].lon,
            };
        });
    }
    static getWeatherByCoordinates(location) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`);
            const json = yield response.json();
            return json;
        });
    }
    static getWeatherByLocationName(locationName) {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = new _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_0__["default"]();
            loader.show();
            const locationData = yield Api.getLocationData(locationName);
            const weatherData = yield Api.getWeatherByCoordinates(locationData);
            loader.remove();
            const weatherAndLocationData = Object.assign(Object.assign({}, weatherData), { city: locationData.name, country: locationData.country });
            weatherAndLocationData.city = locationData.name;
            weatherAndLocationData.country = locationData.country;
            return new _utils_WeatherUtils__WEBPACK_IMPORTED_MODULE_1__["default"](weatherAndLocationData).getNormalizedData();
        });
    }
}


/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _layout_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/Main */ "./src/layout/Main.ts");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header/Header */ "./src/components/Header/Header.ts");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Api */ "./src/Api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class App extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add('app');
        this.setCity = this.setCity.bind(this);
        this.header = new _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"](this.setCity);
        this.main = null;
        this.append(this.header);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setCity('London');
            document.body.append(this);
        });
    }
    setCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield _Api__WEBPACK_IMPORTED_MODULE_2__["default"].getWeatherByLocationName(city);
            if (!this.main) {
                this.main = new _layout_Main__WEBPACK_IMPORTED_MODULE_0__["default"](data);
                this.append(this.main);
            }
            else
                this.main.update(data);
        });
    }
}
customElements.define('app-component', App, { extends: 'div' });


/***/ }),

/***/ "./src/components/CurrentWeather/CurrentWeather.ts":
/*!*********************************************************!*\
  !*** ./src/components/CurrentWeather/CurrentWeather.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrentWeather)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ "./src/data.ts");
/* harmony import */ var _DataContainer_DataContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataContainer/DataContainer */ "./src/components/DataContainer/DataContainer.ts");
/* harmony import */ var _ForecastCard_TemperatureDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ForecastCard/TemperatureDisplay */ "./src/components/ForecastCard/TemperatureDisplay.ts");
/* harmony import */ var _ForecastCard_WeatherCondition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ForecastCard/WeatherCondition */ "./src/components/ForecastCard/WeatherCondition.ts");




class CurrentWeather extends HTMLDivElement {
    // TODO fix data type
    constructor(data, city) {
        super();
        this.classList.add('current-weather');
        this.displayedData = [
            _data__WEBPACK_IMPORTED_MODULE_0__.feelsLike,
            _data__WEBPACK_IMPORTED_MODULE_0__.windSpeed,
            _data__WEBPACK_IMPORTED_MODULE_0__.cloudiness,
            _data__WEBPACK_IMPORTED_MODULE_0__.humidity,
            _data__WEBPACK_IMPORTED_MODULE_0__.visibility,
            _data__WEBPACK_IMPORTED_MODULE_0__.uvIndex,
        ];
        this.dataContainer = new _DataContainer_DataContainer__WEBPACK_IMPORTED_MODULE_1__["default"](this.displayedData, data, true);
        this.weatherCondition = new _ForecastCard_WeatherCondition__WEBPACK_IMPORTED_MODULE_3__["default"](data.weather[0], '96px');
        this.cityName = document.createElement('h2');
        this.cityName.classList.add('city-name');
        this.localDate = document.createElement('p');
        this.localDate.classList.add('date');
        this.temperatureDisplay = new _ForecastCard_TemperatureDisplay__WEBPACK_IMPORTED_MODULE_2__["default"]('single', data.temp);
        const cityInfo = document.createElement('div');
        cityInfo.classList.add('city-info');
        cityInfo.append(this.cityName, this.localDate, this.temperatureDisplay);
        this.append(cityInfo, this.weatherCondition, this.dataContainer);
        this.update(data, city);
    }
    // TODO fix data type
    update(newData, newCity) {
        this.cityName.textContent = newCity;
        this.localDate.textContent = newData.dt;
        this.temperatureDisplay.update(newData.temp);
        this.weatherCondition.update(newData.weather[0]);
        this.dataContainer.update(newData);
    }
}
customElements.define('current-weather', CurrentWeather, { extends: 'div' });


/***/ }),

/***/ "./src/components/DataContainer/DataContainer.ts":
/*!*******************************************************!*\
  !*** ./src/components/DataContainer/DataContainer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataContainer)
/* harmony export */ });
/* harmony import */ var _DataUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataUnit */ "./src/components/DataContainer/DataUnit.ts");

class DataContainer extends HTMLDivElement {
    // TODO fix data type
    constructor(displayedData, data, includeIcon = false) {
        super();
        this.displayedData = displayedData;
        this.includeIcon = includeIcon;
        this.dataUnits = [];
        this.classList.add('data-container');
        this.update(data);
    }
    // TODO fix data type
    update(newData) {
        if (this.dataUnits) {
            this.dataUnits.forEach((dataUnit) => dataUnit.remove());
        }
        this.dataUnits = this.displayedData.map((datum) => new _DataUnit__WEBPACK_IMPORTED_MODULE_0__["default"](datum.title, datum.unit, newData[datum.varName], this.includeIcon ? datum.icon : undefined));
        this.append(...this.dataUnits);
    }
}
customElements.define('data-container', DataContainer, { extends: 'div' });


/***/ }),

/***/ "./src/components/DataContainer/DataUnit.ts":
/*!**************************************************!*\
  !*** ./src/components/DataContainer/DataUnit.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataUnit)
/* harmony export */ });
class DataUnit extends HTMLDivElement {
    // TODO fix data type
    constructor(labelName, dataUnit, data, icon) {
        super();
        this.classList.add('data');
        const description = document.createElement('div');
        description.classList.add('description');
        if (icon) {
            const img = document.createElement('img');
            img.src = icon;
            description.append(img);
        }
        const label = document.createElement('p');
        label.classList.add('data-name'); // TODO naming
        label.textContent = labelName;
        description.append(label);
        this.value = document.createElement('span');
        this.value.classList.add('value');
        const unit = document.createElement('span');
        unit.classList.add('unit');
        unit.textContent = dataUnit;
        const valueContainer = document.createElement('div');
        valueContainer.append(this.value, unit);
        this.append(description, valueContainer);
        this.value.textContent = data;
    }
}
customElements.define('data-unit', DataUnit, { extends: 'div' });


/***/ }),

/***/ "./src/components/Forecast/DailyForecast.ts":
/*!**************************************************!*\
  !*** ./src/components/Forecast/DailyForecast.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DailyForecast)
/* harmony export */ });
/* harmony import */ var _ForecastCard_DailyForecastCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ForecastCard/DailyForecastCard */ "./src/components/ForecastCard/DailyForecastCard.ts");

class DailyForecast extends HTMLOListElement {
    // TODO fix data type
    constructor(data) {
        super();
        this.classList.add('forecast');
        this.setAttribute('data-type', 'daily');
        this.setAttribute('data-name', 'Daily');
        this.cards = [];
        this.update(data);
    }
    // TODO fix data type
    update(newData) {
        this.cards.forEach((card) => card.remove());
        this.cards = newData.map((datum) => new _ForecastCard_DailyForecastCard__WEBPACK_IMPORTED_MODULE_0__["default"](datum)); // TODO fix data type
        this.append(...this.cards);
    }
}
customElements.define('daily-forecast', DailyForecast, { extends: 'ol' });


/***/ }),

/***/ "./src/components/Forecast/HourlyForecast.ts":
/*!***************************************************!*\
  !*** ./src/components/Forecast/HourlyForecast.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HourlyForecast)
/* harmony export */ });
/* harmony import */ var _ForecastCard_HourlyForecastCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ForecastCard/HourlyForecastCard */ "./src/components/ForecastCard/HourlyForecastCard.ts");

class HourlyForecast extends HTMLOListElement {
    // TODO fix data type
    constructor(data) {
        super();
        this.classList.add('forecast');
        this.setAttribute('data-type', 'hourly');
        this.setAttribute('data-name', 'Hourly');
        this.cards = [];
        this.update(data);
    }
    // TODO fix data type
    update(newData) {
        this.cards.forEach((card) => card.remove());
        this.cards = newData.map((datum) => new _ForecastCard_HourlyForecastCard__WEBPACK_IMPORTED_MODULE_0__["default"](datum)); // TODO fix data type
        this.append(...this.cards);
    }
}
customElements.define('hourly-forecast', HourlyForecast, { extends: 'ol' });


/***/ }),

/***/ "./src/components/ForecastCard/DailyForecastCard.ts":
/*!**********************************************************!*\
  !*** ./src/components/ForecastCard/DailyForecastCard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DailyForecastCard)
/* harmony export */ });
/* harmony import */ var _TemperatureDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemperatureDisplay */ "./src/components/ForecastCard/TemperatureDisplay.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/data.ts");
/* harmony import */ var _WeatherCondition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherCondition */ "./src/components/ForecastCard/WeatherCondition.ts");
/* harmony import */ var _DataContainer_DataContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataContainer/DataContainer */ "./src/components/DataContainer/DataContainer.ts");




class DailyForecastCard extends HTMLLIElement {
    // TODO fix data type
    constructor(data) {
        super();
        this.classList.add('card');
        this.temperatureDisplays = {
            min: new _TemperatureDisplay__WEBPACK_IMPORTED_MODULE_0__["default"]('min', data.temp.min),
            max: new _TemperatureDisplay__WEBPACK_IMPORTED_MODULE_0__["default"]('max', data.temp.max),
        };
        this.time = document.createElement('h3');
        this.time.classList.add('time');
        this.time.textContent = data.dt;
        this.weatherCondition = new _WeatherCondition__WEBPACK_IMPORTED_MODULE_2__["default"](data.weather[0]);
        const temperature = document.createElement('div');
        temperature.classList.add('temperature');
        temperature.append(this.temperatureDisplays.min, this.temperatureDisplays.max);
        const leftColumn = document.createElement('div');
        leftColumn.append(this.weatherCondition, temperature);
        this.dataContainer = new _DataContainer_DataContainer__WEBPACK_IMPORTED_MODULE_3__["default"]([_data__WEBPACK_IMPORTED_MODULE_1__.sunrise, _data__WEBPACK_IMPORTED_MODULE_1__.sunset, _data__WEBPACK_IMPORTED_MODULE_1__.cloudiness, _data__WEBPACK_IMPORTED_MODULE_1__.rainProbability], data);
        this.append(this.time, leftColumn, this.dataContainer);
    }
}
customElements.define('daily-forecast-card', DailyForecastCard, {
    extends: 'li',
});


/***/ }),

/***/ "./src/components/ForecastCard/HourlyForecastCard.ts":
/*!***********************************************************!*\
  !*** ./src/components/ForecastCard/HourlyForecastCard.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HourlyForecastCard)
/* harmony export */ });
/* harmony import */ var _TemperatureDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemperatureDisplay */ "./src/components/ForecastCard/TemperatureDisplay.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./src/data.ts");
/* harmony import */ var _WeatherCondition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherCondition */ "./src/components/ForecastCard/WeatherCondition.ts");
/* harmony import */ var _DataContainer_DataContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataContainer/DataContainer */ "./src/components/DataContainer/DataContainer.ts");




class HourlyForecastCard extends HTMLLIElement {
    // TODO fix data type
    constructor(data) {
        super();
        this.classList.add('card');
        this.temperatureDisplay = new _TemperatureDisplay__WEBPACK_IMPORTED_MODULE_0__["default"]('unique', data.temp);
        this.time = document.createElement('h3');
        this.time.classList.add('time');
        this.time.textContent = data.dt;
        this.weatherCondition = new _WeatherCondition__WEBPACK_IMPORTED_MODULE_2__["default"](data.weather[0]);
        const temperature = document.createElement('div');
        temperature.classList.add('temperature');
        temperature.append(this.temperatureDisplay);
        this.dataContainer = new _DataContainer_DataContainer__WEBPACK_IMPORTED_MODULE_3__["default"]([_data__WEBPACK_IMPORTED_MODULE_1__.rainProbability, _data__WEBPACK_IMPORTED_MODULE_1__.cloudiness, _data__WEBPACK_IMPORTED_MODULE_1__.humidity, _data__WEBPACK_IMPORTED_MODULE_1__.uvIndex], data);
        const leftColumn = document.createElement('div');
        leftColumn.append(this.weatherCondition, temperature);
        this.append(this.time, leftColumn, this.dataContainer);
    }
}
customElements.define('hourly-forecast-card', HourlyForecastCard, {
    extends: 'li',
});


/***/ }),

/***/ "./src/components/ForecastCard/TemperatureDisplay.ts":
/*!***********************************************************!*\
  !*** ./src/components/ForecastCard/TemperatureDisplay.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemperatureDisplay)
/* harmony export */ });
class TemperatureDisplay extends HTMLDivElement {
    constructor(label, initialValue) {
        super();
        this.classList.add(`${label}-temperature`);
        this.value = document.createElement('span');
        this.value.classList.add('value');
        const unit = document.createElement('span');
        unit.classList.add('unit');
        unit.textContent = '°C';
        this.update(initialValue);
        this.append(this.value, unit);
    }
    update(newValue) {
        const roundedValue = Math.round(newValue);
        this.value.textContent = roundedValue.toString();
    }
}
customElements.define('temperature-display', TemperatureDisplay, {
    extends: 'div',
});


/***/ }),

/***/ "./src/components/ForecastCard/WeatherCondition.ts":
/*!*********************************************************!*\
  !*** ./src/components/ForecastCard/WeatherCondition.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherCondition)
/* harmony export */ });
/* harmony import */ var _utils_StringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/StringUtils */ "./src/utils/StringUtils.ts");

class WeatherCondition extends HTMLDivElement {
    // TODO fix data type
    constructor(data, iconSize = '64px') {
        super();
        this.classList.add('weather-condition');
        this.icon = document.createElement('img');
        this.icon.setAttribute('width', iconSize);
        this.icon.setAttribute('height', iconSize);
        this.description = document.createElement('p');
        this.description.classList.add('description');
        this.append(this.icon, this.description);
        this.update(data);
    }
    // TODO fix data type
    update(newData) {
        this.icon.src = `https://openweathermap.org/img/wn/${newData.icon}@2x.png`;
        this.description.textContent = _utils_StringUtils__WEBPACK_IMPORTED_MODULE_0__["default"].capitalize(newData.description);
    }
}
customElements.define('weather-condition', WeatherCondition, {
    extends: 'div',
});


/***/ }),

/***/ "./src/components/ForecastContainer/ForecastContainer.ts":
/*!***************************************************************!*\
  !*** ./src/components/ForecastContainer/ForecastContainer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForecastContainer)
/* harmony export */ });
/* harmony import */ var _Forecast_DailyForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Forecast/DailyForecast */ "./src/components/Forecast/DailyForecast.ts");
/* harmony import */ var _Forecast_HourlyForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Forecast/HourlyForecast */ "./src/components/Forecast/HourlyForecast.ts");
/* harmony import */ var _TabSwitchButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabSwitchButton */ "./src/components/ForecastContainer/TabSwitchButton.ts");



class ForecastContainer extends HTMLDivElement {
    // TODO fix data type
    constructor(data) {
        super();
        this.classList.add('forecast-container');
        this.switchTab = this.switchTab.bind(this);
        this.dailyForecast = new _Forecast_DailyForecast__WEBPACK_IMPORTED_MODULE_0__["default"](data.daily);
        this.hourlyForecast = new _Forecast_HourlyForecast__WEBPACK_IMPORTED_MODULE_1__["default"](data.hourly);
        this.tabSwitchButtons = [
            new _TabSwitchButton__WEBPACK_IMPORTED_MODULE_2__["default"](this.dailyForecast, this.switchTab),
            new _TabSwitchButton__WEBPACK_IMPORTED_MODULE_2__["default"](this.hourlyForecast, this.switchTab),
        ];
        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.classList.add('buttons-container');
        this.buttonsContainer.append(...this.tabSwitchButtons);
        this.active = this.dailyForecast;
        this.tabSwitchButtons[0].classList.add('active');
        this.append(this.buttonsContainer, this.active);
    }
    switchTab(newTab, clickedButton) {
        if (this.active === newTab)
            return;
        this.tabSwitchButtons.forEach((button) => button.classList.remove('active'));
        clickedButton.classList.add('active');
        this.removeChild(this.active);
        this.append(newTab);
        this.active = newTab;
    }
    // TODO fix data type
    update(newData) {
        this.dailyForecast.update(newData.daily);
        this.hourlyForecast.update(newData.hourly);
    }
}
customElements.define('forecast-container', ForecastContainer, {
    extends: 'div',
});


/***/ }),

/***/ "./src/components/ForecastContainer/TabSwitchButton.ts":
/*!*************************************************************!*\
  !*** ./src/components/ForecastContainer/TabSwitchButton.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabSwitchButton)
/* harmony export */ });
class TabSwitchButton extends HTMLButtonElement {
    constructor(tab, switchTab) {
        super();
        this.classList.add('switch-tab-btn');
        this.tab = tab;
        this.textContent = this.tab.getAttribute('data-name');
        this.addEventListener('click', () => switchTab(this.tab, this));
    }
}
customElements.define('tab-switch-button', TabSwitchButton, {
    extends: 'button',
});


/***/ }),

/***/ "./src/components/Header/Header.ts":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SearchBar/SearchBar */ "./src/components/SearchBar/SearchBar.ts");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/logo.svg */ "./src/img/logo.svg");


class Header extends HTMLElement {
    constructor(setCity) {
        super();
        this.searchBar = new _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_0__["default"](setCity);
        const h1 = document.createElement('h1');
        h1.classList.add('logo-desktop');
        h1.textContent = 'weather app';
        const logo = document.createElement('img');
        logo.src = _img_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
        logo.classList.add('logo-mobile');
        logo.setAttribute('width', '36px');
        logo.alt = 'weather app';
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container');
        logoContainer.append(logo, h1);
        this.append(logoContainer, this.searchBar);
    }
}
customElements.define('header-component', Header, { extends: 'header' });


/***/ }),

/***/ "./src/components/Loader/Loader.ts":
/*!*****************************************!*\
  !*** ./src/components/Loader/Loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
class Loader extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add('overlay');
        const cloudPieces = new Array(3).fill(null).map(() => {
            const piece = document.createElement('div');
            piece.classList.add('cloud');
            return piece;
        });
        const cloudContainer = document.createElement('div');
        cloudContainer.classList.add('cloud-container');
        cloudContainer.append(...cloudPieces);
        this.append(cloudContainer);
    }
    show() {
        document.body.append(this);
    }
}
customElements.define('loader-component', Loader, { extends: 'div' });


/***/ }),

/***/ "./src/components/SearchBar/SearchBar.ts":
/*!***********************************************!*\
  !*** ./src/components/SearchBar/SearchBar.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icons/search.svg */ "./src/icons/search.svg");

class SearchBar extends HTMLFormElement {
    constructor(setCity) {
        super();
        this.classList.add('search-bar');
        const searchIcon = document.createElement('img');
        searchIcon.classList.add('icon');
        searchIcon.src = _icons_search_svg__WEBPACK_IMPORTED_MODULE_0__;
        const searchLabel = document.createElement('label');
        searchLabel.setAttribute('for', 'search-input');
        searchLabel.append(searchIcon);
        const searchInput = document.createElement('input');
        searchInput.id = 'search-input';
        searchInput.placeholder = 'City name';
        const searchButton = document.createElement('button');
        searchButton.classList.add('search-button');
        searchButton.textContent = 'Submit';
        this.append(searchLabel, searchInput, searchButton);
        this.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!searchInput.value)
                return;
            setCity(searchInput.value);
            searchInput.value = '';
        });
    }
}
customElements.define('search-bar', SearchBar, { extends: 'form' });


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloudiness": () => (/* binding */ cloudiness),
/* harmony export */   "feelsLike": () => (/* binding */ feelsLike),
/* harmony export */   "humidity": () => (/* binding */ humidity),
/* harmony export */   "rainProbability": () => (/* binding */ rainProbability),
/* harmony export */   "sunrise": () => (/* binding */ sunrise),
/* harmony export */   "sunset": () => (/* binding */ sunset),
/* harmony export */   "temperature": () => (/* binding */ temperature),
/* harmony export */   "uvIndex": () => (/* binding */ uvIndex),
/* harmony export */   "visibility": () => (/* binding */ visibility),
/* harmony export */   "windSpeed": () => (/* binding */ windSpeed)
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









const temperature = {
    title: 'Temperature',
    icon: _icons_weather_thermometer_svg__WEBPACK_IMPORTED_MODULE_0__,
    varName: 'temp',
    unit: '°C',
};
const rainProbability = {
    title: 'Rain prob.',
    icon: _icons_weather_rain_probability_svg__WEBPACK_IMPORTED_MODULE_8__,
    varName: 'pop',
    unit: '%',
};
const feelsLike = {
    title: 'Feels like',
    icon: _icons_weather_thermometer_svg__WEBPACK_IMPORTED_MODULE_0__,
    varName: 'feels_like',
    unit: '°C',
};
const windSpeed = {
    title: 'Wind speed',
    icon: _icons_weather_wind_speed_svg__WEBPACK_IMPORTED_MODULE_2__,
    varName: 'wind_speed',
    unit: ' m/s',
};
const cloudiness = {
    title: 'Cloudiness',
    icon: _icons_weather_cloudiness_svg__WEBPACK_IMPORTED_MODULE_3__,
    varName: 'clouds',
    unit: '%',
};
const humidity = {
    title: 'Humidity',
    icon: _icons_weather_humidity_svg__WEBPACK_IMPORTED_MODULE_1__,
    varName: 'humidity',
    unit: '%',
};
const sunrise = {
    title: 'Sunrise',
    icon: _icons_weather_sunrise_svg__WEBPACK_IMPORTED_MODULE_4__,
    varName: 'sunrise',
    unit: '',
};
const sunset = {
    title: 'Sunset',
    icon: _icons_weather_sunset_svg__WEBPACK_IMPORTED_MODULE_5__,
    varName: 'sunset',
    unit: '',
};
const uvIndex = {
    title: 'UV index',
    icon: _icons_weather_uv_index_svg__WEBPACK_IMPORTED_MODULE_6__,
    varName: 'uvi',
    unit: '',
};
const visibility = {
    title: 'Visibility',
    icon: _icons_weather_visibility_svg__WEBPACK_IMPORTED_MODULE_7__,
    varName: 'visibility',
    unit: ' m',
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const app = new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.init();


/***/ }),

/***/ "./src/layout/Main.ts":
/*!****************************!*\
  !*** ./src/layout/Main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _components_CurrentWeather_CurrentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/CurrentWeather/CurrentWeather */ "./src/components/CurrentWeather/CurrentWeather.ts");
/* harmony import */ var _components_ForecastContainer_ForecastContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ForecastContainer/ForecastContainer */ "./src/components/ForecastContainer/ForecastContainer.ts");


class Main extends HTMLElement {
    // TODO fix data type
    constructor(data) {
        super();
        this.forecastContainer = new _components_ForecastContainer_ForecastContainer__WEBPACK_IMPORTED_MODULE_1__["default"]({
            daily: data.daily,
            hourly: data.hourly,
        });
        this.currentWeather = new _components_CurrentWeather_CurrentWeather__WEBPACK_IMPORTED_MODULE_0__["default"](data.current, data.city);
        this.append(this.currentWeather, this.forecastContainer);
    }
    // generateMainElement() {
    //   const weatherDataContainer = DOMUtils.createElement(
    //     'div',
    //     {
    //       class: 'weather-data-container',
    //     },
    //     this.currentWeather,
    //     this.forecastContainer
    //   );
    //   return DOMUtils.createElement('main', {}, weatherDataContainer);
    // }
    // TODO fix data type
    update(newData) {
        this.currentWeather.update(newData.current, newData.city);
        this.forecastContainer.update({
            daily: newData.daily,
            hourly: newData.hourly,
        });
    }
}
customElements.define('main-component', Main, { extends: 'main' });


/***/ }),

/***/ "./src/utils/DateUtils.ts":
/*!********************************!*\
  !*** ./src/utils/DateUtils.ts ***!
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

/***/ "./src/utils/StringUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/StringUtils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StringUtils)
/* harmony export */ });
class StringUtils {
    static capitalize(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }
}


/***/ }),

/***/ "./src/utils/WeatherUtils.ts":
/*!***********************************!*\
  !*** ./src/utils/WeatherUtils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherUtils)
/* harmony export */ });
/* harmony import */ var _DateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateUtils */ "./src/utils/DateUtils.ts");

class WeatherUtils {
    // TODO fix data type
    constructor(weatherData) {
        this.data = weatherData;
        this.dateOptions = _DateUtils__WEBPACK_IMPORTED_MODULE_0__["default"].getDateOptions(this.data.timezone);
    }
    // TODO fix data type
    normalizeObject(obj, type) {
        const { getDateString } = _DateUtils__WEBPACK_IMPORTED_MODULE_0__["default"];
        const { replaceIfNotUndefined } = WeatherUtils;
        return Object.assign(Object.assign({}, obj), { dt: getDateString(obj.dt, this.dateOptions[type]), pop: replaceIfNotUndefined(obj.pop, Math.round(obj.pop * 10000) / 100), sunrise: replaceIfNotUndefined(obj.sunrise, getDateString(obj.sunrise, this.dateOptions.sunset)), sunset: replaceIfNotUndefined(obj.sunset, getDateString(obj.sunset, this.dateOptions.sunset)), moonrise: replaceIfNotUndefined(obj.moonrise, getDateString(obj.moonrise, this.dateOptions.sunset)), moonset: replaceIfNotUndefined(obj.moonset, getDateString(obj.moonset, this.dateOptions.sunset)) });
    }
    static replaceIfNotUndefined(value, newValue) {
        if (value === undefined)
            return undefined;
        return newValue;
    }
    // TODO fix data type
    getNormalizedData() {
        const { data } = this;
        return Object.assign(Object.assign({}, data), { current: this.normalizeObject(data.current, 'current'), daily: data.daily.map((obj) => this.normalizeObject(obj, 'daily')), hourly: data.hourly.map((obj) => this.normalizeObject(obj, 'hourly')), minutely: data.minutely.map((obj) => this.normalizeObject(obj, 'minutely')) });
    }
}


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

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f76c063c566651deb89.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFX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LEVBQUUsUUFBVztRQUNyRCxJQUFJLEtBQUssS0FBSyxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDMUMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELHFCQUFxQjtJQUNyQixpQkFBaUI7UUFDZixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHVDQUNLLElBQUksS0FDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUN0RCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQ3ZFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUNwQyxFQUNELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUN0QyxJQUNEO0lBQ0osQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQXBpLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0FwcC50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0N1cnJlbnRXZWF0aGVyL0N1cnJlbnRXZWF0aGVyLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRGF0YUNvbnRhaW5lci9EYXRhQ29udGFpbmVyLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRGF0YUNvbnRhaW5lci9EYXRhVW5pdC50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0L0RhaWx5Rm9yZWNhc3QudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3JlY2FzdC9Ib3VybHlGb3JlY2FzdC50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0Q2FyZC9EYWlseUZvcmVjYXN0Q2FyZC50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0Q2FyZC9Ib3VybHlGb3JlY2FzdENhcmQudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3JlY2FzdENhcmQvVGVtcGVyYXR1cmVEaXNwbGF5LnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9yZWNhc3RDYXJkL1dlYXRoZXJDb25kaXRpb24udHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3JlY2FzdENvbnRhaW5lci9Gb3JlY2FzdENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0Q29udGFpbmVyL1RhYlN3aXRjaEJ1dHRvbi50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xheW91dC9NYWluLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxzL0RhdGVVdGlscy50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9TdHJpbmdVdGlscy50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9XZWF0aGVyVXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWE6d2dodEA1MDAmZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jb2xvci1jdGE6ICMzYWZmNWI7XFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICNlMWU4ZWY7XFxuICAtLWNvbG9yLWN1cnJlbnQtd2VhdGhlcjogIzAwOTdjZjtcXG4gIC0tY29sb3ItY2FyZDogI2ZmZmZmZjtcXG4gIC0tYm94LXNoYWRvdy1jYXJkOiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYXBwIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3VycmVudC13ZWF0aGVyKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNiZWJlYmU7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIHBhZGRpbmc6IDJweCA2cHg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi5zZWFyY2gtYmFyIC5pY29uIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBidXR0b24ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jdGEpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNjRweDtcXG4gIHBhZGRpbmc6IDMycHggOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LWluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktbmFtZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jdGEpO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLnNpbmdsZS10ZW1wZXJhdHVyZSAudmFsdWUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5zaW5nbGUtdGVtcGVyYXR1cmUgLnVuaXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDMycHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLndlYXRoZXItY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmRhdGEtY29udGFpbmVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QgLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDFweCBibGFjayk7XFxufVxcblxcbi5kYXRhLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxNnB4IDQ4cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5kYXRhLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRhdGEtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMzJweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuZGF0YSxcXG4uY3VycmVudC13ZWF0aGVyIC5kYXRhIC5kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IC5kYXRhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50ZW1wZXJhdHVyZS1taW5tYXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE2cHggOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuLnN3aXRjaC10YWItYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN3aXRjaC10YWItYnRuOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgY29udGVudDogJyc7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3dpdGNoLXRhYi1idG4uYWN0aXZlOmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jdXJyZW50LXdlYXRoZXIpO1xcbn1cXG5cXG4uc3dpdGNoLXRhYi1idG46aG92ZXI6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcmQpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1jYXJkKTtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mb3JlY2FzdCAuY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IDFmcjtcXG4gIGdhcDogOHB4IDQ4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDYxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JlY2FzdCAudGltZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmNhcmQgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuXFxuLmNsb3VkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5jbG91ZC1jb250YWluZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgd2lkdGg6IDU1cHg7XFxuICB0b3A6IC0yNXB4O1xcbiAgbGVmdDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogNDVweCA1cHggMCAxNXB4IHdoaXRlO1xcbn1cXG5cXG4uY2xvdWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWN1cnJlbnQtd2VhdGhlcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDJzIGluZmluaXRlO1xcbn1cXG5cXG4uY2xvdWQ6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XFxuICBib3R0b206IC0yMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNjBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3NXB4KTtcXG4gIH1cXG59XFxuXFxuLmNsb3VkOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uY2xvdWQ6bnRoLWNoaWxkKDIpIHtcXG4gIHRvcDogLTI1cHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgd2lkdGg6IDU1cHg7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jbG91ZDpudGgtY2hpbGQoMykge1xcbiAgdG9wOiAtMzVweDtcXG4gIGxlZnQ6IDUwcHg7XFxuICB3aWR0aDogODVweDtcXG4gIGhlaWdodDogODVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDJweCBibGFjayk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzVweCkge1xcbiAgLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMzJweDtcXG4gIH1cXG4gIC5jdXJyZW50LXdlYXRoZXIgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgLmN1cnJlbnQtd2VhdGhlciAuZGF0YS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuZm9yZWNhc3QgLmNhcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuICAuZm9yZWNhc3QgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNjBweCwgMWZyKSk7XFxuICB9XFxuICAubG9nby1jb250YWluZXIgaDEge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQjtpQ0FDK0I7QUFDakM7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VB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RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsOENBQThDO0VBQzlDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLCtDQUErQztJQUMvQywwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDJEQUEyRDtFQUM3RDtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRANTAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY29sb3ItY3RhOiAjM2FmZjViO1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZTFlOGVmO1xcbiAgLS1jb2xvci1jdXJyZW50LXdlYXRoZXI6ICMwMDk3Y2Y7XFxuICAtLWNvbG9yLWNhcmQ6ICNmZmZmZmY7XFxuICAtLWJveC1zaGFkb3ctY2FyZDogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFwcCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWN1cnJlbnQtd2VhdGhlcik7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWJhciAuaWNvbiB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY3RhKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDY0cHg7XFxuICBwYWRkaW5nOiAzMnB4IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuY2l0eS1pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LW5hbWUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWF4LXdpZHRoOiAyODBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY3RhKTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5zaW5nbGUtdGVtcGVyYXR1cmUgLnZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuc2luZ2xlLXRlbXBlcmF0dXJlIC51bml0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gIGhlaWdodDogNjRweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5kYXRhLWNvbnRhaW5lciB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmZvcmVjYXN0IC53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxcHggYmxhY2spO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTZweCA0OHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uZGF0YS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXRhLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDMycHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmRhdGEsXFxuLmN1cnJlbnQtd2VhdGhlciAuZGF0YSAuZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCAuZGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtbWlubWF4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNnB4IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMycHg7XFxufVxcblxcbi5zd2l0Y2gtdGFiLWJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtdGFiLWJ0bjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN3aXRjaC10YWItYnRuLmFjdGl2ZTpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3VycmVudC13ZWF0aGVyKTtcXG59XFxuXFxuLnN3aXRjaC10YWItYnRuOmhvdmVyOmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJkKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctY2FyZCk7XFxufVxcblxcbi5jYXJkIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMzBweCAxZnI7XFxuICBnYXA6IDhweCA0OHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA2MTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9yZWNhc3QgLnRpbWUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IC5jYXJkIC50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbi5jbG91ZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uY2xvdWQtY29udGFpbmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNTVweDtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgdG9wOiAtMjVweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDQ1cHggNXB4IDAgMTVweCB3aGl0ZTtcXG59XFxuXFxuLmNsb3VkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jdXJyZW50LXdlYXRoZXIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGJvdHRvbTogMDtcXG4gIGFuaW1hdGlvbjogbG9hZGluZyAycyBpbmZpbml0ZTtcXG59XFxuXFxuLmNsb3VkOm50aC1jaGlsZCgyKTpiZWZvcmUge1xcbiAgYm90dG9tOiAtMjBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTYwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzVweCk7XFxuICB9XFxufVxcblxcbi5jbG91ZDpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmNsb3VkOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IC0yNXB4O1xcbiAgbGVmdDogMjBweDtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY2xvdWQ6bnRoLWNoaWxkKDMpIHtcXG4gIHRvcDogLTM1cHg7XFxuICBsZWZ0OiA1MHB4O1xcbiAgd2lkdGg6IDg1cHg7XFxuICBoZWlnaHQ6IDg1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAycHggYmxhY2spO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTc1cHgpIHtcXG4gIC5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDMycHg7XFxuICB9XFxuICAuY3VycmVudC13ZWF0aGVyIC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAud2VhdGhlci1jb25kaXRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5jdXJyZW50LXdlYXRoZXIgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZvcmVjYXN0IC5jYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgLmZvcmVjYXN0IC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xcbiAgfVxcbiAgLmxvZ28tY29udGFpbmVyIGgxIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgeyBSYXdXZWF0aGVyRGF0YSwgV2VhdGhlckFuZExvY2F0aW9uRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgV2VhdGhlclV0aWxzIGZyb20gJy4vdXRpbHMvV2VhdGhlclV0aWxzJztcblxuY29uc3QgQVBJX0tFWSA9ICdiOGJlZGMyMTEwMDMwMTAxZGQ5YzhkMGM3NGYyMzM2Yyc7XG5cbi8vIFRPRE8gZXJyb3IgaGFuZGxpbmdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG4gIHN0YXRpYyBhc3luYyBnZXRMb2NhdGlvbkRhdGEobG9jYXRpb25OYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25OYW1lfSZsaW1pdD0xJmFwcGlkPSR7QVBJX0tFWX1gXG4gICAgKTtcbiAgICBjb25zdCBqc29uOiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgICBsYXQ6IG51bWJlcjtcbiAgICAgIGxvbjogbnVtYmVyO1xuICAgIH1bXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToganNvblswXS5uYW1lLFxuICAgICAgY291bnRyeToganNvblswXS5jb3VudHJ5LFxuICAgICAgbGF0OiBqc29uWzBdLmxhdCxcbiAgICAgIGxvbjoganNvblswXS5sb24sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRXZWF0aGVyQnlDb29yZGluYXRlcyhsb2NhdGlvbjogeyBsYXQ6IG51bWJlcjsgbG9uOiBudW1iZXIgfSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bG9jYXRpb24ubGF0fSZsb249JHtsb2NhdGlvbi5sb259JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYFxuICAgICk7XG4gICAgY29uc3QganNvbjogUmF3V2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0V2VhdGhlckJ5TG9jYXRpb25OYW1lKGxvY2F0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcigpO1xuICAgIGxvYWRlci5zaG93KCk7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgQXBpLmdldExvY2F0aW9uRGF0YShsb2NhdGlvbk5hbWUpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgQXBpLmdldFdlYXRoZXJCeUNvb3JkaW5hdGVzKGxvY2F0aW9uRGF0YSk7XG4gICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgIGNvbnN0IHdlYXRoZXJBbmRMb2NhdGlvbkRhdGE6IFdlYXRoZXJBbmRMb2NhdGlvbkRhdGEgPSB7XG4gICAgICAuLi53ZWF0aGVyRGF0YSxcbiAgICAgIGNpdHk6IGxvY2F0aW9uRGF0YS5uYW1lLFxuICAgICAgY291bnRyeTogbG9jYXRpb25EYXRhLmNvdW50cnksXG4gICAgfTtcbiAgICB3ZWF0aGVyQW5kTG9jYXRpb25EYXRhLmNpdHkgPSBsb2NhdGlvbkRhdGEubmFtZTtcbiAgICB3ZWF0aGVyQW5kTG9jYXRpb25EYXRhLmNvdW50cnkgPSBsb2NhdGlvbkRhdGEuY291bnRyeTtcbiAgICByZXR1cm4gbmV3IFdlYXRoZXJVdGlscyh3ZWF0aGVyQW5kTG9jYXRpb25EYXRhKS5nZXROb3JtYWxpemVkRGF0YSgpO1xuICB9XG59XG4iLCJpbXBvcnQgTWFpbiBmcm9tICcuL2xheW91dC9NYWluJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEFwaSBmcm9tICcuL0FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgbWFpbjogTWFpbiB8IG51bGw7XG5cbiAgaGVhZGVyOiBIZWFkZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FwcCcpO1xuXG4gICAgdGhpcy5zZXRDaXR5ID0gdGhpcy5zZXRDaXR5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKHRoaXMuc2V0Q2l0eSk7XG4gICAgdGhpcy5tYWluID0gbnVsbDtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLmhlYWRlcik7XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMuc2V0Q2l0eSgnTG9uZG9uJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBzZXRDaXR5KGNpdHk6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBcGkuZ2V0V2VhdGhlckJ5TG9jYXRpb25OYW1lKGNpdHkpO1xuICAgIGlmICghdGhpcy5tYWluKSB7XG4gICAgICB0aGlzLm1haW4gPSBuZXcgTWFpbihkYXRhKTtcbiAgICAgIHRoaXMuYXBwZW5kKHRoaXMubWFpbik7XG4gICAgfSBlbHNlIHRoaXMubWFpbi51cGRhdGUoZGF0YSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtY29tcG9uZW50JywgQXBwLCB7IGV4dGVuZHM6ICdkaXYnIH0pO1xuIiwiaW1wb3J0IHtcbiAgRGF0YVR5cGUsXG4gIGZlZWxzTGlrZSxcbiAgd2luZFNwZWVkLFxuICBjbG91ZGluZXNzLFxuICBodW1pZGl0eSxcbiAgdmlzaWJpbGl0eSxcbiAgdXZJbmRleCxcbn0gZnJvbSAnLi4vLi4vZGF0YSc7XG5pbXBvcnQgRGF0YUNvbnRhaW5lciBmcm9tICcuLi9EYXRhQ29udGFpbmVyL0RhdGFDb250YWluZXInO1xuaW1wb3J0IFRlbXBlcmF0dXJlRGlzcGxheSBmcm9tICcuLi9Gb3JlY2FzdENhcmQvVGVtcGVyYXR1cmVEaXNwbGF5JztcbmltcG9ydCBXZWF0aGVyQ29uZGl0aW9uIGZyb20gJy4uL0ZvcmVjYXN0Q2FyZC9XZWF0aGVyQ29uZGl0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudFdlYXRoZXIgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gIGRpc3BsYXllZERhdGE6IEFycmF5PERhdGFUeXBlPjtcblxuICB0ZW1wZXJhdHVyZURpc3BsYXk6IFRlbXBlcmF0dXJlRGlzcGxheTtcblxuICBkYXRhQ29udGFpbmVyOiBEYXRhQ29udGFpbmVyO1xuXG4gIGNpdHlOYW1lOiBIVE1MSGVhZGluZ0VsZW1lbnQ7XG5cbiAgbG9jYWxEYXRlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcblxuICB3ZWF0aGVyQ29uZGl0aW9uOiBXZWF0aGVyQ29uZGl0aW9uO1xuXG4gIC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnksIGNpdHk6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXInKTtcbiAgICB0aGlzLmRpc3BsYXllZERhdGEgPSBbXG4gICAgICBmZWVsc0xpa2UsXG4gICAgICB3aW5kU3BlZWQsXG4gICAgICBjbG91ZGluZXNzLFxuICAgICAgaHVtaWRpdHksXG4gICAgICB2aXNpYmlsaXR5LFxuICAgICAgdXZJbmRleCxcbiAgICBdO1xuXG4gICAgdGhpcy5kYXRhQ29udGFpbmVyID0gbmV3IERhdGFDb250YWluZXIodGhpcy5kaXNwbGF5ZWREYXRhLCBkYXRhLCB0cnVlKTtcblxuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbiA9IG5ldyBXZWF0aGVyQ29uZGl0aW9uKGRhdGEud2VhdGhlclswXSwgJzk2cHgnKTtcblxuICAgIHRoaXMuY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRoaXMuY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eS1uYW1lJyk7XG5cbiAgICB0aGlzLmxvY2FsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aGlzLmxvY2FsRGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG5cbiAgICB0aGlzLnRlbXBlcmF0dXJlRGlzcGxheSA9IG5ldyBUZW1wZXJhdHVyZURpc3BsYXkoJ3NpbmdsZScsIGRhdGEudGVtcCk7XG5cbiAgICBjb25zdCBjaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHlJbmZvLmNsYXNzTGlzdC5hZGQoJ2NpdHktaW5mbycpO1xuICAgIGNpdHlJbmZvLmFwcGVuZCh0aGlzLmNpdHlOYW1lLCB0aGlzLmxvY2FsRGF0ZSwgdGhpcy50ZW1wZXJhdHVyZURpc3BsYXkpO1xuXG4gICAgdGhpcy5hcHBlbmQoY2l0eUluZm8sIHRoaXMud2VhdGhlckNvbmRpdGlvbiwgdGhpcy5kYXRhQ29udGFpbmVyKTtcblxuICAgIHRoaXMudXBkYXRlKGRhdGEsIGNpdHkpO1xuICB9XG5cbiAgLy8gVE9ETyBmaXggZGF0YSB0eXBlXG4gIHVwZGF0ZShuZXdEYXRhOiBhbnksIG5ld0NpdHk6IHN0cmluZykge1xuICAgIHRoaXMuY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuZXdDaXR5O1xuICAgIHRoaXMubG9jYWxEYXRlLnRleHRDb250ZW50ID0gbmV3RGF0YS5kdDtcbiAgICB0aGlzLnRlbXBlcmF0dXJlRGlzcGxheS51cGRhdGUobmV3RGF0YS50ZW1wKTtcbiAgICB0aGlzLndlYXRoZXJDb25kaXRpb24udXBkYXRlKG5ld0RhdGEud2VhdGhlclswXSk7XG4gICAgdGhpcy5kYXRhQ29udGFpbmVyLnVwZGF0ZShuZXdEYXRhKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2N1cnJlbnQtd2VhdGhlcicsIEN1cnJlbnRXZWF0aGVyLCB7IGV4dGVuZHM6ICdkaXYnIH0pO1xuIiwiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi9kYXRhJztcbmltcG9ydCBEYXRhVW5pdCBmcm9tICcuL0RhdGFVbml0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUNvbnRhaW5lciBleHRlbmRzIEhUTUxEaXZFbGVtZW50IHtcbiAgZGF0YVVuaXRzOiBBcnJheTxEYXRhVW5pdD47XG5cbiAgZGlzcGxheWVkRGF0YTogQXJyYXk8RGF0YVR5cGU+O1xuXG4gIGluY2x1ZGVJY29uOiBib29sZWFuO1xuXG4gIC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICBjb25zdHJ1Y3RvcihkaXNwbGF5ZWREYXRhOiBBcnJheTxEYXRhVHlwZT4sIGRhdGE6IGFueSwgaW5jbHVkZUljb24gPSBmYWxzZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kaXNwbGF5ZWREYXRhID0gZGlzcGxheWVkRGF0YTtcbiAgICB0aGlzLmluY2x1ZGVJY29uID0gaW5jbHVkZUljb247XG4gICAgdGhpcy5kYXRhVW5pdHMgPSBbXTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2RhdGEtY29udGFpbmVyJyk7XG4gICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gIH1cblxuICAvLyBUT0RPIGZpeCBkYXRhIHR5cGVcbiAgdXBkYXRlKG5ld0RhdGE6IGFueSkge1xuICAgIGlmICh0aGlzLmRhdGFVbml0cykge1xuICAgICAgdGhpcy5kYXRhVW5pdHMuZm9yRWFjaCgoZGF0YVVuaXQpID0+IGRhdGFVbml0LnJlbW92ZSgpKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhVW5pdHMgPSB0aGlzLmRpc3BsYXllZERhdGEubWFwKFxuICAgICAgKGRhdHVtKSA9PlxuICAgICAgICBuZXcgRGF0YVVuaXQoXG4gICAgICAgICAgZGF0dW0udGl0bGUsXG4gICAgICAgICAgZGF0dW0udW5pdCxcbiAgICAgICAgICBuZXdEYXRhW2RhdHVtLnZhck5hbWVdLFxuICAgICAgICAgIHRoaXMuaW5jbHVkZUljb24gPyBkYXR1bS5pY29uIDogdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICApO1xuICAgIHRoaXMuYXBwZW5kKC4uLnRoaXMuZGF0YVVuaXRzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhdGEtY29udGFpbmVyJywgRGF0YUNvbnRhaW5lciwgeyBleHRlbmRzOiAnZGl2JyB9KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFVbml0IGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICB2YWx1ZTogSFRNTFNwYW5FbGVtZW50O1xuXG4gIC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICBjb25zdHJ1Y3RvcihsYWJlbE5hbWU6IHN0cmluZywgZGF0YVVuaXQ6IHN0cmluZywgZGF0YTogYW55LCBpY29uPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2RhdGEnKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcblxuICAgIGlmIChpY29uKSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZy5zcmMgPSBpY29uO1xuICAgICAgZGVzY3JpcHRpb24uYXBwZW5kKGltZyk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZGF0YS1uYW1lJyk7IC8vIFRPRE8gbmFtaW5nXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbE5hbWU7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kKGxhYmVsKTtcblxuICAgIHRoaXMudmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy52YWx1ZS5jbGFzc0xpc3QuYWRkKCd2YWx1ZScpO1xuICAgIGNvbnN0IHVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdW5pdC5jbGFzc0xpc3QuYWRkKCd1bml0Jyk7XG4gICAgdW5pdC50ZXh0Q29udGVudCA9IGRhdGFVbml0O1xuICAgIGNvbnN0IHZhbHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFsdWVDb250YWluZXIuYXBwZW5kKHRoaXMudmFsdWUsIHVuaXQpO1xuXG4gICAgdGhpcy5hcHBlbmQoZGVzY3JpcHRpb24sIHZhbHVlQ29udGFpbmVyKTtcblxuICAgIHRoaXMudmFsdWUudGV4dENvbnRlbnQgPSBkYXRhO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZGF0YS11bml0JywgRGF0YVVuaXQsIHsgZXh0ZW5kczogJ2RpdicgfSk7XG4iLCJpbXBvcnQgRGFpbHlGb3JlY2FzdENhcmQgZnJvbSAnLi4vRm9yZWNhc3RDYXJkL0RhaWx5Rm9yZWNhc3RDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlGb3JlY2FzdCBleHRlbmRzIEhUTUxPTGlzdEVsZW1lbnQge1xuICBjYXJkczogQXJyYXk8RGFpbHlGb3JlY2FzdENhcmQ+O1xuXG4gIC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QnKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ2RhaWx5Jyk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsICdEYWlseScpO1xuICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICB1cGRhdGUobmV3RGF0YTogYW55KSB7XG4gICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBjYXJkLnJlbW92ZSgpKTtcbiAgICB0aGlzLmNhcmRzID0gbmV3RGF0YS5tYXAoKGRhdHVtOiBhbnkpID0+IG5ldyBEYWlseUZvcmVjYXN0Q2FyZChkYXR1bSkpOyAvLyBUT0RPIGZpeCBkYXRhIHR5cGVcbiAgICB0aGlzLmFwcGVuZCguLi50aGlzLmNhcmRzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RhaWx5LWZvcmVjYXN0JywgRGFpbHlGb3JlY2FzdCwgeyBleHRlbmRzOiAnb2wnIH0pO1xuIiwiaW1wb3J0IEhvdXJseUZvcmVjYXN0Q2FyZCBmcm9tICcuLi9Gb3JlY2FzdENhcmQvSG91cmx5Rm9yZWNhc3RDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91cmx5Rm9yZWNhc3QgZXh0ZW5kcyBIVE1MT0xpc3RFbGVtZW50IHtcbiAgY2FyZHM6IEFycmF5PEhvdXJseUZvcmVjYXN0Q2FyZD47XG5cbiAgLy8gVE9ETyBmaXggZGF0YSB0eXBlXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCAnaG91cmx5Jyk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsICdIb3VybHknKTtcbiAgICB0aGlzLmNhcmRzID0gW107XG4gICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gIH1cblxuICAvLyBUT0RPIGZpeCBkYXRhIHR5cGVcbiAgdXBkYXRlKG5ld0RhdGE6IGFueSkge1xuICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gY2FyZC5yZW1vdmUoKSk7XG4gICAgdGhpcy5jYXJkcyA9IG5ld0RhdGEubWFwKChkYXR1bTogYW55KSA9PiBuZXcgSG91cmx5Rm9yZWNhc3RDYXJkKGRhdHVtKSk7IC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICAgIHRoaXMuYXBwZW5kKC4uLnRoaXMuY2FyZHMpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaG91cmx5LWZvcmVjYXN0JywgSG91cmx5Rm9yZWNhc3QsIHsgZXh0ZW5kczogJ29sJyB9KTtcbiIsImltcG9ydCBUZW1wZXJhdHVyZURpc3BsYXkgZnJvbSAnLi9UZW1wZXJhdHVyZURpc3BsYXknO1xuaW1wb3J0IHsgY2xvdWRpbmVzcywgcmFpblByb2JhYmlsaXR5LCBzdW5yaXNlLCBzdW5zZXQgfSBmcm9tICcuLi8uLi9kYXRhJztcbmltcG9ydCBXZWF0aGVyQ29uZGl0aW9uIGZyb20gJy4vV2VhdGhlckNvbmRpdGlvbic7XG5pbXBvcnQgRGF0YUNvbnRhaW5lciBmcm9tICcuLi9EYXRhQ29udGFpbmVyL0RhdGFDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseUZvcmVjYXN0Q2FyZCBleHRlbmRzIEhUTUxMSUVsZW1lbnQge1xuICB0ZW1wZXJhdHVyZURpc3BsYXlzOiB7XG4gICAgbWluOiBUZW1wZXJhdHVyZURpc3BsYXk7XG4gICAgbWF4OiBUZW1wZXJhdHVyZURpc3BsYXk7XG4gIH07XG5cbiAgdGltZTogSFRNTEhlYWRpbmdFbGVtZW50O1xuXG4gIHdlYXRoZXJDb25kaXRpb246IFdlYXRoZXJDb25kaXRpb247XG5cbiAgZGF0YUNvbnRhaW5lcjogRGF0YUNvbnRhaW5lcjtcblxuICAvLyBUT0RPIGZpeCBkYXRhIHR5cGVcbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgIHRoaXMudGVtcGVyYXR1cmVEaXNwbGF5cyA9IHtcbiAgICAgIG1pbjogbmV3IFRlbXBlcmF0dXJlRGlzcGxheSgnbWluJywgZGF0YS50ZW1wLm1pbiksXG4gICAgICBtYXg6IG5ldyBUZW1wZXJhdHVyZURpc3BsYXkoJ21heCcsIGRhdGEudGVtcC5tYXgpLFxuICAgIH07XG5cbiAgICB0aGlzLnRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRoaXMudGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gICAgdGhpcy50aW1lLnRleHRDb250ZW50ID0gZGF0YS5kdDtcblxuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbiA9IG5ldyBXZWF0aGVyQ29uZGl0aW9uKGRhdGEud2VhdGhlclswXSk7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlJyk7XG4gICAgdGVtcGVyYXR1cmUuYXBwZW5kKFxuICAgICAgdGhpcy50ZW1wZXJhdHVyZURpc3BsYXlzLm1pbixcbiAgICAgIHRoaXMudGVtcGVyYXR1cmVEaXNwbGF5cy5tYXhcbiAgICApO1xuXG4gICAgY29uc3QgbGVmdENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRDb2x1bW4uYXBwZW5kKHRoaXMud2VhdGhlckNvbmRpdGlvbiwgdGVtcGVyYXR1cmUpO1xuXG4gICAgdGhpcy5kYXRhQ29udGFpbmVyID0gbmV3IERhdGFDb250YWluZXIoXG4gICAgICBbc3VucmlzZSwgc3Vuc2V0LCBjbG91ZGluZXNzLCByYWluUHJvYmFiaWxpdHldLFxuICAgICAgZGF0YVxuICAgICk7XG5cbiAgICB0aGlzLmFwcGVuZCh0aGlzLnRpbWUsIGxlZnRDb2x1bW4sIHRoaXMuZGF0YUNvbnRhaW5lcik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkYWlseS1mb3JlY2FzdC1jYXJkJywgRGFpbHlGb3JlY2FzdENhcmQsIHtcbiAgZXh0ZW5kczogJ2xpJyxcbn0pO1xuIiwiaW1wb3J0IFRlbXBlcmF0dXJlRGlzcGxheSBmcm9tICcuL1RlbXBlcmF0dXJlRGlzcGxheSc7XG5pbXBvcnQgeyBjbG91ZGluZXNzLCBodW1pZGl0eSwgcmFpblByb2JhYmlsaXR5LCB1dkluZGV4IH0gZnJvbSAnLi4vLi4vZGF0YSc7XG5pbXBvcnQgV2VhdGhlckNvbmRpdGlvbiBmcm9tICcuL1dlYXRoZXJDb25kaXRpb24nO1xuaW1wb3J0IERhdGFDb250YWluZXIgZnJvbSAnLi4vRGF0YUNvbnRhaW5lci9EYXRhQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91cmx5Rm9yZWNhc3RDYXJkIGV4dGVuZHMgSFRNTExJRWxlbWVudCB7XG4gIHRlbXBlcmF0dXJlRGlzcGxheTogVGVtcGVyYXR1cmVEaXNwbGF5O1xuXG4gIHRpbWU6IEhUTUxIZWFkaW5nRWxlbWVudDtcblxuICB3ZWF0aGVyQ29uZGl0aW9uOiBXZWF0aGVyQ29uZGl0aW9uO1xuXG4gIGRhdGFDb250YWluZXI6IERhdGFDb250YWluZXI7XG5cbiAgLy8gVE9ETyBmaXggZGF0YSB0eXBlXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICB0aGlzLnRlbXBlcmF0dXJlRGlzcGxheSA9IG5ldyBUZW1wZXJhdHVyZURpc3BsYXkoJ3VuaXF1ZScsIGRhdGEudGVtcCk7XG5cbiAgICB0aGlzLnRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRoaXMudGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gICAgdGhpcy50aW1lLnRleHRDb250ZW50ID0gZGF0YS5kdDtcblxuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbiA9IG5ldyBXZWF0aGVyQ29uZGl0aW9uKGRhdGEud2VhdGhlclswXSk7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlJyk7XG4gICAgdGVtcGVyYXR1cmUuYXBwZW5kKHRoaXMudGVtcGVyYXR1cmVEaXNwbGF5KTtcblxuICAgIHRoaXMuZGF0YUNvbnRhaW5lciA9IG5ldyBEYXRhQ29udGFpbmVyKFxuICAgICAgW3JhaW5Qcm9iYWJpbGl0eSwgY2xvdWRpbmVzcywgaHVtaWRpdHksIHV2SW5kZXhdLFxuICAgICAgZGF0YVxuICAgICk7XG5cbiAgICBjb25zdCBsZWZ0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdENvbHVtbi5hcHBlbmQodGhpcy53ZWF0aGVyQ29uZGl0aW9uLCB0ZW1wZXJhdHVyZSk7XG5cbiAgICB0aGlzLmFwcGVuZCh0aGlzLnRpbWUsIGxlZnRDb2x1bW4sIHRoaXMuZGF0YUNvbnRhaW5lcik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdob3VybHktZm9yZWNhc3QtY2FyZCcsIEhvdXJseUZvcmVjYXN0Q2FyZCwge1xuICBleHRlbmRzOiAnbGknLFxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wZXJhdHVyZURpc3BsYXkgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCB7XG4gIHZhbHVlOiBIVE1MU3BhbkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZywgaW5pdGlhbFZhbHVlOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChgJHtsYWJlbH0tdGVtcGVyYXR1cmVgKTtcbiAgICB0aGlzLnZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMudmFsdWUuY2xhc3NMaXN0LmFkZCgndmFsdWUnKTtcbiAgICBjb25zdCB1bml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHVuaXQuY2xhc3NMaXN0LmFkZCgndW5pdCcpO1xuICAgIHVuaXQudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgICB0aGlzLnVwZGF0ZShpbml0aWFsVmFsdWUpO1xuICAgIHRoaXMuYXBwZW5kKHRoaXMudmFsdWUsIHVuaXQpO1xuICB9XG5cbiAgdXBkYXRlKG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCByb3VuZGVkVmFsdWUgPSBNYXRoLnJvdW5kKG5ld1ZhbHVlKTtcbiAgICB0aGlzLnZhbHVlLnRleHRDb250ZW50ID0gcm91bmRlZFZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0ZW1wZXJhdHVyZS1kaXNwbGF5JywgVGVtcGVyYXR1cmVEaXNwbGF5LCB7XG4gIGV4dGVuZHM6ICdkaXYnLFxufSk7XG4iLCJpbXBvcnQgU3RyaW5nVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvU3RyaW5nVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyQ29uZGl0aW9uIGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICBpY29uOiBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gIGRlc2NyaXB0aW9uOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcblxuICAvLyBUT0RPIGZpeCBkYXRhIHR5cGVcbiAgY29uc3RydWN0b3IoZGF0YTogYW55LCBpY29uU2l6ZSA9ICc2NHB4Jykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbmRpdGlvbicpO1xuXG4gICAgdGhpcy5pY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBpY29uU2l6ZSk7XG4gICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaWNvblNpemUpO1xuXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICB0aGlzLmFwcGVuZCh0aGlzLmljb24sIHRoaXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgLy8gVE9ETyBmaXggZGF0YSB0eXBlXG4gIHVwZGF0ZShuZXdEYXRhOiBhbnkpIHtcbiAgICB0aGlzLmljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke25ld0RhdGEuaWNvbn1AMngucG5nYDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gU3RyaW5nVXRpbHMuY2FwaXRhbGl6ZShuZXdEYXRhLmRlc2NyaXB0aW9uKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3dlYXRoZXItY29uZGl0aW9uJywgV2VhdGhlckNvbmRpdGlvbiwge1xuICBleHRlbmRzOiAnZGl2Jyxcbn0pO1xuIiwiaW1wb3J0IERhaWx5Rm9yZWNhc3QgZnJvbSAnLi4vRm9yZWNhc3QvRGFpbHlGb3JlY2FzdCc7XG5pbXBvcnQgSG91cmx5Rm9yZWNhc3QgZnJvbSAnLi4vRm9yZWNhc3QvSG91cmx5Rm9yZWNhc3QnO1xuaW1wb3J0IFRhYlN3aXRjaEJ1dHRvbiBmcm9tICcuL1RhYlN3aXRjaEJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0Q29udGFpbmVyIGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICBkYWlseUZvcmVjYXN0OiBEYWlseUZvcmVjYXN0O1xuXG4gIGhvdXJseUZvcmVjYXN0OiBIb3VybHlGb3JlY2FzdDtcblxuICBhY3RpdmU6IERhaWx5Rm9yZWNhc3QgfCBIb3VybHlGb3JlY2FzdDtcblxuICBidXR0b25zQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICB0YWJTd2l0Y2hCdXR0b25zOiBBcnJheTxUYWJTd2l0Y2hCdXR0b24+O1xuXG4gIC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtY29udGFpbmVyJyk7XG4gICAgdGhpcy5zd2l0Y2hUYWIgPSB0aGlzLnN3aXRjaFRhYi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5kYWlseUZvcmVjYXN0ID0gbmV3IERhaWx5Rm9yZWNhc3QoZGF0YS5kYWlseSk7XG4gICAgdGhpcy5ob3VybHlGb3JlY2FzdCA9IG5ldyBIb3VybHlGb3JlY2FzdChkYXRhLmhvdXJseSk7XG4gICAgdGhpcy50YWJTd2l0Y2hCdXR0b25zID0gW1xuICAgICAgbmV3IFRhYlN3aXRjaEJ1dHRvbih0aGlzLmRhaWx5Rm9yZWNhc3QsIHRoaXMuc3dpdGNoVGFiKSxcbiAgICAgIG5ldyBUYWJTd2l0Y2hCdXR0b24odGhpcy5ob3VybHlGb3JlY2FzdCwgdGhpcy5zd2l0Y2hUYWIpLFxuICAgIF07XG4gICAgdGhpcy5idXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5idXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XG4gICAgdGhpcy5idXR0b25zQ29udGFpbmVyLmFwcGVuZCguLi50aGlzLnRhYlN3aXRjaEJ1dHRvbnMpO1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5kYWlseUZvcmVjYXN0O1xuICAgIHRoaXMudGFiU3dpdGNoQnV0dG9uc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLmJ1dHRvbnNDb250YWluZXIsIHRoaXMuYWN0aXZlKTtcbiAgfVxuXG4gIHN3aXRjaFRhYihcbiAgICBuZXdUYWI6IERhaWx5Rm9yZWNhc3QgfCBIb3VybHlGb3JlY2FzdCxcbiAgICBjbGlja2VkQnV0dG9uOiBUYWJTd2l0Y2hCdXR0b25cbiAgKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlID09PSBuZXdUYWIpIHJldHVybjtcbiAgICB0aGlzLnRhYlN3aXRjaEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgKTtcbiAgICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmUpO1xuICAgIHRoaXMuYXBwZW5kKG5ld1RhYik7XG4gICAgdGhpcy5hY3RpdmUgPSBuZXdUYWI7XG4gIH1cblxuICAvLyBUT0RPIGZpeCBkYXRhIHR5cGVcbiAgdXBkYXRlKG5ld0RhdGE6IGFueSkge1xuICAgIHRoaXMuZGFpbHlGb3JlY2FzdC51cGRhdGUobmV3RGF0YS5kYWlseSk7XG4gICAgdGhpcy5ob3VybHlGb3JlY2FzdC51cGRhdGUobmV3RGF0YS5ob3VybHkpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZm9yZWNhc3QtY29udGFpbmVyJywgRm9yZWNhc3RDb250YWluZXIsIHtcbiAgZXh0ZW5kczogJ2RpdicsXG59KTtcbiIsImltcG9ydCBEYWlseUZvcmVjYXN0IGZyb20gJy4uL0ZvcmVjYXN0L0RhaWx5Rm9yZWNhc3QnO1xuaW1wb3J0IEhvdXJseUZvcmVjYXN0IGZyb20gJy4uL0ZvcmVjYXN0L0hvdXJseUZvcmVjYXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiU3dpdGNoQnV0dG9uIGV4dGVuZHMgSFRNTEJ1dHRvbkVsZW1lbnQge1xuICB0YWI6IERhaWx5Rm9yZWNhc3QgfCBIb3VybHlGb3JlY2FzdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0YWI6IERhaWx5Rm9yZWNhc3QgfCBIb3VybHlGb3JlY2FzdCxcbiAgICBzd2l0Y2hUYWI6IChcbiAgICAgIG5ld1RhYjogRGFpbHlGb3JlY2FzdCB8IEhvdXJseUZvcmVjYXN0LFxuICAgICAgY2xpY2tlZEJ1dHRvbjogVGFiU3dpdGNoQnV0dG9uXG4gICAgKSA9PiB2b2lkXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gtdGFiLWJ0bicpO1xuICAgIHRoaXMudGFiID0gdGFiO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB0aGlzLnRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2l0Y2hUYWIodGhpcy50YWIsIHRoaXMpKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RhYi1zd2l0Y2gtYnV0dG9uJywgVGFiU3dpdGNoQnV0dG9uLCB7XG4gIGV4dGVuZHM6ICdidXR0b24nLFxufSk7XG4iLCJpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhci9TZWFyY2hCYXInO1xuaW1wb3J0IExPR09fSU1HIGZyb20gJy4uLy4uL2ltZy9sb2dvLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgc2VhcmNoQmFyOiBTZWFyY2hCYXI7XG5cbiAgY29uc3RydWN0b3Ioc2V0Q2l0eTogKGNpdHk6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNlYXJjaEJhciA9IG5ldyBTZWFyY2hCYXIoc2V0Q2l0eSk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuY2xhc3NMaXN0LmFkZCgnbG9nby1kZXNrdG9wJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnd2VhdGhlciBhcHAnO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gTE9HT19JTUc7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLW1vYmlsZScpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCd3aWR0aCcsICczNnB4Jyk7XG4gICAgbG9nby5hbHQgPSAnd2VhdGhlciBhcHAnO1xuXG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKTtcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZChsb2dvLCBoMSk7XG5cbiAgICB0aGlzLmFwcGVuZChsb2dvQ29udGFpbmVyLCB0aGlzLnNlYXJjaEJhcik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWFkZXItY29tcG9uZW50JywgSGVhZGVyLCB7IGV4dGVuZHM6ICdoZWFkZXInIH0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIGV4dGVuZHMgSFRNTERpdkVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuICAgIGNvbnN0IGNsb3VkUGllY2VzID0gbmV3IEFycmF5KDMpLmZpbGwobnVsbCkubWFwKCgpID0+IHtcbiAgICAgIGNvbnN0IHBpZWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwaWVjZS5jbGFzc0xpc3QuYWRkKCdjbG91ZCcpO1xuICAgICAgcmV0dXJuIHBpZWNlO1xuICAgIH0pO1xuICAgIGNvbnN0IGNsb3VkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvdWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2xvdWQtY29udGFpbmVyJyk7XG4gICAgY2xvdWRDb250YWluZXIuYXBwZW5kKC4uLmNsb3VkUGllY2VzKTtcbiAgICB0aGlzLmFwcGVuZChjbG91ZENvbnRhaW5lcik7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbG9hZGVyLWNvbXBvbmVudCcsIExvYWRlciwgeyBleHRlbmRzOiAnZGl2JyB9KTtcbiIsImltcG9ydCBTRUFSQ0hfSUNPTiBmcm9tICcuLi8uLi9pY29ucy9zZWFyY2guc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgSFRNTEZvcm1FbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2V0Q2l0eTogKGNpdHk6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyJyk7XG5cbiAgICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgc2VhcmNoSWNvbi5zcmMgPSBTRUFSQ0hfSUNPTjtcblxuICAgIGNvbnN0IHNlYXJjaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBzZWFyY2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWFyY2gtaW5wdXQnKTtcbiAgICBzZWFyY2hMYWJlbC5hcHBlbmQoc2VhcmNoSWNvbik7XG5cbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoLWlucHV0JztcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdDaXR5IG5hbWUnO1xuXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1idXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIHRoaXMuYXBwZW5kKHNlYXJjaExhYmVsLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghc2VhcmNoSW5wdXQudmFsdWUpIHJldHVybjtcbiAgICAgIHNldENpdHkoc2VhcmNoSW5wdXQudmFsdWUpO1xuICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NlYXJjaC1iYXInLCBTZWFyY2hCYXIsIHsgZXh0ZW5kczogJ2Zvcm0nIH0pO1xuIiwiaW1wb3J0IFRIRVJNT01FVEVSIGZyb20gJy4vaWNvbnMvd2VhdGhlci90aGVybW9tZXRlci5zdmcnO1xuaW1wb3J0IEhVTUlESVRZIGZyb20gJy4vaWNvbnMvd2VhdGhlci9odW1pZGl0eS5zdmcnO1xuaW1wb3J0IFdJTkRfU1BFRUQgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3dpbmQtc3BlZWQuc3ZnJztcbmltcG9ydCBDTE9VRElORVNTIGZyb20gJy4vaWNvbnMvd2VhdGhlci9jbG91ZGluZXNzLnN2Zyc7XG5pbXBvcnQgU1VOUklTRSBmcm9tICcuL2ljb25zL3dlYXRoZXIvc3VucmlzZS5zdmcnO1xuaW1wb3J0IFNVTlNFVCBmcm9tICcuL2ljb25zL3dlYXRoZXIvc3Vuc2V0LnN2Zyc7XG5pbXBvcnQgVVZfSU5ERVggZnJvbSAnLi9pY29ucy93ZWF0aGVyL3V2LWluZGV4LnN2Zyc7XG5pbXBvcnQgVklTSUJJTElUWSBmcm9tICcuL2ljb25zL3dlYXRoZXIvdmlzaWJpbGl0eS5zdmcnO1xuaW1wb3J0IFJBSU5fUFJPQkFCSUxJVFkgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3JhaW4tcHJvYmFiaWxpdHkuc3ZnJztcblxuZXhwb3J0IHR5cGUgRGF0YVR5cGUgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgdmFyTmFtZTogc3RyaW5nO1xuICB1bml0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgdGVtcGVyYXR1cmU6IERhdGFUeXBlID0ge1xuICB0aXRsZTogJ1RlbXBlcmF0dXJlJyxcbiAgaWNvbjogVEhFUk1PTUVURVIsXG4gIHZhck5hbWU6ICd0ZW1wJyxcbiAgdW5pdDogJ8KwQycsXG59O1xuZXhwb3J0IGNvbnN0IHJhaW5Qcm9iYWJpbGl0eTogRGF0YVR5cGUgPSB7XG4gIHRpdGxlOiAnUmFpbiBwcm9iLicsXG4gIGljb246IFJBSU5fUFJPQkFCSUxJVFksXG4gIHZhck5hbWU6ICdwb3AnLFxuICB1bml0OiAnJScsXG59O1xuZXhwb3J0IGNvbnN0IGZlZWxzTGlrZTogRGF0YVR5cGUgPSB7XG4gIHRpdGxlOiAnRmVlbHMgbGlrZScsXG4gIGljb246IFRIRVJNT01FVEVSLFxuICB2YXJOYW1lOiAnZmVlbHNfbGlrZScsXG4gIHVuaXQ6ICfCsEMnLFxufTtcbmV4cG9ydCBjb25zdCB3aW5kU3BlZWQ6IERhdGFUeXBlID0ge1xuICB0aXRsZTogJ1dpbmQgc3BlZWQnLFxuICBpY29uOiBXSU5EX1NQRUVELFxuICB2YXJOYW1lOiAnd2luZF9zcGVlZCcsXG4gIHVuaXQ6ICcgbS9zJyxcbn07XG5leHBvcnQgY29uc3QgY2xvdWRpbmVzczogRGF0YVR5cGUgPSB7XG4gIHRpdGxlOiAnQ2xvdWRpbmVzcycsXG4gIGljb246IENMT1VESU5FU1MsXG4gIHZhck5hbWU6ICdjbG91ZHMnLFxuICB1bml0OiAnJScsXG59O1xuZXhwb3J0IGNvbnN0IGh1bWlkaXR5OiBEYXRhVHlwZSA9IHtcbiAgdGl0bGU6ICdIdW1pZGl0eScsXG4gIGljb246IEhVTUlESVRZLFxuICB2YXJOYW1lOiAnaHVtaWRpdHknLFxuICB1bml0OiAnJScsXG59O1xuZXhwb3J0IGNvbnN0IHN1bnJpc2U6IERhdGFUeXBlID0ge1xuICB0aXRsZTogJ1N1bnJpc2UnLFxuICBpY29uOiBTVU5SSVNFLFxuICB2YXJOYW1lOiAnc3VucmlzZScsXG4gIHVuaXQ6ICcnLFxufTtcbmV4cG9ydCBjb25zdCBzdW5zZXQ6IERhdGFUeXBlID0ge1xuICB0aXRsZTogJ1N1bnNldCcsXG4gIGljb246IFNVTlNFVCxcbiAgdmFyTmFtZTogJ3N1bnNldCcsXG4gIHVuaXQ6ICcnLFxufTtcbmV4cG9ydCBjb25zdCB1dkluZGV4OiBEYXRhVHlwZSA9IHtcbiAgdGl0bGU6ICdVViBpbmRleCcsXG4gIGljb246IFVWX0lOREVYLFxuICB2YXJOYW1lOiAndXZpJyxcbiAgdW5pdDogJycsXG59O1xuZXhwb3J0IGNvbnN0IHZpc2liaWxpdHk6IERhdGFUeXBlID0ge1xuICB0aXRsZTogJ1Zpc2liaWxpdHknLFxuICBpY29uOiBWSVNJQklMSVRZLFxuICB2YXJOYW1lOiAndmlzaWJpbGl0eScsXG4gIHVuaXQ6ICcgbScsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd1dlYXRoZXJEYXRhIHtcbiAgbGF0OiBudW1iZXI7XG4gIGxvbjogbnVtYmVyO1xuICB0aW1lem9uZTogc3RyaW5nO1xuICBjdXJyZW50OiB7XG4gICAgZHQ6IG51bWJlcjtcbiAgICBzdW5yaXNlOiBudW1iZXI7XG4gICAgc3Vuc2V0OiBudW1iZXI7XG4gICAgdGVtcDogbnVtYmVyO1xuICAgIGZlZWxzX2xpa2U6IG51bWJlcjtcbiAgICBwcmVzc3VyZTogbnVtYmVyO1xuICAgIGh1bWlkaXR5OiBudW1iZXI7XG4gICAgZGV3X3BvaW50OiBudW1iZXI7XG4gICAgdXZpOiBudW1iZXI7XG4gICAgY2xvdWRzOiBudW1iZXI7XG4gICAgdmlzaWJpbGl0eTogbnVtYmVyO1xuICAgIHdpbmRfc3BlZWQ6IG51bWJlcjtcbiAgICB3aW5kX2RlZzogbnVtYmVyO1xuICAgIHdpbmRfZ3VzdDogbnVtYmVyO1xuICAgIHdlYXRoZXI6IEFycmF5PFdlYXRoZXJDb25kaXRpb24+O1xuICB9O1xuICBtaW51dGVseToge1xuICAgIGR0OiBudW1iZXI7XG4gICAgcHJlY2lwaXRhdGlvbjogbnVtYmVyO1xuICB9W107XG4gIGhvdXJseToge1xuICAgIGR0OiBudW1iZXI7XG4gICAgdGVtcDogbnVtYmVyO1xuICAgIGZlZWxzX2xpa2U6IG51bWJlcjtcbiAgICBwcmVzc3VyZTogbnVtYmVyO1xuICAgIGh1bWlkaXR5OiBudW1iZXI7XG4gICAgZGV3X3BvaW50OiBudW1iZXI7XG4gICAgdXZpOiBudW1iZXI7XG4gICAgY2xvdWRzOiBudW1iZXI7XG4gICAgdmlzaWJpbGl0eTogbnVtYmVyO1xuICAgIHdpbmRfc3BlZWQ6IG51bWJlcjtcbiAgICB3aW5kX2RlZzogbnVtYmVyO1xuICAgIHdpbmRfZ3VzdDogbnVtYmVyO1xuICAgIHBvcDogbnVtYmVyO1xuICAgIHdlYXRoZXI6IEFycmF5PFdlYXRoZXJDb25kaXRpb24+O1xuICB9W107XG4gIGRhaWx5OiB7XG4gICAgZHQ6IG51bWJlcjtcbiAgICBzdW5yaXNlOiBudW1iZXI7XG4gICAgc3Vuc2V0OiBudW1iZXI7XG4gICAgbW9vbnJpc2U6IG51bWJlcjtcbiAgICBtb29uc2V0OiBudW1iZXI7XG4gICAgbW9vbl9waGFzZTogbnVtYmVyO1xuICAgIHRlbXA6IHtcbiAgICAgIGRheTogbnVtYmVyO1xuICAgICAgbWluOiBudW1iZXI7XG4gICAgICBtYXg6IG51bWJlcjtcbiAgICAgIG5pZ2h0OiBudW1iZXI7XG4gICAgICBldmU6IG51bWJlcjtcbiAgICAgIG1vcm46IG51bWJlcjtcbiAgICB9O1xuICAgIGZlZWxzX2xpa2U6IHtcbiAgICAgIGRheTogbnVtYmVyO1xuICAgICAgbmlnaHQ6IG51bWJlcjtcbiAgICAgIGV2ZTogbnVtYmVyO1xuICAgICAgbW9ybjogbnVtYmVyO1xuICAgIH07XG4gICAgcHJlc3N1cmU6IG51bWJlcjtcbiAgICBodW1pZGl0eTogbnVtYmVyO1xuICAgIGRld19wb2ludDogbnVtYmVyO1xuICAgIHdpbmRfc3BlZWQ6IG51bWJlcjtcbiAgICB3aW5kX2RlZzogbnVtYmVyO1xuICAgIHdpbmRfZ3VzdDogbnVtYmVyO1xuICAgIHdlYXRoZXI6IEFycmF5PFdlYXRoZXJDb25kaXRpb24+O1xuICAgIGNsb3VkczogbnVtYmVyO1xuICAgIHBvcDogbnVtYmVyO1xuICAgIHJhaW46IG51bWJlcjtcbiAgICB1dmk6IG51bWJlcjtcbiAgfVtdO1xuICBhbGVydHM6IHtcbiAgICBzZW5kZXJfbmFtZTogc3RyaW5nO1xuICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgc3RhcnQ6IG51bWJlcjtcbiAgICBlbmQ6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHRhZ3M6IHN0cmluZ1tdO1xuICB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckFuZExvY2F0aW9uRGF0YSBleHRlbmRzIFJhd1dlYXRoZXJEYXRhIHtcbiAgY2l0eTogc3RyaW5nO1xuICBjb3VudHJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2VhdGhlckNvbmRpdGlvbiB7XG4gIGlkOiBudW1iZXI7XG4gIG1haW46IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmluaXQoKTtcbiIsImltcG9ydCBDdXJyZW50V2VhdGhlciBmcm9tICcuLi9jb21wb25lbnRzL0N1cnJlbnRXZWF0aGVyL0N1cnJlbnRXZWF0aGVyJztcbmltcG9ydCBGb3JlY2FzdENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0ZvcmVjYXN0Q29udGFpbmVyL0ZvcmVjYXN0Q29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgZm9yZWNhc3RDb250YWluZXI6IEZvcmVjYXN0Q29udGFpbmVyO1xuXG4gIGN1cnJlbnRXZWF0aGVyOiBDdXJyZW50V2VhdGhlcjtcblxuICAvLyBUT0RPIGZpeCBkYXRhIHR5cGVcbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcmVjYXN0Q29udGFpbmVyID0gbmV3IEZvcmVjYXN0Q29udGFpbmVyKHtcbiAgICAgIGRhaWx5OiBkYXRhLmRhaWx5LFxuICAgICAgaG91cmx5OiBkYXRhLmhvdXJseSxcbiAgICB9KTtcbiAgICB0aGlzLmN1cnJlbnRXZWF0aGVyID0gbmV3IEN1cnJlbnRXZWF0aGVyKGRhdGEuY3VycmVudCwgZGF0YS5jaXR5KTtcbiAgICB0aGlzLmFwcGVuZCh0aGlzLmN1cnJlbnRXZWF0aGVyLCB0aGlzLmZvcmVjYXN0Q29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIGdlbmVyYXRlTWFpbkVsZW1lbnQoKSB7XG4gIC8vICAgY29uc3Qgd2VhdGhlckRhdGFDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAvLyAgICAgJ2RpdicsXG4gIC8vICAgICB7XG4gIC8vICAgICAgIGNsYXNzOiAnd2VhdGhlci1kYXRhLWNvbnRhaW5lcicsXG4gIC8vICAgICB9LFxuICAvLyAgICAgdGhpcy5jdXJyZW50V2VhdGhlcixcbiAgLy8gICAgIHRoaXMuZm9yZWNhc3RDb250YWluZXJcbiAgLy8gICApO1xuICAvLyAgIHJldHVybiBET01VdGlscy5jcmVhdGVFbGVtZW50KCdtYWluJywge30sIHdlYXRoZXJEYXRhQ29udGFpbmVyKTtcbiAgLy8gfVxuXG4gIC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICB1cGRhdGUobmV3RGF0YTogYW55KSB7XG4gICAgdGhpcy5jdXJyZW50V2VhdGhlci51cGRhdGUobmV3RGF0YS5jdXJyZW50LCBuZXdEYXRhLmNpdHkpO1xuICAgIHRoaXMuZm9yZWNhc3RDb250YWluZXIudXBkYXRlKHtcbiAgICAgIGRhaWx5OiBuZXdEYXRhLmRhaWx5LFxuICAgICAgaG91cmx5OiBuZXdEYXRhLmhvdXJseSxcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21haW4tY29tcG9uZW50JywgTWFpbiwgeyBleHRlbmRzOiAnbWFpbicgfSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVXRpbHMge1xuICBzdGF0aWMgZ2V0RGF0ZU9wdGlvbnModGltZVpvbmU6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICBkYWlseToge1xuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgfSxcbiAgICAgIG1pbnV0ZWx5OiB7XG4gICAgICAgIHRpbWVab25lLFxuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgfSxcbiAgICAgIGhvdXJseToge1xuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIH0sXG4gICAgICBjdXJyZW50OiB7XG4gICAgICAgIHRpbWVab25lLFxuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgfSxcbiAgICAgIHN1bnNldDoge1xuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREYXRlU3RyaW5nKFxuICAgIGRhdGU6IG51bWJlcixcbiAgICBvcHRpb25zOiBQYXJ0aWFsPEludGwuRGF0ZVRpbWVGb3JtYXRQYXJ0VHlwZXNSZWdpc3RyeT4sXG4gICAgbG9jYWxlID0gJ2VuLVVLJ1xuICApIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgc3RhdGljIGNhcGl0YWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRlVXRpbHMgZnJvbSAnLi9EYXRlVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyVXRpbHMge1xuICBkYXRlT3B0aW9uczogUmV0dXJuVHlwZTx0eXBlb2YgRGF0ZVV0aWxzWydnZXREYXRlT3B0aW9ucyddPjtcblxuICBkYXRhOiBhbnk7IC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuXG4gIC8vIFRPRE8gZml4IGRhdGEgdHlwZVxuICBjb25zdHJ1Y3Rvcih3ZWF0aGVyRGF0YTogYW55KSB7XG4gICAgdGhpcy5kYXRhID0gd2VhdGhlckRhdGE7XG4gICAgdGhpcy5kYXRlT3B0aW9ucyA9IERhdGVVdGlscy5nZXREYXRlT3B0aW9ucyh0aGlzLmRhdGEudGltZXpvbmUpO1xuICB9XG5cbiAgLy8gVE9ETyBmaXggZGF0YSB0eXBlXG4gIG5vcm1hbGl6ZU9iamVjdChvYmo6IGFueSwgdHlwZTogJ2N1cnJlbnQnIHwgJ2RhaWx5JyB8ICdob3VybHknIHwgJ21pbnV0ZWx5Jykge1xuICAgIGNvbnN0IHsgZ2V0RGF0ZVN0cmluZyB9ID0gRGF0ZVV0aWxzO1xuICAgIGNvbnN0IHsgcmVwbGFjZUlmTm90VW5kZWZpbmVkIH0gPSBXZWF0aGVyVXRpbHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9iaixcbiAgICAgIGR0OiBnZXREYXRlU3RyaW5nKG9iai5kdCwgdGhpcy5kYXRlT3B0aW9uc1t0eXBlXSksXG4gICAgICBwb3A6IHJlcGxhY2VJZk5vdFVuZGVmaW5lZChvYmoucG9wLCBNYXRoLnJvdW5kKG9iai5wb3AgKiAxMDAwMCkgLyAxMDApLFxuICAgICAgc3VucmlzZTogcmVwbGFjZUlmTm90VW5kZWZpbmVkKFxuICAgICAgICBvYmouc3VucmlzZSxcbiAgICAgICAgZ2V0RGF0ZVN0cmluZyhvYmouc3VucmlzZSwgdGhpcy5kYXRlT3B0aW9ucy5zdW5zZXQpXG4gICAgICApLFxuICAgICAgc3Vuc2V0OiByZXBsYWNlSWZOb3RVbmRlZmluZWQoXG4gICAgICAgIG9iai5zdW5zZXQsXG4gICAgICAgIGdldERhdGVTdHJpbmcob2JqLnN1bnNldCwgdGhpcy5kYXRlT3B0aW9ucy5zdW5zZXQpXG4gICAgICApLFxuICAgICAgbW9vbnJpc2U6IHJlcGxhY2VJZk5vdFVuZGVmaW5lZChcbiAgICAgICAgb2JqLm1vb25yaXNlLFxuICAgICAgICBnZXREYXRlU3RyaW5nKG9iai5tb29ucmlzZSwgdGhpcy5kYXRlT3B0aW9ucy5zdW5zZXQpXG4gICAgICApLFxuICAgICAgbW9vbnNldDogcmVwbGFjZUlmTm90VW5kZWZpbmVkKFxuICAgICAgICBvYmoubW9vbnNldCxcbiAgICAgICAgZ2V0RGF0ZVN0cmluZyhvYmoubW9vbnNldCwgdGhpcy5kYXRlT3B0aW9ucy5zdW5zZXQpXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZUlmTm90VW5kZWZpbmVkPFQ+KHZhbHVlOiBhbnksIG5ld1ZhbHVlOiBUKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9XG5cbiAgLy8gVE9ETyBmaXggZGF0YSB0eXBlXG4gIGdldE5vcm1hbGl6ZWREYXRhKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIGN1cnJlbnQ6IHRoaXMubm9ybWFsaXplT2JqZWN0KGRhdGEuY3VycmVudCwgJ2N1cnJlbnQnKSxcbiAgICAgIGRhaWx5OiBkYXRhLmRhaWx5Lm1hcCgob2JqOiBhbnkpID0+IHRoaXMubm9ybWFsaXplT2JqZWN0KG9iaiwgJ2RhaWx5JykpLFxuICAgICAgaG91cmx5OiBkYXRhLmhvdXJseS5tYXAoKG9iajogYW55KSA9PlxuICAgICAgICB0aGlzLm5vcm1hbGl6ZU9iamVjdChvYmosICdob3VybHknKVxuICAgICAgKSxcbiAgICAgIG1pbnV0ZWx5OiBkYXRhLm1pbnV0ZWx5Lm1hcCgob2JqOiBhbnkpID0+XG4gICAgICAgIHRoaXMubm9ybWFsaXplT2JqZWN0KG9iaiwgJ21pbnV0ZWx5JylcbiAgICAgICksXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9