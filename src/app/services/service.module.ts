import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {CollapseService, LoginGuard, UserService} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CollapseService,
    UserService,
    LoginGuard
  ]
})
export class ServiceModule { }
