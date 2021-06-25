import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersEndPoint:string;

  constructor(private httpClient:HttpClient) {
    this.usersEndPoint=environment.usersEndPoint;
  }

  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(this.usersEndPoint);
  }

  getById(id:number): Observable<User>{
    return this.httpClient.get<User>(`${this.usersEndPoint}/${id}`);
  }

  add(user:User):Observable<User>{
    return this.httpClient.post<User>(this.usersEndPoint,user)
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.usersEndPoint}/${id}`);
  }

  login(email:string,pwd:string):Observable<User>{
    return this.httpClient.get<User[]>(`${this.usersEndPoint}?emailId=${email}`).pipe(
      map( users => {
        let u : User|null = null;
        if(users && users.length>0){
          u = users[0];
          if(u.password===pwd){
            u.password=undefined;
            sessionStorage.setItem("user",JSON.stringify(u));
          }else{
            throw "Invalid Credits"
          }
        }else{
          throw "User not found"
        }
        return u;
      })
    )
  }

  getCurretnUser():User|null{
    let u = sessionStorage.getItem("user");
    return u?JSON.parse(u):null;
  }

  isLoggedIn():boolean{
    return this.getCurretnUser()!=null;
  }

  logout(){
    sessionStorage.clear();
  }
}
