/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/all"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fapp%2Fui%2Fsrc%2Fpages%2Fall.tsx&page=%2Fall!":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fapp%2Fui%2Fsrc%2Fpages%2Fall.tsx&page=%2Fall! ***!
  \****************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/all\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/all.tsx */ \"./src/pages/all.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/all\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZhcHAlMkZ1aSUyRnNyYyUyRnBhZ2VzJTJGYWxsLnRzeCZwYWdlPSUyRmFsbCEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxnREFBcUI7QUFDNUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzRiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9hbGxcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3NyYy9wYWdlcy9hbGwudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9hbGxcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fapp%2Fui%2Fsrc%2Fpages%2Fall.tsx&page=%2Fall!\n"));

/***/ }),

/***/ "./api/actions.tsx":
/*!*************************!*\
  !*** ./api/actions.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEmployee\": function() { return /* binding */ addEmployee; },\n/* harmony export */   \"deleteEmployee\": function() { return /* binding */ deleteEmployee; },\n/* harmony export */   \"fetchAllEmployees\": function() { return /* binding */ fetchAllEmployees; }\n/* harmony export */ });\nconst deleteEmployee = async (id)=>{\n    return fetch(\"http://localhost:8000/?id=\".concat(id), {\n        method: \"DELETE\",\n        headers: {\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Access-Control-Request-Headers\": \"*\"\n        }\n    }).then((response)=>response.json());\n};\nconst fetchAllEmployees = async (setEmployees)=>{\n    return await fetch(\"http://localhost:8000/all\", {\n        method: \"GET\",\n        headers: {\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Access-Control-Request-Headers\": \"*\"\n        }\n    }).then((response)=>response.json()).then((data)=>{\n        setEmployees(data);\n    });\n};\nconst addEmployee = async (value)=>{\n    return await fetch(\"http://localhost:8000/\", {\n        body: JSON.stringify(value),\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Access-Control-Request-Headers\": \"*\"\n        }\n    }).then((response)=>response.json());\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYWN0aW9ucy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsaUJBQWlCLE9BQU9DLEtBQU87SUFDMUMsT0FBT0MsTUFBTSw2QkFBZ0MsT0FBSEQsS0FBTTtRQUM5Q0UsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsK0JBQStCO1lBQy9CLGtDQUFrQztRQUNwQztJQUNGLEdBQUdDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJO0FBQ3JDLEVBQUU7QUFFSyxNQUFNQyxvQkFBb0IsT0FBT0MsZUFBaUI7SUFDdkQsT0FBTyxNQUFNUCxNQUFPLDZCQUE0QjtRQUM5Q0MsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsK0JBQStCO1lBQy9CLGtDQUFrQztRQUNwQztJQUNGLEdBQ0dDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0ssT0FBUztRQUNkRCxhQUFhQztJQUNmO0FBQ0osRUFBRTtBQUVLLE1BQU1DLGNBQWMsT0FBT0MsUUFBVTtJQUN4QyxPQUFPLE1BQU1WLE1BQU8sMEJBQXlCO1FBQzNDVyxNQUFNQyxLQUFLQyxTQUFTLENBQUNIO1FBQ3JCVCxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsK0JBQStCO1lBQy9CLGtDQUFrQztRQUNwQztJQUNGLEdBQUdDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJO0FBQ3JDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2FjdGlvbnMudHN4PzVkNWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRlbGV0ZUVtcGxveWVlID0gYXN5bmMgKGlkKSA9PiB7XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwLz9pZD0ke2lkfWAsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLVJlcXVlc3QtSGVhZGVyc1wiOiBcIipcIixcbiAgICB9LFxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFsbEVtcGxveWVlcyA9IGFzeW5jIChzZXRFbXBsb3llZXMpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYWxsYCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzXCI6IFwiKlwiLFxuICAgIH0sXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldEVtcGxveWVlcyhkYXRhKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2AsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlKSxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLVJlcXVlc3QtSGVhZGVyc1wiOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH07Il0sIm5hbWVzIjpbImRlbGV0ZUVtcGxveWVlIiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZmV0Y2hBbGxFbXBsb3llZXMiLCJzZXRFbXBsb3llZXMiLCJkYXRhIiwiYWRkRW1wbG95ZWUiLCJ2YWx1ZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/actions.tsx\n"));

