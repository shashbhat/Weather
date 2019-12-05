import { Component, OnInit } from '@angular/core';
import {FbService} from '../services/fb.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities;
  constructor(public fb: FbService) { }

  ngOnInit() {
    this.cities = this.fb.getCities();
  }

}
