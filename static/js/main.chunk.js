(this["webpackJsonpreactapp"] = this["webpackJsonpreactapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/sudoku.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/css/sudoku.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**author: Steven Z April 18th 2021*/\n/*Following BEM naming convention*/\n.body {\n    display: flex;\n}\n\n.body__main {\n    flex-direction: row;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n\n.body__main .body__main__desc {\n    width: 30%;\n    line-height: 160%;\n    font-size: 14px;\n    padding: 10px;\n}\n\n.root {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.board {\n    display: flex;\n    flex-direction: column;\n}\n\n.board  .board__squareRows {\n    flex-direction: row;\n    display: flex;\n    width: 100%;\n}\n\n.board .board__squareRows .board__squareRows__square {\n   width: 30px;\n   height: 30px;\n   font-size: 25px;\n   text-align: center;\n   font-family: sans-serif;\n   color: #435f43;\n}\n\n.board .board__squareRows .board__squareRows__square.board__squareRows__square--highlighted.board__squareRows__square--solvedValue {\n    color: rgb(144, 144, 218);\n}\n\n.board .board__squareRows .board__squareRows__square.board__squareRows__square--solvedValue {\n    color: rgb(144, 144, 218);\n}\n\n.board .board__squareRows .board__squareRows__square.board__squareRows__square--highlighted{\n    background-color: #c5f1c5;\n}\n\n.board .board__controls {\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    border-width: 1px;\n    border-color: lightgrey;\n}\n\n.board .board__controls .board_controls__infoLabel {\n    font-size: 16px;\n}\n\n.board .board__controls .board_controls__infoLabel.board_controls__infoLabel--warning {\n    border-color: red;\n    border-width: 1px;\n    border-style: solid;\n    color:#435f43\n}\n\n.board__controls section {\n    padding-top: 10px;\n    display:flex;\n    flex-direction: column;\n    font-family: fantasy;\n    height: 80px;\n    max-width: 340px;\n    min-width: 340px;\n    font-size: 16px;\n    border-bottom: solid;   \n}\n\n.board__controls section.autoPick{\n   flex-direction: row;\n   display: flex;\n   padding: 5px;\n   height: 40px;\n}\n\n.board__controls__inputButton {\n    border-radius: 6px;\n    background-color: green;\n    color:white;\n    font-size: 16px;\n    cursor: pointer;\n    justify-content: center;\n    align-content: center;\n    padding: 5px;\n}\n\n.board__controls__inputButton.board__controls__inputButton--small{\n    font-size: 13px;\n    padding: 2px;\n}\n\n\n.board__controls__inputButton.board__controls__inputButton--solve {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.section__splitter {\n    height: 1px;\n    color: lightgreen;\n}\n\n", "",{"version":3,"sources":["webpack://src/css/sudoku.css"],"names":[],"mappings":"AAAA,oCAAoC;AACpC,kCAAkC;AAClC;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;;AAGA;IACI,UAAU;IACV,iBAAiB;IACjB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,WAAW;AACf;;AAEA;GACG,WAAW;GACX,YAAY;GACZ,eAAe;GACf,kBAAkB;GAClB,uBAAuB;GACvB,cAAc;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB;AACJ;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,sBAAsB;IACtB,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,oBAAoB;AACxB;;AAEA;GACG,mBAAmB;GACnB,aAAa;GACb,YAAY;GACZ,YAAY;AACf;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,eAAe;IACf,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;;AAGA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB","sourcesContent":["/**author: Steven Z April 18th 2021*/\n/*Following BEM naming convention*/\n.body {\n    display: flex;\n}\n\n.body__main {\n    flex-direction: row;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n\n.body__main .body__main__desc {\n    width: 30%;\n    line-height: 160%;\n    font-size: 14px;\n    padding: 10px;\n}\n\n.root {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.board {\n    display: flex;\n    flex-direction: column;\n}\n\n.board  .board__squareRows {\n    flex-direction: row;\n    display: flex;\n    width: 100%;\n}\n\n.board .board__squareRows .board__squareRows__square {\n   width: 30px;\n   height: 30px;\n   font-size: 25px;\n   text-align: center;\n   font-family: sans-serif;\n   color: #435f43;\n}\n\n.board .board__squareRows .board__squareRows__square.board__squareRows__square--highlighted.board__squareRows__square--solvedValue {\n    color: rgb(144, 144, 218);\n}\n\n.board .board__squareRows .board__squareRows__square.board__squareRows__square--solvedValue {\n    color: rgb(144, 144, 218);\n}\n\n.board .board__squareRows .board__squareRows__square.board__squareRows__square--highlighted{\n    background-color: #c5f1c5;\n}\n\n.board .board__controls {\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    border-width: 1px;\n    border-color: lightgrey;\n}\n\n.board .board__controls .board_controls__infoLabel {\n    font-size: 16px;\n}\n\n.board .board__controls .board_controls__infoLabel.board_controls__infoLabel--warning {\n    border-color: red;\n    border-width: 1px;\n    border-style: solid;\n    color:#435f43\n}\n\n.board__controls section {\n    padding-top: 10px;\n    display:flex;\n    flex-direction: column;\n    font-family: fantasy;\n    height: 80px;\n    max-width: 340px;\n    min-width: 340px;\n    font-size: 16px;\n    border-bottom: solid;   \n}\n\n.board__controls section.autoPick{\n   flex-direction: row;\n   display: flex;\n   padding: 5px;\n   height: 40px;\n}\n\n.board__controls__inputButton {\n    border-radius: 6px;\n    background-color: green;\n    color:white;\n    font-size: 16px;\n    cursor: pointer;\n    justify-content: center;\n    align-content: center;\n    padding: 5px;\n}\n\n.board__controls__inputButton.board__controls__inputButton--small{\n    font-size: 13px;\n    padding: 2px;\n}\n\n\n.board__controls__inputButton.board__controls__inputButton--solve {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.section__splitter {\n    height: 1px;\n    color: lightgreen;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/sudoku.css":
/*!****************************!*\
  !*** ./src/css/sudoku.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./sudoku.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/sudoku.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./sudoku.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/sudoku.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./sudoku.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/sudoku.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_sudoku_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/sudoku.css */ "./src/css/sudoku.css");
/* harmony import */ var _css_sudoku_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_sudoku_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_gameComponentModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/gameComponentModule */ "./src/js/gameComponentModule.js");
/* harmony import */ var _js_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/reportWebVitals */ "./src/js/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/steven/projects/reactapp/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_js_gameComponentModule__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_js_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/boardComponentModule.js":
/*!****************************************!*\
  !*** ./src/js/boardComponentModule.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoardComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sudokuModule.js */ "./src/js/sudokuModule.js");
/* harmony import */ var _puzzleModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzleModule.js */ "./src/js/puzzleModule.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/steven/projects/reactapp/src/js/boardComponentModule.js";

/**
 *@author StevenZCA
 *Date April 18th 2021
 *Description:
 *A reusable React component that renders an interactive or read only mode sudoku board   
 */




class BoardComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * state.values holds the collection of values for each square
   * state.filledIndex holds the collection of indices for squares to be solved
   */
  constructor(props) {
    super(props); //initial state.values is an array of 81 '.'s

    const initialValues = this.props.isInteractive ? this._getRandomPuzzle() : new Array(81).fill('.').join('');
    this.state = {
      values: initialValues
    };

    if (this.props.setValues) {
      this.props.setValues(initialValues);
    }
  }

  render() {
    return this.renderBoardSetup();
  }

  _renderCell(i, j, index, squareValues) {
    let value = Array.from(squareValues)[index];
    let isSolvedValue = false;

    if (value) {
      value = value.split('').shift();
    }

    if (this.props.filledIndex && this.props.filledIndex.indexOf(index) !== -1) {
      isSolvedValue = true;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        maxLength: "1",
        className: this.getSquareClassName(_sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__["rows"][i], _sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__["cols"][j], isSolvedValue),
        value: value && value !== '.' ? value : '',
        onKeyPress: this._onSquareInputPress.bind(this),
        onChange: this._onSquareInputChange.bind(this),
        index: index,
        id: `${_sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__["rows"][i]}${_sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__["cols"][j]}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, `${_sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__["rows"][i]}${_sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__["cols"][j]}`, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this);
  }
  /*
   * Only accepts key press event that for key '1' to key '9'
   */


  _onSquareInputPress(evt) {
    if (!this.props.isInteractive || evt.which != 8 && evt.which != 0 && (evt.which < 49 || evt.which > 57)) {
      evt.preventDefault(); //only Allow 1 to 9
    }
  }
  /*
   * Update React State this.state.values when a number is input on any square
   */


  _onSquareInputChange(evt) {
    const index = evt.target.attributes.index.value;
    const newValues = Array.from(this.state.values);
    newValues[index] = evt.target.value === '' ? '.' : evt.target.value;
    const newValuesString = newValues.join('');
    this.setState({
      values: newValuesString
    });
  }

  _onAutoPickClick() {
    this.setState({
      values: this._getRandomPuzzle()
    });
    this.setState({
      filledIndex: []
    });
  }

  _getRandomPuzzle() {
    const index = Math.floor(Math.random() * _puzzleModule_js__WEBPACK_IMPORTED_MODULE_2__["puzzles"].length) % _puzzleModule_js__WEBPACK_IMPORTED_MODULE_2__["puzzles"].length;
    return _puzzleModule_js__WEBPACK_IMPORTED_MODULE_2__["puzzles"][index];
  }

  _renderControls() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "board__controls",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
          className: "board__controls__inputButton board__controls__inputButton--solve",
          id: "sudokuResetBtn",
          type: "button",
          value: "Reset",
          onClick: this.reset.bind(this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        className: "autoPick",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
          children: "Method 1:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            className: "board__controls__inputButton",
            type: "button",
            value: "Pick a random puzzle",
            onClick: this._onAutoPickClick.bind(this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
          children: "Method 2: Select a puzzle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this), this._renderPuzzlesList(_puzzleModule_js__WEBPACK_IMPORTED_MODULE_2__["puzzles"])]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
          children: "Method 3: input your own"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
          className: "board__controls__userInput",
          onChange: this._onUserInputChange.bind(this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
          className: "board_controls__infoLabel",
          children: "Performance benchmark: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "performanceBenchmark"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, this);
  }

  _renderPuzzlesList(puzzles) {
    let index = 0;
    const options = puzzles.map(entry => {
      index++;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
        value: entry,
        children: entry
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }, this);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("select", {
      name: "Select a puzzle from the list",
      id: "puzzles",
      onChange: this._onPuzzleChange.bind(this),
      children: [...[/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
        value: null,
        children: "None"
      }, index + 1, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 23
      }, this)], ...options]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, this);
  }

  _onPuzzleChange(evt) {
    if (evt.target.value && evt.target.value !== 'None') {
      this.setState({
        'values': evt.target.value
      });
    } else {
      this.reset();
    }
  }

  _loadFromInput() {
    const userInput = document.querySelector('.board__controls__userInput').value;

    if (userInput.trim().length > 0) {
      this.setState({
        values: userInput
      });
    }
  }

  _onUserInputChange(evt) {
    const userInput = evt.target.value;
    this.setState({
      values: userInput
    });
  }

  componentDidUpdate() {
    if (this.props.setValues) {
      this.props.setValues(this.state.values);
    }
  }
  /**
   * @description 
   * Highlight 3x3 square for best user experience
   * 
   */


  getSquareClassName(rowEle, colEle, isSolvedValue) {
    const squares = [];
    squares.push({
      rows: ['A', 'B', 'C'],
      cols: ['1', '2', '3']
    });
    squares.push({
      rows: ['A', 'B', 'C'],
      cols: ['7', '8', '9']
    });
    squares.push({
      rows: ['D', 'E', 'F'],
      cols: ['4', '5', '6']
    });
    squares.push({
      rows: ['G', 'H', 'I'],
      cols: ['1', '2', '3']
    });
    squares.push({
      rows: ['G', 'H', 'I'],
      cols: ['7', '8', '9']
    });
    let highlightBG = '';

    if (squares.some(ele => ele.rows.indexOf(rowEle) >= 0 && ele.cols.indexOf(colEle) >= 0)) {
      highlightBG = ' board__squareRows__square--highlighted';
    }

    if (isSolvedValue) {
      highlightBG = highlightBG + ' board__squareRows__square--solvedValue';
    }

    return `board__squareRows__square${highlightBG}`;
  }
  /**
   * @description 
   * Create the JSX markups for all 9x9 squares.
   * Each square contains an HTML input with a unique ID.
   * 
   * The ID is composed by an element from Rows below and an element from the 
   * cols below. For instance 'A1' OR 'H8' etc.
   * 
   * rows = ['A','B','C','D','E','F','G','H','I'];
   * cols = ['1','2','3','4','5','6','7','8','9'];
   * 
   * @return JSX that represent  all 9x9 squares 
   */


  renderBoardSetup() {
    if (this.props.values && this.props.values.length === 0) {
      return null;
    }

    const displayRows = [];
    let index = 0;

    for (let i = 0; i < _sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__["rows"].length; i++) {
      const displayCols = [];

      for (let j = 0; j < _sudokuModule_js__WEBPACK_IMPORTED_MODULE_1__["cols"].length; j++) {
        displayCols.push(this._renderCell(i, j, index, this.props.values || this.state.values));
        index++;
      }

      displayRows.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "board__squareRows",
        children: displayCols
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }, this));
    }

    let controls = null;

    if (this.props.isInteractive === true) {
      controls = this._renderControls();
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "board",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: displayRows
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, this), controls]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }, this);
  }

  reset() {
    this.setState({
      values: new Array(81).fill('.').join('')
    });
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/gameComponentModule.js":
/*!***************************************!*\
  !*** ./src/js/gameComponentModule.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameComponent; });
/* harmony import */ var _puzzleModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzleModule */ "./src/js/puzzleModule.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sudokuModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sudokuModule */ "./src/js/sudokuModule.js");
/* harmony import */ var _boardComponentModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardComponentModule */ "./src/js/boardComponentModule.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/steven/projects/reactapp/src/js/gameComponentModule.js";

/**
 *@author StevenZCA
 *@description
 *Date April 18th 2021
 *Description:
 *A React component the works as a container component of two BoardComponent
 *that demonstrates the sudoku solver
 */





class GameComponent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  /**
   * state.values holds the collection of values for each square
   * state.filledIndex holds the collection of indices for squares to be solved
   */
  constructor(props) {
    super(props); //initial state.values is an array of 81 '.'s

    this.state = {
      values: new Array(81).fill('.').join(''),
      filledIndex: [],
      solvedValues: []
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        "display": "flex",
        "flexDirection": "row"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_boardComponentModule__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isInteractive: true,
        setValues: this._setValue.bind(this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "board__controls__inputButton board__controls__inputButton--solve",
            id: "sudokuSolveBtn",
            type: "button",
            value: "Solve it!",
            onClick: this.solve.bind(this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_boardComponentModule__WEBPACK_IMPORTED_MODULE_3__["default"], {
        values: this.state.solvedValues,
        filledIndex: this.state.filledIndex
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this);
  }

  _setValue(values) {
    this.boardSetup = values;
  }

  solve() {
    const infoLabelEle = document.querySelector('.board_controls__infoLabel');

    if (!this.boardSetup || this.boardSetup.trim().length === 0 || this.boardSetup.split('').every(ele => ele === '.')) {
      infoLabelEle.classList.add('board_controls__infoLabel--warning');
      infoLabelEle.innerHTML = 'Please set up the initial board.';
      return;
    }

    const startTime = performance.now();
    const solved = Object(_sudokuModule__WEBPACK_IMPORTED_MODULE_2__["search"])(Object(_sudokuModule__WEBPACK_IMPORTED_MODULE_2__["parse_grid"])(this.boardSetup));
    const endTime = performance.now();

    if (!solved) {
      infoLabelEle.classList.add('board_controls__infoLabel--warning');
      infoLabelEle.innerHTML = 'No solution found! It might be due to invalid input';
      return;
    } else {
      infoLabelEle.classList.remove('board_controls__infoLabel--warning');
      infoLabelEle.innerHTML = `Time used ${endTime - startTime} ms`;
      let index = 0;
      const values = [];
      const filledIndex = [];

      for (const squareID in solved) {
        if (this.boardSetup.split('')[index] === '.') {
          filledIndex.push(index);
        }

        values[index] = solved[squareID];
        index++;
      }

      this.setState({
        solvedValues: values.join('')
      });
      this.setState({
        filledIndex: filledIndex
      });
    }

    ;
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/puzzleModule.js":
/*!********************************!*\
  !*** ./src/js/puzzleModule.js ***!
  \********************************/
/*! exports provided: puzzles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "puzzles", function() { return puzzles; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const puzzles = ["4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......", "52...6.........7.13...........4..8..6......5...........418.........3..2...87.....", "6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....", "48.3............71.2.......7.5....6....2..8.............1.76...3.....4......5....", "....14....3....2...7..........9...3.6.1.............8.2.....1.4....5.6.....7.8...", "......52..8.4......3...9...5.1...6..2..7........3.....6...1..........7.4.......3.", "6.2.5.........3.4..........43...8....1....2........7..5..27...........81...6.....", ".524.........7.1..............8.2...3.....6...9.5.....1.6.3...........897........", "6.2.5.........4.3..........43...8....1....2........7..5..27...........81...6.....", ".923.........8.1...........1.7.4...........658.........6.5.2...4.....7.....9.....", "6..3.2....5.....1..........7.26............543.........8.15........4.2........7..", ".6.5.1.9.1...9..539....7....4.8...7.......5.8.817.5.3.....5.2............76..8...", "..5...987.4..5...1..7......2...48....9.1.....6..2.....3..6..2.......9.7.......5..", "3.6.7...........518.........1.4.5...7.....6.....2......2.....4.....8.3.....5.....", "1.....3.8.7.4..............2.3.1...........958.........5.6...7.....8.2...4.......", "6..3.2....4.....1..........7.26............543.........8.15........4.2........7..", "....3..9....2....1.5.9..............1.2.8.4.6.8.5...2..75......4.1..6..3.....4.6.", "45.....3....8.1....9...........5..9.2..7.....8.........1..4..........7.2...6..8..", ".237....68...6.59.9.....7......4.97.3.7.96..2.........5..47.........2....8.......", "..84...3....3.....9....157479...8........7..514.....2...9.6...2.5....4......9..56", ".98.1....2......6.............3.2.5..84.........6.........4.8.93..5...........1..", "..247..58..............1.4.....2...9528.9.4....9...1.........3.3....75..685..2...", "4.....8.5.3..........7......2.....6.....5.4......1.......6.3.7.5..2.....1.9......", ".2.3......63.....58.......15....9.3....7........1....8.879..26......6.7...6..7..4", "1.....7.9.4...72..8.........7..1..6.3.......5.6..4..2.........8..53...7.7.2....46", "4.....3.....8.2......7........1...8734.......6........5...6........1.4...82......", ".......71.2.8........4.3...7...6..5....2..3..9........6...7.....8....4......5....", "6..3.2....4.....8..........7.26............543.........8.15........8.2........7..", ".47.8...1............6..7..6....357......5....1..6....28..4.....9.1...4.....2.69.", "......8.17..2........5.6......7...5..1....3...8.......5......2..4..8....6...3....", "38.6.......9.......2..3.51......5....3..1..6....4......17.5..8.......9.......7.32", "...5...........5.697.....2...48.2...25.1...3..8..3.........4.7..13.5..9..2...31..", ".2.......3.5.62..9.68...3...5..........64.8.2..47..9....3.....1.....6...17.43....", ".8..4....3......1........2...5...4.69..1..8..2...........3.9....6....5.....2.....", "..8.9.1...6.5...2......6....3.1.7.5.........9..4...3...5....2...7...3.8.2..7....4", "4.....5.8.3..........7......2.....6.....5.8......1.......6.3.7.5..2.....1.8......", "1.....3.8.6.4..............2.3.1...........958.........5.6...7.....8.2...4.......", "1....6.8..64..........4...7....9.6...7.4..5..5...7.1...5....32.3....8...4........", "249.6...3.3....2..8.......5.....6......2......1..4.82..9.5..7....4.....1.7...3...", "...8....9.873...4.6..7.......85..97...........43..75.......3....3...145.4....2..1", "...5.1....9....8...6.......4.1..........7..9........3.8.....1.5...2..4.....36....", "......8.16..2........7.5......6...2..1....3...8.......2......7..3..8....5...4....", ".476...5.8.3.....2.....9......8.5..6...1.....6.24......78...51...6....4..9...4..7", ".....7.95.....1...86..2.....2..73..85......6...3..49..3.5...41724................", ".4.5.....8...9..3..76.2.....146..........9..7.....36....1..4.5..6......3..71..2..", ".834.........7..5...........4.1.8..........27...3.....2.6.5....5.....8........1..", "..9.....3.....9...7.....5.6..65..4.....3......28......3..75.6..6...........12.3.8", ".26.39......6....19.....7.......4..9.5....2....85.....3..2..9..4....762.........4", "2.3.8....8..7...........1...6.5.7...4......3....1............82.5....6...1.......", "6..3.2....1.....5..........7.26............843.........8.15........8.2........7..", "1.....9...64..1.7..7..4.......3.....3.89..5....7....2.....6.7.9.....4.1....129.3.", ".........9......84.623...5....6...453...1...6...9...7....1.....4.5..2....3.8....9", ".2....5938..5..46.94..6...8..2.3.....6..8.73.7..2.........4.38..7....6..........5", "9.4..5...25.6..1..31......8.7...9...4..26......147....7.......2...3..8.6.4.....9.", "...52.....9...3..4......7...1.....4..8..453..6...1...87.2........8....32.4..8..1.", "53..2.9...24.3..5...9..........1.827...7.........981.............64....91.2.5.43.", "1....786...7..8.1.8..2....9........24...1......9..5...6.8..........5.9.......93.4", "....5...11......7..6.....8......4.....9.1.3.....596.2..8..62..7..7......3.5.7.2..", ".47.2....8....1....3....9.2.....5...6..81..5.....4.....7....3.4...9...1.4..27.8..", "......94.....9...53....5.7..8.4..1..463...........7.8.8..7.....7......28.5.26....", ".2......6....41.....78....1......7....37.....6..412....1..74..5..8.5..7......39..", "1.....3.8.6.4..............2.3.1...........758.........7.5...6.....8.2...4.......", "2....1.9..1..3.7..9..8...2.......85..6.4.........7...3.2.3...6....5.....1.9...2.5", "..7..8.....6.2.3...3......9.1..5..6.....1.....7.9....2........4.83..4...26....51.", "...36....85.......9.4..8........68.........17..9..45...1.5...6.4....9..2.....3...", "34.6.......7.......2..8.57......5....7..1..2....4......36.2..1.......9.......7.82", "......4.18..2........6.7......8...6..4....3...1.......6......2..5..1....7...3....", ".4..5..67...1...4....2.....1..8..3........2...6...........4..5.3.....8..2........", ".......4...2..4..1.7..5..9...3..7....4..6....6..1..8...2....1..85.9...6.....8...3", "8..7....4.5....6............3.97...8....43..5....2.9....6......2...6...7.71..83.2", ".8...4.5....7..3............1..85...6.....2......4....3.26............417........", "....7..8...6...5...2...3.61.1...7..2..8..534.2..9.......2......58...6.3.4...1....", "......8.16..2........7.5......6...2..1....3...8.......2......7..4..8....5...3....", ".2..........6....3.74.8.........3..2.8..4..1.6..5.........1.78.5....9..........4.", ".52..68.......7.2.......6....48..9..2..41......1.....8..61..38.....9...63..6..1.9", "....1.78.5....9..........4..2..........6....3.74.8.........3..2.8..4..1.6..5.....", "1.......3.6.3..7...7...5..121.7...9...7........8.1..2....8.64....9.2..6....4.....", "4...7.1....19.46.5.....1......7....2..2.3....847..6....14...8.6.2....3..6...9....", "......8.17..2........5.6......7...5..1....3...8.......5......2..3..8....6...4....", "963......1....8......2.5....4.8......1....7......3..257......3...9.2.4.7......9..", "15.3......7..4.2....4.72.....8.........9..1.8.1..8.79......38...........6....7423", "..........5724...98....947...9..3...5..9..12...3.1.9...6....25....56.....7......6", "....75....1..2.....4...3...5.....3.2...8...1.......6.....1..48.2........7........", "6.....7.3.4.8.................5.4.8.7..2.....1.3.......2.....5.....7.9......1....", "....6...4..6.3....1..4..5.77.....8.5...8.....6.8....9...2.9....4....32....97..1..", ".32.....58..3.....9.428...1...4...39...6...5.....1.....2...67.8.....4....95....6.", "...5.3.......6.7..5.8....1636..2.......4.1.......3...567....2.8..4.7.......2..5..", ".5.3.7.4.1.........3.......5.8.3.61....8..5.9.6..1........4...6...6927....2...9..", "..5..8..18......9.......78....4.....64....9......53..2.6.........138..5....9.714.", "..........72.6.1....51...82.8...13..4.........37.9..1.....238..5.4..9.........79.", "...658.....4......12............96.7...3..5....2.8...3..19..8..3.6.....4....473..", ".2.3.......6..8.9.83.5........2...8.7.9..5........6..4.......1...1...4.22..7..8.9", ".5..9....1.....6.....3.8.....8.4...9514.......3....2..........4.8...6..77..15..6.", ".....2.......7...17..3...9.8..7......2.89.6...13..6....9..5.824.....891..........", "3...8.......7....51..............36...2..4....7...........6.13..452...........8.."];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/reportWebVitals.js":
/*!***********************************!*\
  !*** ./src/js/reportWebVitals.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/sudokuModule.js":
/*!********************************!*\
  !*** ./src/js/sudokuModule.js ***!
  \********************************/
/*! exports provided: createSquares, rows, cols, parse_grid, search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSquares", function() { return createSquares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rows", function() { return rows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cols", function() { return cols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_grid", function() { return parse_grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

//var test_grid1 = "003020600900305001001806400008102900700000008006708200002609500800203009005010300";
//var test_grid2 = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";
function createSquares(rows, cols) {
  const squares = [];

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      squares.push(rows[i] + cols[j]);
    }
  }

  return squares;
}

function member(item, list) {
  for (var i in list) if (item == list[i]) return true;

  return false;
}

let rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
let cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var digits = "123456789";
var squares = createSquares(rows, cols);
var nassigns = 0;
var neliminations = 0;
var nsearches = 0;
var unitlist = [];

for (var c in cols) unitlist.push(createSquares(rows, [cols[c]]));

for (var r in rows) unitlist.push(createSquares([rows[r]], cols));

var rrows = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']];
var ccols = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

for (var rs in rrows) for (var cs in ccols) unitlist.push(createSquares(rrows[rs], ccols[cs]));

var units = {};

for (var s in squares) {
  units[squares[s]] = [];

  for (var u in unitlist) if (member(squares[s], unitlist[u])) units[squares[s]].push(unitlist[u]);
}

var peers = {};

for (var s in squares) {
  peers[squares[s]] = {};

  for (var u in units[squares[s]]) {
    var ul = units[squares[s]][u];

    for (var s2 in ul) if (ul[s2] != squares[s]) peers[squares[s]][ul[s2]] = true;
  }
}

function parse_grid(grid) {
  if (!grid || grid.trim().length === 0) {
    return {};
  }

  nassigns = 0;
  neliminations = 0;
  nsearches = 0;
  var grid2 = "";

  for (var c = 0; c < grid.length; c++) if ("0.-123456789".indexOf(grid.charAt(c)) >= 0) grid2 += grid.charAt(c);

  var values = {};

  for (var s in squares) values[squares[s]] = digits;

  for (var s in squares) if (digits.indexOf(grid2.charAt(s)) >= 0 && !assign(values, squares[s], grid2.charAt(s))) return false;

  return values;
}

function assign(values, sq, dig) {
  // Eliminate all the other values (except dig) from values[sq] and propagate.
  ++nassigns;
  var result = true;
  var vals = values[sq];

  for (var d = 0; d < vals.length; d++) if (vals.charAt(d) != dig) result &= eliminate(values, sq, vals.charAt(d)) ? true : false;

  return result ? values : false;
}

function eliminate(values, sq, dig) {
  ++neliminations;
  if (values[sq].indexOf(dig) == -1) // already eliminated.
    return values;
  values[sq] = values[sq].replace(dig, "");
  if (values[sq].length == 0) // invalid input ?
    return false;else if (values[sq].length == 1) {
    // If there is only one value (values[sq]) left in square, remove it from peers
    var result = true;

    for (var s in peers[sq]) result &= eliminate(values, s, values[sq]) ? true : false;

    if (!result) return false;
  }

  for (var u in units[sq]) {
    var dplaces = [];

    for (var s in units[sq][u]) {
      var sq2 = units[sq][u][s];
      if (values[sq2].indexOf(dig) != -1) dplaces.push(sq2);
    }

    if (dplaces.length == 0) return false;else if (dplaces.length == 1) if (!assign(values, dplaces[0], dig)) return false;
  }

  return values;
}

function dup(obj) {
  var d = {};

  for (var f in obj) d[f] = obj[f];

  return d;
}

function search(values) {
  ++nsearches;

  if (!values) {
    return false;
  } else if (Object.keys(values).length === 0) {
    return false;
  }

  var min = 10,
      max = 1,
      sq = null;

  for (var s in squares) {
    if (values[squares[s]].length > max) max = values[squares[s]].length;

    if (values[squares[s]].length > 1 && values[squares[s]].length < min) {
      min = values[squares[s]].length;
      sq = squares[s];
    }
  }

  if (max == 1) return values;

  for (var d = 0; d < values[sq].length; d++) {
    var res = search(assign(dup(values), sq, values[sq].charAt(d)));
    if (res) return res;
  }

  return false;
}

function center(s, w) {
  var excess = w - s.length;

  while (excess > 0) {
    if (excess % 2) s += " ";else s = " " + s;
    excess -= 1;
  }

  return s;
}

function board_string(values) {
  // Used for debugging
  var width = 0;
  console.log(squares.toString() + " test!");
  console.log(values.toString() + " test!");

  for (var s in squares) if (values[squares[s]].length > width) width = values[squares[s]].length;

  width += 1;
  var seg = "";

  for (var i = 0; i < width; i++) seg += "---";

  var line = "\n" + [seg, seg, seg].join("+");
  var board = "";

  for (var r in rows) {
    for (var c in cols) {
      board += center(values[rows[r] + cols[c]], width);
      if (c == 2 || c == 5) board += "|";
    }

    if (r == 2 || r == 5) board += line;
    board += "\n";
  }

  board += "\n";
  return board;
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/steven/projects/reactapp/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/steven/projects/reactapp/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/steven/projects/reactapp/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/steven/projects/reactapp/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map