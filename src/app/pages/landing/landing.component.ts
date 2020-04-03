import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SetupComponent } from '../../components/setup/setup.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private dialog: MatDialog, public auth: AuthService) {}

  ngOnInit(): void {}

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'signup-dialog';

    this.dialog
      .open(SetupComponent, dialogConfig)
      .afterClosed()
      .subscribe(userRegistationData => {
        console.log('successfully registered');
        console.log(userRegistationData);
      });
  }
}
