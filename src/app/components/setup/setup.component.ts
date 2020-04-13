import { Component } from '@angular/core';
import { UserRegistrationData } from '../../models/UserRegistrationData';
import { Address } from '../../models/Address';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateProfileGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
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

  constructor(
    private dialogRef: MatDialogRef<SetupComponent>,
    private router: Router,
    private createProfileGQL: CreateProfileGQL,
  ) {}

  handleFileInput(files: FileList) {
    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      this.imgURL = reader.result;
    };
  }

  hasConfirmedPassword() {
    return true;
  }

  closeModal() {
    if (this.hasConfirmedPassword()) {
      this.dialogRef.close(this.user);
      this.router.navigate(['/dashboard']);
    } else {
      alert('passwords don\'t match');
    }
  }
}
