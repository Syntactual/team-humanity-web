import {
  Component,
  OnInit,
  NgModule,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationData } from '../../models/UserRegistrationData';
import { Address } from '../../models/Address';
import { State } from '../../models/State';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
// @NgModule({
//   imports: [ReactiveFormsModule],
// })
export class CreateProfileComponent implements OnInit {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  files = [];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}
  imgURL: string | ArrayBuffer;

  user: UserRegistrationData = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    picture: null,
  } as UserRegistrationData;

  address: Address = {
    streetAddress: '',
    aptSuit: '',
    city: '',
    zipCode: null,
    stateAbbr: '',
  } as Address;

  states: State[] = [
    {
      viewValue: 'Alabama',
      value: 'AL',
    },
    {
      viewValue: 'Alaska',
      value: 'AK',
    },
    {
      viewValue: 'American Samoa',
      value: 'AS',
    },
    {
      viewValue: 'Arizona',
      value: 'AZ',
    },
    {
      viewValue: 'Arkansas',
      value: 'AR',
    },
    {
      viewValue: 'California',
      value: 'CA',
    },
    {
      viewValue: 'Colorado',
      value: 'CO',
    },
    {
      viewValue: 'Connecticut',
      value: 'CT',
    },
    {
      viewValue: 'Delaware',
      value: 'DE',
    },
    {
      viewValue: 'District Of Columbia',
      value: 'DC',
    },
    {
      viewValue: 'Federated States Of Micronesia',
      value: 'FM',
    },
    {
      viewValue: 'Florida',
      value: 'FL',
    },
    {
      viewValue: 'Georgia',
      value: 'GA',
    },
    {
      viewValue: 'Guam',
      value: 'GU',
    },
    {
      viewValue: 'Hawaii',
      value: 'HI',
    },
    {
      viewValue: 'Idaho',
      value: 'ID',
    },
    {
      viewValue: 'Illinois',
      value: 'IL',
    },
    {
      viewValue: 'Indiana',
      value: 'IN',
    },
    {
      viewValue: 'Iowa',
      value: 'IA',
    },
    {
      viewValue: 'Kansas',
      value: 'KS',
    },
    {
      viewValue: 'Kentucky',
      value: 'KY',
    },
    {
      viewValue: 'Louisiana',
      value: 'LA',
    },
    {
      viewValue: 'Maine',
      value: 'ME',
    },
    {
      viewValue: 'Marshall Islands',
      value: 'MH',
    },
    {
      viewValue: 'Maryland',
      value: 'MD',
    },
    {
      viewValue: 'Massachusetts',
      value: 'MA',
    },
    {
      viewValue: 'Michigan',
      value: 'MI',
    },
    {
      viewValue: 'Minnesota',
      value: 'MN',
    },
    {
      viewValue: 'Mississippi',
      value: 'MS',
    },
    {
      viewValue: 'Missouri',
      value: 'MO',
    },
    {
      viewValue: 'Montana',
      value: 'MT',
    },
    {
      viewValue: 'Nebraska',
      value: 'NE',
    },
    {
      viewValue: 'Nevada',
      value: 'NV',
    },
    {
      viewValue: 'New Hampshire',
      value: 'NH',
    },
    {
      viewValue: 'New Jersey',
      value: 'NJ',
    },
    {
      viewValue: 'New Mexico',
      value: 'NM',
    },
    {
      viewValue: 'New York',
      value: 'NY',
    },
    {
      viewValue: 'North Carolina',
      value: 'NC',
    },
    {
      viewValue: 'North Dakota',
      value: 'ND',
    },
    {
      viewValue: 'Northern Mariana Islands',
      value: 'MP',
    },
    {
      viewValue: 'Ohio',
      value: 'OH',
    },
    {
      viewValue: 'Oklahoma',
      value: 'OK',
    },
    {
      viewValue: 'Oregon',
      value: 'OR',
    },
    {
      viewValue: 'Palau',
      value: 'PW',
    },
    {
      viewValue: 'Pennsylvania',
      value: 'PA',
    },
    {
      viewValue: 'Puerto Rico',
      value: 'PR',
    },
    {
      viewValue: 'Rhode Island',
      value: 'RI',
    },
    {
      viewValue: 'South Carolina',
      value: 'SC',
    },
    {
      viewValue: 'South Dakota',
      value: 'SD',
    },
    {
      viewValue: 'Tennessee',
      value: 'TN',
    },
    {
      viewValue: 'Texas',
      value: 'TX',
    },
    {
      viewValue: 'Utah',
      value: 'UT',
    },
    {
      viewValue: 'Vermont',
      value: 'VT',
    },
    {
      viewValue: 'Virgin Islands',
      value: 'VI',
    },
    {
      viewValue: 'Virginia',
      value: 'VA',
    },
    {
      viewValue: 'Washington',
      value: 'WA',
    },
    {
      viewValue: 'West Virginia',
      value: 'WV',
    },
    {
      viewValue: 'Wisconsin',
      value: 'WI',
    },
    {
      viewValue: 'Wyoming',
      value: 'WY',
    },
  ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      // this.uploadFile();
      fileUpload.click();
    };
    fileUpload.click();
  }
}
