import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vendor-registration-inner-page',
  templateUrl: './vendor-registration-inner-page.component.html',
  styleUrls: ['./vendor-registration-inner-page.component.scss']
})
export class VendorRegistrationInnerPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationService) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedVendorValues = this.router.getCurrentNavigation().extras.state.vendorOptions;
        localStorage.setItem('selectedVendor', this.selectedVendorValues);
      }
    })
   }

  selectedVendorValues: any;
  showVendorListScreen: boolean;
  isLoading = false;
  displayedColumns: string[] = ['vendorId', 'vendorName'];
  dataSource = new MatTableDataSource();

  ngOnInit() {
    if (this.selectedVendorValues) {
      this.getVendorList();
    } else {
      this.loadComponent();
    }
  }

  loadComponent(){
    return this.selectedVendorValues = localStorage.getItem('selectedVendor');
  }

  getVendorList() {
    this.isLoading = true;
    this.registrationService.getVendorList(this.selectedVendorValues).subscribe(
      (data) => {
        if (data.vendors.length > 0) {
          this.dataSource.data = data.vendors
          this.showVendorListScreen = true;
        } else {
          this.showVendorListScreen = false;
        }
        this.isLoading = false;
      }
    );
  }

  showProductList() {
    this.router.navigate(['product-list']);
  }

}
