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

  groceryForm: FormGroup;

  ngOnInit() {
    this.groceryForm = new FormGroup({
      vendorName: new FormControl('', [Validators.required]),
      vendorPocName: new FormControl('', [Validators.required]),
      vendorPocDesignation: new FormControl('', [Validators.required]),
      vendorPocContactNumber: new FormControl('', [Validators.required]),
      vendorPocEmail: new FormControl('', [Validators.required]),
      vendorCity: new FormControl('', [Validators.required]),
    });
  }

  groceryFormSubmit(){
    if (this.groceryForm.valid) {
      const registrationForm = {
        UserCategoryID: 4,
        Name: this.groceryForm.value.vendorName,
        POCName: this.groceryForm.value.vendorPocName,
        POCDesignation: this.groceryForm.value.vendorPocDesignation,
        Phone: this.groceryForm.value.vendorPocContactNumber,
        Email: this.groceryForm.value.vendorPocEmail,
        City: this.groceryForm.value.vendorCity
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
