(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-button/add-button.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-button/add-button.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-button/add-button.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-button/add-button.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-dark mt-2 ml-2\" (click)=\"openDialog()\" >\n  +\n</button>\n"

/***/ }),

/***/ "./src/app/add-button/add-button.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-button/add-button.component.ts ***!
  \****************************************************/
/*! exports provided: AddButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButtonComponent", function() { return AddButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modals_add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/add-book-modal/add-book-modal.component */ "./src/app/modals/add-book-modal/add-book-modal.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(dialog, dataService, configService) {
        this.dialog = dialog;
        this.dataService = dataService;
        this.configService = configService;
        this.addBook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddButtonComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_2__["AddBookModalComponent"], {
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                _this.addBook.emit(result);
            }
        });
    };
    AddButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddButtonComponent.prototype, "addBook", void 0);
    AddButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-button',
            template: __webpack_require__(/*! ./add-button.component.html */ "./src/app/add-button/add-button.component.html"),
            styles: [__webpack_require__(/*! ./add-button.component.css */ "./src/app/add-button/add-button.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], AddButtonComponent);
    return AddButtonComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".books-container {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-flow: wrap;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-books-container class=\"books-container\"></app-books-container>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _books_itam_books_itam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books-itam/books-itam.component */ "./src/app/books-itam/books-itam.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _add_button_add_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-button/add-button.component */ "./src/app/add-button/add-button.component.ts");
/* harmony import */ var _modals_add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/add-book-modal/add-book-modal.component */ "./src/app/modals/add-book-modal/add-book-modal.component.ts");
/* harmony import */ var _modals_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/delete-modal/delete-modal.component */ "./src/app/modals/delete-modal/delete-modal.component.ts");
/* harmony import */ var _modals_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/edit-modal/edit-modal.component */ "./src/app/modals/edit-modal/edit-modal.component.ts");
/* harmony import */ var _books_container_books_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./books-container/books-container.component */ "./src/app/books-container/books-container.component.ts");
/* harmony import */ var _mat_component_mat_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mat-component/mat-component.module */ "./src/app/mat-component/mat-component.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _books_itam_books_itam_component__WEBPACK_IMPORTED_MODULE_8__["BooksItamComponent"],
                _add_button_add_button_component__WEBPACK_IMPORTED_MODULE_11__["AddButtonComponent"],
                _modals_add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_12__["AddBookModalComponent"],
                _modals_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_13__["DeleteModalComponent"],
                _modals_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditModalComponent"],
                _books_container_books_container_component__WEBPACK_IMPORTED_MODULE_15__["BooksContainerComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _mat_component_mat_component_module__WEBPACK_IMPORTED_MODULE_16__["MatComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            entryComponents: [_modals_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_14__["EditModalComponent"], _modals_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_13__["DeleteModalComponent"], _modals_add_book_modal_add_book_modal_component__WEBPACK_IMPORTED_MODULE_12__["AddBookModalComponent"]],
            providers: [_services_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"], _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books-container/books-container.component.css":
/*!***************************************************************!*\
  !*** ./src/app/books-container/books-container.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-books-itam{\r\n \r\n    margin-left:4%;\r\n}"

/***/ }),

/***/ "./src/app/books-container/books-container.component.html":
/*!****************************************************************!*\
  !*** ./src/app/books-container/books-container.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-button (addBook)=\"addBookItem($event)\"></app-add-button>\r\n\r\n<app-books-itam *ngFor=\"let book of books\"\r\n [book]=\"book\" \r\n (deleteBook)=\"removeBook($event)\"\r\n [AddBookData]=\"AddBookData\">\r\n</app-books-itam>"

/***/ }),

/***/ "./src/app/books-container/books-container.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/books-container/books-container.component.ts ***!
  \**************************************************************/
