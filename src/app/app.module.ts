import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LandingComponent } from "./pages/landing/landing.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatBadgeModule } from "@angular/material/badge";
import { CardComponent } from "./shared/components/card/card.component";

const appRoutes: Routes = [
  // {
  //   path: 'dashboard', component: DashboardComponent
  // },
  {
    path: "",
    component: LandingComponent
  },
  { path: "**", redirectTo: "" }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    CardComponent
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
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule
  ]
})
export class AppModule {}
