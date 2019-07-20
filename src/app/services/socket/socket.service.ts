import {EventEmitter, Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import { SystemInfo } from '../../models/system-info.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  myEmitter = new EventEmitter();
  systemInfo: SystemInfo;

  constructor(private socket: Socket) {
    socket.on('connect', () => {
      // this.myEmitter.emit('ggggggg');
      console.log('Connected');

    });

    socket.on('disconnect', function () {
      // const emiter = this.myEmitter;
      console.log('Disconnected');
    });

    socket.on('measurement', (data: SystemInfo) => {
      console.log('data :', data.lineas);
      this.systemInfo = data;
      this.myEmitter.emit(this.systemInfo);
    });
  }

  switchLine(line, status: boolean) {
    this.socket.emit('switchLine', {line, status});
  }
}
