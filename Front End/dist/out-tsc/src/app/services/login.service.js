import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.URL = environment.endpoint + 'login';
    }
    //   const options = {
    //     headers: headers,
    //     observe: "response" as 'body', // to display the full response & as 'body' for type cast
    //     responseType: "json"
    // };
    login(LoginUser) {
        console.log(LoginUser);
        return this.http.post(this.URL, LoginUser);
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map