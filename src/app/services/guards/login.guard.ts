import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  // Services need injected in the constructor
  constructor(public userService: UserService, public router: Router) {}

  // Interface that a class can implement to be a guard deciding if a route can be activated
  canActivate() {
    if (this.userService.authLogin()) {
      return true;
    } else {
      console.log('Bloqueado por guard.');
      // @ts-ignored
      swal('Debe estar autenticado.', { buttons: false, timer: 1600 });
      this.router.navigate(['/login']);
      return false;
    }
  }
}
