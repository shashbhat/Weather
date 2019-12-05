import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
  private readonly forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=';
  private readonly appID = '4ae8e061928906b46910cef2cf235173';
  constructor(public http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`${this.url}${city}&APPID=${this.appID}`);
  }

  getForecast(city: string) {
    return this.http.get(
      `${this.forecastUrl}${city}&APPID=${this.appID}`
    );
  }


}
