import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ProgramsListComponent} from "./component/programs-list/programs-list.component";
import {ServicesComponent} from "./component/services/services.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
{
  path: 'programs-list',
    component: ProgramsListComponent
},
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  ]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
