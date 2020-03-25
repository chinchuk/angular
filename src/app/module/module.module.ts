import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import {UserModule} from './user/user.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    UserModule
    
  ]
})
export class ModuleModule { }
