import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Providers
import { LoginGuard, NotLoginGuard, UserService, SocketService } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    LoginGuard,
    NotLoginGuard,
    SocketService
  ]
})
export class ServiceModule { }
