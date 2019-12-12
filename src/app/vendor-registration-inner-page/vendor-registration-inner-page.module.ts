import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestuarantModule } from './restuarant/restuarnt.module';
import { GroceriesComponent } from './groceries/groceries.component';
import { BookstallComponent } from './book stall/bookstall.component';
import { PackagesComponent } from './packages/packages.component';
import { SucessComponent } from './regestrationsucessfull/sucess.component';



@NgModule({
  declarations: [GroceriesComponent, BookstallComponent, PackagesComponent, SucessComponent],
  imports: [
    CommonModule,
    RestuarantModule
  ]
})
export class VendorRegistrationInnerPageModule { }
