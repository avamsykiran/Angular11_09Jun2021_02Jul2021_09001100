import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { NavLink } from '../shared/nav-link';

@Component({
  selector: 'app-users-domain',
  templateUrl: './users-domain.component.html',
  styleUrls: ['./users-domain.component.css']
})
export class UsersDomainComponent implements OnInit {

  links:NavLink[];
  
  constructor(private usersService:UsersService,private router:Router) {
    this.links=[];
  }

  ngOnInit(): void {
  }

  logout(){
    this.usersService.logout();
    this.router.navigateByUrl("/");
  }
}
