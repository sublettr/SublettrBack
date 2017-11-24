webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_anims/anim-route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var routerAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])('* <=> *', [
        // Initial state of new route
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)'
        }), { optional: true }),
        // move page off screen right on leave
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(100%)'
        })), { optional: true }),
        // move page in screen from left to right
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            opacity: 1,
            transform: 'translateX(0%)'
        })), { optional: true }),
    ])
]);
//# sourceMappingURL=anim-route.js.map

/***/ }),

/***/ "../../../../../src/app/_classes/login-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"color: var(--Froly)\">Login</h2>\r\n<form #loginForm=\"ngForm\">\r\n  <div mat-dialog-content>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Email</label>\r\n        <input required minlength=\"7\"\r\n               allowedRegexValidator='/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@purdue.edu$/'\r\n               matInput type=\"email\" [(ngModel)]=\"data.email\" name=\"email\" #email=\"ngModel\" email/>\r\n\r\n      </mat-form-field>\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          An email is required.\r\n        </div>\r\n        <div *ngIf=\"email.errors.minlength\">\r\n          Email must be at least 7 characters long.\r\n        </div>\r\n        <div *ngIf=\"email.errors.email\">\r\n          Input is not an email\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"password-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Password</label>\r\n        <input required minlength=\"5\"\r\n               pattern='((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,})'\r\n               matInput type=\"password\" [(ngModel)]=\"data.password\" name=\"password\" #password=\"ngModel\"/>\r\n      </mat-form-field>\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n           class=\"alert alert-danger\">\r\n\r\n        <div *ngIf=\"password.errors.required\">\r\n          A password is required.\r\n        </div>\r\n        <div *ngIf=\"password.errors.minlength\">\r\n          Password must be at least 6 characters long.\r\n        </div>\r\n        <div *ngIf=\"password.errors.pattern\">\r\n          Password must contain at least one of each of the following: alpha-numeric, special character, and capital letter\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"login-register-div\">\r\n      <div class=\"forgot-password-div\">\r\n        <button mat-button mat-no-ink>Forgot Password?</button>\r\n      </div>\r\n      <div class=\"login-btn-div\">\r\n        <button [disabled]=\"loginForm.invalid\" [mat-dialog-close]=\"data\" class=\"btn btn-primary\">Login</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/_classes/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n}\r\n\r\n.half-div {\r\n  height: 100%;\r\n  width: 50%;\r\n  position: relative;\r\n}\r\n\r\n.logo-div {\r\n  float: left;\r\n  background-color: #FFC107;\r\n}\r\n\r\n.logo {\r\n  top: 25%;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n\r\n.login-div {\r\n  float: right;\r\n  background-color: #757575;\r\n}\r\n\r\n.login-label {\r\n  width:50%;\r\n  margin: 0 auto;\r\n  text-align: left;\r\n}\r\n\r\n.email-input {\r\n  width:80%;\r\n  margin: 0 auto;\r\n  text-align: left;\r\n}\r\n\r\n.password-input {\r\n  width:80%;\r\n  margin: 0 auto;\r\n  text-align: left;\r\n}\r\n\r\n.register-div {\r\n  padding-top: 5%;\r\n  width:100%;\r\n  margin: 0 auto;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n}\r\n\r\n.login-register-div {\r\n  padding-top: 5%;\r\n  width:100%;\r\n  margin: 0 auto;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n}\r\n\r\n.register-btn-div {\r\n  width:25%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.login-btn-div {\r\n  width:25%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.forgot-password-div {\r\n  width:25%;\r\n  margin: 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_classes/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LoginDialog = (function () {
    function LoginDialog(loginDialogRef, data, userService) {
        this.loginDialogRef = loginDialogRef;
        this.data = data;
        this.userService = userService;
        this.data = {
            id: 26,
            email: "",
            password: ""
        };
    }
    LoginDialog.prototype.ngOnInit = function () {
    };
    LoginDialog.prototype.onNoClick = function () {
        this.loginDialogRef.close();
    };
    return LoginDialog;
}());
LoginDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/_classes/login-dialog.html"),
        styles: [__webpack_require__("../../../../../src/app/_classes/login.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], LoginDialog);

var _a, _b;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../../../../src/app/_classes/register-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"color: var(--OxfordBlue)\">Register</h2>\r\n<form (ngSubmit)=\"onRegistrationSubmit()\" #registerForm=\"ngForm\">\r\n  <div mat-dialog-content style=\"overflow-y: hidden\">\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Email</label>\r\n        <input required minlength=\"7\"\r\n               matInput required type=\"email\" [(ngModel)]=\"data.email\" name=\"email\" #email=\"ngModel\" email/>\r\n      </mat-form-field>\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          An email is required.\r\n        </div>\r\n        <div *ngIf=\"email.errors.minlength\">\r\n          Email must be at least 7 characters long.\r\n        </div>\r\n        <div *ngIf=\"email.errors.email\">\r\n          Input is not an email\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"password-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Password</label>\r\n        <input required minlength=\"5\"\r\n               validateEqual=\"passwordcpy\" reverse=\"true\"\r\n               pattern='((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,})'\r\n               matInput type=\"password\" [(ngModel)]=\"data.password\" name=\"password\" #password=\"ngModel\"/>\r\n      </mat-form-field>\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n           class=\"alert alert-danger\">\r\n\r\n        <div *ngIf=\"password.errors.required\">\r\n          A password is required.\r\n        </div>\r\n        <div *ngIf=\"password.errors.minlength\">\r\n          Password must be at least 6 characters long.\r\n        </div>\r\n        <div *ngIf=\"password.errors.validateEqual\">\r\n          Password does not match confirmation password.\r\n        </div>\r\n        <div *ngIf=\"password.errors.pattern\">\r\n          Password must contain at least one of each of the following: alpha-numeric, special character, and capital\r\n          letter\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"password-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Confirm Password</label>\r\n        <input required minlength=\"5\"\r\n               validateEqual=\"password\"\r\n               pattern='((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,})'\r\n               matInput type=\"password\" [(ngModel)]=\"data.passwordcpy\" name=\"passwordcpy\" #passwordcpy=\"ngModel\"/>\r\n      </mat-form-field>\r\n      <div *ngIf=\"passwordcpy.invalid && (passwordcpy.dirty || passwordcpy.touched)\"\r\n           class=\"alert alert-danger\">\r\n\r\n        <div *ngIf=\"passwordcpy.errors.required\">\r\n          A password is required.\r\n        </div>\r\n        <div *ngIf=\"passwordcpy.errors.minlength\">\r\n          Password must be at least 6 characters long.\r\n        </div>\r\n        <div *ngIf=\"passwordcpy.errors.validateEqual\">\r\n          Confirmation password does not match original password.\r\n        </div>\r\n        <div *ngIf=\"passwordcpy.errors.pattern\">\r\n          Password must contain at least one of each of the following: alpha-numeric, special character, and capital\r\n          letter\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Name</label>\r\n        <input matInput type=\"text\" [(ngModel)]=\"data.name\" name=\"name\"/>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Age</label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"data.age\" name=\"age\"/>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Sex</label>\r\n        <mat-select matInput [(ngModel)]=\"data.sex\" name=\"sex\">\r\n          <mat-option *ngFor=\"let gender of sex\" value=\"{{gender}}\">{{gender}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Major</label>\r\n        <input matInput type=\"text\" [(ngModel)]=\"data.major\" name=\"major\"/>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <label>Grade</label>\r\n      <mat-form-field style=\"width: 100%\">\r\n        <mat-select matInput type=\"number\" [(ngModel)]=\"data.grade\" name=\"grade\">\r\n          <mat-option *ngFor=\"let grade of grades\" value=\"{{grade.value}}\">{{grade.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions class=\"register-div\">\r\n      <div class=\"register-btn-div\">\r\n        <button (click)=\"register(data)\" [disabled]=\"registerForm.invalid\" class=\"btn btn-secondary\">Register\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/_classes/register.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_full_user__ = __webpack_require__("../../../../../src/app/_models/full-user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_constants__ = __webpack_require__("../../../../../src/app/_models/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var RegisterDialog = (function () {
    function RegisterDialog(registerDialogRef, data, userService) {
        this.registerDialogRef = registerDialogRef;
        this.data = data;
        this.userService = userService;
        this.grades = __WEBPACK_IMPORTED_MODULE_5__models_constants__["b" /* grades */];
        this.sex = __WEBPACK_IMPORTED_MODULE_5__models_constants__["a" /* genders */];
        this.setCurrentUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.data = {
            id: 0,
            username: "",
            password: "",
            passwordcpy: "",
            name: "",
            age: 0,
            sex: "",
            major: "",
            grade: 0,
            isSeller: false
        };
    }
    RegisterDialog.prototype.onNoClick = function () {
        this.registerDialogRef.close();
    };
    RegisterDialog.prototype.onRegistrationSubmit = function () {
    };
    RegisterDialog.prototype.closeDialog = function () {
        this.registerDialogRef.close();
    };
    RegisterDialog.prototype.register = function (registerdata) {
        var _this = this;
        if (registerdata == undefined || registerdata.email == "" || registerdata.password != registerdata.passwordcpy) {
            console.log("Invalid user " + registerdata);
        }
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](registerdata);
        console.log("Registering user: " + JSON.stringify(user));
        /* Registration Request */
        this.userService.register(user)
            .subscribe(function (data) {
            console.log("Registered");
            /* Put User Request */
            var fullUser = new __WEBPACK_IMPORTED_MODULE_1__models_full_user__["a" /* FullUser */](registerdata);
            console.log("Updating user profile: " + JSON.stringify(fullUser));
            _this.userService.updateProfile(fullUser)
                .subscribe(function (data) {
                _this.currentUser = fullUser;
                _this.setCurrentUser.emit(_this.currentUser);
                if (_this.currentUser) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
                    _this.isLoggedIn = true;
                    _this.setLoggedIn.emit(_this.isLoggedIn);
                }
            }, function (error) {
                console.log("Error updating profile", error);
            });
            _this.closeDialog();
        }, function (error) {
            console.log("Registration issue " + error);
        });
    };
    return RegisterDialog;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_full_user__["a" /* FullUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_full_user__["a" /* FullUser */]) === "function" && _a || Object)
], RegisterDialog.prototype, "currentUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], RegisterDialog.prototype, "setCurrentUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RegisterDialog.prototype, "isLoggedIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], RegisterDialog.prototype, "setLoggedIn", void 0);
RegisterDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/_classes/register-dialog.html"),
        styles: [__webpack_require__("../../../../../src/app/_classes/login.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogRef */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _e || Object])
], RegisterDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "../../../../../src/app/_classes/share-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"color: var(--Froly)\">Share Post</h2>\r\n<div mat-dialog-content>\r\n  <share-container\r\n    [expandable]=\"true\"\r\n    [platforms]=\"['googlePlus','twitter','facebook']\"\r\n    [secondaryPlatforms]=\"['reddit','stumbleUpon','linkedin','pinterest']\"\r\n    [textEnabled]=\"true\"></share-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_classes/share.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_classes/share.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ShareDialog = (function () {
    function ShareDialog(shareDialogRef, data, userService) {
        this.shareDialogRef = shareDialogRef;
        this.data = data;
        this.userService = userService;
        this.data = {
            id: 26,
            email: "",
            password: ""
        };
    }
    ShareDialog.prototype.ngOnInit = function () {
    };
    ShareDialog.prototype.onNoClick = function () {
        this.shareDialogRef.close();
    };
    return ShareDialog;
}());
ShareDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/_classes/share-dialog.html"),
        styles: [__webpack_require__("../../../../../src/app/_classes/share.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], ShareDialog);

var _a, _b;
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "../../../../../src/app/_data/sample-messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatExampleData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_thread__ = __webpack_require__("../../../../../src/app/_models/thread.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message__ = __webpack_require__("../../../../../src/app/_models/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_full_user__ = __webpack_require__("../../../../../src/app/_models/full-user.ts");
/* tslint:disable:max-line-length */




// the person using the app us Juliet
var ladycap = new __WEBPACK_IMPORTED_MODULE_3__models_full_user__["a" /* FullUser */]({ email: 'lc@purdue.edu', name: 'Lady Capulet' });
var echo = new __WEBPACK_IMPORTED_MODULE_3__models_full_user__["a" /* FullUser */]({ email: 'eb@purdue.edu', name: 'Echo Bot' });
var rev = new __WEBPACK_IMPORTED_MODULE_3__models_full_user__["a" /* FullUser */]({ email: 'rb@purdue.edu', name: 'Reverse Bot' });
var wait = new __WEBPACK_IMPORTED_MODULE_3__models_full_user__["a" /* FullUser */]({ email: 'wb@purdue.edu', name: 'Waiting Bot' });
var tLadycap = new __WEBPACK_IMPORTED_MODULE_1__models_thread__["a" /* Thread */]('tLadycap', ladycap.name, 'assets/search-icon.png');
var tEcho = new __WEBPACK_IMPORTED_MODULE_1__models_thread__["a" /* Thread */]('tEcho', echo.name, 'assets/search-icon.png');
var tRev = new __WEBPACK_IMPORTED_MODULE_1__models_thread__["a" /* Thread */]('tRev', rev.name, 'assets/search-icon.png');
var tWait = new __WEBPACK_IMPORTED_MODULE_1__models_thread__["a" /* Thread */]('tWait', wait.name, 'assets/search-icon.png');
var initialMessages = [
    new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]({
        author: echo,
        sentAt: __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(45, 'minutes').toDate(),
        text: 'Yet let me weep for such a feeling loss.',
        thread: tLadycap
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]({
        author: ladycap,
        sentAt: __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(20, 'minutes').toDate(),
        text: 'So shall you feel the loss, but not the friend which you weep for.',
        thread: tLadycap
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]({
        author: echo,
        sentAt: __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(1, 'minutes').toDate(),
        text: "I'll echo whatever you send me",
        thread: tEcho
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]({
        author: rev,
        sentAt: __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(3, 'minutes').toDate(),
        text: "I'll reverse whatever you send me",
        thread: tRev
    }),
    new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]({
        author: wait,
        sentAt: __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(4, 'minutes').toDate(),
        text: "I'll wait however many seconds you send to me before responding. Try sending '3'",
        thread: tWait
    }),
];
var ChatExampleData = (function () {
    function ChatExampleData() {
    }
    ChatExampleData.init = function (messagesService, threadsService, UsersService) {
        // TODO make `messages` hot
        messagesService.messages.subscribe(function () { return ({}); });
        // set "Juliet" as the current user
        // UsersService.setCurrentUser(me);
        // create the initial messages
        initialMessages.map(function (message) { return messagesService.addMessage(message); });
        threadsService.setCurrentThread(tEcho);
        this.setupBots(messagesService);
    };
    ChatExampleData.setupBots = function (messagesService) {
        // echo bot
        messagesService.messagesForThreadUser(tEcho, echo)
            .forEach(function (message) {
            messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]({
                author: echo,
                text: message.text,
                thread: tEcho
            }));
        }, null);
        // reverse bot
        messagesService.messagesForThreadUser(tRev, rev)
            .forEach(function (message) {
            messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]({
                author: rev,
                text: message.text.split('').reverse().join(''),
                thread: tRev
            }));
        }, null);
        // waiting bot
        messagesService.messagesForThreadUser(tWait, wait)
            .forEach(function (message) {
            var waitTime = parseInt(message.text, 10);
            var reply;
            if (isNaN(waitTime)) {
                waitTime = 0;
                reply = "I didn't understand " + message.text + ". Try sending me a number";
            }
            else {
                reply = "I waited " + waitTime + " seconds to send you this.";
            }
            setTimeout(function () {
                messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]({
                    author: wait,
                    text: reply,
                    thread: tWait
                }));
            }, waitTime * 1000);
        }, null);
    };
    return ChatExampleData;
}());

