var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/interface.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! exports provided: handleSelectionChangedBegin, handleSelectionChangedFinish, handleLayersMoved, handleTextChanged, handleScale, handleEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSelectionChangedBegin", function() { return handleSelectionChangedBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSelectionChangedFinish", function() { return handleSelectionChangedFinish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLayersMoved", function() { return handleLayersMoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTextChanged", function() { return handleTextChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScale", function() { return handleScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleEdit", function() { return handleEdit; });
/* harmony import */ var _lib_actionHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/actionHandler */ "./src/lib/actionHandler.js");

var handleSelectionChangedBegin = function handleSelectionChangedBegin(context) {// actionHandler(context.actionContext.document);
  // context.actionContext.document.showMessage("Selection Begin");
};
var handleSelectionChangedFinish = function handleSelectionChangedFinish(context) {
  Object(_lib_actionHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(context); // context.actionContext.document.showMessage("Selection Finish");
};
var handleLayersMoved = function handleLayersMoved(context) {
  Object(_lib_actionHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(context); // context.actionContext.document.showMessage("Layers Moved");
};
var handleTextChanged = function handleTextChanged(context) {// actionHandler(context.actionContext.document);
  // context.actionContext.document.showMessage("Text Changed");
};
var handleScale = function handleScale(context) {// actionHandler(context.actionContext.document);
  // context.actionContext.document.showMessage("Scale");
};
var handleEdit = function handleEdit(context) {// actionHandler(context.actionContext.document);
  // context.actionContext.document.showMessage("Edit");
};

/***/ }),

/***/ "./src/lib/actionHandler.js":
/*!**********************************!*\
  !*** ./src/lib/actionHandler.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constraintTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constraintTypes */ "./src/lib/constants/constraintTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var document = context.actionContext.document;
  var data = document.documentData();
  var command = context.command;
  var selectedLayer = sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Document"].fromNative(context.actionContext.document).selectedLayers.map(function (layer) {
    return layer;
  })[0];
  var positions = command.valueForKey_onDocument('positions', data);
  var constraints = command.valueForKey_onDocument('constraints', data); // If positions are recorded for the selected layers and it has moved in the x
  // or y direction...

  if (positions[selectedLayer.id] && positions[selectedLayer.id].x && positions[selectedLayer.id].x !== selectedLayer.frame.x || positions[selectedLayer.id] && positions[selectedLayer.id].y && positions[selectedLayer.id].y !== selectedLayer.frame.y) {
    // If constraints exist for the selected layer
    if (constraints[selectedLayer.id]) {
      var layerConstraints = constraints[selectedLayer.id];
      var layerConstraint = Object.keys(layerConstraints).map(function (constraintId) {
        return layerConstraints[constraintId];
      }).find(function (constraint) {
        return constraint.type.toString() == _constants_constraintTypes__WEBPACK_IMPORTED_MODULE_1__["DISTANCE"];
      });
      var layerConstrainedToId = layerConstraint.definition.from;
      var xPosition = selectedLayer.frame.x;
      var updatedLayerPosition = xPosition + 10; // Reposition layer

      var layerToMove = sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Document"].fromNative(context.actionContext.document).getLayerWithID(layerConstrainedToId);

      if (layerToMove) {
        layerToMove.frame.x = updatedLayerPosition;

        var updatedPositions = _objectSpread({}, positions, {
          [selectedLayer.id]: {
            x: selectedLayer.frame.x,
            y: selectedLayer.frame.y
          },
          [layerToMove]: {
            x: layerToMove.frame.x,
            y: layerToMove.frame.y
          }
        });

        command.setValue_forKey_onDocument(updatedPositions, 'positions', data);
      }
    }
  }
});

/***/ }),

/***/ "./src/lib/constants/constraintTypes.js":
/*!**********************************************!*\
  !*** ./src/lib/constants/constraintTypes.js ***!
  \**********************************************/
/*! exports provided: DISTANCE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISTANCE", function() { return DISTANCE; });
var DISTANCE = 'DISTANCE';

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['handleSelectionChangedBegin'] = __skpm_run.bind(this, 'handleSelectionChangedBegin');
that['handleSelectionChangedFinish'] = __skpm_run.bind(this, 'handleSelectionChangedFinish');
that['handleLayersMoved'] = __skpm_run.bind(this, 'handleLayersMoved');
that['handleTextChanged'] = __skpm_run.bind(this, 'handleTextChanged');
that['handleScale'] = __skpm_run.bind(this, 'handleScale');
that['handleEdit'] = __skpm_run.bind(this, 'handleEdit');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=interface.js.map