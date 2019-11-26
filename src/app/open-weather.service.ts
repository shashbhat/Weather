import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) {
   }

   getWeather(location) {
     // tslint:disable-next-line: max-line-length
     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?APPID=4ae8e061928906b46910cef2cf235173&units=metric&q=${location}`);
   }
}




