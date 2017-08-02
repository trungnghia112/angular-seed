import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string = '/';

  // set url login
  loginUrl: string = 'login';
  isLoggedInRedirectUrl: string = '/';


  constructor(private userService: UserService) {
    this.userService.isAuthenticated.subscribe(
      (authenticated: boolean) => {
        this.isLoggedIn = authenticated;
      }
    );
  }
}
