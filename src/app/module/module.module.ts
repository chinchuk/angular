import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import {UserModule} from './user/user.module';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ChildexpertiseComponent } from './expertise/childexpertise/childexpertise.component';




@NgModule({
  declarations: [ExpertiseComponent, ChildexpertiseComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    UserModule
    
  ]
})
export class ModuleModule { }
