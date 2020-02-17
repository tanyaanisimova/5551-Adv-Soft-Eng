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

    // save current user to local storage
    localStorage.setItem(this.CURR_USER_KEY, JSON.stringify(user));
    return true; // successful login
  }

  logout() {
    // clear current user
    localStorage.setItem(this.CURR_USER_KEY, null);
  }

  getUserName() {
    const user: User = JSON.parse(localStorage.getItem(this.CURR_USER_KEY));
    return user.name;
  }

  register(name, email, password) {
    if (localStorage.getItem(email) != null) {
      return false; // email already in use
    }

    const user: User = { name, email, password };
    localStorage.setItem(user.email, JSON.stringify(user));
    // save current user
    localStorage.setItem(this.CURR_USER_KEY, JSON.stringify(user));
    return true; // successful registration
  }
}
