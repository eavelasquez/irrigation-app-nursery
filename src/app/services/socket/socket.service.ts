import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SystemInfo } from '../../models/system-info.model';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  myEmitter = new EventEmitter();
  systemInfo: SystemInfo;

  constructor(private socket: Socket, private http: HttpClient) {
    socket.on('connect', () => {
      console.log('Connected');

    });

    socket.on('disconnect', function () {
      // const emiter = this.myEmitter;
      console.log('Disconnected');
    });

    socket.on('measurement', (data: SystemInfo) => {
      
      this.systemInfo = data;
      this.myEmitter.emit(this.systemInfo);
    });
  }

  public switchLine(line, status: boolean) {
    this.socket.emit('switchLine', {line, status});
  }

  public programLine(body) {
    const url = environment.URL_SERVICES + '/agenda';
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP POST - Created agend
    return this.http.post(url, body, { headers });
  }

  public Locked(id) {
    const url = environment.URL_SERVICES + '/linea-riego/lock';
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP POST - Created agend
    console.log("SI entro");
    return this.http.put(url, {id}, { headers });
  }

  public switchOn(id) {
    const url = environment.URL_SERVICES + '/linea-riego/on';
    console.log("Entro servicio")
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP POST - Created agend
    return this.http.put(url, {id}, { headers });
  }

  public switchOff(id) {
    const url = environment.URL_SERVICES + '/linea-riego/off';
    console.log("Entro servicio")
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP POST - Created agend
    return this.http.put(url, {id}, { headers });
  }

}
