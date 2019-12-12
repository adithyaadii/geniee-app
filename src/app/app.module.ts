import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestuarantComponent } from './vendor-registration-inner-page/restuarant/restuarant.component';
import { VendorRegistrationInnerPageComponent } from './vendor-registration-inner-page/vendor-registration-inner-page.component';
import { RegistrationService } from './registration/registration.service';
import { RegistrationSuccessfullComponent } from './registration-successfull/registration-successfull.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RestuarantComponent,
    VendorRegistrationInnerPageComponent,
    RegistrationSuccessfullComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
