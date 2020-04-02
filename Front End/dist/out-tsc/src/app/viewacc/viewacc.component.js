import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ViewaccComponent = class ViewaccComponent {
    constructor(viewaccService, route, router) {
        this.viewaccService = viewaccService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.viewaccService.viewUser(localStorage.getItem('username')).subscribe(user => this.user = user);
    }
    return() {
        this.router.navigate(['landing']);
        //window.location.href = '/landing';
    }
};
ViewaccComponent = tslib_1.__decorate([
    Component({
        selector: 'app-viewacc',
        templateUrl: './viewacc.component.html',
        styleUrls: ['./viewacc.component.css']
    })
], ViewaccComponent);
export { ViewaccComponent };
//# sourceMappingURL=viewacc.component.js.map