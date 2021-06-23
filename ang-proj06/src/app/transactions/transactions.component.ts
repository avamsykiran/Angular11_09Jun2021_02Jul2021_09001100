import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../models/transaction';
import { User } from '../models/user';
import { TransactionService } from '../services/transaction.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  currentUser?:User;
  txns?:Transaction[];
  errMsg:string |null;
  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private txnService:TransactionService) {
    this.errMsg=null;
  }

  ngOnInit(): void {
    let userId = parseInt(this.activatedRoute.snapshot.params.userId);
    this.userService.getById(userId).subscribe(
      data => this.currentUser=data,
      err => this.errMsg="Failed to retrive user details"
    )
   this.loadTxns(userId);
  }

  loadTxns(userId:number){
    this.txnService.getAllByUserId(userId).subscribe(
      data => this.txns=data,
      err =>this.errMsg="Failed to retrive user transactions"
    )
  }

  saveTxn(txn:Transaction){
    txn.userId=this.currentUser?.id??0;
    this.txnService.add(txn).subscribe(
      data => this.loadTxns(this.currentUser?.id??0),
      err =>  this.errMsg="Failed to save user transactions"
    );
  }

}
