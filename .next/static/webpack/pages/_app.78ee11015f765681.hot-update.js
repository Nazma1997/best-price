"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2cd7ec7560cf\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz8xMGZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMmNkN2VjNzU2MGNmXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/globals.css\n"));

/***/ }),

/***/ "./components/Shared/Search/BrandSearch.jsx":
/*!**************************************************!*\
  !*** ./components/Shared/Search/BrandSearch.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BrandSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_features_api_ProductControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/features/api/ProductControl */ \"./app/features/api/ProductControl.jsx\");\n/* harmony import */ var _ShortBrandNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShortBrandNames */ \"./components/Shared/Search/ShortBrandNames.jsx\");\n/* harmony import */ var _TypeAndBrand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypeAndBrand */ \"./components/Shared/Search/TypeAndBrand.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction BrandSearch() {\n    _s();\n    const { data: brands  } = (0,_app_features_api_ProductControl__WEBPACK_IMPORTED_MODULE_1__.useBrandQuery)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-[300px] h-[600px] overflow-scroll py-2 px-5 bg-white text-black shadow-2xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-2\",\n            children: brands === null || brands === void 0 ? void 0 : brands.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                    href: \"/brands/\".concat(name),\n                    className: \"flex justify-between \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\".concat(name.charAt(0).toUpperCase()).concat(name.slice(1))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\best-price\\\\components\\\\Shared\\\\Search\\\\BrandSearch.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\best-price\\\\components\\\\Shared\\\\Search\\\\BrandSearch.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 37\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\best-price\\\\components\\\\Shared\\\\Search\\\\BrandSearch.jsx\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\best-price\\\\components\\\\Shared\\\\Search\\\\BrandSearch.jsx\",\n        lineNumber: 9,\n        columnNumber: 17\n    }, this);\n}\n_s(BrandSearch, \"zIOCGqWawV+FLmNJpWCHhzqRtTQ=\", false, function() {\n    return [\n        _app_features_api_ProductControl__WEBPACK_IMPORTED_MODULE_1__.useBrandQuery\n    ];\n});\n_c = BrandSearch;\nvar _c;\n$RefreshReg$(_c, \"BrandSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9TZWFyY2gvQnJhbmRTZWFyY2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXlFO0FBQ3pCO0FBQ047QUFFM0IsU0FBU0csY0FBYzs7SUFFbEMsTUFBTSxFQUFFQyxNQUFNQyxPQUFNLEVBQUMsR0FBR0wsK0VBQWFBO0lBRWpDLHFCQUFRLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUN2Qiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFFUEYsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRyxHQUFHLENBQUNKLENBQUFBLHFCQUFRLDhEQUFDSztvQkFBS0MsTUFBTSxXQUFnQixPQUFMQztvQkFBUUosV0FBVTs4QkFDN0QsNEVBQUNLO2tDQUFJLEdBQWtDRCxPQUEvQkEsS0FBS0UsTUFBTSxDQUFDLEdBQUdDLFdBQVcsSUFBbUIsT0FBZEgsS0FBS0ksS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbEUsQ0FBQztHQWpCdUJaOztRQUVJSCwyRUFBYUE7OztLQUZqQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZWQvU2VhcmNoL0JyYW5kU2VhcmNoLmpzeD85NmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUJyYW5kUXVlcnkgfSBmcm9tIFwiLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL2FwaS9Qcm9kdWN0Q29udHJvbFwiO1xuaW1wb3J0IFNob3J0QnJhbmROYW1lcyBmcm9tIFwiLi9TaG9ydEJyYW5kTmFtZXNcIjtcbmltcG9ydCBUeXBlQW5kQnJhbmQgZnJvbSBcIi4vVHlwZUFuZEJyYW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyYW5kU2VhcmNoKCkge1xuXG4gICAgY29uc3QgeyBkYXRhOiBicmFuZHN9ID0gdXNlQnJhbmRRdWVyeSgpXG4gICAgXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCIgdy1bMzAwcHhdIGgtWzYwMHB4XSBvdmVyZmxvdy1zY3JvbGwgcHktMiBweC01IGJnLXdoaXRlIHRleHQtYmxhY2sgc2hhZG93LTJ4bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmFuZHM/Lm1hcChkYXRhID0+IDxMaW5rIGhyZWY9e2AvYnJhbmRzLyR7bmFtZX1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBcIj5cbiAgICAgICAgICAgICAgICA8cCA+e2Ake25hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtuYW1lLnNsaWNlKDEpfWB9PC9wPlxuICAgICAgICAgICAgPC9MaW5rPilcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlQnJhbmRRdWVyeSIsIlNob3J0QnJhbmROYW1lcyIsIlR5cGVBbmRCcmFuZCIsIkJyYW5kU2VhcmNoIiwiZGF0YSIsImJyYW5kcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIkxpbmsiLCJocmVmIiwibmFtZSIsInAiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shared/Search/BrandSearch.jsx\n"));

/***/ })

});