import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationService } from 'src/app/registration/registration.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AuthService } from 'src/app/auth.service';

export interface PeriodicElement {
  name: string;
  sku: number;
  rp: number;
  sp: number;
  categories: string;
  type: string;
  date: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'prodImage', 'name', 'sku', 'rp', 'sp', 'categories', 'type', 'date'];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  

  constructor(private registrationSer: RegistrationService, private auth: AuthService) { }

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
    this.getProductList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
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

  getProductList() {
    this.registrationSer.getProducts().subscribe(
      (data) => {
        this.dataSource.data = data.result;
      }
    );
  }

  logout() {
    this.auth.logout();
  }

}
