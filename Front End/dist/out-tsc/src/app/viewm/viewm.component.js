import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ViewmComponent = class ViewmComponent {
    constructor(viewmService, route, router) {
        this.viewmService = viewmService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.project_id = this.route.snapshot.params.id;
        console.log(this.project_id);
        this.viewmService.listMessages(this.project_id).subscribe(messageList => this.messageList = messageList);
        console.log(this.messageList);
    }
    return() {
        this.router.navigate(['viewp']);
        //window.location.href = '/viewp';
    }
};
ViewmComponent = tslib_1.__decorate([
    Component({
        selector: 'app-viewm',
        templateUrl: './viewm.component.html',
        styleUrls: ['./viewm.component.css']
    })
], ViewmComponent);
export { ViewmComponent };
//# sourceMappingURL=viewm.component.js.map