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


  systemInfo: { bateria: { value }, tanque: { value }, lineas: Array<{ id: string, sensores: Array<{ id, value }>, humedad: number, estado: boolean }> };

  constructor(private modalService: MDBModalService, private socketService: SocketService) {
    this.socketService.myEmitter.subscribe(info => this.systemInfo = info);
  }

  ngOnInit() {
    // this.switchLine();
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

  switchLine(systemInfo, status) {
    status = !status;
    for (const i in this.systemInfo) {
      if (this.systemInfo[i].number === systemInfo) {
        this.systemInfo[i].status = status;
      }
    }
    this.socketService.switchLine(systemInfo, status);
  }
}
