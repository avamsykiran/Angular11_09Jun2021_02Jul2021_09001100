import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  txnsEndPoint:string;

  constructor(private httpClient:HttpClient) { 
    this.txnsEndPoint=environment.txnsEndPoint;
  }

  add(txn:Transaction):Observable<Transaction>{
    return this.httpClient.post<Transaction>(this.txnsEndPoint,txn)
  }

  getAllByUserId(uid:number):Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.txnsEndPoint}?userId=${uid}`)
  }
}
