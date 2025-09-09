import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicBaseComponent } from './components/public-base/public-base.component';
import { PrivateBaseComponent } from './components/private-base/private-base.component';
import { LoginComponent } from './components/login/login.component';
import { NewRegistrationsComponent } from './components/new-registrations/new-registrations.component';
import { AvailableCoursesComponent } from './components/available-courses/available-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicBaseComponent,
    PrivateBaseComponent,
    LoginComponent,
    NewRegistrationsComponent,
    AvailableCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
