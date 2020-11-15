/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Todo.ts":
/*!********************!*\
  !*** ./js/Todo.ts ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Todo = /** @class */ (function () {
    /*
        priority - важность дела
        text - контент, содержимое
        dt -  дата создания дела
        dl - deadline
     */
    function Todo(priority, text, dl) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }
    return Todo;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./js/code.ts":
/*!********************!*\
  !*** ./js/code.ts ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./js/Todo.ts");


var important_color = [
    "has-background-danger has-text-white is-size-3",
    "has-background-warning has-text-black is-size-3",
    "has-background-link has-text-white is-size-3",
];
var field = (document.querySelector(".input"));
var select = (document.querySelector("#prioritet"));
var date_picker = (document.getElementById("date_picker"));
var button_plus = (document.querySelector(".button_plus"));
var deals = (document.querySelector("#deals"));
/*
Функция добавления дела, котора вызвает функцию отрисовки
и добавляет дело в LocalStorage
И не забывает обнулять значения
 */
function addTask() {
    var content = field.value;
    if (content === "" || date_picker.value === "") {
        return;
    }
    var todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(parseInt(select.value), content, date_picker.value);
    var todo_to_JSON = JSON.stringify(todo);
    localStorage.setItem(String(+todo.dt), todo_to_JSON);
    GenerateDom(todo);
    field.value = "";
    // дальше у нас будет сохрание в LocalStorage
}
//назначение листенеров на нашу кнопку
button_plus.onclick = addTask;
document.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        addTask();
    }
});
// функция отрисовки нашего приложения, когда оно включается
//данные берутся из localStorage
function draw_on_load() {
    //эта функция сразу сработает
    //потом ее переменные вывезет GC
    for (var i = 0; i < localStorage.length; i++) {
        var lk_key = localStorage.key(i);
        var content = localStorage.getItem(lk_key);
        var todo = JSON.parse(content);
        GenerateDom(todo);
    }
}
draw_on_load();
/*
Универсальная функция отрисовки, которая у нас вставляет todo в DOM
 */
