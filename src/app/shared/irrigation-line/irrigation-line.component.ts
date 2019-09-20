import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ModalComponent } from '../modal/modal.component';
import { SocketService } from '../../services/socket/socket.service';

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
  locked: string;
  ColorLocked: string;
  Visibility: string;
  modalRef: MDBModalRef;
  constructor(private modalService: MDBModalService, private socketService: SocketService) {


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
      heading: 'Línea de riego',
      content: { line: this.InfoLinea }
    }
  };

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.estado = this.InfoLinea.estado ? 'Encendida' : 'Apagada';
    this.imagen = this.InfoLinea.estado ? 'assets/img/irrigation.png' : 'assets/img/irrigation_1.png';
    this.color = this.InfoLinea.estado ? "success" : "danger";
    this.locked = this.InfoLinea.locked ? 'Activar ' +'Modo '+ 'Auto' : 'Activar ' +'Modo '+ 'Manual';
    this.Visibility = this.InfoLinea.locked ? '': 'disabled';
    this.ColorLocked = this.InfoLinea.locked ? "warning": "info";
    
  }

  openModal() {
    this.modalOptions.data.content = this.InfoLinea;
    this.modalRef = this.modalService.show(ModalComponent, this.modalOptions);
  }

  Lock() {

    if (!this.InfoLinea.locked) {
      this.socketService.Locked(this.InfoLinea.id).subscribe(value => console.log(value));
    } else{
      this.socketService.Unlocked(this.InfoLinea.id).subscribe(value => console.log(value));
    }    
  }

  Switch() {
    if (!this.InfoLinea.estado) {
      this.socketService.switchOn(this.InfoLinea.id).subscribe(value => console.log(value));
    } else{
      this.socketService.switchOff(this.InfoLinea.id).subscribe(value => console.log(value));
    }
    
  }

}
