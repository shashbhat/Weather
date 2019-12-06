import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { FbService } from '../../services/fb.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  public weatherData: any;
  @Input() set city(city: string) {
    this.cityName = city;
    console.log(this.cityName);
    this.weather.getWeather(this.cityName).subscribe(data => this.weatherData = data);
  }

  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  errorMessage: string;
  cityName: string;
  constructor(public weather: WeatherService,
              public router: Router,
              public fb: FbService) {
  }

  ngOnInit() {

  }

  getWeather() {
   
    this.temp = this.weatherData.main.temp;
    this.maxTemp = this.weatherData.main.temp_max;
    this.minTemp = this.weatherData.main.temp_min;
    console.log(this.temp);
  }

}