function GenerateDom(obj) {
    var priority = obj.priority, text = obj.text, dt = obj.dt, dl = obj.dl;
    deals.insertAdjacentHTML("afterbegin", "\n    <div class=\"wrap_task " + important_color[priority - 1] + "\" id=\"" + dt + "\">\n        <p class=\"todo_text\"> " + text + " </p>\n        <p> " + new Date(dt).getDate() + "/" + new Date(dt).getMonth() + " / " + dl + " </p>\n        <i class=\"material-icons md-delete\"></i>\n    </div>\n");
    deleteItem();
}
deleteItem();
// обработчики удаления дела
function deleteItem() {
    var delete_icons = document.getElementsByClassName("md-delete");
    var delete_map = Array.from(delete_icons);
    delete_map.map(function (el) {
        el.onclick = function () {
            var wrap_task = el.parentNode;
            wrap_task.style.display = "none";
            localStorage.removeItem(wrap_task.id);
        };
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/code.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2pzL1RvZG8udHMiLCJ3ZWJwYWNrOi8vdG9kby8uL2pzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBUb2RvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgIHByaW9yaXR5IC0g0LLQsNC20L3QvtGB0YLRjCDQtNC10LvQsFxuICAgICAgICB0ZXh0IC0g0LrQvtC90YLQtdC90YIsINGB0L7QtNC10YDQttC40LzQvtC1XG4gICAgICAgIGR0IC0gINC00LDRgtCwINGB0L7Qt9C00LDQvdC40Y8g0LTQtdC70LBcbiAgICAgICAgZGwgLSBkZWFkbGluZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRvZG8ocHJpb3JpdHksIHRleHQsIGRsKSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kdCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZGwgPSBkbDtcbiAgICB9XG4gICAgcmV0dXJuIFRvZG87XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xudmFyIGltcG9ydGFudF9jb2xvciA9IFtcbiAgICBcImhhcy1iYWNrZ3JvdW5kLWRhbmdlciBoYXMtdGV4dC13aGl0ZSBpcy1zaXplLTNcIixcbiAgICBcImhhcy1iYWNrZ3JvdW5kLXdhcm5pbmcgaGFzLXRleHQtYmxhY2sgaXMtc2l6ZS0zXCIsXG4gICAgXCJoYXMtYmFja2dyb3VuZC1saW5rIGhhcy10ZXh0LXdoaXRlIGlzLXNpemUtM1wiLFxuXTtcbnZhciBmaWVsZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpKTtcbnZhciBzZWxlY3QgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0ZXRcIikpO1xudmFyIGRhdGVfcGlja2VyID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9waWNrZXJcIikpO1xudmFyIGJ1dHRvbl9wbHVzID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uX3BsdXNcIikpO1xudmFyIGRlYWxzID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVhbHNcIikpO1xuLypcbtCk0YPQvdC60YbQuNGPINC00L7QsdCw0LLQu9C10L3QuNGPINC00LXQu9CwLCDQutC+0YLQvtGA0LAg0LLRi9C30LLQsNC10YIg0YTRg9C90LrRhtC40Y4g0L7RgtGA0LjRgdC+0LLQutC4XG7QuCDQtNC+0LHQsNCy0LvRj9C10YIg0LTQtdC70L4g0LIgTG9jYWxTdG9yYWdlXG7QmCDQvdC1INC30LDQsdGL0LLQsNC10YIg0L7QsdC90YPQu9GP0YLRjCDQt9C90LDRh9C10L3QuNGPXG4gKi9cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBmaWVsZC52YWx1ZTtcbiAgICBpZiAoY29udGVudCA9PT0gXCJcIiB8fCBkYXRlX3BpY2tlci52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0b2RvID0gbmV3IFRvZG8ocGFyc2VJbnQoc2VsZWN0LnZhbHVlKSwgY29udGVudCwgZGF0ZV9waWNrZXIudmFsdWUpO1xuICAgIHZhciB0b2RvX3RvX0pTT04gPSBKU09OLnN0cmluZ2lmeSh0b2RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdHJpbmcoK3RvZG8uZHQpLCB0b2RvX3RvX0pTT04pO1xuICAgIEdlbmVyYXRlRG9tKHRvZG8pO1xuICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAvLyDQtNCw0LvRjNGI0LUg0YMg0L3QsNGBINCx0YPQtNC10YIg0YHQvtGF0YDQsNC90LjQtSDQsiBMb2NhbFN0b3JhZ2Vcbn1cbi8v0L3QsNC30L3QsNGH0LXQvdC40LUg0LvQuNGB0YLQtdC90LXRgNC+0LIg0L3QsCDQvdCw0YjRgyDQutC90L7Qv9C60YNcbmJ1dHRvbl9wbHVzLm9uY2xpY2sgPSBhZGRUYXNrO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICB9XG59KTtcbi8vINGE0YPQvdC60YbQuNGPINC+0YLRgNC40YHQvtCy0LrQuCDQvdCw0YjQtdCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8sINC60L7Qs9C00LAg0L7QvdC+INCy0LrQu9GO0YfQsNC10YLRgdGPXG4vL9C00LDQvdC90YvQtSDQsdC10YDRg9GC0YHRjyDQuNC3IGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gZHJhd19vbl9sb2FkKCkge1xuICAgIC8v0Y3RgtCwINGE0YPQvdC60YbQuNGPINGB0YDQsNC30YMg0YHRgNCw0LHQvtGC0LDQtdGCXG4gICAgLy/Qv9C+0YLQvtC8INC10LUg0L/QtdGA0LXQvNC10L3QvdGL0LUg0LLRi9Cy0LXQt9C10YIgR0NcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbGtfa2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsa19rZXkpO1xuICAgICAgICB2YXIgdG9kbyA9IEpTT04ucGFyc2UoY29udGVudCk7XG4gICAgICAgIEdlbmVyYXRlRG9tKHRvZG8pO1xuICAgIH1cbn1cbmRyYXdfb25fbG9hZCgpO1xuLypcbtCj0L3QuNCy0LXRgNGB0LDQu9GM0L3QsNGPINGE0YPQvdC60YbQuNGPINC+0YLRgNC40YHQvtCy0LrQuCwg0LrQvtGC0L7RgNCw0Y8g0YMg0L3QsNGBINCy0YHRgtCw0LLQu9GP0LXRgiB0b2RvINCyIERPTVxuICovXG5mdW5jdGlvbiBHZW5lcmF0ZURvbShvYmopIHtcbiAgICB2YXIgcHJpb3JpdHkgPSBvYmoucHJpb3JpdHksIHRleHQgPSBvYmoudGV4dCwgZHQgPSBvYmouZHQsIGRsID0gb2JqLmRsO1xuICAgIGRlYWxzLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwid3JhcF90YXNrIFwiICsgaW1wb3J0YW50X2NvbG9yW3ByaW9yaXR5IC0gMV0gKyBcIlxcXCIgaWQ9XFxcIlwiICsgZHQgKyBcIlxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwidG9kb190ZXh0XFxcIj4gXCIgKyB0ZXh0ICsgXCIgPC9wPlxcbiAgICAgICAgPHA+IFwiICsgbmV3IERhdGUoZHQpLmdldERhdGUoKSArIFwiL1wiICsgbmV3IERhdGUoZHQpLmdldE1vbnRoKCkgKyBcIiAvIFwiICsgZGwgKyBcIiA8L3A+XFxuICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMgbWQtZGVsZXRlXFxcIj48L2k+XFxuICAgIDwvZGl2PlxcblwiKTtcbiAgICBkZWxldGVJdGVtKCk7XG59XG5kZWxldGVJdGVtKCk7XG4vLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGD0LTQsNC70LXQvdC40Y8g0LTQtdC70LBcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oKSB7XG4gICAgdmFyIGRlbGV0ZV9pY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZC1kZWxldGVcIik7XG4gICAgdmFyIGRlbGV0ZV9tYXAgPSBBcnJheS5mcm9tKGRlbGV0ZV9pY29ucyk7XG4gICAgZGVsZXRlX21hcC5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd3JhcF90YXNrID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHdyYXBfdGFzay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh3cmFwX3Rhc2suaWQpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9jb2RlLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==