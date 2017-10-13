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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* unused harmony export multiply */
/* unused harmony export list */
function add() {
	var sum = 0, i = 0, args = arguments, l = args.length;
	console.log(' add fn');
	while (i < l) {
		sum += args[i++];
	}
	return sum;
}

function multiply() {
	var product = 1, i = 0, args = arguments, l = args.length;
	console.log(' multiply fn');
	while (i < l) {
		product *= args[i++];
	}
	return product;
}

function test(){
	var aa = 123;
	console.log(' test fn!!!');
}

// test();//压缩后代码包含test代码,如果此行被注释掉，则压缩的代码不包含test 函数代码
function list() {
	console.log(' list fn!!!');
	return Array.from(arguments);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library__ = __webpack_require__(2);



console.dir(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* add */]);
// add(1, 2);
// //add === library.reexportedAdd:true
// console.log(' library:',library, 'de:',de,add === library.reexportedAdd);
// library.reexportedMultiply(1, 2);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abc__ = __webpack_require__(3);
/* unused harmony reexport default */
/* unused harmony reexport b */
/* unused harmony reexport c */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* unused harmony reexport reexportedAdd */
/* unused harmony reexport reexportedMultiply */



//压缩后的代码里面不会有b,c的代码,也不会有multiply代码


console.warn(' b:',__WEBPACK_IMPORTED_MODULE_0__abc__["a" /* b */]);//压缩后的代码里面有b的代码
// console.warn('c:',c);//Uncaught ReferenceError: c is not defined
// console.warn(' reexportedMultiply:',reexportedMultiply) //Uncaught ReferenceError: reexportedMultiply is not defined

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export a */
/* harmony export (immutable) */ __webpack_exports__["a"] = b;
/* unused harmony export c */
function a() { console.log("a fn"); }
function b() { console.log("b fn"); }
function c() { console.log("c fn"); }

/***/ })
/******/ ]);