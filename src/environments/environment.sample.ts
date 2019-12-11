import { FirebaseAppConfig } from 'ng-firebase-lite';

export const environment = {
  production: false,
  config : {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  } as FirebaseAppConfig,
  apiKey : ''
};
