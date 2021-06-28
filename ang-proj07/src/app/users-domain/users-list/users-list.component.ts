import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:User[];
  errMsg:string|null;

  constructor(private usersService:UsersService) { 
    this.users=[];
    this.errMsg=null;
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(
      data => this.users=data,
      err => this.errMsg=err
    )
  }

}