/*! exports provided: BooksContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksContainerComponent", function() { return BooksContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksContainerComponent = /** @class */ (function () {
    function BooksContainerComponent(dataService) {
        this.dataService = dataService;
    }
    BooksContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.fetchData()
            .subscribe(function (data) { return _this.books = data; });
    };
    BooksContainerComponent.prototype.removeBook = function (data) {
        console.log('Deleting book: ', data);
        var bookIndex = this.books.findIndex(function (book) { return book.title === data.title; });
        this.books.splice(bookIndex, 1);
    };
    BooksContainerComponent.prototype.addBookItem = function (AddBookData) {
        console.log('add book =>>>>', AddBookData);
        AddBookData.id = this.books.length + 1;
        this.books.push(AddBookData);
    };
    BooksContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books-container',
            template: __webpack_require__(/*! ./books-container.component.html */ "./src/app/books-container/books-container.component.html"),
            styles: [__webpack_require__(/*! ./books-container.component.css */ "./src/app/books-container/books-container.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BooksContainerComponent);
    return BooksContainerComponent;
}());



/***/ }),

/***/ "./src/app/books-itam/books-itam.component.css":
/*!*****************************************************!*\
  !*** ./src/app/books-itam/books-itam.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-bottom: 34px;\r\n}\r\n.card-img-top{\r\n    width:290px;\r\n    height:430px;\r\n}\r\np{margin-left: 15px;}\r\nh5{margin-left: 15px;}\r\n[type=button]{width: 77px;margin-left: 25px;}\r\n.edit{\r\n    background-color: white;\r\n    color: #289a28d6;\r\n    border: 1px solid #289a28d6;\r\n}\r\n.delete{\r\n    color: #dc3545;\r\n    border: 1px solid #dc3545;\r\n    margin-left: 62px;\r\n}\r\n.col {\r\n    margin-left: 2%;\r\n    display: inline;\r\n}\r\n.mat-grid-list{\r\n    margin-bottom: 34px;\r\n    padding: 30px;\r\n}\r\n.example-card{\r\n    width:290px;\r\n    height:608px;\r\n}\r\n.mat-card-image {\r\n    height: 418px;\r\n}\r\nmat-card-actions{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n"

/***/ }),

/***/ "./src/app/books-itam/books-itam.component.html":
/*!******************************************************!*\
  !*** ./src/app/books-itam/books-itam.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- \n  <div class=\"col-sm\">\n    <div class=\"card mt-4\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" [src]=\"book.image\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ book.title }}</h5>\n        <p class=\"card-text\">{{ book.author }}</p>\n        <p class=\"card-text\">{{ book.date }}</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n       <button  mat-raised-button class=\"edit\" type=\"button\" (click)=\"openDialogEdit()\" >\n          <img src=\"../../assets/images/writing.png\" style=\"width:15px;height:15px;margin-left: 5px\">\n          Edit\n        </button>\n      \n        <div class=\"col\">\n          <button mat-raised-button class=\"delete\" type=\"button\" (click)=\"openDialogRemove(i)\">Delete\n            <img src=\"../../assets/images/delete.png\" style=\"width:15px;height: 15px;\">\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<li *ngIf=\"addBookItem\">\n      You chose: <i>{{AddBookData}}</i>\n</li> -->\n\n\n\n <mat-grid-list cols=\"3\" rowHeight=\"2:1\">\n  <mat-card class=\"example-card\" style=\"width: 20rem;\">\n      <img mat-card-image [src]=\"book.image\" alt=\"Card image cap\">\n      <mat-card-header>\n          <mat-card-title>{{ book.title }}</mat-card-title>\n          <mat-card-subtitle>{{ book.author }}</mat-card-subtitle>\n          <mat-card-subtitle>{{ book.date }}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-actions>\n            <button  mat-raised-button class=\"edit\" type=\"button\" (click)=\"openDialogEdit()\" >\n                <img src=\"../../assets/images/writing.png\" style=\"width:15px;height:15px;margin-left: 5px\">\n                Edit</button>\n            <button  mat-raised-button class=\"delete\" type=\"button\" (click)=\"openDialogRemove(i)\">\n                    <img src=\"../../assets/images/delete.png\" style=\"width:15px;height:15px;\">\n                Edit</button>\n          </mat-card-actions>\n    </mat-card>\n  </mat-grid-list> \n"

/***/ }),

/***/ "./src/app/books-itam/books-itam.component.ts":
/*!****************************************************!*\
  !*** ./src/app/books-itam/books-itam.component.ts ***!
  \****************************************************/
