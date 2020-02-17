import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  NUTRITION_URL = 'https://api.nutritionix.com/v1_1/search/';
  APP_ID = '53dd952a';
  API_KEY = '848372b2b33f1228527f36aef46b7209';

  constructor(private http: HttpClient) { }

  public getNutrition(searchInput) {
    return this.http.get(
      `${this.NUTRITION_URL}${searchInput}?results=0:1&fields=*&appId=${this.APP_ID}&appKey=${this.API_KEY}`);
  }
}


