import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor() { }

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
