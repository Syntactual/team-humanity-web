import {Component} from '@angular/core';
import {UserRegistrationData} from '../../models/UserRegistrationData';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {
  imgURL: string | ArrayBuffer;

  user: UserRegistrationData = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    picture: null
  } as UserRegistrationData;

  constructor(public dialogRef: MatDialogRef<SetupComponent>) {
  }

  handleFileInput(files: FileList) {
    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.imgURL = reader.result;
    };
  }

  closeModal() {
    if (this.user.password === this.user.confirmPassword) {
      this.dialogRef.close(this.user);
    } else {
      alert('passwords don\'t match');
    }
  }

}
