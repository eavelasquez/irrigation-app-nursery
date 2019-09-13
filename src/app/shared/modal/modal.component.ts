import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormControl } from '@angular/forms';
import { SocketService } from '../../services/socket/socket.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [``]
})
export class ModalComponent implements OnInit {

  content: any;
  heading: string;
  public time = new FormControl('01:00');
  // Service created modal
  constructor(public modalRef: MDBModalRef, private socketService: SocketService) { }

  ngOnInit() {
  }

  program() {
    const time = this.time.value;
    const body = { line: this.content.line, time };
    this.socketService.programLine(body).subscribe(value => console.log(value));
  }
}
