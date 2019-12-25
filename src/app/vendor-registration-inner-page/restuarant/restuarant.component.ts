import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration/registration.service';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.scss']
})
export class RestuarantComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService) { }

  restuarantForm: FormGroup;

  ngOnInit() {
    this.restuarantForm = new FormGroup({
      vendorName: new FormControl('', [Validators.required]),
      vendorPocName: new FormControl('', [Validators.required]),
      vendorPocDesignation: new FormControl('', [Validators.required]),
      vendorPocContactNumber: new FormControl('', [Validators.required]),
      vendorPocEmail: new FormControl('', [Validators.required]),
      vendorCity: new FormControl('', [Validators.required]),
    });
  }

  restuarantFormSubmit(){
    if (this.restuarantForm.valid) {
      const registrationForm = {
        UserCategoryID: 1,
        Name: this.restuarantForm.value.vendorName,
        POCName: this.restuarantForm.value.vendorPocName,
        POCDesignation: this.restuarantForm.value.vendorPocDesignation,
        Phone: this.restuarantForm.value.vendorPocContactNumber,
        Email: this.restuarantForm.value.vendorPocEmail,
        City: this.restuarantForm.value.vendorCity
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
