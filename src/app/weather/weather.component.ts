import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {OpenWeatherService} from '../open-weather.service';
import { $ } from 'protractor';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;


  constructor(
    private formBuilder: FormBuilder,
    private weatherService: OpenWeatherService
    ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToOpenWeather(formValues) {
    this.weatherService.getWeather(formValues.location).subscribe(data => this.weatherData = data);
    console.log(this.weatherData);
  }

  showWeather() {
   document.getElementById('weather-card').style.display = 'block';
  }

}
