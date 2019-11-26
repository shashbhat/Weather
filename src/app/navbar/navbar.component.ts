import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  darkModeActive: boolean;
  constructor() {

  }

  ngOnInit() {
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


}
