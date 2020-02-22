import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AlertController } from '@ionic/angular';
import { HttpService } from '../http.service';

interface Gender {
  name: string;
  gender: string;
  samples: number;
  accuracy: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  firstName = '';
  gender: Gender;
  showOutput = false;

  constructor(
      private router: Router,
      private httpService: HttpService,
      private alertController: AlertController,
      private authService: AuthService
  ) {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  getGender(): void {
    if (this.firstName === '') {
      this.showOutput = false;
      this.presentAlert('Enter a name to view results.');
      return;
    }
    this.httpService.getGenderData(this.firstName).subscribe(data => {
      this.gender = {
        name: this.firstName,
        gender: data['gender'],
        samples: data['samples'],
        accuracy: data['accuracy']
      }
      this.showOutput = true;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
