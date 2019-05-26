import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../user/user.service';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class NotLoginGuard implements CanActivate {

  constructor( public userService: UserService, public router: Router) {}

  canActivate() {
      if ( this.userService.token.length > 0 ) {
        // @ts-ignored
        swal('Ya está autenticado.', { buttons: false, timer: 1600 });
        this.router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
    }
}
