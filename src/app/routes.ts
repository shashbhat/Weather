import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './guard/auth.guard';
import { AppGuard } from './guard/app.guard';

export const allAppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AppGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'weather',
        component: WeatherComponent,
        canActivate: [AppGuard]
    },
    {
        path: 'details/:city',
        component: DetailsComponent,
        canActivate: [AppGuard]
    },
    {
        path: 'search',
        component: WeatherComponent,
        canActivate: [AppGuard]
    },
    {path: '**', redirectTo: ''}
];


