import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertiseComponent } from './expertise/expertise.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {path:'user',loadChildren:() => import('./user/user.module').then(m =>m.UserModule)},
  { path: 'expertise', component: ExpertiseComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
