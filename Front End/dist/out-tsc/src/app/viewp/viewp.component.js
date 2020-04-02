import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ViewpComponent = class ViewpComponent {
    constructor(viewpService, route, router) {
        this.viewpService = viewpService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.viewpService.listProjects().subscribe(projectList => this.projectList = projectList);
        console.log(this.projectList);
    }
    viewChat(project_id) {
        this.router.navigate(['chat', project_id]);
    }
    // tslint:disable-next-line: variable-name
    addMembers(project_id) {
        this.router.navigate(['adduser', project_id]);
    }
    // tslint:disable-next-line: variable-name
    viewMembers(project_id) {
        this.router.navigate(['viewmember', project_id]);
    }
    return() {
        this.router.navigate(['landing']);
    }
};
ViewpComponent = tslib_1.__decorate([
    Component({
        selector: 'app-viewp',
        templateUrl: './viewp.component.html',
        styleUrls: ['./viewp.component.css']
    })
], ViewpComponent);
export { ViewpComponent };
//# sourceMappingURL=viewp.component.js.map