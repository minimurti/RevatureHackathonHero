import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AdduserComponent = class AdduserComponent {
    constructor(adduserService, createpService, route, router) {
        this.adduserService = adduserService;
        this.createpService = createpService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.project_id = this.route.snapshot.params.id;
        console.log(this.project_id);
        this.adduserService.listAll()
            .subscribe(userList => this.userList = userList.filter(user => user.username !== localStorage.getItem('username')));
        console.log(this.userList);
    }
    addUser(username) {
        console.log("adding user...");
        this.createpService.addUserToProject(this.project_id, username)
            .subscribe(() => this.router.navigate(['viewp']));
    }
    return() {
        this.router.navigate(['viewp']);
    }
};
AdduserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-adduser',
        templateUrl: './adduser.component.html',
        styleUrls: ['./adduser.component.css']
    })
], AdduserComponent);
export { AdduserComponent };
//# sourceMappingURL=adduser.component.js.map