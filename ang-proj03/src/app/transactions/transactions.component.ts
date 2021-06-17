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

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private txnService:TransactionService) {
    
  }

  ngOnInit(): void {
    let userId = parseInt(this.activatedRoute.snapshot.params.userId);
    this.currentUser = this.userService.getById(userId);
    this.txns= this.txnService.getAllByUserId(userId);
  }

}
