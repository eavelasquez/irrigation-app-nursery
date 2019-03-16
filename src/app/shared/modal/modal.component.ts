import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  content: object;
  heading: string;
  icon: string;

  constructor( public modalRef: MDBModalRef ) { }

  ngOnInit() {
  }

}
