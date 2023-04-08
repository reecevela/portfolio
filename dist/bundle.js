/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/styles.css":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/styles.css ***!
  \********************************************************************************************************************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blend-color: #484668;\n  --accent-color: #ffddcc;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  line-height: 1.6;\n  background-color: #fff;\n  color: #222;\n}\n\nnav {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  background-color: #fff;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.nav-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1200px;\n}\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #222;\n  text-decoration: none;\n}\n\n.nav-menu {\n  display: flex;\n  list-style: none;\n}\n\n.nav-menu li {\n  margin-left: 1.5rem;\n}\n\n.nav-menu a {\n  color: #222;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.nav-menu a:hover {\n  color: var(--accent-color);\n}\n\n.hamburger {\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 24px;\n  height: 18px;\n}\n\n.hamburger span {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #222;\n  transition: all 0.3s;\n}\n\n.nav-menu.show {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n\n.nav-menu.show li {\n  margin: 1rem 0;\n}\n\n.hero {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  line-height: 4em;\n}\n\n.blend {\n  mix-blend-mode: exclusion;\n  color: var(--blend-color);\n}\n\n.circle-image-wrapper {\n  height: clamp(200px, 40vw, 320px);\n  width: clamp(200px, 40vw, 320px);\n  border-radius: 100%;\n  background-color: var(--blend-color);\n  margin-bottom: 1rem;\n  margin-top: 2rem;\n  overflow: hidden;\n  border: 4px solid white;\n}\n\n.circle-image-wrapper img {\n  width: 100%;\n}\n\n.hero h1 {\n  font-size: 5rem;\n  margin-bottom: 1rem;\n}\n\n.hero h2 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.chevron {\n  animation: moveUpDown 2s ease-in-out infinite;\n}\n\n.about {\n  padding: 2rem;\n  opacity: 0;\n}\n\n.about.visible {\n  animation: slideInLeft 1s ease-out forwards;\n}\n\n.about-content {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.about-content h2 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.about-content p {\n  font-size: 1.1rem;\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n\n.projects {\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column nowrap;\n  width: 100%;\n  margin: auto;\n}\n\n.projects h2, .projects h3 {\n  width: 100%;\n  max-width: 1000px;\n}\n\n.featured {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  flex-flow: row-reverse wrap;\n}\n\n.featured-content {\n  display: flex;\n  flex-flow: column wrap;\n  width: clamp(200px, 80vw, 600px);\n  margin-bottom: 2rem;\n}\n\n.description {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  margin-right: 1rem;\n}\n\n.tech-used {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 0.5rem;\n}\n\n.tech {\n  white-space: nowrap;\n  background-color: #484668;\n  border-radius: 12px;\n  color: white;\n  padding: 8px 16px;\n}\n\n.tech-tag {\n  background-color: #ccc;\n  border-radius: 5px;\n  padding: 0.25rem 0.5rem;\n}\n\n.featured-project-img-wrapper {\n  width: clamp(200px, 80vw, 400px);\n}\n\n.featured-project-img-wrapper img {\n  width: 100%;\n  height: auto;\n}\n\n.other-projects {\n  margin: 1em;\n  margin-left: -1em;\n  padding-bottom: 1em;\n  display: flex;\n  overflow-x: scroll;\n  gap: 1rem;\n  max-width: clamp(200px, 80vw, 1000px);\n  /* Firefox scrollbar support */\n  scrollbar-width: thin;\n  scrollbar-color: #484668 #f0f0f0;\n}\n\n/* Webkit-based browser scrollbar styling */\n.other-projects::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.other-projects::-webkit-scrollbar-track {\n  background-color: #f0f0f0;\n  border-radius: 5px;\n}\n\n.other-projects::-webkit-scrollbar-thumb {\n  background-color: #484668;\n  border-radius: 5px;\n}\n\n.other-projects::-webkit-scrollbar-thumb:hover {\n  background-color: #3c3a62;\n}\n\n.project-card {\n  background-color: #f5f5f5;\n  border-radius: 5px;\n  padding: 1rem;\n  width: 250px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.project-card img {\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  margin-bottom: 1rem;\n}\n\n.project-card h4 {\n  margin-bottom: 1rem;\n}\n\n.project-card .links {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n}\n\n.project-card .links a {\n  padding: 0.25rem 0.5rem;\n  background-color: #484668;\n  border-radius: 5px;\n  color: white;\n  text-decoration: none;\n  text-align: center;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n}\n\n.skills {\n  position: relative;\n  overflow: hidden;\n}\n\n.skills-parallax {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 4rem 0;\n}\n\n.skills-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  padding: 2rem;\n  position: relative;\n  z-index: 1;\n  opacity: 0;\n}\n\n.skills-container.visible {\n  animation: fadeIn 1.3s ease-out forwards;\n}\n\n.skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.skill i {\n  font-size: 3rem;\n  margin-bottom: 0.5rem;\n}\n\n.skill p {\n  font-size: 1.1rem;\n  margin: 0;\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n}\n\n.back-to-top {\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: #73d4fe;\n  color: #ffffff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 4px;\n  z-index: 100;\n}\n\n.back-to-top.visible {\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .nav-menu {\n    display: none;\n  }\n  .hamburger {\n    display: flex;\n  }\n  .skills-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@keyframes slideInLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes moveUpDown {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --blend-color: #484668;\r\n    --accent-color: #ffddcc;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\r\n    line-height: 1.6;\r\n    background-color: #fff;\r\n    color: #222;\r\n}\r\n\r\nnav {\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    background-color: #fff;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n} \r\n\r\n.nav-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    max-width: 1200px;\r\n}\r\n\r\n.logo {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n    color: #222;\r\n    text-decoration: none;\r\n}\r\n\r\n.nav-menu {\r\n    display: flex;\r\n    list-style: none;\r\n}\r\n\r\n.nav-menu li {\r\n    margin-left: 1.5rem;\r\n}\r\n\r\n.nav-menu a {\r\n    color: #222;\r\n    text-decoration: none;\r\n    transition: color 0.3s;\r\n}\r\n\r\n.nav-menu a:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\n.hamburger {\r\n    display: none;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 24px;\r\n    height: 18px;\r\n}\r\n\r\n.hamburger span {\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: #222;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.nav-menu.show {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n    z-index: 10;\r\n}\r\n\r\n.nav-menu.show li {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.hero {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 100vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: #fff;\r\n    line-height: 4em;\r\n}\r\n\r\n.blend {\r\n    mix-blend-mode: exclusion;\r\n    color: var(--blend-color);\r\n}\r\n\r\n.circle-image-wrapper {\r\n    height: clamp(200px, 40vw, 320px);\r\n    width: clamp(200px, 40vw, 320px);\r\n    border-radius: 100%;\r\n    background-color: var(--blend-color);\r\n    margin-bottom: 1rem;\r\n    margin-top: 2rem;\r\n    overflow: hidden;\r\n    border: 4px solid white;\r\n}\r\n\r\n.circle-image-wrapper img {\r\n    width: 100%;\r\n}\r\n  \r\n.hero h1 {\r\n    font-size: 5rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.hero h2 {\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.chevron {\r\n    animation: moveUpDown 2s ease-in-out infinite;\r\n}\r\n\r\n.about {\r\n    padding: 2rem;\r\n    opacity: 0;\r\n}\r\n\r\n.about.visible {\r\n    animation: slideInLeft 1s ease-out forwards;\r\n}\r\n  \r\n\r\n.about-content {\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.about-content h2 {\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.about-content p {\r\n    font-size: 1.1rem;\r\n    line-height: 1.5;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.projects {\r\n    padding: 2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-flow: column nowrap;\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.projects h2, .projects h3 {\r\n    width: 100%;\r\n    max-width: calc(1000px);\r\n}\r\n\r\n.featured {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: flex-end;\r\n    flex-flow: row-reverse wrap;\r\n}\r\n\r\n.featured-content {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    width: clamp(200px, 80vw, 600px);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.description {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.tech-used {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.tech {\r\n    white-space: nowrap;\r\n    background-color: #484668;\r\n    border-radius: 12px;\r\n    color: white;\r\n    padding: 8px 16px;\r\n}\r\n\r\n.tech-tag {\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n    padding: 0.25rem 0.5rem;\r\n}\r\n\r\n.featured-project-img-wrapper {\r\n    width: clamp(200px, 80vw, 400px);\r\n}\r\n\r\n.featured-project-img-wrapper img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.other-projects {\r\n    margin: 1em;\r\n    margin-left: -1em;\r\n    padding-bottom: 1em;\r\n    display: flex;\r\n    overflow-x: scroll;\r\n    gap: 1rem;\r\n    max-width: clamp(200px, 80vw, 1000px);\r\n    /* Firefox scrollbar support */\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #484668 #f0f0f0;\r\n}\r\n\r\n/* Webkit-based browser scrollbar styling */\r\n.other-projects::-webkit-scrollbar {\r\n    width: 8px;\r\n    height: 8px;\r\n}\r\n\r\n.other-projects::-webkit-scrollbar-track {\r\n    background-color: #f0f0f0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.other-projects::-webkit-scrollbar-thumb {\r\n    background-color: #484668;\r\n    border-radius: 5px;\r\n}\r\n\r\n.other-projects::-webkit-scrollbar-thumb:hover {\r\n    background-color: #3c3a62;\r\n}\r\n  \r\n.project-card {\r\n    background-color: #f5f5f5;\r\n    border-radius: 5px;\r\n    padding: 1rem;\r\n    width: 250px;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.project-card img {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 5px;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.project-card h4 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.project-card .links {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.project-card .links a {\r\n    padding: 0.25rem 0.5rem;\r\n    background-color: #484668;\r\n    border-radius: 5px;\r\n    color: white;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: center;\r\n}\r\n\r\n.skills {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.skills-parallax {\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 4rem 0;\r\n}\r\n\r\n.skills-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 1rem;\r\n    padding: 2rem;\r\n    position: relative;\r\n    z-index: 1;\r\n    opacity: 0;\r\n}\r\n\r\n.skills-container.visible {\r\n    animation: fadeIn 1.3s ease-out forwards\r\n}\r\n\r\n.skill {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.skill i {\r\n    font-size: 3rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.skill p {\r\n    font-size: 1.1rem;\r\n    margin: 0;\r\n}\r\n\r\n.contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2rem;\r\n}\r\n\r\n.back-to-top {\r\n    display: none;\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #73d4fe;\r\n    color: #ffffff;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    z-index: 100;\r\n}\r\n\r\n.back-to-top.visible {\r\n    display: block;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .nav-menu {\r\n        display: none;\r\n    }\r\n  \r\n    .hamburger {\r\n        display: flex;\r\n    }\r\n    .skills-container {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n}\r\n\r\n@keyframes slideInLeft {\r\n    from {\r\n        transform: translateX(-100%);\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        transform: translateX(0);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes moveUpDown {\r\n    0%, 100% {\r\n        transform: translateY(0);\r\n    }\r\n    50% {\r\n        transform: translateY(-10px);\r\n    }\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/images/aiitsupport-snip.png":
