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
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/bj.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JqLmpwZz9iNDNhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYmouanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2VzL2JqLmpwZ1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(2);\n\nvar _layer = __webpack_require__(3);\n\nvar _layer2 = _interopRequireDefault(_layer);\n\nvar _bj = __webpack_require__(0);\n\nvar _bj2 = _interopRequireDefault(_bj);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  var NUM = 1;\n  alert(NUM);\n  console.log(_layer2.default);\n  var dom = document.getElementById('app');\n  var layer = new _layer2.default();\n  dom.innerHTML = layer.tpl({\n    name: 'john',\n    arr: ['apple', 'xiaomi', 'appo']\n  });\n  document.getElementById('bgDiv').style.width = '100px';\n  document.getElementById('bgDiv').style.height = '100px';\n  document.getElementById('bgDiv').style.border = '1px solid #000';\n  document.getElementById('bgDiv').style.backgroundColor = 'yellow';\n  //document.getElementById('bgDiv').style.background = 'url(http://static.fy13322.com/front/public/images/dqrcode.png?914052)';\n  //document.getElementById('bgDiv').style.background = 'url('+ url1 +')';\n  //document.getElementById('bgDiv').style.background = 'url(./images/bj.jpg)';\n  document.getElementById('bgDiv').style.background = 'url(' + __webpack_require__(0) + ')';\n};\n\nnew App();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/YmM2NiJdLCJuYW1lcyI6WyJBcHAiLCJOVU0iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJkb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGF5ZXIiLCJpbm5lckhUTUwiLCJ0cGwiLCJuYW1lIiwiYXJyIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLE1BQU0sU0FBTkEsR0FBTSxHQUFZO0FBQ3RCLE1BQU1DLE1BQU0sQ0FBWjtBQUNBQyxRQUFNRCxHQUFOO0FBQ0FFLFVBQVFDLEdBQVI7QUFDQSxNQUFJQyxNQUFNQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQVY7QUFDQSxNQUFJQyxRQUFRLHFCQUFaO0FBQ0FILE1BQUlJLFNBQUosR0FBZ0JELE1BQU1FLEdBQU4sQ0FBVTtBQUN4QkMsVUFBTSxNQURrQjtBQUV4QkMsU0FBSyxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE1BQXBCO0FBRm1CLEdBQVYsQ0FBaEI7QUFJQU4sV0FBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ00sS0FBakMsQ0FBdUNDLEtBQXZDLEdBQStDLE9BQS9DO0FBQ0FSLFdBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNNLEtBQWpDLENBQXVDRSxNQUF2QyxHQUFnRCxPQUFoRDtBQUNBVCxXQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDTSxLQUFqQyxDQUF1Q0csTUFBdkMsR0FBZ0QsZ0JBQWhEO0FBQ0FWLFdBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNNLEtBQWpDLENBQXVDSSxlQUF2QyxHQUF5RCxRQUF6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBWCxXQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDTSxLQUFqQyxDQUF1Q0ssVUFBdkMsR0FBb0QsU0FBUSxtQkFBQUMsQ0FBUSxDQUFSLENBQVIsR0FBb0MsR0FBeEY7QUFDRCxDQWxCRDs7QUFvQkEsSUFBSW5CLEdBQUoiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXllci9sYXllci5qcyc7XG5pbXBvcnQgdXJsMSBmcm9tICcuLi9pbWFnZXMvYmouanBnJ1xuY29uc3QgQXBwID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBOVU0gPSAxO1xuICBhbGVydChOVU0pO1xuICBjb25zb2xlLmxvZyhMYXllcik7XG4gIHZhciBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gIHZhciBsYXllciA9IG5ldyBMYXllcigpO1xuICBkb20uaW5uZXJIVE1MID0gbGF5ZXIudHBsKHtcbiAgICBuYW1lOiAnam9obicsXG4gICAgYXJyOiBbJ2FwcGxlJywgJ3hpYW9taScsICdhcHBvJ11cbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZ0RpdicpLnN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnRGl2Jykuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnRGl2Jykuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjMDAwJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnRGl2Jykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnRGl2Jykuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoaHR0cDovL3N0YXRpYy5meTEzMzIyLmNvbS9mcm9udC9wdWJsaWMvaW1hZ2VzL2RxcmNvZGUucG5nPzkxNDA1MiknO1xuICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZ0RpdicpLnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcrIHVybDEgKycpJztcbiAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdEaXYnKS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCguL2ltYWdlcy9iai5qcGcpJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnRGl2Jykuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJysgcmVxdWlyZShcIi4uL2ltYWdlcy9iai5qcGdcIikrJyknO1xufVxuXG5uZXcgQXBwKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LmNzcz9jMTA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _layer = __webpack_require__(4);\n\nvar _layer2 = _interopRequireDefault(_layer);\n\n__webpack_require__(5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction layer() {\n    return {\n        name: 'layer',\n        tpl: _layer2.default\n    };\n}\n\nexports.default = layer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXllci9sYXllci5qcz83Nzc5Il0sIm5hbWVzIjpbImxheWVyIiwibmFtZSIsInRwbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLFNBQVNBLEtBQVQsR0FBa0I7QUFDZCxXQUFPO0FBQ0hDLGNBQU0sT0FESDtBQUVIQztBQUZHLEtBQVA7QUFJSDs7a0JBRWNGLEsiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cGwgZnJvbSAnLi9sYXllci50cGwnXG5pbXBvcnQgJy4vbGF5ZXIubGVzcydcblxuZnVuY3Rpb24gbGF5ZXIgKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdsYXllcicsXG4gICAgICAgIHRwbDogdHBsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsYXllcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xheWVyL2xheWVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function (obj) {\nobj || (obj = {});\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\nwith (obj) {\n__p += '<div class=\"layer\">\\n    <img src=\"' +\n((__t = ( __webpack_require__(0) )) == null ? '' : __t) +\n'\" alt=\"\" />\\n    <div>This is ' +\n((__t = ( name )) == null ? '' : __t) +\n' layer</div>\\n    ';\n for(var i = 0; i < arr.length; i++) { ;\n__p += '\\n        ' +\n((__t = ( arr[i] )) == null ? '' : __t) +\n'\\n    ';\n } ;\n__p += '\\n</div>';\n\n}\nreturn __p\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXllci9sYXllci50cGw/NzVkYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJywgX19qID0gQXJyYXkucHJvdG90eXBlLmpvaW47XG5mdW5jdGlvbiBwcmludCgpIHsgX19wICs9IF9fai5jYWxsKGFyZ3VtZW50cywgJycpIH1cbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibGF5ZXJcIj5cXG4gICAgPGltZyBzcmM9XCInICtcbigoX190ID0gKCByZXF1aXJlKCcuLi8uLi9pbWFnZXMvYmouanBnJykgKSkgPT0gbnVsbCA/ICcnIDogX190KSArXG4nXCIgYWx0PVwiXCIgLz5cXG4gICAgPGRpdj5UaGlzIGlzICcgK1xuKChfX3QgPSAoIG5hbWUgKSkgPT0gbnVsbCA/ICcnIDogX190KSArXG4nIGxheWVyPC9kaXY+XFxuICAgICc7XG4gZm9yKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyA7XG5fX3AgKz0gJ1xcbiAgICAgICAgJyArXG4oKF9fdCA9ICggYXJyW2ldICkpID09IG51bGwgPyAnJyA6IF9fdCkgK1xuJ1xcbiAgICAnO1xuIH0gO1xuX19wICs9ICdcXG48L2Rpdj4nO1xuXG59XG5yZXR1cm4gX19wXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9sYXllci9sYXllci50cGxcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXllci9sYXllci5sZXNzPzY1N2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9sYXllci9sYXllci5sZXNzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);