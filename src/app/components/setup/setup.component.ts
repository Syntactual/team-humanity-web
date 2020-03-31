import {Component} from '@angular/core';
import {UserRegistrationData} from '../../models/UserRegistrationData';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

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

  constructor(private dialogRef: MatDialogRef<SetupComponent>,
              private router: Router,
  ) {
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

  hasConfirmedPassword() {
    return this.user.password === this.user.confirmPassword;
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
