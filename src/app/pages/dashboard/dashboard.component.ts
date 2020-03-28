import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  breakpoint: number = 4;
  constructor() { }

  manageResponsiveness(innerWidth) {

    if (innerWidth < 460) {
      this.breakpoint = 1;
    }

    if (innerWidth <= 760 && innerWidth >= 460) {
      this.breakpoint = 1;
    }

    if (innerWidth <= 1100 && innerWidth >= 760) {
      this.breakpoint = 2;
    }

    if (innerWidth <= 1400 && innerWidth >= 1100) {
      this.breakpoint = 3;
    }

    if (innerWidth > 1400) {
      this.breakpoint = 4;
    }
  }
  ngOnInit() {
    this.manageResponsiveness(window.innerWidth);
  }

  onResize(event) {
    this.manageResponsiveness(event.target.innerWidth);
  }

}
