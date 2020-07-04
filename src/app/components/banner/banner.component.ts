import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  slides = [
    { img:  'https://app-dam.herokuapp.com/assets/slider-light-slide-1-1920x776.png' },
    { img:  'https://app-dam.herokuapp.com/assets/slider-light-slide-2-1920x776.png' },
    {img: 'https://app-dam.herokuapp.com/assets/slider-light-slide-3-1920x776.png'}
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
