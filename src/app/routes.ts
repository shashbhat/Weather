import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const allAppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'weather',
        component: WeatherComponent
    },
    {
        path: 'details',
        component: DetailsComponent
    }
]