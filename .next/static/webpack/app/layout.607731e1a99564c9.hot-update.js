"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/ThemeToggle/ThemeToggle.jsx":
/*!****************************************************!*\
  !*** ./src/components/ThemeToggle/ThemeToggle.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themeToggle.module.css */ \"(app-pages-browser)/./src/components/ThemeToggle/themeToggle.module.css\");\n/* harmony import */ var _themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ThemeContext */ \"(app-pages-browser)/./src/context/ThemeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ThemeToggle = ()=>{\n    _s();\n    const { toggle, theme } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        onClick: toggle,\n        style: theme === \"dark\" ? {\n            backgroundColor: \"white\"\n        } : {\n            backgroundColor: \"#0f172a\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/moon.png\",\n                alt: \"\",\n                width: 14,\n                height: 14\n            }, void 0, false, {\n                fileName: \"/Users/tianyu/Desktop/myWebsite/src/components/ThemeToggle/ThemeToggle.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_themeToggle_module_css__WEBPACK_IMPORTED_MODULE_4___default().ball),\n                style: theme === \"dark\" ? {\n                    left: 1,\n                    background: \"#0f172a\"\n                } : {\n                    right: 1,\n                    background: \"white\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/tianyu/Desktop/myWebsite/src/components/ThemeToggle/ThemeToggle.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/sun.png\",\n                alt: \"\",\n                width: 14,\n                height: 14\n            }, void 0, false, {\n                fileName: \"/Users/tianyu/Desktop/myWebsite/src/components/ThemeToggle/ThemeToggle.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tianyu/Desktop/myWebsite/src/components/ThemeToggle/ThemeToggle.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ThemeToggle, \"z1CWl1pxBwPzNJ8rUZ1MoGSdKmg=\");\n_c = ThemeToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggle);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RoZW1lVG9nZ2xlL1RoZW1lVG9nZ2xlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUrQjtBQUNlO0FBQ1g7QUFDbUI7QUFFdEQsTUFBTUksY0FBYzs7SUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHSixpREFBVUEsQ0FBQ0MsK0RBQVlBO0lBRWpELHFCQUNFLDhEQUFDSTtRQUNDQyxXQUFXUCwwRUFBZ0I7UUFDM0JTLFNBQVNMO1FBQ1RNLE9BQ0VMLFVBQVUsU0FBUztZQUFFTSxpQkFBaUI7UUFBUSxJQUFJO1lBQUVBLGlCQUFpQjtRQUFVOzswQkFHakYsOERBQUNaLG1EQUFLQTtnQkFBQ2EsS0FBSTtnQkFBWUMsS0FBSTtnQkFBR0MsT0FBTztnQkFBSUMsUUFBUTs7Ozs7OzBCQUNqRCw4REFBQ1Q7Z0JBQ0NDLFdBQVdQLHFFQUFXO2dCQUN0QlUsT0FDRUwsVUFBVSxTQUNOO29CQUFFWSxNQUFNO29CQUFHQyxZQUFZO2dCQUFVLElBQ2pDO29CQUFFQyxPQUFPO29CQUFHRCxZQUFZO2dCQUFROzs7Ozs7MEJBR3hDLDhEQUFDbkIsbURBQUtBO2dCQUFDYSxLQUFJO2dCQUFXQyxLQUFJO2dCQUFHQyxPQUFPO2dCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7QUFHdEQ7R0F2Qk1aO0tBQUFBO0FBeUJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RoZW1lVG9nZ2xlL1RoZW1lVG9nZ2xlLmpzeD9mMmQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGhlbWVUb2dnbGUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9UaGVtZUNvbnRleHRcIjtcblxuY29uc3QgVGhlbWVUb2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9nZ2xlLCB0aGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgc3R5bGU9e1xuICAgICAgICB0aGVtZSA9PT0gXCJkYXJrXCIgPyB7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gOiB7IGJhY2tncm91bmRDb2xvcjogXCIjMGYxNzJhXCIgfVxuICAgICAgfVxuICAgID5cbiAgICAgIDxJbWFnZSBzcmM9XCIvbW9vbi5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MTR9IGhlaWdodD17MTR9IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9XG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICB0aGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgICAgID8geyBsZWZ0OiAxLCBiYWNrZ3JvdW5kOiBcIiMwZjE3MmFcIiB9XG4gICAgICAgICAgICA6IHsgcmlnaHQ6IDEsIGJhY2tncm91bmQ6IFwid2hpdGVcIiB9XG4gICAgICAgIH1cbiAgICAgID48L2Rpdj5cbiAgICAgIDxJbWFnZSBzcmM9XCIvc3VuLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lVG9nZ2xlO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIlRoZW1lVG9nZ2xlIiwidG9nZ2xlIiwidGhlbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJhbGwiLCJsZWZ0IiwiYmFja2dyb3VuZCIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ThemeToggle/ThemeToggle.jsx\n"));

/***/ })

});