import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private  authService: AuthService ) { }

  ngOnInit() {
  }

  register() {
    if (this.authService.register('tanya', 'tanya@email', 'pass')) {
      this.router.navigateByUrl('home');
    } else {
      // email already in use
    }
  }

  login() {
    this.router.navigateByUrl('login');
  }
}
