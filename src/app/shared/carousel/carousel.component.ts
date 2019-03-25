import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  carousel = [
    {
      img: '../../../assets/img-carousel/img-carousel-1.jpg',
      text: ''
    },
    {
      img: '../../../assets/img-carousel/img-carousel-2.jpg',
      text: ''
    },
    {
      img: '../../../assets/img-carousel/img-carousel-3.jpg',
      text: ''
    },
    {
      img: '../../../assets/img-carousel/img-carousel-4.jpg',
      text: ''
    },
    {
      img: '../../../assets/img-carousel/img-carousel-5.jpg',
      text: ''
    },
    {
      img: '../../../assets/img-carousel/img-carousel-6.jpg',
      text: ''
    }
  ];

  ngOnInit() {
  }

}
