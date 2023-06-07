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
exports.id = "pages/api/v1/product/search";
exports.ids = ["pages/api/v1/product/search"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst product = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    brand: {\n        type: String\n    },\n    model: {\n        type: String\n    },\n    img: {\n        type: String\n    },\n    price: {\n        type: Number\n    },\n    unPrice: {\n        type: Number,\n        // trim: true,\n        default: \"0\"\n    },\n    inStock: {\n        type: Number\n    },\n    type: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    shortDescription: {\n        type: String\n    },\n    byuLink: {\n        type: String\n    },\n    subCategory: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst SchemaProducts = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"product\", product);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaProducts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kYWwvcHJvZHVjdE1vZGFsL1NjaGVtYVByb2R1Y3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUNqRCxNQUFNRyxVQUFVLElBQUlILDRDQUFNQSxDQUFDO0lBQ3ZCSSxNQUFNO1FBQ0ZDLE1BQU1DO0lBR1Y7SUFDQUMsT0FBTztRQUNIRixNQUFNQztJQUdWO0lBQ0FMLE9BQU87UUFDSEksTUFBTUM7SUFJVjtJQUNBRSxLQUFLO1FBQ0RILE1BQU1DO0lBR1Y7SUFDQUcsT0FBTztRQUNISixNQUFNSztJQUdWO0lBQ0FDLFNBQVM7UUFDTE4sTUFBTUs7UUFDTixjQUFjO1FBQ2RFLFNBQVM7SUFHYjtJQUNBQyxTQUFTO1FBQ0xSLE1BQU1LO0lBR1Y7SUFDQUwsTUFBTTtRQUNGQSxNQUFNQztJQUdWO0lBQ0FRLGFBQWE7UUFDVFQsTUFBTUM7SUFHVjtJQUNBUyxrQkFBa0I7UUFDZFYsTUFBTUM7SUFHVjtJQUNBVSxTQUFTO1FBQ0xYLE1BQU1DO0lBR1Y7SUFDQVcsYUFBYTtRQUNUWixNQUFNQztJQUdWO0FBQ0osR0FBRztJQUFFWSxZQUFZLElBQUk7QUFBQztBQUN0QixNQUFNQyxpQkFBaUJqQixvREFBYyxJQUFJRCwrQ0FBS0EsQ0FBQyxXQUFXRTtBQUMxRCxpRUFBZWdCLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2JpbGVhcHBzLy4vcGFnZXMvYXBpL21vZGFsL3Byb2R1Y3RNb2RhbC9TY2hlbWFQcm9kdWN0LmpzeD81ODYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gJ21vbmdvb3NlJztcbmNvbnN0IHByb2R1Y3QgPSBuZXcgU2NoZW1hKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGJyYW5kOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcbiAgICAgICAgLy8gdW5pcXVlIDogdHJ1ZSxcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIHRyaW06IHRydWUsXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIC8vIHRyaW06IHRydWUsXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdW5QcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIC8vIHRyaW06IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICcwJyxcbiAgICAgICAgLy8gcmVxdWlyZWQ6ZmFsc2VcbiAgICAgICAgXG4gICAgfSxcbiAgICBpblN0b2NrOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgLy8gdHJpbTogdHJ1ZSxcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIHRyaW06IHRydWUsXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgc2hvcnREZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIHRyaW06IHRydWUsXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYnl1TGluazoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIHRyaW06IHRydWUsXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgc3ViQ2F0ZWdvcnk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAvLyB0cmltOiB0cnVlLFxuICAgICAgICAvLyByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pO1xuY29uc3QgU2NoZW1hUHJvZHVjdHMgPSBtb2RlbHMucHJvZHVjdCB8fCBtb2RlbCgncHJvZHVjdCcsIHByb2R1Y3QpO1xuZXhwb3J0IGRlZmF1bHQgU2NoZW1hUHJvZHVjdHNcblxuLyogXG5cbmJ1eSBMaW5rXG5cblxuXG5cbiovIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwicHJvZHVjdCIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwiYnJhbmQiLCJpbWciLCJwcmljZSIsIk51bWJlciIsInVuUHJpY2UiLCJkZWZhdWx0IiwiaW5TdG9jayIsImRlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsImJ5dUxpbmsiLCJzdWJDYXRlZ29yeSIsInRpbWVzdGFtcHMiLCJTY2hlbWFQcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/modal/productModal/SchemaProduct.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/utils/bd.jsx":
/*!********************************!*\
  !*** ./pages/api/utils/bd.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst connectDatabase = ()=>{\n    const mongodb_uri = `mongodb+srv://social-media:iw2IRanJs8WDhqOM@cluster0.fvbuak0.mongodb.net/e-commerce?retryWrites=true&w=majority`;\n    try {\n        mongoose.connect(mongodb_uri);\n        mongoose.connection.on(\"connected\", ()=>{\n            console.log(\"connected to DB\");\n        });\n    } catch (error) {\n        console.log(error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXRpbHMvYmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN6QixNQUFNQyxrQkFBa0IsSUFBTTtJQUMxQixNQUFNQyxjQUFjLENBQUMsK0dBQStHLENBQUM7SUFDckksSUFBSTtRQUNBSCxTQUFTSSxPQUFPLENBQUNEO1FBQ2pCSCxTQUFTSyxVQUFVLENBQUNDLEVBQUUsQ0FBQyxhQUFhLElBQU07WUFDdENDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKLEVBQUUsT0FBT0MsT0FBTztRQUNaRixRQUFRQyxHQUFHLENBQUNDLE1BQU1DLE9BQU87SUFDN0I7QUFDSjtBQUVBLGlFQUFlUixlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9iaWxlYXBwcy8uL3BhZ2VzL2FwaS91dGlscy9iZC5qc3g/NmM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5jb25zdCBjb25uZWN0RGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9uZ29kYl91cmkgPSBgbW9uZ29kYitzcnY6Ly9zb2NpYWwtbWVkaWE6aXcySVJhbkpzOFdEaHFPTUBjbHVzdGVyMC5mdmJ1YWswLm1vbmdvZGIubmV0L2UtY29tbWVyY2U/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuICAgIHRyeSB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QobW9uZ29kYl91cmkpXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgdG8gREInKVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGF0YWJhc2U7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImNvbm5lY3REYXRhYmFzZSIsIm1vbmdvZGJfdXJpIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/utils/bd.jsx\n");

/***/ }),

