function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/adminheader/adminheader.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/adminheader/adminheader.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsAdminheaderAdminheaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"warn\">\r\n  <input type=\"checkbox\" id=\"check\" (click)=\"setClickListener($event)\" />\r\n  <span>\r\n    <a routerLink=\"/admin/homepage\" (click)=\"enableScrolling()\"\r\n      >Pam Construction</a\r\n    >\r\n  </span>\r\n  <span class=\"spacer\"></span>\r\n  <ul>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        [routerLink]=\"['/admin/homepage']\"\r\n        (click)=\"enableScrolling()\"\r\n        routerLinkActive=\"mat-primary\"\r\n        >Accueil</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        [routerLink]=\"['/admin/company-info']\"\r\n        (click)=\"enableScrolling()\"\r\n        routerLinkActive=\"mat-primary\"\r\n        >Compagnie</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        [routerLink]=\"['/admin/team']\"\r\n        (click)=\"enableScrolling()\"\r\n        routerLinkActive=\"mat-primary\"\r\n        >Équipe</a\r\n      >\r\n    </li>\r\n\r\n    <li>\r\n      <a\r\n        mat-button\r\n        [routerLink]=\"['/admin/testimonies']\"\r\n        (click)=\"enableScrolling()\"\r\n        routerLinkActive=\"mat-primary\"\r\n        >Témoignages</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        [routerLink]=\"['/admin/projects']\"\r\n        (click)=\"enableScrolling()\"\r\n        routerLinkActive=\"mat-primary\"\r\n        >Projets</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        [routerLink]=\"['/admin/contacts']\"\r\n        (click)=\"enableScrolling()\"\r\n        routerLinkActive=\"mat-primary\"\r\n        >Contacts\r\n        <span *ngIf=\"cdExists\">({{ listContactDemands.length }})</span></a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        [routerLink]=\"['/admin/quotes']\"\r\n        (click)=\"enableScrolling()\"\r\n        routerLinkActive=\"mat-primary\"\r\n        >Soumissions\r\n        <span *ngIf=\"quotesExists\">({{ listQuotes.length }})</span></a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a\r\n        mat-button\r\n        [routerLink]=\"['/admin/offeredServicesList']\"\r\n        (click)=\"enableScrolling()\"\r\n        routerLinkActive=\"mat-primary\"\r\n        >Services</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a mat-button (click)=\"logOut()\"\r\n        ><i class=\"fas fa-sign-out-alt\"></i>Déconnexion</a\r\n      >\r\n    </li>\r\n  </ul>\r\n\r\n  <label for=\"check\" class=\"checkbtn\">\r\n    <i id=\"menuBtn\" class=\"fas fa-bars\"></i>\r\n  </label>\r\n</mat-toolbar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/auth-page/auth-page.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/auth-page/auth-page.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsAuthPageAuthPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 text-center\">\r\n      <div class=\"jumbotron bg-dark\">\r\n        <h1 class=\"text-white\">PAM Construction</h1>\r\n      </div>\r\n      <mat-card class=\"bg-light\">\r\n        <p class=\"text-danger\" *ngIf=\"errorUser\">Le nom d'utilisateur ou le mot de passe est invalide!</p>\r\n        <mat-card-header>\r\n          <mat-card-title>Connexion administrateur</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n        <form [formGroup]=\"form\" (submit)=\"logIn()\" *ngIf=\"!isLoading\">\r\n          <mat-card-content>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput formControlName=\"username\" placeholder=\"Nom d'utilisateur\">\r\n              <mat-error *ngIf=\"form.get('username').invalid\">Veuillez entrer votre nom d'utilisateur.</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput type=\"password\" formControlName=\"password\" placeholder=\"Mot de passe\">\r\n              <mat-error *ngIf=\"form.get('password').invalid\">Veuillez entrer votre mot de passe.</mat-error>\r\n            </mat-form-field>\r\n          </mat-card-content>\r\n          <button mat-raised-button color=\"warn\" class=\"btn-block\" type=\"submit\">Se connecter</button>\r\n        </form>\r\n      </mat-card>\r\n      <hr>\r\n      <a class=\"text-dark\" routerLink=\"/\">Retour à la page d'accueil</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/company-info-admin/company-info-admin.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/company-info-admin/company-info-admin.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsCompanyInfoAdminCompanyInfoAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\" color=\"warn\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n  <form [formGroup]=\"form\" (submit)=\"updateContactAdmin()\">\r\n    <mat-error *ngIf=\"error\">Une erreur s'est produite dans le formulaire!</mat-error>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"companyName\" placeholder=\"Nom de la compagnie\"\r\n        [value]=\"company.companyName\" />\r\n      <mat-error *ngIf=\"form.get('companyName').invalid\">Veuillez entrer un nom dans la compagnie!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"phoneNumber\" placeholder=\"Numéro de téléphone\"\r\n        [value]=\"company.phoneNumber\" />\r\n      <mat-error *ngIf=\"form.get('phoneNumber').invalid\">Veuillez entrer un numéro de téléphone!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"email\" placeholder=\"Adresse courriel\" [value]=\"company.email\" />\r\n      <mat-error *ngIf=\"form.get('email').invalid\">Veuillez entrer un courriel valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"streetNumber\" placeholder=\"Numéro de porte\"\r\n        [value]=\"company.address.streetNumber\" />\r\n      <mat-error *ngIf=\"form.get('streetNumber').invalid\">Veuillez entrer un numéro de porte!</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"streetName\" placeholder=\"Nom de la rue\"\r\n        [value]=\"company.address.streetName\" />\r\n      <mat-error *ngIf=\"form.get('streetName').invalid\">Veuillez entrer le nom d'une rue!</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"postalCode\" placeholder=\"Code postal\"\r\n        [value]=\"company.address.postalCode\" />\r\n      <mat-error *ngIf=\"form.get('streetName').invalid\">Veuillez entrer un code postal valide!</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"city\" placeholder=\"Ville\" [value]=\"company.address.city\" />\r\n      <mat-error *ngIf=\"form.get('city').invalid\">Veuillez entrer une ville!</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"province\" placeholder=\"Province\" [value]=\"company.address.province\" />\r\n      <mat-error *ngIf=\"form.get('province').invalid\">Veuillez entrer une province</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"country\" placeholder=\"Pays\"\r\n        [value]=\"company.address.country\" />\r\n      <mat-error *ngIf=\"form.get('streetName').invalid\">Veuillez entrer un pays!</mat-error>\r\n    </mat-form-field>\r\n    <br />\r\n    <br />\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Mettre à jour</button>\r\n  </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsContactContactDetailsAdminContactDetailsAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n  <form [formGroup]=\"form\" (submit)=\"saveContactDemand()\">\r\n    <p>\r\n      Nom du client: {{ contactDemand.client.firstName }},{{\r\n      contactDemand.client.lastName }}\r\n    </p>\r\n    <hr>\r\n    <p>Courriel du client: {{ contactDemand.client.email }}</p>\r\n    <hr>\r\n    <p>Téléphone du client: {{ contactDemand.client.phoneNumber }}</p>\r\n    <hr>\r\n    <h2>Demande du client: </h2>\r\n    <p>{{ contactDemand.description }}</p>\r\n    <hr>\r\n    <mat-form-field>\r\n      <textarea matInput rows=\"10\" formControlName=\"answer\" placeholder=\"Réponse au client\"></textarea>\r\n      <mat-error *ngIf=\"form.get('answer').invalid\">Veuillez entrer une réponse avant d'envoyer!\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br />\r\n    <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">\r\n      Envoyer\r\n    </button>\r\n  </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsContactContactsListAdminContactsListAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-accordion multi=\"true\" *ngIf=\"listContactDemand.length > 0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let contactDemand of listContactDemand\">\r\n    <mat-expansion-panel-header>\r\n      {{ contactDemand.id }}: {{ contactDemand.client.firstName }},{{\r\n        contactDemand.client.lastName\r\n      }}\r\n    </mat-expansion-panel-header>\r\n    <p>\r\n      Nom du client: {{ contactDemand.client.firstName }},{{\r\n      contactDemand.client.lastName }}\r\n    </p>\r\n    <p>Courriel du client: {{ contactDemand.client.email }}</p>\r\n    <p>Téléphone du client: {{ contactDemand.client.phoneNumber }}</p>\r\n    <p>{{ contactDemand.description }}</p>\r\n    <p *ngIf=\"selectedOption === selectOption[1]\">Votre réponse: {{ contactDemand.answer }}</p>\r\n    <mat-action-row *ngIf=\"selectedOption !== selectOption[1]\">\r\n      <a mat-raised-button color=\"primary\" [routerLink]=\"['/admin/contactDemandDetails', contactDemand.id]\">Répondre</a>\r\n      <a mat-raised-button color=\"warn\" (click)=\"completeCd(contactDemand)\">Supprimer</a>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<div id=\"dropdownContainer\" *ngIf=\"!isLoading\">\r\n  <div id=\"divDropdown\">\r\n    <mat-form-field id=\"dropdown\">\r\n      <mat-label>Types de demandes</mat-label>\r\n      <select matNativeControl required (change)=\"selectContactDemandsOnChange($event.target.value)\" [(ngModel)]=\"selectedOption\">\r\n        <option [value]=\"selectOption[0]\">\r\n          Non-complétées</option>\r\n        <option [value]=\"selectOption[1]\">\r\n          Complétées</option>\r\n      </select>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/homepage-admin/homepage-admin.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/homepage-admin/homepage-admin.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsHomepageAdminHomepageAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<h1 class=\"titleOfPage\">Bienvenue!</h1>\r\n<p class=\"titleOfPage\">Choisissez une option pour gérer la plateforme de PAM\r\n  construction.</p>\r\n\r\n<div class=\"buttonsCentering\">\r\n  <a class=\"buttonServices\" mat-raised-button color=\"warn\" [routerLink]=\"['/admin/company-info']\">\r\n    Gérer les informations de contact\r\n  </a>\r\n  <a class=\"buttonServices\" mat-raised-button color=\"primary\" [routerLink]=\"['/admin/team']\">\r\n    Gérer l'équipe\r\n  </a>\r\n  <a class=\"buttonServices\" mat-raised-button color=\"primary\" [routerLink]=\"['/admin/testimonies']\">\r\n    Gérer les témoignages\r\n  </a>\r\n  <a class=\"buttonServices\" mat-raised-button color=\"primary\" [routerLink]=\"['/admin/projects']\">\r\n    Gérer les projets\r\n  </a>\r\n  <a class=\"buttonServices\" mat-raised-button color=\"primary\" [routerLink]=\"['/admin/offeredServicesList']\">\r\n    Gérer les services offerts\r\n  </a>\r\n  <a class=\"buttonServices\" mat-raised-button color=\"primary\" [routerLink]=\"['/admin/contacts']\">\r\n    Gérer les demandes de contact\r\n  </a>\r\n\r\n  <a class=\"buttonServices\" mat-raised-button color=\"primary\" [routerLink]=\"['/admin/quotes']\">\r\n    Service de soumissions\r\n  </a>\r\n  <a class=\"buttonServices\" mat-raised-button color=\"accent\" (click)=\"logOut()\">\r\n    <i class=\"fas fa-sign-out-alt\"></i>Déconnexion\r\n  </a>\r\n  <hr />\r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsOfferedServicesAddOfferedServiceAddOfferedServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n    <form [formGroup]=\"form\" (submit)=\"saveOfferedService()\">\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"serviceName\" placeholder=\"Nom du service offert\" />\r\n            <mat-error *ngIf=\"form.get('serviceName').invalid\">Veuillez entrer un nom de service valide!</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea matInput rows=\"10\" formControlName=\"serviceDescription\"\r\n                placeholder=\"Description du service\"></textarea>\r\n            <mat-error *ngIf=\"form.get('serviceDescription').invalid\">Veuillez entrer une description valide!\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <br />\r\n        <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">Sauvegarder</button>\r\n    </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsOfferedServicesOfferedServicesDetailsOfferedServicesDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n    <form [formGroup]=\"form\" (submit)=\"saveOfferedService()\">\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"serviceName\" placeholder=\"Nom du service offert\"\r\n                [value]=\"offeredService.serviceName\" />\r\n            <mat-error *ngIf=\"form.get('serviceName').invalid\">Veuillez entrer un nom de service valide!</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea matInput rows=\"10\" formControlName=\"serviceDescription\" placeholder=\"Description du service\"\r\n                [value]=\"offeredService.serviceDescription\"></textarea>\r\n            <mat-error *ngIf=\"form.get('serviceDescription').invalid\">Veuillez entrer une description valide!\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <br />\r\n        <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">Mettre à jour</button>\r\n    </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsOfferedServicesOfferedServicesListOfferedServicesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-accordion\r\n  multi=\"true\"\r\n  *ngIf=\"listOfferedServices.length > 0 && !isLoading\"\r\n>\r\n  <mat-expansion-panel *ngFor=\"let offService of listOfferedServices\">\r\n    <mat-expansion-panel-header>\r\n      {{ offService.serviceName }}\r\n    </mat-expansion-panel-header>\r\n    <p>{{ offService.serviceDescription }}</p>\r\n    <mat-action-row>\r\n      <a\r\n        mat-button\r\n        color=\"primary\"\r\n        [routerLink]=\"['/admin/offeredServicesDetails', offService.id]\"\r\n        >Mettre à jour</a\r\n      >\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(offService)\">\r\n        Supprimer\r\n      </button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<div class=\"addServiceButton\">\r\n  <a\r\n    class=\"linkAddService\"\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    [routerLink]=\"['/admin/addOfferedService']\"\r\n    >Ajouter un service</a\r\n  >\r\n</div>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/add-project/add-project.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/add-project/add-project.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsProjectsAddProjectAddProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n    <form [formGroup]=\"form\" (submit)=\"saveProject()\">\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"projectName\" placeholder=\"Nom du projet\" />\r\n            <mat-error *ngIf=\"form.get('projectName').invalid\">Veuillez entrer un nom de projet valide!</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"description\" placeholder=\"Description du projet (optionel)\" />\r\n            <mat-error *ngIf=\"form.get('description').invalid\">Veuillez entrer un nom valide!</mat-error>\r\n        </mat-form-field>\r\n        <h2>Photos du projet</h2>\r\n        <div *ngFor=\"let pict of project.listePictures\">\r\n            <div class=\"image-preview\">\r\n                <img [src]=\"pict.lienPhoto\" [alt]=\"form.value.title\" />\r\n                <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"Description de la photo (optionel)\"\r\n                        [(ngModel)]=\"pict.descriptionPhoto\" [ngModelOptions]=\"{standalone: true}\" />\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <mat-error *ngIf=\"imgError\">Veuillez choisir une image valide.</mat-error>\r\n            <div class=\"uploadButtonContainer\">\r\n                <button class=\"uploadButton\" color=\"accent\" mat-stroked-button type=\"button\"\r\n                    (click)=\"filePicker.click()\">\r\n                    Ajouter une image\r\n                </button>\r\n            </div>\r\n            <input type=\"file\" accept=\"image/*\" #filePicker (change)=\"onImagePicked($event)\" />\r\n        </div>\r\n        <br />\r\n        <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">Sauvegarder</button>\r\n    </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/project-details-admin/project-details-admin.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/project-details-admin/project-details-admin.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsProjectsProjectDetailsAdminProjectDetailsAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n    <form [formGroup]=\"form\" (submit)=\"saveProject()\">\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"projectName\" placeholder=\"Nom du projet\"\r\n                [value]=\"project.projectName\" />\r\n            <mat-error *ngIf=\"form.get('projectName').invalid\">Veuillez entrer un nom de projet valide!</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"description\" placeholder=\"Description du projet (optionel)\"\r\n                [value]=\"project.description\" />\r\n            <mat-error *ngIf=\"form.get('description').invalid\">Veuillez entrer un nom valide!</mat-error>\r\n        </mat-form-field>\r\n        <h2>Photos du projet</h2>\r\n        <div *ngFor=\"let pict of project.listePictures\">\r\n            <h3> {{ pict.nomPhoto }} </h3>\r\n            <div class=\"image-preview\">\r\n                <img [src]=\"pict.lienPhoto\" [alt]=\"form.value.title\" />\r\n                <div class=\"deleteButtonClass\">\r\n                    <a class=\"btnDelete\" mat-raised-button color=\"warn\" (click)=\"deletePhoto(pict)\">Supprimer\r\n                        l'image</a>\r\n                </div>\r\n                <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"Description de la photo (optionel)\"\r\n                        [(ngModel)]=\"pict.descriptionPhoto\" [ngModelOptions]=\"{standalone: true}\"\r\n                        [value]=\"pict.descriptionPhoto\" />\r\n                </mat-form-field>\r\n\r\n            </div>\r\n            <hr>\r\n        </div>\r\n        <div>\r\n            <mat-error *ngIf=\"imgError\">Veuillez choisir une image valide.</mat-error>\r\n            <div class=\"uploadButtonContainer\">\r\n                <button class=\"uploadButton\" color=\"accent\" mat-stroked-button type=\"button\"\r\n                    (click)=\"filePicker.click()\">\r\n                    Ajouter une image\r\n                </button>\r\n            </div>\r\n            <input type=\"file\" accept=\"image/*\" #filePicker (change)=\"onImagePicked($event)\" />\r\n        </div>\r\n        <br />\r\n        <button class=\"uploadButton\" mat-raised-button color=\"primary\" type=\"submit\">Sauvegarder</button>\r\n    </form>\r\n    <button class=\"uploadButton\" mat-raised-button color=\"warn\" (click)=\"deleteProject()\">Supprimer le projet</button>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsProjectsProjectsListAdminProjectsListAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner color=\"warn\" *ngIf=\"isLoading\"></mat-spinner>\r\n\r\n<mat-list *ngIf=\"!isLoading\">\r\n    <h3 mat-subheader>Projets</h3>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <mat-list-item class=\"col-12 col-sm-12 col-md-6 col-lg-4 text-center\" *ngFor=\"let project of listeProjects\">\r\n                <div class=\"boxOfProjects hoverableClick\" (click)=\"openProjectDetails(project.id)\">\r\n                    <mat-icon mat-list-icon>folder</mat-icon>\r\n\r\n                    <h4 mat-line>{{project.projectName}}</h4>\r\n                    <p mat-line> {{project.description}} </p>\r\n                </div>\r\n            </mat-list-item>\r\n        </div>\r\n    </div>\r\n</mat-list>\r\n<div class=\"uploadButtonContainer\">\r\n    <button class=\"uploadButton\" mat-raised-button color=\"warn\" [routerLink]='[\"/admin/addProject\"]'>Ajouter un\r\n        projet</button>\r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsQuotesQuoteDetailsAdminQuoteDetailsAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n  <form [formGroup]=\"form\" (submit)=\"saveQuote()\">\r\n    <p>\r\n      Nom du client: {{ quote.client.firstName }},{{\r\n        quote.client.lastName }}\r\n    </p>\r\n    <hr>\r\n    <p>Courriel du client: {{ quote.client.email }}</p>\r\n    <hr>\r\n    <p>Téléphone du client: {{ quote.client.phoneNumber }}</p>\r\n    <hr>\r\n    <h2>Demande du client: </h2>\r\n    <p>{{ quote.description }}</p>\r\n    <hr>\r\n    <div class=\"filesContainer\">\r\n        <div class=\"file\" *ngFor=\"let files of quote.fileLinks\">\r\n            <a href=\"{{ files.fileLink }}\" target=\"_blank\">{{ files.fileName }}</a>\r\n        </div>\r\n    </div>\r\n    <mat-form-field>\r\n      <textarea matInput rows=\"10\" formControlName=\"answer\" placeholder=\"Réponse au client\"></textarea>\r\n      <mat-error *ngIf=\"form.get('answer').invalid\">Veuillez entrer une réponse avant d'envoyer!\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <br />\r\n    <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">\r\n      Envoyer\r\n    </button>\r\n  </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsQuotesQuotesListAdminQuotesListAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-accordion multi=\"true\" *ngIf=\"listQuotes.length > 0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let quote of listQuotes\">\r\n    <mat-expansion-panel-header>\r\n      {{ quote.id }}: {{ quote.client.firstName }},{{\r\n        quote.client.lastName\r\n      }}\r\n    </mat-expansion-panel-header>\r\n    <p>\r\n      Nom du client: {{ quote.client.firstName }},{{\r\n        quote.client.lastName }}\r\n    </p>\r\n    <p>Courriel du client: {{ quote.client.email }}</p>\r\n    <p>Téléphone du client: {{ quote.client.phoneNumber }}</p>\r\n    <p>{{ quote.description }}</p>\r\n    <p>Fichiers joints: {{ quote.fileLinks.length }}</p>\r\n    <p *ngIf=\"selectedOption === selectOption[1]\">Votre réponse: {{ quote.answer }}</p>\r\n    <mat-action-row *ngIf=\"selectedOption !== selectOption[1]\">\r\n      <a mat-raised-button color=\"primary\" [routerLink]=\"['/admin/quoteDetails', quote.id]\">Ouvrir</a>\r\n      <a mat-raised-button color=\"warn\" (click)=\"completeQuote(quote)\">Supprimer</a>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<div id=\"dropdownContainer\" *ngIf=\"!isLoading\">\r\n  <div id=\"divDropdown\">\r\n    <mat-form-field id=\"dropdown\">\r\n      <mat-label>Types de demandes</mat-label>\r\n      <select matNativeControl required (change)=\"selectQuotesOnChange($event.target.value)\" [(ngModel)]=\"selectedOption\">\r\n        <option [value]=\"selectOption[0]\">\r\n          Non-complétées</option>\r\n        <option [value]=\"selectOption[1]\">\r\n          Complétées</option>\r\n      </select>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/add-employee/add-employee.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/add-employee/add-employee.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsTeamAddEmployeeAddEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n  <form [formGroup]=\"form\" (submit)=\"saveEmployee()\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"firstName\" placeholder=\"Prénom de l'employé\" />\r\n      <mat-error *ngIf=\"form.get('firstName').invalid\">Veuillez entrer un prénom valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"lastName\" placeholder=\"Nom de l'employé\" />\r\n      <mat-error *ngIf=\"form.get('lastName').invalid\">Veuillez entrer un nom valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"role\" placeholder=\"Rôle de l'employé dans l'entreprise\" />\r\n      <mat-error *ngIf=\"form.get('role').invalid\">Veuillez entrer un rôle valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea matInput formControlName=\"description\" placeholder=\"Description de l'employé\"></textarea>\r\n      <mat-error *ngIf=\"form.get('description').invalid\">Veuillez entrer une description d'au moins 10 mots!</mat-error>\r\n    </mat-form-field>\r\n    <div class=\"image\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\r\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\r\n    </div>\r\n    <div>\r\n      <mat-error *ngIf=\"imgError\">Veuillez choisir une image valide.</mat-error>\r\n      <div class=\"uploadButtonContainer\">\r\n        <button class=\"uploadButton\" color=\"accent\" mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">\r\n          Choisir l'image\r\n        </button>\r\n      </div>\r\n      <input type=\"file\" accept=\"image/*\" #filePicker (change)=\"onImagePicked($event)\" />\r\n    </div>\r\n    <br />\r\n    <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">Sauvegarder</button>\r\n  </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/employee-details/employee-details.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/employee-details/employee-details.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsTeamEmployeeDetailsEmployeeDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n  <form [formGroup]=\"form\" (submit)=\"saveEmployee()\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"firstName\" placeholder=\"Prénom de l'employé\"\r\n        [value]=\"employee.firstName\" />\r\n      <mat-error *ngIf=\"form.get('firstName').invalid\">Veuillez entrer un prénom valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"lastName\" placeholder=\"Nom de l'employé\"\r\n        [value]=\"employee.lastName\" />\r\n      <mat-error *ngIf=\"form.get('lastName').invalid\">Veuillez entrer un nom valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"role\" placeholder=\"Rôle de l'employé dans l'entreprise\"\r\n        [value]=\"employee.role\" />\r\n      <mat-error *ngIf=\"form.get('role').invalid\">Veuillez entrer un rôle valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea matInput formControlName=\"description\" placeholder=\"Description de l'employé\"\r\n        [value]=\"employee.description\"></textarea>\r\n      <mat-error *ngIf=\"form.get('description').invalid\">Veuillez entrer une description d'au moins 10 mots!</mat-error>\r\n    </mat-form-field>\r\n    <div class=\"image\">\r\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\r\n    </div>\r\n    <div>\r\n      <mat-error *ngIf=\"imgError\">Veuillez choisir une image valide.</mat-error>\r\n      <div class=\"uploadButtonContainer\">\r\n        <button class=\"uploadButton\" color=\"accent\" mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">\r\n          Changer l'image\r\n        </button>\r\n      </div>\r\n      <input type=\"file\" accept=\"image/*\" #filePicker (change)=\"onImagePicked($event)\" />\r\n    </div>\r\n    <br />\r\n    <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">Mettre à jour</button>\r\n  </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/team-list-admin/team-list-admin.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/team-list-admin/team-list-admin.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsTeamTeamListAdminTeamListAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-accordion multi=\"true\" *ngIf=\"listeEmployees.length > 0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let employee of listeEmployees\">\r\n    <mat-expansion-panel-header>\r\n      {{ employee.firstName + \" \" + employee.lastName }}\r\n    </mat-expansion-panel-header>\r\n    <div class=\"image\">\r\n      <img [src]=\"employee.pictureLink\" [alt]=\"employee.firstName\">\r\n    </div>\r\n    <p>{{ employee.role }}</p>\r\n    <p>{{ employee.description }}</p>\r\n    <mat-action-row>\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/admin/employeeDetails', employee.id]\">Mettre à jour</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(employee)\">Supprimer</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<div class=\"addEmployeeButton\">\r\n  <a class=\"linkAddEmployee\" mat-raised-button color=\"accent\" [routerLink]=\"['/admin/addEmployee']\">Ajouter un\r\n    employé</a>\r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/add-testimony/add-testimony.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/add-testimony/add-testimony.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsTestimoniesAddTestimonyAddTestimonyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n    <form [formGroup]=\"form\" (submit)=\"saveTestimony()\">\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"testimonyFName\" placeholder=\"Prénom de la personne\" />\r\n            <mat-error *ngIf=\"form.get('testimonyFName').invalid\">Veuillez entrer un prénom valide!</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"testimonyLName\" placeholder=\"Nom de la personne\" />\r\n            <mat-error *ngIf=\"form.get('testimonyLName').invalid\">Veuillez entrer un nom valide!</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"comment\" placeholder=\"Commentaire de la personne\" />\r\n            <mat-error *ngIf=\"form.get('comment').invalid\">Veuillez entrer un commentaire valide!</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea matInput formControlName=\"relation\" placeholder=\"Relation avec la compagnie\"></textarea>\r\n            <mat-error *ngIf=\"form.get('relation').invalid\">Veuillez entrer une description d'au moins 10 mots!\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <div class=\"image\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\r\n            <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\r\n        </div>\r\n        <div>\r\n            <mat-error *ngIf=\"imgError\">Veuillez choisir une image valide.</mat-error>\r\n            <div class=\"uploadButtonContainer\">\r\n                <button class=\"uploadButton\" color=\"accent\" mat-stroked-button type=\"button\"\r\n                    (click)=\"filePicker.click()\">\r\n                    Choisir l'image\r\n                </button>\r\n            </div>\r\n            <input type=\"file\" accept=\"image/*\" #filePicker (change)=\"onImagePicked($event)\" />\r\n        </div>\r\n        <br />\r\n        <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">Sauvegarder</button>\r\n    </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/testimonies.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/testimonies.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsTestimoniesTestimoniesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-accordion multi=\"true\" *ngIf=\"listeTestimonies.length > 0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let testimony of listeTestimonies\">\r\n    <mat-expansion-panel-header>\r\n      {{ testimony.testimonyFName + \" \" + testimony.testimonyLName }}\r\n    </mat-expansion-panel-header>\r\n    <div class=\"image\">\r\n      <img [src]=\"testimony.photoLink\" [alt]=\"testimony.testimonyLName\">\r\n    </div>\r\n    <p>{{ testimony.relation }}</p>\r\n    <p>{{ testimony.comment }}</p>\r\n    <mat-action-row>\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/admin/testimonyDetails', testimony.id]\">Mettre à jour</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(testimony)\">Supprimer</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<div class=\"addEmployeeButton\">\r\n  <a class=\"linkAddEmployee\" mat-raised-button color=\"accent\" [routerLink]=\"['/admin/addTestimony']\">Ajouter un\r\n    témoignage</a>\r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/testimony-details/testimony-details.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/testimony-details/testimony-details.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsTestimoniesTestimonyDetailsTestimonyDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-adminheader></app-adminheader>\r\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card class=\"col-lg-8 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n  <form [formGroup]=\"form\" (submit)=\"saveTestimony()\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"testimonyFName\" placeholder=\"Prénom de la personne\"\r\n        [value]=\"testimony.testimonyFName\" />\r\n      <mat-error *ngIf=\"form.get('testimonyFName').invalid\">Veuillez entrer un prénom valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"testimonyLName\" placeholder=\"Nom de la personne\"\r\n        [value]=\"testimony.testimonyLName\" />\r\n      <mat-error *ngIf=\"form.get('testimonyLName').invalid\">Veuillez entrer un nom valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"comment\" placeholder=\"Commentaire de la personne\"\r\n        [value]=\"testimony.comment\" />\r\n      <mat-error *ngIf=\"form.get('comment').invalid\">Veuillez entrer un commentaire valide!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea matInput formControlName=\"relation\" placeholder=\"Relation avec la compagnie\"\r\n        [value]=\"testimony.relation\"></textarea>\r\n      <mat-error *ngIf=\"form.get('relation').invalid\">Veuillez entrer une description d'au moins 10 mots!</mat-error>\r\n    </mat-form-field>\r\n    <div class=\"image\">\r\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\r\n    </div>\r\n    <div>\r\n      <mat-error *ngIf=\"imgError\">Veuillez choisir une image valide.</mat-error>\r\n      <div class=\"uploadButtonContainer\">\r\n        <button class=\"uploadButton\" color=\"accent\" mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">\r\n          Changer l'image\r\n        </button>\r\n      </div>\r\n      <input type=\"file\" accept=\"image/*\" #filePicker (change)=\"onImagePicked($event)\" />\r\n    </div>\r\n    <br />\r\n    <button class=\"uploadButton\" mat-raised-button color=\"warn\" type=\"submit\">Mettre à jour</button>\r\n  </form>\r\n</mat-card>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"site-wrap\">\r\n  <app-header></app-header>\r\n  <div class=\"ftco-blocks-cover-1\">\r\n    <div\r\n      class=\"ftco-cover-1 overlay\"\r\n      style=\"background-image: url('./assets/images/headers/aboutHeader.jpg')\"\r\n    >\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-lg-5\"></div>\r\n          <div class=\"col-lg-5 ml-auto\">\r\n            <h1>Service incroyable.</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-team></app-team>\r\n  <app-footer></app-footer>\r\n</div>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"site-wrap\">\r\n  <app-header></app-header>\r\n  <div>\r\n    <div class=\"ftco-blocks-cover-1\">\r\n      <div\r\n        class=\"ftco-cover-1 overlay\"\r\n        style=\"background-image: url('./assets/images/headers/contactHeader.jpg')\"\r\n      >\r\n        <div class=\"container\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-5\"></div>\r\n            <div class=\"col-lg-5 ml-auto\">\r\n              <h1>Bla bla bla.</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"site-section bg-light\" id=\"contact-section\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center text-center\">\r\n          <div class=\"col-7 text-center mb-5\">\r\n            <h2>Contactez-nous</h2>\r\n            <p>\r\n              Pour vos travaux de rénovation ou pour une maison neuve, nous sommes votre entrepreneur de confiance.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <mat-spinner *ngIf=\"isLoading\" color=\"warn\"></mat-spinner>\r\n\r\n        <div id=\"sendSuccess\" class=\"jumbotron jumbotron-fluid bg-white\" *ngIf=\"uploadCompleted\">\r\n          <div class=\"container\">\r\n            <h2 class=\"h2\">Merci, {{ form.value.fName + \" \" + form.value.lName }}</h2>\r\n            <p class=\"lead\">Nous avons bien reçus votre demande.</p>\r\n            <hr class=\"my-4\">\r\n            <p>Un représentant communiquera avec vous sous peu.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"sendError\" class=\"jumbotron jumbotron-fluid bg-white\" *ngIf=\"uploadError\">\r\n          <div class=\"container\">\r\n            <p>Une erreur innatendue s'est produite. Vérifiez les informations et réessayez!</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"!isLoading && !uploadError && !uploadCompleted\">\r\n          <mat-card class=\"col-lg-8 ml-auto text-center\">\r\n            <form [formGroup]=\"form\" (submit)=\"sendContact()\">\r\n              <mat-form-field>\r\n                <input\r\n                  matInput\r\n                  type=\"text\"\r\n                  formControlName=\"fName\"\r\n                  placeholder=\"Votre prénom\"\r\n                />\r\n                <mat-error *ngIf=\"form.get('fName').invalid\"\r\n                  >Veuillez entrer votre prénom.</mat-error\r\n                >\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input\r\n                  matInput\r\n                  type=\"text\"\r\n                  formControlName=\"lName\"\r\n                  placeholder=\"Votre nom\"\r\n                />\r\n                <mat-error *ngIf=\"form.get('lName').invalid\"\r\n                  >Veuillez entrer votre nom.</mat-error\r\n                >\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input\r\n                  matInput\r\n                  type=\"text\"\r\n                  formControlName=\"email\"\r\n                  placeholder=\"Votre adresse courriel\"\r\n                />\r\n                <mat-error *ngIf=\"form.get('email').invalid\"\r\n                  >Veuillez entrer une adresse courriel valide.</mat-error\r\n                >\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input\r\n                  matInput\r\n                  type=\"text\"\r\n                  formControlName=\"phone\"\r\n                  placeholder=\"Votre numéro de téléphone\"\r\n                />\r\n                <mat-error *ngIf=\"form.get('phone').invalid\"\r\n                  >Numéro de téléphone invalide!</mat-error\r\n                >\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                <textarea\r\n                  matInput\r\n                  rows=\"4\"\r\n                  formControlName=\"content\"\r\n                  placeholder=\"Description de votre demande de soumission\"\r\n                ></textarea>\r\n                <mat-error *ngIf=\"form.get('content').invalid\"\r\n                  >Veuillez entrer une description.</mat-error\r\n                >\r\n              </mat-form-field>\r\n\r\n              <label class=\"example-margin\">Préférence de contact:</label><br />\r\n              <mat-radio-group\r\n                formControlName=\"contactPreference\"\r\n                color=\"primary\"\r\n              >\r\n                <mat-radio-button [checked]=\"true\" value=\"Téléphone\"\r\n                  >Téléphone</mat-radio-button\r\n                >\r\n                <mat-radio-button value=\"Courriel\">Courriel</mat-radio-button>\r\n              </mat-radio-group>\r\n              <br />\r\n              <br />\r\n              <button mat-raised-button color=\"primary\" type=\"submit\">\r\n                Envoyer\r\n              </button>\r\n            </form>\r\n          </mat-card>\r\n          <mat-card class=\"col-lg-4 ml-auto text-center\" *ngIf=\"!isLoading\">\r\n            <div id=\"companyCard\" class=\"bg-white p-3 p-md-5\">\r\n              <h3 class=\"text-black mb-4\">{{ company.companyName }}</h3>\r\n              <ul class=\"list-unstyled footer-link\">\r\n                <li class=\"d-block mb-3\">\r\n                  <span class=\"d-block text-black\">Adresse:</span>\r\n                  <span>{{\r\n                    company.address.streetNumber +\r\n                      \" \" +\r\n                      company.address.streetName +\r\n                      \", \" +\r\n                      company.address.city +\r\n                      \", \" +\r\n                      company.address.postalCode +\r\n                      \", \" +\r\n                      company.address.province +\r\n                      \", \" +\r\n                      company.address.country\r\n                  }}</span>\r\n                </li>\r\n                <li class=\"d-block mb-3\">\r\n                  <span class=\"d-block text-black\">Téléphone: </span\r\n                  ><span>{{ company.phoneNumber }}</span>\r\n                </li>\r\n                <li class=\"d-block mb-3\">\r\n                  <span class=\"d-block text-black\">Courriel: </span\r\n                  ><span>{{ company.email }}</span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <br /><br />\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Une erreur s'est produite.</h1>\r\n<div mat-dialog-content>\r\n  <p class=\"mat-body-1\">Vos pièces jointes ont peut être des caractères non permis. Sinon, réessayez plus tard!</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>Ok</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"site-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row text-justified\">\r\n      <div class=\"col-lg-6\">\r\n        <h2 class=\"footer-heading mb-4\">À propos de nous</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis impedit, odit minima repellat,\r\n          doloribus alias amet consequatur inventore. Lorem ipsum dolor sit amet, consectetur adipisicing\r\n          elit. Debitis impedit, odit minima repellat,\r\n          doloribus alias amet consequatur inventore. Lorem ipsum dolor sit amet, consectetur adipisicing\r\n          elit. Debitis impedit, odit minima repellat,\r\n          doloribus alias amet consequatur inventore. doloribus alias amet consequatur inventore. Lorem ipsum dolor sit\r\n          amet, consectetur adipisicing\r\n          elit. Debitis impedit, odit minima repellat,\r\n          doloribus alias.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-lg-6 ml-auto\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n          </div>\r\n          <div class=\"col-lg-3 text-right\">\r\n            <h2 class=\"footer-heading mb-4\">Liens rapides</h2>\r\n            <ul class=\"list-unstyled\">\r\n              <li><a [routerLink]=\"['/']\">Accueil</a></li>\r\n              <li><a [routerLink]=\"['/about']\">À propos</a></li>\r\n              <li><a [routerLink]=\"['/offered-services']\">Services</a></li>\r\n              <li><a [routerLink]=\"['/projects']\">Réalisations</a></li>\r\n              <li><a [routerLink]=\"['/quoting']\">Soumission</a></li>\r\n              <li><a [routerLink]=\"['/contact']\">Contact</a></li>\r\n              <li><a class=\"nav-link\" [routerLink]=\"['/admin/auth']\">\r\n                  <i class=\"fas fa-lock\"></i>\r\n                </a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row pt-5 mt-5 text-center\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"border-top pt-5\">\r\n          <p>\r\n            COPYRIGHTS TODO\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\r\n  <input type=\"checkbox\" id=\"check\" (click)=\"setClickListener($event)\" />\r\n  <label for=\"check\" class=\"checkbtn\">\r\n    <i id=\"menuBtn\" class=\"fas fa-bars\"></i>\r\n  </label>\r\n  <a\r\n    class=\"logo\"\r\n    [routerLink]=\"['/']\"\r\n    (click)=\"enableScrolling()\"\r\n    *ngIf=\"!isLoading\"\r\n    >{{ company.companyName }}</a\r\n  >\r\n\r\n  <ul>\r\n    <li><a [routerLink]=\"['/']\" (click)=\"enableScrolling()\">Accueil</a></li>\r\n    <li>\r\n      <a [routerLink]=\"['/about']\" (click)=\"enableScrolling()\">À propos</a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/offered-services']\" (click)=\"enableScrolling()\"\r\n        >Services</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/projects']\" (click)=\"enableScrolling()\"\r\n        >Réalisations</a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/quoting']\" (click)=\"enableScrolling()\">Soumission</a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/contact']\" (click)=\"enableScrolling()\">Contact</a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/admin/auth']\" (click)=\"enableScrolling()\">\r\n        <i class=\"fas fa-lock\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/homepage/homepage.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/homepage/homepage.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"site-wrap\">\r\n  <app-header></app-header>\r\n  <div class=\"ftco-blocks-cover-1\">\r\n    <div\r\n      class=\"ftco-cover-1 overlay\"\r\n      style=\"background-image: url('./assets/images/headers/pamHeader.jpg')\"\r\n    >\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-lg-6\"></div>\r\n          <div class=\"col-lg-3 ml-auto\">\r\n            <h1>Maintenant.</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"site-section bg-light\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 pr-md-12 mr-auto text-center\">\r\n          <h2 class=\"h2\">Votre projet. Notre promesse.</h2>\r\n          <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim\r\n            maiores mollitia qui quam labore hic asperiores provident maxime\r\n            earum eum.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <mat-spinner *ngIf=\"isLoading\" color=\"warn\"></mat-spinner>\r\n  <div *ngIf=\"!isLoading\">\r\n    <div class=\"site-section\">\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-stretch\">\r\n          <div\r\n            class=\"col-md-6 mb-5 mb-lg-5 col-lg-4\"\r\n            *ngFor=\"let serviceOffered of listeOfferedServices\"\r\n          >\r\n            <div class=\"service-2 h-100\">\r\n              <h3>\r\n                <span>{{ serviceOffered.serviceName }}</span>\r\n              </h3>\r\n              <p>{{ serviceOffered.serviceDescription }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"site-section bg-light\">\r\n      <div class=\"container\">\r\n        <div class=\"row mb-4\">\r\n          <div class=\"col-md-4 mx-auto\">\r\n            <h2 class=\"h2 text-center\">Réalisations</h2>\r\n          </div>\r\n        </div>\r\n        <hr />\r\n        <div *ngFor=\"let project of listeProjects.slice(0, 5)\">\r\n          <div class=\"col-md-4 mx-auto\">\r\n            <h2 class=\"h2 text-center\">{{ project.projectName }}</h2>\r\n          </div>\r\n          <div class=\"row centerItems\">\r\n            <ngp-gallery>\r\n              <ngp-gallery-item\r\n                class=\"projectImages\"\r\n                [image]=\"photo.picture\"\r\n                *ngFor=\"let photo of project.listePictures\"\r\n              >\r\n              </ngp-gallery-item>\r\n            </ngp-gallery>\r\n          </div>\r\n          <hr />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"site-section\">\r\n      <div class=\"container\">\r\n        <div class=\"row mb-5\">\r\n          <div class=\"col-md-4 mx-auto\">\r\n            <h2 class=\"text-center h2\">Témoignages</h2>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div\r\n            class=\"col-lg-3 col-sm-12 mobileCard\"\r\n            *ngFor=\"let testimony of listeTestimonies\"\r\n          >\r\n            <img\r\n              class=\"img-fluid rounded\"\r\n              src=\"{{ testimony.photoLink }}\"\r\n              alt=\"...\"\r\n            />\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">\r\n                {{ testimony.testimonyFName + \" \" + testimony.testimonyLName }}\r\n              </h5>\r\n              <span class=\"position txt-dark bold\">{{\r\n                testimony.relation\r\n              }}</span>\r\n              <p class=\"card-text\">{{ testimony.comment }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n</div>\r\n<ngp-lightbox></ngp-lightbox>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/offered-services/offered-services.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/offered-services/offered-services.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOfferedServicesOfferedServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"site-wrap\">\r\n  <app-header></app-header>\r\n  <div class=\"ftco-blocks-cover-1\">\r\n    <div\r\n      class=\"ftco-cover-1 overlay\"\r\n      style=\"background-image: url('./assets/images/headers/servicesHeader.jpg')\"\r\n    >\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-lg-5\"></div>\r\n          <div class=\"col-lg-5 ml-auto\">\r\n            <h1>Services sans pareil.</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <mat-spinner *ngIf=\"isLoading\" color=\"warn\"></mat-spinner>\r\n  <div class=\"site-section\" *ngIf=\"!isLoading\">\r\n    <div class=\"container\">\r\n      <div class=\"row align-items-stretch\">\r\n        <div\r\n          class=\"col-md-6 mb-5 mb-lg-5 col-lg-4\"\r\n          *ngFor=\"let serviceOffered of listeOfferedServices\"\r\n        >\r\n          <div class=\"service-2 h-100\">\r\n            <h3>\r\n              <span>{{ serviceOffered.serviceName }}</span>\r\n            </h3>\r\n            <p>{{ serviceOffered.serviceDescription }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"site-wrap\">\r\n  <app-header></app-header>\r\n  <div class=\"ftco-blocks-cover-1\">\r\n    <div\r\n      class=\"ftco-cover-1 overlay\"\r\n      style=\"background-image: url('./assets/images/headers/projectsHeader.jpg')\"\r\n    >\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-lg-5\"></div>\r\n          <div class=\"col-lg-5 ml-auto\">\r\n            <h1>Des projets hors du commun.</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"site-section bg-light\">\r\n    <div class=\"container\">\r\n      <div class=\"row mb-4\">\r\n        <div class=\"col-md-4 mx-auto\">\r\n          <h2 class=\"h2 text-center\">Réalisations</h2>\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <!-- AJOUTER BOUTONS NEXT ET PREVIOUS -->\r\n      <mat-spinner *ngIf=\"isLoading\" color=\"warn\"></mat-spinner>\r\n      <div *ngIf=\"!isLoading\">\r\n        <div *ngFor=\"let project of listeProjects\">\r\n          <div class=\"col-md-4 mx-auto\">\r\n            <h2 class=\"h2 text-center\">{{ project.projectName }}</h2>\r\n          </div>\r\n          <div class=\"row centerItems\">\r\n            <ngp-gallery [galleryId]=\"project.id\">\r\n              <ngp-gallery-item\r\n                class=\"projectImages\"\r\n                [image]=\"photo.picture\"\r\n                *ngFor=\"let photo of project.listePictures\"\r\n              >\r\n              </ngp-gallery-item>\r\n            </ngp-gallery>\r\n          </div>\r\n          <hr />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n<ngp-lightbox></ngp-lightbox>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quoting/quoting.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quoting/quoting.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuotingQuotingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"site-wrap\">\r\n  <app-header></app-header>\r\n  <div class=\"ftco-blocks-cover-1\">\r\n    <div class=\"ftco-cover-1 overlay\" style=\"background-image: url('./assets/images/headers/quoteHeader.jpg')\">\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-lg-5\"></div>\r\n          <div class=\"col-lg-5\"></div>\r\n          <div class=\"col-lg-4 ml-auto\">\r\n            <h1>un service inégalé.</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <mat-spinner *ngIf=\"isLoading && !uploadCompleted\" color=\"warn\"></mat-spinner>\r\n\r\n  <div id=\"sendSuccess\" class=\"jumbotron jumbotron-fluid bg-white\" *ngIf=\"uploadCompleted\">\r\n    <div class=\"container\">\r\n      <h2 class=\"h2\">Merci, {{ form.value.fName + \" \" + form.value.lName }}</h2>\r\n      <p class=\"lead\">Nous avons bien reçus votre demande.</p>\r\n      <hr class=\"my-4\">\r\n      <p>Un représentant communiquera avec vous sous peu.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"sendError\" class=\"jumbotron jumbotron-fluid bg-white\" *ngIf=\"uploadError\">\r\n    <div class=\"container\">\r\n      <p>Une erreur innatendue s'est produite. Vérifiez les informations et réessayez!</p>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!isLoading && !uploadCompleted\">\r\n    <div id=\"quoteSelector\" class=\"site-section bg-light\">\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-md-12 mx-auto\">\r\n            <h2 class=\"h2 text-center\">Choississez le service désiré:</h2>\r\n          </div>\r\n        </div>\r\n        <hr />\r\n        <div class=\"row\">\r\n          <div id=\"buttonsCentering\" class=\"col-md-12 col-lg-4\">\r\n            <button class=\"buttonServices\" mat-raised-button color=\"primary\" *ngFor=\"let service of listeServices\"\r\n              (click)=\"addServiceToQuote(service)\">\r\n              {{ service.serviceName }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <hr />\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"quoteService\" class=\"site-section\" *ngIf=\"!serviceNotClicked\">\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-md-12 mx-auto\">\r\n            <h1 class=\"text-center\">\r\n              Demande de soumission pour\r\n              {{ serviceAskedFor.serviceName.toLowerCase() }}\r\n            </h1>\r\n            <form [formGroup]=\"form\" (submit)=\"onSavePost()\">\r\n              <mat-card>\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" formControlName=\"fName\" placeholder=\"Votre prénom\" />\r\n                  <mat-error *ngIf=\"form.get('fName').invalid\">Veuillez entrer votre prénom.</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" formControlName=\"lName\" placeholder=\"Votre nom\" />\r\n                  <mat-error *ngIf=\"form.get('lName').invalid\">Veuillez entrer votre nom.</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput type=\"email\" formControlName=\"email\" placeholder=\"Votre adresse courriel\" />\r\n                  <mat-error *ngIf=\"form.get('email').invalid\">Veuillez entrer une adresse courriel valide.</mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" formControlName=\"phone\" placeholder=\"Votre numéro de téléphone\" />\r\n                  <mat-error *ngIf=\"form.get('phone').invalid\">Veuillez entrer un numéro de téléphone valide.\r\n                    (XXX-XXX-XXXX)</mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                  <textarea matInput rows=\"10\" formControlName=\"content\"\r\n                    placeholder=\"Description de votre demande de soumission\"></textarea>\r\n                  <mat-error *ngIf=\"form.get('content').invalid\">Veuillez entrer une description d'au moins 10 caractères.</mat-error>\r\n                </mat-form-field>\r\n\r\n                <label class=\"example-margin\">Préférence de contact:</label><br />\r\n                <mat-error *ngIf=\"form.get('contactPreference').invalid\">Veuillez choisir une préférence de contact.\r\n                </mat-error>\r\n                <mat-radio-group formControlName=\"contactPreference\" color=\"warn\">\r\n                  <mat-radio-button *ngFor=\"let o of options; let i = index\" [value]=\"i\" [checked]=\"i === 0\">\r\n                    {{ o }}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n                <mat-error *ngIf=\"imgError\">Veuillez choisir une image valide.</mat-error>\r\n                <div>\r\n                  <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">\r\n                    Ajouter une image...\r\n                  </button>\r\n                  <input type=\"file\" accept=\"image/*\" #filePicker (change)=\"onImagePicked($event)\" />\r\n                </div>\r\n                <div *ngFor=\"let imagePreview of imagesPreviews\">\r\n                  <div class=\"image-preview\">\r\n                    <img [src]=\"imagePreview\" [alt]=\"form.value.title\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <br />\r\n                <button mat-raised-button color=\"warn\" type=\"submit\">\r\n                  Envoyer\r\n                </button>\r\n              </mat-card>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team/team.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/team/team.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeamTeamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\" color=\"warn\"></mat-spinner>\r\n<div class=\"site-wrap\" *ngIf=\"!isLoading\">\r\n\r\n  <div class=\"site-section\">\r\n    <div class=\"container\">\r\n      <div class=\"row mb-5\">\r\n        <div class=\"col-md-4 mx-auto\">\r\n          <h2 class=\"text-center h2\">Notre équipe</h2>\r\n          <p>Une équipe passionnée et à la hauteur de vos besoins.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-lg-3 col-sm-12 mobileCard\"\r\n          *ngFor=\"let employee of listeEmployees\"\r\n        >\r\n          <img\r\n            class=\"img-fluid rounded\"\r\n            src=\"{{ employee.pictureLink }}\"\r\n            alt=\"...\"\r\n          />\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">\r\n              {{ employee.firstName + ' ' + employee.lastName }}\r\n            </h5>\r\n            <span class=\"position txt-dark font-weight-bold\">{{\r\n              employee.role\r\n            }}</span>\r\n            <p class=\"card-text font-italic\">{{ employee.description }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/CustomLightboxAdapter.ts":
  /*!******************************************!*\
    !*** ./src/app/CustomLightboxAdapter.ts ***!
    \******************************************/

  /*! exports provided: CustomLightboxAdapter */

  /***/
  function srcAppCustomLightboxAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomLightboxAdapter", function () {
      return CustomLightboxAdapter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2_photoswipe */
    "./node_modules/angular2_photoswipe/fesm2015/angular2_photoswipe.js");

    var CustomLightboxAdapter =
    /*#__PURE__*/
    function (_angular2_photoswipe_) {
      _inherits(CustomLightboxAdapter, _angular2_photoswipe_);

      function CustomLightboxAdapter() {
        var _this;

        _classCallCheck(this, CustomLightboxAdapter);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomLightboxAdapter).apply(this, arguments));
        _this.allowPanToNext = true;
        _this.spacing = 0.12;
        _this.bgOpacity = 1;
        _this.mouseUsed = false;
        _this.loop = false;
        _this.pinchToClose = true;
        _this.closeOnScroll = false;
        _this.closeOnVerticalDrag = true;
        _this.hideAnimationDuration = 333;
        _this.showAnimationDuration = 333;
        _this.showHideOpacity = false;
        _this.escKey = true;
        _this.arrowKeys = true;
        _this.shareEl = false;
        return _this;
      }

      return CustomLightboxAdapter;
    }(angular2_photoswipe__WEBPACK_IMPORTED_MODULE_2__["LightboxAdapter"]);

    CustomLightboxAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CustomLightboxAdapter);
    /***/
  },

  /***/
  "./src/app/admin/components/adminheader/adminheader.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/admin/components/adminheader/adminheader.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsAdminheaderAdminheaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nul {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.spacer {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar {\r\n  height: 70px;\r\n  padding: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.checkbtn {\r\n  font-size: 30px;\r\n  color: white;\r\n  float: right;\r\n  line-height: 80px;\r\n  margin-right: 40px;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n#check {\r\n  display: none;\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n  mat-toolbar {\r\n    line-height: 70px;\r\n  }\r\n  .checkbtn {\r\n    padding-top: 10px;\r\n    display: block;\r\n    float: right;\r\n  }\r\n  ul {\r\n    z-index: 100;\r\n    display: block;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: #5f0606;\r\n    top: 70px;\r\n    left: -100%;\r\n    text-align: center;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n  }\r\n  ul li {\r\n    display: block;\r\n    margin: 15px 0;\r\n    line-height: 30px;\r\n  }\r\n  ul li a {\r\n    font-size: 20px;\r\n  }\r\n  a:hover,\r\n  a.active {\r\n    background: none;\r\n    color: #b40c0c;\r\n  }\r\n\r\n  #check:checked ~ ul {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbmhlYWRlci9hZG1pbmhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNEJBQW9CO0lBQXBCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLE9BQU87RUFDVDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbmhlYWRlci9hZG1pbmhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gIGhlaWdodDogNzBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaGVja2J0biB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNjaGVjayB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgbWF0LXRvb2xiYXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gIC5jaGVja2J0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICM1ZjA2MDY7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIH1cclxuICB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIHVsIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBhOmhvdmVyLFxyXG4gIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogI2I0MGMwYztcclxuICB9XHJcblxyXG4gICNjaGVjazpjaGVja2VkIH4gdWwge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/components/adminheader/adminheader.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/components/adminheader/adminheader.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminheaderComponent */

  /***/
  function srcAppAdminComponentsAdminheaderAdminheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminheaderComponent", function () {
      return AdminheaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_WindowScrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../models/WindowScrolling */
    "./src/app/models/WindowScrolling.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_contact_demand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/contact-demand.service */
    "./src/app/services/contact-demand.service.ts");
    /* harmony import */


    var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/quote.service */
    "./src/app/services/quote.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var AdminheaderComponent =
    /*#__PURE__*/
    function () {
      function AdminheaderComponent(windowScrolling, httpContactDemand, httpQuotes, authService) {
        _classCallCheck(this, AdminheaderComponent);

        this.windowScrolling = windowScrolling;
        this.httpContactDemand = httpContactDemand;
        this.httpQuotes = httpQuotes;
        this.authService = authService;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.cdExists = false;
        this.quotesExists = false;
        this.listContactDemands = [];
        this.listQuotes = [];
      }

      _createClass(AdminheaderComponent, [{
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.userId;
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.windowScrolling.disable();
          this.windowScrolling.enable();
          this.getContactDemandsCount();
          this.getQuotesCount();
          this.authStatusSub = this.authService.getAuthStatusListener().subscribe();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.windowScrolling.disable();
          this.windowScrolling.enable();
          this.authService.logout();
        }
      }, {
        key: "getContactDemandsCount",
        value: function getContactDemandsCount() {
          var _this2 = this;

          this.httpContactDemand.getContactDemands().subscribe(function (data) {
            _this2.listContactDemands = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            if (_this2.listContactDemands.length > 0) {
              _this2.cdExists = true;
            }
          });
        }
      }, {
        key: "getQuotesCount",
        value: function getQuotesCount() {
          var _this3 = this;

          this.httpQuotes.getQuotes().subscribe(function (data) {
            _this3.listQuotes = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            if (_this3.listQuotes.length > 0) {
              _this3.quotesExists = true;
            }
          });
        }
      }, {
        key: "enableScrolling",
        value: function enableScrolling() {
          this.windowScrolling.disable();
          this.windowScrolling.enable();
          var checkButton = document.querySelector("#check");
          checkButton.checked = false;
          document.querySelector("#menuBtn").classList.add("fa-bars");
          document.querySelector("#menuBtn").classList.remove("fa-times");
        }
      }, {
        key: "disableScrolling",
        value: function disableScrolling() {
          this.windowScrolling.disable();
        }
      }, {
        key: "setClickListener",
        value: function setClickListener(event) {
          var inputMenu = event.target;

          if (inputMenu.checked) {
            this.disableScrolling();
            document.querySelector("#menuBtn").classList.remove("fa-bars");
            document.querySelector("#menuBtn").classList.add("fa-times");
          } else {
            this.enableScrolling();
            document.querySelector("#menuBtn").classList.add("fa-bars");
            document.querySelector("#menuBtn").classList.remove("fa-times");
          }
        }
      }]);

      return AdminheaderComponent;
    }();

    AdminheaderComponent.ctorParameters = function () {
      return [{
        type: _models_WindowScrolling__WEBPACK_IMPORTED_MODULE_1__["WindowScrolling"]
      }, {
        type: src_app_services_contact_demand_service__WEBPACK_IMPORTED_MODULE_3__["ContactDemandService"]
      }, {
        type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    AdminheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-adminheader",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adminheader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/adminheader/adminheader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adminheader.component.css */
      "./src/app/admin/components/adminheader/adminheader.component.css")).default]
    })], AdminheaderComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/auth-page/auth-page.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/admin/components/auth-page/auth-page.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsAuthPageAuthPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field,\r\ntextarea {\r\n  padding: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  padding-top: 5rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hdXRoLXBhZ2UvYXV0aC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYXV0aC1wYWdlL2F1dGgtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsXHJcbnRleHRhcmVhIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogNXJlbTtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/components/auth-page/auth-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/components/auth-page/auth-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AuthPageComponent */

  /***/
  function srcAppAdminComponentsAuthPageAuthPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageComponent", function () {
      return AuthPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/Admin */
    "./src/app/models/Admin.ts");
    /* harmony import */


    var src_app_models_Employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/Employee */
    "./src/app/models/Employee.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthPageComponent =
    /*#__PURE__*/
    function () {
      function AuthPageComponent(authService) {
        _classCallCheck(this, AuthPageComponent);

        this.authService = authService;
        this.isLoading = false;
        this.errorUser = false;
      }

      _createClass(AuthPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authStatusSub = this.authService.getAuthStatusListener().subscribe();
          this.activateFormVerify();
        }
      }, {
        key: "activateFormVerify",
        value: function activateFormVerify() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]
            })
          });
        }
      }, {
        key: "logIn",
        value: function logIn() {
          if (this.form.invalid) {
            return;
          }

          this.authenticate();
        }
      }, {
        key: "authenticate",
        value: function authenticate() {
          var _this4 = this;

          this.isLoading = true;
          this.errorUser = false;
          var adminAccount = new _models_Admin__WEBPACK_IMPORTED_MODULE_3__["Admin"]();
          adminAccount.username = this.form.value.username;
          adminAccount.password = this.form.value.password;
          adminAccount.employee = new src_app_models_Employee__WEBPACK_IMPORTED_MODULE_4__["Employee"]();
          this.authService.login(adminAccount);
          setTimeout(function () {
            _this4.errorUser = true;
            _this4.isLoading = false;
          }, 3000);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }]);

      return AuthPageComponent;
    }();

    AuthPageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    AuthPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/auth-page/auth-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-page.component.css */
      "./src/app/admin/components/auth-page/auth-page.component.css")).default]
    })], AuthPageComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/company-info-admin/company-info-admin.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/components/company-info-admin/company-info-admin.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsCompanyInfoAdminCompanyInfoAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\nmat-form-field {\r\n  width: 70%;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jb21wYW55LWluZm8tYWRtaW4vY29tcGFueS1pbmZvLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NvbXBhbnktaW5mby1hZG1pbi9jb21wYW55LWluZm8tYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/components/company-info-admin/company-info-admin.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin/components/company-info-admin/company-info-admin.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CompanyInfoAdminComponent */

  /***/
  function srcAppAdminComponentsCompanyInfoAdminCompanyInfoAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyInfoAdminComponent", function () {
      return CompanyInfoAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/company.service */
    "./src/app/services/company.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CompanyInfoAdminComponent =
    /*#__PURE__*/
    function () {
      function CompanyInfoAdminComponent(httpCompany, router) {
        _classCallCheck(this, CompanyInfoAdminComponent);

        this.httpCompany = httpCompany;
        this.router = router;
        this.isLoading = true;
        this.error = false;
      }

      _createClass(CompanyInfoAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCompany();
        }
      }, {
        key: "updateContactAdmin",
        value: function updateContactAdmin() {
          if (this.form.invalid) {
            return;
          }

          var updatedCompany = this.checkValuesOfCompanyForm(this.company);
          this.updateCompany(updatedCompany);
        }
      }, {
        key: "checkValuesOfCompanyForm",
        value: function checkValuesOfCompanyForm(company) {
          // TODO ajouter des tests de vérification des données
          company.companyName = this.form.value.companyName;
          company.phoneNumber = this.form.value.phoneNumber;
          company.email = this.form.value.email;
          company.address.streetNumber = this.form.value.streetNumber;
          company.address.streetName = this.form.value.streetName;
          company.address.city = this.form.value.city;
          company.address.postalCode = this.form.value.postalCode;
          company.address.country = this.form.value.country;
          company.address.province = this.form.value.province;
          return company;
        }
      }, {
        key: "activateFormVerify",
        value: function activateFormVerify() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.companyName, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.phoneNumber, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.email, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]
            }),
            streetNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.address.streetNumber, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]
            }),
            streetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.address.streetName, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]
            }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.address.city, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]
            }),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.address.postalCode, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]
            }),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.address.country, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]
            }),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.company.address.country, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            })
          });
        }
      }, {
        key: "getCompany",
        value: function getCompany() {
          var _this5 = this;

          this.httpCompany.getCompany().subscribe(function (data) {
            _this5.company = data;
          }, function (error) {
            console.log(error);
          }, function () {
            _this5.isLoading = false;

            _this5.activateFormVerify();
          });
        }
      }, {
        key: "updateCompany",
        value: function updateCompany(companyUpdated) {
          var _this6 = this;

          this.isLoading = true;
          var success = false;
          this.httpCompany.updateCompany(companyUpdated).subscribe(function (data) {
            if (data.message === "SUCCESS") {
              success = true;
            } else {
              success = false;
            }
          }, function (error) {
            console.log(error);
            _this6.isLoading = false;
          }, function () {
            if (success) {
              _this6.router.navigate(["admin/homepage"]);
            } else {
              _this6.error = true;
              _this6.isLoading = false;
            }
          });
        }
      }]);

      return CompanyInfoAdminComponent;
    }();

    CompanyInfoAdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CompanyInfoAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-company-info-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company-info-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/company-info-admin/company-info-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./company-info-admin.component.css */
      "./src/app/admin/components/company-info-admin/company-info-admin.component.css")).default]
    })], CompanyInfoAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.css":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.css ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsContactContactDetailsAdminContactDetailsAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\r\n  width: 90%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .uploadButton {\r\n    width: 50%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZGV0YWlscy1hZG1pbi9jb250YWN0LWRldGFpbHMtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1kZXRhaWxzLWFkbWluL2NvbnRhY3QtZGV0YWlscy1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi51cGxvYWRCdXR0b25Db250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnVwbG9hZEJ1dHRvbiB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnVwbG9hZEJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ContactDetailsAdminComponent */

  /***/
  function srcAppAdminComponentsContactContactDetailsAdminContactDetailsAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailsAdminComponent", function () {
      return ContactDetailsAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_contact_demand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/contact-demand.service */
    "./src/app/services/contact-demand.service.ts");

    var ContactDetailsAdminComponent =
    /*#__PURE__*/
    function () {
      function ContactDetailsAdminComponent(httpContactDemand, router, route) {
        _classCallCheck(this, ContactDetailsAdminComponent);

        this.httpContactDemand = httpContactDemand;
        this.router = router;
        this.route = route;
        this.isLoading = true;
      }

      _createClass(ContactDetailsAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.activateForm();
          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("contactId")) {
              var contactDemandId = +paramMap.get("contactId");

              _this7.getContactDemandId(contactDemandId);
            }
          });
        }
      }, {
        key: "getContactDemandId",
        value: function getContactDemandId(contactDemandId) {
          var _this8 = this;

          this.httpContactDemand.getContactDemandById(contactDemandId).subscribe(function (data) {
            _this8.contactDemand = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this8.isLoading = false;
          });
        }
      }, {
        key: "saveContactDemand",
        value: function saveContactDemand() {
          var _this9 = this;

          if (this.form.invalid) {
            return;
          }

          this.checkFormValues();
          this.httpContactDemand.updateContactDemand(this.contactDemand).subscribe(function (data) {}, function (error) {
            return console.log(error);
          }, function () {
            _this9.router.navigate(["/admin/contacts"]);
          });
        }
      }, {
        key: "checkFormValues",
        value: function checkFormValues() {
          this.contactDemand.answer = this.form.value.answer;
        }
      }, {
        key: "activateForm",
        value: function activateForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]
            })
          });
        }
      }]);

      return ContactDetailsAdminComponent;
    }();

    ContactDetailsAdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_contact_demand_service__WEBPACK_IMPORTED_MODULE_4__["ContactDemandService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ContactDetailsAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-contact-details-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-details-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-details-admin.component.css */
      "./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.css")).default]
    })], ContactDetailsAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsContactContactsListAdminContactsListAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-accordion {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\nmat-expansion-panel {\r\n  width: 70%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n#dropdownContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n#divDropdown {\r\n  width: 70%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  text-align:right;\r\n}\r\n\r\n#dropdown {\r\n  text-align: left;\r\n}\r\n\r\na {\r\n  margin-left: 1rem;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  mat-expansion-panel {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  #divDropdown {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align:right;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3RzLWxpc3QtYWRtaW4vY29udGFjdHMtbGlzdC1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdHMtbGlzdC1hZG1pbi9jb250YWN0cy1saXN0LWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtYWNjb3JkaW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuI2Ryb3Bkb3duQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNkaXZEcm9wZG93biB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcblxyXG4jZHJvcGRvd24ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAjZGl2RHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ContactsListAdminComponent */

  /***/
  function srcAppAdminComponentsContactContactsListAdminContactsListAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsListAdminComponent", function () {
      return ContactsListAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_contact_demand_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/contact-demand.service */
    "./src/app/services/contact-demand.service.ts");

    var ContactsListAdminComponent =
    /*#__PURE__*/
    function () {
      function ContactsListAdminComponent(httpContactDemand) {
        _classCallCheck(this, ContactsListAdminComponent);

        this.httpContactDemand = httpContactDemand;
        this.isLoading = true;
        this.listContactDemand = [];
        this.selectOption = ["incomplete", "complete"];
        this.selectedOption = this.selectOption[0];
      }

      _createClass(ContactsListAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getContactDemands();
        }
      }, {
        key: "completeCd",
        value: function completeCd(cd) {
          var _this10 = this;

          cd.completed = true;
          this.isLoading = true;
          this.httpContactDemand.markCdAsCompleted(cd).subscribe(function (data) {
            console.log(data);
          }, function (error) {
            console.log(error);
            _this10.isLoading = false;
          }, function () {
            _this10.getContactDemands();

            _this10.isLoading = false;
          });
        }
      }, {
        key: "selectContactDemandsOnChange",
        value: function selectContactDemandsOnChange(value) {
          if (value === "incomplete") {
            this.isLoading = true;
            this.selectedOption = this.selectOption[0];
            this.getContactDemands();
          }

          if (value === "complete") {
            this.isLoading = true;
            this.selectedOption = this.selectOption[1];
            this.getContactDemandsCompleted();
          }
        }
      }, {
        key: "getContactDemands",
        value: function getContactDemands() {
          var _this11 = this;

          this.httpContactDemand.getContactDemands().subscribe(function (data) {
            _this11.listContactDemand = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this11.isLoading = false;
          });
        }
      }, {
        key: "getContactDemandsCompleted",
        value: function getContactDemandsCompleted() {
          var _this12 = this;

          this.httpContactDemand.getContactDemandsCompleted().subscribe(function (data) {
            _this12.listContactDemand = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this12.isLoading = false;
          });
        }
      }]);

      return ContactsListAdminComponent;
    }();

    ContactsListAdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_contact_demand_service__WEBPACK_IMPORTED_MODULE_2__["ContactDemandService"]
      }];
    };

    ContactsListAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-contacts-list-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contacts-list-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contacts-list-admin.component.css */
      "./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.css")).default]
    })], ContactsListAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/homepage-admin/homepage-admin.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/components/homepage-admin/homepage-admin.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsHomepageAdminHomepageAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttonsCentering {\r\n  width: 100%;\r\n  margin: auto;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.buttonServices {\r\n  width: 50%;\r\n  display: block;\r\n  margin: 1rem auto 1rem auto;\r\n  padding: 0.5rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .buttonServices {\r\n    width: 70%;\r\n    display: block;\r\n    margin: 1rem auto 1rem auto;\r\n    padding: 0.5rem;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n.titleOfPage {\r\n  width: 100%;\r\n  margin: 1rem auto 1rem auto;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9ob21lcGFnZS1hZG1pbi9ob21lcGFnZS1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2hvbWVwYWdlLWFkbWluL2hvbWVwYWdlLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uc0NlbnRlcmluZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uYnV0dG9uU2VydmljZXMge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMXJlbSBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5idXR0b25TZXJ2aWNlcyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0byAxcmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGVPZlBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvIDFyZW0gYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/homepage-admin/homepage-admin.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/components/homepage-admin/homepage-admin.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: HomepageAdminComponent */

  /***/
  function srcAppAdminComponentsHomepageAdminHomepageAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageAdminComponent", function () {
      return HomepageAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomepageAdminComponent =
    /*#__PURE__*/
    function () {
      function HomepageAdminComponent(router) {
        _classCallCheck(this, HomepageAdminComponent);

        this.router = router;
      }

      _createClass(HomepageAdminComponent, [{
        key: "logOut",
        value: function logOut() {
          this.router.navigate(['/']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageAdminComponent;
    }();

    HomepageAdminComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomepageAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/homepage-admin/homepage-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage-admin.component.css */
      "./src/app/admin/components/homepage-admin/homepage-admin.component.css")).default]
    })], HomepageAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsOfferedServicesAddOfferedServiceAddOfferedServiceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nmat-card {\r\n  width: 100%;\r\n  margin-top:1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n\r\n@media (max-width:600px) {\r\n  .uploadButton {\r\n  width: 50%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9vZmZlcmVkU2VydmljZXMvYWRkLW9mZmVyZWQtc2VydmljZS9hZGQtb2ZmZXJlZC1zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7RUFDQSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvb2ZmZXJlZFNlcnZpY2VzL2FkZC1vZmZlcmVkLXNlcnZpY2UvYWRkLW9mZmVyZWQtc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOjFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5cclxuLnVwbG9hZEJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udXBsb2FkQnV0dG9uIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgLnVwbG9hZEJ1dHRvbiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG59ICBcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: AddOfferedServiceComponent */

  /***/
  function srcAppAdminComponentsOfferedServicesAddOfferedServiceAddOfferedServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOfferedServiceComponent", function () {
      return AddOfferedServiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_service_offered_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/service-offered.service */
    "./src/app/services/service-offered.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_OfferedService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/OfferedService */
    "./src/app/models/OfferedService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddOfferedServiceComponent =
    /*#__PURE__*/
    function () {
      function AddOfferedServiceComponent(httpOfferedServices, router) {
        _classCallCheck(this, AddOfferedServiceComponent);

        this.httpOfferedServices = httpOfferedServices;
        this.router = router;
        this.isLoading = true;
      }

      _createClass(AddOfferedServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activateForm();
          this.isLoading = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "activateForm",
        value: function activateForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            serviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            serviceDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]
            })
          });
        }
      }, {
        key: "saveOfferedService",
        value: function saveOfferedService() {
          var _this13 = this;

          if (this.form.invalid) {
            return;
          }

          this.isLoading = true;
          this.offeredService = new src_app_models_OfferedService__WEBPACK_IMPORTED_MODULE_4__["OfferedService"]();
          this.offeredService.serviceName = this.form.value.serviceName;
          this.offeredService.serviceDescription = this.form.value.serviceDescription;
          this.httpOfferedServices.addOfferedService(this.offeredService).subscribe(function (data) {}, function (error) {
            console.log(error);
            _this13.isLoading = false;
          }, function () {
            // TODO navigate ailleurs
            _this13.router.navigate(["/admin/offeredServicesList"]);
          });
        }
      }]);

      return AddOfferedServiceComponent;
    }();

    AddOfferedServiceComponent.ctorParameters = function () {
      return [{
        type: _services_service_offered_service__WEBPACK_IMPORTED_MODULE_1__["ServiceOfferedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddOfferedServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-add-offered-service",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-offered-service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-offered-service.component.css */
      "./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.css")).default]
    })], AddOfferedServiceComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.css":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.css ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsOfferedServicesOfferedServicesDetailsOfferedServicesDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\r\n  width: 90%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .uploadButton {\r\n    width: 50%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9vZmZlcmVkU2VydmljZXMvb2ZmZXJlZC1zZXJ2aWNlcy1kZXRhaWxzL29mZmVyZWQtc2VydmljZXMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvb2ZmZXJlZFNlcnZpY2VzL29mZmVyZWQtc2VydmljZXMtZGV0YWlscy9vZmZlcmVkLXNlcnZpY2VzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4udXBsb2FkQnV0dG9uQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi51cGxvYWRCdXR0b24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC51cGxvYWRCdXR0b24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: OfferedServicesDetailsComponent */

  /***/
  function srcAppAdminComponentsOfferedServicesOfferedServicesDetailsOfferedServicesDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferedServicesDetailsComponent", function () {
      return OfferedServicesDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_offered_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/service-offered.service */
    "./src/app/services/service-offered.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var OfferedServicesDetailsComponent =
    /*#__PURE__*/
    function () {
      function OfferedServicesDetailsComponent(httpOfferedServices, router, route) {
        _classCallCheck(this, OfferedServicesDetailsComponent);

        this.httpOfferedServices = httpOfferedServices;
        this.router = router;
        this.route = route;
        this.isLoading = true;
      }

      _createClass(OfferedServicesDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.activateForm();
          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("serviceId")) {
              var offeredServiceId = +paramMap.get("serviceId");

              _this14.getOfferedServiceId(offeredServiceId);
            }
          });
        }
      }, {
        key: "getOfferedServiceId",
        value: function getOfferedServiceId(offId) {
          var _this15 = this;

          this.httpOfferedServices.getOfferedServiceById(offId).subscribe(function (data) {
            _this15.offeredService = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this15.setDefaultValues();

            _this15.isLoading = false;
          });
        }
      }, {
        key: "setDefaultValues",
        value: function setDefaultValues() {
          this.form.setValue({
            serviceName: this.offeredService.serviceName,
            serviceDescription: this.offeredService.serviceDescription
          });
        }
      }, {
        key: "saveOfferedService",
        value: function saveOfferedService() {
          var _this16 = this;

          if (this.form.invalid) {
            return;
          }

          this.checkFormValues();
          this.isLoading = true;
          this.httpOfferedServices.updateOfferedService(this.offeredService).subscribe(function (data) {}, function (error) {
            console.log(error);
            _this16.isLoading = false;
          }, function () {
            // TODO navigate ailleurs
            _this16.router.navigate(["/admin/offeredServicesList"]);
          });
        }
      }, {
        key: "checkFormValues",
        value: function checkFormValues() {
          this.offeredService.serviceName = this.form.value.serviceName;
          this.offeredService.serviceDescription = this.form.value.serviceDescription;
        }
      }, {
        key: "activateForm",
        value: function activateForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            serviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]
            }),
            serviceDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]
            })
          });
        }
      }]);

      return OfferedServicesDetailsComponent;
    }();

    OfferedServicesDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_service_offered_service__WEBPACK_IMPORTED_MODULE_3__["ServiceOfferedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    OfferedServicesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-offered-services-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offered-services-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offered-services-details.component.css */
      "./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.css")).default]
    })], OfferedServicesDetailsComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.css":
  /*!************************************************************************************************************!*\
    !*** ./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.css ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsOfferedServicesOfferedServicesListOfferedServicesListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-accordion {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.linkAddService {\r\n  width: 30%;\r\n  margin-top: 2rem;\r\n}\r\n\r\nmat-expansion-panel {\r\n  width: 70%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  mat-expansion-panel {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .linkAddService {\r\n    width: 50%;\r\n    margin-top: 2rem;\r\n  }\r\n}\r\n\r\n.image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\n.addServiceButton {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9vZmZlcmVkU2VydmljZXMvb2ZmZXJlZC1zZXJ2aWNlcy1saXN0L29mZmVyZWQtc2VydmljZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvb2ZmZXJlZFNlcnZpY2VzL29mZmVyZWQtc2VydmljZXMtbGlzdC9vZmZlcmVkLXNlcnZpY2VzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1hY2NvcmRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmxpbmtBZGRTZXJ2aWNlIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIG1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5saW5rQWRkU2VydmljZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxJTtcclxufVxyXG5cclxuLmFkZFNlcnZpY2VCdXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: OfferedServicesListComponent */

  /***/
  function srcAppAdminComponentsOfferedServicesOfferedServicesListOfferedServicesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferedServicesListComponent", function () {
      return OfferedServicesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_service_offered_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/service-offered.service */
    "./src/app/services/service-offered.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OfferedServicesListComponent =
    /*#__PURE__*/
    function () {
      function OfferedServicesListComponent(httpOfferedServices, router) {
        _classCallCheck(this, OfferedServicesListComponent);

        this.httpOfferedServices = httpOfferedServices;
        this.router = router;
        this.isLoading = true;
        this.listOfferedServices = [];
      }

      _createClass(OfferedServicesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getOfferedServices();
        }
      }, {
        key: "getOfferedServices",
        value: function getOfferedServices() {
          var _this17 = this;

          this.httpOfferedServices.getOfferedServices().subscribe(function (data) {
            _this17.listOfferedServices = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this17.isLoading = false;
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(offService) {
          var _this18 = this;

          if (confirm("Êtes-vous sûr de vouloir supprimer le service " + offService.serviceName + "?")) {
            this.isLoading = true;
            this.httpOfferedServices.deleteOfferedService(offService.id).subscribe(function (data) {
              _this18.getOfferedServices();
            }, function (error) {
              console.log(error);
              _this18.isLoading = false;
            });
          }
        }
      }]);

      return OfferedServicesListComponent;
    }();

    OfferedServicesListComponent.ctorParameters = function () {
      return [{
        type: _services_service_offered_service__WEBPACK_IMPORTED_MODULE_1__["ServiceOfferedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    OfferedServicesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-offered-services-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offered-services-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offered-services-list.component.css */
      "./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.css")).default]
    })], OfferedServicesListComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/projects/add-project/add-project.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin/components/projects/add-project/add-project.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsProjectsAddProjectAddProjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 70%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    img {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 1%;\r\n  }\r\n}\r\n\r\nmat-card {\r\n  width: 100%;\r\n  margin-top:1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n.uploadButton {\r\n  width: 50%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9qZWN0cy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJO0lBQ0EsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBOztFQUVFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcHJvamVjdHMvYWRkLXByb2plY3QvYWRkLXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDElO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDElO1xyXG4gIH1cclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6MXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4udXBsb2FkQnV0dG9uQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi51cGxvYWRCdXR0b24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbi51cGxvYWRCdXR0b24ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/projects/add-project/add-project.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/components/projects/add-project/add-project.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddProjectComponent */

  /***/
  function srcAppAdminComponentsProjectsAddProjectAddProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function () {
      return AddProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/project.service */
    "./src/app/services/project.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/file-type.validator */
    "./src/app/models/file-type.validator.ts");
    /* harmony import */


    var src_app_models_Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/Picture */
    "./src/app/models/Picture.ts");
    /* harmony import */


    var src_app_models_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/Project */
    "./src/app/models/Project.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddProjectComponent =
    /*#__PURE__*/
    function () {
      function AddProjectComponent(httpProjectService, router) {
        _classCallCheck(this, AddProjectComponent);

        this.httpProjectService = httpProjectService;
        this.router = router;
        this.isLoading = true;
        this.pictures = [];
        this.imgError = false;
      }

      _createClass(AddProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activateForm();
          this.project = new src_app_models_Project__WEBPACK_IMPORTED_MODULE_6__["Project"]();
          this.project.listePictures = [];
          this.files = [];
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this19 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.reader = new FileReader();

          this.reader.onload = function () {
            if (_this19.form.get("image").valid) {
              _this19.imgError = false;
              _this19.imagePreview = _this19.reader.result;

              _this19.files.push(file);

              _this19.addPicture(file, _this19.imagePreview);
            } else {
              _this19.imgError = true;

              _this19.form.get("image").setValue("empty");
            }
          };

          this.reader.readAsDataURL(file);
        }
      }, {
        key: "addPicture",
        value: function addPicture(file, imagePreview) {
          var pic = new src_app_models_Picture__WEBPACK_IMPORTED_MODULE_5__["Picture"]();
          pic.lienPhoto = imagePreview;
          pic.nomPhoto = this.createUniqueName(file);
          pic.descriptionPhoto = "";
          pic.id = 0;
          this.project.listePictures.push(pic);
        }
      }, {
        key: "createUniqueName",
        value: function createUniqueName(file) {
          var fileNameArray = file.name;
          return fileNameArray;
        }
      }, {
        key: "activateForm",
        value: function activateForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              asyncValidators: [src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]]
            }),
            files: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
          });
          this.isLoading = false;
        }
      }, {
        key: "saveProject",
        value: function saveProject() {
          var _this20 = this;

          if (this.form.invalid) {
            if (this.form.get("image").invalid) {
              this.imgError = true;
            }

            return;
          }

          this.imgError = false;
          this.isLoading = true;

          if (this.checkValues(this.project)) {
            this.httpProjectService.saveProject(this.project, this.files).subscribe(function (data) {}, function (error) {
              console.log(error);
              _this20.isLoading = false;
            }, function () {
              _this20.isLoading = false;

              _this20.router.navigate(["/admin/projects"]);
            });
          }
        }
      }, {
        key: "checkValues",
        value: function checkValues(project) {
          var projectName = this.form.value.projectName;
          var projectDescription = this.form.value.description;
          project.projectName = projectName;
          project.description = projectDescription;
          project.id = 0;
          return true;
        }
      }]);

      return AddProjectComponent;
    }();

    AddProjectComponent.ctorParameters = function () {
      return [{
        type: _services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    AddProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-add-project",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/add-project/add-project.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-project.component.css */
      "./src/app/admin/components/projects/add-project/add-project.component.css")).default]
    })], AddProjectComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/projects/project-details-admin/project-details-admin.component.css":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/admin/components/projects/project-details-admin/project-details-admin.component.css ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsProjectsProjectDetailsAdminProjectDetailsAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 70%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    img {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 1%;\r\n  }\r\n}\r\n\r\nmat-card {\r\n  width: 100%;\r\n  margin-top:1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n\r\n.deleteButtonClass {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.btnDelete {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  width: 30%;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n.uploadButton {\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n  margin-bottom: 2rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n.btnDelete {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  width: 60%;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0LWRldGFpbHMtYWRtaW4vcHJvamVjdC1kZXRhaWxzLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0lBQ0k7SUFDQSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3QtZGV0YWlscy1hZG1pbi9wcm9qZWN0LWRldGFpbHMtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDElO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDElO1xyXG4gIH1cclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6MXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4udXBsb2FkQnV0dG9uQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi51cGxvYWRCdXR0b24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG5cclxuLmRlbGV0ZUJ1dHRvbkNsYXNzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYnRuRGVsZXRlIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbi51cGxvYWRCdXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG4uYnRuRGVsZXRlIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/projects/project-details-admin/project-details-admin.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/components/projects/project-details-admin/project-details-admin.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ProjectDetailsAdminComponent */

  /***/
  function srcAppAdminComponentsProjectsProjectDetailsAdminProjectDetailsAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectDetailsAdminComponent", function () {
      return ProjectDetailsAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_Picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/Picture */
    "./src/app/models/Picture.ts");
    /* harmony import */


    var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/project.service */
    "./src/app/services/project.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/file-type.validator */
    "./src/app/models/file-type.validator.ts");

    var ProjectDetailsAdminComponent =
    /*#__PURE__*/
    function () {
      function ProjectDetailsAdminComponent(httpProjectService, route, router) {
        _classCallCheck(this, ProjectDetailsAdminComponent);

        this.httpProjectService = httpProjectService;
        this.route = route;
        this.router = router;
        this.isLoading = true;
        this.pictures = [];
        this.imgError = false;
      }

      _createClass(ProjectDetailsAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("projectId")) {
              var projectId = +paramMap.get("projectId");

              _this21.getProjectById(projectId);
            }
          });
          this.activateForm();
        }
      }, {
        key: "getProjectById",
        value: function getProjectById(projectId) {
          var _this22 = this;

          this.httpProjectService.getProjectById(projectId).subscribe(function (data) {
            _this22.project = data;

            _this22.project.listePictures.forEach(function (element) {
              element.lienPhoto = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].photoBaseApi + element.lienPhoto;
            });
          }, function (error) {
            return console.log(error);
          }, function () {
            _this22.setDefaultValues();

            _this22.isLoading = false;
          });
        }
      }, {
        key: "setDefaultValues",
        value: function setDefaultValues() {
          this.files = [];
          this.form.setValue({
            projectName: this.project.projectName,
            description: this.project.description,
            image: "empty"
          });
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this23 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.reader = new FileReader();

          this.reader.onload = function () {
            if (_this23.form.get("image").valid) {
              _this23.imgError = false;
              _this23.imagePreview = _this23.reader.result;

              _this23.files.push(file);

              _this23.addPicture(file, _this23.imagePreview);
            } else {
              _this23.imgError = true;

              _this23.form.get("image").setValue("empty");

              return;
            }
          };

          this.reader.readAsDataURL(file);
        }
      }, {
        key: "addPicture",
        value: function addPicture(file, imagePreview) {
          var pic = new src_app_models_Picture__WEBPACK_IMPORTED_MODULE_4__["Picture"]();
          pic.lienPhoto = imagePreview;
          pic.nomPhoto = this.createUniqueName(file);
          pic.descriptionPhoto = "";
          this.project.listePictures.push(pic);
        }
      }, {
        key: "deleteProject",
        value: function deleteProject() {
          var _this24 = this;

          if (confirm("Êtes-vous sûr de vouloir supprimer le projet " + this.project.projectName + "?")) {
            this.httpProjectService.deleteProject(this.project.id).subscribe(function (data) {}, function (error) {
              console.log(error);
              _this24.isLoading = false;
            }, function () {
              _this24.isLoading = true;

              _this24.router.navigate(["admin/projects"]);
            });
          }
        }
      }, {
        key: "createUniqueName",
        value: function createUniqueName(file) {
          var fileNameArray = file.name;
          return fileNameArray;
        }
      }, {
        key: "activateForm",
        value: function activateForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              asyncValidators: [src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_7__["mimeType"]]
            })
          });
        }
      }, {
        key: "saveProject",
        value: function saveProject() {
          var _this25 = this;

          if (this.form.invalid) {
            if (this.form.get("image").invalid) {
              this.imgError = true;
            }

            return;
          }

          if (this.project.listePictures.length === 0) {
            this.imgError = true;
            return;
          }

          this.imgError = false;
          this.isLoading = true;

          if (this.checkValues(this.project)) {
            console.log(this.project);
            this.httpProjectService.updateProject(this.project, this.files).subscribe(function (data) {}, function (error) {
              console.log(error);
              _this25.isLoading = false;
            }, function () {
              _this25.isLoading = false;

              _this25.router.navigate(["/admin/projects"]);
            });
          }
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(pict) {
          this.project.listePictures = this.project.listePictures.filter(function (resultArray) {
            return resultArray.id !== pict.id;
          });
        }
      }, {
        key: "checkValues",
        value: function checkValues(project) {
          var projectName = this.form.value.projectName;
          var projectDescription = this.form.value.description;
          this.project.listePictures.forEach(function (element) {
            if (element.descriptionPhoto.length <= 0) {
              element.descriptionPhoto = "";
            }
          }); // TODO check name and desc

          project.projectName = projectName;
          project.description = projectDescription;
          return true;
        }
      }]);

      return ProjectDetailsAdminComponent;
    }();

    ProjectDetailsAdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ProjectDetailsAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-project-detail-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project-details-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/project-details-admin/project-details-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project-details-admin.component.css */
      "./src/app/admin/components/projects/project-details-admin/project-details-admin.component.css")).default]
    })], ProjectDetailsAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsProjectsProjectsListAdminProjectsListAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: auto;\r\n}\r\n\r\n.hoverableClick:hover {\r\n    width: 100%;\r\n    background-color: firebrick;\r\n    box-shadow: black;\r\n}\r\n\r\nmat-list-item {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.boxOfProjects {\r\n    width: 100%;\r\n    margin: auto;\r\n    border-width: 1px;\r\n    border: black;\r\n    border-radius: 1%;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .uploadButton {\r\n  width: 60%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  margin-bottom: 1rem;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy1saXN0LWFkbWluL3Byb2plY3RzLWxpc3QtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0U7RUFDQSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLWxpc3QtYWRtaW4vcHJvamVjdHMtbGlzdC1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi51cGxvYWRCdXR0b24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udXBsb2FkQnV0dG9uQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaG92ZXJhYmxlQ2xpY2s6aG92ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmaXJlYnJpY2s7XHJcbiAgICBib3gtc2hhZG93OiBibGFjaztcclxufVxyXG5cclxubWF0LWxpc3QtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmJveE9mUHJvamVjdHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnVwbG9hZEJ1dHRvbiB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ProjectsListAdminComponent */

  /***/
  function srcAppAdminComponentsProjectsProjectsListAdminProjectsListAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsListAdminComponent", function () {
      return ProjectsListAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/project.service */
    "./src/app/services/project.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProjectsListAdminComponent =
    /*#__PURE__*/
    function () {
      function ProjectsListAdminComponent(httpProject, router) {
        _classCallCheck(this, ProjectsListAdminComponent);

        this.httpProject = httpProject;
        this.router = router;
        this.listeProjects = [];
        this.isLoading = true;
      }

      _createClass(ProjectsListAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProjects();
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          var _this26 = this;

          this.httpProject.getProjects().subscribe(function (data) {
            _this26.listeProjects = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this26.isLoading = false;
          });
        }
      }, {
        key: "openProjectDetails",
        value: function openProjectDetails(projectId) {
          this.router.navigate(['admin/projects/' + projectId]);
        }
      }]);

      return ProjectsListAdminComponent;
    }();

    ProjectsListAdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProjectsListAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects-list-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects-list-admin.component.css */
      "./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.css")).default]
    })], ProjectsListAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.css":
  /*!***********************************************************************************************!*\
    !*** ./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsQuotesQuoteDetailsAdminQuoteDetailsAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\r\n    text-align: center;\r\n    display: block;\r\n  }\r\n  \r\n  img {\r\n    width: 70%;\r\n    height: auto;\r\n    border-radius: 1%;\r\n  }\r\n  \r\n  @media (max-width: 600px) {\r\n      img {\r\n      width: 100%;\r\n      height: auto;\r\n      border-radius: 1%;\r\n    }\r\n  }\r\n  \r\n  mat-card {\r\n    width: 100%;\r\n    margin-top:1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  \r\n  mat-form-field,\r\n  textarea {\r\n    padding: 0.5rem;\r\n    width: 90%;\r\n  }\r\n  \r\n  mat-form-field,\r\n  textarea {\r\n    padding: 0.5rem;\r\n    width: 100%;\r\n  }\r\n  \r\n  input[type=\"file\"] {\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .uploadButtonContainer {\r\n    width: 100%;\r\n    margin: auto;\r\n  }\r\n  \r\n  .uploadButton {\r\n    width: 30%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n  }\r\n  \r\n  .deleteButtonClass {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .btnDelete {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    width: 30%;\r\n  }\r\n  \r\n  @media (max-width: 700px) {\r\n  .uploadButton {\r\n    width: 100%;\r\n    margin-top: 1rem;\r\n    margin-bottom: 2rem;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n  }\r\n  .btnDelete {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    width: 60%;\r\n  }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9xdW90ZXMvcXVvdGUtZGV0YWlscy1hZG1pbi9xdW90ZS1kZXRhaWxzLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO01BQ0k7TUFDQSxXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtJQUNuQjtFQUNGOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLGVBQWU7SUFDZixVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUE7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0EiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3F1b3Rlcy9xdW90ZS1kZXRhaWxzLWFkbWluL3F1b3RlLWRldGFpbHMtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDElO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6MXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICBtYXQtZm9ybS1maWVsZCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICBcclxuICBtYXQtZm9ybS1maWVsZCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAudXBsb2FkQnV0dG9uQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAudXBsb2FkQnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmRlbGV0ZUJ1dHRvbkNsYXNzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYnRuRGVsZXRlIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLnVwbG9hZEJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICB9XHJcbiAgLmJ0bkRlbGV0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gIH1cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: QuoteDetailsAdminComponent */

  /***/
  function srcAppAdminComponentsQuotesQuoteDetailsAdminQuoteDetailsAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsAdminComponent", function () {
      return QuoteDetailsAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/quote.service */
    "./src/app/services/quote.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var QuoteDetailsAdminComponent =
    /*#__PURE__*/
    function () {
      function QuoteDetailsAdminComponent(httpQuote, router, route) {
        _classCallCheck(this, QuoteDetailsAdminComponent);

        this.httpQuote = httpQuote;
        this.router = router;
        this.route = route;
        this.isLoading = true;
      }

      _createClass(QuoteDetailsAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.activateForm();
          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("quoteId")) {
              var quoteId = +paramMap.get("quoteId");

              _this27.getQuoteById(quoteId);
            }
          });
        }
      }, {
        key: "getQuoteById",
        value: function getQuoteById(quoteId) {
          var _this28 = this;

          this.httpQuote.getQuoteById(quoteId).subscribe(function (data) {
            _this28.quote = data;

            _this28.quote.fileLinks.forEach(function (element) {
              element.fileLink = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].photoBaseApi + element.fileLink;
            });
          }, function (error) {
            return console.log(error);
          }, function () {
            _this28.isLoading = false;
          });
        }
      }, {
        key: "saveQuote",
        value: function saveQuote() {
          var _this29 = this;

          if (this.form.invalid) {
            return;
          }

          this.checkFormValues();
          this.httpQuote.markQuoteCompleted(this.quote).subscribe(function (data) {}, function (error) {
            return console.log(error);
          }, function () {
            // TODO navigate ailleurs
            _this29.router.navigate(["/admin/quotes"]);
          });
        }
      }, {
        key: "checkFormValues",
        value: function checkFormValues() {
          this.quote.answer = this.form.value.answer;
        }
      }, {
        key: "activateForm",
        value: function activateForm() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            })
          });
        }
      }]);

      return QuoteDetailsAdminComponent;
    }();

    QuoteDetailsAdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    QuoteDetailsAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-quote-details-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quote-details-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quote-details-admin.component.css */
      "./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.css")).default]
    })], QuoteDetailsAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsQuotesQuotesListAdminQuotesListAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-accordion {\r\n    width: 100%;\r\n    margin: auto;\r\n  }\r\n  \r\n  mat-expansion-panel {\r\n    width: 70%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  \r\n  #dropdownContainer {\r\n    width: 100%;\r\n    margin: auto;\r\n  }\r\n  \r\n  #divDropdown {\r\n    width: 70%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align:right;\r\n  }\r\n  \r\n  #dropdown {\r\n    text-align: left;\r\n  }\r\n  \r\n  a {\r\n    margin-left: 1rem;\r\n  }\r\n  \r\n  @media (max-width: 600px) {\r\n    mat-expansion-panel {\r\n      width: 90%;\r\n      margin-top: 1rem;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n    }\r\n  \r\n    #divDropdown {\r\n      width: 90%;\r\n      margin-top: 1rem;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      text-align:right;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9xdW90ZXMvcXVvdGVzLWxpc3QtYWRtaW4vcXVvdGVzLWxpc3QtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGdCQUFnQjtJQUNsQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9xdW90ZXMvcXVvdGVzLWxpc3QtYWRtaW4vcXVvdGVzLWxpc3QtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1hY2NvcmRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgI2Ryb3Bkb3duQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAjZGl2RHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gICNkcm9wZG93biB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIG1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2RpdkRyb3Bkb3duIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: QuotesListAdminComponent */

  /***/
  function srcAppAdminComponentsQuotesQuotesListAdminQuotesListAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotesListAdminComponent", function () {
      return QuotesListAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/quote.service */
    "./src/app/services/quote.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QuotesListAdminComponent =
    /*#__PURE__*/
    function () {
      function QuotesListAdminComponent(httpQuote) {
        _classCallCheck(this, QuotesListAdminComponent);

        this.httpQuote = httpQuote;
        this.isLoading = true;
        this.listQuotes = [];
        this.selectOption = ["incomplete", "complete"];
        this.selectedOption = this.selectOption[0];
      }

      _createClass(QuotesListAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getQuotes();
        }
      }, {
        key: "completeQuote",
        value: function completeQuote(qte) {
          var _this30 = this;

          qte.completed = 'TRUE';
          this.isLoading = true;
          this.httpQuote.markQuoteCompleted(qte).subscribe(function (data) {}, function (error) {
            console.log(error);
            _this30.isLoading = false;
          }, function () {
            _this30.getQuotes();

            _this30.isLoading = false;
          });
        }
      }, {
        key: "selectQuotesOnChange",
        value: function selectQuotesOnChange(value) {
          if (value === "incomplete") {
            this.isLoading = true;
            this.selectedOption = this.selectOption[0];
            this.getQuotes();
          }

          if (value === "complete") {
            this.isLoading = true;
            this.selectedOption = this.selectOption[1];
            this.getQuotesCompleted();
          }
        }
      }, {
        key: "getQuotes",
        value: function getQuotes() {
          var _this31 = this;

          this.httpQuote.getQuotes().subscribe(function (data) {
            _this31.listQuotes = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this31.isLoading = false;
          });
        }
      }, {
        key: "getQuotesCompleted",
        value: function getQuotesCompleted() {
          var _this32 = this;

          this.httpQuote.getQuotesCompleted().subscribe(function (data) {
            _this32.listQuotes = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this32.isLoading = false;
          });
        }
      }]);

      return QuotesListAdminComponent;
    }();

    QuotesListAdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]
      }];
    };

    QuotesListAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-quotes-list-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quotes-list-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quotes-list-admin.component.css */
      "./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.css")).default]
    })], QuotesListAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/team/add-employee/add-employee.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin/components/team/add-employee/add-employee.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsTeamAddEmployeeAddEmployeeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\nmat-card {\r\n  width: 100%;\r\n  margin-top:1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90ZWFtL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGVhbS9hZGQtZW1wbG95ZWUvYWRkLWVtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMSU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOjFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnVwbG9hZEJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udXBsb2FkQnV0dG9uIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/components/team/add-employee/add-employee.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/components/team/add-employee/add-employee.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AddEmployeeComponent */

  /***/
  function srcAppAdminComponentsTeamAddEmployeeAddEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function () {
      return AddEmployeeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/Employee */
    "./src/app/models/Employee.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/team.service */
    "./src/app/services/team.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/file-type.validator */
    "./src/app/models/file-type.validator.ts");

    var AddEmployeeComponent =
    /*#__PURE__*/
    function () {
      function AddEmployeeComponent(httpTeamService, route) {
        _classCallCheck(this, AddEmployeeComponent);

        this.httpTeamService = httpTeamService;
        this.route = route;
        this.isLoading = true;
        this.imgError = false;
      }

      _createClass(AddEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activateFormVerify();
          this.isLoading = false;
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this33 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.reader = new FileReader();

          this.reader.onload = function () {
            if (_this33.form.get("image").valid) {
              _this33.imgError = false;
              _this33.imagePreview = _this33.reader.result;
              _this33.image = file;
            } else {
              _this33.imgError = true;
              return;
            }
          };

          try {
            this.reader.readAsDataURL(file);
          } catch (err) {
            console.log(err);
          }
        }
      }, {
        key: "activateFormVerify",
        value: function activateFormVerify() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              asyncValidators: [src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_6__["mimeType"]]
            })
          });
        }
      }, {
        key: "saveEmployee",
        value: function saveEmployee() {
          var _this34 = this;

          if (this.form.invalid) {
            if (this.form.get("image").invalid) {
              this.imgError = true;
            }

            return;
          }

          this.checkFormInfos();
          console.log(this.employee);
          this.isLoading = true;
          this.httpTeamService.saveEmployee(this.employee, this.image).subscribe(function (data) {}, function (error) {
            console.log(error);
            _this34.isLoading = false;
          }, function () {
            _this34.isLoading = false;

            _this34.route.navigate(["admin/team"]);
          });
        }
      }, {
        key: "checkFormInfos",
        value: function checkFormInfos() {
          this.employee = new src_app_models_Employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
          this.employee.firstName = this.form.value.firstName;
          this.employee.lastName = this.form.value.lastName;
          this.employee.role = this.form.value.role;
          this.employee.description = this.form.value.description;
          this.employee.id = null;
          this.employee.pictureLink = null;
        }
      }]);

      return AddEmployeeComponent;
    }();

    AddEmployeeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-employee",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-employee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/add-employee/add-employee.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-employee.component.css */
      "./src/app/admin/components/team/add-employee/add-employee.component.css")).default]
    })], AddEmployeeComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/team/employee-details/employee-details.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/admin/components/team/employee-details/employee-details.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsTeamEmployeeDetailsEmployeeDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\nmat-card {\r\n  width: 100%;\r\n  margin-top:1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90ZWFtL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGVhbS9lbXBsb3llZS1kZXRhaWxzL2VtcGxveWVlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6MXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi51cGxvYWRCdXR0b25Db250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnVwbG9hZEJ1dHRvbiB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/team/employee-details/employee-details.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/components/team/employee-details/employee-details.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: EmployeeDetailsComponent */

  /***/
  function srcAppAdminComponentsTeamEmployeeDetailsEmployeeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function () {
      return EmployeeDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/team.service */
    "./src/app/services/team.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/file-type.validator */
    "./src/app/models/file-type.validator.ts");

    var EmployeeDetailsComponent =
    /*#__PURE__*/
    function () {
      function EmployeeDetailsComponent(httpTeamService, route, router) {
        _classCallCheck(this, EmployeeDetailsComponent);

        this.httpTeamService = httpTeamService;
        this.route = route;
        this.router = router;
        this.isLoading = true;
        this.imgError = false;
      }

      _createClass(EmployeeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("employeeId")) {
              _this35.employeeId = +paramMap.get("employeeId");

              _this35.getEmployeeById();
            }
          });
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this36 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.reader = new FileReader();

          this.reader.onload = function () {
            if (_this36.form.get("image").valid) {
              _this36.imgError = false;
              _this36.imagePreview = _this36.reader.result;
              _this36.image = file;
            } else {
              _this36.imgError = true;
              return;
            }
          };

          try {
            this.reader.readAsDataURL(file);
          } catch (err) {
            console.log(err);
          }
        }
      }, {
        key: "activateFormVerify",
        value: function activateFormVerify() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]
            }),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              asyncValidators: [src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
          });
        }
      }, {
        key: "getEmployeeById",
        value: function getEmployeeById() {
          var _this37 = this;

          this.httpTeamService.getEmployee(this.employeeId).subscribe(function (data) {
            _this37.employee = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this37.imagePreview = _this37.employee.pictureLink;

            _this37.activateFormVerify();

            _this37.setDefaultValues();

            _this37.isLoading = false;
          });
        }
      }, {
        key: "saveEmployee",
        value: function saveEmployee() {
          var _this38 = this;

          if (this.form.invalid) {
            if (this.form.get("image").invalid) {
              this.imgError = true;
            }

            return;
          }

          var emp = this.checkFormValues(this.employee);

          if (emp) {
            this.isLoading = true;
            this.httpTeamService.updateEmployee(emp, this.image).subscribe(function (data) {}, function (error) {
              console.log(error);
              _this38.isLoading = false;
            }, function () {
              _this38.router.navigate(["admin/team"]);
            });
          } else {// TODO msg erreur
          }
        }
      }, {
        key: "checkFormValues",
        value: function checkFormValues(emp) {
          // TODO test valeurs
          emp.firstName = this.form.value.firstName;
          emp.lastName = this.form.value.lastName;
          emp.role = this.form.value.role;
          return emp;
        }
      }, {
        key: "setDefaultValues",
        value: function setDefaultValues() {
          this.form.setValue({
            firstName: this.employee.firstName,
            lastName: this.employee.lastName,
            role: this.employee.role,
            description: this.employee.description,
            image: "null"
          });
        }
      }]);

      return EmployeeDetailsComponent;
    }();

    EmployeeDetailsComponent.ctorParameters = function () {
      return [{
        type: _services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-employee-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/employee-details/employee-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-details.component.css */
      "./src/app/admin/components/team/employee-details/employee-details.component.css")).default]
    })], EmployeeDetailsComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/team/team-list-admin/team-list-admin.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin/components/team/team-list-admin/team-list-admin.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsTeamTeamListAdminTeamListAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-accordion {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.linkAddEmployee {\r\n  width: 30%;\r\n  margin-top: 2rem;\r\n}\r\n\r\nmat-expansion-panel {\r\n  width: 70%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@media (max-width:600px) {\r\n  mat-expansion-panel {\r\n  width: 90%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  }\r\n\r\n  .linkAddEmployee {\r\n    width: 50%;\r\n    margin-top: 2rem;\r\n  }\r\n}\r\n\r\n.image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\n.addEmployeeButton {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90ZWFtL3RlYW0tbGlzdC1hZG1pbi90ZWFtLWxpc3QtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7RUFDQSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3RlYW0vdGVhbS1saXN0LWFkbWluL3RlYW0tbGlzdC1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWFjY29yZGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubGlua0FkZEVtcGxveWVlIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5saW5rQWRkRW1wbG95ZWUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMSU7XHJcbn1cclxuXHJcbi5hZGRFbXBsb3llZUJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/team/team-list-admin/team-list-admin.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/components/team/team-list-admin/team-list-admin.component.ts ***!
    \************************************************************************************/

  /*! exports provided: TeamListAdminComponent */

  /***/
  function srcAppAdminComponentsTeamTeamListAdminTeamListAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamListAdminComponent", function () {
      return TeamListAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/team.service */
    "./src/app/services/team.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var TeamListAdminComponent =
    /*#__PURE__*/
    function () {
      function TeamListAdminComponent(httpTeam) {
        _classCallCheck(this, TeamListAdminComponent);

        this.httpTeam = httpTeam;
        this.listeEmployees = [];
        this.isLoading = true;
      }

      _createClass(TeamListAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTeam();
        }
      }, {
        key: "getTeam",
        value: function getTeam() {
          var _this39 = this;

          this.httpTeam.getTeam().subscribe(function (data) {
            _this39.listeEmployees = data;

            _this39.listeEmployees.forEach(function (emp) {
              emp.pictureLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].photoBaseApi + emp.pictureLink;
            });
          }, function (error) {
            console.log(error);
          }, function () {
            _this39.isLoading = false;
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(employee) {
          var _this40 = this;

          if (confirm("Êtes-vous sûr de vouloir supprimer l'employé " + employee.firstName + " " + employee.lastName + "?")) {
            this.isLoading = true;
            this.httpTeam.deleteEmployee(employee.id).subscribe(function (data) {
              _this40.getTeam();
            }, function (error) {
              console.log(error);
              _this40.isLoading = false;
            });
          }
        }
      }]);

      return TeamListAdminComponent;
    }();

    TeamListAdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]
      }];
    };

    TeamListAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-team-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team-list-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/team/team-list-admin/team-list-admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team-list-admin.component.css */
      "./src/app/admin/components/team/team-list-admin/team-list-admin.component.css")).default]
    })], TeamListAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/testimonies/add-testimony/add-testimony.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/components/testimonies/add-testimony/add-testimony.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsTestimoniesAddTestimonyAddTestimonyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\nmat-card {\r\n  width: 100%;\r\n  margin-top:1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90ZXN0aW1vbmllcy9hZGQtdGVzdGltb255L2FkZC10ZXN0aW1vbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGVzdGltb25pZXMvYWRkLXRlc3RpbW9ueS9hZGQtdGVzdGltb255LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMSU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOjFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnVwbG9hZEJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udXBsb2FkQnV0dG9uIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/components/testimonies/add-testimony/add-testimony.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/admin/components/testimonies/add-testimony/add-testimony.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AddTestimonyComponent */

  /***/
  function srcAppAdminComponentsTestimoniesAddTestimonyAddTestimonyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTestimonyComponent", function () {
      return AddTestimonyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Testimony__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/Testimony */
    "./src/app/models/Testimony.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_testimony_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/testimony.service */
    "./src/app/services/testimony.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/file-type.validator */
    "./src/app/models/file-type.validator.ts");

    var AddTestimonyComponent =
    /*#__PURE__*/
    function () {
      function AddTestimonyComponent(httpTestimony, router) {
        _classCallCheck(this, AddTestimonyComponent);

        this.httpTestimony = httpTestimony;
        this.router = router;
        this.isLoading = true;
        this.imgError = false;
      }

      _createClass(AddTestimonyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activateFormVerify();
          this.isLoading = false;
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this41 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.reader = new FileReader();

          this.reader.onload = function () {
            if (_this41.form.get("image").valid) {
              _this41.imgError = false;
              _this41.imagePreview = _this41.reader.result;
              _this41.image = file;
            } else {
              _this41.imgError = true;
              return;
            }
          };

          try {
            this.reader.readAsDataURL(file);
          } catch (err) {
            console.log(err);
          }
        }
      }, {
        key: "activateFormVerify",
        value: function activateFormVerify() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            testimonyFName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            testimonyLName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]
            }),
            relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              asyncValidators: [src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_6__["mimeType"]]
            })
          });
        }
      }, {
        key: "saveTestimony",
        value: function saveTestimony() {
          var _this42 = this;

          if (this.form.invalid) {
            if (this.form.get("image").invalid) {
              this.imgError = true;
            }

            return;
          }

          this.checkFormInfos();
          this.isLoading = true;
          this.httpTestimony.saveTestimony(this.testimony, this.image).subscribe(function (data) {// TODO
          }, function (error) {
            console.log(error);
            _this42.isLoading = false;
          }, function () {
            _this42.isLoading = false;

            _this42.router.navigate(["admin/testimonies"]);
          });
        }
      }, {
        key: "checkFormInfos",
        value: function checkFormInfos() {
          this.testimony = new src_app_models_Testimony__WEBPACK_IMPORTED_MODULE_2__["Testimony"]();
          this.testimony.testimonyFName = this.form.value.testimonyFName;
          this.testimony.testimonyLName = this.form.value.testimonyLName;
          this.testimony.comment = this.form.value.comment;
          this.testimony.relation = this.form.value.relation;
          this.testimony.id = null;
          this.testimony.photoLink = null;
        }
      }]);

      return AddTestimonyComponent;
    }();

    AddTestimonyComponent.ctorParameters = function () {
      return [{
        type: src_app_services_testimony_service__WEBPACK_IMPORTED_MODULE_4__["TestimonyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddTestimonyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-testimony",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-testimony.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/add-testimony/add-testimony.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-testimony.component.css */
      "./src/app/admin/components/testimonies/add-testimony/add-testimony.component.css")).default]
    })], AddTestimonyComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/testimonies/testimonies.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/admin/components/testimonies/testimonies.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsTestimoniesTestimoniesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-accordion {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.linkAddEmployee {\r\n  width: 30%;\r\n  margin-top: 2rem;\r\n}\r\n\r\nmat-expansion-panel {\r\n  width: 70%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@media (max-width:600px) {\r\n  mat-expansion-panel {\r\n  width: 90%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  }\r\n\r\n  .linkAddEmployee {\r\n    width: 50%;\r\n    margin-top: 2rem;\r\n  }\r\n}\r\n\r\n.image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\n.addEmployeeButton {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90ZXN0aW1vbmllcy90ZXN0aW1vbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtFQUNBLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGVzdGltb25pZXMvdGVzdGltb25pZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1hY2NvcmRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmxpbmtBZGRFbXBsb3llZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gIG1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAubGlua0FkZEVtcGxveWVlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDElO1xyXG59XHJcblxyXG4uYWRkRW1wbG95ZWVCdXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/testimonies/testimonies.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/components/testimonies/testimonies.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TestimoniesComponent */

  /***/
  function srcAppAdminComponentsTestimoniesTestimoniesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimoniesComponent", function () {
      return TestimoniesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _services_testimony_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/testimony.service */
    "./src/app/services/testimony.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestimoniesComponent =
    /*#__PURE__*/
    function () {
      function TestimoniesComponent(httpTestimony) {
        _classCallCheck(this, TestimoniesComponent);

        this.httpTestimony = httpTestimony;
        this.listeTestimonies = [];
        this.isLoading = true;
      }

      _createClass(TestimoniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTestimonies();
        }
      }, {
        key: "getTestimonies",
        value: function getTestimonies() {
          var _this43 = this;

          this.httpTestimony.getTestimonies().subscribe(function (data) {
            _this43.listeTestimonies = data;

            _this43.listeTestimonies.forEach(function (testimony) {
              testimony.photoLink = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].photoBaseApi + testimony.photoLink;
            });
          }, function (error) {
            console.log(error);
          }, function () {
            _this43.isLoading = false;
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(testimony) {
          var _this44 = this;

          if (confirm("Êtes-vous sûr de vouloir supprimer le témoignage de " + testimony.testimonyFName + " " + testimony.testimonyLName + "?")) {
            this.isLoading = true;
            this.httpTestimony.deleteTestimony(testimony.id).subscribe(function (data) {}, function (error) {
              console.log(error);
              _this44.isLoading = false;
            }, function () {
              _this44.getTestimonies();
            });
          }
        }
      }]);

      return TestimoniesComponent;
    }();

    TestimoniesComponent.ctorParameters = function () {
      return [{
        type: _services_testimony_service__WEBPACK_IMPORTED_MODULE_2__["TestimonyService"]
      }];
    };

    TestimoniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-testimonies",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./testimonies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/testimonies.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./testimonies.component.css */
      "./src/app/admin/components/testimonies/testimonies.component.css")).default]
    })], TestimoniesComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/testimonies/testimony-details/testimony-details.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/components/testimonies/testimony-details/testimony-details.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsTestimoniesTestimonyDetailsTestimonyDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 1%;\r\n}\r\n\r\nmat-card {\r\n  width: 100%;\r\n  margin-top:1rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.uploadButtonContainer {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.uploadButton {\r\n  width: 30%;\r\n  margin-top: 1rem;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90ZXN0aW1vbmllcy90ZXN0aW1vbnktZGV0YWlscy90ZXN0aW1vbnktZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGVzdGltb25pZXMvdGVzdGltb255LWRldGFpbHMvdGVzdGltb255LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxJTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6MXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi51cGxvYWRCdXR0b25Db250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnVwbG9hZEJ1dHRvbiB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/testimonies/testimony-details/testimony-details.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/admin/components/testimonies/testimony-details/testimony-details.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: TestimonyDetailsComponent */

  /***/
  function srcAppAdminComponentsTestimoniesTestimonyDetailsTestimonyDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonyDetailsComponent", function () {
      return TestimonyDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_testimony_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/testimony.service */
    "./src/app/services/testimony.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/file-type.validator */
    "./src/app/models/file-type.validator.ts");

    var TestimonyDetailsComponent =
    /*#__PURE__*/
    function () {
      function TestimonyDetailsComponent(httpTestimony, route, router) {
        _classCallCheck(this, TestimonyDetailsComponent);

        this.httpTestimony = httpTestimony;
        this.route = route;
        this.router = router;
        this.isLoading = true;
        this.imgError = false;
      }

      _createClass(TestimonyDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this45 = this;

          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("testimonyId")) {
              _this45.testimonyId = +paramMap.get("testimonyId");

              _this45.getTestimonyById();
            }
          });
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this46 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.reader = new FileReader();

          this.reader.onload = function () {
            if (_this46.form.get("image").valid) {
              _this46.imgError = false;
              _this46.imagePreview = _this46.reader.result;
              _this46.image = file;
            } else {
              _this46.imgError = true;
              return;
            }
          };

          try {
            this.reader.readAsDataURL(file);
          } catch (err) {
            console.log(err);
          }
        }
      }, {
        key: "activateFormVerify",
        value: function activateFormVerify() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            testimonyFName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            testimonyLName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]
            }),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]
            }),
            relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              asyncValidators: [src_app_models_file_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
          });
        }
      }, {
        key: "getTestimonyById",
        value: function getTestimonyById() {
          var _this47 = this;

          this.httpTestimony.getTestimony(this.testimonyId).subscribe(function (data) {
            _this47.testimony = data;
          }, function (error) {
            return console.log(error);
          }, function () {
            _this47.imagePreview = _this47.testimony.photoLink;

            _this47.activateFormVerify();

            _this47.setDefaultValues();

            _this47.isLoading = false;
          });
        }
      }, {
        key: "saveTestimony",
        value: function saveTestimony() {
          var _this48 = this;

          if (this.form.invalid) {
            if (this.form.get("image").invalid) {
              this.imgError = true;
            }

            return;
          }

          var tes = this.checkFormValues(this.testimony, this.form);

          if (tes) {
            this.httpTestimony.updateTestimony(tes, this.image).subscribe(function (data) {// TODO check data
            }, function (error) {
              return console.log(error);
            }, function () {
              // TODO NAVIGATEs
              _this48.router.navigate(["/admin/testimonies"]);
            });
          }
        }
      }, {
        key: "checkFormValues",
        value: function checkFormValues(testimony, form) {
          testimony.testimonyFName = form.value.testimonyFName;
          testimony.testimonyLName = form.value.testimonyLName;
          testimony.relation = form.value.relation;
          testimony.comment = form.value.comment;
          return testimony;
        }
      }, {
        key: "setDefaultValues",
        value: function setDefaultValues() {
          this.form.setValue({
            testimonyFName: this.testimony.testimonyFName,
            testimonyLName: this.testimony.testimonyLName,
            comment: this.testimony.comment,
            relation: this.testimony.relation,
            image: "null"
          });
        }
      }]);

      return TestimonyDetailsComponent;
    }();

    TestimonyDetailsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_testimony_service__WEBPACK_IMPORTED_MODULE_1__["TestimonyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    TestimonyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-testimony-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./testimony-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/testimonies/testimony-details/testimony-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./testimony-details.component.css */
      "./src/app/admin/components/testimonies/testimony-details/testimony-details.component.css")).default]
    })], TestimonyDetailsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _admin_components_offeredServices_add_offered_service_add_offered_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin/components/offeredServices/add-offered-service/add-offered-service.component */
    "./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.ts");
    /* harmony import */


    var _admin_components_offeredServices_offered_services_list_offered_services_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin/components/offeredServices/offered-services-list/offered-services-list.component */
    "./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.ts");
    /* harmony import */


    var _admin_components_testimonies_add_testimony_add_testimony_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/components/testimonies/add-testimony/add-testimony.component */
    "./src/app/admin/components/testimonies/add-testimony/add-testimony.component.ts");
    /* harmony import */


    var _admin_components_team_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/components/team/employee-details/employee-details.component */
    "./src/app/admin/components/team/employee-details/employee-details.component.ts");
    /* harmony import */


    var _admin_components_team_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/components/team/add-employee/add-employee.component */
    "./src/app/admin/components/team/add-employee/add-employee.component.ts");
    /* harmony import */


    var _components_quoting_quoting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/quoting/quoting.component */
    "./src/app/components/quoting/quoting.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");
    /* harmony import */


    var _components_offered_services_offered_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/offered-services/offered-services.component */
    "./src/app/components/offered-services/offered-services.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin/components/auth-page/auth-page.component */
    "./src/app/admin/components/auth-page/auth-page.component.ts");
    /* harmony import */


    var _admin_components_homepage_admin_homepage_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/components/homepage-admin/homepage-admin.component */
    "./src/app/admin/components/homepage-admin/homepage-admin.component.ts");
    /* harmony import */


    var _admin_components_company_info_admin_company_info_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin/components/company-info-admin/company-info-admin.component */
    "./src/app/admin/components/company-info-admin/company-info-admin.component.ts");
    /* harmony import */


    var _admin_components_contact_contacts_list_admin_contacts_list_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/components/contact/contacts-list-admin/contacts-list-admin.component */
    "./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.ts");
    /* harmony import */


    var _admin_components_contact_contact_details_admin_contact_details_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin/components/contact/contact-details-admin/contact-details-admin.component */
    "./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.ts");
    /* harmony import */


    var _admin_components_projects_projects_list_admin_projects_list_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/components/projects/projects-list-admin/projects-list-admin.component */
    "./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.ts");
    /* harmony import */


    var _admin_components_projects_project_details_admin_project_details_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin/components/projects/project-details-admin/project-details-admin.component */
    "./src/app/admin/components/projects/project-details-admin/project-details-admin.component.ts");
    /* harmony import */


    var _admin_components_quotes_quotes_list_admin_quotes_list_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./admin/components/quotes/quotes-list-admin/quotes-list-admin.component */
    "./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.ts");
    /* harmony import */


    var _admin_components_team_team_list_admin_team_list_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./admin/components/team/team-list-admin/team-list-admin.component */
    "./src/app/admin/components/team/team-list-admin/team-list-admin.component.ts");
    /* harmony import */


    var _admin_components_quotes_quote_details_admin_quote_details_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/components/quotes/quote-details-admin/quote-details-admin.component */
    "./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.ts");
    /* harmony import */


    var _admin_components_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/components/testimonies/testimonies.component */
    "./src/app/admin/components/testimonies/testimonies.component.ts");
    /* harmony import */


    var _admin_components_testimonies_testimony_details_testimony_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin/components/testimonies/testimony-details/testimony-details.component */
    "./src/app/admin/components/testimonies/testimony-details/testimony-details.component.ts");
    /* harmony import */


    var _admin_components_projects_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin/components/projects/add-project/add-project.component */
    "./src/app/admin/components/projects/add-project/add-project.component.ts");
    /* harmony import */


    var _admin_components_offeredServices_offered_services_details_offered_services_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin/components/offeredServices/offered-services-details/offered-services-details.component */
    "./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.ts");
    /* harmony import */


    var _models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./models/Auth.guard */
    "./src/app/models/Auth.guard.ts");

    var routes = [{
      path: "",
      component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]
    }, {
      path: "about",
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
    }, {
      path: "contact",
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
    }, {
      path: "offered-services",
      component: _components_offered_services_offered_services_component__WEBPACK_IMPORTED_MODULE_8__["OfferedServicesComponent"]
    }, {
      path: "projects",
      component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]
    }, {
      path: "quoting",
      component: _components_quoting_quoting_component__WEBPACK_IMPORTED_MODULE_6__["QuotingComponent"]
    }, {
      path: "admin/auth",
      component: _admin_components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_14__["AuthPageComponent"]
    }, {
      path: "admin/homepage",
      component: _admin_components_homepage_admin_homepage_admin_component__WEBPACK_IMPORTED_MODULE_15__["HomepageAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/company-info",
      component: _admin_components_company_info_admin_company_info_admin_component__WEBPACK_IMPORTED_MODULE_16__["CompanyInfoAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/contacts",
      component: _admin_components_contact_contacts_list_admin_contacts_list_admin_component__WEBPACK_IMPORTED_MODULE_17__["ContactsListAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/contactDemandDetails/:contactId",
      component: _admin_components_contact_contact_details_admin_contact_details_admin_component__WEBPACK_IMPORTED_MODULE_18__["ContactDetailsAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/projects",
      component: _admin_components_projects_projects_list_admin_projects_list_admin_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsListAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/projects/:projectId",
      component: _admin_components_projects_project_details_admin_project_details_admin_component__WEBPACK_IMPORTED_MODULE_20__["ProjectDetailsAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/quotes",
      component: _admin_components_quotes_quotes_list_admin_quotes_list_admin_component__WEBPACK_IMPORTED_MODULE_21__["QuotesListAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/quoteDetails/:quoteId",
      component: _admin_components_quotes_quote_details_admin_quote_details_admin_component__WEBPACK_IMPORTED_MODULE_23__["QuoteDetailsAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/team",
      component: _admin_components_team_team_list_admin_team_list_admin_component__WEBPACK_IMPORTED_MODULE_22__["TeamListAdminComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/testimonies",
      component: _admin_components_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_24__["TestimoniesComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/addEmployee",
      component: _admin_components_team_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_5__["AddEmployeeComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/addTestimony",
      component: _admin_components_testimonies_add_testimony_add_testimony_component__WEBPACK_IMPORTED_MODULE_3__["AddTestimonyComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/employeeDetails/:employeeId",
      component: _admin_components_team_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/testimonyDetails/:testimonyId",
      component: _admin_components_testimonies_testimony_details_testimony_details_component__WEBPACK_IMPORTED_MODULE_25__["TestimonyDetailsComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/offeredServicesList",
      component: _admin_components_offeredServices_offered_services_list_offered_services_list_component__WEBPACK_IMPORTED_MODULE_2__["OfferedServicesListComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/addOfferedService",
      component: _admin_components_offeredServices_add_offered_service_add_offered_service_component__WEBPACK_IMPORTED_MODULE_1__["AddOfferedServiceComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/offeredServicesDetails/:serviceId",
      component: _admin_components_offeredServices_offered_services_details_offered_services_details_component__WEBPACK_IMPORTED_MODULE_27__["OfferedServicesDetailsComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }, {
      path: "admin/addProject",
      component: _admin_components_projects_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_26__["AddProjectComponent"],
      canActivate: [_models_Auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }

            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular2_photoswipe */
    "./node_modules/angular2_photoswipe/fesm2015/angular2_photoswipe.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/homepage/homepage.component */
    "./src/app/components/homepage/homepage.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");
    /* harmony import */


    var _components_offered_services_offered_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/offered-services/offered-services.component */
    "./src/app/components/offered-services/offered-services.component.ts");
    /* harmony import */


    var _components_team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/team/team.component */
    "./src/app/components/team/team.component.ts");
    /* harmony import */


    var _components_quoting_quoting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/quoting/quoting.component */
    "./src/app/components/quoting/quoting.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _admin_components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/components/auth-page/auth-page.component */
    "./src/app/admin/components/auth-page/auth-page.component.ts");
    /* harmony import */


    var _admin_components_homepage_admin_homepage_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin/components/homepage-admin/homepage-admin.component */
    "./src/app/admin/components/homepage-admin/homepage-admin.component.ts");
    /* harmony import */


    var _admin_components_company_info_admin_company_info_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./admin/components/company-info-admin/company-info-admin.component */
    "./src/app/admin/components/company-info-admin/company-info-admin.component.ts");
    /* harmony import */


    var _admin_components_team_team_list_admin_team_list_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./admin/components/team/team-list-admin/team-list-admin.component */
    "./src/app/admin/components/team/team-list-admin/team-list-admin.component.ts");
    /* harmony import */


    var _admin_components_projects_projects_list_admin_projects_list_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/components/projects/projects-list-admin/projects-list-admin.component */
    "./src/app/admin/components/projects/projects-list-admin/projects-list-admin.component.ts");
    /* harmony import */


    var _admin_components_quotes_quotes_list_admin_quotes_list_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/components/quotes/quotes-list-admin/quotes-list-admin.component */
    "./src/app/admin/components/quotes/quotes-list-admin/quotes-list-admin.component.ts");
    /* harmony import */


    var _admin_components_quotes_quote_details_admin_quote_details_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin/components/quotes/quote-details-admin/quote-details-admin.component */
    "./src/app/admin/components/quotes/quote-details-admin/quote-details-admin.component.ts");
    /* harmony import */


    var _admin_components_contact_contacts_list_admin_contacts_list_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin/components/contact/contacts-list-admin/contacts-list-admin.component */
    "./src/app/admin/components/contact/contacts-list-admin/contacts-list-admin.component.ts");
    /* harmony import */


    var _admin_components_contact_contact_details_admin_contact_details_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin/components/contact/contact-details-admin/contact-details-admin.component */
    "./src/app/admin/components/contact/contact-details-admin/contact-details-admin.component.ts");
    /* harmony import */


    var _admin_components_projects_project_details_admin_project_details_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin/components/projects/project-details-admin/project-details-admin.component */
    "./src/app/admin/components/projects/project-details-admin/project-details-admin.component.ts");
    /* harmony import */


    var _admin_components_adminheader_adminheader_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin/components/adminheader/adminheader.component */
    "./src/app/admin/components/adminheader/adminheader.component.ts");
    /* harmony import */


    var _CustomLightboxAdapter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./CustomLightboxAdapter */
    "./src/app/CustomLightboxAdapter.ts");
    /* harmony import */


    var _admin_components_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin/components/testimonies/testimonies.component */
    "./src/app/admin/components/testimonies/testimonies.component.ts");
    /* harmony import */


    var _admin_components_team_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./admin/components/team/employee-details/employee-details.component */
    "./src/app/admin/components/team/employee-details/employee-details.component.ts");
    /* harmony import */


    var _admin_components_team_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin/components/team/add-employee/add-employee.component */
    "./src/app/admin/components/team/add-employee/add-employee.component.ts");
    /* harmony import */


    var _admin_components_testimonies_testimony_details_testimony_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./admin/components/testimonies/testimony-details/testimony-details.component */
    "./src/app/admin/components/testimonies/testimony-details/testimony-details.component.ts");
    /* harmony import */


    var _admin_components_testimonies_add_testimony_add_testimony_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./admin/components/testimonies/add-testimony/add-testimony.component */
    "./src/app/admin/components/testimonies/add-testimony/add-testimony.component.ts");
    /* harmony import */


    var _admin_components_offeredServices_offered_services_list_offered_services_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./admin/components/offeredServices/offered-services-list/offered-services-list.component */
    "./src/app/admin/components/offeredServices/offered-services-list/offered-services-list.component.ts");
    /* harmony import */


    var _admin_components_offeredServices_offered_services_details_offered_services_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./admin/components/offeredServices/offered-services-details/offered-services-details.component */
    "./src/app/admin/components/offeredServices/offered-services-details/offered-services-details.component.ts");
    /* harmony import */


    var _admin_components_offeredServices_add_offered_service_add_offered_service_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./admin/components/offeredServices/add-offered-service/add-offered-service.component */
    "./src/app/admin/components/offeredServices/add-offered-service/add-offered-service.component.ts");
    /* harmony import */


    var _admin_components_projects_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./admin/components/projects/add-project/add-project.component */
    "./src/app/admin/components/projects/add-project/add-project.component.ts");
    /* harmony import */


    var _models_auth_interceptor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./models/auth-interceptor */
    "./src/app/models/auth-interceptor.ts");
    /* harmony import */


    var _models_Error_interceptor__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./models/Error-interceptor */
    "./src/app/models/Error-interceptor.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");
    /* harmony import */


    var _models_Auth_guard__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./models/Auth.guard */
    "./src/app/models/Auth.guard.ts"); // tslint:disable-next-line: max-line-length


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _components_offered_services_offered_services_component__WEBPACK_IMPORTED_MODULE_14__["OfferedServicesComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"], _components_quoting_quoting_component__WEBPACK_IMPORTED_MODULE_16__["QuotingComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _admin_components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_19__["AuthPageComponent"], _admin_components_homepage_admin_homepage_admin_component__WEBPACK_IMPORTED_MODULE_20__["HomepageAdminComponent"], _admin_components_company_info_admin_company_info_admin_component__WEBPACK_IMPORTED_MODULE_21__["CompanyInfoAdminComponent"], _admin_components_team_team_list_admin_team_list_admin_component__WEBPACK_IMPORTED_MODULE_22__["TeamListAdminComponent"], _admin_components_projects_projects_list_admin_projects_list_admin_component__WEBPACK_IMPORTED_MODULE_23__["ProjectsListAdminComponent"], _admin_components_quotes_quotes_list_admin_quotes_list_admin_component__WEBPACK_IMPORTED_MODULE_24__["QuotesListAdminComponent"], _admin_components_quotes_quote_details_admin_quote_details_admin_component__WEBPACK_IMPORTED_MODULE_25__["QuoteDetailsAdminComponent"], _admin_components_contact_contacts_list_admin_contacts_list_admin_component__WEBPACK_IMPORTED_MODULE_26__["ContactsListAdminComponent"], _admin_components_contact_contact_details_admin_contact_details_admin_component__WEBPACK_IMPORTED_MODULE_27__["ContactDetailsAdminComponent"], _admin_components_projects_project_details_admin_project_details_admin_component__WEBPACK_IMPORTED_MODULE_28__["ProjectDetailsAdminComponent"], _admin_components_adminheader_adminheader_component__WEBPACK_IMPORTED_MODULE_29__["AdminheaderComponent"], _admin_components_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_31__["TestimoniesComponent"], _admin_components_team_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_32__["EmployeeDetailsComponent"], _admin_components_team_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_33__["AddEmployeeComponent"], _admin_components_testimonies_testimony_details_testimony_details_component__WEBPACK_IMPORTED_MODULE_34__["TestimonyDetailsComponent"], _admin_components_testimonies_add_testimony_add_testimony_component__WEBPACK_IMPORTED_MODULE_35__["AddTestimonyComponent"], _admin_components_offeredServices_offered_services_list_offered_services_list_component__WEBPACK_IMPORTED_MODULE_36__["OfferedServicesListComponent"], _admin_components_offeredServices_offered_services_details_offered_services_details_component__WEBPACK_IMPORTED_MODULE_37__["OfferedServicesDetailsComponent"], _admin_components_offeredServices_add_offered_service_add_offered_service_component__WEBPACK_IMPORTED_MODULE_38__["AddOfferedServiceComponent"], _admin_components_projects_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_39__["AddProjectComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_42__["ErrorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], angular2_photoswipe__WEBPACK_IMPORTED_MODULE_7__["Angular2PhotoswipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [{
        provide: angular2_photoswipe__WEBPACK_IMPORTED_MODULE_7__["LightboxAdapter"],
        useClass: _CustomLightboxAdapter__WEBPACK_IMPORTED_MODULE_30__["CustomLightboxAdapter"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _models_auth_interceptor__WEBPACK_IMPORTED_MODULE_40__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _models_Error_interceptor__WEBPACK_IMPORTED_MODULE_41__["ErrorInterceptor"],
        multi: true
      }, _models_Auth_guard__WEBPACK_IMPORTED_MODULE_43__["AuthGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [_components_error_error_component__WEBPACK_IMPORTED_MODULE_42__["ErrorComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/contact/contact.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n}\r\n\r\n#companyCard {\r\n  margin: auto;\r\n  padding: 0.5rem;\r\n  height: 100%;\r\n}\r\n\r\nmat-radio-button {\r\n  padding: 0.5 rem;\r\n  margin-right:0.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbXBhbnlDYXJkIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC41IHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6MC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_contact_demand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/contact-demand.service */
    "./src/app/services/contact-demand.service.ts");
    /* harmony import */


    var _models_ContactDemand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../models/ContactDemand */
    "./src/app/models/ContactDemand.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/company.service */
    "./src/app/services/company.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_models_Client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/Client */
    "./src/app/models/Client.ts");
    /* harmony import */


    var email_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! email-validator */
    "./node_modules/email-validator/index.js");
    /* harmony import */


    var email_validator__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_7__);

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(httpCompany, httpContactDemand) {
        _classCallCheck(this, ContactComponent);

        this.httpCompany = httpCompany;
        this.httpContactDemand = httpContactDemand;
        this.contactPreferences = ["Téléphone", "Courriel"];
        this.isLoading = true;
        this.uploadCompleted = false;
        this.uploadError = false;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCompany();
          this.activateFormVerify();
        }
      }, {
        key: "sendContact",
        value: function sendContact() {
          var _this49 = this;

          this.isLoading = true;
          var contactDemand = this.checkValuesOfContactForm();

          if (this.form.invalid) {
            this.isLoading = false;
            return;
          }

          if (contactDemand != null) {
            this.httpContactDemand.postContactDemand(contactDemand).subscribe(function (data) {
              if (data.message === "ok") {
                _this49.uploadCompleted = true;
              }
            }, function (error) {
              return console.log(error);
            }, function () {
              _this49.isLoading = false;

              if (_this49.uploadCompleted) {
                _this49.uploadError = false;
                var elementToScroll = document.querySelector("#sendSuccess");
                if (elementToScroll) elementToScroll.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest"
                });
              } else {
                _this49.uploadError = true;

                var _elementToScroll = document.querySelector("#sendError");

                if (_elementToScroll) _elementToScroll.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest"
                });
              }
            });
          }
        }
      }, {
        key: "checkValuesOfContactForm",
        value: function checkValuesOfContactForm() {
          // TODO ajouter des tests de vérification des données
          var client = new src_app_models_Client__WEBPACK_IMPORTED_MODULE_6__["Client"]();
          client.firstName = this.form.value.fName;
          client.lastName = this.form.value.lName;

          if (!email_validator__WEBPACK_IMPORTED_MODULE_7__["validate"](this.form.value.email)) {
            this.form.controls["email"].setErrors({
              "incorrect": true
            });
            return null;
          }

          client.email = this.form.value.email;
          client.phoneNumber = this.form.value.phone;
          client.phoneNumber = client.phoneNumber.split('-').join('');

          if (client.phoneNumber.match(/[a-z]/i)) {
            this.form.controls['phone'].setErrors({
              "incorrect": true
            });
            return null;
          }

          var contactDemand = new _models_ContactDemand__WEBPACK_IMPORTED_MODULE_2__["ContactDemand"]();
          contactDemand.client = client;
          contactDemand.description = this.form.value.content;
          contactDemand.preferedContactMethod = this.form.value.contactPreference;
          return contactDemand;
        }
      }, {
        key: "activateFormVerify",
        value: function activateFormVerify() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]
            }),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(12)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            contactPreference: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.contactPreferences[0], {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            })
          });
        }
      }, {
        key: "getCompany",
        value: function getCompany() {
          var _this50 = this;

          this.httpCompany.getCompany().subscribe(function (data) {
            _this50.company = data;
          }, function (error) {
            console.log(error);
          }, function () {
            _this50.isLoading = false;
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]
      }, {
        type: _services_contact_demand_service__WEBPACK_IMPORTED_MODULE_1__["ContactDemandService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/components/contact/contact.component.css")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/error/error.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/error/error.component.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ErrorComponent = function ErrorComponent(data) {
      _classCallCheck(this, ErrorComponent);

      this.data = data;
    };

    ErrorComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html")).default,
      selector: "app-error" // styleUrls:["./error.component.css"]

    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    text-decoration: none;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n  }\r\n  body{\r\n    font-family: montserrat;\r\n  }\r\n  nav{\r\n    background: #000000;\r\n    height: 70px;\r\n    width: 100%;\r\n  }\r\n  a.logo{\r\n    color: white;\r\n    font-size: 35px;\r\n    line-height: 70px;\r\n    padding: 0 20px;\r\n    font-weight: bold;\r\n    border-radius: 3px;\r\n  }\r\n  nav ul{\r\n    float: right;\r\n    margin-right: 20px;\r\n  }\r\n  nav ul li{\r\n    display: inline-block;\r\n    line-height: 70px;\r\n    margin: 0 5px;\r\n  }\r\n  nav ul li a{\r\n    color: white;\r\n    font-size: 17px;\r\n    padding: 7px 13px;\r\n    border-radius: 3px;\r\n    text-transform: uppercase;\r\n  }\r\n  a.active,a:hover{\r\n    background: #b40c0c;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n  }\r\n  .checkbtn{\r\n    font-size: 30px;\r\n    color: white;\r\n    float: right;\r\n    line-height: 70px;\r\n    margin-right: 40px;\r\n    cursor: pointer;\r\n    display: none;\r\n  }\r\n  #check{\r\n    display: none;\r\n  }\r\n  @media (max-width: 1400px){\r\n    a.logo{\r\n      font-size: 30px;\r\n      padding-left: 20px;\r\n    }\r\n    nav ul li a{\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  @media (max-width: 1400px){\r\n    .checkbtn{\r\n      display: block;\r\n    }\r\n    ul{\r\n      z-index: 100;\r\n      position: fixed;\r\n      width: 100%;\r\n      height: 100vh;\r\n      background: #000000;\r\n      top: 68px;\r\n      left: -100%;\r\n      text-align: center;\r\n      -webkit-transition: all .5s;\r\n      transition: all .5s;\r\n    }\r\n    nav ul li{\r\n      display: block;\r\n      margin: 30px 0;\r\n      line-height: 30px;\r\n    }\r\n    nav ul li a{\r\n      font-size: 20px;\r\n    }\r\n    a:hover,a.active{\r\n      background: none;\r\n      color: #b40c0c;\r\n    }\r\n    #check:checked ~ ul{\r\n      left: 0;\r\n    }\r\n  }\r\n  @media (max-width: 600px){\r\n    a.logo{\r\n      font-size: 25px;\r\n      padding-left: 20px;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBZTtJQUFmLGVBQWU7RUFDakI7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRTtNQUNFLGVBQWU7TUFDZixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRjtFQUNBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxZQUFZO01BQ1osZUFBZTtNQUNmLFdBQVc7TUFDWCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLDJCQUFtQjtNQUFuQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGNBQWM7TUFDZCxjQUFjO01BQ2QsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztJQUNoQjtJQUNBO01BQ0UsT0FBTztJQUNUO0VBQ0Y7RUFDQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGtCQUFrQjtJQUNwQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgfVxyXG4gIG5hdntcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgYS5sb2dve1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgbmF2IHVse1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBuYXYgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG4gIG5hdiB1bCBsaSBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcGFkZGluZzogN3B4IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBhLmFjdGl2ZSxhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2I0MGMwYztcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICB9XHJcblxyXG4gIC5jaGVja2J0bntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI2NoZWNre1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCl7XHJcbiAgICBhLmxvZ297XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpIGF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCl7XHJcbiAgICAuY2hlY2tidG57XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgdG9wOiA2OHB4O1xyXG4gICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpe1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHVsIGxpIGF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGE6aG92ZXIsYS5hY3RpdmV7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjYjQwYzBjO1xyXG4gICAgfVxyXG4gICAgI2NoZWNrOmNoZWNrZWQgfiB1bHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIGEubG9nb3tcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_WindowScrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../models/WindowScrolling */
    "./src/app/models/WindowScrolling.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/company.service */
    "./src/app/services/company.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(httpCompany, windowScrolling) {
        _classCallCheck(this, HeaderComponent);

        this.httpCompany = httpCompany;
        this.windowScrolling = windowScrolling;
        this.isLoading = true;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getContact();
        }
      }, {
        key: "getContact",
        value: function getContact() {
          var _this51 = this;

          this.httpCompany.getCompany().subscribe(function (data) {
            _this51.company = data;
          }, function (error) {
            console.log(error);
          }, function () {
            _this51.isLoading = false;
          });
        }
      }, {
        key: "setClickListener",
        value: function setClickListener(event) {
          var inputMenu = event.target;

          if (inputMenu.checked) {
            this.disableScrolling();
            document.querySelector("#menuBtn").classList.remove("fa-bars");
            document.querySelector("#menuBtn").classList.add("fa-times");
          } else {
            this.enableScrolling();
            document.querySelector("#menuBtn").classList.add("fa-bars");
            document.querySelector("#menuBtn").classList.remove("fa-times");
          }
        }
      }, {
        key: "enableScrolling",
        value: function enableScrolling() {
          this.windowScrolling.disable();
          this.windowScrolling.enable();
          var checkButton = document.querySelector("#check");
          checkButton.checked = false;
          document.querySelector("#menuBtn").classList.add("fa-bars");
          document.querySelector("#menuBtn").classList.remove("fa-times");
        }
      }, {
        key: "disableScrolling",
        value: function disableScrolling() {
          this.windowScrolling.disable();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
      }, {
        type: _models_WindowScrolling__WEBPACK_IMPORTED_MODULE_1__["WindowScrolling"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/homepage/homepage.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/homepage/homepage.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomepageHomepageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (max-width: 992px) {\r\n  .centerItems {\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n\r\n  .cellPhonesFormat {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n  .imgTestimony {\r\n    width: 100%;\r\n    height: 300px;\r\n    margin: auto;\r\n  }\r\n\r\n  .mobileCard {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n  margin: 1 1 1 1;\r\n}\r\n\r\n.projectImages {\r\n  display: inline-block;\r\n  margin-left: 1rem;\r\n  margin-top: 1rem;\r\n  padding: 1px;\r\n  border: 1px solid #eeecec;\r\n  background-color: #c7c1c1;\r\n  box-shadow: 1px solid crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jZW50ZXJJdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jZWxsUGhvbmVzRm9ybWF0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuaW1nVGVzdGltb255IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5tb2JpbGVDYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMSAxIDEgMTtcclxufVxyXG5cclxuLnByb2plY3RJbWFnZXMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2MxYzE7XHJcbiAgYm94LXNoYWRvdzogMXB4IHNvbGlkIGNyaW1zb247XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/homepage/homepage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/homepage/homepage.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppComponentsHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_service_offered_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/service-offered.service */
    "./src/app/services/service-offered.service.ts");
    /* harmony import */


    var _models_Testimony__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../models/Testimony */
    "./src/app/models/Testimony.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2_photoswipe */
    "./node_modules/angular2_photoswipe/fesm2015/angular2_photoswipe.js");
    /* harmony import */


    var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/project.service */
    "./src/app/services/project.service.ts");
    /* harmony import */


    var src_app_services_testimony_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/testimony.service */
    "./src/app/services/testimony.service.ts");
    /* harmony import */


    var src_app_models_Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/Project */
    "./src/app/models/Project.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_models_Picture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/models/Picture */
    "./src/app/models/Picture.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      // tslint:disable-next-line: max-line-length
      function HomepageComponent(httpProject, // tslint:disable-next-line: align
      httpTestimonies, // tslint:disable-next-line: align
      httpOfferedServices, router) {
        _classCallCheck(this, HomepageComponent);

        this.httpProject = httpProject;
        this.httpTestimonies = httpTestimonies;
        this.httpOfferedServices = httpOfferedServices;
        this.router = router;
        this.listeProjects = [];
        this.listeTestimonies = [];
        this.listeOfferedServices = [];
        this.isLoading = true;
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProjectsSliced();
          this.getTestimonies();
          this.getOfferedServices();
        }
      }, {
        key: "getProjectsSliced",
        value: function getProjectsSliced() {
          var _this52 = this;

          this.httpProject.getProjects().subscribe(function (data) {
            data.slice(0, 4).forEach(function (project) {
              var pr = new src_app_models_Project__WEBPACK_IMPORTED_MODULE_7__["Project"]();
              pr.id = project.id;
              pr.projectName = project.projectName;
              pr.description = project.description;
              pr.listePictures = [];
              project.listePictures.forEach(function (picture) {
                var pic = new src_app_models_Picture__WEBPACK_IMPORTED_MODULE_9__["Picture"]();
                pic.id = picture.id;
                pic.descriptionPhoto = picture.descriptionPhoto;
                pic.lienPhoto = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].photoBaseApi + picture.lienPhoto;
                pic.lienPhotoTn = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].photoBaseApi + picture.lienPhotoTn;
                pic.nomPhoto = picture.nomPhoto;
                pr.listePictures.push(pic);
              });

              _this52.listeProjects.push(pr);
            });

            _this52.addPhotoSwipe();
          }, function (error) {
            console.log(error);
          }, function () {
            _this52.isLoading = false;
          });
        }
      }, {
        key: "addPhotoSwipe",
        value: function addPhotoSwipe() {
          this.listeProjects.forEach(function (element) {
            var count = 0;
            element.listePictures.forEach(function (photo) {
              var img = document.createElement("img");
              img.src = photo.lienPhoto;

              img.onload = function () {
                photo.picture.height = img.height;
                photo.picture.width = img.width;
              };

              photo.picture = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_4__["Image"]();
              photo.picture.largeUrl = photo.lienPhoto;
              photo.picture.height = img.height;
              photo.picture.width = img.width;
              photo.picture.id = count;
              photo.picture.size = "".concat(photo.picture.width, "x").concat(photo.picture.height);
              photo.picture.thumbUrl = photo.lienPhotoTn;
              photo.picture.description = photo.descriptionPhoto;
              count += 1;
            });
          });
        }
      }, {
        key: "getTestimonies",
        value: function getTestimonies() {
          var _this53 = this;

          this.httpTestimonies.getTestimonies().subscribe(function (data) {
            data.forEach(function (testimony) {
              var tes = new _models_Testimony__WEBPACK_IMPORTED_MODULE_2__["Testimony"]();
              tes.id = testimony.id;
              tes.testimonyFName = testimony.testimonyFName;
              tes.testimonyLName = testimony.testimonyLName;
              tes.relation = testimony.relation;
              tes.comment = testimony.comment;
              tes.photoLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].photoBaseApi + testimony.photoLink;

              _this53.listeTestimonies.push(tes);
            });
          });
        }
      }, {
        key: "getOfferedServices",
        value: function getOfferedServices() {
          var _this54 = this;

          this.httpOfferedServices.getOfferedServices().subscribe(function (data) {
            _this54.listeOfferedServices = data;
          }, function (error) {
            console.log(error);
          }, function () {
            _this54.isLoading = false;
          });
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]
      }, {
        type: src_app_services_testimony_service__WEBPACK_IMPORTED_MODULE_6__["TestimonyService"]
      }, {
        type: _services_service_offered_service__WEBPACK_IMPORTED_MODULE_1__["ServiceOfferedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-homepage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/homepage/homepage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.component.css */
      "./src/app/components/homepage/homepage.component.css")).default]
    })], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/components/offered-services/offered-services.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/offered-services/offered-services.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOfferedServicesOfferedServicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2ZmZXJlZC1zZXJ2aWNlcy9vZmZlcmVkLXNlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/offered-services/offered-services.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/offered-services/offered-services.component.ts ***!
    \***************************************************************************/

  /*! exports provided: OfferedServicesComponent */

  /***/
  function srcAppComponentsOfferedServicesOfferedServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferedServicesComponent", function () {
      return OfferedServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_service_offered_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-offered.service */
    "./src/app/services/service-offered.service.ts");

    var OfferedServicesComponent =
    /*#__PURE__*/
    function () {
      function OfferedServicesComponent(httpOfferedServices) {
        _classCallCheck(this, OfferedServicesComponent);

        this.httpOfferedServices = httpOfferedServices;
        this.listeOfferedServices = [];
        this.isLoading = true;
      }

      _createClass(OfferedServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getOfferedServices();
        }
      }, {
        key: "getOfferedServices",
        value: function getOfferedServices() {
          var _this55 = this;

          this.httpOfferedServices.getOfferedServices().subscribe(function (data) {
            _this55.listeOfferedServices = data;
          }, function (error) {
            console.log(error);
          }, function () {
            _this55.isLoading = false;
          });
        }
      }]);

      return OfferedServicesComponent;
    }();

    OfferedServicesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_service_offered_service__WEBPACK_IMPORTED_MODULE_2__["ServiceOfferedService"]
      }];
    };

    OfferedServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offered-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offered-services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/offered-services/offered-services.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offered-services.component.css */
      "./src/app/components/offered-services/offered-services.component.css")).default]
    })], OfferedServicesComponent);
    /***/
  },

  /***/
  "./src/app/components/projects/projects.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/projects/projects.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProjectsProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (max-width: 800px) {\r\n  .centerItems {\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.projectImages {\r\n  display: inline-block;\r\n  margin-left: 1rem;\r\n  margin-top: 1rem;\r\n  padding: 1px;\r\n  border: 1px solid #eeecec;\r\n  background-color: #c7c1c1;\r\n  box-shadow: 1px solid crimson;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jZW50ZXJJdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0SW1hZ2VzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjMWMxO1xyXG4gIGJveC1zaGFkb3c6IDFweCBzb2xpZCBjcmltc29uO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/projects/projects.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/projects/projects.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppComponentsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/Project */
    "./src/app/models/Project.ts");
    /* harmony import */


    var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/project.service */
    "./src/app/services/project.service.ts");
    /* harmony import */


    var angular2_photoswipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2_photoswipe */
    "./node_modules/angular2_photoswipe/fesm2015/angular2_photoswipe.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var src_app_models_Picture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/Picture */
    "./src/app/models/Picture.ts");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(httpProject) {
        _classCallCheck(this, ProjectsComponent);

        this.httpProject = httpProject;
        this.listeProjects = [];
        this.isLoading = true;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProjects();
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          var _this56 = this;

          this.httpProject.getProjects().subscribe(function (data) {
            data.forEach(function (project) {
              var pr = new src_app_models_Project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
              pr.id = project.id;
              pr.projectName = project.projectName;
              pr.description = project.description;
              pr.listePictures = [];
              project.listePictures.forEach(function (picture) {
                var pic = new src_app_models_Picture__WEBPACK_IMPORTED_MODULE_6__["Picture"]();
                pic.id = picture.id;
                pic.descriptionPhoto = picture.descriptionPhoto;
                pic.lienPhoto = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].photoBaseApi + picture.lienPhoto;
                pic.lienPhotoTn = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].photoBaseApi + picture.lienPhotoTn;
                pic.nomPhoto = picture.nomPhoto;
                console.log("PICTURE: " + JSON.stringify(pic));
                pr.listePictures.push(pic);
              });

              _this56.listeProjects.push(pr);
            });

            _this56.addPhotoSwipe();
          }, function (error) {
            console.log(error);
          }, function () {
            _this56.isLoading = false;
          });
        }
      }, {
        key: "addPhotoSwipe",
        value: function addPhotoSwipe() {
          this.listeProjects.forEach(function (element) {
            var count = 0;
            element.listePictures.forEach(function (photo) {
              var img = document.createElement("img");
              img.src = photo.lienPhoto;

              img.onload = function () {
                photo.picture.height = img.height;
                photo.picture.width = img.width;
              };

              photo.picture = new angular2_photoswipe__WEBPACK_IMPORTED_MODULE_4__["Image"]();
              photo.picture.largeUrl = photo.lienPhoto;
              photo.picture.height = img.height;
              photo.picture.width = img.width;
              photo.picture.id = count;
              photo.picture.size = "".concat(photo.picture.width, "x").concat(photo.picture.height);
              photo.picture.thumbUrl = photo.lienPhotoTn;
              photo.picture.description = photo.descriptionPhoto;
              count += 1;
            });
          });
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-projects",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.css */
      "./src/app/components/projects/projects.component.css")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/components/quoting/quoting.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/quoting/quoting.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuotingQuotingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttonServices {\r\n  margin-top: 1rem;\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n}\r\n\r\nmat-radio-button {\r\n  padding: 0.5 rem;\r\n  margin-right:0.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n#buttonsCentering {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.image-preview {\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.image-preview img {\r\n  height: 100%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdW90aW5nL3F1b3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVvdGluZy9xdW90aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uU2VydmljZXMge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC41IHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6MC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNidXR0b25zQ2VudGVyaW5nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/quoting/quoting.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/quoting/quoting.component.ts ***!
    \*********************************************************/

  /*! exports provided: QuotingComponent */

  /***/
  function srcAppComponentsQuotingQuotingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotingComponent", function () {
      return QuotingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/quote.service */
    "./src/app/services/quote.service.ts");
    /* harmony import */


    var src_app_services_service_offered_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/service-offered.service */
    "./src/app/services/service-offered.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _models_Quote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/Quote */
    "./src/app/models/Quote.ts");
    /* harmony import */


    var src_app_models_Client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/Client */
    "./src/app/models/Client.ts");
    /* harmony import */


    var src_app_models_Files__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/models/Files */
    "./src/app/models/Files.ts");
    /* harmony import */


    var _models_file_type_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../models/file-type.validator */
    "./src/app/models/file-type.validator.ts");
    /* harmony import */


    var email_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! email-validator */
    "./node_modules/email-validator/index.js");
    /* harmony import */


    var email_validator__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_10__);

    var QuotingComponent =
    /*#__PURE__*/
    function () {
      function QuotingComponent(httpServicesOffered, httpQuotes) {
        _classCallCheck(this, QuotingComponent);

        this.httpServicesOffered = httpServicesOffered;
        this.httpQuotes = httpQuotes;
        this.contactPreferences = ["Téléphone", "Courriel"];
        this.listeServices = [];
        this.serviceNotClicked = true;
        this.imagesPreviews = [];
        this.images = [];
        this.imgError = false;
        this.options = ["Téléphone", "Courriel"];
        this.isLoading = true;
        this.quote = new _models_Quote__WEBPACK_IMPORTED_MODULE_6__["Quote"]();
        this.uploadCompleted = false;
        this.uploadError = false;
      }

      _createClass(QuotingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getServicesOffered();
          this.activateFormVerify();
        }
      }, {
        key: "activateFormVerify",
        value: function activateFormVerify() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]
            }),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]
            }),
            contactPreference: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.contactPreferences[0], {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("empty", {
              asyncValidators: [_models_file_type_validator__WEBPACK_IMPORTED_MODULE_9__["mimeType"]]
            })
          });
        }
      }, {
        key: "onSavePost",
        value: function onSavePost() {
          var _this57 = this;

          if (this.form.invalid) {
            return;
          }

          if (this.checkValues()) {
            this.isLoading = true;
            this.httpQuotes.postQuote(this.quote, this.images).subscribe(function (data) {
              if (data.message = "SUCCESS") {
                _this57.uploadCompleted = true;
              }
            }, function (error) {
              return console.log(error);
            }, function () {
              if (_this57.uploadCompleted) {
                _this57.uploadError = false;
                var elementToScroll = document.querySelector("#sendSuccess");
                if (elementToScroll) elementToScroll.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest"
                });
              } else {
                _this57.uploadError = true;

                var _elementToScroll2 = document.querySelector("#sendError");

                if (_elementToScroll2) _elementToScroll2.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest"
                });
              }
            });
          }
        }
      }, {
        key: "checkValues",
        value: function checkValues() {
          // TODO: FAIRE UNE LOGIQUE POUR TESTER LES VALEURS
          var client = new src_app_models_Client__WEBPACK_IMPORTED_MODULE_7__["Client"]();
          client.firstName = this.form.value.fName;
          client.lastName = this.form.value.lName;

          if (!email_validator__WEBPACK_IMPORTED_MODULE_10__["validate"](this.form.value.email)) {
            this.form.controls["email"].setErrors({
              "incorrect": true
            });
            return false;
          }

          client.email = this.form.value.email;
          client.phoneNumber = this.form.value.phone;
          client.phoneNumber = client.phoneNumber.split('-').join('');

          if (client.phoneNumber.match(/[a-z]/i)) {
            this.form.controls['phone'].setErrors({
              "incorrect": true
            });
            return false;
          }

          this.form.controls['phone'].setErrors({
            "incorrect": false
          });
          ;
          this.quote.client = client;
          this.quote.description = this.form.value.content;
          this.quote.preferedContactMethod = this.form.value.contactPreference;
          this.quote.offeredService = this.serviceAskedFor;
          return true;
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this58 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.reader = new FileReader();

          this.reader.onload = function () {
            if (_this58.form.get("image").valid) {
              _this58.imgError = false;
              _this58.imagePreview = _this58.reader.result;

              _this58.imagesPreviews.push(_this58.imagePreview);

              _this58.images.push(file);

              _this58.addFile(file, _this58.imagePreview);
            } else {
              _this58.imgError = true;

              _this58.form.get("image").setValue("empty");
            }
          };

          this.reader.readAsDataURL(file);
        }
      }, {
        key: "addFile",
        value: function addFile(file, imagePreview) {
          var fileToAdd = new src_app_models_Files__WEBPACK_IMPORTED_MODULE_8__["Files"]();
          fileToAdd.fileLink = imagePreview;
          fileToAdd.fileName = file.name;
          this.quote.fileLinks.push(fileToAdd);
        }
      }, {
        key: "getServicesOffered",
        value: function getServicesOffered() {
          var _this59 = this;

          this.httpServicesOffered.getOfferedServices().subscribe(function (data) {
            _this59.listeServices = data;
          }, function (error) {
            console.log(error);
          }, function () {
            _this59.isLoading = false;
          });
        }
      }, {
        key: "addServiceToQuote",
        value: function addServiceToQuote(service) {
          jquery__WEBPACK_IMPORTED_MODULE_5__("#quoteSelector").hide("slow");
          this.serviceNotClicked = false;
          this.serviceAskedFor = service;
        }
      }]);

      return QuotingComponent;
    }();

    QuotingComponent.ctorParameters = function () {
      return [{
        type: src_app_services_service_offered_service__WEBPACK_IMPORTED_MODULE_2__["ServiceOfferedService"]
      }, {
        type: _services_quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]
      }];
    };

    QuotingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-quoting",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quoting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quoting/quoting.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quoting.component.css */
      "./src/app/components/quoting/quoting.component.css")).default]
    })], QuotingComponent);
    /***/
  },

  /***/
  "./src/app/components/team/team.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/team/team.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTeamTeamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (max-width: 600px) {\r\n    .centerCards {\r\n        width: 100%;\r\n        margin: auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNlbnRlckNhcmRzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/team/team.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/team/team.component.ts ***!
    \***************************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppComponentsTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/team.service */
    "./src/app/services/team.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TeamComponent =
    /*#__PURE__*/
    function () {
      function TeamComponent(httpTeam) {
        _classCallCheck(this, TeamComponent);

        this.httpTeam = httpTeam;
        this.listeEmployees = [];
        this.isLoading = true;
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTeam();
        }
      }, {
        key: "getTeam",
        value: function getTeam() {
          var _this60 = this;

          this.httpTeam.getTeam().subscribe(function (data) {
            _this60.listeEmployees = data;

            _this60.listeEmployees.forEach(function (emp) {
              emp.pictureLink = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].photoBaseApi + emp.pictureLink;
            });
          }, function (error) {
            console.log(error);
          }, function () {
            _this60.isLoading = false;
          });
        }
      }]);

      return TeamComponent;
    }();

    TeamComponent.ctorParameters = function () {
      return [{
        type: _services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]
      }];
    };

    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-team',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team/team.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team.component.css */
      "./src/app/components/team/team.component.css")).default]
    })], TeamComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");

    var MaterialComponents = [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [MaterialComponents],
      exports: [MaterialComponents]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/models/Admin.ts":
  /*!*********************************!*\
    !*** ./src/app/models/Admin.ts ***!
    \*********************************/

  /*! exports provided: Admin */

  /***/
  function srcAppModelsAdminTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Admin", function () {
      return Admin;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Admin = function Admin(id, username, password, employee) {
      _classCallCheck(this, Admin);

      this.id = id;
      this.username = username;
      this.password = password;
      this.employee = employee;
    };
    /***/

  },

  /***/
  "./src/app/models/Auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/models/Auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppModelsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuth = this.authService.getIsAuth();

          if (!isAuth) {
            this.router.navigate(['/']);
          }

          return isAuth;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/models/Client.ts":
  /*!**********************************!*\
    !*** ./src/app/models/Client.ts ***!
    \**********************************/

  /*! exports provided: Client */

  /***/
  function srcAppModelsClientTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Client", function () {
      return Client;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Client = function Client() {
      _classCallCheck(this, Client);
    };
    /***/

  },

  /***/
  "./src/app/models/ContactDemand.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/ContactDemand.ts ***!
    \*****************************************/

  /*! exports provided: ContactDemand */

  /***/
  function srcAppModelsContactDemandTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDemand", function () {
      return ContactDemand;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ContactDemand = function ContactDemand() {
      _classCallCheck(this, ContactDemand);
    };
    /***/

  },

  /***/
  "./src/app/models/Employee.ts":
  /*!************************************!*\
    !*** ./src/app/models/Employee.ts ***!
    \************************************/

  /*! exports provided: Employee */

  /***/
  function srcAppModelsEmployeeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Employee", function () {
      return Employee;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Employee = // tslint:disable-next-line: max-line-length
    function Employee(id, firstName, lastName, role, pictureLink, description) {
      _classCallCheck(this, Employee);

      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.role = role;
      this.pictureLink = pictureLink;
      this.description = description;
    };
    /***/

  },

  /***/
  "./src/app/models/Error-interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/Error-interceptor.ts ***!
    \*********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppModelsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/error.service */
    "./src/app/services/error.service.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/error/error.component */
    "./src/app/components/error/error.component.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(dialog, errorService) {
        _classCallCheck(this, ErrorInterceptor);

        this.dialog = dialog;
        this.errorService = errorService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this61 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = "An unknown error occurred!";

            if (error.error.message) {
              errorMessage = error.error.message;
            }

            _this61.dialog.open(_components_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], {
              data: {
                message: errorMessage
              }
            }); // this.errorService.throwError(errorMessage);


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _services_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/models/Files.ts":
  /*!*********************************!*\
    !*** ./src/app/models/Files.ts ***!
    \*********************************/

  /*! exports provided: Files */

  /***/
  function srcAppModelsFilesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Files", function () {
      return Files;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Files = function Files(id, fileName, fileLink) {
      _classCallCheck(this, Files);

      this.id = id;
      this.fileName = fileName;
      this.fileLink = fileLink;
    };
    /***/

  },

  /***/
  "./src/app/models/OfferedService.ts":
  /*!******************************************!*\
    !*** ./src/app/models/OfferedService.ts ***!
    \******************************************/

  /*! exports provided: OfferedService */

  /***/
  function srcAppModelsOfferedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferedService", function () {
      return OfferedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OfferedService = function OfferedService(id, serviceName, serviceDescription) {
      _classCallCheck(this, OfferedService);

      this.id = id;
      this.serviceName = serviceName;
      this.serviceDescription = serviceDescription;
    };
    /***/

  },

  /***/
  "./src/app/models/Picture.ts":
  /*!***********************************!*\
    !*** ./src/app/models/Picture.ts ***!
    \***********************************/

  /*! exports provided: Picture */

  /***/
  function srcAppModelsPictureTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Picture", function () {
      return Picture;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Picture = function Picture() {
      _classCallCheck(this, Picture);
    };
    /***/

  },

  /***/
  "./src/app/models/Project.ts":
  /*!***********************************!*\
    !*** ./src/app/models/Project.ts ***!
    \***********************************/

  /*! exports provided: Project */

  /***/
  function srcAppModelsProjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Project = function Project() {
      _classCallCheck(this, Project);
    };
    /***/

  },

  /***/
  "./src/app/models/Quote.ts":
  /*!*********************************!*\
    !*** ./src/app/models/Quote.ts ***!
    \*********************************/

  /*! exports provided: Quote */

  /***/
  function srcAppModelsQuoteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Quote", function () {
      return Quote;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Quote = function Quote() {
      _classCallCheck(this, Quote);

      this.fileLinks = [];
    };
    /***/

  },

  /***/
  "./src/app/models/Testimony.ts":
  /*!*************************************!*\
    !*** ./src/app/models/Testimony.ts ***!
    \*************************************/

  /*! exports provided: Testimony */

  /***/
  function srcAppModelsTestimonyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Testimony", function () {
      return Testimony;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Testimony = function Testimony() {
      _classCallCheck(this, Testimony);
    };
    /***/

  },

  /***/
  "./src/app/models/WindowScrolling.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/WindowScrolling.ts ***!
    \*******************************************/

  /*! exports provided: WindowScrolling */

  /***/
  function srcAppModelsWindowScrollingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowScrolling", function () {
      return WindowScrolling;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WindowScrolling =
    /*#__PURE__*/
    function () {
      // I initialize the window-scrolling service.
      // --
      // CAUTION: This service makes direct references to the global DOCUMENT object.
      // Theoretically, the Renderer2 service should be able to provide an API that would
      // allow me to side-step direct DOM-references. However, the Renderer2 service cannot
      // be injected directly into another Service - only into a Directive. As such, I'm
      // just dropping all the pretenses and I'm using the document directly.
      function WindowScrolling() {
        _classCallCheck(this, WindowScrolling);

        // Rather than directly overwriting the style of the BODY tag (which is dicey),
        // we're going to inject a STYLE element that overrides the scroll behavior. This
        // way we can add and remove the style in order to toggle the behavior.
        this.styleTag = this.buildStyleElement();
      } // ---
      // PUBLIC METHODS.
      // ---
      // I disable the scrolling feature on the main viewport.


      _createClass(WindowScrolling, [{
        key: "disable",
        value: function disable() {
          document.body.appendChild(this.styleTag);
        } // I re-enable the scrolling feature on the main viewport.

      }, {
        key: "enable",
        value: function enable() {
          document.body.removeChild(this.styleTag);
        } // ---
        // PRIVATE METHODS.
        // ---
        // I build and return a Style element that will prevent scrolling on the body.

      }, {
        key: "buildStyleElement",
        value: function buildStyleElement() {
          var style = document.createElement('style');
          style.type = 'text/css';
          style.setAttribute('data-debug', 'Injected by WindowScrolling service.');
          style.textContent = "\n\t\t\tbody {\n\t\t\t\toverflow: hidden !important ;\n\t\t\t}\n\t\t";
          return style;
        }
      }]);

      return WindowScrolling;
    }();

    WindowScrolling = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WindowScrolling);
    /***/
  },

  /***/
  "./src/app/models/auth-interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/models/auth-interceptor.ts ***!
    \********************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppModelsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authToken = this.authService.getToken();
          var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
          });
          return next.handle(authRequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/models/file-type.validator.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/file-type.validator.ts ***!
    \***********************************************/

  /*! exports provided: mimeType */

  /***/
  function srcAppModelsFileTypeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mimeType", function () {
      return mimeType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var mimeType = function mimeType(control) {
      if (typeof control.value === "string") {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
      }

      var file = control.value;
      var fileReader = new FileReader();
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
          var arr = new Uint8Array(fileReader.result).subarray(0, 4);
          var header = "";
          var isValid = false;

          for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          console.log(header);

          switch (header) {
            case "89504e47":
              isValid = true;
              break;

            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
              isValid = true;
              break;

            default:
              isValid = false; // Or you can use the blob.type as fallback

              break;
          }

          if (isValid) {
            console.log(isValid);
            observer.next(null);
          } else {
            observer.next({
              invalidMimeType: true
            });
          }

          observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
      });
      return frObs;
    };
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseApi + "admin";

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.userId;
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        }
      }, {
        key: "login",
        value: function login(admin) {
          var _this62 = this;

          this.http.post(BACKEND_URL, admin).subscribe(function (response) {
            console.log(response);
            var token = response.token;
            _this62.token = token;

            if (token) {
              var expiresInDuration = response.expiresIn;

              _this62.setAuthTimer(expiresInDuration);

              _this62.isAuthenticated = true;
              _this62.userId = response.userId;

              _this62.authStatusListener.next(true);

              var now = new Date();
              var expirationDate = new Date(now.getTime() + expiresInDuration * 10000);
              console.log(expirationDate);

              _this62.saveAuthData(token, expirationDate, _this62.userId);

              _this62.router.navigate(["/admin/homepage"]);
            }
          }, function (error) {
            console.log(error);

            _this62.authStatusListener.next(false);
          });
        }
      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var authInformation = this.getAuthData();

          if (!authInformation) {
            return;
          }

          var now = new Date();
          var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 10000);
            this.authStatusListener.next(true);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = null;
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
          this.userId = null;
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
          this.router.navigate(["/"]);
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          var _this63 = this;

          this.tokenTimer = setTimeout(function () {
            _this63.logout();
          }, duration * 10000);
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate, userId) {
          localStorage.setItem("token", token);
          localStorage.setItem("expiration", expirationDate.toISOString());
          localStorage.setItem("userId", userId);
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem("token");
          localStorage.removeItem("expiration");
          localStorage.removeItem("userId");
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem("token");
          var expirationDate = localStorage.getItem("expiration");
          var userId = localStorage.getItem("userId");

          if (!token || !expirationDate) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
          };
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/company.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/company.service.ts ***!
    \*********************************************/

  /*! exports provided: CompanyService */

  /***/
  function srcAppServicesCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
      return CompanyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CompanyService =
    /*#__PURE__*/
    function () {
      function CompanyService(httpClient) {
        _classCallCheck(this, CompanyService);

        this.httpClient = httpClient;
        this.baseApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
      }

      _createClass(CompanyService, [{
        key: "getCompany",
        value: function getCompany() {
          return this.httpClient.get(this.baseApi + 'company');
        }
      }, {
        key: "updateCompany",
        value: function updateCompany(company) {
          console.log(company);
          return this.httpClient.put(this.baseApi + 'company', company);
        }
      }]);

      return CompanyService;
    }();

    CompanyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CompanyService);
    /***/
  },

  /***/
  "./src/app/services/contact-demand.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/contact-demand.service.ts ***!
    \****************************************************/

  /*! exports provided: ContactDemandService */

  /***/
  function srcAppServicesContactDemandServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDemandService", function () {
      return ContactDemandService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ContactDemandService =
    /*#__PURE__*/
    function () {
      function ContactDemandService(httpClient) {
        _classCallCheck(this, ContactDemandService);

        this.httpClient = httpClient;
        this.baseApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApi;
      }

      _createClass(ContactDemandService, [{
        key: "postContactDemand",
        value: function postContactDemand(contactDemand) {
          console.log(contactDemand);
          return this.httpClient.post(this.baseApi + "contactDemand", contactDemand);
        }
      }, {
        key: "getContactDemands",
        value: function getContactDemands() {
          return this.httpClient.get(this.baseApi + "contactDemand");
        }
      }, {
        key: "getContactDemandsCompleted",
        value: function getContactDemandsCompleted() {
          return this.httpClient.get(this.baseApi + "contactDemand/completed");
        }
      }, {
        key: "getContactDemandById",
        value: function getContactDemandById(id) {
          return this.httpClient.get(this.baseApi + "contactDemand/" + id);
        }
      }, {
        key: "updateContactDemand",
        value: function updateContactDemand(contactDemand) {
          return this.httpClient.put(this.baseApi + "contactDemand/" + contactDemand.id, contactDemand);
        }
      }, {
        key: "markCdAsCompleted",
        value: function markCdAsCompleted(contactDemand) {
          console.log(contactDemand);
          return this.httpClient.put(this.baseApi + "contactDemand/" + contactDemand.id, contactDemand);
        }
      }]);

      return ContactDemandService;
    }();

    ContactDemandService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ContactDemandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ContactDemandService);
    /***/
  },

  /***/
  "./src/app/services/error.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/error.service.ts ***!
    \*******************************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppServicesErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorService =
    /*#__PURE__*/
    function () {
      function ErrorService() {
        _classCallCheck(this, ErrorService);

        this.errorListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(ErrorService, [{
        key: "getErrorListener",
        value: function getErrorListener() {
          return this.errorListener.asObservable();
        }
      }, {
        key: "throwError",
        value: function throwError(message) {
          this.errorListener.next(message);
        }
      }, {
        key: "handleError",
        value: function handleError() {
          this.errorListener.next(null);
        }
      }]);

      return ErrorService;
    }();

    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], ErrorService);
    /***/
  },

  /***/
  "./src/app/services/project.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/project.service.ts ***!
    \*********************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppServicesProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ProjectService =
    /*#__PURE__*/
    function () {
      function ProjectService(httpClient) {
        _classCallCheck(this, ProjectService);

        this.httpClient = httpClient;
        this.baseApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
      }

      _createClass(ProjectService, [{
        key: "getProjects",
        value: function getProjects() {
          return this.httpClient.get(this.baseApi + "projects");
        }
      }, {
        key: "getProjectById",
        value: function getProjectById(id) {
          return this.httpClient.get(this.baseApi + "projects/" + id);
        }
      }, {
        key: "saveProject",
        value: function saveProject(project, picturesList) {
          var formData = new FormData();
          Array.from(picturesList).map(function (file, index) {
            return formData.append("file" + index, file, file.name);
          });
          formData.append("project", JSON.stringify(project));
          return this.httpClient.post(this.baseApi + "projects", formData);
        }
      }, {
        key: "updateProject",
        value: function updateProject(project, picturesList) {
          var formData = new FormData();

          if (picturesList.length > 0) {
            Array.from(picturesList).map(function (file, index) {
              return formData.append("file" + index, file, file.name);
            });
          }

          formData.append("project", JSON.stringify(project));
          console.log(formData);
          return this.httpClient.put(this.baseApi + "projects/" + project.id, formData);
        }
      }, {
        key: "deletePhotoById",
        value: function deletePhotoById(idPhoto) {
          return this.httpClient.delete(this.baseApi + "pictures/" + idPhoto);
        }
      }, {
        key: "deleteProject",
        value: function deleteProject(projectId) {
          return this.httpClient.delete(this.baseApi + "projects/" + projectId);
        }
      }]);

      return ProjectService;
    }();

    ProjectService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ProjectService);
    /***/
  },

  /***/
  "./src/app/services/quote.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/quote.service.ts ***!
    \*******************************************/

  /*! exports provided: QuoteService */

  /***/
  function srcAppServicesQuoteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteService", function () {
      return QuoteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var QuoteService =
    /*#__PURE__*/
    function () {
      function QuoteService(httpClient) {
        _classCallCheck(this, QuoteService);

        this.httpClient = httpClient;
        this.baseApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
      }

      _createClass(QuoteService, [{
        key: "postQuote",
        value: function postQuote(quote, picturesList) {
          var formData = new FormData();
          Array.from(picturesList).map(function (file, index) {
            return formData.append("file" + index, file, file.name);
          });
          formData.append("quote", JSON.stringify(quote));
          return this.httpClient.post(this.baseApi + "quotes", formData);
        }
      }, {
        key: "markQuoteCompleted",
        value: function markQuoteCompleted(quote) {
          return this.httpClient.put(this.baseApi + "quotes/" + quote.id, quote);
        }
      }, {
        key: "getQuotes",
        value: function getQuotes() {
          return this.httpClient.get("".concat(this.baseApi, "quotes"));
        }
      }, {
        key: "getQuoteById",
        value: function getQuoteById(quoteId) {
          return this.httpClient.get("".concat(this.baseApi, "quotes/").concat(quoteId));
        }
      }, {
        key: "getQuotesCompleted",
        value: function getQuotesCompleted() {
          return this.httpClient.get(this.baseApi + "quotes/completed");
        }
      }]);

      return QuoteService;
    }();

    QuoteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    QuoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuoteService);
    /***/
  },

  /***/
  "./src/app/services/service-offered.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/service-offered.service.ts ***!
    \*****************************************************/

  /*! exports provided: ServiceOfferedService */

  /***/
  function srcAppServicesServiceOfferedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceOfferedService", function () {
      return ServiceOfferedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ServiceOfferedService =
    /*#__PURE__*/
    function () {
      function ServiceOfferedService(httpClient) {
        _classCallCheck(this, ServiceOfferedService);

        this.httpClient = httpClient;
        this.baseApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
      }

      _createClass(ServiceOfferedService, [{
        key: "getOfferedServices",
        value: function getOfferedServices() {
          return this.httpClient.get(this.baseApi + 'offeredServices');
        }
      }, {
        key: "getOfferedServiceById",
        value: function getOfferedServiceById(id) {
          return this.httpClient.get(this.baseApi + 'offeredServices/' + id);
        }
      }, {
        key: "updateOfferedService",
        value: function updateOfferedService(offService) {
          return this.httpClient.put(this.baseApi + 'offeredServices', offService);
        }
      }, {
        key: "addOfferedService",
        value: function addOfferedService(offService) {
          return this.httpClient.post(this.baseApi + 'offeredServices', offService);
        }
      }, {
        key: "deleteOfferedService",
        value: function deleteOfferedService(offServiceId) {
          return this.httpClient.delete(this.baseApi + 'offeredServices/' + offServiceId);
        }
      }]);

      return ServiceOfferedService;
    }();

    ServiceOfferedService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServiceOfferedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceOfferedService);
    /***/
  },

  /***/
  "./src/app/services/team.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/team.service.ts ***!
    \******************************************/

  /*! exports provided: TeamService */

  /***/
  function srcAppServicesTeamServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamService", function () {
      return TeamService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var TeamService =
    /*#__PURE__*/
    function () {
      function TeamService(httpClient) {
        _classCallCheck(this, TeamService);

        this.httpClient = httpClient;
        this.baseApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
      }

      _createClass(TeamService, [{
        key: "getTeam",
        value: function getTeam() {
          return this.httpClient.get(this.baseApi + "team");
        }
      }, {
        key: "getEmployee",
        value: function getEmployee(id) {
          return this.httpClient.get(this.baseApi + "team/" + id);
        }
      }, {
        key: "updateEmployee",
        value: function updateEmployee(employee, image) {
          var formData = new FormData();
          formData.append("file", image, image.name);
          formData.append("employee", JSON.stringify(employee));
          return this.httpClient.put(this.baseApi + "team/" + employee.id, formData);
        }
      }, {
        key: "saveEmployee",
        value: function saveEmployee(employee, image) {
          var formData = new FormData();
          employee.id = 0;
          employee.pictureLink = "";
          formData.append("file", image, image.name);
          formData.append("employee", JSON.stringify(employee));
          return this.httpClient.post(this.baseApi + "team/", formData);
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(employeeId) {
          return this.httpClient.delete(this.baseApi + "team/" + employeeId);
        }
      }]);

      return TeamService;
    }();

    TeamService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], TeamService);
    /***/
  },

  /***/
  "./src/app/services/testimony.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/testimony.service.ts ***!
    \***********************************************/

  /*! exports provided: TestimonyService */

  /***/
  function srcAppServicesTestimonyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonyService", function () {
      return TestimonyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var TestimonyService =
    /*#__PURE__*/
    function () {
      function TestimonyService(httpClient) {
        _classCallCheck(this, TestimonyService);

        this.httpClient = httpClient;
        this.baseApi = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseApi;
      }

      _createClass(TestimonyService, [{
        key: "getTestimonies",
        value: function getTestimonies() {
          return this.httpClient.get(this.baseApi + "testimonies");
        }
      }, {
        key: "getTestimony",
        value: function getTestimony(id) {
          return this.httpClient.get(this.baseApi + "testimonies/" + id);
        }
      }, {
        key: "deleteTestimony",
        value: function deleteTestimony(id) {
          return this.httpClient.delete(this.baseApi + "testimonies/" + id);
        }
      }, {
        key: "updateTestimony",
        value: function updateTestimony(testimony, image) {
          var formData = new FormData();
          formData.append("file", image, image.name);
          formData.append("testimony", JSON.stringify(testimony));
          return this.httpClient.put(this.baseApi + "testimonies/" + testimony.id, formData);
        }
      }, {
        key: "saveTestimony",
        value: function saveTestimony(testimony, image) {
          var formData = new FormData();
          testimony.id = 0;
          testimony.photoLink = "";
          formData.append("file", image, image.name);
          formData.append("testimony", JSON.stringify(testimony));
          return this.httpClient.post(this.baseApi + "testimonies", formData);
        }
      }]);

      return TestimonyService;
    }();

    TestimonyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    TestimonyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], TestimonyService);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      baseApi: "https://994e80c9.ngrok.io/PamConstruction/api/",
      // baseApi: "https://0b5ddbfd.ngrok.io/api/",
      // photoBaseApi: "https://0b5ddbfd.ngrok.io/"
      photoBaseApi: "https://994e80c9.ngrok.io/PamConstruction/",
      bdSecretKey: "PamConstruction_Secret_KEY_ForTheBackEnd"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseApi: "https://994e80c9.ngrok.io/PamConstruction/api/",
      // baseApi: "https://0b5ddbfd.ngrok.io/api/",
      // photoBaseApi: "https://0b5ddbfd.ngrok.io/"
      photoBaseApi: "https://994e80c9.ngrok.io/PamConstruction/",
      bdSecretKey: "PamConstruction_Secret_KEY_ForTheBackEnd"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\reposGit\front-end\PamClient\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map