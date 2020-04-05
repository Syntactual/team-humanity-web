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
import { StatesComponent } from './states.component';
import { MyErrorStateMatcher } from './error-state-matcher.component';

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

  matcher = new MyErrorStateMatcher();

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

  states = new StatesComponent();

  checkPasswords(group: FormGroup) {
    console.log(group);
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailFormControl: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/),
          ],
        ],
        confirmPassword: [
          '',
          [Validators.required, Validators.pattern(this.user.password)],
        ],
      },
      { validator: this.checkPasswords },
    );
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
