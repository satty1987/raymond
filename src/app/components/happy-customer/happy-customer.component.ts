import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-happy-customer',
  templateUrl: './happy-customer.component.html',
  styleUrls: ['./happy-customer.component.css']
})
export class HappyCustomerComponent implements OnInit {

  customers = [{
    description: `A great shopping experience , never expected such a vide variety of Suits in  tri-city.`,
    clienName: 'Bikram jit Singh'
  },
  {
    description: `My in laws  gifted me suit from here , Don’t know what to say!!!!!!!!
    It has to be good by all means. My in laws  gifted me suit from here ,
    Don’t know what to say!!!!!!!! It has to be good by all means. `,
    clienName: 'Ansh'
  },
  {
    description: `Custom Raymond’s authorized tailoring is available here I recommend
    everyone to be here and try the same Custom Raymond’s authorized
    tailoring is available here I recommend  everyone to be here and try the same  `,
    clienName: 'Surjit Singh'
  },
  {
    description: `One stop for Men’s shopping “though we don’t do that much “ Nice fabric available here you ll get all choices. `,
    clienName: 'Narinder Kumar'
  },
  {
    description: `Amazing services and Great Ambience, got good offers thanks`,
    clienName: 'Ravi Kumar'
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
