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
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./main.css */ "./src/main.css");

var baseUrl = location.origin;

var getElement = function getElement(selector, cb) {
  var el = document.querySelector(selector);
  el && cb(el);
};

fetch("".concat(baseUrl, "/update-mac.json?t=").concat(+new Date())).then(function (res) {
  return res.json();
}).then(function (data) {
  getElement('#version', function (el) {
    el.innerHTML = "version ".concat(data.version);
  });
  getElement('#download-mac', function (el) {
    el.href = data.url;
  });
});
fetch("".concat(baseUrl, "/update-win.json?t=").concat(+new Date())).then(function (res) {
  return res.json();
}).then(function (data) {
  getElement('#download-windows', function (el) {
    el.href = data.url;
  });
});
getElement('.download-link', function (el) {
  el.addEventListener('click', function (ev) {
    var platform = ev.target.dataset.platform;
    trackEvent('download', {
      'event_category': 'download',
      'event_label': platform
    });
  });
});
getElement('.link', function (el) {
  el.addEventListener('click', function (ev) {
    var link = ev.target.dataset.link;
    trackEvent('link', {
      'event_category': 'click',
      'event_label': link
    });
  });
});
var video1 = document.querySelector('#video-feature-1');
var video3 = document.querySelector('#video-feature-3');
var video1Index = 0;
var video3Index = 0;
var feature1Videos = ['assets/feature-1-0.mp4', 'assets/feature-1-1.mp4', 'assets/feature-1-2.mp4'];
var feature3Videos = ['assets/feature-3-0.mp4', 'assets/feature-3-1.mp4'];

