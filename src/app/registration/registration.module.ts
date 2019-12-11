import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRegistrationInnerPageModule } from '../vendor-registration-inner-page/vendor-registration-inner-page.module';
import { RegistrationService } from './registration.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VendorRegistrationInnerPageModule
  ],
  providers: [RegistrationService]
})
export class RegistrationModule { }
