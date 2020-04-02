import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../models/user';
let RegisterComponent = class RegisterComponent {
    constructor(registerService, route, router) {
        this.registerService = registerService;
        this.route = route;
        this.router = router;
    }
    add(username, password, firstName, lastName, email, dateOfBirth) {
        const newUser = new User(username, password, firstName, lastName, email, dateOfBirth);
        this.registerService.addUser(newUser)
            .subscribe(response => {
            this.router.navigate(['login']);
        });
    }
    ngOnInit() {
    }
    return() {
        this.router.navigate(['login']);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map