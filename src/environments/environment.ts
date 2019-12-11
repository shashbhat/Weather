// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { FirebaseAppConfig } from 'ng-firebase-lite';

export const environment = {
  production: false,
  config : {
    apiKey: 'AIzaSyCIe2kp57vOfUMrxdCxewi3ip-TnUCKloA',
    authDomain: 'weather-f4181.firebaseapp.com',
    databaseURL: 'https://weather-f4181.firebaseio.com',
    projectId: 'weather-f4181',
    storageBucket: 'weather-f4181.appspot.com',
    messagingSenderId: '680519943142',
    appId: '1:680519943142:web:4bac1296c7a84f619f8c27',
    measurementId: 'G-5X1NMNG8RC'
  } as FirebaseAppConfig,
  apiKey : '4ae8e061928906b46910cef2cf235173'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
