import { Component, OnInit } from '@angular/core';
import { NavLink } from '../models/nav-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links:NavLink[];

  constructor() { 
    this.links=[
      {linkText:"Users",linkUrl:"/users"},
      {linkText:"New User",linkUrl:"/addUser"}
    ];
  }

  ngOnInit(): void {
  }

}
