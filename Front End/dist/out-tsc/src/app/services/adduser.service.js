import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
let AdduserService = class AdduserService {
    constructor(http) {
        this.http = http;
        this.URL = environment.endpoint + 'alluser';
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    listAll() {
        return this.http.get(this.URL);
    }
};
AdduserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AdduserService);
export { AdduserService };
//# sourceMappingURL=adduser.service.js.map