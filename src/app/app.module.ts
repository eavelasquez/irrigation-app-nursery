import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Routes
import {APP_ROUTES} from './app.routes';
// Libraries
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
// Components
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PagesModule} from './pages/pages.module';
import {PipesModule} from './pipes/pipes.module';

import {URL_SERVICES} from './config/config';

const configSocket: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

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
    PipesModule,
    SocketIoModule.forRoot(configSocket),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
