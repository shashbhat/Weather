import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/open-weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  public weatherData: any;
  constructor() {

  }

  ngOnInit() {
  }

}
