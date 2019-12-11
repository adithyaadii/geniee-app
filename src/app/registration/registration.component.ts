import { Component, OnInit, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, AfterViewInit {

  constructor(private selectedVendorService: RegistrationService, private router: Router) { }

  vendors = [];
  proceedButtonDisableWithoutSelctingOption = false;
  vendorOptions: any;
  registrationForm: FormGroup;
  showVendorBasedForm = false;

  ngOnInit() {
    this.vendors = [
      {
        vendorName: 'Restaurant',
        id: 1
      },
      {
        vendorName: 'Grocery Store',
        id: 2
      },
      {
        vendorName: 'Packages',
        id: 3
      },
      {
        vendorName: 'Book Stall',
        id: 4
      }
    ];
    this.registrationForm = new FormGroup({
      vendorList: new FormControl('')
    });
    if(this.registrationForm.value.vendorList === '') {
      this.proceedButtonDisableWithoutSelctingOption = true;
    } else {
      this.proceedButtonDisableWithoutSelctingOption = false;
    }
  }

  ngAfterViewInit() {
  }

  selectVendor(vendorOptions) {
    this.vendorOptions = vendorOptions;
    this.proceedButtonDisableWithoutSelctingOption = false;
  }

  registerForm() {
    const navigationExtras: NavigationExtras = {
      state: {
        vendorOptions: this.vendorOptions
      }
    };
    this.router.navigate(['vendor-registration'], navigationExtras);
  }

}