//# sourceMappingURL=sample-messages.js.map

/***/ }),

/***/ "../../../../../src/app/_directives/EqualValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __metadata("design:paramtypes", [String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=EqualValidator.js.map

/***/ }),

/***/ "../../../../../src/app/_models/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return grades; });
var genders = ['Male', 'Female', 'Other', 'Unspecified'];
var grades = [{ name: 'Freshman', value: 0 }, { name: 'Sophomore', value: 1 }, {
        name: 'Junior',
        value: 2
    }, { name: 'Senior', value: 3 }, { name: 'Grad Student', value: 4 }, {
        name: 'Faculty/Administrative',
        value: 5
    }, { name: 'Other', value: 6 }];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/_models/full-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullUser; });
var FullUser = (function () {
    function FullUser(userData) {
        this.id = userData.id;
        this.userName = userData.userName;
        this.email = userData.email;
        this.name = userData.name;
        this.age = userData.age;
        this.sex = userData.sex;
        this.major = userData.major;
        this.grade = userData.grade;
        this.isSeller = userData.isSeller;
    }
    return FullUser;
}());

//# sourceMappingURL=full-user.js.map

/***/ }),

/***/ "../../../../../src/app/_models/landing-filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingFilter; });
/* unused harmony export Tag */
var LandingFilter = (function () {
    function LandingFilter(costFilter, ratingFilter, tags, tagFilter) {
        this.costFilter = costFilter;
        this.ratingFilter = ratingFilter;
        this.tags = tags;
        this.tagFilter = tagFilter;
    }
    return LandingFilter;
}());

var Tag = (function () {
    function Tag(label, value) {
        this.label = "";
        this.value = "";
        this.label = label;
        this.value = value;
    }
    return Tag;
}());

//# sourceMappingURL=landing-filter.js.map

/***/ }),

/***/ "../../../../../src/app/_models/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/**
 * Message represents one message being sent in a Thread
 */
var Message = (function () {
    function Message(obj) {
        this.id = obj && obj.id;
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/app/_models/thread.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thread; });
/**
 * Thread represents a group of Users exchanging Messages
 */
var Thread = (function () {
    function Thread(id, name, avatarSrc) {
        this.id = id;
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
    return Thread;
}());

//# sourceMappingURL=thread.js.map

/***/ }),

/***/ "../../../../../src/app/_models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userData) {
        this.email = userData.email;
        this.password = userData.password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/cost-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CostPipe = (function () {
    function CostPipe() {
    }
    CostPipe.prototype.transform = function (array, args) {
        var minCost = args[0], maxCost = args[1];
        if (!array)
            return array;
        return array.filter(function (sublease) { return sublease.price == undefined || (sublease.price >= +minCost && sublease.price <= +maxCost); });
    };
    return CostPipe;
}());
CostPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'costPipe'
    })
], CostPipe);

//# sourceMappingURL=cost-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/from-now.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromNowPipe; });
/* unused harmony export fromNowPipeInjectables */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * FromNowPipe let's us convert a date into a human-readable relative-time
 * such as "10 minutes ago".
 */
var FromNowPipe = (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    return FromNowPipe;
}());
FromNowPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'fromNow'
    })
], FromNowPipe);

var fromNowPipeInjectables = [
    FromNowPipe
];
//# sourceMappingURL=from-now.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/rating-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RatingPipe = (function () {
    function RatingPipe() {
    }
    RatingPipe.prototype.transform = function (value, args) {
        var rating = args[0];
        return value.filter(function (sublease) {
            return sublease.rating >= +rating;
        });
    };
    return RatingPipe;
}());
RatingPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'ratingPipe'
    })
], RatingPipe);

//# sourceMappingURL=rating-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/tags.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TagsPipe = (function () {
    function TagsPipe() {
    }
    TagsPipe.prototype.transform = function (array, tags) {
        console.log("Array: " + JSON.stringify(array) + " : Tags: " + JSON.stringify(tags));
        if (!array)
            return array;
        if (tags.length == 0)
            return array;
        return array.filter(function (sublease) { return sublease.tags == undefined || sublease.tags.indexOf(tags[0]) !== -1; });
    };
    return TagsPipe;
}());
TagsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'tagsPipe'
    })
], TagsPipe);

//# sourceMappingURL=tags.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_services/DataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
    }
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=DataService.js.map

/***/ }),

/***/ "../../../../../src/app/_services/UserTrackingService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTrackingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserTrackingService = (function () {
    function UserTrackingService() {
    }
    return UserTrackingService;
}());
UserTrackingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserTrackingService);

//# sourceMappingURL=UserTrackingService.js.map

/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/Authenticate', JSON.stringify({ email: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__ = __webpack_require__("../../../../aws-sdk/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__ = __webpack_require__("../../../../aws-sdk/clients/s3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageService = (function () {
    function ImageService() {
    }
    ImageService.prototype.getS3 = function () {
        __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__["config"].update({
            region: 'us-east-1',
            credentials: new __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__["Credentials"](__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['S3_ACCESS_ID'], __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['S3_ACCESS_KEY'])
        });
        var clientParams = {
            apiVersion: '2016-03-01',
            params: { Bucket: 'sublettr-images' }
        };
        var aws = __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__;
        aws.config.credentials.get(function () {
            // Credentials will be available when this function is called.
            var accessKeyId = __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__["config"].credentials.accessKeyId;
            var secretAccessKey = __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__["config"].credentials.secretAccessKey;
            var sessionToken = __WEBPACK_IMPORTED_MODULE_1_aws_sdk_global__["config"].credentials.sessionToken;
        });
        return new __WEBPACK_IMPORTED_MODULE_2_aws_sdk_clients_s3__(clientParams);
    };
    ImageService.prototype.getPhoto = function (sublease) {
        if (sublease.imageUrl) {
            return sublease.imageUrl;
        }
        return 'assets/images/no-photo.png';
    };
    ImageService.prototype.uploadSubletImage = function (sublease, imageList) {
        var _this = this;
        var albumName = sublease.email + "-" + sublease.address;
        var uploadPromise = new Promise(function (resolve, reject) {
            _this.createAlbum(albumName)
                .then(function () { return _this.addPhoto(albumName, imageList[0]); })
                .then(function (url) {
                sublease.imageUrl = url;
                resolve(sublease);
            })
                .catch(function (err) { return reject(err); });
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(uploadPromise);
    };
    ImageService.prototype.createAlbum = function (albumName) {
        var sublettrS3 = this.getS3();
        albumName = albumName.trim();
        var albumKey = encodeURIComponent(albumName) + "/";
        return sublettrS3.putObject({ Key: albumKey, Bucket: 'sublettr-images' })
            .promise()
            .then(function (data) { return console.log(data); })
            .catch(function (err) {
            throw new Error("Error creating album: " + err.message);
        });
    };
    ImageService.prototype.addPhoto = function (albumName, file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var albumPhotosKeys = encodeURIComponent(albumName) + "/";
            var photoKey = albumPhotosKeys + encodeURIComponent(file.name);
            var uploadParams = {
                Key: photoKey,
                Body: file,
                ACL: 'public-read',
                Bucket: 'sublettr-images'
            };
            _this.getS3().upload(uploadParams)
                .promise()
                .then(function (data) { return resolve(data.Location); })
                .catch(function (err) { return reject(err); });
        });
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ImageService);

