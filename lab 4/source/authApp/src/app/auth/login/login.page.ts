import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  message = '';

  constructor(private router: Router, private  authService: AuthService ) { }

  ngOnInit() {
  }

  login() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      this.message = 'Please fill in all fields';
      return;
    }

    if (this.authService.login(this.email, this.password)) {
      this.router.navigateByUrl('home');
      this.reset();
    } else {
      this.message = 'Invalid credentials';
    }
  }

  register() {
    this.router.navigateByUrl('register');
    this.reset();
  }

  reset() {
    this.email = '';
    this.password = '';
    this.message = '';
  }
}
