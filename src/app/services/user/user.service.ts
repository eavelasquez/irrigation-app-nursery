import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthUser, UpdateUser, User} from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;

  constructor( public http: HttpClient, public router: Router ) { this.loadStorage(); }

// Authentication
  loginUser( user: AuthUser ) {
    const url = URL_SERVICES + '/login';
    return this.http.post( url, user ).pipe( map((response: any) => {
      this.saveStorage(response.usuario._id, response.Authorization, response.usuario);
    }));
  }

  logoutUser() {
    this.user = null;
    this.token = '';
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  authLogin(): boolean {
    return (this.token.length > 5);
  }

// Request HTTP - CRUD
  postUser( user: User ) {
    const url = URL_SERVICES + '/usuarios';
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.post( url, user, { headers } );
  }

  getUser() {
    const url = URL_SERVICES + '/usuarios';
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.get( url, { headers } );
  }

  findUser( CC: string ) {
    const url = URL_SERVICES + '/usuarios/' + CC;
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.get( url, { headers }  ).pipe( map( (response: any) => {
      return response.result;
    }));
  }

  putUser( user: UpdateUser ) {
    const url = URL_SERVICES + '/usuarios/';
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.put( url, user, { headers } );
  }

  deleteUser( CC: string ) {
    const url = URL_SERVICES + '/usuarios/' + CC;
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
    return this.http.delete(url, { headers });
  }

// Functions - LocalStorage
  saveStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;
  }

  loadStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }
}
