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
  files = [];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}
  imgURL: string | ArrayBuffer;

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
      emailFormControl: ['', [Validators.required, Validators.email]],
    });
    this.secondFormGroup = this._formBuilder.group({
      streetAddr: ['', Validators.required],
      apartSuit: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
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
