"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/admin/categories";
exports.ids = ["pages/api/v1/admin/categories"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/modal/productModal/SchemaCategories.jsx":
/*!***********************************************************!*\
  !*** ./pages/api/modal/productModal/SchemaCategories.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst categories = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        trim: true,\n        required: true\n    },\n    img: {\n        type: String,\n        trim: true,\n        required: true\n    },\n    stock: {\n        type: Number,\n        trim: true,\n        required: true\n    },\n    extraStock: {\n        type: Number,\n        trim: true,\n        required: true\n    },\n    path: {\n        type: String,\n        unique: true,\n        trim: true,\n        required: true\n    },\n    buttonType: String\n}, {\n    timestamps: true\n});\nconst SchemaCategories = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.categories || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"categories\", categories);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaCategories);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kYWwvcHJvZHVjdE1vZGFsL1NjaGVtYUNhdGVnb3JpZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUNqRCxNQUFNRyxhQUFhLElBQUlILDRDQUFNQSxDQUFDO0lBQzFCSSxPQUFPO1FBQ0hDLE1BQU1DO1FBQ05DLE1BQU0sSUFBSTtRQUNWQyxVQUFVLElBQUk7SUFDbEI7SUFDQUMsS0FBSztRQUNESixNQUFNQztRQUNOQyxNQUFNLElBQUk7UUFDVkMsVUFBVSxJQUFJO0lBQ2xCO0lBQ0FFLE9BQU87UUFDSEwsTUFBTU07UUFDTkosTUFBTSxJQUFJO1FBQ1ZDLFVBQVUsSUFBSTtJQUNsQjtJQUNBSSxZQUFZO1FBQ1JQLE1BQU1NO1FBQ05KLE1BQU0sSUFBSTtRQUNWQyxVQUFVLElBQUk7SUFDbEI7SUFDQUssTUFBTTtRQUNGUixNQUFNQztRQUNOUSxRQUFRLElBQUk7UUFDWlAsTUFBTSxJQUFJO1FBQ1ZDLFVBQVUsSUFBSTtJQUNsQjtJQUNBTyxZQUFZVDtBQUNoQixHQUFHO0lBQUVVLFlBQVksSUFBSTtBQUFDO0FBQ3RCLE1BQU1DLG1CQUFtQmYsdURBQWlCLElBQUlELCtDQUFLQSxDQUFDLGNBQWNFO0FBQ2xFLGlFQUFlYyxnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2JpbGVhcHBzLy4vcGFnZXMvYXBpL21vZGFsL3Byb2R1Y3RNb2RhbC9TY2hlbWFDYXRlZ29yaWVzLmpzeD82NTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IGNhdGVnb3JpZXMgPSBuZXcgU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHRyaW06IHRydWUsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB0cmltOiB0cnVlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RvY2s6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB0cmltOiB0cnVlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGV4dHJhU3RvY2s6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB0cmltOiB0cnVlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHBhdGg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHRyaW06IHRydWUsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYnV0dG9uVHlwZTogU3RyaW5nXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5jb25zdCBTY2hlbWFDYXRlZ29yaWVzID0gbW9kZWxzLmNhdGVnb3JpZXMgfHwgbW9kZWwoJ2NhdGVnb3JpZXMnLCBjYXRlZ29yaWVzKTtcbmV4cG9ydCBkZWZhdWx0IFNjaGVtYUNhdGVnb3JpZXMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJjYXRlZ29yaWVzIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwidHJpbSIsInJlcXVpcmVkIiwiaW1nIiwic3RvY2siLCJOdW1iZXIiLCJleHRyYVN0b2NrIiwicGF0aCIsInVuaXF1ZSIsImJ1dHRvblR5cGUiLCJ0aW1lc3RhbXBzIiwiU2NoZW1hQ2F0ZWdvcmllcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/modal/productModal/SchemaCategories.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/utils/bd.jsx":
/*!********************************!*\
  !*** ./pages/api/utils/bd.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst connectDatabase = ()=>{\n    const mongodb_uri = `mongodb+srv://social-media:iw2IRanJs8WDhqOM@cluster0.fvbuak0.mongodb.net/e-commerce?retryWrites=true&w=majority`;\n    // const mongodb_uri ='mongodb://localhost:27017/rangpur'\n    try {\n        mongoose.connect(mongodb_uri);\n        mongoose.connection.on(\"connected\", ()=>{\n            console.log(\"connected to DB\");\n        });\n    } catch (error) {\n        console.log(error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXRpbHMvYmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN6QixNQUFNQyxrQkFBa0IsSUFBTTtJQUMxQixNQUFNQyxjQUFjLENBQUMsK0dBQStHLENBQUM7SUFDckkseURBQXlEO0lBQ3pELElBQUk7UUFDQUgsU0FBU0ksT0FBTyxDQUFDRDtRQUNqQkgsU0FBU0ssVUFBVSxDQUFDQyxFQUFFLENBQUMsYUFBYSxJQUFNO1lBQ3RDQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSixFQUFFLE9BQU9DLE9BQU87UUFDWkYsUUFBUUMsR0FBRyxDQUFDQyxNQUFNQyxPQUFPO0lBQzdCO0FBQ0o7QUFFQSxpRUFBZVIsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vYmlsZWFwcHMvLi9wYWdlcy9hcGkvdXRpbHMvYmQuanN4PzZjNTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgY29ubmVjdERhdGFiYXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vbmdvZGJfdXJpID0gYG1vbmdvZGIrc3J2Oi8vc29jaWFsLW1lZGlhOml3MklSYW5KczhXRGhxT01AY2x1c3RlcjAuZnZidWFrMC5tb25nb2RiLm5ldC9lLWNvbW1lcmNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcbiAgICAvLyBjb25zdCBtb25nb2RiX3VyaSA9J21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvcmFuZ3B1cidcbiAgICB0cnkge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0KG1vbmdvZGJfdXJpKVxuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIERCJylcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERhdGFiYXNlOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJjb25uZWN0RGF0YWJhc2UiLCJtb25nb2RiX3VyaSIsImNvbm5lY3QiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/utils/bd.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/v1/admin/categories/index.jsx":
/*!*************************************************!*\
  !*** ./pages/api/v1/admin/categories/index.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_productModal_SchemaCategories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal/productModal/SchemaCategories */ \"(api)/./pages/api/modal/productModal/SchemaCategories.jsx\");\n/* harmony import */ var _utils_bd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/bd */ \"(api)/./pages/api/utils/bd.jsx\");\n\n\nconst Categories = async (req, res)=>{\n    try {\n        await (0,_utils_bd__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const result = await _modal_productModal_SchemaCategories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        if (result) {\n            return res.status(200).json(result);\n        }\n    } catch (err) {\n        const errorMessage = errorMessageFormatter(err);\n        return res.status(500).json(errorMessage);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvYWRtaW4vY2F0ZWdvcmllcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJFO0FBQzVCO0FBQy9DLE1BQU1FLGFBQWEsT0FBT0MsS0FBS0MsTUFBUTtJQUNuQyxJQUFJO1FBQ0EsTUFBTUgscURBQWVBO1FBQ3JCLE1BQU1JLFNBQVMsTUFBTUwsaUZBQXFCLENBQUMsQ0FBQztRQUM1QyxJQUFJSyxRQUFRO1lBQ1IsT0FBT0QsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7UUFDaEMsQ0FBQztJQUVMLEVBQUUsT0FBT0ksS0FBSztRQUNWLE1BQU1DLGVBQWVDLHNCQUFzQkY7UUFDM0MsT0FBT0wsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7SUFDaEM7QUFDSjtBQUNBLGlFQUFlUixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9iaWxlYXBwcy8uL3BhZ2VzL2FwaS92MS9hZG1pbi9jYXRlZ29yaWVzL2luZGV4LmpzeD8wMTkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2hlbWFDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi8uLi9tb2RhbC9wcm9kdWN0TW9kYWwvU2NoZW1hQ2F0ZWdvcmllc1wiXG5pbXBvcnQgY29ubmVjdERhdGFiYXNlIGZyb20gJy4uLy4uLy4uL3V0aWxzL2JkJ1xuY29uc3QgQ2F0ZWdvcmllcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3REYXRhYmFzZSgpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFNjaGVtYUNhdGVnb3JpZXMuZmluZCh7fSlcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdClcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZUZvcm1hdHRlcihlcnIpXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvck1lc3NhZ2UpXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllczsiXSwibmFtZXMiOlsiU2NoZW1hQ2F0ZWdvcmllcyIsImNvbm5lY3REYXRhYmFzZSIsIkNhdGVnb3JpZXMiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImVyciIsImVycm9yTWVzc2FnZSIsImVycm9yTWVzc2FnZUZvcm1hdHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/admin/categories/index.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/admin/categories/index.jsx"));
module.exports = __webpack_exports__;

})();