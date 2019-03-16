import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import {ModalComponent} from '../../shared/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor( private modalService: MDBModalService ) { }

  ngOnInit() {
  }

  // Interface
  openModalBattery() {
    this.modalRef = this.modalService.show(ModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-side modal-top-right',
      containerClass: 'right',
      animated: true,
      data: {
        heading: 'Batería',
        icon: 'check-circle',
        content: { heading: 'Estado', description: 'Content description' }
      }
    });
  }
  openModalWater() {
    this.modalRef = this.modalService.show(ModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-side modal-bottom-right',
      containerClass: 'right',
      animated: true,
      data: {
        heading: 'Tanque de agua',
        icon: 'exclamation-triangle',
        content: { heading: 'Estado', description: 'Content description' }
      }
    });
  }
}
