import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  user: User;
  isRegister = false;
  message = '';

  constructor( private route: ActivatedRoute, private router: Router ) {
    if (localStorage.getItem('user') !== null) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}

  displaySignIn(): void {
    this.message = '';
    this.isRegister = false;
  }

  signIn(): void {
    this.message = '';
    if (this.email === '' || this.password === '') {
      this.message = 'Please fill out all the fields';

    } else {
      this.user = JSON.parse(localStorage.getItem(this.email));

      if (this.user == null) {
        this.message = 'Invalid credentials';

      } else if (this.user.password !== this.password) {
        this.message = 'Invalid credentials';

      } else {
        // save current user and redirects
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/']);
      }
    }
  }

  displayRegister(): void {
    this.message = '';
    this.isRegister = true;
  }

  register(): void {
    this.message = '';
    if (this.name === '' || this.email === '' || this.password === '') {
      this.message = 'Please fill out all the fields';
    } else {
      // creates new user in local storage
      this.user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      localStorage.setItem(this.email, JSON.stringify(this.user));

      // save current user and redirect
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/']);
    }
  }
}
