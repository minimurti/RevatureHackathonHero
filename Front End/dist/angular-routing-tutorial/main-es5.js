(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/angular-material-fileupload/node_modules/@angular/core/fesm2015 lazy recursive": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/angular-material-fileupload/node_modules/@angular/core/fesm2015 lazy namespace object ***!
          \************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./node_modules/angular-material-fileupload/node_modules/@angular/core/fesm2015 lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adduser/adduser.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adduser/adduser.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Add users to your project</h3>\n<h3>Search for users who have your needed skills</h3><br>\n\n<mat-form-field class=\"example-form\">\n  <mat-label>Technical Skills</mat-label>\n  <input matInput [(ngModel)]=\"searchText\">\n</mat-form-field>\n<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <br>\n  </div>\n  <div class=\"panel-body\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <!-- <th>Last Name</th> -->\n          <th>Birthday</th>\n          <th>Technical Skills</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of userList | filter : searchText\">\n          <td>{{ user.firstName }} {{ user.lastName }}</td>\n          <!-- <td>{{ user.lastName }}</td> -->\n          <td>{{ user.dateOfBirth | date }}</td>\n          <td>{{ user.email }}</td>\n          <td><button class=\"add\" mat-raised-button color=\"primary\" \n            (click)=\"addUser(user.username)\">Recruit</button>\n        </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n<button class=\"return\" color=\"white\" mat-raised-button type=\"submit\" (click)=\"return()\">Return</button>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light mb-5\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-sitemap\"></i><h3>Projectio</h3></a>\n\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/home\"><i class=\"fa fa-home fa-lg\" ></i><br>Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/login\"><i class=\"fa fa-user-circle fa-lg\"></i><br>Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/register\"><i class=\"fa fa-user-plus fa-lg\"></i><br>Register</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container text-center\">\n  <router-outlet></router-outlet>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Start : Chat Header  -->\n<!-- <div class=\"menu\">\n    <div class=\"name\">Project Chat</div>\n</div> -->\n<!-- End : Chat Header  -->\n\n<!-- Start : Chat section  -->\n<div class=\"outer\">\n    <div class=\"container\">\n        <ol class=\"chat\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\" *ngIf=\"messageList.length > 0\">\n            <li [ngClass]=\"{'self': message.username == username , 'other': message.username != username }\" *ngFor=\"let message of messageList\">\n                <div class=\"msg\">\n                    <div class=\"user\">{{ message.username }}</div>\n                    <p> {{ message.messageBody }} </p>\n                    <time>{{ time }}</time>\n                </div>\n            </li>\n        </ol> \n    </div>\n</div>\n\n\n\n<!-- End : Chat section  -->\n\n<!-- Start : Chat Sending  -->\n<div class=\"typezone\">\n    <form class=\"example-form\">\n      <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->\n      <button mat-raised-button type=\"submit\" (click)=\"return()\"><i class=\"fa fa-caret-left fa-2x\"></i></button>\n      <mat-form-field class=\"address-form\">\n        <mat-label></mat-label>\n        <textarea matInput\n        [(ngModel)]=\"messageText\"\n        name=\"messageBody\"\n        maxlength=\"100\"\n        #messageBody \n        (keydown.enter)=\"add(messageBody.value)\">\n        </textarea>\n        <!-- <div #the-count\">\n          <span [style.color]=\"currentcolor\" #current\">{{characterCount}}</span>\n          <span [style.color]=\"maxcolor\" #maximum\">/ 100</span>\n        </div> -->\n       </mat-form-field> \n    </form>\n  </div>\n     ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createm/createm.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createm/createm.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Create new message</h3><br>\n\n    <form class=\"example-form\">\n      <mat-form-field class=\"address-form\">\n        <mat-label>Message</mat-label>\n        <input matInput type=\"text\" name=\"messageBody\" #messageBody>\n      </mat-form-field><br><br>\n\n<button class=\"btn btn-primary\" type=\"submit\" (click)=\"add(messageBody.value)\">Submit</button>\n&nbsp;\n<button class=\"btn btn-primary\" type=\"submit\" (click)=\"return()\">Return</button>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createp/createp.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createp/createp.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Create new project</h3><br>\n\n<form class=\"example-form\">\n    <mat-form-field class=\"example-form\">\n        <mat-label>name</mat-label>\n        <input matInput type=\"text\" name=\"pname\" #pname >\n      </mat-form-field>\n\n    <form class=\"example-form\">\n      <mat-form-field class=\"address-form\">\n        <mat-label>Description</mat-label>\n        <input matInput type=\"text\" name=\"description\" #description>\n      </mat-form-field><br><br>\n\n<button class=\"add\" mat-raised-button color=\"primary\" type=\"submit\" (click)=\"add(pname.value, description.value)\">Submit</button>\n&nbsp;\n<button class=\"return\" mat-raised-button mat-raised-button color=\"white\" type=\"submit\" (click)=\"return()\">Return</button>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Welcome to SPMR version 1.0</h3>\n\n    <p>Create new account/login</p>\n    <p>Create a new project</p>\n    <p>Search for talented members for projects</p>\n    <p>Project members can chat in project's channel</p>\n\n<h3>Additional features will be released in later versions!</h3>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Welcome </h3><br>\n\n<div #mydiv>\n    <form>\n        <button mat-raised-button color=\"primary\" \n        routerLinkActive=\"active\" routerLink=\"/createp\">Create project</button>&nbsp;\n        \n        <button mat-raised-button color=\"primary\"\n        routerLinkActive=\"active\" routerLink=\"/viewp\">View your projects</button>&nbsp;\n        \n        <button mat-raised-button color=\"primary\"\n        routerLinkActive=\"active\" routerLink=\"/viewacc\">View account details</button>\n    </form>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Login</h3><br>\n<form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Username</mat-label>\n      <input matInput type=\"text\" name=\"username\" #username>\n    </mat-form-field>\n    <br>\n    <mat-form-field class=\"example-full-width\">\n        <mat-label>Password</mat-label>\n        <input matInput type=\"password\" name=\"password\" #password>\n      </mat-form-field>\n  \n<br><br>\n<button class=\"add\" color=\"primary\" mat-raised-button type=\"submit\" (click)=\"login(username.value, password.value)\">Submit</button>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>We are sorry, the requested page could not be found.</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Register Account</h3><br>\n\n<form class=\"example-form\">\n    <mat-form-field class=\"example-form\">\n      <mat-label>Username</mat-label>\n      <input type=\"text\" name=\"username\" #username matInput >\n    </mat-form-field>\n    <mat-form-field class=\"example-form\">\n        <mat-label>Password</mat-label>\n        <input matInput type=\"password\" name=\"password\" #password >\n      </mat-form-field>\n\n<form class=\"example-form\">\n  <mat-form-field class=\"example-form\">\n    <mat-label>First Name</mat-label>\n    <input matInput type=\"text\" name=\"firstName\" #firstName >\n  </mat-form-field>\n  <mat-form-field class=\"example-form\">\n      <mat-label>Last Name</mat-label>\n      <input matInput type=\"text\" name=\"lastName\" #lastName >\n    </mat-form-field>\n\n\n<form class=\"example-form\">\n    <mat-form-field class=\"example-form\">\n      <mat-label>Date Of Birth</mat-label>\n      <input matInput type=\"date\" name=\"dateOfBirth\" #dateOfBirth >\n    </mat-form-field>\n\n    <form class=\"example-form\">\n      <mat-form-field class=\"address-form\">\n        <mat-label>Technical Skills</mat-label>\n        <input matInput type=\"text\" name=\"email\" #email>\n      </mat-form-field><br><br>\n\n<button class=\"add\" color=\"primary\" mat-raised-button type=\"submit\" (click)=\"add(username.value, password.value, firstName.value, lastName.value,\nemail.value, dateOfBirth.value)\">Register</button>\n&nbsp;\n<button class=\"return\" color=\"white\" mat-raised-button type=\"submit\" (click)=\"return()\">Return</button>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewacc/viewacc.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewacc/viewacc.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>Account Details</h4> \n\n<hr/>\n<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <br>\n  </div>\n  <div class=\"panel-body\">\n    <table class=\"table table-bordered table-striped\">\n      <tbody>\n        <tr>\n          <td>Name</td>\n          <td>{{user.firstName}} {{user.lastName}}</td>\n        </tr>\n        <tr>\n          <td>Username</td>\n          <td>{{user.username}}</td>\n        </tr>\n        <tr>\n          <td>Password</td>\n          <td>{{user.password}}</td>\n        </tr>\n        <tr>\n          <td>Date of Birth</td>\n          <td>{{user.dateOfBirth | date }}</td>\n        </tr>\n        <tr>\n          <td>Skills</td>\n          <td>{{user.email}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<br>\n<button class=\"return\" color=\"white\" mat-raised-button type=\"submit\" (click)=\"return()\">Return</button>\n<br><br>\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewm/viewm.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewm/viewm.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3>Project messages</h3><br>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Username</th>\n            <th>Message</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let message of messageList\">\n            <td>{{ message.username }}</td>\n            <td>{{ message.messageBody }}</td>\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <button mat-raised-button type=\"submit\" (click)=\"return()\">Return</button>\n  \n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewmember/viewmember.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewmember/viewmember.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3>Members List</h3><br>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-bordered table-striped\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Birthday</th>\n            <th>Technical Skills</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of userList\">\n            <td>{{ user.firstName }} {{ user.lastName }}</td>\n            <td>{{ user.dateOfBirth | date }}</td>\n            <td>{{ user.email }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <button class=\"return\" color=\"white\" mat-raised-button type=\"submit\" (click)=\"return()\">Return</button>\n  \n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewp/viewp.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewp/viewp.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3>Project List</h3><br>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-bordered table-hover table-striped\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let project of projectList\">\n            <td>{{ project.pname }}</td>\n            <td>{{ project.description }}</td>\n            <td><button mat-raised-button class=\"add\" color=\"primary\" \n                routerLinkActive=\"active\" (click)=\"viewChat(project.id)\">Chat</button>&nbsp;\n                <button mat-raised-button class=\"add\" color=\"primary\"\n                routerLinkActive=\"active\" (click)=\"addMembers(project.id)\">Add Members</button>&nbsp;\n                <button mat-raised-button class=\"add\" color=\"primary\"\n                routerLinkActive=\"active\" (click)=\"viewMembers(project.id)\">View Members</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <button class=\"return\" mat-raised-button color=\"white\" type=\"submit\" (click)=\"return()\">Return</button>\n  <br><br>\n\n  \n  ");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/adduser/adduser.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/adduser/adduser.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add:hover {\n    background-color: white; /* Green */\n    color: #3f51b5;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\n.return:hover {\n    background-color: white; /* Green */\n    color: #ff4081;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\nbutton {\n    font-size: 16px;\n    transition-duration: 0.4s;\n    /* vertical-align: middle; */\n    min-width: 50px;\n    min-height: 50px;\n    /* margin-left: 50px;\n    margin-right: 50px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkdXNlci9hZGR1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLGNBQWM7SUFDZCwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSx1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLGNBQWM7SUFDZCwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO3lCQUNxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FkZHVzZXIvYWRkdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICMzZjUxYjU7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbi5yZXR1cm46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBHcmVlbiAqL1xuICAgIGNvbG9yOiAjZmY0MDgxO1xuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4OyAqL1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/adduser/adduser.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/adduser/adduser.component.ts ***!
          \**********************************************/
        /*! exports provided: AdduserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function () { return AdduserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_adduser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/adduser.service */ "./src/app/services/adduser.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_createp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/createp.service */ "./src/app/services/createp.service.ts");
            var AdduserComponent = /** @class */ (function () {
                function AdduserComponent(adduserService, createpService, route, router) {
                    this.adduserService = adduserService;
                    this.createpService = createpService;
                    this.route = route;
                    this.router = router;
                }
                AdduserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.project_id = this.route.snapshot.params.id;
                    console.log(this.project_id);
                    this.adduserService.listAll()
                        .subscribe(function (userList) { return _this.userList = userList.filter(function (user) { return user.username !== localStorage.getItem('username'); }); });
                    console.log(this.userList);
                };
                AdduserComponent.prototype.addUser = function (username) {
                    var _this = this;
                    console.log("adding user...");
                    this.createpService.addUserToProject(this.project_id, username)
                        .subscribe(function () { return _this.router.navigate(['viewp']); });
                };
                AdduserComponent.prototype.return = function () {
                    this.router.navigate(['viewp']);
                };
                return AdduserComponent;
            }());
            AdduserComponent.ctorParameters = function () { return [
                { type: _services_adduser_service__WEBPACK_IMPORTED_MODULE_2__["AdduserService"] },
                { type: _services_createp_service__WEBPACK_IMPORTED_MODULE_4__["CreatepService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AdduserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-adduser',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adduser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adduser/adduser.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adduser.component.css */ "./src/app/adduser/adduser.component.css")).default]
                })
            ], AdduserComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
            /* harmony import */ var _createp_createp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createp/createp.component */ "./src/app/createp/createp.component.ts");
            /* harmony import */ var _viewp_viewp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewp/viewp.component */ "./src/app/viewp/viewp.component.ts");
            /* harmony import */ var _viewacc_viewacc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewacc/viewacc.component */ "./src/app/viewacc/viewacc.component.ts");
            /* harmony import */ var _createm_createm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createm/createm.component */ "./src/app/createm/createm.component.ts");
            /* harmony import */ var _viewm_viewm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viewm/viewm.component */ "./src/app/viewm/viewm.component.ts");
            /* harmony import */ var _viewmember_viewmember_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewmember/viewmember.component */ "./src/app/viewmember/viewmember.component.ts");
            /* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/adduser/adduser.component.ts");
            /* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            var routes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
                { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
                { path: 'createp', component: _createp_createp_component__WEBPACK_IMPORTED_MODULE_7__["CreatepComponent"] },
                { path: 'viewp', component: _viewp_viewp_component__WEBPACK_IMPORTED_MODULE_8__["ViewpComponent"] },
                { path: 'viewacc', component: _viewacc_viewacc_component__WEBPACK_IMPORTED_MODULE_9__["ViewaccComponent"] },
                { path: 'createm/:id', component: _createm_createm_component__WEBPACK_IMPORTED_MODULE_10__["CreatemComponent"] },
                { path: 'viewm/:id', component: _viewm_viewm_component__WEBPACK_IMPORTED_MODULE_11__["ViewmComponent"] },
                { path: 'adduser/:id', component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_13__["AdduserComponent"] },
                { path: 'viewmember/:id', component: _viewmember_viewmember_component__WEBPACK_IMPORTED_MODULE_12__["ViewmemberComponent"] },
                { path: 'chat/:id', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"] },
                { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'angular-routing-tutorial';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
            /* harmony import */ var angular_material_fileupload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-material-fileupload */ "./node_modules/angular-material-fileupload/matFileUpload.esm.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
            /* harmony import */ var _createp_createp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./createp/createp.component */ "./src/app/createp/createp.component.ts");
            /* harmony import */ var _viewp_viewp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewp/viewp.component */ "./src/app/viewp/viewp.component.ts");
            /* harmony import */ var _viewacc_viewacc_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./viewacc/viewacc.component */ "./src/app/viewacc/viewacc.component.ts");
            /* harmony import */ var _createm_createm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./createm/createm.component */ "./src/app/createm/createm.component.ts");
            /* harmony import */ var _viewm_viewm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./viewm/viewm.component */ "./src/app/viewm/viewm.component.ts");
            /* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/adduser/adduser.component.ts");
            /* harmony import */ var _viewmember_viewmember_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./viewmember/viewmember.component */ "./src/app/viewmember/viewmember.component.ts");
            /* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
            /* harmony import */ var _models_filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./models/filter.pipe */ "./src/app/models/filter.pipe.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                        _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"],
                        _createp_createp_component__WEBPACK_IMPORTED_MODULE_15__["CreatepComponent"],
                        _viewp_viewp_component__WEBPACK_IMPORTED_MODULE_16__["ViewpComponent"],
                        _viewacc_viewacc_component__WEBPACK_IMPORTED_MODULE_17__["ViewaccComponent"],
                        _createm_createm_component__WEBPACK_IMPORTED_MODULE_18__["CreatemComponent"],
                        _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_20__["AdduserComponent"],
                        _viewm_viewm_component__WEBPACK_IMPORTED_MODULE_19__["ViewmComponent"],
                        _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_20__["AdduserComponent"],
                        _viewmember_viewmember_component__WEBPACK_IMPORTED_MODULE_21__["ViewmemberComponent"],
                        _chat_chat_component__WEBPACK_IMPORTED_MODULE_22__["ChatComponent"],
                        _models_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterPipe"],
                        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_24__["PageNotFoundComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                        _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                        angular_material_fileupload__WEBPACK_IMPORTED_MODULE_12__["MatFileUploadModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/chat/chat.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/chat/chat.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* M E N U */\nol {\n    margin-top: 30px;\n}\n.outer {\n    margin-right: 10%;\n    margin-top: 10%;\n}\n.container {\n    width: 100%;\n}\n.menu {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    height: 50px;\n    background: rgba(27,35,42,0.9);\n    z-index: 100;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.back {\n    position: absolute;\n    width: 90px;\n    height: 50px;\n    top: 0px;\n    left: 0px;\n    color: rgba(255,255,255,0.5);\n    line-height: 45px;\n    font-size: 40px;\n    padding-left: 10px;\n    cursor: pointer;\n    transition: .15s all;\n}\n.back img {\n    position: absolute;\n    top: 5px;\n    left: 30px;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(255,255,255,0.1);\n    border-radius: 100%;\n    -webkit-border-radius: 100%;\n    -moz-border-radius: 100%;\n    -ms-border-radius: 100%;\n    margin-left: 15px;\n    }\n.back:active {\n    background: rgba(0,0,0,0.15);\n}\n.name {\n    position: absolute;\n    top: 3px;\n    left: 20px;\n    font-family: 'Lato';\n    font-size: 25px;\n    font-weight: 300;\n    color: rgba(255,255,255,0.98);\n    cursor: default;\n}\n.last {\n    position: absolute;\n    top: 30px;\n    left: 115px;\n    font-family: 'Lato';\n    font-size: 11px;\n    font-weight: 400;\n    color: rgba(255,255,255,0.6);\n    cursor: default;\n}\n.members {\n    position: absolute;\n    top: 30px;\n    left: 115px;\n    font-family: 'Lato';\n    font-size: 11px;\n    font-weight: 400;\n    color: rgba(255,255,255,0.6);\n    cursor: default;\n    word-spacing: 2px;\n}\n/* M E S S A G E S */\n.chat {\n    list-style: none;\n    background: none;\n    margin-right: 30%; \n    padding: 0 0 0 0;\n    position: absolute;\n    top:60px;\n    height: 80vh; \n    width: 100%;\n    overflow-y: scroll;\n    padding-right: 17px;\n}\n.chat li {\n    padding: 0.5rem;\n    width: 75%;\n    overflow: hidden;\n    display: flex;\n}\n.chat .day {\n    position: relative;\n    display: block;\n    text-align: center;\n    color: rgba(255,255,255,0.3);\n    height: 20px;\n    text-shadow: 7px 0px 0px #252C33, 6px 0px 0px #252C33, 5px 0px 0px #252C33, 4px 0px 0px #252C33, 3px 0px 0px #252C33, 2px 0px 0px #252C33, 1px 0px 0px #252C33, 1px 0px 0px #252C33, 0px 0px 0px #252C33, -1px 0px 0px #252C33, -2px 0px 0px #252C33, -3px 0px 0px #252C33, -4px 0px 0px #252C33, -5px 0px 0px #252C33, -6px 0px 0px #252C33, -7px 0px 0px #252C33;\n    box-shadow: inset 20px 0px 0px #252C33, inset -20px 0px 0px #252C33, inset 0px -2px 0px rgba(255,255,255,0.1);\n    line-height: 38px;\n    margin-top: 5px;\n    margin-bottom: 20px;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.chat .notification {\n    position: relative;\n    display: inherit;\n    text-align: center;\n    font-size: 13px;\n    color: rgba(255,255,255,0.15);\n    background: rgba(234, 247, 255, 0.035);\n    line-height: 30px;\n    border-radius: 100px;\n    margin: 7px 35%;\n    height: 30px;\n    width: 30%;\n    box-shadow: 0px 1px 0px rgba(0,0,0,.05), 0px -1px 0px rgba(0,0,0,.05), inset 0px 1px 0px rgba(255,255,255,.02), inset 0px -1px 0px rgba(255,255,255,.02);\n    text-shadow: 0px -1px 0px rgba(0,0,0,.1), 0px 1px 0px rgba(255,255,255,.05);\n    cursor: default;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n}\n.chat .notification time {\n    position: absolute;\n    top: 7px;\n    right: 7px;\n    font-size: 11px;\n    padding: 8px;\n    border-radius: 100px;\n    background: #252C33;\n    box-shadow: 0px 0px 2px rgba(255,255,255,.02), inset 0px 0px 1px rgba(27,35,42,0.1);\n    height: 1px;\n    line-height: 0px;\n    color: rgba(255,255,255,0.1);\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n}\n.other .msg {\n    border-top-left-radius: 0px;\n    box-shadow: -1px 2px 0px #c1cbcd;\n}\n.other:before {\n    content: \"\";\n    position: relative;\n    top: 0px;\n    right: 0px;\n    left: 0px;\n    width: 0px;\n    height: 0px;\n    border: 5px solid #eef8ff;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n}\n.self {\n    justify-content: flex-end;\n    align-items: flex-end;\n}\n.self .msg {\n    border-bottom-right-radius: 0px;\n    box-shadow: 1px 2px 0px #c1cbcd;\n}\n.self:after {\n    content: \"\";\n    position: relative;\n    display: inline-block;\n    bottom: 0px;\n    right: 0px;\n    width: 0px;\n    height: 0px;\n    border: 5px solid #eef8ff;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    box-shadow: 0px 2px 0px #c1cbcd;\n}\n.msg {\n    background: #eef8ff;\n    min-width: 50px;\n    padding: 10px;\n    border-radius: 2px;\n    word-break: break-all;\n}\n.msg .user {\n    font-size: 14px;\n    margin: 0 0 2px 0;\n    color: #666;\n    font-weight: 700;\n    margin-top: -2px;\n    margin-bottom: 5px;\n    transition: all .2s ease;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.msg .user .range.admin {\n    display: inline-block;\n    font-size: 10px;\n    font-weight: 300;\n    color: #6aea96;\n    padding: 2px;\n    border-radius: 3px;\n    border: solid 1px #6aea96;\n    background: rgba(255,255,255,0);\n    margin-left: 5px;\n}\n.msg p {\n    font-size: 13px;\n    margin: 0 0 2px 0;\n    color: #777;\n    transition: all .2s ease;\n}\n.msg img {\n    position: relative;\n    display: block;\n    width: 600px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 3px #eee;\n    transition: all .8s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n    cursor: default;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.msg time {\n    font-size: 0.7rem;\n    color: rgba(0,0,0,.35);\n    margin-top: 3px;\n    float: right;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.msg time:before{\n    content:\"\\f017\";\n    color: #ddd;\n    font-family: FontAwesome;\n    display: inline-block;\n    margin-right: 4px;\n}\nemoji{\n    display: inline-block;\n    height: 18px;\n    width: 18px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    margin-top: -7px;\n    margin-left: 2px;\n    margin-right: 2px;\n    transform: translate3d(0px, 4px, 0px);\n}\nemoji.please{background-image: url(https://imgur.com/ftowh0s.png);}\nemoji.lmao{background-image: url(https://i.imgur.com/MllSy5N.png);}\nemoji.happy{background-image: url(https://imgur.com/5WUpcPZ.png);}\nemoji.pizza{background-image: url(https://imgur.com/voEvJld.png);}\nemoji.cryalot{background-image: url(https://i.imgur.com/UUrRRo6.png);}\nemoji.books{background-image: url(https://i.imgur.com/UjZLf1R.png);}\nemoji.moai{background-image: url(https://imgur.com/uSpaYy8.png);}\nemoji.suffocated{background-image: url(https://i.imgur.com/jfTyB5F.png);}\nemoji.scream{background-image: url(https://i.imgur.com/tOLNJgg.png);}\nemoji.hearth_blue{background-image: url(https://i.imgur.com/gR9juts.png);}\nemoji.funny{background-image: url(https://i.imgur.com/qKia58V.png);}\nemoji.shit{background-image: url(https://i.imgur.com/H5Jba8r.png);}\n@-webikt-keyframes pulse {\n  from { opacity: 0; }\n  to { opacity: 0.5; }\n}\n::-webkit-scrollbar {\n    min-width: 12px;\n    width: 12px;\n    max-width: 12px;\n    min-height: 12px;\n    height: 12px;\n    max-height: 12px;\n    background: #252C33;\n    box-shadow: inset 0px 50px 0px rgba(27,35,42,0.9), inset 0px -50px 0px #eee;\n}\n::-webkit-scrollbar-thumb {\n    background: rgba(255,255,255,0.2);\n    border: none;\n    border-radius: 100px;\n    border: solid 3px #252C33;\n}\n::-webkit-scrollbar-thumb:hover {\n    background: rgba(255,255,255,0.1);\n}\n::-webkit-scrollbar-thumb:active {\n    background: rgba(255,255,255,0.1);\n}\n::-webkit-scrollbar-button {\n    display: block;\n    height: 26px;\n}\n/* T Y P E */\n.typezone{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    height: 50px;\n    z-index: 99;\n    background: #eee;\n    border: none;\n    outline: none;\n}\ntextarea, textarea:hover {\n    position: absolute;\n    bottom: 0px;\n    left: 8%;\n    right: 8%;\n    width: 80%;\n    height: 30px;\n    z-index: 100;\n    background: #fafafa;\n    border: none;\n    outline: none;\n    padding-left: 2%;\n    padding-right: 2%;\n    padding-top: 2%;\n    color: #666;\n    font-weight: 400;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n    overflow: hidden;\n    resize: none;\n    z-index: 200;\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n    transition: all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n}\ntextarea:focus {\n    height: 100px;\n    box-shadow: 0px 0px 20px rgba(0,0,0,0.3);\n}\n.emojis {\n    position: fixed;\n    display: block;\n    bottom: 0px;\n    left: 0px;\n    width: 8%;\n    height: 50px;\n    background-image: url(https://i.imgur.com/VAn5Geq.png);\n    background-repeat: no-repeat;\n    background-size: 34px 34px;\n    background-position: 45% 9px;\n    z-index: 100;\n    cursor: pointer;\n}\n.emojis:active {\n    opacity: 0.9;\n}\n.send {\n    position: fixed;\n    display: block;\n    bottom: 0px;\n    right: 0px;\n    width: 8%;\n    height: 50px;\n    border: none;\n    outline: none;\n    z-index: 100;\n    cursor: pointer;\n    background-image: url(https://i.imgur.com/VSQxJKL.png);\n    background-repeat: no-repeat;\n    background-size: 34px 34px;\n    background-position: 45% 9px;\n    background-color: rgba(255,255,255,0);\n}\n.send:active {\n    opacity: 0.85;\n}\n/* R E S P O N S I V E   C O N F I G U R A T I O N */\n@media screen and (max-width: 750px) {\n    ::-webkit-scrollbar {\n    display: none;\n    }\n    .chat{\n        margin-bottom: 55px;\n    }\n    .msg p {\n        font-size: 11px;\n    }\n    .msg .user {\n        font-size: 13px;\n    }\n    .msg img {\n        width: 300px;\n    }\n    .chat .notification {\n        font-size: 12px;\n        margin: 7px 30%;\n        width: 40%;\n    }\n    .chat .day {\n        font-size: 11px;\n    }\n    .emojis {\n        width: 25%;\n    }\n    .send {\n        width: 25%;\n    }\n    textarea {\n        left: 0px;\n        right: 0px;\n        bottom: 50px;\n        padding-left: 5%;\n        padding-right: 5%;\n        padding-top: 20px;\n        width: 90%;\n        border-radius: 0px;\n        height: 28px;\n        background: #fafafa;\n        box-shadow: none;\n        transition: all .4s cubic-bezier(0.2, -0.2, 0.2, 1.2);\n    }\n    textarea:focus {\n        height: 30vh;\n        margin-top: 30vh;\n        box-shadow: 0px -20px 20px rgba(0,0,0,0.1);\n    }\n    form:focus ~ .typezone {\n        bottom: 50vh;\n    }\n}\n@media screen and (max-width: 550px) {\n    .msg p {\n        max-width: 250px;\n    }\n    .msg img {\n        width: 200px;\n    }\n    .chat .notification {\n        font-size: 12px;\n        margin: 7px 0px;\n        width: 100%;\n        border-radius: 0px;\n    }\n    .chat .notification time {\n        right: 10px;\n    }\n}\n.logout {\n    color: white;\n    position: absolute;\n    right: 10px;\n    cursor: pointer;\n    font-family: 'Lato';\n    top: 16px;\n}\nbutton {\n    margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQjtBQUNKO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUEsb0JBQW9CO0FBRXBCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGtXQUFrVztJQUNsVyw2R0FBNkc7SUFDN0csaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVix3SkFBd0o7SUFDeEosMkVBQTJFO0lBQzNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUZBQW1GO0lBQ25GLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiw2REFBNkQ7QUFDakU7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qiw2REFBNkQ7SUFDN0QsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDO0FBQ0EsYUFBYSxvREFBb0QsQ0FBQztBQUNsRSxXQUFXLHNEQUFzRCxDQUFDO0FBQ2xFLFlBQVksb0RBQW9ELENBQUM7QUFDakUsWUFBWSxvREFBb0QsQ0FBQztBQUNqRSxjQUFjLHNEQUFzRCxDQUFDO0FBQ3JFLFlBQVksc0RBQXNELENBQUM7QUFDbkUsV0FBVyxvREFBb0QsQ0FBQztBQUNoRSxpQkFBaUIsc0RBQXNELENBQUM7QUFDeEUsYUFBYSxzREFBc0QsQ0FBQztBQUNwRSxrQkFBa0Isc0RBQXNELENBQUM7QUFDekUsWUFBWSxzREFBc0QsQ0FBQztBQUNuRSxXQUFXLHNEQUFzRCxDQUFDO0FBRWxFO0VBQ0UsT0FBTyxVQUFVLEVBQUU7RUFDbkIsS0FBSyxZQUFZLEVBQUU7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwyRUFBMkU7QUFDL0U7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUEsb0RBQW9EO0FBRXBEO0lBQ0k7SUFDQSxhQUFhO0lBQ2I7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7UUFDZixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHFEQUFxRDtJQUN6RDtJQUNBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtRQUNoQiwwQ0FBMEM7SUFDOUM7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsV0FBVztRQUNYLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE0gRSBOIFUgKi9cbm9sIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ub3V0ZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI3LDM1LDQyLDAuOSk7XG4gICAgei1pbmRleDogMTAwO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMTVzIGFsbDtcbn1cbi5iYWNrIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuLmJhY2s6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMTUpO1xufVxuLm5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45OCk7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmxhc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMTE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5tZW1iZXJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IDExNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgd29yZC1zcGFjaW5nOiAycHg7XG59XG5cbi8qIE0gRSBTIFMgQSBHIEUgUyAqL1xuXG4uY2hhdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMzAlOyBcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NjBweDtcbiAgICBoZWlnaHQ6IDgwdmg7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xufVxuLmNoYXQgbGkge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogNzUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5jaGF0IC5kYXkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDdweCAwcHggMHB4ICMyNTJDMzMsIDZweCAwcHggMHB4ICMyNTJDMzMsIDVweCAwcHggMHB4ICMyNTJDMzMsIDRweCAwcHggMHB4ICMyNTJDMzMsIDNweCAwcHggMHB4ICMyNTJDMzMsIDJweCAwcHggMHB4ICMyNTJDMzMsIDFweCAwcHggMHB4ICMyNTJDMzMsIDFweCAwcHggMHB4ICMyNTJDMzMsIDBweCAwcHggMHB4ICMyNTJDMzMsIC0xcHggMHB4IDBweCAjMjUyQzMzLCAtMnB4IDBweCAwcHggIzI1MkMzMywgLTNweCAwcHggMHB4ICMyNTJDMzMsIC00cHggMHB4IDBweCAjMjUyQzMzLCAtNXB4IDBweCAwcHggIzI1MkMzMywgLTZweCAwcHggMHB4ICMyNTJDMzMsIC03cHggMHB4IDBweCAjMjUyQzMzO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDIwcHggMHB4IDBweCAjMjUyQzMzLCBpbnNldCAtMjBweCAwcHggMHB4ICMyNTJDMzMsIGluc2V0IDBweCAtMnB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuLmNoYXQgLm5vdGlmaWNhdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjQ3LCAyNTUsIDAuMDM1KTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBtYXJnaW46IDdweCAzNSU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgwLDAsMCwuMDUpLCAwcHggLTFweCAwcHggcmdiYSgwLDAsMCwuMDUpLCBpbnNldCAwcHggMXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LC4wMiksIGluc2V0IDBweCAtMXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LC4wMik7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDBweCByZ2JhKDAsMCwwLC4xKSwgMHB4IDFweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwuMDUpO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGN1YmljLWJlemllcigwLjU2NSwgLTAuMjYwLCAwLjI1NSwgMS40MTApO1xufVxuLmNoYXQgLm5vdGlmaWNhdGlvbiB0aW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3cHg7XG4gICAgcmlnaHQ6IDdweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyNTJDMzM7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgyNTUsMjU1LDI1NSwuMDIpLCBpbnNldCAwcHggMHB4IDFweCByZ2JhKDI3LDM1LDQyLDAuMSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKDAuNTY1LCAtMC4yNjAsIDAuMjU1LCAxLjQxMCk7XG59XG5cbi5vdGhlciAubXNnIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm94LXNoYWRvdzogLTFweCAycHggMHB4ICNjMWNiY2Q7XG59XG4ub3RoZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlZWY4ZmY7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VsZiB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uc2VsZiAubXNnIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMHB4ICNjMWNiY2Q7XG59XG4uc2VsZjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZWVmOGZmO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggI2MxY2JjZDtcbn1cblxuLm1zZyB7XG4gICAgYmFja2dyb3VuZDogI2VlZjhmZjtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLm1zZyAudXNlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMCAwIDJweCAwO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuLm1zZyAudXNlciAucmFuZ2UuYWRtaW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzZhZWE5NjtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICM2YWVhOTY7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwKTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1zZyBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luOiAwIDAgMnB4IDA7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLm1zZyBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4ICNlZWU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC44cyBjdWJpYy1iZXppZXIoMC41NjUsIC0wLjI2MCwgMC4yNTUsIDEuNDEwKTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5tc2cgdGltZSB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjM1KTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5tc2cgdGltZTpiZWZvcmV7XG4gICAgY29udGVudDpcIlxcZjAxN1wiO1xuICAgIGNvbG9yOiAjZGRkO1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbmVtb2ppe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgNHB4LCAwcHgpO1xufVxuZW1vamkucGxlYXNle2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltZ3VyLmNvbS9mdG93aDBzLnBuZyk7fVxuZW1vamkubG1hb3tiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9NbGxTeTVOLnBuZyk7fVxuZW1vamkuaGFwcHl7YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1ndXIuY29tLzVXVXBjUFoucG5nKTt9XG5lbW9qaS5waXp6YXtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWd1ci5jb20vdm9FdkpsZC5wbmcpO31cbmVtb2ppLmNyeWFsb3R7YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vVVVyUlJvNi5wbmcpO31cbmVtb2ppLmJvb2tze2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kuaW1ndXIuY29tL1VqWkxmMVIucG5nKTt9XG5lbW9qaS5tb2Fpe2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltZ3VyLmNvbS91U3BhWXk4LnBuZyk7fVxuZW1vamkuc3VmZm9jYXRlZHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9qZlR5QjVGLnBuZyk7fVxuZW1vamkuc2NyZWFte2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2kuaW1ndXIuY29tL3RPTE5KZ2cucG5nKTt9XG5lbW9qaS5oZWFydGhfYmx1ZXtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9nUjlqdXRzLnBuZyk7fVxuZW1vamkuZnVubnl7YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vcUtpYTU4Vi5wbmcpO31cbmVtb2ppLnNoaXR7YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vSDVKYmE4ci5wbmcpO31cblxuQC13ZWJpa3Qta2V5ZnJhbWVzIHB1bHNlIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAwLjU7IH1cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgbWluLXdpZHRoOiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIG1heC13aWR0aDogMTJweDtcbiAgICBtaW4taGVpZ2h0OiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBtYXgtaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICMyNTJDMzM7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDUwcHggMHB4IHJnYmEoMjcsMzUsNDIsMC45KSwgaW5zZXQgMHB4IC01MHB4IDBweCAjZWVlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlcjogc29saWQgM3B4ICMyNTJDMzM7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMjZweDtcbn1cblxuLyogVCBZIFAgRSAqL1xuLnR5cGV6b25le1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogOTk7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbnRleHRhcmVhLCB0ZXh0YXJlYTpob3ZlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDglO1xuICAgIHJpZ2h0OiA4JTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgei1pbmRleDogMjAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoMC41NjUsIC0wLjI2MCwgMC4yNTUsIDEuNDEwKTtcbn1cbnRleHRhcmVhOmZvY3VzIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsMCwwLDAuMyk7XG59XG4uZW1vamlzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiA4JTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vVkFuNUdlcS5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzNHB4IDM0cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDlweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVtb2ppczphY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuOTtcbn1cbi5zZW5kIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogOCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vVlNReEpLTC5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzNHB4IDM0cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xufVxuLnNlbmQ6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjg1O1xufVxuXG4vKiBSIEUgUyBQIE8gTiBTIEkgViBFICAgQyBPIE4gRiBJIEcgVSBSIEEgVCBJIE8gTiAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jaGF0e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgIH1cbiAgICAubXNnIHAge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICAgIC5tc2cgLnVzZXIge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC5tc2cgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgICAuY2hhdCAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDdweCAzMCU7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuICAgIC5jaGF0IC5kYXkge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICAgIC5lbW9qaXMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbiAgICAuc2VuZCB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKDAuMiwgLTAuMiwgMC4yLCAxLjIpO1xuICAgIH1cbiAgICB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzB2aDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IC0yMHB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cbiAgICBmb3JtOmZvY3VzIH4gLnR5cGV6b25lIHtcbiAgICAgICAgYm90dG9tOiA1MHZoO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgLm1zZyBwIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICB9XG4gICAgLm1zZyBpbWcge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgfVxuICAgIC5jaGF0IC5ub3RpZmljYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbjogN3B4IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG4gICAgLmNoYXQgLm5vdGlmaWNhdGlvbiB0aW1lIHtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuXG4ubG9nb3V0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIHRvcDogMTZweDtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/chat/chat.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/chat/chat.component.ts ***!
          \****************************************/
        /*! exports provided: ChatComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function () { return ChatComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/message */ "./src/app/models/message.ts");
            /* harmony import */ var _services_createm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/createm.service */ "./src/app/services/createm.service.ts");
            /* harmony import */ var _services_viewm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/viewm.service */ "./src/app/services/viewm.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var ChatComponent = /** @class */ (function () {
                function ChatComponent(viewmService, createmService, route, router, _location) {
                    this.viewmService = viewmService;
                    this.createmService = createmService;
                    this.route = route;
                    this.router = router;
                    this._location = _location;
                    this.message_id = 1;
                    this.username = localStorage.getItem('username');
                    this.nd = new Date();
                    this.time = this.nd.getHours() + ":" + this.nd.getMinutes();
                    this.alive = true;
                }
                // characterCount: number;
                // current: number;
                // maximum: number;
                // theCount: number;
                // currentcolor: string;
                // maxcolor: string;
                // onKey(event: any) {
                //   this.characterCount = event.target.val.length;
                //   /*This isn't entirely necessary, just playin around*/
                //   if (this.characterCount < 70) {
                //     this.currentcolor = '#666';
                //   }
                //   if (this.characterCount > 70 && this.characterCount < 90) {
                //     this.currentcolor = '#6d5555';
                //   }
                //   if (this.characterCount > 90 && this.characterCount < 100) {
                //     this.currentcolor = '#793535';
                //   }
                //   if (this.characterCount > 100 && this.characterCount < 120) {
                //     this.currentcolor = '#841c1c';
                //   }
                //   if (this.characterCount > 120 && this.characterCount < 139) {
                //     this.currentcolor = '#8f0001';
                //   }
                //   if (this.characterCount >= 140) {
                //     this.maxcolor = '#8f0001';
                //     this.currentcolor = '#8f0001';
                //   } else {
                //     this.maxcolor = '#666';
                //   }
                // }
                ChatComponent.prototype.add = function (messageBody) {
                    var _this = this;
                    var newMessage = new _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"](this.message_id, messageBody, this.project_id, localStorage.getItem('username'));
                    this.createmService.addMessage(newMessage)
                        .subscribe(function (response) {
                        _this.viewmService.listMessages(_this.project_id).subscribe(function (messageList) { return _this.messageList = messageList; });
                    });
                };
                ChatComponent.prototype.return = function () {
                    this._location.back();
                    //this.router.navigate(['viewp']);
                };
                ChatComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.project_id = this.route.snapshot.params.id;
                    this.viewmService.listMessages(this.project_id).subscribe(function (messageList) { return _this.messageList = messageList; });
                    this.interval = setInterval(function () {
                        _this.viewmService.listMessages(_this.project_id).subscribe(function (messageList) { return _this.messageList = messageList; });
                    }, 1000);
                };
                ChatComponent.prototype.ngOnDestroy = function () {
                    this.alive = false; // switches your IntervalObservable off
                };
                return ChatComponent;
            }());
            ChatComponent.ctorParameters = function () { return [
                { type: _services_viewm_service__WEBPACK_IMPORTED_MODULE_4__["ViewmService"] },
                { type: _services_createm_service__WEBPACK_IMPORTED_MODULE_3__["CreatemService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ChatComponent.prototype, "messageList", void 0);
            ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chat',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")).default]
                })
            ], ChatComponent);
            /***/ 
        }),
        /***/ "./src/app/createm/createm.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/createm/createm.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZW0vY3JlYXRlbS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/createm/createm.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/createm/createm.component.ts ***!
          \**********************************************/
        /*! exports provided: CreatemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatemComponent", function () { return CreatemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/message */ "./src/app/models/message.ts");
            /* harmony import */ var _services_createm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/createm.service */ "./src/app/services/createm.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CreatemComponent = /** @class */ (function () {
                function CreatemComponent(createmService, route, router) {
                    this.createmService = createmService;
                    this.route = route;
                    this.router = router;
                    this.message_id = 1;
                }
                CreatemComponent.prototype.add = function (messageBody) {
                    var newMessage = new _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"](this.message_id, messageBody, this.project_id, localStorage.getItem('username'));
                    this.createmService.addMessage(newMessage)
                        .subscribe();
                };
                CreatemComponent.prototype.return = function () {
                    this.router.navigate(['viewp']);
                };
                CreatemComponent.prototype.ngOnInit = function () {
                    this.project_id = this.route.snapshot.params['id'];
                };
                return CreatemComponent;
            }());
            CreatemComponent.ctorParameters = function () { return [
                { type: _services_createm_service__WEBPACK_IMPORTED_MODULE_3__["CreatemService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            CreatemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-createm',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createm/createm.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createm.component.css */ "./src/app/createm/createm.component.css")).default]
                })
            ], CreatemComponent);
            /***/ 
        }),
        /***/ "./src/app/createp/createp.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/createp/createp.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add:hover {\n    background-color: white; /* Green */\n    color: #3f51b5;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\n.return:hover {\n    background-color: white; /* Green */\n    color: #ff4081;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\nbutton {\n    font-size: 16px;\n    transition-duration: 0.4s;\n    /* vertical-align: middle; */\n    min-width: 50px;\n    min-height: 50px;\n    /* margin-left: 50px;\n    margin-right: 50px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcC9jcmVhdGVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLGNBQWM7SUFDZCwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSx1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLGNBQWM7SUFDZCwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO3lCQUNxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXAvY3JlYXRlcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICMzZjUxYjU7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbi5yZXR1cm46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBHcmVlbiAqL1xuICAgIGNvbG9yOiAjZmY0MDgxO1xuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4OyAqL1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/createp/createp.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/createp/createp.component.ts ***!
          \**********************************************/
        /*! exports provided: CreatepComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepComponent", function () { return CreatepComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/project */ "./src/app/models/project.ts");
            /* harmony import */ var _services_createp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/createp.service */ "./src/app/services/createp.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CreatepComponent = /** @class */ (function () {
                function CreatepComponent(createpService, route, router) {
                    this.createpService = createpService;
                    this.route = route;
                    this.router = router;
                    this.id = 1;
                }
                CreatepComponent.prototype.add = function (pname, description) {
                    var _this = this;
                    var newProject = new _models_project__WEBPACK_IMPORTED_MODULE_2__["Project"](this.id, pname, description);
                    this.createpService.addProject(newProject)
                        .subscribe(function (project) {
                        _this.project = project;
                        _this.createpService.addUserToProject(project.id, localStorage.getItem('username')).subscribe();
                        localStorage.setItem('projectid', project.id.toString());
                        console.log(project);
                        _this.router.navigate(['landing']);
                    }, function (err) {
                        alert('Something went wrong!');
                    });
                };
                CreatepComponent.prototype.return = function () {
                    this.router.navigate(['landing']);
                };
                CreatepComponent.prototype.ngOnInit = function () {
                };
                return CreatepComponent;
            }());
            CreatepComponent.ctorParameters = function () { return [
                { type: _services_createp_service__WEBPACK_IMPORTED_MODULE_3__["CreatepService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            CreatepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-createp',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createp/createp.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createp.component.css */ "./src/app/createp/createp.component.css")).default]
                })
            ], CreatepComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/landing/landing.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/landing/landing.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("button:hover {\n    background-color: white; /* Green */\n    color: #3f51b5;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\nform {\n    min-height: 500px;\n    line-height: 300px;\n}\n\nform button {\n    font-size: 20px;\n    transition-duration: 0.4s;\n    vertical-align: middle;\n    min-width: 180px;\n    min-height: 100px;\n    width: 25%;\n    margin-left: 50px;\n    margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLGNBQWM7SUFDZCwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogR3JlZW4gKi9cbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbn1cblxuZm9ybSB7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwMHB4O1xufVxuZm9ybSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/landing/landing.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/landing/landing.component.ts ***!
          \**********************************************/
        /*! exports provided: LandingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function () { return LandingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LandingComponent = /** @class */ (function () {
                function LandingComponent() {
                }
                return LandingComponent;
            }());
            LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-landing',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")).default]
                })
            ], LandingComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add:hover {\n    background-color: white; /* Green */\n    color: #3f51b5;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\nbutton {\n    font-size: 16px;\n    transition-duration: 0.4s;\n    /* vertical-align: middle; */\n    min-width: 50px;\n    min-height: 50px;\n    margin-left: 20px;\n    margin-right: 20px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QixFQUFFLFVBQVU7SUFDbkMsY0FBYztJQUNkLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogR3JlZW4gKi9cbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDsgXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_loginUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/loginUser */ "./src/app/models/loginUser.ts");
            /* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(loginService, route, router) {
                    this.loginService = loginService;
                    this.route = route;
                    this.router = router;
                    this.success = '';
                }
                LoginComponent.prototype.login = function (username, password) {
                    var _this = this;
                    var newloginUser = new _models_loginUser__WEBPACK_IMPORTED_MODULE_2__["loginUser"](username, password);
                    this.loginService.login(newloginUser)
                        .subscribe(function (user) {
                        _this.user = user;
                        console.log(_this.user);
                        localStorage.setItem('username', user.username);
                        console.log(localStorage.getItem('username'));
                        _this.router.navigate(['landing']);
                    }, function (err) {
                        alert('Wrong credentials');
                    });
                };
                LoginComponent.prototype.ngOnInit = function () { };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/material.module.ts": 
        /*!************************************!*\
          !*** ./src/app/material.module.ts ***!
          \************************************/
        /*! exports provided: mapMaterialModules, MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMaterialModules", function () { return mapMaterialModules; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            function mapMaterialModules() {
                return Object.keys(_angular_material__WEBPACK_IMPORTED_MODULE_2__).filter(function (k) {
                    var asset = _angular_material__WEBPACK_IMPORTED_MODULE_2__[k];
                    return typeof asset == 'function'
                        && asset.name.startsWith('Mat')
                        && asset.name.includes('Module');
                }).map(function (k) { return _angular_material__WEBPACK_IMPORTED_MODULE_2__[k]; });
            }
            var modules = mapMaterialModules();
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
            MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: modules,
                    exports: modules
                })
            ], MaterialModule);
            /***/ 
        }),
        /***/ "./src/app/models/filter.pipe.ts": 
        /*!***************************************!*\
          !*** ./src/app/models/filter.pipe.ts ***!
          \***************************************/
        /*! exports provided: FilterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function () { return FilterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterPipe = /** @class */ (function () {
                function FilterPipe() {
                }
                FilterPipe.prototype.transform = function (value) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    console.log(args);
                    if (!args[0]) {
                        return value;
                    }
                    var searchValue = args[0].toLowerCase();
                    return value.filter(function (user) {
                        if (user.email.toLowerCase().includes(searchValue)) {
                            return true;
                        }
                        return false;
                    });
                };
                return FilterPipe;
            }());
            FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'filter'
                })
            ], FilterPipe);
            /***/ 
        }),
        /***/ "./src/app/models/loginUser.ts": 
        /*!*************************************!*\
          !*** ./src/app/models/loginUser.ts ***!
          \*************************************/
        /*! exports provided: loginUser */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function () { return loginUser; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var loginUser = /** @class */ (function () {
                function loginUser(username, password) {
                    this.username = username;
                    this.password = password;
                }
                loginUser.prototype.getUsername = function () {
                    return this.username;
                };
                loginUser.prototype.getPassword = function () {
                    return this.password;
                };
                loginUser.prototype.setUsername = function (username) {
                    this.username = username;
                };
                loginUser.prototype.setPassword = function (password) {
                    this.password = password;
                };
                return loginUser;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/message.ts": 
        /*!***********************************!*\
          !*** ./src/app/models/message.ts ***!
          \***********************************/
        /*! exports provided: Message */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function () { return Message; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Message = /** @class */ (function () {
                function Message(message_id, messageBody, project_id, username) {
                    this.message_id = message_id;
                    this.messageBody = messageBody;
                    this.project_id = project_id;
                    this.username = username;
                }
                Message.prototype.getMessage_id = function () {
                    return this.message_id;
                };
                Message.prototype.getMessageBody = function () {
                    return this.messageBody;
                };
                Message.prototype.getProject_id = function () {
                    return this.project_id;
                };
                Message.prototype.getUsername = function () {
                    return this.username;
                };
                Message.prototype.setMessage_id = function (message_id) {
                    this.message_id = message_id;
                };
                Message.prototype.setMessageBody = function (messageBody) {
                    this.messageBody = messageBody;
                };
                Message.prototype.setProject_id = function (project_id) {
                    this.project_id = project_id;
                };
                Message.prototype.setUsername = function (username) {
                    this.username = username;
                };
                return Message;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/project.ts": 
        /*!***********************************!*\
          !*** ./src/app/models/project.ts ***!
          \***********************************/
        /*! exports provided: Project */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function () { return Project; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Project = /** @class */ (function () {
                function Project(id, pname, description) {
                    this.id = id;
                    this.pname = pname;
                    this.description = description;
                }
                Project.prototype.getId = function () {
                    return this.id;
                };
                Project.prototype.getPname = function () {
                    return this.pname;
                };
                Project.prototype.getDescription = function () {
                    return this.description;
                };
                Project.prototype.setId = function (id) {
                    this.id = id;
                };
                Project.prototype.setPname = function (pname) {
                    this.pname = pname;
                };
                Project.prototype.setDescription = function (description) {
                    this.description = description;
                };
                return Project;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/user.ts": 
        /*!********************************!*\
          !*** ./src/app/models/user.ts ***!
          \********************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User(username, password, firstName, lastName, email, dateOfBirth) {
                    this.username = username;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.dateOfBirth = dateOfBirth;
                }
                User.prototype.getUsername = function () {
                    return this.username;
                };
                User.prototype.getPassword = function () {
                    return this.password;
                };
                User.prototype.getFirstName = function () {
                    return this.firstName;
                };
                User.prototype.getLastName = function () {
                    return this.lastName;
                };
                User.prototype.getEmail = function () {
                    return this.email;
                };
                User.prototype.getDateOfBirth = function () {
                    return this.dateOfBirth;
                };
                User.prototype.setUsername = function (username) {
                    this.username = username;
                };
                User.prototype.setPassword = function (password) {
                    this.password = password;
                };
                User.prototype.setFirstName = function (firstName) {
                    this.firstName = firstName;
                };
                User.prototype.setLastName = function (lastName) {
                    this.lastName = lastName;
                };
                User.prototype.setEmail = function (email) {
                    this.email = email;
                };
                User.prototype.setDateOfBirth = function (dateOfBirth) {
                    this.dateOfBirth = dateOfBirth;
                };
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent(route, router) {
                    this.route = route;
                    this.router = router;
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['login']);
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/register/register.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/register/register.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add:hover {\n    background-color: white; /* Green */\n    color: #3f51b5;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\n.return:hover {\n    background-color: white; /* Green */\n    color: #ff4081;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\nbutton {\n    font-size: 16px;\n    transition-duration: 0.4s;\n    /* vertical-align: middle; */\n    min-width: 50px;\n    min-height: 50px;\n    margin-left: 20px;\n    margin-right: 20px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QixFQUFFLFVBQVU7SUFDbkMsY0FBYztJQUNkLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLHVCQUF1QixFQUFFLFVBQVU7SUFDbkMsY0FBYztJQUNkLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogR3JlZW4gKi9cbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbn1cblxuLnJldHVybjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICNmZjQwODE7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IFxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/register/register.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
            /* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(registerService, route, router) {
                    this.registerService = registerService;
                    this.route = route;
                    this.router = router;
                }
                RegisterComponent.prototype.add = function (username, password, firstName, lastName, email, dateOfBirth) {
                    var _this = this;
                    var newUser = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](username, password, firstName, lastName, email, dateOfBirth);
                    this.registerService.addUser(newUser)
                        .subscribe(function (response) {
                        _this.router.navigate(['login']);
                    });
                };
                RegisterComponent.prototype.ngOnInit = function () {
                };
                RegisterComponent.prototype.return = function () {
                    this.router.navigate(['login']);
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/services/adduser.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/adduser.service.ts ***!
          \*********************************************/
        /*! exports provided: AdduserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserService", function () { return AdduserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AdduserService = /** @class */ (function () {
                function AdduserService(http) {
                    this.http = http;
                    this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + 'alluser';
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                AdduserService.prototype.listAll = function () {
                    return this.http.get(this.URL);
                };
                return AdduserService;
            }());
            AdduserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            AdduserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdduserService);
            /***/ 
        }),
        /***/ "./src/app/services/createm.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/createm.service.ts ***!
          \*********************************************/
        /*! exports provided: CreatemService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatemService", function () { return CreatemService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var CreatemService = /** @class */ (function () {
                function CreatemService(http) {
                    this.http = http;
                    this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + 'message';
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                CreatemService.prototype.addMessage = function (message) {
                    console.log(message);
                    return this.http.post(this.URL + '/?message_id=' + message.message_id +
                        '&messageBody=' + message.messageBody + '&project_id=' + message.project_id +
                        '&username=' + message.username, {});
                };
                return CreatemService;
            }());
            CreatemService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CreatemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CreatemService);
            /***/ 
        }),
        /***/ "./src/app/services/createp.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/createp.service.ts ***!
          \*********************************************/
        /*! exports provided: CreatepService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepService", function () { return CreatepService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var CreatepService = /** @class */ (function () {
                function CreatepService(http) {
                    this.http = http;
                    this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + 'project';
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                CreatepService.prototype.addProject = function (project) {
                    console.log(project);
                    return this.http.post(this.URL, project);
                };
                CreatepService.prototype.addUserToProject = function (id, username) {
                    return this.http.post(this.URL + '/user?' + 'id=' + id + '&username=' + username, {});
                };
                return CreatepService;
            }());
            CreatepService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CreatepService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CreatepService);
            /***/ 
        }),
        /***/ "./src/app/services/login.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/login.service.ts ***!
          \*******************************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var LoginService = /** @class */ (function () {
                function LoginService(http) {
                    this.http = http;
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                    this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + 'login';
                }
                //   const options = {
                //     headers: headers,
                //     observe: "response" as 'body', // to display the full response & as 'body' for type cast
                //     responseType: "json"
                // };
                LoginService.prototype.login = function (LoginUser) {
                    console.log(LoginUser);
                    return this.http.post(this.URL, LoginUser);
                };
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoginService);
            /***/ 
        }),
        /***/ "./src/app/services/register.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/register.service.ts ***!
          \**********************************************/
        /*! exports provided: RegisterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function () { return RegisterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var RegisterService = /** @class */ (function () {
                function RegisterService(http) {
                    this.http = http;
                    this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + 'register'; // URL to web api
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                RegisterService.prototype.addUser = function (user) {
                    console.log(user);
                    return this.http.post(this.URL, user);
                };
                return RegisterService;
            }());
            RegisterService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RegisterService);
            /***/ 
        }),
        /***/ "./src/app/services/viewacc.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/viewacc.service.ts ***!
          \*********************************************/
        /*! exports provided: ViewaccService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewaccService", function () { return ViewaccService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var ViewaccService = /** @class */ (function () {
                function ViewaccService(http) {
                    this.http = http;
                    this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + 'user';
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                ViewaccService.prototype.viewUser = function (username) {
                    return this.http.get(this.URL + '?username=' + username, {});
                };
                return ViewaccService;
            }());
            ViewaccService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ViewaccService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ViewaccService);
            /***/ 
        }),
        /***/ "./src/app/services/viewm.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/viewm.service.ts ***!
          \*******************************************/
        /*! exports provided: ViewmService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmService", function () { return ViewmService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ViewmService = /** @class */ (function () {
                function ViewmService(http) {
                    this.http = http;
                    this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + "/message/project";
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                ViewmService.prototype.listMessages = function (project_id) {
                    return this.http.get(this.URL + '/?project_id=' + project_id);
                };
                return ViewmService;
            }());
            ViewmService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            ViewmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ViewmService);
            /***/ 
        }),
        /***/ "./src/app/services/viewmember.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/viewmember.service.ts ***!
          \************************************************/
        /*! exports provided: ViewmemberService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmemberService", function () { return ViewmemberService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ViewmemberService = /** @class */ (function () {
                function ViewmemberService(http) {
                    this.http = http;
                    this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + "/user/project";
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                ViewmemberService.prototype.listMembers = function (project_id) {
                    return this.http.get(this.URL + '/?project_id=' + project_id);
                };
                return ViewmemberService;
            }());
            ViewmemberService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            ViewmemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ViewmemberService);
            /***/ 
        }),
        /***/ "./src/app/services/viewp.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/viewp.service.ts ***!
          \*******************************************/
        /*! exports provided: ViewpService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpService", function () { return ViewpService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ViewpService = /** @class */ (function () {
                function ViewpService(http) {
                    this.http = http;
                    this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + "/project/user"; // URL to web api
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
                    };
                }
                ViewpService.prototype.listProjects = function () {
                    return this.http.get(this.URL + '?username=' + localStorage.getItem('username'));
                };
                return ViewpService;
            }());
            ViewpService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            ViewpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ViewpService);
            /***/ 
        }),
        /***/ "./src/app/viewacc/viewacc.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/viewacc/viewacc.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".return:hover {\n    background-color: white; /* Green */\n    color: #ff4081;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\nbutton {\n    font-size: 16px;\n    transition-duration: 0.4s;\n    /* vertical-align: middle; */\n    min-width: 50px;\n    min-height: 50px;\n    /* margin-left: 50px;\n    margin-right: 50px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2FjYy92aWV3YWNjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLGNBQWM7SUFDZCwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO3lCQUNxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdhY2Mvdmlld2FjYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldHVybjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICNmZjQwODE7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICAvKiBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7ICovXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/viewacc/viewacc.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/viewacc/viewacc.component.ts ***!
          \**********************************************/
        /*! exports provided: ViewaccComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewaccComponent", function () { return ViewaccComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_viewacc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/viewacc.service */ "./src/app/services/viewacc.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ViewaccComponent = /** @class */ (function () {
                function ViewaccComponent(viewaccService, route, router) {
                    this.viewaccService = viewaccService;
                    this.route = route;
                    this.router = router;
                }
                ViewaccComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.viewaccService.viewUser(localStorage.getItem('username')).subscribe(function (user) { return _this.user = user; });
                };
                ViewaccComponent.prototype.return = function () {
                    this.router.navigate(['landing']);
                    //window.location.href = '/landing';
                };
                return ViewaccComponent;
            }());
            ViewaccComponent.ctorParameters = function () { return [
                { type: _services_viewacc_service__WEBPACK_IMPORTED_MODULE_2__["ViewaccService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ViewaccComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-viewacc',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewacc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewacc/viewacc.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewacc.component.css */ "./src/app/viewacc/viewacc.component.css")).default]
                })
            ], ViewaccComponent);
            /***/ 
        }),
        /***/ "./src/app/viewm/viewm.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/viewm/viewm.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdtL3ZpZXdtLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/viewm/viewm.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/viewm/viewm.component.ts ***!
          \******************************************/
        /*! exports provided: ViewmComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmComponent", function () { return ViewmComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_viewm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/viewm.service */ "./src/app/services/viewm.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ViewmComponent = /** @class */ (function () {
                function ViewmComponent(viewmService, route, router) {
                    this.viewmService = viewmService;
                    this.route = route;
                    this.router = router;
                }
                ViewmComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.project_id = this.route.snapshot.params.id;
                    console.log(this.project_id);
                    this.viewmService.listMessages(this.project_id).subscribe(function (messageList) { return _this.messageList = messageList; });
                    console.log(this.messageList);
                };
                ViewmComponent.prototype.return = function () {
                    this.router.navigate(['viewp']);
                    //window.location.href = '/viewp';
                };
                return ViewmComponent;
            }());
            ViewmComponent.ctorParameters = function () { return [
                { type: _services_viewm_service__WEBPACK_IMPORTED_MODULE_2__["ViewmService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ViewmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-viewm',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewm/viewm.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewm.component.css */ "./src/app/viewm/viewm.component.css")).default]
                })
            ], ViewmComponent);
            /***/ 
        }),
        /***/ "./src/app/viewmember/viewmember.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/viewmember/viewmember.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".return:hover {\n    background-color: white; /* Green */\n    color: #ff4081;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\nbutton {\n    font-size: 16px;\n    transition-duration: 0.4s;\n    /* vertical-align: middle; */\n    min-width: 50px;\n    min-height: 50px;\n    /* margin-left: 50px;\n    margin-right: 50px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld21lbWJlci92aWV3bWVtYmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLGNBQWM7SUFDZCwwRUFBMEU7QUFDOUU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO3lCQUNxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdtZW1iZXIvdmlld21lbWJlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldHVybjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICNmZjQwODE7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICAvKiBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7ICovXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/viewmember/viewmember.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/viewmember/viewmember.component.ts ***!
          \****************************************************/
        /*! exports provided: ViewmemberComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmemberComponent", function () { return ViewmemberComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_viewmember_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/viewmember.service */ "./src/app/services/viewmember.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ViewmemberComponent = /** @class */ (function () {
                function ViewmemberComponent(viewmemberService, route, router) {
                    this.viewmemberService = viewmemberService;
                    this.route = route;
                    this.router = router;
                }
                ViewmemberComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.project_id = this.route.snapshot.params.id;
                    console.log(this.project_id);
                    this.viewmemberService.listMembers(this.project_id).subscribe(function (userList) { return _this.userList = userList; });
                    console.log(this.userList);
                };
                ViewmemberComponent.prototype.return = function () {
                    this.router.navigate(['viewp']);
                };
                return ViewmemberComponent;
            }());
            ViewmemberComponent.ctorParameters = function () { return [
                { type: _services_viewmember_service__WEBPACK_IMPORTED_MODULE_2__["ViewmemberService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ViewmemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-viewmember',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewmember.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewmember/viewmember.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewmember.component.css */ "./src/app/viewmember/viewmember.component.css")).default]
                })
            ], ViewmemberComponent);
            /***/ 
        }),
        /***/ "./src/app/viewp/viewp.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/viewp/viewp.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add:hover {\n    background-color: white; /* Green */\n    color: #3f51b5;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\n.return:hover {\n    background-color: white; /* Green */\n    color: #ff4081;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\nbutton {\n    font-size: 16px;\n    transition-duration: 0.4s;\n    /* vertical-align: middle; */\n    width: 150px;\n    min-height: 50px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    /* margin-left: 20px;\n    margin-right: 20px;  */\n}\n\ntd {\n    text-align: center;\n    vertical-align: middle;\n    word-wrap: break-word;\n    min-width: 160px;\n    max-width: 160px;\n}\n\n@media (max-width: 550px) { \n\n    button {\n        font-size: 14px;\n        transition-duration: 0.4s;\n        /* vertical-align: middle; */\n        width: 105px;\n        min-height: 50px;\n        margin-top: 10px;\n        margin-bottom: 10px;\n        white-space: normal;\n        /* margin-left: 20px;\n        margin-right: 20px;  */\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Avdmlld3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QixFQUFFLFVBQVU7SUFDbkMsY0FBYztJQUNkLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLHVCQUF1QixFQUFFLFVBQVU7SUFDbkMsY0FBYztJQUNkLDBFQUEwRTtBQUM5RTs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQjswQkFDc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQjs4QkFDc0I7SUFDMUI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC92aWV3cC92aWV3cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICMzZjUxYjU7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XG59XG5cbi5yZXR1cm46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBHcmVlbiAqL1xuICAgIGNvbG9yOiAjZmY0MDgxO1xuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDsgICovXG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHsgXG5cbiAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG4gICAgICAgIHdpZHRoOiAxMDVweDtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgICovXG4gICAgfVxuXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/viewp/viewp.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/viewp/viewp.component.ts ***!
          \******************************************/
        /*! exports provided: ViewpComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpComponent", function () { return ViewpComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_viewp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/viewp.service */ "./src/app/services/viewp.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ViewpComponent = /** @class */ (function () {
                function ViewpComponent(viewpService, route, router) {
                    this.viewpService = viewpService;
                    this.route = route;
                    this.router = router;
                }
                ViewpComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.viewpService.listProjects().subscribe(function (projectList) { return _this.projectList = projectList; });
                    console.log(this.projectList);
                };
                ViewpComponent.prototype.viewChat = function (project_id) {
                    this.router.navigate(['chat', project_id]);
                };
                // tslint:disable-next-line: variable-name
                ViewpComponent.prototype.addMembers = function (project_id) {
                    this.router.navigate(['adduser', project_id]);
                };
                // tslint:disable-next-line: variable-name
                ViewpComponent.prototype.viewMembers = function (project_id) {
                    this.router.navigate(['viewmember', project_id]);
                };
                ViewpComponent.prototype.return = function () {
                    this.router.navigate(['landing']);
                };
                return ViewpComponent;
            }());
            ViewpComponent.ctorParameters = function () { return [
                { type: _services_viewp_service__WEBPACK_IMPORTED_MODULE_2__["ViewpService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ViewpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-viewp',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewp/viewp.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewp.component.css */ "./src/app/viewp/viewp.component.css")).default]
                })
            ], ViewpComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                endpoint: "http://ec2-3-87-73-148.compute-1.amazonaws.com:8080/"
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/bitch/Documents/GitHub/spmr-p2/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map