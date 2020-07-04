import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-happy-customer',
  templateUrl: './happy-customer.component.html',
  styleUrls: ['./happy-customer.component.css']
})
export class HappyCustomerComponent implements OnInit {

  customers = [{
    description: `Absolutely amazing and highly recommended. They are great at paying
  attention to detail, they are professional and treat you like family. `,
    clienName: 'Satnam'
  },
  {
    description: `Absolutely amazing and highly recommended. They are great at paying
  attention to detail, they are professional and treat you like family. `,
    clienName: 'Satnam'
  },
  {
    description: `Absolutely amazing and highly recommended. They are great at paying
  attention to detail, they are professional and treat you like family. `,
    clienName: 'Satnam'
  },
  {
    description: `Absolutely amazing and highly recommended. They are great at paying
  attention to detail, they are professional and treat you like family. `,
    clienName: 'Satnam'
  }
  ];

  slideConfig: any;
  constructor() { }

  ngOnInit(): void {
    this.slideConfig = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    };
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
