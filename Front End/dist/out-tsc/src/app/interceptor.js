import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
let Interceptor = class Interceptor {
    constructor() { }
    intercept(request, next) {
        if (localStorage.getItem('access-token') != null) {
            const token = localStorage.getItem('access-token');
            // if the token is  stored in localstorage add it to http header
            const headers = new HttpHeaders().set('access-token', token);
            // clone http to the custom AuthRequest and send it to the server
            const AuthRequest = request.clone({ headers });
            return next.handle(AuthRequest);
        }
        else {
            return next.handle(request);
        }
    }
};
Interceptor = tslib_1.__decorate([
    Injectable()
], Interceptor);
export { Interceptor };
//# sourceMappingURL=interceptor.js.map