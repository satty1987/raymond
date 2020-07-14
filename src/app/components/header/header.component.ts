import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openNav = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          console.log("start");
        }
        // start loading pages
        if (event instanceof NavigationEnd) {
          console.log("end");
          this.openNav = false;
          // end of loading paegs
        }
      });
  }

  toggle(){
    this.openNav =  ! this.openNav;
  }
}
