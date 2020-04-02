import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
let ViewmemberService = class ViewmemberService {
    constructor(http) {
        this.http = http;
        this.URL = environment.endpoint + `/user/project`;
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    listMembers(project_id) {
        return this.http.get(this.URL + '/?project_id=' + project_id);
    }
};
ViewmemberService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ViewmemberService);
export { ViewmemberService };
//# sourceMappingURL=viewmember.service.js.map