//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* unused harmony export messagesServiceInjectables */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initialMessages = [];
var MessagesService = (function () {
    function MessagesService() {
        // a stream that publishes new messages only once
        this.newMessages = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        // action streams
        this.create = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.markThreadAsRead = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.messages = this.updates
            .scan(function (messages, operation) {
            return operation(messages);
        }, initialMessages)
            .publishReplay(1)
            .refCount();
        // `create` takes a Message and then puts an operation (the inner function)
        // on the `updates` stream to add the Message to the list of messages.
        //
        // That is, for each item that gets added to `create` (by using `next`)
        // this stream emits a concat operation function.
        //
        // Next we subscribe `this.updates` to listen to this stream, which means
        // that it will receive each operation that is created
        //
        // Note that it would be perfectly acceptable to simply modify the
        // "addMessage" function below to simply add the inner operation function to
        // the update stream directly and get rid of this extra action stream
        // entirely. The pros are that it is potentially clearer. The cons are that
        // the stream is no longer composable.
        this.create
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
        this.newMessages
            .subscribe(this.create);
        // similarly, `markThreadAsRead` takes a Thread and then puts an operation
        // on the `updates` stream to mark the Messages as read
        this.markThreadAsRead
            .map(function (thread) {
            return function (messages) {
                return messages.map(function (message) {
                    // note that we're manipulating `message` directly here. Mutability
                    // can be confusing and there are lots of reasons why you might want
                    // to, say, copy the Message object or some other 'immutable' here
                    if (message.thread.id === thread.id) {
                        message.isRead = true;
                    }
                    return message;
                });
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    MessagesService.prototype.messagesForThreadUser = function (thread, user) {
        return this.newMessages
            .filter(function (message) {
            // belongs to this thread
            return (message.thread.id === thread.id) &&
                // and isn't authored by this user
                (message.author.email !== user.email);
        });
    };
    return MessagesService;
}());
MessagesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MessagesService);

var messagesServiceInjectables = [
    MessagesService
];
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/sublet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubleaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_service__ = __webpack_require__("../../../../../src/app/_services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubleaseService = (function () {
    function SubleaseService(http, ImageService) {
        this.http = http;
        this.ImageService = ImageService;
        this.baseURL = 'http://localhost:5000';
    }
    SubleaseService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(options));
        return options;
    };
    SubleaseService.prototype.getAll = function () {
        return this.http.get(this.baseURL + '/api/Sublet', this.getHeaders()).map(function (response) {
            return response.json();
        });
    };
    SubleaseService.prototype.getById = function (id) {
        return this.http.get(this.baseURL + '/api/Sublet/' + id, this.getHeaders()).map(function (response) {
            return response.json();
        });
    };
    SubleaseService.prototype.getFullById = function (id) {
        return this.http.get(this.baseURL + '/api/Sublet/full/' + id, this.getHeaders()).map(function (response) {
            return response.json();
        });
    };
    SubleaseService.prototype.create = function (sublease, imageList) {
        var _this = this;
        return this.ImageService.uploadSubletImage(sublease, imageList)
            .flatMap(function (data) { return _this.http.post(_this.baseURL + '/api/Sublet/full', data, _this.getHeaders()); })
            .map(function (response) { return response.json(); });
    };
    SubleaseService.prototype.updatePost = function (sublease, imageList) {
        var _this = this;
        return this.ImageService.uploadSubletImage(sublease, imageList)
            .flatMap(function (data) {
            console.log("PUT: " + JSON.stringify(sublease));
            return _this.http.put(_this.baseURL + "/api/Sublet/full/" + sublease.id, data, _this.getHeaders());
        })
            .map(function (response) { return response.json(); });
    };
    SubleaseService.prototype.delete = function (id) {
        return this.http.delete(this.baseURL + '/api/Sublet/' + id, this.getHeaders()).map(function (response) {
            return response.json();
        });
    };
    SubleaseService.prototype.saveSublease = function (email, id) {
        return this.http.put(this.baseURL + '/save/' + email + '/' + id, this.getHeaders()).map(function (response) {
            return response.json();
        });
    };
    SubleaseService.prototype.getTags = function () {
        return this.http.get(this.baseURL + '/tags', this.getHeaders()).map(function (response) {
            return response.json();
        });
    };
    // private helper methods
    SubleaseService.prototype.addAuthToken = function () {
        // register authorization header with user auth token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return SubleaseService;
}());
SubleaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__image_service__["a" /* ImageService */]) === "function" && _b || Object])
], SubleaseService);

var _a, _b;
//# sourceMappingURL=sublet.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/thread.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadsService; });
/* unused harmony export threadsServiceInjectables */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_thread__ = __webpack_require__("../../../../../src/app/_models/thread.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/_services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThreadsService = (function () {
    function ThreadsService(messagesService) {
        this.messagesService = messagesService;
        // `currentThread` contains the currently selected thread
        this.currentThread = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_3__models_thread__["a" /* Thread */]());
        this.threads = messagesService.messages
            .map(function (messages) {
            var threads = {};
            // Store the message's thread in our accumulator `threads`
            messages.map(function (message) {
                threads[message.thread.id] = threads[message.thread.id] ||
                    message.thread;
                // Cache the most recent message for each thread
                var messagesThread = threads[message.thread.id];
                if (!messagesThread.lastMessage ||
                    messagesThread.lastMessage.sentAt < message.sentAt) {
                    messagesThread.lastMessage = message;
                }
            });
            return threads;
        });
        this.orderedThreads = this.threads
            .map(function (threadGroups) {
            var threads = __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](threadGroups);
            return __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](threads, function (t) { return t.lastMessage.sentAt; }).reverse();
        });
        this.currentThreadMessages = this.currentThread
            .combineLatest(messagesService.messages, function (currentThread, messages) {
            if (currentThread && messages.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](messages)
                    .filter(function (message) {
                    return (message.thread.id === currentThread.id);
                })
                    .map(function (message) {
                    message.isRead = true;
                    return message;
                })
                    .value();
            }
            else {
                return [];
            }
        });
        this.currentThread.subscribe(this.messagesService.markThreadAsRead);
    }
    ThreadsService.prototype.setCurrentThread = function (newThread) {
        this.currentThread.next(newThread);
    };
    return ThreadsService;
}());
ThreadsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessagesService */]) === "function" && _a || Object])
], ThreadsService);

var threadsServiceInjectables = [
    ThreadsService
];
var _a;
//# sourceMappingURL=thread.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000';
    }
    UserService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //headers.append("Content-Type", "text/xml");
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        headers.append("Access-Control-Allow-Headers", "Content-Type");
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(options));
        return options;
    };
    UserService.prototype.getAll = function () {
        return this.http.get(this.baseURL + '/api/Account', this.getHeaders()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.baseURL + '/api/Account/' + id, this.getHeaders()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getFullByEmail = function (email) {
        return this.http.get(this.baseURL + '/api/Account/' + email, this.getHeaders()).map(function (response) { return response.json(); });
    };
    UserService.prototype.login = function (user) {
        return this.http.post(this.baseURL + '/api/Account/sign-in/', user, this.getHeaders()).map(function (response) { return response.json(); });
    };
    UserService.prototype.register = function (user) {
        return this.http.post(this.baseURL + '/api/Account/register', user, this.getHeaders()).map(function (response) {
            //http call for uppdate provele
            return response.json();
        });
    };
    UserService.prototype.updateProfile = function (user) {
        return this.http.put(this.baseURL + '/api/Account/' + user.email, user, this.getHeaders());
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.baseURL + '/api/Account/' + id, this.getHeaders()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getSavedSubleases = function (email) {
        return this.http.get(this.baseURL + '/api/Account/saved/' + email, this.getHeaders()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getPostedSubleases = function (email) {
        return this.http.get(this.baseURL + '/api/Account/posted/' + email, this.getHeaders()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.addAuthToken = function () {
        // register authorization header with user auth token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/all-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMaterialModulesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AllMaterialModulesModule = (function () {
    function AllMaterialModulesModule() {
    }
    return AllMaterialModulesModule;
}());
AllMaterialModulesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSelectModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSelectModule */]
        ],
        declarations: []
    })
], AllMaterialModulesModule);

//# sourceMappingURL=all-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/all-primeng.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPrimeNGModulesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_sidebar_sidebar__ = __webpack_require__("../../../../primeng/components/sidebar/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_sidebar_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_sidebar_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_slider_slider__ = __webpack_require__("../../../../primeng/components/slider/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_slider_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_rating_rating__ = __webpack_require__("../../../../primeng/components/rating/rating.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_rating_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_rating_rating__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AllPrimeNGModulesModule = (function () {
    function AllPrimeNGModulesModule() {
    }
    return AllPrimeNGModulesModule;
}());
AllPrimeNGModulesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_2_primeng_components_sidebar_sidebar__["SidebarModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_components_slider_slider__["SliderModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["MultiSelectModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_components_rating_rating__["RatingModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_2_primeng_components_sidebar_sidebar__["SidebarModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_components_slider_slider__["SliderModule"],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["MultiSelectModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_components_rating_rating__["RatingModule"]
        ],
        declarations: []
    })
], AllPrimeNGModulesModule);

