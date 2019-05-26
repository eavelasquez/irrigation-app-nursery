import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AlertComponent } from './alert/alert.component';
import { BlockquoteComponent } from './blockquote/blockquote.component'
import { IrrigationLineComponent } from './irrigation-line/irrigation-line.component';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NopagefoundComponent,
    CardComponent,
    ModalComponent,
    CarouselComponent,
    AlertComponent,
    BlockquoteComponent,
    IrrigationLineComponent,
    CardFormComponent
  ],
  exports: [
    HeaderComponent,
    NopagefoundComponent,
    CardComponent,
    ModalComponent,
    CarouselComponent,
    AlertComponent,
    BlockquoteComponent,
    IrrigationLineComponent,
    CardFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }
