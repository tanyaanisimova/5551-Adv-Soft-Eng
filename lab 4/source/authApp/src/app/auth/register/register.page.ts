import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name = '';
  email = '';
  password = '';
  message = '';

  constructor(private router: Router, private  authService: AuthService ) { }

  ngOnInit() {
  }

  register() {
    if (this.name.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
      this.message = 'Please fill in all fields';
      return;
    }

    if (this.authService.register(this.name, this.email, this.password)) {
      this.router.navigateByUrl('home');
      this.reset();
    } else {
      this.message = 'Email already in use';
    }
  }

  login() {
    this.router.navigateByUrl('login');
    this.reset();
  }

  reset() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.message = '';
  }
}
