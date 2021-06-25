import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavLink } from 'src/app/shared/nav-link';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()
  links:NavLink[];

  @Input()
  isLogoutRequired:boolean;

  @Output()
  logoutClicked:EventEmitter<void>;

  constructor() { 
    this.links=[];
    this.isLogoutRequired=false;
    this.logoutClicked=new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  logoutBtnClicked(){
    this.logoutClicked.emit();
  }
}
