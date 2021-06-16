import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      { id: 1, firstName: 'Vamsy Kiran', lastName: 'Aripaka' },
      { id: 2, firstName: 'Srinivas', lastName: 'Dachepalli' }
    ];
  }

  getAll():User[]{
    return this.users;
  }

  getById(id:number):User|undefined{
    return this.users.find(u => u.id===id);
  }

  add(user:User):User{
    this.users.push(user);
    return user;
  }

  deleteById(id:number){
    let index = this.users.findIndex(u => u.id===id);
    this.users.splice(index,1);
  }
}
