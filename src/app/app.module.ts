import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {LoginComponent} from "./component/login/login.component";
import { AppRoutingModule } from './app-routing.module';
import { ProgramsListComponent } from './component/programs-list/programs-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProgramsListComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
