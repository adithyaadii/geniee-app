import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, AfterViewInit {

  constructor(private selectedVendorService: RegistrationService) { }

  vendors = [];
  proceedButtonDisableWithoutSelctingOption = false;
  @ViewChild('mySelect', {static: false}) mySelect: ElementRef;

  registrationForm: FormGroup;

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
    this.proceedButtonDisableWithoutSelctingOption = false;
    this.selectedVendorService.selectedVendorValue.next(vendorOptions);
  }

}
