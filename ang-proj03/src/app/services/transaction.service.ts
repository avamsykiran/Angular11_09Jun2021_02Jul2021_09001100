import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  txns:Transaction[];

  constructor() { 
    this.txns=[];
  }

  add(txn:Transaction):Transaction{
    this.txns.push(txn);
    return txn;
  }

  getAllByUserId(uid:number):Transaction[]{
    return this.txns.filter(t => t.userId===uid);
  }
}
