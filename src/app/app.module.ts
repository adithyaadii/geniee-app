import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestuarantComponent } from './vendor-registration-inner-page/restuarant/restuarant.component';
import { VendorRegistrationInnerPageComponent } from './vendor-registration-inner-page/vendor-registration-inner-page.component';
import { RegistrationService } from './registration/registration.service';
import { PackagesComponent } from './vendor-registration-inner-page/packages/packages.component';
import { GroceriesComponent } from './vendor-registration-inner-page/groceries/groceries.component';
import { BookstallComponent } from './vendor-registration-inner-page/book stall/bookstall.component';
import { SucessComponent } from './regestration-successfull/sucess.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import { ProductListComponent } from './product-upload/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AppMaterialModule } from './app.material.module';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RestuarantComponent,
    VendorRegistrationInnerPageComponent,
    BookstallComponent,
    GroceriesComponent,
    PackagesComponent,
    SucessComponent,
    ProductUploadComponent,
    ProductListComponent,
    AdminProfileComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [RegistrationService, LoginService, AuthService, {provide: AuthGuardService, useClass: AuthGuardService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
