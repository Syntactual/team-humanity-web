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
  @ViewChild('imgPreview', { static: false }) imgPreview: ElementRef;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  imageURL: string;

  constructor(private formBuilder: FormBuilder) {}

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
    phone: '',
    picture: null,
  } as UserRegistrationData;

  states = new StatesComponent();

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/)]],
    });
    this.secondFormGroup = this.formBuilder.group({
      streetAddr: ['', Validators.required],
      aptSuit: [''],
      city: ['', Validators.required],
      stateAbbr: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
    });
    this.thirdFormGroup = this.formBuilder.group({
      profilePicture: ['', Validators.required],
    });
  }

  onFileChange(event) {
    this.user.picture = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgPreview = this.imgPreview.nativeElement;
      imgPreview.src = reader.result;
    };
    reader.readAsDataURL(this.user.picture);
    console.log(this.imageURL);
    console.log(this.user.picture);
  }

  onSubmit() {
    this.user = {
      ...this.user,
      firstName: this.firstFormGroup.get('firstName').value,
      lastName: this.firstFormGroup.get('lastName').value,
      email: this.firstFormGroup.get('email').value,
      phone: this.firstFormGroup.get('phone').value,
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
