import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ProgramsListComponent} from "./component/programs-list/programs-list.component";
import {ServicesComponent} from "./component/services/services.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";
import {ProgramDetailsComponent} from "./component/program-details/program-details.component";


const routes: Routes = [
  {
    path: "",
    component:ProgramsListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
  {
    path: 'program-list',
    children: [
      {path: "", component: ProgramsListComponent},
      {path: ":id", component: ProgramDetailsComponent}
    ],
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
