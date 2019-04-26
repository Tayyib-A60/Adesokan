import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  active = '';
  constructor() { }

  ngOnInit() {
  }
  about() {
    this.active = 'about';
  }
  skills() {
    this.active = 'skills';
  }
  contact() {
    this.active = 'contact';
  }
  all() {
    this.active = 'all';
  }
  reset() {
    this.active = '';
  }

}
