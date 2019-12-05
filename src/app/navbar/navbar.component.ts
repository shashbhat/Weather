import { Component, OnInit } from '@angular/core';
import {FbService} from '../services/fb.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  darkModeActive: boolean;
  constructor(public fb: FbService, public router: Router) {

  }

  ngOnInit() {
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.toggleMenu();
    this.router.navigateByUrl('/login');
    this.fb.auth.signout();
  }

}
