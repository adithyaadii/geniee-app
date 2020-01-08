import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration/registration.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuardService {

  constructor(private registrationService: RegistrationService, private router: Router) { }

}
