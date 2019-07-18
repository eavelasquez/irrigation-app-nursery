import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [``]
})
export class HomeComponent implements OnInit {
  // Object type system information - Result socket service
  systemInfo: { bateria: { value }, tanque: { value }, lineas: Array<{ id: string, sensores: Array<{ id, value }>, humedad: number, estado: boolean }> };

  // Services need injected in the constructor - Socket
  constructor(private socketService: SocketService) {
    this.socketService.myEmitter.subscribe(info => this.systemInfo = info);
  }

  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit() {
    // this.switchLine();
  }

  // Function swicht line - Change status irrigation
  switchLine(systemInfo, status) {
    status = !status;
    for (const i in this.systemInfo) {
      if (this.systemInfo[i].number === systemInfo) {
        this.systemInfo[i].status = status;
      }
    }
    // Socket service for sending request
    this.socketService.switchLine(systemInfo, status);
  }

}
