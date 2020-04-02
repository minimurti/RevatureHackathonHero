import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Project } from '../models/project';
let CreatepComponent = class CreatepComponent {
    constructor(createpService, route, router) {
        this.createpService = createpService;
        this.route = route;
        this.router = router;
        this.id = 1;
    }
    add(pname, description) {
        const newProject = new Project(this.id, pname, description);
        this.createpService.addProject(newProject)
            .subscribe(project => {
            this.project = project;
            this.createpService.addUserToProject(project.id, localStorage.getItem('username')).subscribe();
            localStorage.setItem('projectid', project.id.toString());
            console.log(project);
            this.router.navigate(['landing']);
        }, err => {
            alert('Something went wrong!');
        });
    }
    return() {
        this.router.navigate(['landing']);
    }
    ngOnInit() {
    }
};
CreatepComponent = tslib_1.__decorate([
    Component({
        selector: 'app-createp',
        templateUrl: './createp.component.html',
        styleUrls: ['./createp.component.css']
    })
], CreatepComponent);
export { CreatepComponent };
//# sourceMappingURL=createp.component.js.map