if (video1 && video3) {
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
}

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcz9kNzVjIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJiYXNlVXJsIiwibG9jYXRpb24iLCJvcmlnaW4iLCJnZXRFbGVtZW50Iiwic2VsZWN0b3IiLCJjYiIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2giLCJEYXRlIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiaW5uZXJIVE1MIiwidmVyc2lvbiIsImhyZWYiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwbGF0Zm9ybSIsInRhcmdldCIsImRhdGFzZXQiLCJ0cmFja0V2ZW50IiwibGluayIsInZpZGVvMSIsInZpZGVvMyIsInZpZGVvMUluZGV4IiwidmlkZW8zSW5kZXgiLCJmZWF0dXJlMVZpZGVvcyIsImZlYXR1cmUzVmlkZW9zIiwibGVuZ3RoIiwic3JjIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtR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O0FBQ2xCRCxRQUFNLENBQUNQLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDbkMsUUFBSVMsV0FBVyxHQUFHLENBQWQsR0FBa0JFLGNBQWMsQ0FBQ0UsTUFBZixHQUF3QixDQUE5QyxFQUFpRDtBQUM3Q0osaUJBQVcsR0FBRyxDQUFkO0FBQ0gsS0FGRCxNQUdLO0FBQ0RBLGlCQUFXO0FBQ2Q7O0FBRURGLFVBQU0sQ0FBQ08sR0FBUCxHQUFhSCxjQUFjLENBQUNGLFdBQUQsQ0FBM0I7QUFDSCxHQVREO0FBV0FELFFBQU0sQ0FBQ1IsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNuQyxRQUFJVSxXQUFXLEdBQUcsQ0FBZCxHQUFrQkUsY0FBYyxDQUFDQyxNQUFmLEdBQXdCLENBQTlDLEVBQWlEO0FBQzdDSCxpQkFBVyxHQUFHLENBQWQ7QUFDSCxLQUZELE1BR0s7QUFDREEsaUJBQVc7QUFDZDs7QUFFREYsVUFBTSxDQUFDTSxHQUFQLEdBQWFGLGNBQWMsQ0FBQ0YsV0FBRCxDQUEzQjtBQUNILEdBVEQ7QUFVSCxDOzs7Ozs7Ozs7OztBQ3pGRCx1QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJyZXF1aXJlKCcuL21haW4uY3NzJylcblxuY29uc3QgYmFzZVVybCA9IGxvY2F0aW9uLm9yaWdpblxuXG5jb25zdCBnZXRFbGVtZW50ID0gKHNlbGVjdG9yLCBjYikgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcblxuICAgIGVsICYmIGNiKGVsKVxufVxuXG5mZXRjaChgJHtiYXNlVXJsfS91cGRhdGUtbWFjLmpzb24/dD0keytuZXcgRGF0ZSgpfWApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGdldEVsZW1lbnQoJyN2ZXJzaW9uJywgZWwgPT4ge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gYHZlcnNpb24gJHtkYXRhLnZlcnNpb259YFxuICAgICAgICB9KVxuICAgICAgICBnZXRFbGVtZW50KCcjZG93bmxvYWQtbWFjJywgZWwgPT4ge1xuICAgICAgICAgICAgZWwuaHJlZiA9IGRhdGEudXJsXG4gICAgICAgIH0pXG4gICAgfSlcblxuZmV0Y2goYCR7YmFzZVVybH0vdXBkYXRlLXdpbi5qc29uP3Q9JHsrbmV3IERhdGUoKX1gKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBnZXRFbGVtZW50KCcjZG93bmxvYWQtd2luZG93cycsIGVsID0+IHtcbiAgICAgICAgICAgIGVsLmhyZWYgPSBkYXRhLnVybFxuICAgICAgICB9KVxuICAgIH0pXG5cbmdldEVsZW1lbnQoJy5kb3dubG9hZC1saW5rJywgZWwgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGV2LnRhcmdldC5kYXRhc2V0LnBsYXRmb3JtXG5cbiAgICAgICAgdHJhY2tFdmVudCgnZG93bmxvYWQnLCB7XG4gICAgICAgICAgICAnZXZlbnRfY2F0ZWdvcnknOiAnZG93bmxvYWQnLFxuICAgICAgICAgICAgJ2V2ZW50X2xhYmVsJzogcGxhdGZvcm0sXG4gICAgICAgIH0pXG4gICAgfSlcbn0pXG5cbmdldEVsZW1lbnQoJy5saW5rJywgZWwgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZXYudGFyZ2V0LmRhdGFzZXQubGlua1xuXG4gICAgICAgIHRyYWNrRXZlbnQoJ2xpbmsnLCB7XG4gICAgICAgICAgICAnZXZlbnRfY2F0ZWdvcnknOiAnY2xpY2snLFxuICAgICAgICAgICAgJ2V2ZW50X2xhYmVsJzogbGluayxcbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuY29uc3QgdmlkZW8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvLWZlYXR1cmUtMScpXG5jb25zdCB2aWRlbzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlkZW8tZmVhdHVyZS0zJylcbmxldCB2aWRlbzFJbmRleCA9IDBcbmxldCB2aWRlbzNJbmRleCA9IDBcblxuY29uc3QgZmVhdHVyZTFWaWRlb3MgPSBbXG4gICAgJ2Fzc2V0cy9mZWF0dXJlLTEtMC5tcDQnLFxuICAgICdhc3NldHMvZmVhdHVyZS0xLTEubXA0JyxcbiAgICAnYXNzZXRzL2ZlYXR1cmUtMS0yLm1wNCcsXG5dXG5cbmNvbnN0IGZlYXR1cmUzVmlkZW9zID0gW1xuICAgICdhc3NldHMvZmVhdHVyZS0zLTAubXA0JyxcbiAgICAnYXNzZXRzL2ZlYXR1cmUtMy0xLm1wNCcsXG5dXG5cbmlmICh2aWRlbzEgJiYgdmlkZW8zKSB7XG4gICAgdmlkZW8xLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICBpZiAodmlkZW8xSW5kZXggKyAxID4gZmVhdHVyZTFWaWRlb3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdmlkZW8xSW5kZXggPSAwXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2aWRlbzFJbmRleCsrXG4gICAgICAgIH1cblxuICAgICAgICB2aWRlbzEuc3JjID0gZmVhdHVyZTFWaWRlb3NbdmlkZW8xSW5kZXhdXG4gICAgfSlcblxuICAgIHZpZGVvMy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgaWYgKHZpZGVvM0luZGV4ICsgMSA+IGZlYXR1cmUzVmlkZW9zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHZpZGVvM0luZGV4ID0gMFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmlkZW8zSW5kZXgrK1xuICAgICAgICB9XG5cbiAgICAgICAgdmlkZW8zLnNyYyA9IGZlYXR1cmUzVmlkZW9zW3ZpZGVvM0luZGV4XVxuICAgIH0pXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9