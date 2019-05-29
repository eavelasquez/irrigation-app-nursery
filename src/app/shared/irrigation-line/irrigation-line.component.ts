import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-irrigation-line',
  templateUrl: './irrigation-line.component.html',
  styleUrls: ['./irrigation-line.component.scss']
})
export class IrrigationLineComponent implements OnInit, OnChanges {
  @Input() InfoLinea;
  estado = 'ss';

  constructor() {
    // console.log(this.InfoLinea);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.InfoLinea);
    this.estado = this.InfoLinea.estado ? 'Encendida' : 'Apagada';
  }

}
