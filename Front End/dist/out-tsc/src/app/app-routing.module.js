import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { CreatepComponent } from './createp/createp.component';
import { ViewpComponent } from './viewp/viewp.component';
import { ViewaccComponent } from './viewacc/viewacc.component';
import { CreatemComponent } from './createm/createm.component';
import { ViewmComponent } from './viewm/viewm.component';
import { ViewmemberComponent } from './viewmember/viewmember.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'createp', component: CreatepComponent },
    { path: 'viewp', component: ViewpComponent },
    { path: 'viewacc', component: ViewaccComponent },
    { path: 'createm/:id', component: CreatemComponent },
    { path: 'viewm/:id', component: ViewmComponent },
    { path: 'adduser/:id', component: AdduserComponent },
    { path: 'viewmember/:id', component: ViewmemberComponent },
    { path: 'chat/:id', component: ChatComponent },
    { path: '**', component: PageNotFoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map