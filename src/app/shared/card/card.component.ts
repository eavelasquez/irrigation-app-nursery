import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
// @ts-ignore
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() Info;
  @Input() titulo: string;
  @Input() img: string;
  percent;

  constructor(private sanitization: DomSanitizer) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.Info);
    this.percent = this.sanitization.bypassSecurityTrustStyle(`width: ${this.Info.value * 100}%`);
  }

}
