(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/messages/messages.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/messages/messages.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/Pages/messages/messages-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/Pages/messages/messages-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function() { return MessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.page */ "./src/app/Pages/messages/messages.page.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");





const routes = [
    {
        path: '',
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/messages/messages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/messages/messages.module.ts ***!
  \***************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-routing.module */ "./src/app/Pages/messages/messages-routing.module.ts");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/Pages/messages/messages.page.ts");







let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })
], MessagesPageModule);



/***/ }),

/***/ "./src/app/Pages/messages/messages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Pages/messages/messages.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Pages/messages/messages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/messages/messages.page.ts ***!
  \*************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MessagesPage = class MessagesPage {
    constructor() { }
    ngOnInit() {
    }
};
MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/messages/messages.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./messages.page.scss */ "./src/app/Pages/messages/messages.page.scss")).default]
    })
], MessagesPage);



/***/ })

}]);
//# sourceMappingURL=Pages-messages-messages-module-es2015.js.map