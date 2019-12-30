import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration/registration.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent implements OnInit {

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
        UserCategoryID: 4,
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
