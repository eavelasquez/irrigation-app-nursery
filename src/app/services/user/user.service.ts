import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient ) { }

  postUser( user: User ) {
    const url = URL_SERVICES + '/usuarios';
    return this.http.post( url, user );
  }
}
