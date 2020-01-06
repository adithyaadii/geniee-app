import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  selectedVendorValue = new Subject();
  selectedVendorValueAsObservable = this.selectedVendorValue.asObservable();

  constructor(private http: HttpClient, private auth: AuthService) { }

  getListOfCategories(): Observable<any> {
    return this.http.get('http://api.walltechsoft.com/categories/list-all');
  }

  submitVendorRegistrationForm(registrationObj): Observable<any> {
    return this.http.post('http://api.walltechsoft.com/admin/add-vendor',registrationObj);
  }

  login(requestBody): Observable<any> {
    return this.http.post('http://api.walltechsoft.com/admin/login', requestBody );
  }

  listProducts(): Observable<any> {
    return this.http.get('http://api.walltechsoft.com/vendor/products', {headers: new HttpHeaders({
    'Content-Type': 'application/json', Authorization: localStorage.getItem("LoggedInUser")})
    });
  }

  addProducts(requestBody): Observable<any> {
    return this.http.post('http://api.walltechsoft.com/admin/save-product', requestBody, {headers: new HttpHeaders(
      {'Content-Type': 'application/json', Authorization: localStorage.getItem("LoggedInUser")}
    )})
  }

  getProducts(): Observable<any> {
    return this.http.get('http://api.walltechsoft.com/admin/product/1/all', {headers: new HttpHeaders(
      {'Content-Type': 'application/x-www-form-urlencoded', Authorization: localStorage.getItem("LoggedInUser")}
    )});
  }

}
