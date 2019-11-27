import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OpenWeatherService } from './open-weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WeatherCardComponent } from './cards/weather-card/weather-card.component';
import { AddCardComponent } from './cards/add-card/add-card.component';
import { LoginComponent } from './login/login.component';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    NavbarComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    LoginComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatRadioModule,
    NguiAutoCompleteModule,
  ],
  providers: [OpenWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
