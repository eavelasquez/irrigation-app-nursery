import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PAGES_ROUTES } from './pages.routes';

import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PagesComponent } from './pages.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddUserComponent,
    PagesComponent,
    EditUserComponent
  ],
  exports: [
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    SharedModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
