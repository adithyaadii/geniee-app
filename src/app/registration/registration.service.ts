import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  selectedVendorValue = new Subject();
  selectedVendorValueAsObservable = this.selectedVendorValue.asObservable();

  constructor(private http: HttpClient) { }

  getListOfCategories(): Observable<any> {
    return this.http.get('https://api.walltechsoft.com/list-categories');
  }

  submitVendorRegistrationForm(registrationObj): Observable<any> {
    return this.http.post('http://api.walltechsoft.com/register',registrationObj);
  }

}
