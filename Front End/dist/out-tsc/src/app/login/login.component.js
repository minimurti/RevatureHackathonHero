import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { loginUser } from '../models/loginUser';
let LoginComponent = class LoginComponent {
    constructor(loginService, route, router) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.success = '';
    }
    login(username, password) {
        const newloginUser = new loginUser(username, password);
        this.loginService.login(newloginUser)
            .subscribe(user => {
            this.user = user;
            console.log(this.user);
            localStorage.setItem('username', user.username);
            console.log(localStorage.getItem('username'));
            this.router.navigate(['landing']);
        }, err => {
            alert('Wrong credentials');
        });
    }
    ngOnInit() { }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map