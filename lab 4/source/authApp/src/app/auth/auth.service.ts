import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private CURR_USER_KEY = 'currentUser';

  constructor() { }

  login(email, password) {
    const user: User = JSON.parse(localStorage.getItem(email));
    if (user == null || user.password !== password) {
      return false; // invalid credentials
    }

    sessionStorage.setItem(this.CURR_USER_KEY, JSON.stringify(user));
    return true; // successful login
  }

  register(name, email, password) {
    let user: User = JSON.parse(localStorage.getItem(email));
    if (user != null) {
      return false; // email already in use
    }

    user = { name, email, password };
    localStorage.setItem(user.email, JSON.stringify(user)); // register

    sessionStorage.setItem(this.CURR_USER_KEY, JSON.stringify(user)); // login
    return true; // successful registration
  }

  logout() {
    // clear current user
    sessionStorage.setItem(this.CURR_USER_KEY, null);
  }
}
