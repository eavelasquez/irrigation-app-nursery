import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PAGES_ROUTES } from './pages.routes';

import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConfigurationComponent,
    AddUserComponent,
    PagesComponent
  ],
  exports: [
    HomeComponent,
    ConfigurationComponent,
    AddUserComponent,
    SharedModule,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
