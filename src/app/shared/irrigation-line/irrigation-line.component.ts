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
  img: string;
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService) {
    // console.log(this.InfoLinea);
  }

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
        heading: 'Modal heading',
        content: { line: this.InfoLinea, heading: 'Línea de riego' }
    }
  };

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.InfoLinea);
    this.estado = this.InfoLinea.estado ? 'Encendida' : 'Apagada';
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent, this.modalOptions);
  }

}
