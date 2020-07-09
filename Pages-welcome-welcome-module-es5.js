function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-welcome-welcome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/welcome/welcome.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/welcome/welcome.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <app-slides></app-slides>\r\n\r\n  <app-start></app-start>\r\n  \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Pages/welcome/welcome-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Pages/welcome/welcome-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: WelcomePageRoutingModule */

  /***/
  function srcAppPagesWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
      return WelcomePageRoutingModule;
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


    var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/Pages/welcome/welcome.page.ts");

    var routes = [{
      path: '',
      component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }];

    var WelcomePageRoutingModule = function WelcomePageRoutingModule() {
      _classCallCheck(this, WelcomePageRoutingModule);
    };

    WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WelcomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/welcome/welcome.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/Pages/welcome/welcome.module.ts ***!
    \*************************************************/

  /*! exports provided: WelcomePageModule */

  /***/
  function srcAppPagesWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
      return WelcomePageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcome-routing.module */
    "./src/app/Pages/welcome/welcome-routing.module.ts");
    /* harmony import */


    var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/Pages/welcome/welcome.page.ts");
    /* harmony import */


    var src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Components/components.module */
    "./src/app/Components/components.module.ts");

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), src_app_Components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]],
      declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })], WelcomePageModule);
    /***/
  },

  /***/
  "./src/app/Pages/welcome/welcome.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/Pages/welcome/welcome.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divstart {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvd2VsY29tZS9DOlxcVXNlcnNcXFVzdWFyaW9cXERvY3VtZW50c1xcUHJveWVjdG9zSW9uaWNcXGpjb3JuZWpvZ3QuZ2l0aHViLmlvL3NyY1xcYXBwXFxQYWdlc1xcd2VsY29tZVxcd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZzdGFydHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59IiwiLmRpdnN0YXJ0IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Pages/welcome/welcome.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/Pages/welcome/welcome.page.ts ***!
    \***********************************************/

  /*! exports provided: WelcomePage */

  /***/
  function srcAppPagesWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
      return WelcomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomePage = /*#__PURE__*/function () {
      function WelcomePage() {
        _classCallCheck(this, WelcomePage);
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomePage;
    }();

    WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/welcome/welcome.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./welcome.page.scss */
      "./src/app/Pages/welcome/welcome.page.scss"))["default"]]
    })], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=Pages-welcome-welcome-module-es5.js.map