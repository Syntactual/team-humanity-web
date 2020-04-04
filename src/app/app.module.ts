import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/landing/header/header.component';
import { MatDialogModule, MatDialogActions } from '@angular/material/dialog';
import { SetupComponent } from './components/setup/setup.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './shared/components/card/card.component';
import { CreateNeedComponent } from './pages/create-need/create-need.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'create-need',
    component: CreateNeedComponent
  },
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    CardComponent,
    HeaderComponent,
    SetupComponent,
    CreateNeedComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule
  ],
  entryComponents: [SetupComponent]
})
export class AppModule {}
