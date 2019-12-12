import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestuarantComponent } from './vendor-registration-inner-page/restuarant/restuarant.component'
import { VendorRegistrationInnerPageComponent } from './vendor-registration-inner-page/vendor-registration-inner-page.component';
import { PackagesComponent } from './vendor-registration-inner-page/packages/packages.component';
import { GroceriesComponent } from './vendor-registration-inner-page/groceries/groceries.component';
import { BookstallComponent } from './vendor-registration-inner-page/book stall/bookstall.component';
import { SucessComponent } from './vendor-registration-inner-page/regestrationsucessfull/sucess.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
     pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'vendor-registration',
    component: VendorRegistrationInnerPageComponent
  },
  {
    path: 'restaurant',
    component: RestuarantComponent
  },
  {
    path: 'groceries',
    component: GroceriesComponent
  },
  {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'bookstall',
    component: BookstallComponent
  },
  {
    path: 'sucess',
    component: SucessComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
