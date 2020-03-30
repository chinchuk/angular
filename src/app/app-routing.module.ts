import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { SignupdetailsComponent } from './signupdetails/signupdetails.component';



const routes: Routes = [
  {"path":'',component:LandingComponent},
  {"path":'signup',component:SignupComponent},
  {"path":'signupdetails',component:SignupdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
