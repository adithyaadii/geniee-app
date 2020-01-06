import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.scss']
})
export class ProductUploadComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService, private auth: AuthService) { }

  addProductForm: FormGroup;
  productCategoryList = [];
  selectedCategoryArray = [];

  ngOnInit() {
    const dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
      }
      });
    }
    this.addProductForm = new FormGroup({
      productName: new FormControl(''),
      regularPrice: new FormControl(''),
      sku: new FormControl(''),
      salePrice: new FormControl(''),
      stockStatus: new FormControl(''),
      productDescription: new FormControl(''),
      categories: new FormControl(),
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
    this.auth.logout();
  }

  getVendorProductList() {
    this.registrationService.listProducts().subscribe(
      (data) => {
        this.productCategoryList = data.result;
      });
  }

  selectCategory(selectedCategory, event) {
    if (event.target.checked === true) {
      this.selectedCategoryArray.push(selectedCategory.CategoryID);
    } else if (event.target.checked === false) {
      let index = this.selectedCategoryArray.indexOf(selectedCategory.CategoryID);
      if (index > -1) {
        this.selectedCategoryArray.splice(index, 1);
      }
    }
  }

  uploadVendorProducts() {
    const productUploadPayload = {
      ProductID: '',
      CategoryID: this.selectedCategoryArray,
      Name: this.addProductForm.value.productName,
      ProductType: 'Veg',
      SKU: this.addProductForm.value.sku,
      Quantity: this.addProductForm.value.productName,
      InStock: this.addProductForm.value.stockStatus,
      RegularPrice: this.addProductForm.value.regularPrice,
      SalePrice: this.addProductForm.value.salePrice,
      Description: this.addProductForm.value.productDescription,
    };
    this.registrationService.addProducts(productUploadPayload).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
