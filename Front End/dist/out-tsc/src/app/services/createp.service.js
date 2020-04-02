import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
let CreatepService = class CreatepService {
    constructor(http) {
        this.http = http;
        this.URL = environment.endpoint + 'project';
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    addProject(project) {
        console.log(project);
        return this.http.post(this.URL, project);
    }
    addUserToProject(id, username) {
        return this.http.post(this.URL + '/user?' + 'id=' + id + '&username=' + username, {});
    }
};
CreatepService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CreatepService);
export { CreatepService };
//# sourceMappingURL=createp.service.js.map