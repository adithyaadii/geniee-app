import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginServ: RegistrationService, private toastr: ToastrService,
    private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const requestBody = {
      Username: this.loginForm.value.username,
      Password: this.loginForm.value.password
    }
    this.loginServ.login(requestBody).subscribe(
      (data) => {
        if(data && data !== undefined) {
          this.auth.sendToken(data.api_key);
          this.router.navigate(['/registration']);
        }
      }, (error) => {
        this.toastr.error(error.error.message);
      });
  }

}
