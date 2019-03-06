import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidenav') sidenav: ElementRef;

  clicked: boolean;

  constructor() {
    this.clicked = this.clicked !== undefined;
  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
