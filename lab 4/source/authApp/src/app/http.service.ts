import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  ANIMAL_API = 'https://cat-fact.herokuapp.com/facts?animal_type=';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Access-Control-Allow-Origin': 'origin'
    })
  };

  public getAnimalFact(animal) {
    return this.http.get(
        `${this.ANIMAL_API}${animal}`, this.httpOptions);
  }
}