/***/ }),

/***/ "./src/pages/all.tsx":
/*!***************************!*\
  !*** ./src/pages/all.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var api_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/actions */ \"./api/actions.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Column , ColumnGroup  } = antd__WEBPACK_IMPORTED_MODULE_3__.Table;\nconst Employees = ()=>{\n    _s();\n    const [employees, setEmployees] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [deletedEmployees, setDeletedEmployees] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchAllEmployees = async ()=>{\n            return await fetch(\"http://localhost:8000/all\", {\n                method: \"GET\",\n                headers: {\n                    \"Access-Control-Allow-Origin\": \"*\",\n                    \"Access-Control-Request-Headers\": \"*\"\n                }\n            }).then((response)=>response.json()).then((data)=>{\n                setEmployees(data);\n            });\n        };\n        fetchAllEmployees();\n    }, [\n        deletedEmployees\n    ]);\n    if (employees) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                dataSource: employees,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColumnGroup, {\n                    title: \"Name\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            title: \"id\",\n                            dataIndex: \"id\"\n                        }, \"id\", false, {\n                            fileName: \"/app/ui/src/pages/all.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            title: \"Name\",\n                            dataIndex: \"name\"\n                        }, \"name\", false, {\n                            fileName: \"/app/ui/src/pages/all.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            title: \"Surname\",\n                            dataIndex: \"surname\"\n                        }, \"surname\", false, {\n                            fileName: \"/app/ui/src/pages/all.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            title: \"Action\",\n                            dataIndex: \"\",\n                            render: (employee)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    onClick: ()=>{\n                                        (0,api_actions__WEBPACK_IMPORTED_MODULE_1__.deleteEmployee)(employee.id);\n                                        setDeletedEmployees(employee.id);\n                                    },\n                                    children: \"Delete\"\n                                }, void 0, false, void 0, void 0)\n                        }, \"x\", false, {\n                            fileName: \"/app/ui/src/pages/all.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/ui/src/pages/all.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/ui/src/pages/all.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false);\n    }\n};\n_s(Employees, \"B5A0ru6CwP8z+7Yc3gCus51ThDs=\");\n_c = Employees;\n// export const getServerSideProps = async () => {\n//   const res = await fetch(`http://project_backend:8000/all`);\n//   const results = await res.json();\n//   return { props: { data: results } };\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (Employees);\nvar _c;\n$RefreshReg$(_c, \"Employees\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWxsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFDbUM7QUFDcEI7QUFDNUMsTUFBTSxFQUFFSSxPQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHTCx1Q0FBS0E7QUFFckMsTUFBTU0sWUFBaUIsSUFBTTs7SUFDM0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDTSxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1TLG9CQUFvQixVQUFZO1lBQ3BDLE9BQU8sTUFBTUMsTUFBTyw2QkFBNEI7Z0JBQzlDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLCtCQUErQjtvQkFDL0Isa0NBQWtDO2dCQUNwQztZQUNGLEdBQ0dDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBUztnQkFDZFYsYUFBYVU7WUFDZjtRQUNKO1FBQ0FQO0lBQ0YsR0FBRztRQUFDRjtLQUFpQjtJQUNyQixJQUFJRixXQUFXO1FBQ2IscUJBQ0U7c0JBQ0UsNEVBQUNQLHVDQUFLQTtnQkFBQ21CLFlBQVlaOzBCQUNqQiw0RUFBQ0Y7b0JBQVllLE9BQU07O3NDQUNqQiw4REFBQ2hCOzRCQUFPZ0IsT0FBTTs0QkFBS0MsV0FBVTsyQkFBUzs7Ozs7c0NBQ3RDLDhEQUFDakI7NEJBQU9nQixPQUFNOzRCQUFPQyxXQUFVOzJCQUFXOzs7OztzQ0FDMUMsOERBQUNqQjs0QkFBT2dCLE9BQU07NEJBQVVDLFdBQVU7MkJBQWM7Ozs7O3NDQUNoRCw4REFBQ2pCOzRCQUNDZ0IsT0FBTTs0QkFDTkMsV0FBVTs0QkFFVkMsUUFBUSxDQUFDQyx5QkFDUCw4REFBQ0M7b0NBQ0NDLFNBQVMsSUFBTTt3Q0FDYnhCLDJEQUFjQSxDQUFDc0IsU0FBU0csRUFBRTt3Q0FDMUJoQixvQkFBb0JhLFNBQVNHLEVBQUU7b0NBQ2pDOzhDQUNEOzsyQkFQQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQmhCLENBQUM7QUFDSDtHQWhETXBCO0tBQUFBO0FBa0ROLGtEQUFrRDtBQUNsRCxnRUFBZ0U7QUFDaEUsc0NBQXNDO0FBQ3RDLHlDQUF5QztBQUN6QyxLQUFLO0FBRUwsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FsbC50c3g/MTlhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBkZWxldGVFbXBsb3llZSwgZmV0Y2hBbGxFbXBsb3llZXMgfSBmcm9tIFwiYXBpL2FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IHsgQ29sdW1uLCBDb2x1bW5Hcm91cCB9ID0gVGFibGU7XG5cbmNvbnN0IEVtcGxveWVlczogYW55ID0gKCkgPT4ge1xuICBjb25zdCBbZW1wbG95ZWVzLCBzZXRFbXBsb3llZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGVsZXRlZEVtcGxveWVlcywgc2V0RGVsZXRlZEVtcGxveWVlc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQWxsRW1wbG95ZWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYWxsYCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLVJlcXVlc3QtSGVhZGVyc1wiOiBcIipcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldEVtcGxveWVlcyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBmZXRjaEFsbEVtcGxveWVlcygpO1xuICB9LCBbZGVsZXRlZEVtcGxveWVlc10pO1xuICBpZiAoZW1wbG95ZWVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxUYWJsZSBkYXRhU291cmNlPXtlbXBsb3llZXN9PlxuICAgICAgICAgIDxDb2x1bW5Hcm91cCB0aXRsZT1cIk5hbWVcIj5cbiAgICAgICAgICAgIDxDb2x1bW4gdGl0bGU9XCJpZFwiIGRhdGFJbmRleD1cImlkXCIga2V5PVwiaWRcIiAvPlxuICAgICAgICAgICAgPENvbHVtbiB0aXRsZT1cIk5hbWVcIiBkYXRhSW5kZXg9XCJuYW1lXCIga2V5PVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8Q29sdW1uIHRpdGxlPVwiU3VybmFtZVwiIGRhdGFJbmRleD1cInN1cm5hbWVcIiBrZXk9XCJzdXJuYW1lXCIgLz5cbiAgICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgICAgdGl0bGU9XCJBY3Rpb25cIlxuICAgICAgICAgICAgICBkYXRhSW5kZXg9XCJcIlxuICAgICAgICAgICAgICBrZXk9XCJ4XCJcbiAgICAgICAgICAgICAgcmVuZGVyPXsoZW1wbG95ZWUpID0+IChcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVFbXBsb3llZShlbXBsb3llZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZWRFbXBsb3llZXMoZW1wbG95ZWUuaWQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uR3JvdXA+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59O1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3Byb2plY3RfYmFja2VuZDo4MDAwL2FsbGApO1xuLy8gICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YTogcmVzdWx0cyB9IH07XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZXM7XG4iXSwibmFtZXMiOlsiVGFibGUiLCJkZWxldGVFbXBsb3llZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29sdW1uIiwiQ29sdW1uR3JvdXAiLCJFbXBsb3llZXMiLCJlbXBsb3llZXMiLCJzZXRFbXBsb3llZXMiLCJkZWxldGVkRW1wbG95ZWVzIiwic2V0RGVsZXRlZEVtcGxveWVlcyIsImZldGNoQWxsRW1wbG95ZWVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkYXRhU291cmNlIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJyZW5kZXIiLCJlbXBsb3llZSIsImEiLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/all.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fapp%2Fui%2Fsrc%2Fpages%2Fall.tsx&page=%2Fall!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);