import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-irrigation-line',
  templateUrl: './irrigation-line.component.html',
  styles: [``]
})
export class IrrigationLineComponent implements OnInit, OnChanges {
  @Input() InfoLinea;
  estado = '';
  imagen: string;
  color: string;
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) { }

  modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    data: {
      heading: 'Línea de riego',
      content: { line: this.InfoLinea }
    }
  };

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.estado = this.InfoLinea.estado ? 'Encendida' : 'Apagada';
    this.imagen = this.InfoLinea.estado ? 'assets/img/irrigation.png' : 'assets/img/irrigation_1.png';
    this.color = this.InfoLinea.estado ? "success"   : "danger";}

    openModal() {
    this.modalRef = this.modalService.show(ModalComponent, this.modalOptions);
  }

}
