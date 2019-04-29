import {Component, OnInit} from '@angular/core';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {ModalComponent} from '../../shared/modal/modal.component';
import {SocketService} from '../../services/socket.service';
import {container} from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: MDBModalRef;

  lines = {
    one: {status: false, number: 1},
    two: {status: false, number: 2},
    tree: {status: false, number: 3},
  };

  constructor(private modalService: MDBModalService, private socketService: SocketService) {
  }

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
      class: '',
      containerClass: '',
      animated: true,
      data: {
        heading: 'Batería',
        icon: 'check-circle',
        content: {heading: 'Estado', description: 'Content description'}
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
      class: '',
      containerClass: '',
      animated: true,
      data: {
        heading: 'Tanque de agua',
        icon: 'exclamation-triangle',
        content: {heading: 'Estado', description: 'Content description'}
      }
    });
  }

  switchLine(line, status) {
    status = !status;
    for (const i in this.lines) {
      if (this.lines[i].number === line) {
        this.lines[i].status = status;
      }
    }
    this.socketService.switchLine(line, status);
  }
}