/***/ "(api)/./pages/api/v1/product/search.jsx":
/*!*****************************************!*\
  !*** ./pages/api/v1/product/search.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_productModal_SchemaProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal/productModal/SchemaProduct */ \"(api)/./pages/api/modal/productModal/SchemaProduct.jsx\");\n/* harmony import */ var _utils_bd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/bd */ \"(api)/./pages/api/utils/bd.jsx\");\n\n\nconst Search = async (req, res)=>{\n    try {\n        const data = req.query.filter;\n        await (0,_utils_bd__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const result = await _modal_productModal_SchemaProduct__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n            model: {\n                $regex: data,\n                $options: \"i\"\n            }\n        });\n        if (result) {\n            return res.status(200).json(result);\n        }\n    } catch (err) {\n        const errorMessage = errorMessageFormatter(err);\n        return res.status(500).json(errorMessage);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvcHJvZHVjdC9zZWFyY2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRTtBQUN2QjtBQUM3QyxNQUFNRSxTQUFTLE9BQU9DLEtBQUtDLE1BQVE7SUFDL0IsSUFBSTtRQUNBLE1BQU1DLE9BQU9GLElBQUlHLEtBQUssQ0FBQ0MsTUFBTTtRQUU3QixNQUFNTixxREFBZUE7UUFDckIsTUFBTU8sU0FBUyxNQUFNUiw4RUFBbUIsQ0FBQztZQUFDVSxPQUFNO2dCQUFFQyxRQUFRTjtnQkFBTU8sVUFBVTtZQUFJO1FBQUM7UUFDL0UsSUFBSUosUUFBUTtZQUNSLE9BQU9KLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNOO1FBQ2hDLENBQUM7SUFFTCxFQUFFLE9BQU9PLEtBQUs7UUFDVixNQUFNQyxlQUFlQyxzQkFBc0JGO1FBQzNDLE9BQU9YLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNFO0lBQ2hDO0FBQ0o7QUFDQSxpRUFBZWQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vYmlsZWFwcHMvLi9wYWdlcy9hcGkvdjEvcHJvZHVjdC9zZWFyY2guanN4P2QyZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjaGVtYVByb2R1Y3RzIGZyb20gXCIuLi8uLi9tb2RhbC9wcm9kdWN0TW9kYWwvU2NoZW1hUHJvZHVjdFwiO1xuaW1wb3J0IGNvbm5lY3REYXRhYmFzZSBmcm9tIFwiLi4vLi4vdXRpbHMvYmRcIjtcbmNvbnN0IFNlYXJjaCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEucXVlcnkuZmlsdGVyO1xuXG4gICAgICAgIGF3YWl0IGNvbm5lY3REYXRhYmFzZSgpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFNjaGVtYVByb2R1Y3RzLmZpbmQoe21vZGVsOnsgJHJlZ2V4OiBkYXRhLCAkb3B0aW9uczogJ2knIH19KVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KVxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlRm9ybWF0dGVyKGVycilcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yTWVzc2FnZSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXSwibmFtZXMiOlsiU2NoZW1hUHJvZHVjdHMiLCJjb25uZWN0RGF0YWJhc2UiLCJTZWFyY2giLCJyZXEiLCJyZXMiLCJkYXRhIiwicXVlcnkiLCJmaWx0ZXIiLCJyZXN1bHQiLCJmaW5kIiwibW9kZWwiLCIkcmVnZXgiLCIkb3B0aW9ucyIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJlcnJvck1lc3NhZ2UiLCJlcnJvck1lc3NhZ2VGb3JtYXR0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/product/search.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/product/search.jsx"));
module.exports = __webpack_exports__;

})();