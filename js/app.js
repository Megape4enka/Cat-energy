/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-menu */ \"./src/js/dropdown-menu.js\");\n/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hcHAuanM/OTBlOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2pzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vZHJvcGRvd24tbWVudSdcbmltcG9ydCAnLi9zbGlkZXInIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/dropdown-menu.js":
/*!*********************************!*\
  !*** ./src/js/dropdown-menu.js ***!
  \*********************************/
/***/ (() => {

eval("(function () {\n  var nav = document.querySelector('.main-nav');\n  var toggle = nav.querySelector('.toggle');\n  nav.classList.remove('main-nav--no-js');\n  toggle.addEventListener('click', function () {\n    nav.classList.toggle('main-nav--opened');\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9kcm9wZG93bi1tZW51LmpzP2NmZWIiXSwibmFtZXMiOlsibmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFZO0FBQ1QsTUFBSUEsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBVjtBQUNBLE1BQUlDLE1BQU0sR0FBR0gsR0FBRyxDQUFDRSxhQUFKLENBQWtCLFNBQWxCLENBQWI7QUFFQUYsRUFBQUEsR0FBRyxDQUFDSSxTQUFKLENBQWNDLE1BQWQsQ0FBcUIsaUJBQXJCO0FBRUFGLEVBQUFBLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNuQ04sSUFBQUEsR0FBRyxDQUFDSSxTQUFKLENBQWNELE1BQWQsQ0FBcUIsa0JBQXJCO0FBQ0gsR0FGRDtBQUdILENBVEQiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xyXG4gICAgbGV0IHRvZ2dsZSA9IG5hdi5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlJyk7XHJcblxyXG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2LS1uby1qcycpO1xyXG5cclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi1uYXYtLW9wZW5lZCcpO1xyXG4gICAgfSk7XHJcbn0pKCk7Il0sImZpbGUiOiIuL3NyYy9qcy9kcm9wZG93bi1tZW51LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/dropdown-menu.js\n");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("(function () {\n  var TABLET_WIDTH = 768;\n  var DESKTOP_WIDTH = 1300;\n  var LAPTOP_WIDTH = 1024;\n  var slider = document.querySelector(\".slider\");\n  var scale = slider.querySelector(\".slider__scale\");\n  var grip = scale.querySelector(\".slider__grip\");\n  var before = slider.querySelector(\".slider__image--before\");\n  var after = slider.querySelector(\".slider__image--after\");\n  var btnBefore = slider.querySelector(\".slider__btn--before\");\n  var btnAfter = slider.querySelector(\".slider__btn--after\");\n  var sliderWidth, scaleWidth, gripWidth;\n\n  var getElemWidth = function getElemWidth(elem) {\n    return parseInt(getComputedStyle(elem).width, 10);\n  };\n\n  btnBefore.onclick = function (evt) {\n    evt.preventDefault();\n    before.style.width = \"100%\";\n    after.style.width = \"0\";\n    grip.style.marginLeft = \"0\";\n    grip.style.transition = \"margin-left 2.5s ease-in-out\";\n    before.style.transition = \"width 2s ease-in-out\";\n\n    if (viewport >= LAPTOP_WIDTH) {\n      grip.style.transition = \"margin-left 3s ease-in-out\";\n      before.style.transition = \"width 3s ease-in-out\";\n    } else {\n      grip.style.transition = \"margin-left 3s ease-in-out\";\n      before.style.transition = \"width 1.5s ease-in-out\";\n    }\n  };\n\n  btnAfter.onclick = function (evt) {\n    evt.preventDefault();\n    before.style.width = \"0\";\n    after.style.width = \"100%\";\n    grip.style.marginLeft = \"calc(100% - \" + gripWidth + \"px)\";\n    grip.style.transition = \"margin-left 2.5s ease-in-out\";\n    after.style.transition = \"width 2s ease-in-out\";\n\n    if (viewport >= LAPTOP_WIDTH) {\n      grip.style.transition = \"margin-left 3s ease-in-out\";\n      after.style.transition = \"width 3s ease-in-out\";\n    } else {\n      grip.style.transition = \"margin-left 1s ease-in-out\";\n      after.style.transition = \"width 1.5s ease-in-out\";\n    }\n  };\n\n  grip.ondblclick = function () {\n    before.style.width = \"50%\";\n    after.style.width = \"50%\";\n    grip.style.marginLeft = \"calc(50% - \" + gripWidth / 2 + \"px)\";\n  };\n\n  var getCoords = function getCoords(elem) {\n    var box = elem.getBoundingClientRect();\n    return box.left + pageXOffset;\n  };\n\n  var gripDownHandler = function gripDownHandler(evtDown) {\n    var gripCoords = getCoords(grip);\n    var scaleCoords = getCoords(scale);\n    grip.style.transition = \"none\";\n    var shiftX = evtDown.pageX - gripCoords;\n\n    document.onmousemove = function (evtMove) {\n      var newLeft = evtMove.pageX - shiftX - scaleCoords;\n\n      if (newLeft < 0) {\n        newLeft = 0;\n      }\n\n      var rightEdge = scaleWidth - gripWidth;\n\n      if (newLeft > rightEdge) {\n        newLeft = rightEdge;\n      }\n\n      var gripValue = newLeft / rightEdge * 100;\n      grip.style.marginLeft = newLeft + \"px\";\n      before.style.width = 100 - gripValue + \"%\";\n      after.style.width = gripValue + \"%\";\n    };\n\n    document.onmouseup = function () {\n      document.onmousemove = document.onmouseup = null;\n      grip.style.transition = \"margin-left 0.2s ease-out\";\n    };\n\n    return false;\n  };\n\n  var addGripHandlers = function addGripHandlers() {\n    grip.addEventListener(\"mousedown\", gripDownHandler);\n  };\n\n  var removeGripHandlers = function removeGripHandlers() {\n    grip.removeEventListener(\"mousedown\", gripDownHandler);\n  };\n\n  var initialize = function initialize() {\n    var viewport = document.documentElement.clientWidth || window.innerWidth;\n\n    if (viewport >= TABLET_WIDTH) {\n      addGripHandlers();\n    } else {\n      removeGripHandlers();\n    }\n\n    sliderWidth = getElemWidth(slider);\n    scaleWidth = getElemWidth(scale);\n    gripWidth = getElemWidth(grip);\n    before.style.width = \"\";\n    after.style.width = \"\";\n    grip.style.marginLeft = \"\";\n  };\n\n  window.addEventListener(\"load\", initialize);\n  window.addEventListener(\"resize\", initialize);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9zbGlkZXIuanM/NGZlYSJdLCJuYW1lcyI6WyJUQUJMRVRfV0lEVEgiLCJERVNLVE9QX1dJRFRIIiwiTEFQVE9QX1dJRFRIIiwic2xpZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2NhbGUiLCJncmlwIiwiYmVmb3JlIiwiYWZ0ZXIiLCJidG5CZWZvcmUiLCJidG5BZnRlciIsInNsaWRlcldpZHRoIiwic2NhbGVXaWR0aCIsImdyaXBXaWR0aCIsImdldEVsZW1XaWR0aCIsImVsZW0iLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJ3aWR0aCIsIm9uY2xpY2siLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwibWFyZ2luTGVmdCIsInRyYW5zaXRpb24iLCJ2aWV3cG9ydCIsIm9uZGJsY2xpY2siLCJnZXRDb29yZHMiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwicGFnZVhPZmZzZXQiLCJncmlwRG93bkhhbmRsZXIiLCJldnREb3duIiwiZ3JpcENvb3JkcyIsInNjYWxlQ29vcmRzIiwic2hpZnRYIiwicGFnZVgiLCJvbm1vdXNlbW92ZSIsImV2dE1vdmUiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwiZ3JpcFZhbHVlIiwib25tb3VzZXVwIiwiYWRkR3JpcEhhbmRsZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUdyaXBIYW5kbGVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFlBQVk7QUFDVCxNQUFNQSxZQUFZLEdBQUcsR0FBckI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsSUFBdEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsSUFBckI7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QUFBQSxlQUFlO0FBQ2xCLEtBRkQsTUFFTztBQUNIRSxNQUFBQSxrQkFBa0I7QUFDckI7O0FBRURuQyxJQUFBQSxXQUFXLEdBQUdHLFlBQVksQ0FBQ1osTUFBRCxDQUExQjtBQUNBVSxJQUFBQSxVQUFVLEdBQUdFLFlBQVksQ0FBQ1QsS0FBRCxDQUF6QjtBQUNBUSxJQUFBQSxTQUFTLEdBQUdDLFlBQVksQ0FBQ1IsSUFBRCxDQUF4QjtBQUVBQyxJQUFBQSxNQUFNLENBQUNlLEtBQVAsQ0FBYUosS0FBYixHQUFxQixFQUFyQjtBQUNBVixJQUFBQSxLQUFLLENBQUNjLEtBQU4sQ0FBWUosS0FBWixHQUFvQixFQUFwQjtBQUNBWixJQUFBQSxJQUFJLENBQUNnQixLQUFMLENBQVdDLFVBQVgsR0FBd0IsRUFBeEI7QUFDSCxHQWhCRDs7QUFrQkE0QixFQUFBQSxNQUFNLENBQUNOLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDRyxVQUFoQztBQUNBRyxFQUFBQSxNQUFNLENBQUNOLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRyxVQUFsQztBQUNILENBaklEIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRBQkxFVF9XSURUSCA9IDc2ODtcclxuICAgIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMzAwO1xyXG4gICAgY29uc3QgTEFQVE9QX1dJRFRIID0gMTAyNDtcclxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBzbGlkZXIucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX3NjYWxlXCIpO1xyXG4gICAgY29uc3QgZ3JpcCA9IHNjYWxlLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19ncmlwXCIpO1xyXG4gICAgY29uc3QgYmVmb3JlID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19pbWFnZS0tYmVmb3JlXCIpO1xyXG4gICAgY29uc3QgYWZ0ZXIgPSBzbGlkZXIucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2ltYWdlLS1hZnRlclwiKTtcclxuICAgIGNvbnN0IGJ0bkJlZm9yZSA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fYnRuLS1iZWZvcmVcIik7XHJcbiAgICBjb25zdCBidG5BZnRlciA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fYnRuLS1hZnRlclwiKTtcclxuICAgIGxldCBzbGlkZXJXaWR0aCxcclxuICAgICAgICBzY2FsZVdpZHRoLFxyXG4gICAgICAgIGdyaXBXaWR0aDtcclxuXHJcbiAgICBjb25zdCBnZXRFbGVtV2lkdGggPSBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGVsZW0pLndpZHRoLCAxMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGJ0bkJlZm9yZS5vbmNsaWNrID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJlZm9yZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIGFmdGVyLnN0eWxlLndpZHRoID0gXCIwXCI7XHJcbiAgICAgICAgZ3JpcC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgZ3JpcC5zdHlsZS50cmFuc2l0aW9uID0gXCJtYXJnaW4tbGVmdCAyLjVzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgYmVmb3JlLnN0eWxlLnRyYW5zaXRpb24gPSBcIndpZHRoIDJzIGVhc2UtaW4tb3V0XCI7XHJcblxyXG4gICAgICAgIGlmICh2aWV3cG9ydD49TEFQVE9QX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIGdyaXAuc3R5bGUudHJhbnNpdGlvbiA9IFwibWFyZ2luLWxlZnQgM3MgZWFzZS1pbi1vdXRcIjtcclxuICAgICAgICAgICAgYmVmb3JlLnN0eWxlLnRyYW5zaXRpb24gPSBcIndpZHRoIDNzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBncmlwLnN0eWxlLnRyYW5zaXRpb24gPSBcIm1hcmdpbi1sZWZ0IDNzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgICAgIGJlZm9yZS5zdHlsZS50cmFuc2l0aW9uID0gXCJ3aWR0aCAxLjVzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBidG5BZnRlci5vbmNsaWNrID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJlZm9yZS5zdHlsZS53aWR0aCA9IFwiMFwiO1xyXG4gICAgICAgIGFmdGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgZ3JpcC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCJjYWxjKDEwMCUgLSBcIiArIGdyaXBXaWR0aCArIFwicHgpXCI7XHJcbiAgICAgICAgZ3JpcC5zdHlsZS50cmFuc2l0aW9uID0gXCJtYXJnaW4tbGVmdCAyLjVzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgYWZ0ZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwid2lkdGggMnMgZWFzZS1pbi1vdXRcIjtcclxuXHJcbiAgICAgICAgaWYgKHZpZXdwb3J0ID49IExBUFRPUF9XSURUSCkge1xyXG4gICAgICAgICAgICBncmlwLnN0eWxlLnRyYW5zaXRpb24gPSBcIm1hcmdpbi1sZWZ0IDNzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgICAgIGFmdGVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIndpZHRoIDNzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBncmlwLnN0eWxlLnRyYW5zaXRpb24gPSBcIm1hcmdpbi1sZWZ0IDFzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgICAgIGFmdGVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIndpZHRoIDEuNXMgZWFzZS1pbi1vdXRcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdyaXAub25kYmxjbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBiZWZvcmUuc3R5bGUud2lkdGggPSBcIjUwJVwiO1xyXG4gICAgICAgIGFmdGVyLnN0eWxlLndpZHRoID0gXCI1MCVcIjtcclxuICAgICAgICBncmlwLnN0eWxlLm1hcmdpbkxlZnQgPSBcImNhbGMoNTAlIC0gXCIgKyBncmlwV2lkdGggLyAyICsgXCJweClcIjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0Q29vcmRzID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICBjb25zdCBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiBib3gubGVmdCArIHBhZ2VYT2Zmc2V0O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBncmlwRG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZXZ0RG93bikge1xyXG4gICAgICAgIGNvbnN0IGdyaXBDb29yZHMgPSBnZXRDb29yZHMoZ3JpcCk7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVDb29yZHMgPSBnZXRDb29yZHMoc2NhbGUpO1xyXG4gICAgICAgIGdyaXAuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICBjb25zdCBzaGlmdFggPSBldnREb3duLnBhZ2VYIC0gZ3JpcENvb3JkcztcclxuXHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZXZ0TW92ZSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3TGVmdCA9IGV2dE1vdmUucGFnZVggLSBzaGlmdFggLSBzY2FsZUNvb3JkcztcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0RWRnZSA9IHNjYWxlV2lkdGggLSBncmlwV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBncmlwVmFsdWUgPSBuZXdMZWZ0IC8gcmlnaHRFZGdlICogMTAwO1xyXG4gICAgICAgICAgICBncmlwLnN0eWxlLm1hcmdpbkxlZnQgPSBuZXdMZWZ0ICsgXCJweFwiO1xyXG5cclxuICAgICAgICAgICAgYmVmb3JlLnN0eWxlLndpZHRoID0gKDEwMCAtIGdyaXBWYWx1ZSkgKyBcIiVcIjtcclxuICAgICAgICAgICAgYWZ0ZXIuc3R5bGUud2lkdGggPSBncmlwVmFsdWUgKyBcIiVcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICAgICAgZ3JpcC5zdHlsZS50cmFuc2l0aW9uID0gXCJtYXJnaW4tbGVmdCAwLjJzIGVhc2Utb3V0XCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRHcmlwSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ3JpcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGdyaXBEb3duSGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUdyaXBIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBncmlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZ3JpcERvd25IYW5kbGVyKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgdmlld3BvcnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICAgIGlmICh2aWV3cG9ydCA+PSBUQUJMRVRfV0lEVEgpIHtcclxuICAgICAgICAgICAgYWRkR3JpcEhhbmRsZXJzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVtb3ZlR3JpcEhhbmRsZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzbGlkZXJXaWR0aCA9IGdldEVsZW1XaWR0aChzbGlkZXIpO1xyXG4gICAgICAgIHNjYWxlV2lkdGggPSBnZXRFbGVtV2lkdGgoc2NhbGUpO1xyXG4gICAgICAgIGdyaXBXaWR0aCA9IGdldEVsZW1XaWR0aChncmlwKTtcclxuXHJcbiAgICAgICAgYmVmb3JlLnN0eWxlLndpZHRoID0gXCJcIjtcclxuICAgICAgICBhZnRlci5zdHlsZS53aWR0aCA9IFwiXCI7XHJcbiAgICAgICAgZ3JpcC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXRpYWxpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaW5pdGlhbGl6ZSk7XHJcbn0pKCk7Il0sImZpbGUiOiIuL3NyYy9qcy9zbGlkZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/slider.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL3Njc3MvYXBwLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;