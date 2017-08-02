import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Errors } from '../shared/models/errors.model';
import { CustomValidator } from '../shared/validator/custom.validator';

import { UserService } from '../shared/services/user.service';
import { AuthService } from '../shared/services/auth.service';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  authType: String = 'login';
  title: String = 'Sign in';
  errors: Errors = new Errors();

  isSubmitting = false;
  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthService,
              private fb: FormBuilder) {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl(`${this.authService.isLoggedInRedirectUrl}`);
    }

    // use FormBuilder to create a form group
    this.form = fb.group({
      'email': ['',
        Validators.compose([Validators.required, CustomValidator.emailFormat])
      ],
      'password': ['',
        Validators.compose([Validators.required])
      ]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }


  submitForm(values: any) {
    this.isSubmitting = true;
    this.errors = new Errors();

    this.userService
      .attemptAuth(this.authType, values)
      .subscribe(
        data => this.router.navigateByUrl(`${this.authService.redirectUrl}`),
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
  }
}
