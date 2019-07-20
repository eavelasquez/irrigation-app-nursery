import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [``]
})
export class ModalComponent implements OnInit {
  content: object;
  heading: string;
  icon: string;

  // Service created modal
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
