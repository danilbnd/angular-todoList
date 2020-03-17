(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-form/todo-form.component */ "./src/app/todo-form/todo-form.component.ts");




class AppComponent {
    constructor() {
        this.appTitle = 'Angular todo application';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-todo-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appTitle);
    } }, directives: [_todos_todos_component__WEBPACK_IMPORTED_MODULE_1__["TodosComponent"], _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_2__["TodoFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  width: 600px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbC9Eb2N1bWVudHMvd29yay9uZy15b3V0dWJlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Q7QURHQTtFQUNDLG1CQUFBO0FDREQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuXHRwYWRkaW5nLXRvcDogM3JlbTtcblx0d2lkdGg6IDYwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuXG5oMXtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-form/todo-form.component */ "./src/app/todo-form/todo-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/todos-filter.pipe */ "./src/app/shared/todos-filter.pipe.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"],
        _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_5__["TodoFormComponent"],
        _shared_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["TodoFilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"],
                    _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_5__["TodoFormComponent"],
                    _shared_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["TodoFilterPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/todos-filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/todos-filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: TodoFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFilterPipe", function() { return TodoFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TodoFilterPipe {
    transform(todos, search = '') {
        if (!search.trim()) {
            return todos;
        }
        return todos.filter(todo => {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
    }
}
TodoFilterPipe.ɵfac = function TodoFilterPipe_Factory(t) { return new (t || TodoFilterPipe)(); };
TodoFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "todoFilter", type: TodoFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'todoFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/todos.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/todos.service.ts ***!
  \*****************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TodosService {
    constructor(http) {
        this.http = http;
        this.todos = [];
    }
    fetchTodos() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(todos => this.todos = todos));
    }
    onToggle(id) {
        const idx = this.todos.findIndex(t => t.id === id);
        this.todos[idx].completed = !this.todos[idx].completed;
    }
    removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
}
TodosService.ɵfac = function TodosService_Factory(t) { return new (t || TodosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TodosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodosService, factory: TodosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todo-form/todo-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.ts ***!
  \**************************************************/
/*! exports provided: TodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function() { return TodoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/todos.service */ "./src/app/shared/todos.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class TodoFormComponent {
    constructor(todosService) {
        this.todosService = todosService;
        this.title = '';
    }
    ngOnInit() {
    }
    addTodo() {
        const todo = {
            title: this.title,
            id: Date.now(),
            completed: false,
            date: new Date()
        };
        this.todosService.addTodo(todo);
    }
}
TodoFormComponent.ɵfac = function TodoFormComponent_Factory(t) { return new (t || TodoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"])); };
TodoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoFormComponent, selectors: [["app-todo-form"]], decls: 4, vars: 1, consts: [["type", "text", "placeholder", "Add todo title...", 3, "ngModel", "ngModelChange", "keydown.enter"], [3, "click"]], template: function TodoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoFormComponent_Template_input_ngModelChange_1_listener($event) { return ctx.title = $event; })("keydown.enter", function TodoFormComponent_Template_input_keydown_enter_1_listener() { return ctx.addTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoFormComponent_Template_button_click_2_listener() { return ctx.addTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 30px;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\ninput[_ngcontent-%COMP%] {\n  flex-basis: 80%;\n  height: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  outline: none;\n  padding: 0 0.5rem;\n}\nbutton[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  height: 100%;\n  border: 1px solid #ccc;\n  outline: none;\n  background: #eee;\n  transition: 0.3s all;\n  cursor: pointer;\n  margin-left: 10px;\n  border-radius: 5px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #bbbbbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbC9Eb2N1bWVudHMvd29yay9uZy15b3V0dWJlL3NyYy9hcHAvdG9kby1mb3JtL3RvZG8tZm9ybS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdG9kby1mb3JtL3RvZG8tZm9ybS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NEO0FEQ0E7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDRDtBRENBO0VBRUMsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRDtBREVDO0VBQ0MsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3RvZG8tZm9ybS90b2RvLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdG1hcmdpbi10b3A6IDFyZW07XG59XG5pbnB1dHtcblx0ZmxleC1iYXNpczogODAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0b3V0bGluZTogbm9uZTtcblx0cGFkZGluZzogMCAuNXJlbTtcbn1cbmJ1dHRvbntcblx0QGNvbG9yOiAjZWVlO1xuXHRmbGV4LWJhc2lzOiAyMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0b3V0bGluZTogbm9uZTtcblx0YmFja2dyb3VuZDpAY29sb3I7XG5cdHRyYW5zaXRpb246IC4zcyBhbGw7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblxuXHQmOmhvdmVye1xuXHRcdGJhY2tncm91bmQ6IGRhcmtlbihAY29sb3IsIDIwJSk7XG5cdH1cbn1cbiIsImRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5pbnB1dCB7XG4gIGZsZXgtYmFzaXM6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuYnV0dG9uIHtcbiAgZmxleC1iYXNpczogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmJiYmJiO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-form',
                templateUrl: './todo-form.component.html',
                styleUrls: ['./todo-form.component.less']
            }]
    }], function () { return [{ type: _shared_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todos.service */ "./src/app/shared/todos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/todos-filter.pipe */ "./src/app/shared/todos-filter.pipe.ts");







function TodosComponent_div_0_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodosComponent_div_0_ul_3_li_1_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const todo_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.onChange(todo_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodosComponent_div_0_ul_3_li_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const todo_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.removeTodo(todo_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("done", todo_r6.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", todo_r6.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", todo_r6.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, todo_r6.date, "medium"));
} }
function TodosComponent_div_0_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodosComponent_div_0_ul_3_li_1_Template, 11, 9, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "todoFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r2.todosService.todos, ctx_r2.searchString));
} }
function TodosComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No todos now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodosComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodosComponent_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.searchString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodosComponent_div_0_ul_3_Template, 3, 4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodosComponent_div_0_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchString);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.todosService.todos.length)("ngIfElse", _r3);
} }
function TodosComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TodosComponent {
    constructor(todosService) {
        this.todosService = todosService;
        this.loading = true;
        this.searchString = '';
    }
    ngOnInit() {
        this.todosService.fetchTodos()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(500))
            .subscribe(() => {
            this.loading = false;
        });
    }
    onChange(id) {
        this.todosService.onToggle(id);
    }
    removeTodo(id) {
        this.todosService.removeTodo(id);
    }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) { return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"])); };
TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodosComponent, selectors: [["app-todos"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "filter"], ["type", "text", "placeholder", "Filter todo by title...", 3, "ngModel", "ngModelChange"], [4, "ngIf", "ngIfElse"], ["noTodos", ""], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "change"], [1, "rm", 3, "click"], [2, "text-align", "center"]], template: function TodosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodosComponent_div_0_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodosComponent_p_1_Template, 2, 0, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_shared_todos_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["TodoFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 1rem;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 40px;\n  bottom: 5px;\n  font-size: 0.8rem;\n}\n.done[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.rm[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: red;\n  color: #fff;\n  font-size: 1rem;\n  border: none;\n  width: 20px;\n  height: 20px;\n  transition: 0.3s all;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rm[_ngcontent-%COMP%]:hover {\n  background: #990000;\n}\n.filter[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 30px;\n  align-items: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n.filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  height: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  outline: none;\n  padding: 0 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pbC9Eb2N1bWVudHMvd29yay9uZy15b3V0dWJlL3NyYy9hcHAvdG9kb3MvdG9kb3MuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQ0Q7QURMQTtFQU9FLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjtBRGRBO0VBZUcsa0JBQUE7QUNFSDtBRGpCQTtFQWtCRyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNFSDtBREVBO0VBQ0MsNkJBQUE7QUNBRDtBREVBO0VBRUMsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0REO0FER0M7RUFDQyxtQkFBQTtBQ0RGO0FETUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKRDtBREZBO0VBU0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvdG9kb3MvdG9kb3MuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXG5cdGxpe1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRwYWRkaW5nOiAuNXJlbSAxcmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0aW5wdXR7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XG5cdFx0fVxuXHRcdHNtYWxse1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0cmlnaHQ6IDQwcHg7XG5cdFx0XHRib3R0b206IDVweDtcblx0XHRcdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRcdH1cblx0fVxufVxuLmRvbmV7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnJte1xuXHRAY29sb3I6IHJlZDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kOiBAY29sb3I7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGJvcmRlcjogICBub25lO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHR0cmFuc2l0aW9uOiAuM3MgYWxsO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdCY6aG92ZXJ7XG5cdFx0YmFja2dyb3VuZDogZGFya2VuKEBjb2xvciwgMjAlKTtcblx0fVxuXG59XG5cbi5maWx0ZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdG1hcmdpbi10b3A6IDFyZW07XG5cblx0aW5wdXR7XG5cdFx0ZmxleC1iYXNpczogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRwYWRkaW5nOiAwIC41cmVtO1xuXHR9XG59XG4iLCJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbnVsIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG51bCBsaSBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbnVsIGxpIHNtYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDBweDtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmRvbmUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5ybSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzk5MDAwMDtcbn1cbi5maWx0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmZpbHRlciBpbnB1dCB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todos',
                templateUrl: './todos.component.html',
                styleUrls: ['./todos.component.less']
            }]
    }], function () { return [{ type: _shared_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danil/Documents/work/ng-youtube/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map