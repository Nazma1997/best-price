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
exports.id = "pages/api/v1/admin/brand";
exports.ids = ["pages/api/v1/admin/brand"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/modal/productModal/SchemaBrand.jsx":
/*!******************************************************!*\
  !*** ./pages/api/modal/productModal/SchemaBrand.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst brand = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        trim: true,\n        required: true\n    },\n    img: {\n        type: String,\n        trim: true,\n        required: true\n    },\n    path: {\n        type: String,\n        trim: true,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst SchemaBrand = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.brand || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"brand\", brand);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaBrand);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kYWwvcHJvZHVjdE1vZGFsL1NjaGVtYUJyYW5kLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFDakQsTUFBTUcsUUFBUSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUNyQkksT0FBTztRQUNIQyxNQUFNQztRQUNOQyxNQUFNLElBQUk7UUFDVkMsVUFBVSxJQUFJO0lBQ2xCO0lBQ0FDLEtBQUs7UUFDREosTUFBTUM7UUFDTkMsTUFBTSxJQUFJO1FBQ1ZDLFVBQVUsSUFBSTtJQUNsQjtJQUNBRSxNQUFNO1FBQ0ZMLE1BQU1DO1FBQ05DLE1BQU0sSUFBSTtRQUNWQyxVQUFVLElBQUk7SUFDbEI7QUFDSixHQUFHO0lBQUVHLFlBQVksSUFBSTtBQUFDO0FBQ3RCLE1BQU1DLGNBQWNWLGtEQUFZLElBQUlELCtDQUFLQSxDQUFDLFNBQVNFO0FBQ25ELGlFQUFlUyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9iaWxlYXBwcy8uL3BhZ2VzL2FwaS9tb2RhbC9wcm9kdWN0TW9kYWwvU2NoZW1hQnJhbmQuanN4P2FiZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgYnJhbmQgPSBuZXcgU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHRyaW06IHRydWUsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB0cmltOiB0cnVlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcGF0aDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHRyaW06IHRydWUsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5jb25zdCBTY2hlbWFCcmFuZCA9IG1vZGVscy5icmFuZCB8fCBtb2RlbCgnYnJhbmQnLCBicmFuZCk7XG5leHBvcnQgZGVmYXVsdCBTY2hlbWFCcmFuZCJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsImJyYW5kIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwidHJpbSIsInJlcXVpcmVkIiwiaW1nIiwicGF0aCIsInRpbWVzdGFtcHMiLCJTY2hlbWFCcmFuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/modal/productModal/SchemaBrand.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/utils/bd.jsx":
/*!********************************!*\
  !*** ./pages/api/utils/bd.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst connectDatabase = ()=>{\n    const mongodb_uri = `mongodb+srv://social-media:iw2IRanJs8WDhqOM@cluster0.fvbuak0.mongodb.net/e-commerce?retryWrites=true&w=majority`;\n    // const mongodb_uri ='mongodb://localhost:27017/rangpur'\n    try {\n        mongoose.connect(mongodb_uri);\n        mongoose.connection.on(\"connected\", ()=>{\n            console.log(\"connected to DB\");\n        });\n    } catch (error) {\n        console.log(error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXRpbHMvYmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN6QixNQUFNQyxrQkFBa0IsSUFBTTtJQUMxQixNQUFNQyxjQUFjLENBQUMsK0dBQStHLENBQUM7SUFDckkseURBQXlEO0lBQ3pELElBQUk7UUFDQUgsU0FBU0ksT0FBTyxDQUFDRDtRQUNqQkgsU0FBU0ssVUFBVSxDQUFDQyxFQUFFLENBQUMsYUFBYSxJQUFNO1lBQ3RDQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSixFQUFFLE9BQU9DLE9BQU87UUFDWkYsUUFBUUMsR0FBRyxDQUFDQyxNQUFNQyxPQUFPO0lBQzdCO0FBQ0o7QUFFQSxpRUFBZVIsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vYmlsZWFwcHMvLi9wYWdlcy9hcGkvdXRpbHMvYmQuanN4PzZjNTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuY29uc3QgY29ubmVjdERhdGFiYXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vbmdvZGJfdXJpID0gYG1vbmdvZGIrc3J2Oi8vc29jaWFsLW1lZGlhOml3MklSYW5KczhXRGhxT01AY2x1c3RlcjAuZnZidWFrMC5tb25nb2RiLm5ldC9lLWNvbW1lcmNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcbiAgICAvLyBjb25zdCBtb25nb2RiX3VyaSA9J21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvcmFuZ3B1cidcbiAgICB0cnkge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0KG1vbmdvZGJfdXJpKVxuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIERCJylcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERhdGFiYXNlOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJjb25uZWN0RGF0YWJhc2UiLCJtb25nb2RiX3VyaSIsImNvbm5lY3QiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/utils/bd.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/v1/admin/brand/index.jsx":
/*!********************************************!*\
  !*** ./pages/api/v1/admin/brand/index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_productModal_SchemaBrand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal/productModal/SchemaBrand */ \"(api)/./pages/api/modal/productModal/SchemaBrand.jsx\");\n/* harmony import */ var _utils_bd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/bd */ \"(api)/./pages/api/utils/bd.jsx\");\n\n\nconst Brand = async (req, res)=>{\n    try {\n        await (0,_utils_bd__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const result = await _modal_productModal_SchemaBrand__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        if (result) {\n            return res.status(200).json(result);\n        }\n    } catch (err) {\n        const errorMessage = errorMessageFormatter(err);\n        return res.status(500).json(errorMessage);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brand);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvYWRtaW4vYnJhbmQvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRTtBQUNsQjtBQUNoRCxNQUFNRSxRQUFRLE9BQU9DLEtBQUtDLE1BQVE7SUFDOUIsSUFBSTtRQUNBLE1BQU1ILHFEQUFlQTtRQUNyQixNQUFNSSxTQUFTLE1BQU1MLDRFQUFnQixDQUFDLENBQUM7UUFDdkMsSUFBSUssUUFBUTtZQUNSLE9BQU9ELElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1FBQ2hDLENBQUM7SUFFTCxFQUFFLE9BQU9JLEtBQUs7UUFDVixNQUFNQyxlQUFlQyxzQkFBc0JGO1FBQzNDLE9BQU9MLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNFO0lBQ2hDO0FBQ0o7QUFDQSxpRUFBZVIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vYmlsZWFwcHMvLi9wYWdlcy9hcGkvdjEvYWRtaW4vYnJhbmQvaW5kZXguanN4PzRhODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjaGVtYUJyYW5kIGZyb20gXCIuLi8uLi8uLi9tb2RhbC9wcm9kdWN0TW9kYWwvU2NoZW1hQnJhbmRcIjtcbmltcG9ydCBjb25uZWN0RGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2JkXCI7XG5jb25zdCBCcmFuZCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3REYXRhYmFzZSgpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFNjaGVtYUJyYW5kLmZpbmQoe30pXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpXG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VGb3JtYXR0ZXIoZXJyKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3JNZXNzYWdlKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJyYW5kO1xuIl0sIm5hbWVzIjpbIlNjaGVtYUJyYW5kIiwiY29ubmVjdERhdGFiYXNlIiwiQnJhbmQiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImVyciIsImVycm9yTWVzc2FnZSIsImVycm9yTWVzc2FnZUZvcm1hdHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/admin/brand/index.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/admin/brand/index.jsx"));
module.exports = __webpack_exports__;

})();