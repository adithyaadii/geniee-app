import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration/registration.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService) { }

  packageForm: FormGroup;

  ngOnInit() {
    this.packageForm = new FormGroup({
      vendorName: new FormControl('', [Validators.required]),
      vendorPocName: new FormControl('', [Validators.required]),
      vendorPocDesignation: new FormControl('', [Validators.required]),
      vendorPocContactNumber: new FormControl('', [Validators.required]),
      vendorPocEmail: new FormControl('', [Validators.required]),
      vendorCity: new FormControl('', [Validators.required]),
    });
  }

  packageFormSubmit(){
    if (this.packageForm.valid) {
      const registrationForm = {
        UserCategoryID: 3,
        Name: this.packageForm.value.vendorName,
        POCName: this.packageForm.value.vendorPocName,
        POCDesignation: this.packageForm.value.vendorPocDesignation,
        Phone: this.packageForm.value.vendorPocContactNumber,
        Email: this.packageForm.value.vendorPocEmail,
        City: this.packageForm.value.vendorCity
      }
      this.registrationService.submitVendorRegistrationForm(registrationForm).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['sucess']);
        }
      );
    }
  }

}
