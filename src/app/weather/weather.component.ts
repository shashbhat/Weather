import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {WeatherService} from 'src/app/services/weather.service';
import {FbService} from '../services/fb.service';
import {Subscription} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { $ } from 'protractor';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  darkMode: boolean;
  sub1: Subscription;
  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  errorMessage: string;
  cityName: string;
  cityAdded = false;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService,
    public fb: FbService,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToOpenWeather(formValues) {
    this.weatherService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      this.showWeather(); },
      (err) => {
      this.errorMessage = err.error.message;
      this.toastrService.error('Cannot find city');
    });
    console.log(this.weatherData);
  }

  showWeather() {
   document.getElementById('weather-card').style.display = 'block';
  }

  addCity() {
    this.fb.addCity(this.weatherData.name).subscribe(() => {
      this.cityName = null;
      this.maxTemp = null;
      this.minTemp = null;
      this.state = null;
      this.temp = null;
      this.toastrService.success('Added successfully');
    });
  }

}