/*!*****************************************!*\
  !*** ./src/images/aiitsupport-snip.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/aiitsupport-snip.png");

/***/ }),

/***/ "./src/images/hero-bkg.jpg":
/*!*********************************!*\
  !*** ./src/images/hero-bkg.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/hero-bkg.jpg");

/***/ }),

/***/ "./src/images/repos/binary-search-tree.png":
/*!*************************************************!*\
  !*** ./src/images/repos/binary-search-tree.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/binary-search-tree.png");

/***/ }),

/***/ "./src/images/repos/shipping.png":
/*!***************************************!*\
  !*** ./src/images/repos/shipping.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/shipping.png");

/***/ }),

/***/ "./src/images/repos/social-media-dashboard.png":
/*!*****************************************************!*\
  !*** ./src/images/repos/social-media-dashboard.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/social-media-dashboard.png");

/***/ }),

/***/ "./src/images/repos/weather.png":
/*!**************************************!*\
  !*** ./src/images/repos/weather.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/weather.png");

/***/ }),

/***/ "./src/images/selfie-pic-paint.jpg":
/*!*****************************************!*\
  !*** ./src/images/selfie-pic-paint.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/selfie-pic-paint.jpg");

/***/ }),

/***/ "./src/images/skills-bkg.png":
/*!***********************************!*\
  !*** ./src/images/skills-bkg.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/skills-bkg.png");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./styles.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/******/ 				scriptUrl = document.currentScript.src;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_selfie_pic_paint_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/selfie-pic-paint.jpg */ "./src/images/selfie-pic-paint.jpg");
