(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-typeoflogin-type-of-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/typeoflogin/type-of-login.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/typeoflogin/type-of-login.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\" class=\"center\">\r\n    <ion-title >NicaServicios</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"size\">\r\n  <div class=\"vertical-menu\">\r\n    <a href=\"/signup\">\r\n      <div class=\"container\">\r\n        <img src=\"assets\\images\\solicitantes.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n        <div class=\"middle\">\r\n          <div class=\"text\">Registrate como solicitante</div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n    <a href=\"/signuppro\">\r\n      <div class=\"container\">\r\n        <img src=\"assets\\images\\profesionales.jpg\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\r\n        <div class=\"middle\">\r\n          <div class=\"text\">Registrate como profesional</div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div style=\"text-align: center; display: block; margin-top: 1%;\" color=\"primary\">\r\n    Ya tienes una cuenta?&nbsp;&nbsp;\r\n  <a href='/login'>Inicia sesion</a>\r\n</div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Pages/typeoflogin/type-of-login-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/typeoflogin/type-of-login-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TypeOfLoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfLoginPageRoutingModule", function() { return TypeOfLoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _type_of_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-of-login.page */ "./src/app/Pages/typeoflogin/type-of-login.page.ts");




const routes = [
    {
        path: '',
        component: _type_of_login_page__WEBPACK_IMPORTED_MODULE_3__["TypeOfLoginPage"]
    }
];
let TypeOfLoginPageRoutingModule = class TypeOfLoginPageRoutingModule {
};
TypeOfLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TypeOfLoginPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/typeoflogin/type-of-login.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/Pages/typeoflogin/type-of-login.module.ts ***!
  \***********************************************************/
/*! exports provided: TypeOfLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfLoginPageModule", function() { return TypeOfLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _type_of_login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type-of-login-routing.module */ "./src/app/Pages/typeoflogin/type-of-login-routing.module.ts");
/* harmony import */ var _type_of_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type-of-login.page */ "./src/app/Pages/typeoflogin/type-of-login.page.ts");







let TypeOfLoginPageModule = class TypeOfLoginPageModule {
};
TypeOfLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _type_of_login_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypeOfLoginPageRoutingModule"]
        ],
        declarations: [_type_of_login_page__WEBPACK_IMPORTED_MODULE_6__["TypeOfLoginPage"]]
    })
], TypeOfLoginPageModule);



/***/ }),

/***/ "./src/app/Pages/typeoflogin/type-of-login.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/Pages/typeoflogin/type-of-login.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vertical-menu {\n  width: 100%;\n  height: 100%;\n}\n\n.vertical-menu a {\n  background-color: #eee;\n  color: black;\n  display: block;\n  padding: 12px;\n  text-decoration: none;\n  width: 100%;\n  height: 50%;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100;\n  height: 100%;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  opacity: 0.3;\n}\n\n.middle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .middle {\n  opacity: 0.5;\n}\n\n.text {\n  background-color: #4caf50;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n\n@media only screen and (max-width: 900px) {\n  .size {\n    width: 100%;\n    height: 96%;\n  }\n}\n\n@media only screen and (min-width: 700px) {\n  .size {\n    width: 100%;\n    height: 96%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdHlwZW9mbG9naW4vQzpcXFVzZXJzXFxVc3VhcmlvXFxEb2N1bWVudHNcXFByb3llY3Rvc0lvbmljXFxqY29ybmVqb2d0LmdpdGh1Yi5pby9zcmNcXGFwcFxcUGFnZXNcXHR5cGVvZmxvZ2luXFx0eXBlLW9mLWxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvdHlwZW9mbG9naW4vdHlwZS1vZi1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBSUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNELGdDQUFBO0VBQ0Qsb0NBQUE7RUFDRSxrQkFBQTtBQ0xGOztBRFlBO0VBQ0ksWUFBQTtBQ1RKOztBRFlBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEY0E7RUFDRTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VDWEE7QUFDRjs7QURjRTtFQUNBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNaQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvdHlwZW9mbG9naW4vdHlwZS1vZi1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2VzdGlsb3MgZGVsIG1lbnVcclxuXHJcbi52ZXJ0aWNhbC1tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1tZW51IGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbi8vZXN0aWxvcyBkZSBsYSBpbWFnZW4gY29uIGVmZWN0b1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuXHJcbiAgLy8gdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIC8vIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4tbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyAgLy8uY29udGFpbmVyOmhvdmVyIC5pbWFnZSB7XHJcbi8vICAgIG9wYWNpdHk6IDAuMztcclxuLy8gIH1cclxuXHJcbi5jb250YWluZXI6aG92ZXIgLm1pZGRsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjUwO1xyXG4gIH1cclxuXHJcbi50ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuc2l6ZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDk2JTtcclxuICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgLnNpemV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5NiU7XHJcbiAgfVxyXG4gIH0iLCIudmVydGljYWwtbWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52ZXJ0aWNhbC1tZW51IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmltYWdlIHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLm1pZGRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi50ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMzJweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NiU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLnNpemUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTYlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/Pages/typeoflogin/type-of-login.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/typeoflogin/type-of-login.page.ts ***!
  \*********************************************************/
/*! exports provided: TypeOfLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfLoginPage", function() { return TypeOfLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TypeOfLoginPage = class TypeOfLoginPage {
    constructor() { }
    ngOnInit() {
    }
};
TypeOfLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-of-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./type-of-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/typeoflogin/type-of-login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./type-of-login.page.scss */ "./src/app/Pages/typeoflogin/type-of-login.page.scss")).default]
    })
], TypeOfLoginPage);



/***/ })

}]);
//# sourceMappingURL=Pages-typeoflogin-type-of-login-module-es2015.js.map