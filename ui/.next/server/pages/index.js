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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ({ data  })=>{\n    const [retroMaster, setRetroMaster] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const chooseRandomRestroMaster = (data)=>{\n        return data[Math.floor(Math.random() * data.length)];\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        retroMaster\n    ]);\n    if (data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {}, void 0, false, {\n                    fileName: \"/app/ui/src/pages/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                            span: 12,\n                            offset: 6,\n                            xs: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>{\n                                    const retroMaster_ = chooseRandomRestroMaster(data).name;\n                                    setRetroMaster(retroMaster_);\n                                },\n                                children: \"START\"\n                            }, void 0, false, {\n                                fileName: \"/app/ui/src/pages/index.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/app/ui/src/pages/index.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                            span: 12,\n                            offset: 6,\n                            xs: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"black\"\n                                },\n                                children: retroMaster ? `Retro master is ${retroMaster}` : \"No retro master for now\"\n                            }, void 0, false, {\n                                fileName: \"/app/ui/src/pages/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/app/ui/src/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/ui/src/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/ui/src/pages/index.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined);\n    }\n};\nconst getServerSideProps = async ()=>{\n    const res = await fetch(`http://project_backend:8000/all`);\n    const results = await res.json();\n    return {\n        props: {\n            data: results\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QztBQUNHO0FBRS9DLE1BQU1NLE9BQVksQ0FBQyxFQUFFQyxLQUFJLEVBQUUsR0FBSztJQUM5QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUNTO0lBRS9DLE1BQU1DLDJCQUEyQixDQUFDSixPQUFTO1FBQ3pDLE9BQU9BLElBQUksQ0FBQ0ssS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtQLEtBQUtRLE1BQU0sRUFBRTtJQUN0RDtJQUVBZixnREFBU0EsQ0FBQyxJQUFNLENBQUMsR0FBRztRQUFDUTtLQUFZO0lBRWpDLElBQUlELE1BQU07UUFDUixxQkFDRSw4REFBQ0gsdUNBQUtBOzs4QkFDSiw4REFBQ0QscUNBQUdBOzs7Ozs4QkFFSiw4REFBQ0EscUNBQUdBOztzQ0FDRiw4REFBQ0UscUNBQUdBOzRCQUFDVyxNQUFNOzRCQUFJQyxRQUFROzRCQUFHQyxJQUFJO3NDQUM1Qiw0RUFBQ2hCLHdDQUFNQTtnQ0FDTGlCLFNBQVMsSUFBTTtvQ0FDYixNQUFNQyxlQUFlVCx5QkFBeUJKLE1BQU1jLElBQUk7b0NBQ3hEWixlQUFlVztnQ0FDakI7MENBQ0Q7Ozs7Ozs7Ozs7O3NDQUlILDhEQUFDZixxQ0FBR0E7NEJBQUNXLE1BQU07NEJBQUlDLFFBQVE7NEJBQUdDLElBQUk7c0NBQzVCLDRFQUFDSTtnQ0FBRUMsT0FBTztvQ0FBQ0MsT0FBTztnQ0FBTzswQ0FDeEJoQixjQUNHLENBQUMsZ0JBQWdCLEVBQUVBLFlBQVksQ0FBQyxHQUNoQyx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXZDLENBQUM7QUFDSDtBQUVPLE1BQU1pQixxQkFBcUIsVUFBWTtJQUM1QyxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQztJQUN6RCxNQUFNQyxVQUFVLE1BQU1GLElBQUlHLElBQUk7SUFDOUIsT0FBTztRQUFFQyxPQUFPO1lBQUV2QixNQUFNcUI7UUFBUTtJQUFFO0FBQ3BDLEVBQUU7QUFFRixpRUFBZXRCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIFJvdywgU3BhY2UsIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IEhvbWU6IGFueSA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbcmV0cm9NYXN0ZXIsIHNldFJldHJvTWFzdGVyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG5cbiAgY29uc3QgY2hvb3NlUmFuZG9tUmVzdHJvTWFzdGVyID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gZGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCldXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbcmV0cm9NYXN0ZXJdKTtcblxuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3BhY2U+XG4gICAgICAgIDxSb3c+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0geHM9ezZ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cm9NYXN0ZXJfID0gY2hvb3NlUmFuZG9tUmVzdHJvTWFzdGVyKGRhdGEpLm5hbWU7XG4gICAgICAgICAgICAgICAgc2V0UmV0cm9NYXN0ZXIocmV0cm9NYXN0ZXJfKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU1RBUlRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0geHM9ezZ9PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJibGFja1wifX0+XG4gICAgICAgICAgICB7cmV0cm9NYXN0ZXJcbiAgICAgICAgICAgICAgPyBgUmV0cm8gbWFzdGVyIGlzICR7cmV0cm9NYXN0ZXJ9YFxuICAgICAgICAgICAgICA6IFwiTm8gcmV0cm8gbWFzdGVyIGZvciBub3dcIn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvU3BhY2U+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9wcm9qZWN0X2JhY2tlbmQ6ODAwMC9hbGxgKTtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGE6IHJlc3VsdHMgfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlJvdyIsIlNwYWNlIiwiQ29sIiwiSG9tZSIsImRhdGEiLCJyZXRyb01hc3RlciIsInNldFJldHJvTWFzdGVyIiwidW5kZWZpbmVkIiwiY2hvb3NlUmFuZG9tUmVzdHJvTWFzdGVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic3BhbiIsIm9mZnNldCIsInhzIiwib25DbGljayIsInJldHJvTWFzdGVyXyIsIm5hbWUiLCJwIiwic3R5bGUiLCJjb2xvciIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwicmVzdWx0cyIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();