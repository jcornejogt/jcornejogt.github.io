(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-singup-singup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/singup/singup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/singup/singup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\" class=\"center\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/type-of-login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-row>\r\n      <ion-col size-lg=\"12\" size-md=\"12\" size-sm=\"12\" size=\"12\">\r\n        <ion-title>\r\n          Registrarse como cliente</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <ion-row>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Registrate como cliente para encontrar profesionales NICARAGUENSES dispuestos a ofrecerte un amplio ramo de servicios multiple!\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-row>\r\n\r\n\r\n  <form (ngSubmit)=\"signup(SignupForm.value)\" [formGroup]=\"SignupForm\">\r\n      <ion-item>\r\n        <ion-label color=\"primary\" position=\"stacked\">email</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label color=\"primary\" position=\"stacked\">Password</ion-label>\r\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        Ya tienes una cuenta?&nbsp;&nbsp;\r\n        <a href='/login'>Inicia sesion</a>\r\n      </ion-item>\r\n\r\n    <ion-button type=\"submit\" expand=\"block\" shape='round' color=\"success\" [disabled]=\"!SignupForm.valid\">Registrarse</ion-button>\r\n  </form>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Pages/singup/singup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/singup/singup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SingupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupPageRoutingModule", function() { return SingupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _singup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singup.page */ "./src/app/Pages/singup/singup.page.ts");




const routes = [
    {
        path: '',
        component: _singup_page__WEBPACK_IMPORTED_MODULE_3__["SingupPage"]
    }
];
let SingupPageRoutingModule = class SingupPageRoutingModule {
};
SingupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingupPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/singup/singup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Pages/singup/singup.module.ts ***!
  \***********************************************/
/*! exports provided: SingupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupPageModule", function() { return SingupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singup-routing.module */ "./src/app/Pages/singup/singup-routing.module.ts");
/* harmony import */ var _singup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singup.page */ "./src/app/Pages/singup/singup.page.ts");
/* harmony import */ var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Components/components.module */ "./src/app/Components/components.module.ts");








let SingupPageModule = class SingupPageModule {
};
SingupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _singup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingupPageRoutingModule"]
        ],
        declarations: [_singup_page__WEBPACK_IMPORTED_MODULE_6__["SingupPage"]]
    })
], SingupPageModule);



/***/ }),

/***/ "./src/app/Pages/singup/singup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/Pages/singup/singup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.contcenter {\n  text-align: center;\n  padding-top: 50px;\n}\n\n.btncenter {\n  width: 100%;\n  display: block;\n}\n\nion-title {\n  color: white;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvc2luZ3VwL0M6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxQcm95ZWN0b3NJb25pY1xcamNvcm5lam9ndC5naXRodWIuaW8vc3JjXFxhcHBcXFBhZ2VzXFxzaW5ndXBcXHNpbmd1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3Npbmd1cC9zaW5ndXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvc2luZ3VwL3Npbmd1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250Y2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5idG5jZW50ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuIiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRjZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uYnRuY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Pages/singup/singup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/singup/singup.page.ts ***!
  \*********************************************/
/*! exports provided: SingupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupPage", function() { return SingupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let SingupPage = class SingupPage {
    constructor(authSvc, router, formBuilder) {
        this.authSvc = authSvc;
        this.router = router;
        this.formBuilder = formBuilder;
        this.SignupForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() { }
    signup(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = {
                email: form.email,
                password: form.password
            };
            const user = yield this.authSvc.signup(data);
            if (user) {
                console.log('Creado exitosamente!');
                this.router.navigate(['/login']);
            }
            else {
                console.log('Error de registro');
            }
        });
    }
    navigateToTypeOfLogin() {
        this.router.navigate(['type-of-login']);
    }
};
SingupPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SingupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-singup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./singup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/singup/singup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./singup.page.scss */ "./src/app/Pages/singup/singup.page.scss")).default]
    })
], SingupPage);



/***/ })

}]);
//# sourceMappingURL=Pages-singup-singup-module-es2015.js.map