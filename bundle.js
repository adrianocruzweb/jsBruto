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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _funcoes = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n\n/*function soma(a,b){\r\n    return a + b;\r\n}*/\n\n/*const soma = (a=3,b=6) => a+b;\r\n\r\nconsole.log(soma(1));*/\n//não consegue dar um resultado porque não é parametro suficiente\n//console.log(soma());\n\n/*const usuario = {\r\n    nome:'Diego',\r\n    idade:23,\r\n    empresa:'RocketSeat'\r\n};\r\n\r\nconst {nome, ...resto} = usuario;\r\n\r\nconsole.log(nome);\r\nconsole.log(resto);*/\n\n/*const arr = [1,2,3,4,5];\r\n\r\nconst [a,b,...c] = arr;\r\n\r\nconsole.log(a);\r\nconsole.log(b);\r\nconsole.log(c);*/\n//Rest\n\n/*function soma(...params){//soma(a,b,...params)\r\n    return params.reduce((total,next)=>total+next);\r\n}\r\nconsole.log(soma(3,4,5));*/\n//Spread\n\n/*const arr1 = [1,2,3];\r\nconst arr2 = [4,5,6];\r\n\r\nconst arr3 = [...arr1, ...arr2];\r\n\r\nconsole.log(arr3);\r\n\r\nconst usuario1 = {\r\n    nome:'Adriano',\r\n    idade:32,\r\n    empresa:'Arquivoteca',\r\n};\r\n\r\nconst usuario2 = {...usuario1, nome: 'Diego'};\r\n\r\nconsole.log(usuario2);*/\n\n/*const nome = \"Adriano\";\r\nconst idade = 32;\r\n\r\nconsole.log(`Meu nome é ${nome} e tenho ${idade} anos.`);\r\n*/\n\n/*const nome = 'Adriano';\r\nconst idade = 32;\r\n\r\nconst usuario = {\r\n    nome,\r\n    idade,\r\n    empresa: 'arquivoteca',\r\n};\r\n\r\nconsole.log(usuario);*/\nconsole.log((0, _funcoes.soma)(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });