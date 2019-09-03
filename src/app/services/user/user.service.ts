import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUser, UpdateUser, User } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  Authorization: string;

  // Services need injected in the constructor
  constructor(public http: HttpClient, public router: Router) {
    // Load local storage, verification of exist token
    this.loadStorage();
  }

// Authentication
  loginUser(user: AuthUser, remember: boolean = false) {
    if (remember) {
      localStorage.setItem('CC', user.CC);
    } else {
      localStorage.removeItem('CC');
    }
    const url = environment.URL_SERVICES + '/usuario/login';
    // Request post authentication, send credentials of user
    return this.http.post(url, user).pipe(map((response: any) => {
      // Save in local storage id, token and user result
      this.saveStorage(response.usuario._id, response.Authorization, response.usuario);
    }));
  }

  // Function logout user, redirect login component and clear local storage
  logoutUser() {
    this.user = null;
    this.Authorization = '';
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // Function verification exist token, if is true redirect home component from NotLoginGuard
  authLogin(): boolean {
    return (this.Authorization.length > 5);
  }

  // Request HTTP - CRUD
  // Request post, register a user
  postUser( user: User ) {
    const url = environment.URL_SERVICES + '/usuario';
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP POST - Created user
    return this.http.post(url, user, { headers });
  }

  // Request get, get a users registered
  getUsers() {
    const url = environment.URL_SERVICES + '/usuario';
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP GET - Show users
    return this.http.get(url, { headers });
  }

  // Request get, get a user registered using identity document
  getUser(CC: string) {
    const url = environment.URL_SERVICES + '/usuario/' + CC;
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP GET - Show user
    return this.http.get( url, { headers }  ).pipe(map( (response: any) => {
      // Return result user
      return response.result;
    }));
  }

  // Request put, put a user registered
  putUser(user: UpdateUser) {
    const url = environment.URL_SERVICES + '/usuario/';
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP PUT - Update user
    return this.http.put( url, user, { headers } );
  }

  // Request delete, delete a user registered using identity document
  deleteUser(CC: string) {
    const url = environment.URL_SERVICES + '/usuario/' + CC;
    // Create headers object for send post, token of authentication
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('Authorization')
    });
    // Request HTTP PUT - Delete user
    return this.http.delete(url, { headers });
  }

  // Function save - LocalStorage
  saveStorage(id: string, Authorization: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('Authorization', Authorization);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.Authorization = Authorization;
  }

  // Function load - LocalStorage
  loadStorage() {
    if (localStorage.getItem('Authorization')) {
      this.Authorization = localStorage.getItem('Authorization');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.Authorization = '';
      this.user = null;
    }
  }

}
