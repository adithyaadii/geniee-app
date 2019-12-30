import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.scss']
})
export class ProductUploadComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService) { }

  addProductForm: FormGroup;
  productCategoryList = [];

  ngOnInit() {
    this.addProductForm = new FormGroup({
      productName: new FormControl(''),
      regularPrice: new FormControl(''),
      sku: new FormControl(''),
      salePrice: new FormControl(''),
      stockStatus: new FormControl(''),
      productDescription: new FormControl(''),
    });
    this.getVendorProductList();
  }
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openBtn").style.visibility = "hidden";
    document.getElementById("page-content").style.marginLeft = "18%";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("openBtn").style.visibility = "visible";
    document.getElementById("page-content").style.margin = "10px";
  }

  addProduct() {
    this.router.navigate(['product-list']);
  }

  logout() {
    this.router.navigate(['login']);
  }

  getVendorProductList() {
    this.registrationService.listProducts().subscribe(
      (data) => {
        this.productCategoryList = data.result;
      });
  }

}
