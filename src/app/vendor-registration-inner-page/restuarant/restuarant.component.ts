import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.scss']
})
export class RestuarantComponent implements OnInit {

  constructor(private router: Router) { }

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
      this.router.navigate(['registration-successfull']);
    }
  }

}
