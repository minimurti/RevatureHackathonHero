import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
        this.URL = environment.endpoint + 'register'; // URL to web api
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    addUser(user) {
        console.log(user);
        return this.http.post(this.URL, user);
    }
};
RegisterService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], RegisterService);
export { RegisterService };
//# sourceMappingURL=register.service.js.map