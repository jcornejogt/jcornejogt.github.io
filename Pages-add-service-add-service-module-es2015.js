(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-add-service-add-service-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-service/add-service.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-service/add-service.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"center\">\r\n    <ion-title>Agregar un nuevo servicio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form (ngSubmit)=\"addService(serviceForm.value)\" [formGroup]=\"serviceForm\">\r\n\r\n    <ion-list>\r\n\r\n      <ion-item>\r\n        <ion-label color=\"primary\" position=\"stacked\">Nombre del Servicio</ion-label>\r\n        <ion-input type=\"text\" placehorder=\"Ej: Jardineria\" formControlName=\"nombreServicio\" ></ion-input>\r\n      </ion-item>\r\n      \r\n      <ion-item>\r\n        <ion-label color=\"primary\" position=\"stacked\">Descripcion del servicio</ion-label>\r\n        <ion-input type=\"text\" placehorder=\"Ej: Jardineria\" formControlName=\"descripcionServicio\" ></ion-input>\r\n      </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Profesional</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"idProfesional\" ></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n  <input type=\"submit\" class=\"btn--blue btn--add\" [disabled]=\"!serviceForm.valid\" value=\"Agregar\">\r\n  </form>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/Pages/add-service/add-service-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/add-service/add-service-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddServicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicePageRoutingModule", function() { return AddServicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-service.page */ "./src/app/Pages/add-service/add-service.page.ts");




const routes = [
    {
        path: '',
        component: _add_service_page__WEBPACK_IMPORTED_MODULE_3__["AddServicePage"]
    }
];
let AddServicePageRoutingModule = class AddServicePageRoutingModule {
};
AddServicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddServicePageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/add-service/add-service.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/add-service/add-service.module.ts ***!
  \*********************************************************/
/*! exports provided: AddServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicePageModule", function() { return AddServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-service-routing.module */ "./src/app/Pages/add-service/add-service-routing.module.ts");
/* harmony import */ var _add_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-service.page */ "./src/app/Pages/add-service/add-service.page.ts");







let AddServicePageModule = class AddServicePageModule {
};
AddServicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_service_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddServicePageRoutingModule"]
        ],
        declarations: [_add_service_page__WEBPACK_IMPORTED_MODULE_6__["AddServicePage"]]
    })
], AddServicePageModule);



/***/ }),

/***/ "./src/app/Pages/add-service/add-service.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/Pages/add-service/add-service.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FkZC1zZXJ2aWNlL2FkZC1zZXJ2aWNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Pages/add-service/add-service.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/add-service/add-service.page.ts ***!
  \*******************************************************/
/*! exports provided: AddServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicePage", function() { return AddServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_firebase_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase-service.service */ "./src/app/services/firebase-service.service.ts");





let AddServicePage = class AddServicePage {
    constructor(firebaseServiceService, router, formBuilder) {
        this.firebaseServiceService = firebaseServiceService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.documentId = null;
        this.currentStatus = 1;
        this.serviceForm = formBuilder.group({
            nombreServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descripcionServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            idProfesional: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    addService(form, documentId = this.documentId) {
        debugger;
        console.log(`Status: ${this.currentStatus}`);
        if (this.currentStatus == 1) {
            let data = {
                nombreServicio: form.nombreServicio,
                idProfesional: form.idProfesional,
                descripcionServicio: form.descripcionServicio
            };
            this.firebaseServiceService.createService(data).then(() => {
                console.log('Documento creado exitósamente!');
                this.serviceForm.setValue({
                    nombreServicio: '',
                    idProfesional: '',
                    descripcionServicio: ''
                });
            }, (error) => {
                console.error(error);
            });
        }
        else {
        }
    }
};
AddServicePage.ctorParameters = () => [
    { type: _services_firebase_service_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AddServicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-service',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-service.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-service/add-service.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-service.page.scss */ "./src/app/Pages/add-service/add-service.page.scss")).default]
    })
], AddServicePage);



/***/ })

}]);
//# sourceMappingURL=Pages-add-service-add-service-module-es2015.js.map