//# sourceMappingURL=all-primeng.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".badge {\r\n  background-color: var(--DarkGray);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<script src=\"_services/auth.service.ts\"></script>\r\n<nav class=\"navbar navbar-expand-lg\">\r\n  <div class=\"collapse navbar-collapse\">\r\n    <a class=\"navbar-brand\" (click)=\"dataService.sidebar = !dataService.sidebar\">Sublettr</a>\r\n    <ul class=\"nav navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li *ngIf=\"currentUser\" class=\"nav-item active\">\r\n        <a class=\"nav-link active\" href=\"post\" routerLinkActive=\"active\">Post</a>\r\n      </li>\r\n      <li *ngIf=\"currentUser\" class=\"nav-item active\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['/profile', currentUser.email]\">Profile</a>\r\n      </li>\r\n      <li *ngIf=\"currentUser\" class=\"nav-item active\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['/messenger', currentUser.email]\">Messages <span class=\"badge\">{{ unreadMessagesCount }}</span></a>\r\n      </li>\r\n    </ul>\r\n\r\n    <span class=\"search-spacer\"></span>\r\n    <div class=\"col-sm-3 col-md-3\">\r\n      <form class=\"navbar-form\" role=\"search\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\r\n          <div class=\"input-group-btn\">\r\n            <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"nav-item active\">\r\n        <a role=\"button\" class=\"nav-link active\" (click)=\"openRegisterDialog()\" *ngIf=\"!isLoggedIn\">Register</a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a role=\"button\" class=\"nav-link active\" (click)=\"openLoginDialog()\" *ngIf=\"!isLoggedIn\">Login</a>\r\n        <a class=\"nav-link\" (click)=\"logout()\" *ngIf=\"isLoggedIn\">Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div [@routerAnimation]=\"getRouteAnimation(route)\">\r\n  <router-outlet #route=\"outlet\"></router-outlet>\r\n</div>\r\n<!---->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_login__ = __webpack_require__("../../../../../src/app/_classes/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_register__ = __webpack_require__("../../../../../src/app/_classes/register.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_DataService__ = __webpack_require__("../../../../../src/app/_services/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__anims_anim_route__ = __webpack_require__("../../../../../src/app/_anims/anim-route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_sample_messages__ = __webpack_require__("../../../../../src/app/_data/sample-messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_thread_service__ = __webpack_require__("../../../../../src/app/_services/thread.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_message_service__ = __webpack_require__("../../../../../src/app/_services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppComponent = (function () {
    function AppComponent(iconRegistry, sanitizer, dialog, dataService, userService, messagesService, threadsService) {
        this.dialog = dialog;
        this.dataService = dataService;
        this.userService = userService;
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.title = 'app';
        this.isLoggedIn = false;
        iconRegistry
            .addSvgIcon('water', sanitizer.bypassSecurityTrustResourceUrl('assets/images/water.svg')).addSvgIcon('electric', sanitizer.bypassSecurityTrustResourceUrl('assets/images/electric.svg')).addSvgIcon('fit-center', sanitizer.bypassSecurityTrustResourceUrl('assets/images/fitness-center.svg')).addSvgIcon('parking', sanitizer.bypassSecurityTrustResourceUrl('assets/images/parking.svg')).addSvgIcon('garage', sanitizer.bypassSecurityTrustResourceUrl('assets/images/garage.svg')).addSvgIcon('laundry', sanitizer.bypassSecurityTrustResourceUrl('assets/images/washing-machine.svg')).addSvgIcon('lot', sanitizer.bypassSecurityTrustResourceUrl('assets/images/lot.svg')).addSvgIcon('in-pool', sanitizer.bypassSecurityTrustResourceUrl('assets/images/pool.svg')).addSvgIcon('out-pool', sanitizer.bypassSecurityTrustResourceUrl('assets/images/pool.svg')).addSvgIcon('basketball', sanitizer.bypassSecurityTrustResourceUrl('assets/images/court.svg')).addSvgIcon('tennis', sanitizer.bypassSecurityTrustResourceUrl('assets/images/tennis.svg'));
        __WEBPACK_IMPORTED_MODULE_9__data_sample_messages__["a" /* ChatExampleData */].init(messagesService, threadsService, userService);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser') == null) {
            this.isLoggedIn = false;
        }
        else {
            this.isLoggedIn = true;
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        this.messagesService.messages
            .combineLatest(this.threadsService.currentThread, function (messages, currentThread) {
            return [currentThread, messages];
        })
            .subscribe(function (_a) {
            var currentThread = _a[0], messages = _a[1];
            _this.unreadMessagesCount =
                __WEBPACK_IMPORTED_MODULE_12_lodash__["reduce"](messages, function (sum, m) {
                    var messageIsInCurrentThread = m.thread &&
                        currentThread &&
                        (currentThread.id === m.thread.id);
                    // note: in a "real" app you should also exclude
                    // messages that were authored by the current user b/c they've
                    // already been "read"
                    if (m && !m.isRead && !messageIsInCurrentThread) {
                        sum = sum + 1;
                    }
                    return sum;
                }, 0);
        });
    };
    // change the animation state
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    AppComponent.prototype.openLoginDialog = function () {
        var _this = this;
        this.loginDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__classes_login__["a" /* LoginDialog */], {
            width: '500px',
            height: '500px',
            data: { email: "", password: "", isLoggedIn: this.isLoggedIn }
        });
        this.loginDialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(JSON.stringify(result));
            if (result.email != "" && result.password != "") {
                _this.login(result);
            }
        });
    };
    AppComponent.prototype.openRegisterDialog = function () {
        var registerDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__classes_register__["a" /* RegisterDialog */], {
            width: '500px',
            height: '500px',
            data: { firstname: "", lastname: "", password: "" }
        });
        registerDialogRef.afterClosed().subscribe(function (result) {
            console.log('The registration dialog was closed');
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('accessToken');
        this.isLoggedIn = false;
    };
    AppComponent.prototype.login = function (userData) {
        var _this = this;
        this.userService.login(new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */](userData))
            .subscribe(function (data) {
            console.log(data);
            if (data.access_token) {
                localStorage.setItem('accessToken', data.access_token);
                _this.userService.getFullByEmail(userData.email).subscribe(function (data) {
                    _this.currentUser = data;
                    if (_this.currentUser) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
                        _this.isLoggedIn = true;
                    }
                }, function (error) {
                    console.log("Get Full User By Email error");
                });
            }
        }, function (error) {
            console.log("Login issue " + error);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_8__anims_anim_route__["a" /* routerAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconRegistry */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_DataService__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__services_message_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_message_service__["a" /* MessagesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__services_thread_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_thread_service__["a" /* ThreadsService */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_material_module__ = __webpack_require__("../../../../../src/app/all-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_primeng_module__ = __webpack_require__("../../../../../src/app/all-primeng.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_sublease_view_sublease_component__ = __webpack_require__("../../../../../src/app/view-sublease/view-sublease.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_sublet_service__ = __webpack_require__("../../../../../src/app/_services/sublet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__classes_login__ = __webpack_require__("../../../../../src/app/_classes/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classes_register__ = __webpack_require__("../../../../../src/app/_classes/register.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_DataService__ = __webpack_require__("../../../../../src/app/_services/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_UserTrackingService__ = __webpack_require__("../../../../../src/app/_services/UserTrackingService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_image_service__ = __webpack_require__("../../../../../src/app/_services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_EqualValidator__ = __webpack_require__("../../../../../src/app/_directives/EqualValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_cost_pipe_pipe__ = __webpack_require__("../../../../../src/app/_pipes/cost-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_rating_pipe_pipe__ = __webpack_require__("../../../../../src/app/_pipes/rating-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_tags_pipe__ = __webpack_require__("../../../../../src/app/_pipes/tags.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2share_share_module__ = __webpack_require__("../../../../ng2share/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__classes_share__ = __webpack_require__("../../../../../src/app/_classes/share.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__messaging_messaging_component__ = __webpack_require__("../../../../../src/app/messaging/messaging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__message_thread_message_thread_component__ = __webpack_require__("../../../../../src/app/message-thread/message-thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__message_threads_message_threads_component__ = __webpack_require__("../../../../../src/app/message-threads/message-threads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_thread_service__ = __webpack_require__("../../../../../src/app/_services/thread.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_message_service__ = __webpack_require__("../../../../../src/app/_services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__message_window_message_window_component__ = __webpack_require__("../../../../../src/app/message-window/message-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__chat_message_chat_message_component__ = __webpack_require__("../../../../../src/app/chat-message/chat-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_from_now_pipe__ = __webpack_require__("../../../../../src/app/_pipes/from-now.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */], data: { animation: '' } },
    { path: '*', component: __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */], data: { animation: '*' } },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* PostComponent */], data: { animation: 'post' } },
    { path: 'view-sublease/:id', component: __WEBPACK_IMPORTED_MODULE_12__view_sublease_view_sublease_component__["a" /* ViewSubleaseComponent */], data: { animation: 'view-sublease/:id' } },
    { path: 'profile/:email', component: __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */], data: { animation: 'profile/:email' } },
    { path: 'messenger/:email', component: __WEBPACK_IMPORTED_MODULE_29__messaging_messaging_component__["a" /* MessagingComponent */], data: { animation: 'messenger/:email' } },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__classes_login__["a" /* LoginDialog */],
            __WEBPACK_IMPORTED_MODULE_18__classes_register__["a" /* RegisterDialog */],
            __WEBPACK_IMPORTED_MODULE_27__classes_share__["a" /* ShareDialog */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["b" /* UpdateProfileDialog */],
            __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_12__view_sublease_view_sublease_component__["a" /* ViewSubleaseComponent */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_22__directives_EqualValidator__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_cost_pipe_pipe__["a" /* CostPipe */],
            __WEBPACK_IMPORTED_MODULE_24__pipes_rating_pipe_pipe__["a" /* RatingPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_tags_pipe__["a" /* TagsPipe */],
            __WEBPACK_IMPORTED_MODULE_36__pipes_from_now_pipe__["a" /* FromNowPipe */],
            __WEBPACK_IMPORTED_MODULE_29__messaging_messaging_component__["a" /* MessagingComponent */],
            __WEBPACK_IMPORTED_MODULE_30__message_thread_message_thread_component__["a" /* MessageThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_31__message_threads_message_threads_component__["a" /* MessageThreadsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__message_window_message_window_component__["a" /* MessageWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_35__chat_message_chat_message_component__["a" /* ChatMessageComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__classes_login__["a" /* LoginDialog */],
            __WEBPACK_IMPORTED_MODULE_18__classes_register__["a" /* RegisterDialog */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["b" /* UpdateProfileDialog */],
            __WEBPACK_IMPORTED_MODULE_27__classes_share__["a" /* ShareDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__all_material_module__["a" /* AllMaterialModulesModule */],
            __WEBPACK_IMPORTED_MODULE_3__all_primeng_module__["a" /* AllPrimeNGModulesModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ChipsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_26_ng2share_share_module__["a" /* ShareModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_15__services_sublet_service__["a" /* SubleaseService */], __WEBPACK_IMPORTED_MODULE_19__services_DataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_20__services_UserTrackingService__["a" /* UserTrackingService */], __WEBPACK_IMPORTED_MODULE_21__services_image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_32__services_thread_service__["a" /* ThreadsService */], __WEBPACK_IMPORTED_MODULE_33__services_message_service__["a" /* MessagesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"msg-container\"\r\n     [ngClass]=\"{'base-sent': !incoming, 'base-receive': incoming}\">\r\n\r\n  <div class=\"avatar\"\r\n       *ngIf=\"!incoming\">\r\n    <img src=\"{{message.author.avatarSrc}}\">\r\n  </div>\r\n\r\n  <div class=\"messages\"\r\n       [ngClass]=\"{'msg-sent': !incoming, 'msg-receive': incoming}\">\r\n    <p>{{message.text}}</p>\r\n    <p class=\"time\">{{message.sender}} • {{message.sentAt | fromNow}}</p>\r\n  </div>\r\n\r\n  <div class=\"avatar\"\r\n       *ngIf=\"incoming\">\r\n    <img src=\"{{message.author.avatarSrc}}\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message__ = __webpack_require__("../../../../../src/app/_models/message.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessageComponent = (function () {
    function ChatMessageComponent(UserService) {
        this.UserService = UserService;
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') != null) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (this.message.author && this.currentUser) {
                this.incoming = this.message.author.email !== this.currentUser.email;
            }
        }
    };
    return ChatMessageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]) === "function" && _a || Object)
], ChatMessageComponent.prototype, "message", void 0);
ChatMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-message',
        template: __webpack_require__("../../../../../src/app/chat-message/chat-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-message/chat-message.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], ChatMessageComponent);

var _a, _b;
//# sourceMappingURL=chat-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-page {\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.sidebar {\r\n  background-color: var(--GhostWhite);\r\n  padding-right: 0;\r\n  min-height: 100vh;\r\n  border-right: 1.5px solid rgba(0,0,0,.125);\r\n}\r\n\r\n.sidebar .sidebar-header {\r\n  position: relative;\r\n  height: 157.5px;\r\n  margin-bottom: 8px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.sidebar .sidebar-header.header-cover {\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n}\r\n\r\n.sidebar .sidebar-brand {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: block;\r\n  padding: 0;\r\n  padding-left: 16px;\r\n  padding-right: 56px;\r\n  text-decoration: none;\r\n  clear: both;\r\n  font-weight: 500;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  transition: all 0.2s ease-in-out;\r\n  color: var(--GrayNurse);\r\n}\r\n.sidebar .sidebar-brand:hover,\r\n.sidebar .sidebar-brand:focus {\r\n  box-shadow: none;\r\n  outline: none;\r\n}\r\n\r\n.sidebar .input-rounded {\r\n  width: 100px;\r\n  border-radius: 1em;\r\n}\r\n\r\n.sidebar ul {\r\n  padding: 20px;\r\n}\r\n\r\n.sidebar p {\r\n  font-weight: bold;\r\n}\r\n\r\n.sidebar .components {\r\n  margin: 30px 20px;\r\n}\r\n\r\n\r\n.search-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.search {\r\n  background: white;\r\n  min-height: 100%;\r\n}\r\n\r\n.search-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.listing-card {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  margin: 20px 20px;\r\n  background: var(--GhostWhite);\r\n}\r\n\r\n.listing-card-row {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.listing-card mat-card-header {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.listing-card mat-card-header-text {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.footer-btn {\r\n  right: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n}\r\n\r\n.card-img-top {\r\n height: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid landing-page\">\r\n  <div class=\"container-fluid search\">\r\n    <div class=\"row\">\r\n      <nav *ngIf=\"dataService.sidebar\" [@enterAnimation] id=\"sidebar\" class=\"col-md-3 sidebar\">\r\n        <div class=\"sidebar-header header-cover\"\r\n             style=\"background-image: url(http://www.emintrinsic.com/Content/img/left.png);\">\r\n          <div *ngIf=\"this.currentUser\" data-toggle=\"dropdown\" class=\"sidebar-brand\">\r\n            <p>{{this.currentUser.name}}</p>\r\n            <p>{{this.currentUser.email}}</p>\r\n          </div>\r\n        </div>\r\n        <!-- Sidebar Links -->\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <p>Price</p>\r\n            <div class=\"components\">\r\n              <div class=\"row justify-content-between\">\r\n                <input type=\"number\" [(ngModel)]=\"landingFilter.costFilter[0]\" class=\"form-control input-rounded\"\r\n                       readonly>\r\n                <input type=\"number\" [(ngModel)]=\"landingFilter.costFilter[1]\" class=\"form-control input-rounded\"\r\n                       readonly>\r\n              </div>\r\n              <p-slider [(ngModel)]=\"landingFilter.costFilter\" [style]=\"{'height':'10px', 'margin-top':'30px'}\"\r\n                        [animate]=\"true\" [range]=\"true\"\r\n                        [min]=\"0\" [max]=\"2000\"></p-slider>\r\n            </div>\r\n          </li>\r\n          <hr>\r\n          <li>\r\n            <p>Rating {{landingFilter.ratingFilter}}</p>\r\n            <div class=\"components\">\r\n              <p-rating style=\"text-align: center; font-size: larger\" [(ngModel)]=\"landingFilter.ratingFilter\"\r\n                        [cancel]=\"false\"></p-rating>\r\n              <p-slider [(ngModel)]=\"landingFilter.ratingFilter\" [style]=\"{'height':'10px', 'margin-top':'30px'}\"\r\n                        [animate]=\"true\"\r\n                        [min]=\"1\" [max]=\"5\"></p-slider>\r\n            </div>\r\n          </li>\r\n          <hr>\r\n          <li>\r\n            <p>Tags</p>\r\n            <div class=\"components\">\r\n              <p-chips [style]=\"{'margin-bottom':'30px'}\" [(ngModel)]=\"landingFilter.tagFilter\"></p-chips>\r\n              <p-multiSelect [options]=\"landingFilter.tags\" [optionLabel]=\"label\" [dataKey]=\"value\"\r\n                             [(ngModel)]=\"landingFilter.tagFilter\"\r\n                             [panelStyle]=\"{minWidth:'12em'}\"></p-multiSelect>\r\n            </div>\r\n          </li>\r\n          <hr>\r\n        </ul>\r\n      </nav>\r\n      <div class=\"container col-md-9\">\r\n        <div *ngIf=\"subletsError\" class=\"col justify-content-center\">\r\n          <img src=\"../../assets/images/empty_state.jpg\" class=\"rounded mx-auto d-block\" height=\"600\" width=\"800\"/>\r\n          <br>\r\n          <h3 style=\"text-align: center; color: var(--DarkGray)\">Sorry, unable to load any subleases</h3>\r\n        </div>\r\n        <div *ngIf=\"!subletsError\" class=\"row justify-content-center\">\r\n\r\n          <!--| tagsPipe:landingFilter.tagFilter-->\r\n          <div class=\"card listing-card col-md-5\" *ngFor=\"let property of sublets | costPipe:landingFilter.costFilter\">\r\n            <a [routerLink]=\"['/view-sublease', property.id]\" style=\"text-decoration: none; color: black\">\r\n              <div class=\"img-wrapper\">\r\n                <img class=\"card-img-top img-fluid\"\r\n                     src=\"{{this.imageService?.getPhoto(property)}}\"\r\n                     alt=\"Photo of a Property Listing\">\r\n              </div>\r\n            </a>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <!--<h3>{{subleases[0].title}}</h3>-->\r\n                  <h3 style=\"float: left\">{{property.address}}</h3>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <h4 style=\"float: right\">{{property.price != (undefined || 0) ? '$' + (property.price |  number:'.0-0') : 'Message For Price'}}</h4>\r\n                </div>\r\n                <div class=\"w-100\"></div>\r\n                <div class=\"col\">\r\n                  <p style=\"float: left; color: var(--GrayChateau)\">{{property.description}}</p>\r\n                </div>\r\n                <div class=\"w-100\"></div>\r\n                <div class=\"col\">\r\n                  <div style=\"display: inline-block; float: left\">\r\n                    <p>Amentities</p>\r\n                    <span *ngFor=\"let amenity of subleases[0].amenities\" matTooltip=\"{{amenity.title}}\"><mat-icon\r\n                      style=\"margin-right: 16px\" svgIcon=\"{{amenity.url}}\"></mat-icon></span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\" style=\"text-align: right\">\r\n                  <div class=\"footer-btn\">\r\n                    <button class=\"btn\" (click)=\"favorite(property.id)\"><i class=\"fa fa-heart\" aria-hidden=\"true\"\r\n                                                                           style=\"color: red;\"></i>️\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__ = __webpack_require__("../../../../../src/app/_services/sublet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_DataService__ = __webpack_require__("../../../../../src/app/_services/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_image_service__ = __webpack_require__("../../../../../src/app/_services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_landing_filter__ = __webpack_require__("../../../../../src/app/_models/landing-filter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LandingComponent = (function () {
    function LandingComponent(router, dataService, subleaseService, imageService) {
        this.router = router;
        this.dataService = dataService;
        this.subleaseService = subleaseService;
        this.imageService = imageService;
        this.subleases = [{
                title: 'Klondike House', url: 'assets/Klondike House.jpg', price: "500", location: "Riatta Place",
                amenities: [{ title: 'Electric', url: "electric" }, { title: 'Water', url: "water" }, {
                        title: 'Fitness Center',
                        url: "fit-center"
                    }, { title: 'Free Parking', url: "parking" }, { title: 'Garage', url: "garage" }, {
                        title: "Free Laundry",
                        url: "laundry"
                    }],
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ];
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.dataService.sidebar = true;
        if (localStorage.getItem('currentUser') == null) {
            this.isLoggedIn = false;
        }
        else {
            this.isLoggedIn = true;
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        this.landingFilter = new __WEBPACK_IMPORTED_MODULE_6__models_landing_filter__["a" /* LandingFilter */]([0, 2000], 5, [{ label: 'tag1', value: 'tag1' }, {
                label: 'tag2',
                value: 'tag2'
            }, { label: 'tag3', value: 'tag3' }, { label: 'tag4', value: 'tag4' }, { label: 'tag5', value: 'tag5' }], []);
        this.loadAllSubleases();
        this.loadAllTags();
    };
    LandingComponent.prototype.routePostSublease = function () {
        this.router.navigateByUrl('/post');
    };
    //Get all subleases for the front page
    LandingComponent.prototype.loadAllSubleases = function () {
        var _this = this;
        this.subleaseService.getAll()
            .subscribe(function (data) {
            _this.sublets = data;
            _this.subletsError = false;
        }, function (error) {
            console.log("Getting sublets issue " + error);
            _this.subletsError = true;
        });
    };
    LandingComponent.prototype.loadAllTags = function () {
        var _this = this;
        this.subleaseService.getTags()
            .subscribe(function (data) {
            _this.landingFilter = new __WEBPACK_IMPORTED_MODULE_6__models_landing_filter__["a" /* LandingFilter */]([0, 2000], 5, data, []);
            console.log("Tags: " + JSON.stringify(_this.landingFilter.tagFilter));
        }, function (error) {
            console.log("Getting tags issue " + error);
        });
    };
    //Favorite a sublease
    LandingComponent.prototype.favorite = function (id) {
        this.subleaseService.saveSublease(this.currentUser.email, id).subscribe(function (data) {
            console.log('Returned: ' + data);
        }, function (error) {
            console.log('Favoriting issue ' + error);
        });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["trigger"])('enterAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["transition"])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["animate"])('500ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["transition"])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["animate"])('500ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({ transform: 'translateX(-100%)', opacity: 0 }))
                ])
            ])
        ],
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_DataService__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__["a" /* SubleaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__["a" /* SubleaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_image_service__["a" /* ImageService */]) === "function" && _d || Object])
], LandingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-thread/message-thread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-thread/message-thread.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media conversation\">\r\n  <div class=\"pull-left\">\r\n    <img class=\"media-object avatar\"\r\n         src=\"{{thread.avatarSrc}}\">\r\n  </div>\r\n  <div class=\"media-body\">\r\n    <h5 class=\"media-heading contact-name\">{{thread.name}}\r\n      <span *ngIf=\"selected\">&bull;</span>\r\n    </h5>\r\n    <small class=\"message-preview\">{{thread.lastMessage.text}}</small>\r\n  </div>\r\n  <a (click)=\"clicked($event)\" class=\"div-link\">Select</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/message-thread/message-thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_thread__ = __webpack_require__("../../../../../src/app/_models/thread.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_thread_service__ = __webpack_require__("../../../../../src/app/_services/thread.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageThreadComponent = (function () {
    function MessageThreadComponent(threadsService) {
        this.threadsService = threadsService;
        this.selected = false;
    }
    MessageThreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadsService.currentThread
            .subscribe(function (currentThread) {
            _this.selected = currentThread &&
                _this.thread &&
                (currentThread.id === _this.thread.id);
        });
    };
    MessageThreadComponent.prototype.clicked = function (event) {
        this.threadsService.setCurrentThread(this.thread);
        event.preventDefault();
    };
    return MessageThreadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_thread__["a" /* Thread */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_thread__["a" /* Thread */]) === "function" && _a || Object)
], MessageThreadComponent.prototype, "thread", void 0);
MessageThreadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message-thread',
        template: __webpack_require__("../../../../../src/app/message-thread/message-thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-thread/message-thread.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_thread_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_thread_service__["a" /* ThreadsService */]) === "function" && _b || Object])
], MessageThreadComponent);

var _a, _b;
//# sourceMappingURL=message-thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-threads/message-threads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-threads/message-threads.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"conversation-wrap\">\r\n\r\n    <app-message-thread\r\n      *ngFor=\"let thread of threads | async\"\r\n      [thread]=\"thread\">\r\n    </app-message-thread>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/message-threads/message-threads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageThreadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_thread_service__ = __webpack_require__("../../../../../src/app/_services/thread.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageThreadsComponent = (function () {
    function MessageThreadsComponent(threadsService) {
        this.threadsService = threadsService;
        this.threads = threadsService.orderedThreads;
    }
    MessageThreadsComponent.prototype.ngOnInit = function () {
    };
    return MessageThreadsComponent;
}());
MessageThreadsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message-threads',
        template: __webpack_require__("../../../../../src/app/message-threads/message-threads.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-threads/message-threads.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_thread_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_thread_service__["a" /* ThreadsService */]) === "function" && _a || Object])
], MessageThreadsComponent);

