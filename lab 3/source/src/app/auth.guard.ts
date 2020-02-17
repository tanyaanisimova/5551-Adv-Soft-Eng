import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {User} from './user';

@Injectable()
export class AuthGuard implements CanActivate {
  user: User;
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user !== null) { // user is signed in
      return true;
    }

    // redirect to sign in/register
    this.router.navigate(['auth']);
    return false;
  }
}
