import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogActions } from '@angular/material/dialog';
import { SetupComponent } from './components/setup/setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './services/auth.service';

import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './shared/components/card/card.component';
import { CreateNeedComponent } from './components/create-need/create-need.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'create-need',
    component: CreateNeedComponent,
  },
  {
    path: 'create-profile',
    component: CreateProfileComponent,
  },
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    CardComponent,
    // HeaderComponent,
    SetupComponent,
    CreateNeedComponent,
    CreateProfileComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatBadgeModule,
    GraphQLModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  entryComponents: [SetupComponent],
})
export class AppModule {}
