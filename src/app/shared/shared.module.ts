import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Libraries
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// Components
import { HeaderComponent } from './header/header.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AlertComponent } from './alert/alert.component';
import { BlockquoteComponent } from './blockquote/blockquote.component';
import { IrrigationLineComponent } from './irrigation-line/irrigation-line.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotPageFoundComponent,
    CardComponent,
    ModalComponent,
    CarouselComponent,
    AlertComponent,
    BlockquoteComponent,
    IrrigationLineComponent
  ],
  exports: [
    HeaderComponent,
    NotPageFoundComponent,
    CardComponent,
    ModalComponent,
    CarouselComponent,
    AlertComponent,
    BlockquoteComponent,
    IrrigationLineComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }
