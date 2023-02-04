import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {RegisterComponent} from './component/register/register.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {LoginComponent} from "./component/login/login.component";
import {ProgramsListComponent} from './component/programs-list/programs-list.component';
import {AboutComponent} from './component/about/about.component';
import {ServicesComponent} from './component/services/services.component';
import {ContactComponent} from './component/contact/contact.component';
import {ProgramComponent} from './component/program/program.component';
import {ProgramDetailsComponent} from './component/program-details/program-details.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProgramsListComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ProgramComponent,
    ProgramDetailsComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
