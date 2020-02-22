import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  animal = '';
  fact = '';
  message = '';

  constructor( private router: Router, private authService: AuthService, private httpService: HttpService) {}

  search() {
    if (this.animal.trim() === '') {
      this.fact = '';
      this.message = 'Please enter an animal.';
      return;
    }
    this.httpService.getAnimalFact(this.animal).subscribe((data) => {
      if (data['all'].length === 0) {
        this.fact = '';
        this.message = 'No results found for ' + this.animal;

      } else {
        this.message = '';
        const random = Math.floor(Math.random() * data['all'].length);
        this.fact = data['all'][random].text;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
