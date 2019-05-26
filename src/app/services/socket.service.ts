import {EventEmitter, Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  myEmitter = new EventEmitter();

  constructor(private socket: Socket) {
    socket.on('connect', () => {
      // this.myEmitter.emit('ggggggg');
      console.log('Connected');

    });

    socket.on('disconnect', function () {
      // const emiter = this.myEmitter;
      // emiter.emit('caho');
      console.log('Disconnected');
    });

    socket.on('measurement', (data) => {
      // this.myEmitter.emit('ggggggg');
                        console.log(data);

    });
  }

  switchLine(line, status: boolean) {
    this.socket.emit('switchLine', {line, status});
  }
}
