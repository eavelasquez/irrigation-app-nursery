import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: ['']
})
export class CarouselComponent implements OnInit {

  // Array of images for carousel
  carousel = [
    { img: '../../../assets/img-carousel/img-carousel-1.jpg' },
    { img: '../../../assets/img-carousel/img-carousel-2.jpg' },
    { img: '../../../assets/img-carousel/img-carousel-3.jpg' },
    { img: '../../../assets/img-carousel/img-carousel-4.jpg' },
    { img: '../../../assets/img-carousel/img-carousel-5.jpg' },
    { img: '../../../assets/img-carousel/img-carousel-6.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
