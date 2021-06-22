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
  errMsg:string | null;

  constructor(private userService:UserService,private router:Router) { 
    this.user={id:0,firstName:'',lastName:''};
    this.errMsg=null;
  }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.add(this.user).subscribe(
      data=>this.router.navigateByUrl("/users"),
      err=>{console.log(err); this.errMsg="Sorry! Failed to save data!"}
    );
    
  }
}
