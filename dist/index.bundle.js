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
var date = new Date();
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
        this.dt = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
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
var deals = document.querySelector("#deals");
//Функция добавления дела на сервер
function addTask() {
    var content = field.value;
    if (content === "" || date_picker.value === "") {
        return;
    }
    var todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(parseInt(select.value), content, date_picker.value);
    var todo_to_JSON = JSON.stringify(todo);
    fetch("http://isakura3131.zonopo.ru/deals", {
        method: "POST",
        body: todo_to_JSON,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then(function (response) { return response.json(); })
        .then(function (json) { return GenerateDom(json); });
    field.value = "";
}
//Обработчик кнопки добавления дела
button_plus.onclick = addTask;
document.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        addTask();
    }
});
// Функция забора данных с сервера и вывода на экран
function draw_on_load() {
    fetch("http://isakura3131.zonopo.ru/deals")
        .then(function (response) { return response.json(); })
        .then(function (json) { return GenerateDom(json); });
}
draw_on_load();
//Универсальная функция отрисовки, которая у нас вставляет todo в DOM
function GenerateDom(obj) {
    var todos = obj;
    for (var i = 0; i < todos.length; i++) {
        var _a = todos[i], priority = _a.priority, text = _a.text, dt = _a.dt, dl = _a.dl, id = _a.id;
        deals.insertAdjacentHTML("afterbegin", "\n            <div class=\"wrap_task " + important_color[priority - 1] + "\" id=\"" + id + "\"> \n                <p class=\"todo_text\"> " + text + " </p>\n                <p> " + dt + " / " + dl + " </p>\n                <i class=\"material-icons md-delete\"></i>\n            </div>\n        ");
        deleteItem();
    }
    console.log(todos);
}
//Обработчик удаления дела
deleteItem();
function deleteItem() {
    var delete_icons = document.getElementsByClassName("md-delete");
    var delete_map = Array.from(delete_icons);
    delete_map.map(function (el) {
        el.onclick = function () {
            var wrap_task = el.parentNode;
            wrap_task.style.display = "none";
            fetch("http://isakura3131.zonopo.ru/deal/" + wrap_task.id, {
                method: "DELETE",
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2pzL1RvZG8udHMiLCJ3ZWJwYWNrOi8vdG9kby8uL2pzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkYXRlID0gbmV3IERhdGUoKTtcbnZhciBUb2RvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgIHByaW9yaXR5IC0g0LLQsNC20L3QvtGB0YLRjCDQtNC10LvQsFxuICAgICAgICB0ZXh0IC0g0LrQvtC90YLQtdC90YIsINGB0L7QtNC10YDQttC40LzQvtC1XG4gICAgICAgIGR0IC0gINC00LDRgtCwINGB0L7Qt9C00LDQvdC40Y8g0LTQtdC70LBcbiAgICAgICAgZGwgLSBkZWFkbGluZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRvZG8ocHJpb3JpdHksIHRleHQsIGRsKSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kdCA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgdGhpcy5kbCA9IGRsO1xuICAgIH1cbiAgICByZXR1cm4gVG9kbztcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG52YXIgaW1wb3J0YW50X2NvbG9yID0gW1xuICAgIFwiaGFzLWJhY2tncm91bmQtZGFuZ2VyIGhhcy10ZXh0LXdoaXRlIGlzLXNpemUtM1wiLFxuICAgIFwiaGFzLWJhY2tncm91bmQtd2FybmluZyBoYXMtdGV4dC1ibGFjayBpcy1zaXplLTNcIixcbiAgICBcImhhcy1iYWNrZ3JvdW5kLWxpbmsgaGFzLXRleHQtd2hpdGUgaXMtc2l6ZS0zXCIsXG5dO1xudmFyIGZpZWxkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikpO1xudmFyIHNlbGVjdCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXRldFwiKSk7XG52YXIgZGF0ZV9waWNrZXIgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX3BpY2tlclwiKSk7XG52YXIgYnV0dG9uX3BsdXMgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25fcGx1c1wiKSk7XG52YXIgZGVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWxzXCIpO1xuLy/QpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQtNC10LvQsCDQvdCwINGB0LXRgNCy0LXRgFxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICB2YXIgY29udGVudCA9IGZpZWxkLnZhbHVlO1xuICAgIGlmIChjb250ZW50ID09PSBcIlwiIHx8IGRhdGVfcGlja2VyLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRvZG8gPSBuZXcgVG9kbyhwYXJzZUludChzZWxlY3QudmFsdWUpLCBjb250ZW50LCBkYXRlX3BpY2tlci52YWx1ZSk7XG4gICAgdmFyIHRvZG9fdG9fSlNPTiA9IEpTT04uc3RyaW5naWZ5KHRvZG8pO1xuICAgIGZldGNoKFwiaHR0cDovL2lzYWt1cmEzMTMxLnpvbm9wby5ydS9kZWFsc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IHRvZG9fdG9fSlNPTixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChqc29uKSB7IHJldHVybiBHZW5lcmF0ZURvbShqc29uKTsgfSk7XG4gICAgZmllbGQudmFsdWUgPSBcIlwiO1xufVxuLy/QntCx0YDQsNCx0L7RgtGH0LjQuiDQutC90L7Qv9C60Lgg0LTQvtCx0LDQstC70LXQvdC40Y8g0LTQtdC70LBcbmJ1dHRvbl9wbHVzLm9uY2xpY2sgPSBhZGRUYXNrO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICB9XG59KTtcbi8vINCk0YPQvdC60YbQuNGPINC30LDQsdC+0YDQsCDQtNCw0L3QvdGL0YUg0YEg0YHQtdGA0LLQtdGA0LAg0Lgg0LLRi9Cy0L7QtNCwINC90LAg0Y3QutGA0LDQvVxuZnVuY3Rpb24gZHJhd19vbl9sb2FkKCkge1xuICAgIGZldGNoKFwiaHR0cDovL2lzYWt1cmEzMTMxLnpvbm9wby5ydS9kZWFsc1wiKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHsgcmV0dXJuIEdlbmVyYXRlRG9tKGpzb24pOyB9KTtcbn1cbmRyYXdfb25fbG9hZCgpO1xuLy/Qo9C90LjQstC10YDRgdCw0LvRjNC90LDRjyDRhNGD0L3QutGG0LjRjyDQvtGC0YDQuNGB0L7QstC60LgsINC60L7RgtC+0YDQsNGPINGDINC90LDRgSDQstGB0YLQsNCy0LvRj9C10YIgdG9kbyDQsiBET01cbmZ1bmN0aW9uIEdlbmVyYXRlRG9tKG9iaikge1xuICAgIHZhciB0b2RvcyA9IG9iajtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBfYSA9IHRvZG9zW2ldLCBwcmlvcml0eSA9IF9hLnByaW9yaXR5LCB0ZXh0ID0gX2EudGV4dCwgZHQgPSBfYS5kdCwgZGwgPSBfYS5kbCwgaWQgPSBfYS5pZDtcbiAgICAgICAgZGVhbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBcIlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndyYXBfdGFzayBcIiArIGltcG9ydGFudF9jb2xvcltwcmlvcml0eSAtIDFdICsgXCJcXFwiIGlkPVxcXCJcIiArIGlkICsgXCJcXFwiPiBcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvZG9fdGV4dFxcXCI+IFwiICsgdGV4dCArIFwiIDwvcD5cXG4gICAgICAgICAgICAgICAgPHA+IFwiICsgZHQgKyBcIiAvIFwiICsgZGwgKyBcIiA8L3A+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucyBtZC1kZWxldGVcXFwiPjwvaT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwiKTtcbiAgICAgICAgZGVsZXRlSXRlbSgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0b2Rvcyk7XG59XG4vL9Ce0LHRgNCw0LHQvtGC0YfQuNC6INGD0LTQsNC70LXQvdC40Y8g0LTQtdC70LBcbmRlbGV0ZUl0ZW0oKTtcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oKSB7XG4gICAgdmFyIGRlbGV0ZV9pY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZC1kZWxldGVcIik7XG4gICAgdmFyIGRlbGV0ZV9tYXAgPSBBcnJheS5mcm9tKGRlbGV0ZV9pY29ucyk7XG4gICAgZGVsZXRlX21hcC5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd3JhcF90YXNrID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHdyYXBfdGFzay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBmZXRjaChcImh0dHA6Ly9pc2FrdXJhMzEzMS56b25vcG8ucnUvZGVhbC9cIiArIHdyYXBfdGFzay5pZCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9jb2RlLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9