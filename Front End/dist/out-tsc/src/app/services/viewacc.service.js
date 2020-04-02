import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
let ViewaccService = class ViewaccService {
    constructor(http) {
        this.http = http;
        this.URL = environment.endpoint + 'user';
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    viewUser(username) {
        return this.http.get(this.URL + '?username=' + username, {});
    }
};
ViewaccService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ViewaccService);
export { ViewaccService };
//# sourceMappingURL=viewacc.service.js.map