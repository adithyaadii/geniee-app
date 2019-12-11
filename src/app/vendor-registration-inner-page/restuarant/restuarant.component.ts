import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.scss']
})
export class RestuarantComponent implements OnInit {

  constructor() { }

  restuarantForm: FormGroup;

  ngOnInit() {
    this.restuarantForm = new FormGroup({
      vendorName: new FormControl('', [Validators.required]),
      vendorPocName: new FormControl('', [Validators.required]),
      vendorPocDesignation: new FormControl('', [Validators.required]),
      VendorPocContactNumber: new FormControl('', [Validators.required]),
      VendorPocEmail: new FormControl('', [Validators.required]),
      vendorCity: new FormControl('', [Validators.required]),
    });
  }

  restuarantFormSubmit(){
  }

}
