import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  slides = [
    { img:  './assets/ban/ray1.jpg' },
    { img:  './assets/ban/ray2.jpg' },
    { img:  './assets/ban/banner1.jpg' },
    { img:  './assets/ban/banner3.jpg' },
    { img:  './assets/ban/ray5.jpg' }
  ];
  slideConfig = {  'slidesToShow ': 1,  'slidesToScroll ': 1 , autoplay: false,  infinite: false};
  constructor() { }

  ngOnInit(): void {
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
