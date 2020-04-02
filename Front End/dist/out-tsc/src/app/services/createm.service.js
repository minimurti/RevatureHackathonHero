import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
let CreatemService = class CreatemService {
    constructor(http) {
        this.http = http;
        this.URL = environment.endpoint + 'message';
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    addMessage(message) {
        console.log(message);
        return this.http.post(this.URL + '/?message_id=' + message.message_id +
            '&messageBody=' + message.messageBody + '&project_id=' + message.project_id +
            '&username=' + message.username, {});
    }
};
CreatemService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CreatemService);
export { CreatemService };
//# sourceMappingURL=createm.service.js.map