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
  img: string;
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

    if (this.InfoLinea.estado){
      this.imagen = ".png";  
      this.color = "success"  
   } else {
      this.imagen = "_1.png"
      this.color = "danger"
    }    
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent, this.modalOptions);
  }

}
