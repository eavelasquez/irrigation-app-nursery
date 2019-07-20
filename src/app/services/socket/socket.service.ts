import {EventEmitter, Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  myEmitter = new EventEmitter();
  systemInfo: { bateria: { value }, tanque: { value }, lineas: Array<{ id: string, sensores: Array<{ id, value }>, humedad: number, estado: boolean }> };

  constructor(private socket: Socket) {
    socket.on('connect', () => {
      // this.myEmitter.emit('ggggggg');
      console.log('Connected');

    });

    socket.on('disconnect', function () {
      // const emiter = this.myEmitter;
      console.log('Disconnected');
    });

// tslint:disable-next-line: max-line-length
    socket.on('measurement', (data: { bateria: { value }, tanque: { value }, lineas: Array<{ id: string, sensores: Array<{ id, value }>, humedad: number, estado: boolean }> }) => {
      console.log('data :', data.lineas);
      this.systemInfo = data;
      this.myEmitter.emit(this.systemInfo);
    });
  }

  switchLine(line, status: boolean) {
    this.socket.emit('switchLine', {line, status});
  }
}