/*! exports provided: BooksItamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksItamComponent", function() { return BooksItamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _modals_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/edit-modal/edit-modal.component */ "./src/app/modals/edit-modal/edit-modal.component.ts");
/* harmony import */ var _modals_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/delete-modal/delete-modal.component */ "./src/app/modals/delete-modal/delete-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BooksItamComponent = /** @class */ (function () {
    function BooksItamComponent(configService, dialog) {
        this.configService = configService;
        this.dialog = dialog;
        this.deleteBook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BooksItamComponent.prototype.ngOnInit = function () {
    };
    BooksItamComponent.prototype.openDialogEdit = function () {
        var dialogRef = this.dialog.open(_modals_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__["EditModalComponent"], {
            width: '489px',
            data: this.book,
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    BooksItamComponent.prototype.openDialogRemove = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__["DeleteModalComponent"], {
            data: this.book
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.deleteBook.emit(result);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BooksItamComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BooksItamComponent.prototype, "AddBookData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BooksItamComponent.prototype, "deleteBook", void 0);
    BooksItamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books-itam',
            template: __webpack_require__(/*! ./books-itam.component.html */ "./src/app/books-itam/books-itam.component.html"),
            styles: [__webpack_require__(/*! ./books-itam.component.css */ "./src/app/books-itam/books-itam.component.css")]
        }),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], BooksItamComponent);
    return BooksItamComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    font-size: 50px;\r\n    /* height: 50px; */\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-dark b-6 mb-3\" style=\"max-width: 100%;padding:20px;\">\n  <div class=\"card-header\">Book-Library</div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mat-component/mat-component.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mat-component/mat-component.module.ts ***!
  \*******************************************************/
/*! exports provided: MatComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatComponentModule", function() { return MatComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var angular_material_fileupload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-material-fileupload */ "./node_modules/angular-material-fileupload/matFileUpload.esm.js");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/fesm5/ngx-material-file-input.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MatComponentModule = /** @class */ (function () {
    function MatComponentModule() {
    }
    MatComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                angular_material_fileupload__WEBPACK_IMPORTED_MODULE_14__["MatFileUploadModule"],
                ngx_material_file_input__WEBPACK_IMPORTED_MODULE_15__["MaterialFileInputModule"],
            ]
        })
    ], MatComponentModule);
    return MatComponentModule;
}());



/***/ }),

/***/ "./src/app/modals/add-book-modal/add-book-modal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modals/add-book-modal/add-book-modal.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm{background: #289a28d6;;}\r\n.delete{background: #dc3545;}\r\n.grid-list{\r\n  margin-top: 41px;\r\n}\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n.mat-date{\r\n    position: relative;\r\n    top: 92px;\r\n    left: -386px;\r\n}\r\n.example-width{\r\n  margin-left: 30px;\r\n}"

/***/ }),

/***/ "./src/app/modals/add-book-modal/add-book-modal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modals/add-book-modal/add-book-modal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n      <h1 mat-dialog-title>Add a book</h1>\n</mat-toolbar>\n<div mat-dialog-content>\n      <form [formGroup]=\"form\">\n            <mat-grid-list class=\"grid-list\" cols=\"3\" rowHeight=\"150px\">\n                  <mat-form-field class=\"example-full-width\">\n                        <input matInput [formControl]=\"bookTitle\" placeholder=\"Title\">\n                        <mat-error *ngIf=\"bookTitle.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n                  <mat-form-field class=\"example-width\">\n                        <input matInput [formControl]=\"bookAuthor\" placeholder=\"Aothur\">\n                        <mat-error *ngIf=\"bookAuthor.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n                  <mat-form-field class=\"example-full-width\">\n                        <input matInput value=[date] [matDatepicker]=\"picker\" placeholder=\"Pick date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n                  </mat-form-field>\n                  <mat-form-field class=\"example-width\">\n                        <input matInput  type=\"url\"  [src]=\"bookImageUrl.imageUrl\" [formControl]=\"bookImageUrl\" placeholder=\"image\">\n                        <mat-error *ngIf=\"bookImageUrl.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n            </mat-grid-list>\n      </form>\n</div>\n\n\n<div mat-dialog-actions>\n      <button class=\"confirm\" type=\"button\" [disabled]=\"!form.valid\" color=\"primary\" mat-raised-button (click)=\"onSend()\">Submit\n            <img src=\"../../../assets/images/down-arrow.png\" style=\"width:15px;height: 15px;\">\n      </button>\n\n      <button class=\"delete\" color=\"primary\" mat-raised-button (click)=\"onNoClick()\">Cancel\n            <img src=\"../../../assets/images/delete (1).png\" style=\"width:15px;height: 15px;\">\n      </button>\n</div>"

