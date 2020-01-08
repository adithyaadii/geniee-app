import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.scss']
})
export class ProductUploadComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService, private auth: AuthService, private formBuilder: FormBuilder) { }

  addProductForm: FormGroup;
  productCategoryList = [];
  selectedCategoryArray = [];
  fileToUpload: any;

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      productName: new FormControl('', Validators.required),
      regularPrice: new FormControl('', Validators.required),
      sku: new FormControl('', Validators.required),
      salePrice: new FormControl('', Validators.required),
      stockStatus: new FormControl('', Validators.required),
      productDescription: new FormControl('', Validators.required),
      categories: new FormControl('', Validators.required),
    });
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
    if (this.addProductForm.invalid) {
      return;
    }
    const productUploadPayload = {
      ProductID: '',
      CategoryID: 1,
      Name: this.addProductForm.value.productName,
      ProductType: 'Veg',
      SKU: this.addProductForm.value.sku,
      Quantity: 1,
      InStock: this.addProductForm.value.stockStatus,
      RegularPrice: this.addProductForm.value.regularPrice,
      SalePrice: this.addProductForm.value.salePrice,
      Description: this.addProductForm.value.productDescription,
    };
    this.registrationService.addProducts(productUploadPayload).subscribe(
      (data) => {
        if (data && data!== undefined) {
          this.router.navigate(['product-list']);
        }
      }
    );
  }

  createticketfileChange(event: FileList) {
    const imageUpload: File = event.item(0);
    this.fileToUpload = imageUpload.name;
    console.log(this.fileToUpload);
  }
}
