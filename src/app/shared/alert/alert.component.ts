import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [``]
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
