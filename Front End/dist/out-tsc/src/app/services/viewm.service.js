import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
let ViewmService = class ViewmService {
    constructor(http) {
        this.http = http;
        this.URL = environment.endpoint + `/message/project`;
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    listMessages(project_id) {
        return this.http.get(this.URL + '/?project_id=' + project_id);
    }
};
ViewmService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ViewmService);
export { ViewmService };
//# sourceMappingURL=viewm.service.js.map