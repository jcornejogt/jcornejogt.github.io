function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-feed-feed-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/modal-edit-service/modal-edit-service.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/modal-edit-service/modal-edit-service.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalEditServiceModalEditServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"center\">\r\n    <ion-title>Editar servicio</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismissModal()\">Cerrar</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <form (ngSubmit)=\"editService(editServiceForm.value)\" [formGroup]=\"editServiceForm\">\r\n\r\n    <ion-list>\r\n\r\n      <ion-item>\r\n        \r\n        <input type=\"hidden\" formControlName=\"id\">\r\n\r\n        <ion-label color=\"primary\" position=\"stacked\">Nombre del Servicio</ion-label>\r\n        <ion-input type=\"text\" placehorder=\"Ej: Jardineria\" formControlName=\"nombreServicio\"></ion-input>\r\n     \r\n        <ion-label color=\"primary\" position=\"stacked\">Descripcion del servicio</ion-label>\r\n        <ion-input type=\"text\" placehorder=\"Ej: Jardineria\" formControlName=\"descripcionServicio\"></ion-input>\r\n     \r\n        <ion-label color=\"primary\" position=\"stacked\">Profesional</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"idProfesional\"></ion-input>\r\n        \r\n        <input type=\"submit\" class=\"btn--blue btn--add\" [disabled]=\"!editServiceForm.valid\" value=\"Guardar Cambios\">\r\n      </ion-item>\r\n\r\n\r\n    </ion-list>\r\n  </form>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/feed/feed.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/feed/feed.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedFeedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"center\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button (click)=\"logOut()\">\r\n        <ion-icon name=\"exit-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Servicios</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar (ionInput)=\"searchServices($event)\"></ion-searchbar>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of services\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"../../../assets/images/nicaBandera.png\">\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <h2>{{item.data.nombreServicio}}</h2>\r\n        <p>{{item.data.idProfesional}}</p>\r\n        <p>{{item.data.descripcionServicio}}</p>\r\n      </ion-label>\r\n      <button class=\"btn--green btn--s btn1\" (click)=\"editService(item.id)\">Editar</button>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!-- fab placed to the bottom end -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addService()\">\r\n      <ion-icon name=\"add-circle\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Components/modal-edit-service/modal-edit-service.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/Components/modal-edit-service/modal-edit-service.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalEditServiceModalEditServiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbW9kYWwtZWRpdC1zZXJ2aWNlL21vZGFsLWVkaXQtc2VydmljZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Components/modal-edit-service/modal-edit-service.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/Components/modal-edit-service/modal-edit-service.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ModalEditServiceComponent */

  /***/
  function srcAppComponentsModalEditServiceModalEditServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalEditServiceComponent", function () {
      return ModalEditServiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_firebase_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase-service.service */
    "./src/app/services/firebase-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ModalEditServiceComponent = /*#__PURE__*/function () {
      function ModalEditServiceComponent(ModalController, firebaseServiceService, router, formBuilder) {
        _classCallCheck(this, ModalEditServiceComponent);

        this.ModalController = ModalController;
        this.firebaseServiceService = firebaseServiceService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.currentStatus = 1;
        this.editServiceForm = formBuilder.group({
          id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          nombreServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          descripcionServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          idProfesional: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
      }

      _createClass(ModalEditServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var editSubscribe = this.firebaseServiceService.getService(this.documentid).subscribe(function (service) {
            _this.currentStatus = 2;

            _this.editServiceForm.setValue({
              id: _this.documentid,
              nombreServicio: service.payload.data()['nombreServicio'],
              idProfesional: service.payload.data()['idProfesional'],
              descripcionServicio: service.payload.data()['descripcionServicio']
            });

            editSubscribe.unsubscribe();
          });
        }
      }, {
        key: "editService",
        value: function editService(form) {
          var _this2 = this;

          var documentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.documentid;
          var data = {
            nombreServicio: form.nombreServicio,
            idProfesional: form.idProfesional,
            descripcionServicio: form.descripcionServicio
          };
          this.firebaseServiceService.updateService(documentId, data).then(function () {
            _this2.currentStatus = 1;

            _this2.editServiceForm.setValue({
              nombreServicio: '',
              idProfesional: '',
              descripcionServicio: ''
            });

            console.log('Documento editado exitósamente');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.ModalController.dismiss();
        }
      }]);

      return ModalEditServiceComponent;
    }();

    ModalEditServiceComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
      }, {
        type: src_app_services_firebase_service_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ModalEditServiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-modal-edit-service',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-edit-service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/modal-edit-service/modal-edit-service.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-edit-service.component.scss */
      "./src/app/Components/modal-edit-service/modal-edit-service.component.scss"))["default"]]
    })], ModalEditServiceComponent);
    /***/
  },

  /***/
  "./src/app/Pages/feed/feed-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/Pages/feed/feed-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: FeedPageRoutingModule */

  /***/
  function srcAppPagesFeedFeedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function () {
      return FeedPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/Pages/feed/feed.page.ts");

    var routes = [{
      path: '',
      component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }];

    var FeedPageRoutingModule = function FeedPageRoutingModule() {
      _classCallCheck(this, FeedPageRoutingModule);
    };

    FeedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/feed/feed.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/Pages/feed/feed.module.ts ***!
    \*******************************************/

  /*! exports provided: FeedPageModule */

  /***/
  function srcAppPagesFeedFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
      return FeedPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Components_modal_edit_service_modal_edit_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../Components/modal-edit-service/modal-edit-service.component */
    "./src/app/Components/modal-edit-service/modal-edit-service.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _feed_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./feed-routing.module */
    "./src/app/Pages/feed/feed-routing.module.ts");
    /* harmony import */


    var _feed_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/Pages/feed/feed.page.ts");

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_8__["FeedPageRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase)],
      declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_9__["FeedPage"], _Components_modal_edit_service_modal_edit_service_component__WEBPACK_IMPORTED_MODULE_1__["ModalEditServiceComponent"]],
      entryComponents: [_Components_modal_edit_service_modal_edit_service_component__WEBPACK_IMPORTED_MODULE_1__["ModalEditServiceComponent"]]
    })], FeedPageModule);
    /***/
  },

  /***/
  "./src/app/Pages/feed/feed.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/Pages/feed/feed.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFeedFeedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvZmVlZC9DOlxcVXNlcnNcXFVzdWFyaW9cXERvY3VtZW50c1xcUHJveWVjdG9zSW9uaWNcXGpjb3JuZWpvZ3QuZ2l0aHViLmlvL3NyY1xcYXBwXFxQYWdlc1xcZmVlZFxcZmVlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/feed/feed.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/Pages/feed/feed.page.ts ***!
    \*****************************************/

  /*! exports provided: FeedPage */

  /***/
  function srcAppPagesFeedFeedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
      return FeedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _Components_modal_edit_service_modal_edit_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../Components/modal-edit-service/modal-edit-service.component */
    "./src/app/Components/modal-edit-service/modal-edit-service.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_firebase_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/firebase-service.service */
    "./src/app/services/firebase-service.service.ts");

    var FeedPage = /*#__PURE__*/function () {
      function FeedPage(router, firebaseServiceService, modalController, authSvc, afAuth) {
        _classCallCheck(this, FeedPage);

        this.router = router;
        this.firebaseServiceService = firebaseServiceService;
        this.modalController = modalController;
        this.authSvc = authSvc;
        this.afAuth = afAuth;
        this.services = [];
      }

      _createClass(FeedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.firebaseServiceService.getServices().subscribe(function (service) {
            _this3.services = [];
            service.forEach(function (service) {
              _this3.services.push({
                id: service.payload.doc.id,
                data: service.payload.doc.data()
              });

              console.log("info de coleccion: " + _this3.services.toString());
            });
          });
        }
      }, {
        key: "searchServices",
        value: function searchServices($event) {
          var value = $event.target.value;
          console.log("La busqueda es:" + value);
        }
      }, {
        key: "editService",
        value: function editService(docId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _Components_modal_edit_service_modal_edit_service_component__WEBPACK_IMPORTED_MODULE_3__["ModalEditServiceComponent"],
                      componentProps: {
                        documentid: docId
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addService",
        value: function addService() {
          this.router.navigateByUrl('/home/add-service');
        }
      }, {
        key: "logOut",
        value: function logOut() {
          console.log('Hasta pronto!');
          this.afAuth.signOut();
          this.router.navigateByUrl('/login');
        }
      }]);

      return FeedPage;
    }();

    FeedPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_firebase_service_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
      }];
    };

    FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-feed',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./feed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/feed/feed.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./feed.page.scss */
      "./src/app/Pages/feed/feed.page.scss"))["default"]]
    })], FeedPage);
    /***/
  }
}]);
//# sourceMappingURL=Pages-feed-feed-module-es5.js.map