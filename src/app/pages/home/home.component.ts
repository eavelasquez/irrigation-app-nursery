import {Component, OnInit} from '@angular/core';
import {SocketService} from '../../services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  systemInfo: { bateria: { value }, tanque: { value }, lineas: Array<{ id: string, sensores: Array<{ id, value }>, humedad: number, estado: boolean }> };

  constructor(private socketService: SocketService) {
    this.socketService.myEmitter.subscribe(info => this.systemInfo = info);
  }

  ngOnInit() {
    // this.switchLine();
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
