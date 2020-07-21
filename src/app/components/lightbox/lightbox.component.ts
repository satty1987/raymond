import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  customer = [
    'assets/raymond/raymondfinal-1.jpg',
    'assets/raymond/raymondfinal-12.jpg',
    'assets/raymond/raymondfinal-25.jpg',
    'assets/raymond/raymondfinal-28.jpg',
    'assets/raymond/raymondfinal-29.jpg',
    'assets/raymond/raymondfinal-3.jpg',
    'assets/raymond/raymondfinal-30.jpg',
    'assets/raymond/raymondfinal-31.jpg',
    'assets/raymond/raymondfinal-32.jpg',
    'assets/raymond/raymondfinal-36.jpg',
    'assets/raymond/raymondfinal-37.jpg',
    'assets/raymond/raymondfinal-4.jpg',
    'assets/raymond/raymondfinal-40.jpg',
    'assets/raymond/raymondfinal-5.jpg',
    'assets/raymond/raymondfinal-6.jpg',
    'assets/raymond/raymondfinal-13.jpg',
    'assets/raymond/raymondfinal-14.jpg',
    'assets/raymond/raymondfinal-18.jpg',
    'assets/raymond/raymondfinal-21.jpg',
    'assets/raymond/raymondfinal-23.jpg',
    'assets/raymond/raymondfinal-26.jpg',
    'assets/raymond/raymondfinal-27.jpg',
    'assets/raymond/raymondfinal-33.jpg',
    'assets/raymond/raymondfinal-34.jpg',
    'assets/raymond/raymondfinal-35.jpg'
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
