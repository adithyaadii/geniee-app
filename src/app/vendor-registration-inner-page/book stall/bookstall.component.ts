import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration/registration.service';

@Component({
  selector: 'app-bookstall',
  templateUrl: './bookstall.component.html',
  styleUrls: ['./bookstall.component.scss']
})
export class BookstallComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService) { }

  bookStallForm: FormGroup;

  ngOnInit() {
    this.bookStallForm = new FormGroup({
      vendorName: new FormControl('', [Validators.required]),
      vendorPocName: new FormControl('', [Validators.required]),
      vendorPocDesignation: new FormControl('', [Validators.required]),
      vendorPocContactNumber: new FormControl('', [Validators.required]),
      vendorPocEmail: new FormControl('', [Validators.required]),
      vendorCity: new FormControl('', [Validators.required]),
    });
  }

  bookStallFormSubmit(){
    if (this.bookStallForm.valid) {
      const registrationForm = {
        UserCategoryID: 2,
        Name: this.bookStallForm.value.vendorName,
        POCName: this.bookStallForm.value.vendorPocName,
        POCDesignation: this.bookStallForm.value.vendorPocDesignation,
        Phone: this.bookStallForm.value.vendorPocContactNumber,
        Email: this.bookStallForm.value.vendorPocEmail,
        City: this.bookStallForm.value.vendorCity
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
