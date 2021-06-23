import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] | null;
  errMsg: string | null;

  constructor(private userService: UserService) {
    this.users = null;
    this.errMsg = null;
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => this.users = data,
      err => this.errMsg="Sorry! Failed To Retrive Data!"
   );
  }

}
