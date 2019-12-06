import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public weather: WeatherService) { }

  ngOnInit() {
  }
  
}
