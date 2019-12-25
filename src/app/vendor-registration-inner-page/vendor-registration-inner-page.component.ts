import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-registration-inner-page',
  templateUrl: './vendor-registration-inner-page.component.html',
  styleUrls: ['./vendor-registration-inner-page.component.scss']
})
export class VendorRegistrationInnerPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedVendorValues = this.router.getCurrentNavigation().extras.state.vendorOptions;
        localStorage.setItem('selectedVendor', this.selectedVendorValues);
      }
    })
   }

  selectedVendorValues: any;

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent(){
    return this.selectedVendorValues = localStorage.getItem('selectedVendor');
  }

}
