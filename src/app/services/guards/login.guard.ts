import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( public userService: UserService, public router: Router) {}

  canActivate() {
    if ( this.userService.authLogin() ) {
      console.log('Pasó por guard');
      return true;
    } else {
      console.log('Bloqueado por guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
