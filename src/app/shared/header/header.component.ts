import { Component, OnInit } from '@angular/core';
import { CollapseService, UserService } from '../../services/service.index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public collapseService: CollapseService, public userService: UserService, public router: Router ) {}

  public CC: string = this.userService.user.CC;

  ngOnInit() {
  }

  logoutUser() {
    this.userService.logoutUser();
  }

  editUser() {
    this.router.navigate(['/edituser', this.CC]);
    this.userService.findUser(this.CC);
  }

}
