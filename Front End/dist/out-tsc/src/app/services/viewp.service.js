import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
let ViewpService = class ViewpService {
    constructor(http) {
        this.http = http;
        this.URL = environment.endpoint + `/project/user`; // URL to web api
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    listProjects() {
        return this.http.get(this.URL + '?username=' + localStorage.getItem('username'));
    }
};
ViewpService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ViewpService);
export { ViewpService };
//# sourceMappingURL=viewp.service.js.map