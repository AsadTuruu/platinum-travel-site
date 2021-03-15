/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkplatinum_travel_site_files"] = self["webpackChunkplatinum_travel_site_files"] || []).push([["app_assets_scripts_modules_Modal_js"],{

/***/ "./app/assets/scripts/modules/Modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Modal {\n    constructor() {\n        this.injectHTML();\n        this.modal = document.querySelector(\".modal\");\n        \n        this.closeIcon = document.querySelector(\".modal__close\");\n        this.events();\n    }\n    events() {\n        \n        this.closeIcon.addEventListener(\"click\", () => this.closeModal());\n        document.addEventListener(\"keyup\", e => this.keyPressHandler(e));\n\n    }\n    keyPressHandler(e) {\n        if (e.keyCode == 27) {\n            this.closeModal();\n        }\n    }\n    openModal() {\n        \n        this.modal.classList.add(\"modal--is-visible\");\n    }\n    closeModal() {\n        this.modal.classList.remove(\"modal--is-visible\");\n    }\n    injectHTML(){\n        document.body.insertAdjacentHTML(\"beforeend\", `\n        <div class=\"modal\">\n    <div class=\"modal__inner\">\n      <h2 class=\"section-title section-title--blue section-title--less-margin\"><img src=\"assets/images/icons/mail.svg\" class=\"section-title__icon\"> Хамт <strong>Аялах</strong></h2>\n      <div class=\"wrapper wrapper--narrow\">\n        <p class=\"modal__description\">Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох боломжтой!</p>\n      </div>\n\n      <div class=\"social-icons\">\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/facebook.svg\" alt=\"Facebook\"></a>\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/twitter.svg\" alt=\"Twitter\"></a>\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/instagram.svg\" alt=\"Instagram\"></a>\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/youtube.svg\" alt=\"YouTube\"></a>\n      </div>\n    </div>\n    <div class=\"modal__close\">X</div>\n  </div>`)\n    }\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n\n//# sourceURL=webpack://platinum-travel-site-files/./app/assets/scripts/modules/Modal.js?");

/***/ })

}]);