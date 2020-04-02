import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Message } from '../models/message';
let CreatemComponent = class CreatemComponent {
    constructor(createmService, route, router) {
        this.createmService = createmService;
        this.route = route;
        this.router = router;
        this.message_id = 1;
    }
    add(messageBody) {
        const newMessage = new Message(this.message_id, messageBody, this.project_id, localStorage.getItem('username'));
        this.createmService.addMessage(newMessage)
            .subscribe();
    }
    return() {
        this.router.navigate(['viewp']);
    }
    ngOnInit() {
        this.project_id = this.route.snapshot.params['id'];
    }
};
CreatemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-createm',
        templateUrl: './createm.component.html',
        styleUrls: ['./createm.component.css']
    })
], CreatemComponent);
export { CreatemComponent };
//# sourceMappingURL=createm.component.js.map