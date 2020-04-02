import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material.module';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { CreatepComponent } from './createp/createp.component';
import { ViewpComponent } from './viewp/viewp.component';
import { ViewaccComponent } from './viewacc/viewacc.component';
import { CreatemComponent } from './createm/createm.component';
import { ViewmComponent } from './viewm/viewm.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewmemberComponent } from './viewmember/viewmember.component';
import { ChatComponent } from './chat/chat.component';
import { FilterPipe } from './models/filter.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            LoginComponent,
            RegisterComponent,
            LandingComponent,
            CreatepComponent,
            ViewpComponent,
            ViewaccComponent,
            CreatemComponent,
            AdduserComponent,
            ViewmComponent,
            AdduserComponent,
            ViewmemberComponent,
            ChatComponent,
            FilterPipe,
            PageNotFoundComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatSliderModule,
            MaterialModule,
            MatFileUploadModule,
            FormsModule,
            HttpClientModule,
            ReactiveFormsModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map