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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 16px;\n  --color-cta: #3aff5b;\n  --color-background: #e1e8ef;\n  --color-current-weather: #0097cf;\n  --color-card: #ffffff;\n  --box-shadow-card: 0 1px 3px rgba(0, 0, 0, 0.12),\n    0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--color-background);\n  color: white;\n}\n\n.app {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: 'Poppins', sans-serif;\n  background-color: var(--color-current-weather);\n}\n\nheader {\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n}\n\nh1 {\n  font-size: 1.2rem;\n  font-family: 'Comfortaa', cursive;\n  letter-spacing: 2px;\n  color: white;\n}\n\n.search-bar input {\n  flex: 1;\n  color: white;\n  font-size: 1rem;\n  background: none;\n  border: none;\n  min-width: 0;\n}\n\n.search-bar input::placeholder {\n  color: #bebebe;\n}\n\n.search-bar input:focus {\n  outline: none;\n}\n\n.search-bar {\n  padding: 2px 6px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 16px;\n  border: 2px solid white;\n  max-width: 250px;\n  min-width: 0;\n}\n\n.search-bar .icon {\n  height: 16px;\n  display: block;\n}\n\n.search-bar button {\n  font-size: 0.9rem;\n  border: none;\n  background-color: transparent;\n  color: var(--color-cta);\n  font-weight: 700;\n  cursor: pointer;\n}\n\nmain {\n  flex: 1;\n  max-width: 100vw;\n  display: flex;\n  align-items: center;\n}\n\n.current-weather {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n  padding: 32px 8px;\n  text-align: center;\n}\n\n.current-weather .city-info {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.current-weather .city-name {\n  font-size: 3rem;\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  color: var(--color-cta);\n  text-shadow: 1px 1px black;\n}\n\n.current-weather .temperature {\n  font-size: 4rem;\n  text-align: center;\n}\n\n.current-weather .temperature .small {\n  font-size: 1.5rem;\n  position: relative;\n  bottom: 32px;\n}\n\n.current-weather .weather-condition {\n  font-size: 1.2rem;\n}\n\n.current-weather .weather-condition img {\n  height: 64px;\n  object-fit: cover;\n}\n\n.current-weather .data-container {\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: repeat(3, max-content);\n}\n\n.forecast {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast .weather-condition img {\n  height: 48px;\n  object-fit: cover;\n  filter: drop-shadow(0 0 1px black);\n}\n\n.weather-data-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.forecast .card-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.data-container {\n  display: grid;\n  gap: 16px 48px;\n  grid-template-columns: 1fr 1fr;\n}\n\n.data-name {\n  font-weight: 700;\n}\n\n.data-container img {\n  width: 32px;\n}\n\n.current-weather .data,\n.current-weather .data .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.forecast .data {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.temperature-minmax {\n  display: flex;\n  gap: 16px;\n}\n\n.weather-condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  text-align: center;\n}\n\n.weather-condition img {\n  display: block;\n}\n\n.forecast-container {\n  padding: 16px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  background-color: var(--color-background);\n}\n\n.forecast-container .buttons-container {\n  display: flex;\n  gap: 32px;\n}\n\n.switch-tab-btn {\n  position: relative;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.switch-tab-btn:before {\n  position: absolute;\n  width: 0;\n  height: 3px;\n  bottom: 0;\n  left: 50%;\n  content: '';\n  transition: all 0.5s;\n  background-color: black;\n}\n\n.switch-tab-btn.active:before {\n  width: 100%;\n  left: 0;\n  background-color: var(--color-current-weather);\n}\n\n.switch-tab-btn:hover:before {\n  width: 100%;\n  left: 0;\n}\n\n.card {\n  border-radius: 8px;\n  padding: 24px;\n  background-color: var(--color-card);\n  color: black;\n  box-shadow: var(--box-shadow-card);\n}\n\n.card h3 {\n  font-size: 1.5rem;\n}\n\n.forecast .card {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-template-columns: 130px 1fr;\n  gap: 8px 48px;\n  align-items: center;\n  justify-content: center;\n  max-width: 610px;\n  width: 100%;\n}\n\n.forecast .title {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\n.forecast .card .temperature {\n  display: flex;\n  gap: 16px;\n  font-weight: 300;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.cloud-container {\n  position: relative;\n  width: 160px;\n  height: 50px;\n  background-color: white;\n  border-radius: 50px;\n}\n\n.cloud-container:before {\n  content: '';\n  position: absolute;\n  height: 55px;\n  width: 55px;\n  top: -25px;\n  left: 20px;\n  background-color: white;\n  border-radius: 50%;\n  box-shadow: 45px 5px 0 15px white;\n}\n\n.cloud {\n  position: absolute;\n  background-color: #ffffff00;\n  overflow: hidden;\n}\n\n.cloud:before {\n  content: '';\n  background-color: var(--color-current-weather);\n  position: absolute;\n  height: 160px;\n  width: 160px;\n  bottom: 0;\n  animation: loading 2s infinite;\n}\n\n.cloud:nth-child(2):before {\n  bottom: -20px;\n}\n\n@keyframes loading {\n  from {\n    transform: translateY(160px);\n  }\n  to {\n    transform: translateY(75px);\n  }\n}\n\n.cloud:nth-child(1) {\n  width: 160px;\n  height: 50px;\n  border-radius: 50px;\n}\n\n.cloud:nth-child(2) {\n  top: -25px;\n  left: 20px;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n}\n\n.cloud:nth-child(3) {\n  top: -35px;\n  left: 50px;\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  filter: drop-shadow(1px 1px 2px black);\n}\n\n@media (max-width: 975px) {\n  .current-weather {\n    flex-direction: column;\n    gap: 0;\n    padding: 0 8px 32px;\n  }\n  .current-weather .data-container {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    width: 100%;\n  }\n  .weather-condition {\n    margin-bottom: 16px;\n  }\n}\n\n@media (max-width: 650px) {\n  .current-weather .data-container {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: none;\n    gap: 16px;\n    width: 100%;\n  }\n  .forecast .card {\n    grid-template-rows: max-content max-content 1fr;\n    grid-template-columns: 1fr;\n  }\n  .forecast .data-container {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  }\n  .logo-container h1 {\n    display: none;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Poppins:wght@300&display=swap');\n\n:root {\n  font-size: 16px;\n  --color-cta: #3aff5b;\n  --color-background: #e1e8ef;\n  --color-current-weather: #0097cf;\n  --color-card: #ffffff;\n  --box-shadow-card: 0 1px 3px rgba(0, 0, 0, 0.12),\n    0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--color-background);\n  color: white;\n}\n\n.app {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: 'Poppins', sans-serif;\n  background-color: var(--color-current-weather);\n}\n\nheader {\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n}\n\nh1 {\n  font-size: 1.2rem;\n  font-family: 'Comfortaa', cursive;\n  letter-spacing: 2px;\n  color: white;\n}\n\n.search-bar input {\n  flex: 1;\n  color: white;\n  font-size: 1rem;\n  background: none;\n  border: none;\n  min-width: 0;\n}\n\n.search-bar input::placeholder {\n  color: #bebebe;\n}\n\n.search-bar input:focus {\n  outline: none;\n}\n\n.search-bar {\n  padding: 2px 6px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 16px;\n  border: 2px solid white;\n  max-width: 250px;\n  min-width: 0;\n}\n\n.search-bar .icon {\n  height: 16px;\n  display: block;\n}\n\n.search-bar button {\n  font-size: 0.9rem;\n  border: none;\n  background-color: transparent;\n  color: var(--color-cta);\n  font-weight: 700;\n  cursor: pointer;\n}\n\nmain {\n  flex: 1;\n  max-width: 100vw;\n  display: flex;\n  align-items: center;\n}\n\n.current-weather {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n  padding: 32px 8px;\n  text-align: center;\n}\n\n.current-weather .city-info {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.current-weather .city-name {\n  font-size: 3rem;\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  color: var(--color-cta);\n  text-shadow: 1px 1px black;\n}\n\n.current-weather .temperature {\n  font-size: 4rem;\n  text-align: center;\n}\n\n.current-weather .temperature .small {\n  font-size: 1.5rem;\n  position: relative;\n  bottom: 32px;\n}\n\n.current-weather .weather-condition {\n  font-size: 1.2rem;\n}\n\n.current-weather .weather-condition img {\n  height: 64px;\n  object-fit: cover;\n}\n\n.current-weather .data-container {\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: repeat(3, max-content);\n}\n\n.forecast {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forecast .weather-condition img {\n  height: 48px;\n  object-fit: cover;\n  filter: drop-shadow(0 0 1px black);\n}\n\n.weather-data-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.forecast .card-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.data-container {\n  display: grid;\n  gap: 16px 48px;\n  grid-template-columns: 1fr 1fr;\n}\n\n.data-name {\n  font-weight: 700;\n}\n\n.data-container img {\n  width: 32px;\n}\n\n.current-weather .data,\n.current-weather .data .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.forecast .data {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n\n.temperature-minmax {\n  display: flex;\n  gap: 16px;\n}\n\n.weather-condition {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  text-align: center;\n}\n\n.weather-condition img {\n  display: block;\n}\n\n.forecast-container {\n  padding: 16px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  background-color: var(--color-background);\n}\n\n.forecast-container .buttons-container {\n  display: flex;\n  gap: 32px;\n}\n\n.switch-tab-btn {\n  position: relative;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.switch-tab-btn:before {\n  position: absolute;\n  width: 0;\n  height: 3px;\n  bottom: 0;\n  left: 50%;\n  content: '';\n  transition: all 0.5s;\n  background-color: black;\n}\n\n.switch-tab-btn.active:before {\n  width: 100%;\n  left: 0;\n  background-color: var(--color-current-weather);\n}\n\n.switch-tab-btn:hover:before {\n  width: 100%;\n  left: 0;\n}\n\n.card {\n  border-radius: 8px;\n  padding: 24px;\n  background-color: var(--color-card);\n  color: black;\n  box-shadow: var(--box-shadow-card);\n}\n\n.card h3 {\n  font-size: 1.5rem;\n}\n\n.forecast .card {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-template-columns: 130px 1fr;\n  gap: 8px 48px;\n  align-items: center;\n  justify-content: center;\n  max-width: 610px;\n  width: 100%;\n}\n\n.forecast .title {\n  grid-column: 1 / -1;\n  text-align: center;\n}\n\n.forecast .card .temperature {\n  display: flex;\n  gap: 16px;\n  font-weight: 300;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.cloud-container {\n  position: relative;\n  width: 160px;\n  height: 50px;\n  background-color: white;\n  border-radius: 50px;\n}\n\n.cloud-container:before {\n  content: '';\n  position: absolute;\n  height: 55px;\n  width: 55px;\n  top: -25px;\n  left: 20px;\n  background-color: white;\n  border-radius: 50%;\n  box-shadow: 45px 5px 0 15px white;\n}\n\n.cloud {\n  position: absolute;\n  background-color: #ffffff00;\n  overflow: hidden;\n}\n\n.cloud:before {\n  content: '';\n  background-color: var(--color-current-weather);\n  position: absolute;\n  height: 160px;\n  width: 160px;\n  bottom: 0;\n  animation: loading 2s infinite;\n}\n\n.cloud:nth-child(2):before {\n  bottom: -20px;\n}\n\n@keyframes loading {\n  from {\n    transform: translateY(160px);\n  }\n  to {\n    transform: translateY(75px);\n  }\n}\n\n.cloud:nth-child(1) {\n  width: 160px;\n  height: 50px;\n  border-radius: 50px;\n}\n\n.cloud:nth-child(2) {\n  top: -25px;\n  left: 20px;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n}\n\n.cloud:nth-child(3) {\n  top: -35px;\n  left: 50px;\n  width: 85px;\n  height: 85px;\n  border-radius: 50%;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  filter: drop-shadow(1px 1px 2px black);\n}\n\n@media (max-width: 975px) {\n  .current-weather {\n    flex-direction: column;\n    gap: 0;\n    padding: 0 8px 32px;\n  }\n  .current-weather .data-container {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 16px;\n    width: 100%;\n  }\n  .weather-condition {\n    margin-bottom: 16px;\n  }\n}\n\n@media (max-width: 650px) {\n  .current-weather .data-container {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: none;\n    gap: 16px;\n    width: 100%;\n  }\n  .forecast .card {\n    grid-template-rows: max-content max-content 1fr;\n    grid-template-columns: 1fr;\n  }\n  .forecast .data-container {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  }\n  .logo-container h1 {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
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
    ).src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    this.element.querySelector('.weather-condition .description').textContent =
      _utils_StringUtils__WEBPACK_IMPORTED_MODULE_2__["default"].capitalize(data.current.weather[0].description);
    this.dataArr.forEach((datum) => {
      this.element.querySelector(`.data.${datum.varName} .value`).textContent =
        data.current[datum.varName] + datum.unit;
    });
  }

  static generateCurrentWeatherElement() {
    const cityName = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(
      'h2',
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
    this.weatherConditionImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
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
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/logo.svg */ "./src/img/logo.svg");




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
      height: 'auto',
      src: _img_logo_svg__WEBPACK_IMPORTED_MODULE_2__,
      alt: 'weather app',
    });
    const logoContainer = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      'div',
      {
        class: 'logo-container',
      },
      logo,
      h1
    );
    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      'header',
      {},
      logoContainer,
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
    const cloudPieces = new Array(3).fill().map(() =>
      _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', {
        class: 'cloud',
      })
    );
    const cloudContainer = _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      'div',
      {
        class: 'cloud-container',
      },
      ...cloudPieces
    );
    return _utils_DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      'div',
      {
        class: 'overlay',
      },
      cloudContainer
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFdlYXRoZXIvQ3VycmVudFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3JlY2FzdC9EYWlseUZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9yZWNhc3QvRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3JlY2FzdC9Ib3VybHlGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0ZvcmVjYXN0Q2FyZC9Gb3JlY2FzdENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb3JlY2FzdENvbnRhaW5lci9Gb3JlY2FzdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xheW91dC9NYWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9EYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbHMvV2VhdGhlclV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRANTAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY29sb3ItY3RhOiAjM2FmZjViO1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZTFlOGVmO1xcbiAgLS1jb2xvci1jdXJyZW50LXdlYXRoZXI6ICMwMDk3Y2Y7XFxuICAtLWNvbG9yLWNhcmQ6ICNmZmZmZmY7XFxuICAtLWJveC1zaGFkb3ctY2FyZDogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFwcCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWN1cnJlbnQtd2VhdGhlcik7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWJhciAuaWNvbiB7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY3RhKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDY0cHg7XFxuICBwYWRkaW5nOiAzMnB4IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuY2l0eS1pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5jaXR5LW5hbWUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWF4LXdpZHRoOiAyODBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY3RhKTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC50ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLnRlbXBlcmF0dXJlIC5zbWFsbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMzJweDtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAud2VhdGhlci1jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuZGF0YS1jb250YWluZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCAud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gIGhlaWdodDogNDhweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMXB4IGJsYWNrKTtcXG59XFxuXFxuLndlYXRoZXItZGF0YS1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmNhcmQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTZweCA0OHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uZGF0YS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kYXRhLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDMycHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmRhdGEsXFxuLmN1cnJlbnQtd2VhdGhlciAuZGF0YSAuZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdCAuZGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtbWlubWF4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTZweCA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4uc3dpdGNoLXRhYi1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoLXRhYi1idG46YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBjb250ZW50OiAnJztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zd2l0Y2gtdGFiLWJ0bi5hY3RpdmU6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWN1cnJlbnQtd2VhdGhlcik7XFxufVxcblxcbi5zd2l0Y2gtdGFiLWJ0bjpob3ZlcjpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FyZCk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWNhcmQpO1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0IC5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTMwcHggMWZyO1xcbiAgZ2FwOiA4cHggNDhweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNjEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcmVjYXN0IC50aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmNhcmQgLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbi5jbG91ZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uY2xvdWQtY29udGFpbmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNTVweDtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgdG9wOiAtMjVweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDQ1cHggNXB4IDAgMTVweCB3aGl0ZTtcXG59XFxuXFxuLmNsb3VkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jdXJyZW50LXdlYXRoZXIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGJvdHRvbTogMDtcXG4gIGFuaW1hdGlvbjogbG9hZGluZyAycyBpbmZpbml0ZTtcXG59XFxuXFxuLmNsb3VkOm50aC1jaGlsZCgyKTpiZWZvcmUge1xcbiAgYm90dG9tOiAtMjBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTYwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzVweCk7XFxuICB9XFxufVxcblxcbi5jbG91ZDpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmNsb3VkOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IC0yNXB4O1xcbiAgbGVmdDogMjBweDtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uY2xvdWQ6bnRoLWNoaWxkKDMpIHtcXG4gIHRvcDogLTM1cHg7XFxuICBsZWZ0OiA1MHB4O1xcbiAgd2lkdGg6IDg1cHg7XFxuICBoZWlnaHQ6IDg1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAycHggYmxhY2spO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTc1cHgpIHtcXG4gIC5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDMycHg7XFxuICB9XFxuICAuY3VycmVudC13ZWF0aGVyIC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAud2VhdGhlci1jb25kaXRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5jdXJyZW50LXdlYXRoZXIgLmRhdGEtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmZvcmVjYXN0IC5jYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgLmZvcmVjYXN0IC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpO1xcbiAgfVxcbiAgLmxvZ28tY29udGFpbmVyIGgxIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckI7aUNBQytCO0FBQ2pDOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7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Q0Usc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyREFBMkQ7RUFDN0Q7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYTp3Z2h0QDUwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAtLWNvbG9yLWN0YTogIzNhZmY1YjtcXG4gIC0tY29sb3ItYmFja2dyb3VuZDogI2UxZThlZjtcXG4gIC0tY29sb3ItY3VycmVudC13ZWF0aGVyOiAjMDA5N2NmO1xcbiAgLS1jb2xvci1jYXJkOiAjZmZmZmZmO1xcbiAgLS1ib3gtc2hhZG93LWNhcmQ6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hcHAge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jdXJyZW50LXdlYXRoZXIpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQge1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi5zZWFyY2gtYmFyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2JlYmViZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgcGFkZGluZzogMnB4IDZweDtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgLmljb24ge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWN0YSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA2NHB4O1xcbiAgcGFkZGluZzogMzJweCA4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmNpdHktaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAuY2l0eS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1heC13aWR0aDogMjgwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWN0YSk7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciAudGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC50ZW1wZXJhdHVyZSAuc21hbGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDMycHg7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLndlYXRoZXItY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC53ZWF0aGVyLWNvbmRpdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIgLmRhdGEtY29udGFpbmVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgLndlYXRoZXItY29uZGl0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDFweCBibGFjayk7XFxufVxcblxcbi53ZWF0aGVyLWRhdGEtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcmVjYXN0IC5jYXJkLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmRhdGEtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE2cHggNDhweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLmRhdGEtbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGF0YS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIC5kYXRhLFxcbi5jdXJyZW50LXdlYXRoZXIgLmRhdGEgLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QgLmRhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLW1pbm1heCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ud2VhdGhlci1jb25kaXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1jb25kaXRpb24gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDE2cHggOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuLnN3aXRjaC10YWItYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN3aXRjaC10YWItYnRuOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgY29udGVudDogJyc7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3dpdGNoLXRhYi1idG4uYWN0aXZlOmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jdXJyZW50LXdlYXRoZXIpO1xcbn1cXG5cXG4uc3dpdGNoLXRhYi1idG46aG92ZXI6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcmQpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1jYXJkKTtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mb3JlY2FzdCAuY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IDFmcjtcXG4gIGdhcDogOHB4IDQ4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDYxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JlY2FzdCAudGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0IC5jYXJkIC50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4uY2xvdWQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmNsb3VkLWNvbnRhaW5lcjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICB3aWR0aDogNTVweDtcXG4gIHRvcDogLTI1cHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiA0NXB4IDVweCAwIDE1cHggd2hpdGU7XFxufVxcblxcbi5jbG91ZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY3VycmVudC13ZWF0aGVyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTYwcHg7XFxuICB3aWR0aDogMTYwcHg7XFxuICBib3R0b206IDA7XFxuICBhbmltYXRpb246IGxvYWRpbmcgMnMgaW5maW5pdGU7XFxufVxcblxcbi5jbG91ZDpudGgtY2hpbGQoMik6YmVmb3JlIHtcXG4gIGJvdHRvbTogLTIwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZyB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2MHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDc1cHgpO1xcbiAgfVxcbn1cXG5cXG4uY2xvdWQ6bnRoLWNoaWxkKDEpIHtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5jbG91ZDpudGgtY2hpbGQoMikge1xcbiAgdG9wOiAtMjVweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICB3aWR0aDogNTVweDtcXG4gIGhlaWdodDogNTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNsb3VkOm50aC1jaGlsZCgzKSB7XFxuICB0b3A6IC0zNXB4O1xcbiAgbGVmdDogNTBweDtcXG4gIHdpZHRoOiA4NXB4O1xcbiAgaGVpZ2h0OiA4NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMnB4IGJsYWNrKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk3NXB4KSB7XFxuICAuY3VycmVudC13ZWF0aGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwO1xcbiAgICBwYWRkaW5nOiAwIDhweCAzMnB4O1xcbiAgfVxcbiAgLmN1cnJlbnQtd2VhdGhlciAuZGF0YS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLndlYXRoZXItY29uZGl0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAuY3VycmVudC13ZWF0aGVyIC5kYXRhLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5mb3JlY2FzdCAuY2FyZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4gIC5mb3JlY2FzdCAuZGF0YS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcXG4gIH1cXG4gIC5sb2dvLWNvbnRhaW5lciBoMSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YlN1Yic7XG5pbXBvcnQgV2VhdGhlclV0aWxzIGZyb20gJy4vdXRpbHMvV2VhdGhlclV0aWxzJztcblxuY29uc3QgQVBJX0tFWSA9ICdiOGJlZGMyMTEwMDMwMTAxZGQ5YzhkMGM3NGYyMzM2Yyc7XG5cbi8vIFRPRE8gZXJyb3IgaGFuZGxpbmdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG4gIHN0YXRpYyBhc3luYyBnZXRMb2NhdGlvbkRhdGEobG9jYXRpb25OYW1lKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uTmFtZX0mbGltaXQ9MSZhcHBpZD0ke0FQSV9LRVl9YFxuICAgICk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToganNvblswXS5uYW1lLFxuICAgICAgY291bnRyeToganNvblswXS5jb3VudHJ5LFxuICAgICAgbGF0OiBqc29uWzBdLmxhdCxcbiAgICAgIGxvbjoganNvblswXS5sb24sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRXZWF0aGVyQnlDb29yZGluYXRlcyhsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bG9jYXRpb24ubGF0fSZsb249JHtsb2NhdGlvbi5sb259JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYFxuICAgICk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRXZWF0aGVyQnlMb2NhdGlvbk5hbWUobG9jYXRpb25OYW1lKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcigpO1xuICAgIGxvYWRlci5zaG93KCk7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgQXBpLmdldExvY2F0aW9uRGF0YShsb2NhdGlvbk5hbWUpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgQXBpLmdldFdlYXRoZXJCeUNvb3JkaW5hdGVzKGxvY2F0aW9uRGF0YSk7XG4gICAgbG9hZGVyLnJlbW92ZSgpO1xuICAgIHdlYXRoZXJEYXRhLmNpdHkgPSBsb2NhdGlvbkRhdGEubmFtZTtcbiAgICB3ZWF0aGVyRGF0YS5jb3VudHJ5ID0gbG9jYXRpb25EYXRhLmNvdW50cnk7XG4gICAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyVXRpbHMod2VhdGhlckRhdGEpLmdldE5vcm1hbGl6ZWREYXRhKCk7XG4gICAgcHViU3ViLnB1Ymxpc2goJ25ld0RhdGEnLCB3ZWF0aGVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IE1haW4gZnJvbSAnLi9sYXlvdXQvTWFpbic7XG5pbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi91dGlscy9ET01VdGlscyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBBcGkgZnJvbSAnLi9BcGknO1xuXG4vLyBUT0RPIHNwbGl0IHZpZXdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xuICAgIHRoaXMubWFpbiA9IG5ldyBNYWluKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2FwcCcsXG4gICAgICB9LFxuICAgICAgdGhpcy5oZWFkZXIuZWxlbWVudCxcbiAgICAgIHRoaXMubWFpbi5lbGVtZW50XG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgQXBpLmdldFdlYXRoZXJCeUxvY2F0aW9uTmFtZSgnTG9uZG9uJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5lbGVtZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IGRhdGFTZXQgZnJvbSAnLi4vLi4vZGF0YSc7XG5pbXBvcnQgcHViU3ViIGZyb20gJy4uLy4uL3B1YlN1Yic7XG5pbXBvcnQgU3RyaW5nVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvU3RyaW5nVXRpbHMnO1xuaW1wb3J0IERPTVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL0RPTVV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBDdXJyZW50V2VhdGhlci5nZW5lcmF0ZUN1cnJlbnRXZWF0aGVyRWxlbWVudCgpO1xuICAgIHRoaXMuZGF0YUFyciA9IFtcbiAgICAgIGRhdGFTZXQuZmVlbHNMaWtlLFxuICAgICAgZGF0YVNldC53aW5kU3BlZWQsXG4gICAgICBkYXRhU2V0LmNsb3VkaW5lc3MsXG4gICAgICBkYXRhU2V0Lmh1bWlkaXR5LFxuICAgICAgZGF0YVNldC52aXNpYmlsaXR5LFxuICAgICAgZGF0YVNldC51dkluZGV4LFxuICAgIF07XG4gICAgdGhpcy5kYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICB0aGlzLmFkZEluZm8oZGF0dW0pO1xuICAgIH0pO1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ25ld0RhdGEnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVwZGF0ZShkYXRhKSB7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eTtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5kdDtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlIC52YWx1ZScpLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChcbiAgICAgIGRhdGEuY3VycmVudC50ZW1wXG4gICAgKTtcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcud2VhdGhlci1jb25kaXRpb24gaW1nJ1xuICAgICkuc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbmRpdGlvbiAuZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9XG4gICAgICBTdHJpbmdVdGlscy5jYXBpdGFsaXplKGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLmRhdGFBcnIuZm9yRWFjaCgoZGF0dW0pID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuZGF0YS4ke2RhdHVtLnZhck5hbWV9IC52YWx1ZWApLnRleHRDb250ZW50ID1cbiAgICAgICAgZGF0YS5jdXJyZW50W2RhdHVtLnZhck5hbWVdICsgZGF0dW0udW5pdDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZUN1cnJlbnRXZWF0aGVyRWxlbWVudCgpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaDInLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2NpdHktbmFtZScsXG4gICAgICB9LFxuICAgICAgJ0NpdHknXG4gICAgKTtcbiAgICBjb25zdCBsb2NhbERhdGUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2RhdGUnLFxuICAgICAgfSxcbiAgICAgICctLSdcbiAgICApO1xuXG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICBzcmM6ICdodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDFuQDJ4LnBuZycsXG4gICAgICB3aWR0aDogJzk2cHgnLFxuICAgICAgaGVpZ2h0OiAnOTZweCcsXG4gICAgfSk7XG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdkZXNjcmlwdGlvbicsXG4gICAgICB9LFxuICAgICAgJy0tJ1xuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICd3ZWF0aGVyLWNvbmRpdGlvbicsXG4gICAgICB9LFxuICAgICAgd2VhdGhlckljb24sXG4gICAgICB3ZWF0aGVyRGVzY3JpcHRpb25cbiAgICApO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmVWYWx1ZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAndmFsdWUnLFxuICAgICAgfSxcbiAgICAgICctLSdcbiAgICApOyAvLyBGSVhNRSBlbGVtZW50IG1pZ2h0IG5vdCBiZSBuZWVkZWRcbiAgICBjb25zdCBzcGFuU21hbGwgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3NtYWxsJyxcbiAgICAgIH0sXG4gICAgICAnwrBDJ1xuICAgICk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3RlbXBlcmF0dXJlJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wZXJhdHVyZVZhbHVlLFxuICAgICAgc3BhblNtYWxsXG4gICAgKTtcblxuICAgIGNvbnN0IGNpdHlJbmZvID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2NpdHktaW5mbycsXG4gICAgICB9LFxuICAgICAgY2l0eU5hbWUsXG4gICAgICBsb2NhbERhdGUsXG4gICAgICB0ZW1wZXJhdHVyZVxuICAgICk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YUNvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAnZGF0YS1jb250YWluZXInLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdjdXJyZW50LXdlYXRoZXInLFxuICAgICAgfSxcbiAgICAgIGNpdHlJbmZvLFxuICAgICAgd2VhdGhlckNvbmRpdGlvbixcbiAgICAgIHdlYXRoZXJEYXRhQ29udGFpbmVyXG4gICAgKTtcbiAgfVxuXG4gIGFkZEluZm8ob2JqKSB7XG4gICAgY29uc3QgdmFsdWUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3ZhbHVlJyxcbiAgICAgIH0sXG4gICAgICAnLS0nXG4gICAgKTtcbiAgICBjb25zdCBkZXNjID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdkYXRhLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIG9iai5uYW1lXG4gICAgKTtcbiAgICBjb25zdCBpbWFnZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgIGFsdDogb2JqLm5hbWUsXG4gICAgICBzcmM6IG9iai5pY29uLFxuICAgIH0pO1xuICAgIGNvbnN0IGxlZ2VuZCA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdkZXNjcmlwdGlvbicsXG4gICAgICB9LFxuICAgICAgaW1hZ2UsXG4gICAgICBkZXNjXG4gICAgKTtcblxuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YS1jb250YWluZXInKS5hcHBlbmQoXG4gICAgICBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBgZGF0YSAke29iai52YXJOYW1lfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZCxcbiAgICAgICAgdmFsdWVcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRm9yZWNhc3QgZnJvbSAnLi9Gb3JlY2FzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5Rm9yZWNhc3QgZXh0ZW5kcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGRhdGFUb0Rpc3BsYXkpIHtcbiAgICBzdXBlcignRGFpbHknLCA4LCBkYXRhVG9EaXNwbGF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vRm9yZWNhc3RDYXJkL0ZvcmVjYXN0Q2FyZCc7XG5pbXBvcnQgcHViU3ViIGZyb20gJy4uLy4uL3B1YlN1Yic7XG5pbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRE9NVXRpbHMnO1xuXG4vLyBUT0RPIHNwbGl0IHZpZXdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIG51bWJlck9mQ2FyZHMsIGRhdGFUb0Rpc3BsYXkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5udW1iZXJPZkNhcmRzID0gbnVtYmVyT2ZDYXJkcztcbiAgICB0aGlzLmNhcmRzID0gW107XG4gICAgdGhpcy5kYXRhVG9EaXNwbGF5ID0gZGF0YVRvRGlzcGxheTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdlbmVyYXRlRm9yZWNhc3RFbGVtZW50KHRpdGxlKTtcbiAgICBwdWJTdWIuc3Vic2NyaWJlKCduZXdEYXRhJywgdGhpcy51cGRhdGVDYXJkcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8vIFRPRE8gcmV2aWV3XG4gIGdlbmVyYXRlRm9yZWNhc3RFbGVtZW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkNhcmRzOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2FyZHNbaV0gPSBuZXcgQ2FyZCgnVGl0bGUnLCB0aGlzLnRpdGxlKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kYXRhVG9EaXNwbGF5Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuY2FyZHNbaV0uYWRkSW5mbyh0aGlzLmRhdGFUb0Rpc3BsYXlbal0pOyAvLyBGSVhNRSB0aGlzIHByb2JhYmx5IGRvZXMgbm90IGJlbG9uZyBoZXJlXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnY2FyZC1jb250YWluZXInLFxuICAgICAgfSxcbiAgICAgIC4uLnRoaXMuY2FyZHMubWFwKChjYXJkKSA9PiBjYXJkLmVsZW1lbnQpXG4gICAgKTtcbiAgICByZXR1cm4gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ZvcmVjYXN0JyxcbiAgICAgICAgJ2RhdGEtdHlwZSc6IHRoaXMudGl0bGUudG9Mb3dlckNhc2UoKSxcbiAgICAgIH0sXG4gICAgICBjYXJkQ29udGFpbmVyXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUNhcmRzKGRhdGEpIHtcbiAgICBjb25zdCB0aGlzRGF0YSA9IGRhdGFbdGhpcy50aXRsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICBjYXJkLnVwZGF0ZSh0aGlzRGF0YVtpbmRleF0sIHRoaXMuZGF0YVRvRGlzcGxheSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBGb3JlY2FzdCBmcm9tICcuL0ZvcmVjYXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91cmx5Rm9yZWNhc3QgZXh0ZW5kcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGRhdGFUb0Rpc3BsYXkpIHtcbiAgICBzdXBlcignSG91cmx5JywgNDgsIGRhdGFUb0Rpc3BsYXkpO1xuICB9XG59XG4iLCJpbXBvcnQgU3RyaW5nVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvU3RyaW5nVXRpbHMnO1xuaW1wb3J0IERPTVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL0RPTVV0aWxzJztcblxuLy8gVE9ETyByZXZpZXdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0Q2FyZCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdlbmVyYXRlRm9yZWNhc3RDYXJkRWxlbWVudCgpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgdGhpcy53ZWF0aGVyQ29uZGl0aW9uSW1nID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLndlYXRoZXItY29uZGl0aW9uIGltZydcbiAgICApO1xuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbkRlc2MgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcud2VhdGhlci1jb25kaXRpb24gcCdcbiAgICApO1xuICB9XG5cbiAgZ2VuZXJhdGVGb3JlY2FzdENhcmRFbGVtZW50KCkge1xuICAgIGNvbnN0IGgzID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdoMycsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAndGl0bGUnLCAvLyBUT0RPIG5hbWluZ1xuICAgICAgfSxcbiAgICAgIHRoaXMudGl0bGVcbiAgICApO1xuICAgIGNvbnN0IGRhdGFDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzczogJ2RhdGEtY29udGFpbmVyJywgLy8gVE9ETyBuYW1pbmdcbiAgICB9KTtcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wMW5AMngucG5nJyxcbiAgICAgIHdpZHRoOiAnNjRweCcsXG4gICAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICB9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdwJywge30sICctLScpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlRWxlbWVudCA9IHRoaXMuZ2VuZXJhdGVUZW1wZXJhdHVyZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnd2VhdGhlci1jb25kaXRpb24nLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXJJY29uLFxuICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLFxuICAgICAgdGVtcGVyYXR1cmVFbGVtZW50XG4gICAgKTtcbiAgICBjb25zdCBjYXJkID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2NhcmQnLFxuICAgICAgfSxcbiAgICAgIGgzLFxuICAgICAgd2VhdGhlckNvbmRpdGlvbixcbiAgICAgIGRhdGFDb250YWluZXJcbiAgICApO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlVGVtcGVyYXR1cmVEaXNwbGF5KHR5cGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAndmFsdWUnLFxuICAgICAgfSxcbiAgICAgICctLSdcbiAgICApO1xuICAgIGNvbnN0IHVuaXQgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3VuaXQnLFxuICAgICAgfSxcbiAgICAgICfCsEMnXG4gICAgKTtcbiAgICByZXR1cm4gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6IGAke3R5cGV9LXRlbXBlcmF0dXJlYCxcbiAgICAgIH0sXG4gICAgICB2YWx1ZSxcbiAgICAgIHVuaXRcbiAgICApO1xuICB9XG5cbiAgZ2VuZXJhdGVUZW1wZXJhdHVyZUVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ0RhaWx5Jykge1xuICAgICAgcmV0dXJuIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6ICd0ZW1wZXJhdHVyZScsXG4gICAgICAgIH0sXG4gICAgICAgIEZvcmVjYXN0Q2FyZC5nZW5lcmF0ZVRlbXBlcmF0dXJlRGlzcGxheSgnbWluJyksXG4gICAgICAgIEZvcmVjYXN0Q2FyZC5nZW5lcmF0ZVRlbXBlcmF0dXJlRGlzcGxheSgnbWF4JylcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdIb3VybHknKSB7XG4gICAgICByZXR1cm4gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgRm9yZWNhc3RDYXJkLmdlbmVyYXRlVGVtcGVyYXR1cmVEaXNwbGF5KCdzaW5nbGUnKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhZGRJbmZvKGluZm9PYmopIHtcbiAgICBjb25zdCB2YWx1ZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAncCcsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAndmFsdWUnLFxuICAgICAgfSxcbiAgICAgICctLSdcbiAgICApO1xuICAgIGNvbnN0IGRhdGFOYW1lID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdwJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdkYXRhLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIGluZm9PYmoubmFtZVxuICAgICk7XG4gICAgY29uc3QgbGVnZW5kID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIH0sXG4gICAgICBkYXRhTmFtZVxuICAgICk7XG4gICAgY29uc3QgY29udGFpbmVyID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogYGRhdGEgJHtpbmZvT2JqLnZhck5hbWV9YCxcbiAgICAgIH0sXG4gICAgICBsZWdlbmQsXG4gICAgICB2YWx1ZVxuICAgICk7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICB1cGRhdGUoZGF0YSwgZGF0YUFycikge1xuICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLmR0O1xuICAgIHRoaXMud2VhdGhlckNvbmRpdGlvbkltZy5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgdGhpcy53ZWF0aGVyQ29uZGl0aW9uRGVzYy50ZXh0Q29udGVudCA9IFN0cmluZ1V0aWxzLmNhcGl0YWxpemUoXG4gICAgICBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICApO1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdEYWlseScpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWluLXRlbXBlcmF0dXJlIC52YWx1ZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgTWF0aC5yb3VuZChkYXRhLnRlbXAubWluKTtcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LXRlbXBlcmF0dXJlIC52YWx1ZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgTWF0aC5yb3VuZChkYXRhLnRlbXAubWF4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ0hvdXJseScpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXRlbXBlcmF0dXJlIC52YWx1ZScpLnRleHRDb250ZW50ID1cbiAgICAgICAgTWF0aC5yb3VuZChkYXRhLnRlbXApO1xuICAgIH1cbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdHVtKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmRhdGEuJHtkYXR1bS52YXJOYW1lfSAudmFsdWVgKS50ZXh0Q29udGVudCA9XG4gICAgICAgIGRhdGFbZGF0dW0udmFyTmFtZV0gKyBkYXR1bS51bml0O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRGFpbHlGb3JlY2FzdCBmcm9tICcuLi9Gb3JlY2FzdC9EYWlseUZvcmVjYXN0JztcbmltcG9ydCBIb3VybHlGb3JlY2FzdCBmcm9tICcuLi9Gb3JlY2FzdC9Ib3VybHlGb3JlY2FzdCc7XG5pbXBvcnQgZGF0YVNldCBmcm9tICcuLi8uLi9kYXRhJztcbmltcG9ydCBET01VdGlscyBmcm9tICcuLi8uLi91dGlscy9ET01VdGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0Q29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYWlseUZvcmVjYXN0ID0gbmV3IERhaWx5Rm9yZWNhc3QoW1xuICAgICAgZGF0YVNldC5zdW5yaXNlLFxuICAgICAgZGF0YVNldC5zdW5zZXQsXG4gICAgICBkYXRhU2V0LmNsb3VkaW5lc3MsXG4gICAgICBkYXRhU2V0LnJhaW5Qcm9iYWJpbGl0eSxcbiAgICBdKTtcbiAgICB0aGlzLmhvdXJseUZvcmVjYXN0ID0gbmV3IEhvdXJseUZvcmVjYXN0KFtcbiAgICAgIGRhdGFTZXQucmFpblByb2JhYmlsaXR5LFxuICAgICAgZGF0YVNldC5jbG91ZGluZXNzLFxuICAgICAgZGF0YVNldC5odW1pZGl0eSxcbiAgICAgIGRhdGFTZXQudXZJbmRleCxcbiAgICBdKTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdlbmVyYXRlRm9yZWNhc3RDb250YWluZXJFbGVtZW50KCk7XG4gIH1cblxuICBnZW5lcmF0ZUZvcmVjYXN0Q29udGFpbmVyRWxlbWVudCgpIHtcbiAgICBjb25zdCBkYWlseVN3aXRjaEJ1dHRvbiA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzOiAnc3dpdGNoLXRhYi1idG4nLFxuICAgICAgICAnZGF0YS1mb3JlY2FzdCc6ICdkYWlseScsXG4gICAgICB9LFxuICAgICAgJ0RhaWx5J1xuICAgICk7XG5cbiAgICBkYWlseVN3aXRjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICB0aGlzLnN3aXRjaFRhYih0aGlzLmRhaWx5Rm9yZWNhc3QuZWxlbWVudClcbiAgICApO1xuXG4gICAgY29uc3QgaG91cmx5U3dpdGNoQnV0dG9uID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3M6ICdzd2l0Y2gtdGFiLWJ0biBhY3RpdmUnLFxuICAgICAgICAnZGF0YS1mb3JlY2FzdCc6ICdob3VybHknLFxuICAgICAgfSxcbiAgICAgICdIb3VybHknXG4gICAgKTtcblxuICAgIGhvdXJseVN3aXRjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICB0aGlzLnN3aXRjaFRhYih0aGlzLmhvdXJseUZvcmVjYXN0LmVsZW1lbnQpXG4gICAgKTtcblxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnYnV0dG9ucy1jb250YWluZXInLFxuICAgICAgfSxcbiAgICAgIGRhaWx5U3dpdGNoQnV0dG9uLFxuICAgICAgaG91cmx5U3dpdGNoQnV0dG9uXG4gICAgKTtcblxuICAgIHJldHVybiBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnZm9yZWNhc3QtY29udGFpbmVyJyxcbiAgICAgIH0sXG4gICAgICBidXR0b25zQ29udGFpbmVyLFxuICAgICAgdGhpcy5ob3VybHlGb3JlY2FzdC5lbGVtZW50XG4gICAgKTtcbiAgfVxuXG4gIHN3aXRjaFRhYihuZXdUYWIpIHtcbiAgICBjb25zdCBhY3RpdmVGb3JlY2FzdCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICBpZiAoYWN0aXZlRm9yZWNhc3QgPT09IG5ld1RhYikgcmV0dXJuO1xuICAgIGNvbnN0IGZvcmVjYXN0VHlwZSA9IGFjdGl2ZUZvcmVjYXN0LmRhdGFzZXQudHlwZTtcbiAgICB0aGlzLmVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAuc3dpdGNoLXRhYi1idG5bZGF0YS1mb3JlY2FzdD0ke2ZvcmVjYXN0VHlwZX1gKVxuICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGNvbnN0IG5ld0ZvcmVjYXN0VHlwZSA9IG5ld1RhYi5kYXRhc2V0LnR5cGU7XG4gICAgdGhpcy5lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihgLnN3aXRjaC10YWItYnRuW2RhdGEtZm9yZWNhc3Q9JHtuZXdGb3JlY2FzdFR5cGV9YClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQoYWN0aXZlRm9yZWNhc3QpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQobmV3VGFiKTtcbiAgfVxufVxuIiwiaW1wb3J0IERPTVV0aWxzIGZyb20gJy4uLy4uL3V0aWxzL0RPTVV0aWxzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vU2VhcmNoQmFyL1NlYXJjaEJhcic7XG5pbXBvcnQgTE9HT19JTUcgZnJvbSAnLi4vLi4vaW1nL2xvZ28uc3ZnJztcblxuLy8gVE9ETyBzcGxpdCB2aWV3XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlYXJjaEJhciA9IG5ldyBTZWFyY2hCYXIoKTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdlbmVyYXRlSGVhZGVyRWxlbWVudCgpO1xuICB9XG5cbiAgZ2VuZXJhdGVIZWFkZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IGgxID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdoMScsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnbG9nby1kZXNrdG9wJyxcbiAgICAgIH0sXG4gICAgICAnd2VhdGhlciBhcHAnXG4gICAgKTtcbiAgICBjb25zdCBsb2dvID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgY2xhc3M6ICdsb2dvLW1vYmlsZScsXG4gICAgICB3aWR0aDogJzM2cHgnLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBzcmM6IExPR09fSU1HLFxuICAgICAgYWx0OiAnd2VhdGhlciBhcHAnLFxuICAgIH0pO1xuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnbG9nby1jb250YWluZXInLFxuICAgICAgfSxcbiAgICAgIGxvZ28sXG4gICAgICBoMVxuICAgICk7XG4gICAgcmV0dXJuIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnaGVhZGVyJyxcbiAgICAgIHt9LFxuICAgICAgbG9nb0NvbnRhaW5lcixcbiAgICAgIHRoaXMuc2VhcmNoQmFyLmVsZW1lbnRcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRE9NVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBMb2FkZXIuZ2VuZXJhdGVMb2FkZXJFbGVtZW50KCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlTG9hZGVyRWxlbWVudCgpIHtcbiAgICBjb25zdCBjbG91ZFBpZWNlcyA9IG5ldyBBcnJheSgzKS5maWxsKCkubWFwKCgpID0+XG4gICAgICBET01VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAnY2xvdWQnLFxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IGNsb3VkQ29udGFpbmVyID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2Nsb3VkLWNvbnRhaW5lcicsXG4gICAgICB9LFxuICAgICAgLi4uY2xvdWRQaWVjZXNcbiAgICApO1xuICAgIHJldHVybiBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnb3ZlcmxheScsXG4gICAgICB9LFxuICAgICAgY2xvdWRDb250YWluZXJcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgQXBpIGZyb20gJy4uLy4uL0FwaSc7XG5pbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvRE9NVXRpbHMnO1xuaW1wb3J0IFNFQVJDSF9JQ09OIGZyb20gJy4uLy4uL2ljb25zL3NlYXJjaC5zdmcnO1xuXG4vLyBUT0RPIHNwbGl0IHZpZXdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IFNlYXJjaEJhci5nZW5lcmF0ZVNlYXJjaEJhckVsZW1lbnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVNlYXJjaEJhckVsZW1lbnQoKSB7XG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgIHNyYzogU0VBUkNIX0lDT04sXG4gICAgICBjbGFzczogJ2ljb24nLFxuICAgIH0pO1xuICAgIGNvbnN0IHNlYXJjaExhYmVsID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdsYWJlbCcsXG4gICAgICB7XG4gICAgICAgIGZvcjogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICB9LFxuICAgICAgc2VhcmNoSWNvblxuICAgICk7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgIGlkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ2l0eSBuYW1lJyxcbiAgICB9KTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnc2VhcmNoLWJ1dHRvbicsXG4gICAgICB9LFxuICAgICAgJ0dvISdcbiAgICApO1xuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZm9ybScsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiAnc2VhcmNoLWJhcicsXG4gICAgICB9LFxuICAgICAgc2VhcmNoTGFiZWwsXG4gICAgICBzZWFyY2hJbnB1dCxcbiAgICAgIHNlYXJjaEJ1dHRvblxuICAgICk7XG4gICAgc2VhcmNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIXNlYXJjaElucHV0LnZhbHVlKSByZXR1cm47XG4gICAgICBhd2FpdCBBcGkuZ2V0V2VhdGhlckJ5TG9jYXRpb25OYW1lKHNlYXJjaElucHV0LnZhbHVlKTtcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VhcmNoQ29udGFpbmVyO1xuICB9XG59XG4iLCJpbXBvcnQgVEhFUk1PTUVURVIgZnJvbSAnLi9pY29ucy93ZWF0aGVyL3RoZXJtb21ldGVyLnN2Zyc7XG5pbXBvcnQgSFVNSURJVFkgZnJvbSAnLi9pY29ucy93ZWF0aGVyL2h1bWlkaXR5LnN2Zyc7XG5pbXBvcnQgV0lORF9TUEVFRCBmcm9tICcuL2ljb25zL3dlYXRoZXIvd2luZC1zcGVlZC5zdmcnO1xuaW1wb3J0IENMT1VESU5FU1MgZnJvbSAnLi9pY29ucy93ZWF0aGVyL2Nsb3VkaW5lc3Muc3ZnJztcbmltcG9ydCBTVU5SSVNFIGZyb20gJy4vaWNvbnMvd2VhdGhlci9zdW5yaXNlLnN2Zyc7XG5pbXBvcnQgU1VOU0VUIGZyb20gJy4vaWNvbnMvd2VhdGhlci9zdW5zZXQuc3ZnJztcbmltcG9ydCBVVl9JTkRFWCBmcm9tICcuL2ljb25zL3dlYXRoZXIvdXYtaW5kZXguc3ZnJztcbmltcG9ydCBWSVNJQklMSVRZIGZyb20gJy4vaWNvbnMvd2VhdGhlci92aXNpYmlsaXR5LnN2Zyc7XG5pbXBvcnQgUkFJTl9QUk9CQUJJTElUWSBmcm9tICcuL2ljb25zL3dlYXRoZXIvcmFpbi1wcm9iYWJpbGl0eS5zdmcnO1xuXG5mdW5jdGlvbiBmYWN0b3J5KG5hbWUsIGljb24sIHZhck5hbWUsIHVuaXQpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGljb24sXG4gICAgdmFyTmFtZSxcbiAgICB1bml0LFxuICB9O1xufVxuXG5jb25zdCBkYXRhU2V0ID0ge1xuICB0ZW1wZXJhdHVyZTogZmFjdG9yeSgnVGVtcGVyYXR1cmUnLCBUSEVSTU9NRVRFUiwgJ3RlbXAnLCAnwrBDJyksXG4gIHJhaW5Qcm9iYWJpbGl0eTogZmFjdG9yeSgnUmFpbiBwcm9iLicsIFJBSU5fUFJPQkFCSUxJVFksICdwb3AnLCAnJScpLFxuICBmZWVsc0xpa2U6IGZhY3RvcnkoJ0ZlZWxzIGxpa2UnLCBUSEVSTU9NRVRFUiwgJ2ZlZWxzX2xpa2UnLCAnwrBDJyksXG4gIHdpbmRTcGVlZDogZmFjdG9yeSgnV2luZCBzcGVlZCcsIFdJTkRfU1BFRUQsICd3aW5kX3NwZWVkJywgJyBtL3MnKSxcbiAgY2xvdWRpbmVzczogZmFjdG9yeSgnQ2xvdWRpbmVzcycsIENMT1VESU5FU1MsICdjbG91ZHMnLCAnJScpLFxuICBodW1pZGl0eTogZmFjdG9yeSgnSHVtaWRpdHknLCBIVU1JRElUWSwgJ2h1bWlkaXR5JywgJyUnKSxcbiAgc3VucmlzZTogZmFjdG9yeSgnU3VucmlzZScsIFNVTlJJU0UsICdzdW5yaXNlJywgJycpLFxuICBzdW5zZXQ6IGZhY3RvcnkoJ1N1bnNldCcsIFNVTlNFVCwgJ3N1bnNldCcsICcnKSxcbiAgdXZJbmRleDogZmFjdG9yeSgnVVYgaW5kZXgnLCBVVl9JTkRFWCwgJ3V2aScsICcnKSxcbiAgdmlzaWJpbGl0eTogZmFjdG9yeSgnVmlzaWJpbGl0eScsIFZJU0lCSUxJVFksICd2aXNpYmlsaXR5JywgJyBtJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhU2V0O1xuIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmluaXQoKTtcbiIsImltcG9ydCBET01VdGlscyBmcm9tICcuLi91dGlscy9ET01VdGlscyc7XG5pbXBvcnQgQ3VycmVudFdlYXRoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DdXJyZW50V2VhdGhlci9DdXJyZW50V2VhdGhlcic7XG5pbXBvcnQgRm9yZWNhc3RDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JlY2FzdENvbnRhaW5lci9Gb3JlY2FzdENvbnRhaW5lcic7XG5cbi8vIFRPRE8gc3BsaXQgdmlld1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZm9yZWNhc3RDb250YWluZXIgPSBuZXcgRm9yZWNhc3RDb250YWluZXIoKTtcbiAgICB0aGlzLmN1cnJlbnRXZWF0aGVyID0gbmV3IEN1cnJlbnRXZWF0aGVyKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5nZW5lcmF0ZU1haW5FbGVtZW50KCk7XG4gIH1cblxuICBnZW5lcmF0ZU1haW5FbGVtZW50KCkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhQ29udGFpbmVyID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogJ3dlYXRoZXItZGF0YS1jb250YWluZXInLFxuICAgICAgfSxcbiAgICAgIHRoaXMuY3VycmVudFdlYXRoZXIuZWxlbWVudCxcbiAgICAgIHRoaXMuZm9yZWNhc3RDb250YWluZXIuZWxlbWVudFxuICAgICk7XG4gICAgcmV0dXJuIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ21haW4nLCB7fSwgd2VhdGhlckRhdGFDb250YWluZXIpO1xuICB9XG59XG4iLCJjbGFzcyBQdWJTdWIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICB9XG5cbiAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgZikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmKTtcbiAgfVxuXG4gIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBmKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5jbHVkZXMoZikpXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZSh0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZikpO1xuICB9XG59XG5cbmNvbnN0IHB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NVXRpbHMge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChlbGVtZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAodHlwZW9mIHByb3BzID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBub2RlLmFwcGVuZChjaGlsZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVVdGlscyB7XG4gIHN0YXRpYyBnZXREYXRlT3B0aW9ucyh0aW1lWm9uZSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYWlseToge1xuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgfSxcbiAgICAgIG1pbnV0ZWx5OiB7XG4gICAgICAgIHRpbWVab25lLFxuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgfSxcbiAgICAgIGhvdXJseToge1xuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIH0sXG4gICAgICBjdXJyZW50OiB7XG4gICAgICAgIHRpbWVab25lLFxuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgfSxcbiAgICAgIHN1bnNldDoge1xuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREYXRlU3RyaW5nKGRhdGUsIG9wdGlvbnMsIGxvY2FsZSA9ICdlbi1VSycpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgc3RhdGljIGNhcGl0YWxpemUoc3RyKSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSByZXR1cm4gc3RyO1xuICAgIHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfVxufVxuIiwiaW1wb3J0IERhdGVVdGlscyBmcm9tICcuL0RhdGVVdGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJVdGlscyB7XG4gIGNvbnN0cnVjdG9yKHdlYXRoZXJEYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gd2VhdGhlckRhdGE7XG4gICAgdGhpcy5kYXRlT3B0aW9ucyA9IERhdGVVdGlscy5nZXREYXRlT3B0aW9ucyh0aGlzLmRhdGEudGltZXpvbmUpO1xuICB9XG5cbiAgbm9ybWFsaXplT2JqZWN0KG9iaiwgdHlwZSkge1xuICAgIGNvbnN0IHsgZ2V0RGF0ZVN0cmluZyB9ID0gRGF0ZVV0aWxzO1xuICAgIGNvbnN0IHsgcmVwbGFjZUlmTm90VW5kZWZpbmVkIH0gPSBXZWF0aGVyVXRpbHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9iaixcbiAgICAgIGR0OiBnZXREYXRlU3RyaW5nKG9iai5kdCwgdGhpcy5kYXRlT3B0aW9uc1t0eXBlXSksXG4gICAgICBwb3A6IHJlcGxhY2VJZk5vdFVuZGVmaW5lZChvYmoucG9wLCBNYXRoLnJvdW5kKG9iai5wb3AgKiAxMDAwMCkgLyAxMDApLFxuICAgICAgc3VucmlzZTogcmVwbGFjZUlmTm90VW5kZWZpbmVkKFxuICAgICAgICBvYmouc3VucmlzZSxcbiAgICAgICAgZ2V0RGF0ZVN0cmluZyhvYmouc3VucmlzZSwgdGhpcy5kYXRlT3B0aW9ucy5zdW5zZXQpXG4gICAgICApLFxuICAgICAgc3Vuc2V0OiByZXBsYWNlSWZOb3RVbmRlZmluZWQoXG4gICAgICAgIG9iai5zdW5zZXQsXG4gICAgICAgIGdldERhdGVTdHJpbmcob2JqLnN1bnNldCwgdGhpcy5kYXRlT3B0aW9ucy5zdW5zZXQpXG4gICAgICApLFxuICAgICAgbW9vbnJpc2U6IHJlcGxhY2VJZk5vdFVuZGVmaW5lZChcbiAgICAgICAgb2JqLm1vb25yaXNlLFxuICAgICAgICBnZXREYXRlU3RyaW5nKG9iai5tb29ucmlzZSwgdGhpcy5kYXRlT3B0aW9ucy5zdW5zZXQpXG4gICAgICApLFxuICAgICAgbW9vbnNldDogcmVwbGFjZUlmTm90VW5kZWZpbmVkKFxuICAgICAgICBvYmoubW9vbnNldCxcbiAgICAgICAgZ2V0RGF0ZVN0cmluZyhvYmoubW9vbnNldCwgdGhpcy5kYXRlT3B0aW9ucy5zdW5zZXQpXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZUlmTm90VW5kZWZpbmVkKHZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgfVxuXG4gIGdldE5vcm1hbGl6ZWREYXRhKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIGN1cnJlbnQ6IHRoaXMubm9ybWFsaXplT2JqZWN0KGRhdGEuY3VycmVudCwgJ2N1cnJlbnQnKSxcbiAgICAgIGRhaWx5OiBkYXRhLmRhaWx5Lm1hcCgob2JqKSA9PiB0aGlzLm5vcm1hbGl6ZU9iamVjdChvYmosICdkYWlseScpKSxcbiAgICAgIGhvdXJseTogZGF0YS5ob3VybHkubWFwKChvYmopID0+IHRoaXMubm9ybWFsaXplT2JqZWN0KG9iaiwgJ2hvdXJseScpKSxcbiAgICAgIG1pbnV0ZWx5OiBkYXRhLm1pbnV0ZWx5Lm1hcCgob2JqKSA9PlxuICAgICAgICB0aGlzLm5vcm1hbGl6ZU9iamVjdChvYmosICdtaW51dGVseScpXG4gICAgICApLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==