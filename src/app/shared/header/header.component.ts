import { Component, OnInit } from '@angular/core';
import { CollapseService, UserService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public collapseService: CollapseService, private userService: UserService) {}

  ngOnInit() {
  }

  logoutUser() { this.userService.logoutUser(); }

}
