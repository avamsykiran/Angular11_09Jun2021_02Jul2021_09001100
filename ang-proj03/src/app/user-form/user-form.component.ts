import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user:User;

  constructor(private userService:UserService,private router:Router) { 
    this.user={id:0,firstName:'',lastName:''};
  }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.add(this.user);
    this.router.navigateByUrl("/users");
  }
}
