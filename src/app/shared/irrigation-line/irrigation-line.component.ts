import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-irrigation-line',
  templateUrl: './irrigation-line.component.html',
  styleUrls: ['./irrigation-line.component.scss']
})
export class IrrigationLineComponent implements OnInit, OnChanges {
  @Input() InfoLinea;
  estado = '';
  img: string;
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) {
    // console.log(this.InfoLinea);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.InfoLinea);
    this.estado = this.InfoLinea.estado ? 'Encendida' : 'Apagada';
    setTimeout(() => {
      this.img = this.estado ? 'assets/img/irrigation.png' : 'assets/img/irrigation_1.png';
    }, 6000)
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent)
  }

}
