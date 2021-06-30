import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { NavLink } from '../shared/nav-link';
import { User } from '../shared/user';

@Component({
  selector: 'app-txns-domain',
  templateUrl: './txns-domain.component.html',
  styleUrls: ['./txns-domain.component.css']
})
export class TxnsDomainComponent implements OnInit {

  links:NavLink[];
  user:User|null;
  
  constructor(private usersService:UsersService,private router:Router) {
    this.links=[
      {linkUrl:'/txns/list',linkText:"Monthly Statement"},
      {linkUrl:'/txns/listAnnual',linkText:"Annual Statement"},
      {linkUrl:'/txns/new',linkText:"New Transaction"},
    ];
    this.user=this.usersService.getCurretnUser();
  }

  ngOnInit(): void {
  }

  logout(){
    this.usersService.logout();
    this.router.navigateByUrl("/");
  }
}
