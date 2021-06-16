import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    //is a lifecyle method that gets executed after the component object
    //is created and rendered on the screen, in otherwors this is a onload event handler.
    this.users=this.userService.getAll();
  }

}
