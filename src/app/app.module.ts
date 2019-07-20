import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Routes
import { APP_ROUTES } from './app.routes';
// Libraries
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesModule } from './pages/pages.module';
// URL API Rest
import { environment } from '../environments/environment';

const configSocket: SocketIoConfig = { url: environment.URL_SERVICES, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    APP_ROUTES,
    SocketIoModule.forRoot(configSocket)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
