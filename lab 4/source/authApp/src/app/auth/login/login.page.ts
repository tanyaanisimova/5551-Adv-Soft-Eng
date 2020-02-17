import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private  authService: AuthService ) { }

  ngOnInit() {
  }

  login() {
    if (this.authService.login('tanya@email', 'pass')) {
      this.router.navigateByUrl('home');
    } else {
      // Invalid credentials message
    }
  }

  register() {
    this.router.navigateByUrl('register');
  }
}
