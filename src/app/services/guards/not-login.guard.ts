import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../user/user.service';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class NotLoginGuard implements CanActivate {

  // Services need injected in the constructor
  constructor(public userService: UserService, public router: Router) {}

  // Interface that a class can implement to be a guard deciding if a route can be activated for token
  canActivate() {
      if (this.userService.Authorization.length > 0) {
        // @ts-ignored
        swal('Ya está autenticado.', { buttons: false, timer: 1600 });
        this.router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
    }
}
