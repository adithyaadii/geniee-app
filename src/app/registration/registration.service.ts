import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  selectedVendorValue = new Subject();
  selectedVendorValueAsObservable = this.selectedVendorValue.asObservable();

  constructor(private http: HttpClient) { }

  getListOfCategories(): Observable<any> {
    return this.http.get('http://api.walltechsoft.com/categories/list-all');
  }

  submitVendorRegistrationForm(registrationObj): Observable<any> {
    return this.http.post('http://api.walltechsoft.com/vendor/register',registrationObj);
  }

  login(requestBody): Observable<any> {
    return this.http.post('http://api.walltechsoft.com/vendor/login', requestBody );
  }

  listProducts(): Observable<any> {
    return this.http.get('http://api.walltechsoft.com/vendor/products', {headers: new HttpHeaders({
    'Content-Type': 'application/json', Authorization: 'OFk2Q1FnS0pIU2phaHdFekpGRUtZR1dnTmY5YUdyTk5CZFdFd0V2Uw=='})
    });
  }

  addProducts(requestBody): Observable<any> {
    return this.http.post('http://api.walltechsoft.com/vendor/product/add', requestBody, {headers: new HttpHeaders(
      {'Content-Type': 'application/json', Authorization: 'OFk2Q1FnS0pIU2phaHdFekpGRUtZR1dnTmY5YUdyTk5CZFdFd0V2Uw=='}
    )})
  }

}