var _a;
//# sourceMappingURL=message-threads.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-window/message-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-window .panel-footer .input-group .chat-input {\r\n  display: table-cell;\r\n}\r\n\r\n.chat-window .panel-footer .input-group .chat-input {\r\n  position: relative;\r\n  z-index: 2;\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.chat-input {\r\n  padding: 5px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-window/message-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-window-container\">\r\n  <div class=\"chat-window\">\r\n    <div class=\"panel-container\">\r\n      <div class=\"panel panel-default\">\r\n\r\n        <div class=\"panel-heading top-bar\">\r\n          <div class=\"panel-title-container\">\r\n            <h3 class=\"panel-title\">\r\n              <span class=\"glyphicon glyphicon-comment\"></span>\r\n              Chat - {{currentThread.name}}\r\n            </h3>\r\n          </div>\r\n          <div class=\"panel-buttons-container\">\r\n            <!-- you could put minimize or close buttons here -->\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel-body msg-container-base\">\r\n          <app-chat-message\r\n            *ngFor=\"let message of messages | async\"\r\n            [message]=\"message\">\r\n          </app-chat-message>\r\n        </div>\r\n\r\n        <div class=\"panel-footer\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\"\r\n                   class=\"chat-input\"\r\n                   placeholder=\"Write your message here...\"\r\n                   (keydown.enter)=\"onEnter($event)\"\r\n                   [(ngModel)]=\"draftMessage.text\" />\r\n            <span class=\"input-group-btn\">\r\n            <button class=\"btn-chat btn btn-primary\"\r\n                    (click)=\"onEnter($event)\"\r\n            >Send</button>\r\n          </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/message-window/message-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__("../../../../../src/app/_models/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/_services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_thread_service__ = __webpack_require__("../../../../../src/app/_services/thread.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageWindowComponent = (function () {
    function MessageWindowComponent(messagesService, threadsService, UserService, el) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.UserService = UserService;
        this.el = el;
    }
    MessageWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = this.threadsService.currentThreadMessages;
        this.draftMessage = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]();
        this.threadsService.currentThread.subscribe(function (thread) {
            _this.currentThread = thread;
        });
        if (localStorage.getItem('currentUser') != null) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        this.messages
            .subscribe(function (messages) {
            setTimeout(function () {
                _this.scrollToBottom();
            });
        });
    };
    MessageWindowComponent.prototype.onEnter = function (event) {
        this.sendMessage();
        event.preventDefault();
    };
    MessageWindowComponent.prototype.sendMessage = function () {
        var m = this.draftMessage;
        m.author = this.currentUser;
        m.thread = this.currentThread;
        m.isRead = true;
        this.messagesService.addMessage(m);
        this.draftMessage = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]();
    };
    MessageWindowComponent.prototype.scrollToBottom = function () {
        var scrollPane = this.el
            .nativeElement.querySelector('.msg-container-base');
        scrollPane.scrollTop = scrollPane.scrollHeight;
    };
    return MessageWindowComponent;
}());
MessageWindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message-window',
        template: __webpack_require__("../../../../../src/app/message-window/message-window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-window/message-window.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_thread_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_thread_service__["a" /* ThreadsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], MessageWindowComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=message-window.component.js.map

/***/ }),

