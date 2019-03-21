import { Component, OnInit } from '@angular/core';
import { CollapseService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public clicked: boolean;

  constructor( public collapseService: CollapseService ) {
    this.clicked = this.clicked !== undefined;
  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
