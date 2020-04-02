import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.router.navigate(['login']);
    }
};
PageNotFoundComponent = tslib_1.__decorate([
    Component({
        selector: 'app-page-not-found',
        templateUrl: './page-not-found.component.html',
        styleUrls: ['./page-not-found.component.css']
    })
], PageNotFoundComponent);
export { PageNotFoundComponent };
//# sourceMappingURL=page-not-found.component.js.map