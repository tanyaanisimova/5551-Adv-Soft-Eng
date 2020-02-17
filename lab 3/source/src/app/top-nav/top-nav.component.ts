import { Component } from '@angular/core';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  title = 'Nutrition Facts';
  user: User = null;

  constructor( private router: Router ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  signOut() {
    localStorage.setItem('user', null);
    this.router.navigate(['auth']);
  }
}
