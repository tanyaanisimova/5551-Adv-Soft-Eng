import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  city = 'kansas city';
  state = '';
  forecastList = [];
  showForecast = false;

  constructor(private http: HttpClient) {}
  ngOnInit() {}

  search() {
    this.http.get<any>('http://api.openweathermap.org/data/2.5/forecast?q='
      + this.city + ',US&units=imperial&APPID=a2e5560654a2aec8db5f1a7fd43e3103').subscribe(
      data => {
        for (let i = 0; i < 5; i++) {
          this.forecastList.push({time: data.list[i].dt_txt,
            weather: data.list[i].weather[0].main,
            image: 'sunny.png',
            temp: data.list[i].main.temp,
            feels_like: data.list[i].main.feels_like,
            humidity: data.list[i].main.humidity});
          if (this.forecastList[i].weather === 'Clouds') {
            this.forecastList[i].image = 'cloudy.png';
          } else if (this.forecastList[i].weather === 'Rain' || this.forecastList[i].weather === 'Drizzle') {
            this.forecastList[i].image = 'rain.png';
          } else if (this.forecastList[i].weather === 'Thunderstorm') {
            this.forecastList[i].image = 'storm.png';
          } else if (this.forecastList[i].weather === 'Snow') {
            this.forecastList[i].image = 'snow.png';
          }
        }
        this.showForecast = true;
      },
      error => console.error('There was an error!', error)
    );
  }
}
