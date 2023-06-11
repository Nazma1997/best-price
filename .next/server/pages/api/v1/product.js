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
exports.id = "pages/api/v1/product";
exports.ids = ["pages/api/v1/product"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/modal/productModal/SchemaProduct.jsx":
/*!********************************************************!*\
  !*** ./pages/api/modal/productModal/SchemaProduct.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst product = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    brand: {\n        type: String\n    },\n    model: {\n        type: String\n    },\n    img: {\n        type: String\n    },\n    price: {\n        type: Number\n    },\n    unPrice: {\n        type: Number,\n        // trim: true,\n        default: \"0\"\n    },\n    inStock: {\n        type: Number\n    },\n    type: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    shortDescription: {\n        type: String\n    },\n    byuLink: {\n        type: String\n    },\n    subCategory: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst SchemaProducts = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"product\", product);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaProducts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kYWwvcHJvZHVjdE1vZGFsL1NjaGVtYVByb2R1Y3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUNqRCxNQUFNRyxVQUFVLElBQUlILDRDQUFNQSxDQUFDO0lBQ3ZCSSxNQUFNO1FBQ0ZDLE1BQU1DO0lBR1Y7SUFDQUMsT0FBTztRQUNIRixNQUFNQztJQUdWO0lBQ0FMLE9BQU87UUFDSEksTUFBTUM7SUFJVjtJQUNBRSxLQUFLO1FBQ0RILE1BQU1DO0lBR1Y7SUFDQUcsT0FBTztRQUNISixNQUFNSztJQUdWO0lBQ0FDLFNBQVM7UUFDTE4sTUFBTUs7UUFDTixjQUFjO1FBQ2RFLFNBQVM7SUFHYjtJQUNBQyxTQUFTO1FBQ0xSLE1BQU1LO0lBR1Y7SUFDQUwsTUFBTTtRQUNGQSxNQUFNQztJQUdWO0lBQ0FRLGFBQWE7UUFDVFQsTUFBTUM7SUFHVjtJQUNBUyxrQkFBa0I7UUFDZFYsTUFBTUM7SUFHVjtJQUNBVSxTQUFTO1FBQ0xYLE1BQU1DO0lBR1Y7SUFDQVcsYUFBYTtRQUNUWixNQUFNQztJQUdWO0FBQ0osR0FBRztJQUFFWSxZQUFZLElBQUk7QUFBQztBQUN0QixNQUFNQyxpQkFBaUJqQixvREFBYyxJQUFJRCwrQ0FBS0EsQ0FBQyxXQUFXRTtBQUMxRCxpRUFBZWdCLGNBQWNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9iaWxlYXBwcy8uL3BhZ2VzL2FwaS9tb2RhbC9wcm9kdWN0TW9kYWwvU2NoZW1hUHJvZHVjdC5qc3g/NTg2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnN0IHByb2R1Y3QgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcclxuICAgICAgICAvLyByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGJyYW5kOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vIHRyaW06IHRydWUsXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBtb2RlbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvLyB0cmltOiB0cnVlLFxyXG4gICAgICAgIC8vIHVuaXF1ZSA6IHRydWUsXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcclxuICAgICAgICAvLyByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHByaWNlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIC8vIHRyaW06IHRydWUsXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdW5QcmljZToge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAvLyB0cmltOiB0cnVlLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcwJyxcclxuICAgICAgICAvLyByZXF1aXJlZDpmYWxzZVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGluU3RvY2s6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcclxuICAgICAgICAvLyByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vIHRyaW06IHRydWUsXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcclxuICAgICAgICAvLyByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBzaG9ydERlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vIHRyaW06IHRydWUsXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYnl1TGluazoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvLyB0cmltOiB0cnVlLFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHN1YkNhdGVnb3J5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vIHRyaW06IHRydWUsXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XHJcbmNvbnN0IFNjaGVtYVByb2R1Y3RzID0gbW9kZWxzLnByb2R1Y3QgfHwgbW9kZWwoJ3Byb2R1Y3QnLCBwcm9kdWN0KTtcclxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hUHJvZHVjdHNcclxuXHJcbi8qIFxyXG5cclxuYnV5IExpbmtcclxuXHJcblxyXG5cclxuXHJcbiovIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwicHJvZHVjdCIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiYnJhbmQiLCJpbWciLCJwcmljZSIsIk51bWJlciIsInVuUHJpY2UiLCJkZWZhdWx0IiwiaW5TdG9jayIsImRlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsImJ5dUxpbmsiLCJzdWJDYXRlZ29yeSIsInRpbWVzdGFtcHMiLCJTY2hlbWFQcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/modal/productModal/SchemaProduct.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/utils/bd.jsx":
/*!********************************!*\
  !*** ./pages/api/utils/bd.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst connectDatabase = ()=>{\n    const mongodb_uri = `mongodb+srv://social-media:iw2IRanJs8WDhqOM@cluster0.fvbuak0.mongodb.net/e-commerce?retryWrites=true&w=majority`;\n    try {\n        mongoose.connect(mongodb_uri);\n        mongoose.connection.on(\"connected\", ()=>{\n            console.log(\"connected to DB\");\n        });\n    } catch (error) {\n        console.log(error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXRpbHMvYmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN6QixNQUFNQyxrQkFBa0IsSUFBTTtJQUMxQixNQUFNQyxjQUFjLENBQUMsK0dBQStHLENBQUM7SUFDckksSUFBSTtRQUNBSCxTQUFTSSxPQUFPLENBQUNEO1FBQ2pCSCxTQUFTSyxVQUFVLENBQUNDLEVBQUUsQ0FBQyxhQUFhLElBQU07WUFDdENDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKLEVBQUUsT0FBT0MsT0FBTztRQUNaRixRQUFRQyxHQUFHLENBQUNDLE1BQU1DLE9BQU87SUFDN0I7QUFDSjtBQUVBLGlFQUFlUixlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9iaWxlYXBwcy8uL3BhZ2VzL2FwaS91dGlscy9iZC5qc3g/NmM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbmNvbnN0IGNvbm5lY3REYXRhYmFzZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vbmdvZGJfdXJpID0gYG1vbmdvZGIrc3J2Oi8vc29jaWFsLW1lZGlhOml3MklSYW5KczhXRGhxT01AY2x1c3RlcjAuZnZidWFrMC5tb25nb2RiLm5ldC9lLWNvbW1lcmNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChtb25nb2RiX3VyaSlcclxuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgdG8gREInKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYXRhYmFzZTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29ubmVjdERhdGFiYXNlIiwibW9uZ29kYl91cmkiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/utils/bd.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/v1/product/index.jsx":
/*!****************************************!*\
  !*** ./pages/api/v1/product/index.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_productModal_SchemaProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal/productModal/SchemaProduct */ \"(api)/./pages/api/modal/productModal/SchemaProduct.jsx\");\n/* harmony import */ var _utils_bd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/bd */ \"(api)/./pages/api/utils/bd.jsx\");\n\n\nconst ProductGet = async (req, res)=>{\n    try {\n        await (0,_utils_bd__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const result = await _modal_productModal_SchemaProduct__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n        return res.status(200).json(result);\n    } catch (err) {\n        const errorMessage = errorMessageFormatter(err);\n        return res.status(500).json(errorMessage);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductGet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvcHJvZHVjdC9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9FO0FBQ3ZCO0FBRTdDLE1BQU1FLGFBQWEsT0FBT0MsS0FBS0MsTUFBUTtJQUNuQyxJQUFJO1FBQ0EsTUFBTUgscURBQWVBO1FBQ3JCLE1BQU1JLFNBQVEsTUFBTUwsOEVBQW1CO1FBQ3ZDLE9BQU9JLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO0lBRWhDLEVBQUUsT0FBT0ksS0FBSztRQUNWLE1BQU1DLGVBQWVDLHNCQUFzQkY7UUFDM0MsT0FBT0wsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7SUFDaEM7QUFDSjtBQUNBLGlFQUFlUixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9iaWxlYXBwcy8uL3BhZ2VzL2FwaS92MS9wcm9kdWN0L2luZGV4LmpzeD83OTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2hlbWFQcm9kdWN0cyBmcm9tIFwiLi4vLi4vbW9kYWwvcHJvZHVjdE1vZGFsL1NjaGVtYVByb2R1Y3RcIjtcclxuaW1wb3J0IGNvbm5lY3REYXRhYmFzZSBmcm9tIFwiLi4vLi4vdXRpbHMvYmRcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RHZXQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdERhdGFiYXNlKClcclxuICAgICAgICBjb25zdCByZXN1bHQgPWF3YWl0IFNjaGVtYVByb2R1Y3RzLmZpbmQoKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlRm9ybWF0dGVyKGVycilcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3JNZXNzYWdlKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RHZXQ7Il0sIm5hbWVzIjpbIlNjaGVtYVByb2R1Y3RzIiwiY29ubmVjdERhdGFiYXNlIiwiUHJvZHVjdEdldCIsInJlcSIsInJlcyIsInJlc3VsdCIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JNZXNzYWdlRm9ybWF0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/product/index.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/product/index.jsx"));
module.exports = __webpack_exports__;

})();