/***/ }),

/***/ "./src/app/modals/add-book-modal/add-book-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modals/add-book-modal/add-book-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddBookModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookModalComponent", function() { return AddBookModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// import { url } from 'inspector';
var AddBookModalComponent = /** @class */ (function () {
    function AddBookModalComponent(dialogRef, dataService, data, configService, fb) {
        this.dialogRef = dialogRef;
        this.dataService = dataService;
        this.data = data;
        this.configService = configService;
        this.fb = fb;
        // console.log(this.dataService.bookList)    
        this.form = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            imageUrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    AddBookModalComponent.prototype.ngOnInit = function () {
    };
    AddBookModalComponent.prototype.onSend = function () {
        this.dialogRef.close(this.form.value);
        console.log(this.form.value);
    };
    AddBookModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Object.defineProperty(AddBookModalComponent.prototype, "bookTitle", {
        get: function () {
            return this.form.controls.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBookModalComponent.prototype, "bookAuthor", {
        get: function () {
            return this.form.controls.author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddBookModalComponent.prototype, "bookImageUrl", {
        get: function () {
            return this.form.controls.imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    AddBookModalComponent.prototype.getErrorMessage = function () {
        return 'This field is required';
    };
    AddBookModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book-modal',
            template: __webpack_require__(/*! ./add-book-modal.component.html */ "./src/app/modals/add-book-modal/add-book-modal.component.html"),
            styles: [__webpack_require__(/*! ./add-book-modal.component.css */ "./src/app/modals/add-book-modal/add-book-modal.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], Object, _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AddBookModalComponent);
    return AddBookModalComponent;
}());



/***/ }),

/***/ "./src/app/modals/delete-modal/delete-modal.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modals/delete-modal/delete-modal.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modals/delete-modal/delete-modal.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modals/delete-modal/delete-modal.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>\n  Are you sure ?</h1>\n<div md-dialog-content>{{confirmMessage}}</div>\n<div md-dialog-actions>\n  <button  type=\"button\" class=\"btn btn-success\" (click)=\"onRemove()\">Confirme</button>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onNoClick()\">cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/modals/delete-modal/delete-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modals/delete-modal/delete-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: DeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModalComponent", function() { return DeleteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DeleteModalComponent = /** @class */ (function () {
    function DeleteModalComponent(configService, dialogRef, data, dataService) {
        this.configService = configService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
    }
    DeleteModalComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    DeleteModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteModalComponent.prototype.onRemove = function () {
        this.dialogRef.close(this.data);
    };
    DeleteModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-modal',
            template: __webpack_require__(/*! ./delete-modal.component.html */ "./src/app/modals/delete-modal/delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./delete-modal.component.css */ "./src/app/modals/delete-modal/delete-modal.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], DeleteModalComponent);
    return DeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/modals/edit-modal/edit-modal.component.css":
/*!************************************************************!*\
  !*** ./src/app/modals/edit-modal/edit-modal.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm{\r\n    background: #289a28d6;\r\n    text-align: left;\r\n}\r\n.delete{background: #dc3545;}\r\n.mat-date{\r\n    position: relative;\r\n    top: 92px;\r\n    left: -386px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/modals/edit-modal/edit-modal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modals/edit-modal/edit-modal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit a book</h1>\n<div mat-dialog-content>\n      <form [formGroup]=\"form\">\n            <mat-grid-list cols=\"3\" rowHeight=\"150px\">\n                  <mat-form-field class=\"example-full-width\">\n                        <input matInput [formControl]=\"bookTitle\" placeholder=\"Title\">\n                        <mat-error *ngIf=\"bookTitle.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n\n                  <mat-form-field class=\"example-full-width\">\n                        <input matInput [formControl]=\"bookAuthor\" placeholder=\"Author\">\n                        <mat-error *ngIf=\"bookTitle.invalid\">{{getErrorMessage()}}</mat-error>\n                  </mat-form-field>\n\n                  <mat-form-field class=\"example-full-width\">\n                        <input matInput [matDatepicker]=\"picker\" value=[date] placeholder=\"Pick date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n                  <br>\n            </mat-grid-list>\n      </form>\n</div>\n<div mat-dialog-actions>\n      <button class=\"confirm\" [disabled]=\"!form.valid\" color=\"primary\" mat-raised-button (click)=\"onSubmit()\">Submit\n            <img mat-card-image src=\"../../../assets/images/down-arrow.png\" style=\"width:15px;height:15px;margin-left:4px;margin-top:11px;\">\n      </button>\n\n      <button class=\"delete\" (click)=\"onNoClick()\" color=\"primary\" mat-raised-button>\n            <img src=\"../../../assets/images/delete (1).png\" style=\"width:15px;height: 15px;\">\n      </button>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <div class=\"colcol-md-5\">\n                        <label>Title</label>\n                        <input type=\"text\" [value]=\"data.title\" class=\"form-control\">\n                  </div>\n                  <div class=\"colcol-md-5\">\n                        <label>Author</label>\n                        <input type=\"text\" [value]=\"data.author\" class=\"form-control\">\n                  </div><br> -->"

/***/ }),

/***/ "./src/app/modals/edit-modal/edit-modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modals/edit-modal/edit-modal.component.ts ***!
  \***********************************************************/
/*! exports provided: EditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModalComponent", function() { return EditModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditModalComponent = /** @class */ (function () {
    function EditModalComponent(configService, dialogRef, fb, data, dataService) {
        this.configService = configService;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.dataService = dataService;
        this.form = this.fb.group({
            title: [this.data.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date: [new Date(this.data.date), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            author: [this.data.author, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    EditModalComponent.prototype.ngOnInit = function () {
        console.log(this.form);
    };
    EditModalComponent.prototype.onSubmit = function () {
        this.dialogRef.close(this.form.value);
    };
    EditModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Object.defineProperty(EditModalComponent.prototype, "bookTitle", {
        get: function () {
            return this.form.controls.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditModalComponent.prototype, "bookAuthor", {
        get: function () {
            return this.form.controls.author;
        },
        enumerable: true,
        configurable: true
    });
    EditModalComponent.prototype.getErrorMessage = function () {
        return 'This field is required';
    };
    EditModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-modal',
            template: __webpack_require__(/*! ./edit-modal.component.html */ "./src/app/modals/edit-modal/edit-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-modal.component.css */ "./src/app/modals/edit-modal/edit-modal.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], EditModalComponent);
    return EditModalComponent;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    // private _url:string = "../../assets/data/data.json";
    // public bookList = [];
    // constructor(private httpClient:HttpClient) {
    //   console.log("gggg");
    //   this.fetchData()
    //   .pipe(take(1))
    //     .subscribe(data => {
    //       this.bookList = data;
    //       console.log("000-> ",this.bookList);
    //    });
    // }
    // fetchData():Observable<Config[]> {
    //   return this.httpClient.get<Config[]>(this._url);
    // }
    // fetchchData():Observable<Config[]> {
    //   return this.httpClient.get<Config[]>(this._url);
    // }
    ConfigService.prototype.addData = function (bookData) {
        // 1. push new book into bookslist Array
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this._url = "../../assets/data/data.json";
        this.bookList = [];
        this.fetchData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function (data) {
            _this.bookList = data;
            console.log("000-> ", _this.bookList);
        });
    }
    DataService.prototype.fetchData = function () {
        return this.httpClient.get(this._url);
    };
    DataService.prototype.addData = function (bookData) {
        // 1. push new book into bookslist Array
        return this.httpClient.post('../../assets/data/data.json', bookData);
    };
    DataService.prototype.getBookList = function () {
        var _this = this;
        this.fetchData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function (data) {
            console.log(data);
            _this.bookList = data;
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\גיא\Desktop\newBooksLibrary\bookslibrary\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map