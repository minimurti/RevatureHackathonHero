import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ViewmemberComponent = class ViewmemberComponent {
    constructor(viewmemberService, route, router) {
        this.viewmemberService = viewmemberService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.project_id = this.route.snapshot.params.id;
        console.log(this.project_id);
        this.viewmemberService.listMembers(this.project_id).subscribe(userList => this.userList = userList);
        console.log(this.userList);
    }
    return() {
        this.router.navigate(['viewp']);
    }
};
ViewmemberComponent = tslib_1.__decorate([
    Component({
        selector: 'app-viewmember',
        templateUrl: './viewmember.component.html',
        styleUrls: ['./viewmember.component.css']
    })
], ViewmemberComponent);
export { ViewmemberComponent };
//# sourceMappingURL=viewmember.component.js.map