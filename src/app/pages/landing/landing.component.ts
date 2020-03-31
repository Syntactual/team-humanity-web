import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  togglePopup = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.togglePopup = !this.togglePopup;
  }

}
