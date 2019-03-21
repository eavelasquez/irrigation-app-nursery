import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient ) { }

  loginUser( user: User ) {
    const url = URL_SERVICES + '/login';
    return this.http.post( url, user );
  }

  postUser( user: User ) {
    const url = URL_SERVICES + '/usuarios';
    return this.http.post( url, user );
  }

  saveStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
