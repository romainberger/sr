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
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-142711477-1');
var baseUrl = location.origin;
fetch("".concat(baseUrl, "/update-mac.json?t=").concat(+new Date())).then(function (res) {
  return res.json();
}).then(function (data) {
  document.querySelector('#version').innerHTML = "version ".concat(data.version, " (beta)");
  document.querySelector('#download-mac').href = data.url;
});
fetch("".concat(baseUrl, "/update-win.json?t=").concat(+new Date())).then(function (res) {
  return res.json();
}).then(function (data) {
  document.querySelector('#download-windows').href = data.url;
});
document.querySelector('.download-link').addEventListener('click', function (ev) {
  var platform = ev.target.dataset.platform;
  gtag('event', 'download', {
    'event_category': 'download',
    'event_label': platform
  });
});
document.querySelector('.link').addEventListener('click', function (ev) {
  var link = ev.target.dataset.link;
  gtag('event', 'link', {
    'event_category': 'click',
    'event_label': link
  });
});
var video1 = document.querySelector('#video-feature-1');
var video3 = document.querySelector('#video-feature-3');
var video1Index = 0;
var video3Index = 0;
var feature1Videos = ['assets/feature-1-0.mp4', 'assets/feature-1-1.mp4', 'assets/feature-1-2.mp4'];
var feature3Videos = ['assets/feature-3-0.mp4', 'assets/feature-3-1.mp4'];
video1.addEventListener('ended', function () {
  if (video1Index + 1 > feature1Videos.length - 1) {
    video1Index = 0;
  } else {
    video1Index++;
  }

  video1.src = feature1Videos[video1Index];
});
video3.addEventListener('ended', function () {
  if (video3Index + 1 > feature3Videos.length - 1) {
    video3Index = 0;
  } else {
    video3Index++;
  }

  video3.src = feature3Videos[video3Index];
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImRhdGFMYXllciIsImd0YWciLCJwdXNoIiwiYXJndW1lbnRzIiwiRGF0ZSIsImJhc2VVcmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidmVyc2lvbiIsImhyZWYiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwbGF0Zm9ybSIsInRhcmdldCIsImRhdGFzZXQiLCJsaW5rIiwidmlkZW8xIiwidmlkZW8zIiwidmlkZW8xSW5kZXgiLCJ2aWRlbzNJbmRleCIsImZlYXR1cmUxVmlkZW9zIiwiZmVhdHVyZTNWaWRlb3MiLCJsZW5ndGgiLCJzcmMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FB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QUFELENBQTNCO0FBQ0gsQ0FURDtBQVdBRCxNQUFNLENBQUNQLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDbkMsTUFBSVMsV0FBVyxHQUFHLENBQWQsR0FBa0JFLGNBQWMsQ0FBQ0MsTUFBZixHQUF3QixDQUE5QyxFQUFpRDtBQUM3Q0gsZUFBVyxHQUFHLENBQWQ7QUFDSCxHQUZELE1BR0s7QUFDREEsZUFBVztBQUNkOztBQUVERixRQUFNLENBQUNNLEdBQVAsR0FBYUYsY0FBYyxDQUFDRixXQUFELENBQTNCO0FBQ0gsQ0FURCxFIiwiZmlsZSI6ImluZGV4LTUyMjFiMjYzNDI0YmM3ZDg1ODRjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIndpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdXG5mdW5jdGlvbiBndGFnKCkge1xuICAgIGRhdGFMYXllci5wdXNoKGFyZ3VtZW50cylcbn1cbmd0YWcoJ2pzJywgbmV3IERhdGUoKSlcblxuZ3RhZygnY29uZmlnJywgJ1VBLTE0MjcxMTQ3Ny0xJylcblxuY29uc3QgYmFzZVVybCA9IGxvY2F0aW9uLm9yaWdpblxuXG5mZXRjaChgJHtiYXNlVXJsfS91cGRhdGUtbWFjLmpzb24/dD0keytuZXcgRGF0ZSgpfWApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2ZXJzaW9uJykuaW5uZXJIVE1MID0gYHZlcnNpb24gJHtkYXRhLnZlcnNpb259IChiZXRhKWBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rvd25sb2FkLW1hYycpLmhyZWYgPSBkYXRhLnVybFxuICAgIH0pXG5cbmZldGNoKGAke2Jhc2VVcmx9L3VwZGF0ZS13aW4uanNvbj90PSR7K25ldyBEYXRlKCl9YClcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rvd25sb2FkLXdpbmRvd3MnKS5ocmVmID0gZGF0YS51cmxcbiAgICB9KVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bmxvYWQtbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgIGNvbnN0IHBsYXRmb3JtID0gZXYudGFyZ2V0LmRhdGFzZXQucGxhdGZvcm1cblxuICAgIGd0YWcoJ2V2ZW50JywgJ2Rvd25sb2FkJywge1xuICAgICAgICAnZXZlbnRfY2F0ZWdvcnknOiAnZG93bmxvYWQnLFxuICAgICAgICAnZXZlbnRfbGFiZWwnOiBwbGF0Zm9ybSxcbiAgICB9KVxufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcbiAgICBjb25zdCBsaW5rID0gZXYudGFyZ2V0LmRhdGFzZXQubGlua1xuXG4gICAgZ3RhZygnZXZlbnQnLCAnbGluaycsIHtcbiAgICAgICAgJ2V2ZW50X2NhdGVnb3J5JzogJ2NsaWNrJyxcbiAgICAgICAgJ2V2ZW50X2xhYmVsJzogbGluayxcbiAgICB9KVxufSlcblxuY29uc3QgdmlkZW8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvLWZlYXR1cmUtMScpXG5jb25zdCB2aWRlbzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlkZW8tZmVhdHVyZS0zJylcbmxldCB2aWRlbzFJbmRleCA9IDBcbmxldCB2aWRlbzNJbmRleCA9IDBcblxuY29uc3QgZmVhdHVyZTFWaWRlb3MgPSBbXG4gICAgJ2Fzc2V0cy9mZWF0dXJlLTEtMC5tcDQnLFxuICAgICdhc3NldHMvZmVhdHVyZS0xLTEubXA0JyxcbiAgICAnYXNzZXRzL2ZlYXR1cmUtMS0yLm1wNCcsXG5dXG5cbmNvbnN0IGZlYXR1cmUzVmlkZW9zID0gW1xuICAgICdhc3NldHMvZmVhdHVyZS0zLTAubXA0JyxcbiAgICAnYXNzZXRzL2ZlYXR1cmUtMy0xLm1wNCcsXG5dXG5cbnZpZGVvMS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICBpZiAodmlkZW8xSW5kZXggKyAxID4gZmVhdHVyZTFWaWRlb3MubGVuZ3RoIC0gMSkge1xuICAgICAgICB2aWRlbzFJbmRleCA9IDBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZpZGVvMUluZGV4KytcbiAgICB9XG5cbiAgICB2aWRlbzEuc3JjID0gZmVhdHVyZTFWaWRlb3NbdmlkZW8xSW5kZXhdXG59KVxuXG52aWRlbzMuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgaWYgKHZpZGVvM0luZGV4ICsgMSA+IGZlYXR1cmUzVmlkZW9zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdmlkZW8zSW5kZXggPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2aWRlbzNJbmRleCsrXG4gICAgfVxuXG4gICAgdmlkZW8zLnNyYyA9IGZlYXR1cmUzVmlkZW9zW3ZpZGVvM0luZGV4XVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=