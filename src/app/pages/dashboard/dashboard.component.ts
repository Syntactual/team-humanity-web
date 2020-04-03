import { Component, OnInit } from '@angular/core';
import { UserGQL, User } from '../../../generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/models/card';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<User>;
  mockCards: Card[];
  breakpoint: number = 4;
  constructor(private userGQL: UserGQL, public auth: AuthService) {
    this.mockCards = [
      {
        imageUrl:
          'https://www.eharmony.com/blog/wp-content/uploads/2017/07/short-men-and-dating-e1499470604767.jpg',
        donationAmount: 120,
        firstName: 'Mark',
        lastName: 'Roger',
        message:
          'I manage a coffee shop and we had to close temporarily. I don’t know how I’m going to cover my rent.'
      },
      {
        imageUrl:
          'https://www.bandt.com.au/information/uploads/2018/07/Karen-Lewis-3-1260x840.jpg',
        donationAmount: 200,
        firstName: 'Sara',
        lastName: 'S',
        message:
          'I’m a server and lost my only source of income. Need money for groceries. I am always will to help.'
      },
      {
        imageUrl:
          'https://www.trulytafakari.com/wp-content/uploads/2013/10/tumblr_mr0sq0ZNMa1s516wlo1_1280.jpg',
        donationAmount: 200,
        firstName: 'Aiden',
        lastName: 'M',
        message:
          'I’m a singer-songwriter who gigs most nights. All of my shows got cancelled when all the bars shut down.'
      },
      {
        imageUrl:
          'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg',
        donationAmount: 200,
        firstName: 'Marcus',
        lastName: 'B',
        message:
          'I’m a professional wedding photographer and all of my clients have had to reschedule their upcoming weddings.'
      },
      {
        imageUrl:
          'https://www.whitemenblackwomenmeet.com/wp-content/uploads/2018/06/black-woman.jpg',
        donationAmount: 200,
        firstName: 'Rachel',
        lastName: 'H',
        message:
          'The local theater group I work for was forced to close its door temporarily. I don’t know how I’m going to pay bills.'
      }
    ];
  }

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
    this.user$ = this.userGQL
      .watch()
      .valueChanges.pipe(map(({ data }) => data.user));
  }

  onResize(event) {
    this.manageResponsiveness(event.target.innerWidth);
  }
}