/***/ "../../../../../src/app/messaging/messaging.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  min-height: 94vh;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messaging/messaging.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3\">\r\n      <app-message-threads></app-message-threads>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <app-message-window></app-message-window>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/messaging/messaging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagingComponent = (function () {
    function MessagingComponent() {
    }
    MessagingComponent.prototype.ngOnInit = function () {
    };
    return MessagingComponent;
}());
MessagingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messaging',
        template: __webpack_require__("../../../../../src/app/messaging/messaging.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messaging/messaging.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessagingComponent);

//# sourceMappingURL=messaging.component.js.map

/***/ }),

/***/ "../../../../../src/app/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-page {\r\n  /*color: var(--LightGray)*/\r\n}\r\n\r\n.post-h1 {\r\n  margin: 0 auto;\r\n  padding-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.example-form {\r\n  width: auto;\r\n  height: auto;\r\n  background-color: inherit;\r\n  left:0; right:0;\r\n  top:0; bottom:0;\r\n  padding: 50px 50px;\r\n\r\n  /*this to solve \"the content will not be cut when the window is smaller than the content\": */\r\n  max-width:100%;\r\n  max-height:100%;\r\n  overflow:auto;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.btn-landing {\r\n  float: right;\r\n}\r\n\r\n.photo-upload {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.form-check-label {\r\n  padding-left: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid post-page\">\r\n  <h1 class=\"post-h1 mat-headline\">Create a Post</h1>\r\n  <form class=\"example-form\" novalidate [formGroup]=\"postForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"inputAddress\">Address</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"inputAddress\"\r\n             formControlName=\"address\"\r\n             aria-describedby=\"addressHelp\"\r\n             placeholder=\"Enter primary address\">\r\n      <small id=\"addressHelp\" class=\"form-text text-muted\">Your primary address.</small>\r\n      <small *ngIf=\"!postForm.controls.address.valid\" class=\"text-danger\">An address is required.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputDescription\">Sublet Description</label>\r\n      <input type=\"text\" class=\"form-control\"\r\n             formControlName=\"description\"\r\n             id=\"inputDescription\"\r\n             placeholder=\"Enter description\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputSubletImage\">Sublet Photo</label>\r\n      <input type=\"file\"\r\n             id=\"inputSubletImage\"\r\n             class=\"form-control-file\"\r\n             name=\"subletImage\"\r\n             accept=\"image/*\"\r\n      >\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputPrice\">Monthly Rent</label>\r\n      <input type=\"number\" class=\"form-control\"\r\n             formControlName=\"price\"\r\n             id=\"inputPrice\"\r\n             placeholder=\"Enter price\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group\">\r\n          <div class=\"form-check\">\r\n            <mat-checkbox formControlName=\"hasRoommates\" [value]=\"post.roommates?.length > 0\">\r\n              Roommates\r\n            </mat-checkbox>\r\n          </div>\r\n          <div class=\"col\" formArrayName=\"roommates\" *ngIf=\"postForm.controls.hasRoommates.value\">\r\n\r\n            <div *ngFor=\"let roommate of postForm.controls.roommates.controls; let i=index\">\r\n              <!-- roommate header, show remove button when more than one address available -->\r\n              <div>\r\n                <span>Roommate {{i + 1}}</span>\r\n                <span *ngIf=\"postForm.controls.roommates.controls.length >= 1\" (click)=\"removeRoommate(i)\">\r\n              <i matTooltip=\"Remove\" class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                </span>\r\n              </div>\r\n\r\n              <!-- Angular assigns array index as group name by default 0, 1, 2, ... -->\r\n              <div [formGroupName]=\"i\">\r\n                <!--age-->\r\n                <div>\r\n                  <label>age</label>\r\n                  <input type=\"number\" formControlName=\"age\">\r\n                  <!--display error message if age is not valid-->\r\n                  <small [hidden]=\"postForm.controls.roommates.controls[i].controls.age.valid\">\r\n                    Age is required\r\n                  </small>\r\n                </div>\r\n                <!--grade-->\r\n                <div>\r\n                  <label>grade</label>\r\n                  <input type=\"string\" formControlName=\"grade\">\r\n                  <!--display error message if grade is not valid-->\r\n                  <small [hidden]=\"postForm.controls.roommates.controls[i].controls.grade.valid\">\r\n                    Grade is required\r\n                  </small>\r\n                </div>\r\n                <!--sex-->\r\n                <div>\r\n                  <label>sex</label>\r\n                  <input type=\"string\" formControlName=\"sex\">\r\n                  <!--display error message if grade is not valid-->\r\n                  <small [hidden]=\"postForm.controls.roommates.controls[i].controls.sex.valid\">\r\n                    Gender is required\r\n                  </small>\r\n                </div>\r\n                <!--major-->\r\n                <div>\r\n                  <label>major</label>\r\n                  <input type=\"text\" formControlName=\"major\">\r\n                </div>\r\n                <div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"margin-20\">\r\n              <a (click)=\"addRoommate()\" style=\"cursor: default\">\r\n                Add another roommate +\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group\">\r\n          <mat-checkbox formControlName=\"hasOpenHouse\">Open House</mat-checkbox>\r\n          <div *ngIf=\"postForm.controls.hasOpenHouse.value\">\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n              <p-calendar id=\"inputOpenHouse\"\r\n                          placeholder=\"Enter open house date\"\r\n                          type=\"datetime-local\"\r\n                          formControlName=\"openHouse\"\r\n                          [showTime]=\"true\">\r\n              </p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group\">\r\n          <mat-checkbox formControlName=\"isFurnished\">Is Furnished</mat-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">Enter any tags you would like:</label>\r\n        <p-chips formControlName=\"tags\" name=\"tags\" addOnTab=\"true\"></p-chips>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"inputAmenities\">Amentities</label>\r\n      <mat-selection-list dense #amenitiesList id=\"inputAmenities\">\r\n        <mat-list-option *ngFor=\"let amenity of amenities\">\r\n          <mat-icon svgIcon=\"{{amenity.url}}\"></mat-icon>\r\n          <h3 matLine> {{amenity.title}} </h3>\r\n        </mat-list-option>\r\n      </mat-selection-list>\r\n    </div>\r\n    <div style=\"margin-top: 40px\">\r\n      <a *ngIf=\"dataService.post == undefined\" (click)=\"submitForm(postForm)\">\r\n        <button [disabled]=\"!postForm.valid\" mat-raised-button-bottom-right class=\"btn btn-primary btn-landing\">\r\n          Submit\r\n        </button>\r\n      </a>\r\n      <a *ngIf=\"dataService.post != undefined\" (click)=\"updateForm(postForm)\">\r\n        <button mat-raised-button-bottom-right class=\"btn btn-primary btn-landing\">Update</button>\r\n      </a>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__ = __webpack_require__("../../../../../src/app/_services/sublet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_full_user__ = __webpack_require__("../../../../../src/app/_models/full-user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_DataService__ = __webpack_require__("../../../../../src/app/_services/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = (function () {
    function PostComponent(_fb, subleaseService, dataService, router) {
        this._fb = _fb;
        this.subleaseService = subleaseService;
        this.dataService = dataService;
        this.router = router;
        this.amenities = [{ title: 'Electric', url: 'electric' }, { title: 'Water', url: 'water' }, {
                title: 'Fitness Center',
                url: 'fit-center'
            }, { title: 'Free Parking', url: 'parking' }, { title: 'Garage', url: 'garage' }, {
                title: 'Free Laundry',
                url: 'laundry'
            }, { title: 'Parking Lot', url: 'lot' },
            { title: 'Indoor Pool', url: 'in-pool' }, { title: 'Outdoor Pool', url: 'out-pool' }, {
                title: 'Basketball Court',
                url: 'basketball'
            }, { title: 'Tennis Court', url: 'tennis' }];
        this.isLoggedIn = false;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_2__models_full_user__["a" /* FullUser */]('');
    }
    PostComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') == null) {
            this.isLoggedIn = false;
        }
        else {
            this.isLoggedIn = true;
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        this.post = this.dataService.post;
        if (this.post === undefined) {
            this.post = {
                'id': 0,
                'email': this.currentUser.email,
                'address': '',
                'price': 0,
                'description': '',
                'hasRoommates': false,
                'roommates': [],
                'hasOpenHouse': false,
                'openHouse': '',
                'isFurnished': false,
                'tags': [],
                'imageUrl': '',
            };
        }
        if (this.post.roommates && this.post.roommates.length > 0) {
            this.post.hasRoommates = true;
        }
        if (this.post.openHouse !== '') {
            this.post.hasOpenHouse = true;
        }
        this.postForm = this._fb.group({
            email: [this.post.email],
            address: [this.post.address, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            description: [this.post.description],
            price: [this.post.price],
            hasRoommates: [this.post.hasRoommates],
            roommates: this._fb.array([]),
            hasOpenHouse: [this.post.hasOpenHouse],
            openHouse: [''],
            isFurnished: [this.post.isFurnished],
            tags: [],
            imageUrl: ''
        });
        // Add roommates
        this.initRoommates();
        if (this.post.openHouse !== '') {
            this.post.hasOpenHouse = true;
        }
        console.log('Post ' + JSON.stringify(this.post));
    };
    PostComponent.prototype.initRoommates = function () {
        // initialize our address
        return this._fb.group({
            age: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            grade: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            sex: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required],
            major: ['']
        });
    };
    PostComponent.prototype.addRoommate = function () {
        // add address to the list
        var control = this.postForm.controls['roommates'];
        control.push(this.initRoommates());
    };
    PostComponent.prototype.removeRoommate = function (i) {
        // remove address from the list
        var control = this.postForm.controls['roommates'];
        control.removeAt(i);
    };
    PostComponent.prototype.submitForm = function (model) {
        var _this = this;
        // let sublet = new Sublease(0, 26, this.post.address1 + " " + this.post.address2, "",
        //   this.post.roommates, this.post.isFurnished, this.post.openHouse, ["test"]);
        console.log(this.post);
        var formModel = model.getRawValue();
        formModel.imageUrl = '';
        var imageList = document.querySelector('input[name="subletImage"]').files;
        formModel.email = this.post.email;
        formModel.tags = this.post.tags;
        formModel.roommates.forEach(function (roommate) {
            console.log(roommate);
            roommate.id = 0;
            roommate.subletID = 0;
        });
        console.log('Uploading: ' + JSON.stringify(formModel));
        this.subleaseService.create(formModel, imageList)
            .subscribe(function (data) {
            _this.router.navigate(["view-sublease/" + _this.post.id]);
            console.log('Successful post');
        }, function (error) {
            console.log("Post update issue: " + error);
        });
    };
    PostComponent.prototype.updateForm = function (model) {
        var _this = this;
        var formModel = model.getRawValue();
        formModel.id = this.post.id;
        formModel.email = this.post.email;
        formModel.email = this.post.email;
        formModel.tags = this.post.tags;
        formModel.imageUrl = this.post.imageUrl;
        formModel.price = this.post.price;
        var imageList = document.querySelector('input[name="subletImage"]').files;
        console.log('Updating: ' + JSON.stringify(formModel));
        this.subleaseService.updatePost(formModel, imageList)
            .subscribe(function (data) {
            formModel.imageUrl = data.imageUrl;
            _this.router.navigate(['view-sublease/' + _this.post.id]);
            console.log('Successful post update');
        }, function (error) {
            console.log('Post update issue ' + error);
        });
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__["a" /* SubleaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__["a" /* SubleaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_DataService__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object])
], PostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-page {\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n  padding-left: 16px;\r\n  background-color: var(--GhostWhite);\r\n}\r\n\r\n.profile-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display:         flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  background-color: var(--GhostWhite);\r\n  min-height: 33vh;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.profile-items-container {\r\n  background-color: var(--GhostWhite);\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.profile-items {\r\n  background: var(--GhostWhite);\r\n  color: black;\r\n  margin-top: 24px;\r\n}\r\n\r\n.edit-profile-btn-div {\r\n  position: relative;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin-bottom: -200px;\r\n  margin-right: 32px;\r\n}\r\n\r\n.img-responsive {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.img-circle {\r\n  border-radius: 50%;\r\n}\r\n\r\n.horizontal-card-list {\r\n  overflow-x: scroll;\r\n  white-space: nowrap;\r\n}\r\n\r\n.horizontal-card-list > .col-md-3 {\r\n  display: inline-block;\r\n  float: none;\r\n}\r\n\r\n.saved-card {\r\n  background: white;\r\n}\r\n\r\n.posted-card {\r\n  background: var(--GrayChateau);\r\n  color: white;\r\n}\r\n\r\n.posted-card .md-icon.svg.path {\r\n  fill: white !important;\r\n}\r\n\r\n.card {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  margin: 20px 20px;\r\n  width: 100vh;\r\n}\r\n\r\n.listing-card-img {\r\n  height: 200px;\r\n  width: 100%;\r\n}\r\n\r\n.listing-card-row {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.listing-card mat-card-header {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.footer-btn {\r\n  position: absolute;\r\n  right: 10px;\r\n  bottom: 10px;\r\n}\r\n\r\n.profile-div {\r\n  padding-top: 5%;\r\n  width:100%;\r\n  margin: 0 auto;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n}\r\n\r\n.profile-btn-div {\r\n  width:25%;\r\n  margin: 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid profile-page\">\r\n  <div class=\"row profile-row\" *ngIf=\"profile\">\r\n    <div class=\"col-3\" style=\"flex-direction: column\">\r\n      <img style=\"max-height: 300px;\" alt=\"Profile Image\"\r\n           src=\"http://www.freeiconspng.com/uploads/profile-icon-9.png\"\r\n           class=\"img-responsive img-circle\"/>\r\n    </div>\r\n\r\n    <div class=\"col-4\" style=\"display: flex; flex-direction: column; min-height: 33vh\">\r\n      <div class=\"row justify-content-between\" style=\"margin-top: 15px;\">\r\n        <h3 style=\"margin-right: 50px\">{{profile.name}}</h3>\r\n        <h3 style=\"margin-left: 50px\">{{profile.email}}</h3>\r\n      </div>\r\n      <div class=\"row justify-content-between\" style=\"display: flex; align-items: center\">\r\n        <h3 *ngIf=\"profile.age\" style=\"float: left; margin-right: 50px\">{{profile.age}} years old</h3>\r\n        <h3 *ngIf=\"profile.sex\" style=\"float: right; margin-left: 50px\">{{profile.sex}}</h3>\r\n      </div>\r\n      <div class=\"row justify-content-between\" style=\"display: flex; align-items: center\">\r\n        <h3 *ngIf=\"profile.grade\" style=\"float: left; margin-right: 50px\">{{grades[profile.grade]?.name}}</h3>\r\n        <h3 ngif=\"profile.major\" style=\"float: right; margin-left: 50px\">{{profile.major}}</h3>\r\n      </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"currentUser && profile.email == currentUser.email\" class=\"edit-profile-btn-div\">\r\n      <button (click)=\"openProfileDialog()\" class=\"btn btn-secondary\">Edit  <i matTooltip=\"Edit\" class=\"fa fa-edit\" aria-hidden=\"true\" style=\"color: var(--GrayChateau);\"></i></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"container profile-items-container\">\r\n    <hr>\r\n    <div *ngIf=\"currentUser && profile && profile.email == currentUser.email\" class=\"row profile-items\">\r\n      <h3>Saved Subleases</h3>\r\n      <div class=\"horizontal-card-list\">\r\n        <div class=\"card saved-card col-md-3\" *ngFor=\"let property of savedSubleases; let i = index\">\r\n          <a [routerLink]=\"['/view-sublease', property.id]\" style=\"text-decoration: none; color: black\">\r\n            <div class=\"img-wrapper\">\r\n              <img class=\"card-img-top img-fluid\"\r\n                   src={{this.imageService?.getPhoto(property)}}\r\n                   alt=\"Photo of a Property Listing\">\r\n            </div>\r\n\r\n          </a>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-7\">\r\n                <h5 style=\"float: left\">{{property.address}}</h5>\r\n              </div>\r\n              <div class=\"col\">\r\n                <h5 style=\"float: right\">{{property.price != undefined ? '$' + property.price : ''}}</h5>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col\">\r\n                <p style=\"float: left; color: var(--GrayChateau)\">{{property.description}}</p>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-sm-10\">\r\n                <p *ngIf=\"property.amenities == null\">No amentities</p>\r\n                <p *ngIf=\"property.amenities != null\" style=\"margin-bottom: 0;\">Amentities</p>\r\n                <div class=\"row\">\r\n                  <mat-icon *ngFor=\"let amenity of property.amenities\" matTooltip=\"{{amenity.title}}\"\r\n                            style=\"margin-right: 16px\" svgIcon=\"{{amenity.url}}\"></mat-icon>\r\n                </div>\r\n              </div>\r\n              <div class=\"footer-btn\">\r\n                <i (click)=\"favorite(property.id, i)\"\r\n                   [style.color]=\"'red'\" class=\"fa fa-trash\"\r\n                   aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row profile-items\">\r\n      <h3>Posted Subleases</h3>\r\n      <div class=\"horizontal-card-list\">\r\n        <div class=\"card posted-card col-md-3\" *ngFor=\"let property of postedSubleases\">\r\n          <a [routerLink]=\"['/view-sublease', property.id]\" style=\"text-decoration: none; color: black\">\r\n            <div class=\"img-wrapper\">\r\n            <img class=\"card-img-top img-fluid listing-card-img\"\r\n                 src={{this.imageService?.getPhoto(property)}}\r\n                 alt=\"Photo of a Property Listing\">\r\n            </div>\r\n          </a>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-7\">\r\n                <h5 style=\"float: left\">{{property.address}}</h5>\r\n              </div>\r\n              <div class=\"col\">\r\n                <h5 style=\"float: right\">{{property.price != undefined ? '$' + property.price : ''}}</h5>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col\">\r\n                <p style=\"float: left; color: var(--GrayChateau)\">{{property.description}}</p>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-sm-10\">\r\n                <p *ngIf=\"property.amenities == null\">No amentities</p>\r\n                <p *ngIf=\"property.amenities != null\" style=\"margin-bottom: 0;\">Amentities</p>\r\n                <div class=\"row\">\r\n                  <mat-icon class=\"posted-icon\" *ngFor=\"let amenity of property.amenities\"\r\n                            matTooltip=\"{{amenity.title}}\"\r\n                            style=\"margin-right: 16px; color: white !important;\" svgIcon=\"{{amenity.url}}\"></mat-icon>\r\n                </div>\r\n              </div>\r\n              <div class=\"footer-btn\">\r\n                <i (click)=\"editPost(property)\" matTooltip=\"Edit\" class=\"fa fa-edit\" aria-hidden=\"true\"\r\n                   style=\"color: var(--GrayNurse);\"></i>️\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateProfileDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_full_user__ = __webpack_require__("../../../../../src/app/_models/full-user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_constants__ = __webpack_require__("../../../../../src/app/_models/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_image_service__ = __webpack_require__("../../../../../src/app/_services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_sublet_service__ = __webpack_require__("../../../../../src/app/_services/sublet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_DataService__ = __webpack_require__("../../../../../src/app/_services/DataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ProfileComponent = (function () {
    function ProfileComponent(dialog, userService, subleaseService, dataService, imageService, route, router) {
        this.dialog = dialog;
        this.userService = userService;
        this.subleaseService = subleaseService;
        this.dataService = dataService;
        this.imageService = imageService;
        this.route = route;
        this.router = router;
        this.subleaseSamples = [{
                id: "0",
                title: 'Klondike House',
                url: 'assets/Klondike House.jpg',
                price: "500",
                location: "Riatta Place",
                address: "1111 State Street",
                amenities: [{ title: 'Electric', url: "electric" }, { title: 'Water', url: "water" }, {
                        title: 'Fitness Center',
                        url: "fit-center"
                    }, { title: 'Free Parking', url: "parking" }, { title: 'Garage', url: "garage" }, {
                        title: "Free Laundry",
                        url: "laundry"
                    }],
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                id: "0",
                title: 'Klondike House',
                price: "500",
                url: 'assets/Klondike House.jpg',
                location: "Riatta Place",
                address: "1111 State Street",
                amenities: [{ title: 'Electric', url: "electric" }, { title: 'Water', url: "water" }, {
                        title: 'Fitness Center',
                        url: "fit-center"
                    }, { title: 'Free Parking', url: "parking" }, { title: 'Garage', url: "garage" }, {
                        title: "Free Laundry",
                        url: "laundry"
                    }, { title: "Parking Lot", url: "lot" },
                    { title: "Indoor Pool", url: "in-pool" }, { title: "Outdoor Pool", url: "out-pool" }, {
                        title: "Basketball Court",
                        url: "basketball"
                    }, { title: "Tennis Court", url: "tennis" }],
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }];
        this.grades = __WEBPACK_IMPORTED_MODULE_5__models_constants__["b" /* grades */];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentUser') != null) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log("Loaded profile: " + JSON.stringify(this.profile));
        }
        this.route.params.subscribe(function (params) {
            _this.email = params['email'];
            console.log("Email: " + _this.email);
            if (_this.currentUser && _this.email == _this.currentUser.email) {
                _this.profile = _this.currentUser;
                _this.loadSavedSublets(_this.profile.email);
                _this.loadPostedSublets(_this.profile.email);
            }
            else {
                _this.loadProfile(_this.email);
            }
        });
    };
    ProfileComponent.prototype.loadProfile = function (email) {
        var _this = this;
        this.userService.getFullByEmail(email)
            .subscribe(function (data) {
            if (data != undefined) {
                _this.profile = data;
                _this.loadPostedSublets(_this.profile.email);
            }
            else {
                console.log("No data returned.");
            }
        }, function (error) {
            console.log("Unable to fetch user");
        });
    };
    ProfileComponent.prototype.loadSavedSublets = function (email) {
        var _this = this;
        this.userService.getSavedSubleases(email)
            .subscribe(function (data) {
            if (data != undefined) {
                _this.savedSubleases = data;
            }
            else {
                console.log("No saved sublets returned.");
            }
        }, function (error) {
            console.log("Unable to fetch saved sublets");
        });
    };
    ProfileComponent.prototype.loadPostedSublets = function (email) {
        var _this = this;
        this.userService.getPostedSubleases(email)
            .subscribe(function (data) {
            if (data != undefined) {
                _this.postedSubleases = data;
            }
            else {
                console.log("No posted sublets returned.");
            }
        }, function (error) {
            console.log("Unable to fetch posted sublets");
        });
    };
    //Favorite a sublease
    ProfileComponent.prototype.favorite = function (id, index) {
        var _this = this;
        this.subleaseService.saveSublease(this.currentUser.email, id).subscribe(function (data) {
            _this.savedSubleases.splice(index, 1);
        }, function (error) {
            console.log('Favoriting issue ' + error);
        });
    };
    ProfileComponent.prototype.editPost = function (sublease) {
        this.dataService.post = sublease;
        this.router.navigate(["post"]);
    };
    ProfileComponent.prototype.openProfileDialog = function () {
        var profileDialogRef = this.dialog.open(UpdateProfileDialog, {
            width: '500px',
            height: '500px',
            data: this.profile,
        });
        profileDialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_sublet_service__["a" /* SubleaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_sublet_service__["a" /* SubleaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_DataService__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_image_service__["a" /* ImageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _g || Object])
], ProfileComponent);

var UpdateProfileDialog = (function () {
    function UpdateProfileDialog(profileDialogRef, data, userService) {
        this.profileDialogRef = profileDialogRef;
        this.data = data;
        this.userService = userService;
        this.setCurrentUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sex = __WEBPACK_IMPORTED_MODULE_5__models_constants__["a" /* genders */];
        this.grades = __WEBPACK_IMPORTED_MODULE_5__models_constants__["b" /* grades */];
        this.profile = this.data;
        this.newUser = this.profile;
    }
    UpdateProfileDialog.prototype.onNoClick = function () {
        this.profileDialogRef.close();
    };
    UpdateProfileDialog.prototype.closeDialog = function () {
        this.profileDialogRef.close();
    };
    UpdateProfileDialog.prototype.updateProfile = function () {
        var _this = this;
        console.log("Updating user profile: " + this.newUser);
        if (this.newUser == undefined || this.newUser.userName == "") {
            console.log("Invalid user " + this.data);
        }
        console.log("Mapped user: " + JSON.stringify(this.newUser));
        this.userService.updateProfile(this.newUser)
            .subscribe(function (data) {
            _this.setCurrentUser.emit(_this.profile);
            if (_this.profile) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(_this.profile));
                console.log("Updated User Information: " + JSON.stringify(_this.profile));
                _this.closeDialog();
            }
        }, function (error) {
            console.log("Updating user issue " + error);
        });
    };
    return UpdateProfileDialog;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__models_full_user__["a" /* FullUser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_full_user__["a" /* FullUser */]) === "function" && _h || Object)
], UpdateProfileDialog.prototype, "profile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _j || Object)
], UpdateProfileDialog.prototype, "setCurrentUser", void 0);
UpdateProfileDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/profile/update-profile-dialog.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogRef */]) === "function" && _k || Object, Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _l || Object])
], UpdateProfileDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/update-profile-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"color: var(--OxfordBlue)\">Update Profile</h2>\r\n<form #profileForm=\"ngForm\">\r\n  <div mat-dialog-content style=\"overflow-y: hidden\">\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Name</label>\r\n        <input matInput type=\"text\" [(ngModel)]=\"newUser.name\" name=\"name\"/>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Age</label>\r\n        <input matInput type=\"number\" [(ngModel)]=\"newUser.age\" name=\"age\"/>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Sex</label>\r\n        <mat-select matInput [(ngModel)]=\"newUser.sex\" name=\"sex\">\r\n          <mat-option *ngFor=\"let gender of sex\" value=\"{{gender}}\">{{gender}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Major</label>\r\n        <input matInput type=\"text\" [(ngModel)]=\"newUser.major\" name=\"major\"/>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"email-input\">\r\n      <mat-form-field style=\"width: 100%\">\r\n        <label>Grade</label>\r\n        <mat-select matInput type=\"number\" [(ngModel)]=\"newUser.grade\" name=\"grade\">\r\n          <mat-option *ngFor=\"let grade of grades\" value=\"{{grade.value}}\">{{grade.name}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions class=\"profile-div\">\r\n      <div class=\"profile-btn-div\">\r\n        <button (click)=\"updateProfile()\" [disabled]=\"profileForm.invalid\" class=\"btn btn-secondary\">Update</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/view-sublease/view-sublease.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vertical-center {\r\n  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */\r\n  min-height: 90vh; /* These two lines are counted as one :-)       */\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -ms-flexbox;\r\n\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.jumbotron {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.sublease-h1 {\r\n  margin: 20px 20px auto 20px;\r\n  text-align: left;\r\n}\r\n\r\n\r\n.view-sublease-card {\r\n  width: 50%;\r\n  height: 80%;\r\n  margin: auto auto;\r\n  top: 5%;\r\n  bottom: 5%;\r\n  background: var(--GrayNurse);\r\n}\r\n\r\n.card-img-top {\r\n  height: 250px;\r\n}\r\n\r\n.sublease-card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 250px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.sublease-card-description {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.sublease-card-row {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.panel-body {\r\n  padding: 15px;\r\n}\r\n\r\n.list-group-item{\r\n  border: 0;\r\n  padding-left: 0;\r\n  border-top: 1px solid;\r\n  border-color: rgba(37,40,43,0.1);\r\n}\r\n.list-group .list-group-item:first-child{\r\n  border:0;\r\n}\r\n.list-group .list-group-item a{\r\n  color: #2895F1;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n.list-group.list-group-header{\r\n  padding:0;\r\n  margin:0;\r\n}\r\n.list-group.list-group-body .glyphicon {\r\n  font-size: 25px; vertical-align: middle;\r\n}\r\n.list-group-panel{\r\n  border: 1px solid #ccdbeb;\r\n  border-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-sublease/view-sublease.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron vertical-center\">\r\n  <div class=\"container\">\r\n    <div *ngIf=\"subletError\" class=\"col justify-content-center\">\r\n      <img src=\"../../assets/images/generic_400_error.png\" class=\"rounded mx-auto d-block\" height=\"500\" width=\"666\"/>\r\n    </div>\r\n    <div class=\"card view-sublease-card\" *ngIf=\"sublet\">\r\n        <img class=\"card-img-top img-fluid\"\r\n             src={{this.imageService.getPhoto(sublet)}}\r\n             alt=\"Photo of a Property Listing\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h3 style=\"float: left\">{{sublet.address}}</h3>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h4 style=\"float: right\">{{sublet.price != (undefined || 0) ? '$' + (sublet.price |  number:'.0') : 'Message For Price'}}</h4>\r\n          </div>\r\n          <div class=\"w-100\"></div>\r\n          <div class=\"col\">\r\n            <p style=\"float: left; color: var(--GrayChateau)\">{{sublet.description}}</p>\r\n          </div>\r\n          <div class=\"w-100\"></div>\r\n          <div class=\"col\" id=\"roommateAccordition\">\r\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n              <p class=\"mb-0\" (click)=\"toggle(sublet.roommates.length)\">\r\n                Roommates: {{sublet.roommates.length}}\r\n              </p>\r\n            </div>\r\n            <div class=\"row\" [ngClass]=\"{hide: !opened}\">\r\n              <div class=\"col-12\" style=\"\">\r\n                <div class=\"panel panel-default list-group-panel\">\r\n                  <div class=\"panel-body\">\r\n                    <ul class=\"list-group list-group-header\">\r\n                      <li class=\"list-group-item list-group-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-3 text-left\">Age</div>\r\n                          <div class=\"col-3\">Grade</div>\r\n                          <div class=\"col-3\">Major</div>\r\n                          <div class=\"col-3\">Sex</div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                    <ul class=\"list-group list-group-body\" style=\"\">\r\n                      <li class=\"list-group-item\" *ngFor=\"let roommate of sublet.roommates\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-3 text-left\" style=\" \">\r\n                            {{roommate.age? (roommate.age) : '...'}}\r\n                          </div>\r\n                          <div class=\"col-3\" style=\"\">{{roommate.grade? (roommate.grade) : '...'}}</div>\r\n                          <div class=\"col-3\" style=\"\">{{roommate.major? (roommate.major) : '...'}}</div>\r\n                          <div class=\"col-3\" style=\"\">{{roommate.sex? (roommate.sex) : '...'}}</div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100\"></div>\r\n          <div class=\"col\">\r\n            <p style=\"color: var(--GrayChateau)\">Open House: {{sublet.openHouse | date:\"medium\"}}</p>\r\n          </div>\r\n          <div class=\"w-100\"></div>\r\n          <div class=\"col\">\r\n            <div style=\"display: inline-block; float: left\">\r\n              <p>Amentities</p>\r\n              <span *ngFor=\"let amenity of sublease.amenities\" matTooltip=\"{{amenity.title}}\"><mat-icon\r\n                style=\"margin-right: 16px\" svgIcon=\"{{amenity.url}}\"></mat-icon></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\" style=\"text-align: right\">\r\n            <div class=\"footer-btn\">\r\n              <button class=\"btn\" (click)=\"favorite(sublet.id)\"><i class=\"fa fa-heart\" aria-hidden=\"true\"\r\n                                                          style=\"color: red;\"></i>️\r\n              </button>\r\n              <button class=\"btn\" (click)=\"share()\"><i class=\"fa fa-share\" aria-hidden=\"true\"\r\n                                                       style=\"color: dodgerblue;\"></i>️\r\n              </button>\r\n              <button class=\"btn\" *ngIf=\"currentUser && sublet.email == currentUser.email\" (click)=\"edit()\"><i\r\n                class=\"fa fa-edit\" aria-hidden=\"true\" style=\"color: slategray;\"></i>️\r\n              </button>\r\n            </div>\r\n            <div style=\"margin-top: 10px\">\r\n              <button class=\"btn\" [routerLink]=\"['/profile', sublet.email]\">View Profile <i class=\"fa fa-link\"\r\n                                                                                            aria-hidden=\"true\"\r\n                                                                                            style=\"color: slategray;\"></i>️\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/view-sublease/view-sublease.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSubleaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__ = __webpack_require__("../../../../../src/app/_services/sublet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_DataService__ = __webpack_require__("../../../../../src/app/_services/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_UserTrackingService__ = __webpack_require__("../../../../../src/app/_services/UserTrackingService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_image_service__ = __webpack_require__("../../../../../src/app/_services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_share__ = __webpack_require__("../../../../../src/app/_classes/share.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewSubleaseComponent = (function () {
    function ViewSubleaseComponent(userTrackingService, subleaseService, route, router, dataService, imageService, dialog) {
        this.userTrackingService = userTrackingService;
        this.subleaseService = subleaseService;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.imageService = imageService;
        this.dialog = dialog;
        this.sublease = {
            title: 'Klondike House', url: 'assets/Klondike House.jpg', price: "500", location: "Riatta Place",
            amenities: [{ title: 'Electric', url: "electric" }, { title: 'Water', url: "water" }, {
                    title: 'Fitness Center',
                    url: "fit-center"
                }, { title: 'Free Parking', url: "parking" }, { title: 'Garage', url: "garage" }, {
                    title: "Free Laundry",
                    url: "laundry"
                }],
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.opened = false;
    }
    ViewSubleaseComponent.prototype.toggle = function (roommateLength) {
        if (roommateLength > 0) {
            this.opened = !this.opened;
        }
    };
    ViewSubleaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            console.log("ID: " + id);
            _this.loadSublease(id);
        });
        if (localStorage.getItem('currentUser') == null) {
            this.isLoggedIn = false;
        }
        else {
            this.isLoggedIn = true;
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    //Get all subleases for the front page
    ViewSubleaseComponent.prototype.loadSublease = function (id) {
        var _this = this;
        this.subleaseService.getFullById(id)
            .subscribe(function (data) {
            _this.sublet = data;
            _this.subletError = false;
        }, function (error) {
            console.log("Getting sublets issue " + error);
            _this.subletError = true;
        });
    };
    ViewSubleaseComponent.prototype.edit = function () {
        this.dataService.post = this.sublet;
        this.router.navigate(["post"]);
    };
    //Favorite a sublease
    ViewSubleaseComponent.prototype.favorite = function (id) {
        console.log("Saving " + id + " " + this.currentUser.email);
        this.subleaseService.saveSublease(this.currentUser.email, id).subscribe(function (data) {
            console.log('Returned: ' + data);
        }, function (error) {
            console.log('Favoriting issue ' + error);
        });
    };
    //Share a sublease
    ViewSubleaseComponent.prototype.share = function () {
        var shareDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__classes_share__["a" /* ShareDialog */], {
            width: '500px',
            height: '200px',
            data: { firstname: "", lastname: "", password: "" }
        });
        shareDialogRef.afterClosed().subscribe(function (result) {
            console.log('The shared dialog was closed');
        });
    };
    return ViewSubleaseComponent;
}());
ViewSubleaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-sublease',
        template: __webpack_require__("../../../../../src/app/view-sublease/view-sublease.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view-sublease/view-sublease.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_UserTrackingService__["a" /* UserTrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_UserTrackingService__["a" /* UserTrackingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__["a" /* SubleaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_sublet_service__["a" /* SubleaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_DataService__["a" /* DataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_image_service__["a" /* ImageService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDialog */]) === "function" && _g || Object])
], ViewSubleaseComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=view-sublease.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    S3_ACCESS_ID: 'AKIAI7A3N7JTEFEE2AFA',
    S3_ACCESS_KEY: 'zqvgGWR4FwFBTKbnAXkukSdfP5tlAKhFPznmjRbP'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map