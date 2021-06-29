import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../shared/transaction';
import { TxnSummary } from '../shared/txn-summary';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  txnsEndPoint:string;

  constructor(private httpClient:HttpClient) { 
    this.txnsEndPoint=environment.txnsEndPoint;
  }

  add(txn:Transaction):Observable<Transaction>{
    return this.httpClient.post<Transaction>(this.txnsEndPoint,txn)
  }

  getAllByUserId(uid:number):Observable<TxnSummary>{
    return this.httpClient.get<Transaction[]>(`${this.txnsEndPoint}?userId=${uid}`).pipe(
      map(txns => { 
        let totalCredit=txns.map(t => t.type==='CREDIT'?t.amount:0).reduce((a1,a2)=>a1+a2);
        let totalDebit=txns.map(t => t.type==='DEBIT'?t.amount:0).reduce((a1,a2)=>a1+a2);
        let balance = totalCredit-totalDebit;
        return {txns,totalCredit,totalDebit,balance};
      })
    )
  }
}
