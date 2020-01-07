import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration/registration.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuardService implements CanActivate {

  constructor(private registrationService: RegistrationService, private router: Router) { }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.registrationService.isRegistered()) {
      return true;
    } else {
      this.router.navigate(['registration']);
      return false;
    }
  }

}
