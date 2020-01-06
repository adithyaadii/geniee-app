import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss']
})
export class SucessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToProductUpload() {
    this.router.navigate(['product-upload']);
  }

}
