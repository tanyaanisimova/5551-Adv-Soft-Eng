import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  ANIMAL_API = 'http://cat-fact.herokuapp.com/facts?animal_type=';
  GENDER_API = 'https://gender-api.com/get?name=';
  GENDER_API_KEY = 'CvBFLGUHzQFCgNbWHK';

  constructor(private http: HttpClient) {}

  public getAnimalFact(animal) {
    return this.http.get(
      `${this.ANIMAL_API}${animal}`
    );
  }

  public getGenderData(firstName) {
    return this.http.get(
      `${this.GENDER_API}${firstName}&key=${this.GENDER_API_KEY}`
    );
  }
}
