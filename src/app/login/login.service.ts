import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userName, password): Observable<any> {
    const params = new HttpParams().set('Username', userName).set('Password', password);
    return this.http.post('http://api.walltechsoft.com/vendor/login', { params });
  }

}
