import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [``]
})
export class CardComponent implements OnInit, OnChanges {
  @Input() Info;
  @Input() title: string;
  @Input() img: string;
  percent: SafeStyle;

  constructor(private sanitization: DomSanitizer) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.percent = this.sanitization.bypassSecurityTrustStyle(`width: ${this.Info.value} %`);
  }

}
