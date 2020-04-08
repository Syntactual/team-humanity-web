import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationData } from '../../models/UserRegistrationData';
import { Address } from '../../models/Address';
import { StatesComponent } from './states.component';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  address: Address = {
    streetAddress: '',
    aptSuit: '',
    city: '',
    zipCode: null,
    stateAbbr: '',
  } as Address;

  user: UserRegistrationData = {
    firstName: '',
    lastName: '',
    email: '',
    address: this.address,
    picture: null,
  } as UserRegistrationData;

  states = new StatesComponent();

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.secondFormGroup = this._formBuilder.group({
      streetAddr: ['', Validators.required],
      aptSuit: [''],
      city: ['', Validators.required],
      stateAbbr: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFileChange(event) {
    this.user.picture = event.target.files[0];
  }

  onSubmit() {
    this.user = {
      ...this.user,
      firstName: this.firstFormGroup.get('firstName').value,
      lastName: this.firstFormGroup.get('lastName').value,
      email: this.firstFormGroup.get('email').value,
      address: {
        streetAddress: this.secondFormGroup.get('streetAddr').value,
        aptSuit: this.secondFormGroup.get('aptSuit').value,
        city: this.secondFormGroup.get('city').value,
        zipCode: this.secondFormGroup.get('zipCode').value,
        stateAbbr: this.secondFormGroup.get('stateAbbr').value,
      },
    };

    console.log('Submitting', this.user);

    // Call our GQL submit function on this.user here...
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.click();
  }
}
