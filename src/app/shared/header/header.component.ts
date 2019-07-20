import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  logoutUser() { this.userService.logoutUser(); }

}
