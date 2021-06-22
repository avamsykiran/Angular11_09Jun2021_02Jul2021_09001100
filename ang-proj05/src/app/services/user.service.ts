import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
