import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    { img:  'assets/images/block/1.jpg' },
    { img:  'assets/images/block/2.jpg' },
    { img:  'assets/images/block/3.jpg' },
    { img:  'assets/images/block/4.jpg' },
    { img:  'assets/images/block/5.jpg' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
