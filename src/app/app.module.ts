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
import { PackagesComponent } from './vendor-registration-inner-page/packages/packages.component';
import { GroceriesComponent } from './vendor-registration-inner-page/groceries/groceries.component';
import { BookstallComponent } from './vendor-registration-inner-page/book stall/bookstall.component';
import { SucessComponent } from './regestration-successfull/sucess.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import { ProductListComponent } from './product-upload/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
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
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
