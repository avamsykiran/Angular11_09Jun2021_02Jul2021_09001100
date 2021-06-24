import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/shared/nav-link';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()
  links:NavLink[];

  constructor() { 
    this.links=[];
  }

  ngOnInit(): void {
  }

}
