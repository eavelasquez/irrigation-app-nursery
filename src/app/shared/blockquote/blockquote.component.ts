import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styles: [``]
})
export class BlockquoteComponent implements OnInit {

  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
