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
eval("\n\n__webpack_require__(2);\n\nvar _layer = __webpack_require__(3);\n\nvar _layer2 = _interopRequireDefault(_layer);\n\nvar _bj = __webpack_require__(0);\n\nvar _bj2 = _interopRequireDefault(_bj);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  var NUM = 1;\n  alert(NUM);\n  console.log(_layer2.default);\n  var dom = document.getElementById('app');\n  var layer = new _layer2.default();\n  dom.innerHTML = layer.tpl({\n    name: 'john',\n    arr: ['apple', 'xiaomi', 'appo']\n  });\n  document.getElementById('bgDiv').style.width = '100px';\n  document.getElementById('bgDiv').style.height = '100px';\n  document.getElementById('bgDiv').style.border = '1px solid #000';\n  document.getElementById('bgDiv').style.backgroundColor = 'yellow';\n  //document.getElementById('bgDiv').style.background = 'url(http://static.fy13322.com/front/public/images/dqrcode.png?914052)';\n  //document.getElementById('bgDiv').style.background = 'url('+ url1 +')';\n  //document.getElementById('bgDiv').style.background = 'url(./images/bj.jpg)';\n  document.getElementById('bgDiv').style.background = 'url(' + __webpack_require__(0) + ')';\n};\n\nnew App();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsiQXBwIiwiTlVNIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxheWVyIiwiaW5uZXJIVE1MIiwidHBsIiwibmFtZSIsImFyciIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sR0FBWTtBQUN0QixNQUFNQyxNQUFNLENBQVo7QUFDQUMsUUFBTUQsR0FBTjtBQUNBRSxVQUFRQyxHQUFSO0FBQ0EsTUFBSUMsTUFBTUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFWO0FBQ0EsTUFBSUMsUUFBUSxxQkFBWjtBQUNBSCxNQUFJSSxTQUFKLEdBQWdCRCxNQUFNRSxHQUFOLENBQVU7QUFDeEJDLFVBQU0sTUFEa0I7QUFFeEJDLFNBQUssQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixNQUFwQjtBQUZtQixHQUFWLENBQWhCO0FBSUFOLFdBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNNLEtBQWpDLENBQXVDQyxLQUF2QyxHQUErQyxPQUEvQztBQUNBUixXQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDTSxLQUFqQyxDQUF1Q0UsTUFBdkMsR0FBZ0QsT0FBaEQ7QUFDQVQsV0FBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ00sS0FBakMsQ0FBdUNHLE1BQXZDLEdBQWdELGdCQUFoRDtBQUNBVixXQUFTQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDTSxLQUFqQyxDQUF1Q0ksZUFBdkMsR0FBeUQsUUFBekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQVgsV0FBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ00sS0FBakMsQ0FBdUNLLFVBQXZDLEdBQW9ELFNBQVEsbUJBQUFDLENBQVEsQ0FBUixDQUFSLEdBQW1DLEdBQXZGO0FBQ0QsQ0FsQkQ7O0FBb0JBLElBQUluQixHQUFKIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY3NzL2NvbW1vbi5jc3MnO1xuaW1wb3J0IExheWVyIGZyb20gJy4vY29tcG9uZW50cy9sYXllci9sYXllci5qcyc7XG5pbXBvcnQgdXJsMSBmcm9tICcuL2ltYWdlcy9iai5qcGcnXG5jb25zdCBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IE5VTSA9IDE7XG4gIGFsZXJ0KE5VTSk7XG4gIGNvbnNvbGUubG9nKExheWVyKTtcbiAgdmFyIGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgdmFyIGxheWVyID0gbmV3IExheWVyKCk7XG4gIGRvbS5pbm5lckhUTUwgPSBsYXllci50cGwoe1xuICAgIG5hbWU6ICdqb2huJyxcbiAgICBhcnI6IFsnYXBwbGUnLCAneGlhb21pJywgJ2FwcG8nXVxuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnRGl2Jykuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdEaXYnKS5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdEaXYnKS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICMwMDAnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdEaXYnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdEaXYnKS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChodHRwOi8vc3RhdGljLmZ5MTMzMjIuY29tL2Zyb250L3B1YmxpYy9pbWFnZXMvZHFyY29kZS5wbmc/OTE0MDUyKSc7XG4gIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnRGl2Jykuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJysgdXJsMSArJyknO1xuICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZ0RpdicpLnN0eWxlLmJhY2tncm91bmQgPSAndXJsKC4vaW1hZ2VzL2JqLmpwZyknO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdEaXYnKS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnKyByZXF1aXJlKFwiLi9pbWFnZXMvYmouanBnXCIpKycpJztcbn1cblxubmV3IEFwcCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2NvbW1vbi5jc3M/ZjViYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvY29tbW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

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