/* harmony import */ var _images_hero_bkg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hero-bkg.jpg */ "./src/images/hero-bkg.jpg");
/* harmony import */ var _images_skills_bkg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/skills-bkg.png */ "./src/images/skills-bkg.png");
/* harmony import */ var _images_aiitsupport_snip_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/aiitsupport-snip.png */ "./src/images/aiitsupport-snip.png");
/* harmony import */ var _images_repos_weather_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/repos/weather.png */ "./src/images/repos/weather.png");
/* harmony import */ var _images_repos_shipping_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/repos/shipping.png */ "./src/images/repos/shipping.png");
/* harmony import */ var _images_repos_social_media_dashboard_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/repos/social-media-dashboard.png */ "./src/images/repos/social-media-dashboard.png");
/* harmony import */ var _images_repos_binary_search_tree_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/repos/binary-search-tree.png */ "./src/images/repos/binary-search-tree.png");









document.addEventListener("DOMContentLoaded", function () {
  // navbar & hamburger section
  var hamburger = document.querySelector(".hamburger");
  var navMenu = document.querySelector(".nav-menu");
  var navLinks = document.querySelectorAll(".nav-menu a");
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var target = document.querySelector(event.target.getAttribute("href"));
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // background image because webpack can be difficult to fight with at times
  function setBackgroundImage(queryElement, image) {
    var element = document.querySelector(queryElement);
    element.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(".concat(image, ")");
  }
  setBackgroundImage('.hero', _images_hero_bkg_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);

  // Intersection observer & functionality
  var aboutSection = document.querySelector("#about");
  var skills = document.querySelector("#skills-container");
  var options = {
    root: null,
    rootMargin: "-30% 0px 0px 0px",
    threshold: 0.1 // Adjust this value to control when the animation starts (0 to 1)
  };

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);
  if (aboutSection) {
    observer.observe(aboutSection);
  }
  if (skills) {
    observer.observe(skills);
  }

  // projects section
  var techTagContainer = document.querySelector('.tech-used');
  var techTags = ["Django", "GPT API", "Python", "Postgres", "Cloud Deployment", "Databases", "Linux", "Git", "JS", "HTML", "CSS", "OpenAI"];
  for (var _i = 0, _techTags = techTags; _i < _techTags.length; _i++) {
    var tag = _techTags[_i];
    var div = document.createElement('div');
    div.classList = 'tech';
    div.textContent = tag;
    techTagContainer.appendChild(div);
  }

  // additional projects
  var projectContainer = document.querySelector('.other-projects');
  function createProjectCard(repo, title) {
    var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var div = document.createElement('div');
    div.classList.add('project-card');
    var heading = document.createElement('h4');
    heading.textContent = title;
    div.appendChild(heading);
    var img = document.createElement('img');
    img.src = "./images/".concat(repo, ".png");
    img.alt = "".concat(title, " image");
    div.appendChild(img);
    var links = document.createElement('div');
    links.classList.add('links');
    var githubLink = document.createElement('a');
    githubLink.href = "https://github.com/reecevela/".concat(repo);
    githubLink.target = '_blank';
    githubLink.textContent = 'GitHub';
    links.appendChild(githubLink);
    var demoLink = document.createElement('a');
    if (!url) {
      url = "https://reecevela.github.io/".concat(repo);
    }
    demoLink.href = url;
    demoLink.target = '_blank';
    demoLink.textContent = 'Live Demo';
    links.appendChild(demoLink);
    div.appendChild(links);
    return div;
  }
  var projects = [{
    repo: 'weather',
    title: 'Weather App'
  }, {
    repo: 'shipping',
    title: 'Shipping Label Generator'
  }, {
    repo: 'binary-search-tree',
    title: 'Binary Search Tree'
  }, {
    repo: 'social-media-dashboard',
    title: 'Social Media Dashboard'
  }];
  for (var _i2 = 0, _projects = projects; _i2 < _projects.length; _i2++) {
    var project = _projects[_i2];
    projectContainer.appendChild(createProjectCard(project.repo, project.title, project === null || project === void 0 ? void 0 : project.url));
  }

  // Skills background image
  setBackgroundImage('.skills-parallax', _images_skills_bkg_png__WEBPACK_IMPORTED_MODULE_3__["default"]);

  // back to top button functionality
  var backToTop = document.getElementById("back-to-top");
  var navBar = document.querySelector("nav");

  // button appears when nav bar is not in the view
  window.addEventListener("scroll", function () {
    var navBottomPosition = navBar.getBoundingClientRect().bottom;
    if (navBottomPosition < 0) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map