import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [``]
})
export class ModalComponent implements OnInit {
  line: any;
  heading: string;
  time = new FormControl(null);
  // Service created modal
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

  program() {
    const time = this.time.value;
  }
}
