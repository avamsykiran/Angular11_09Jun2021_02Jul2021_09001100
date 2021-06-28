import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UsersService } from 'src/app/services/users.service';
import { Transaction } from 'src/app/shared/transaction';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-txns-list',
  templateUrl: './txns-list.component.html',
  styleUrls: ['./txns-list.component.css']
})
export class TxnsListComponent implements OnInit {

  user: User | null;
  txns:Transaction[];

  constructor(private usersService: UsersService,private txnService:TransactionsService) {
    this.user = this.usersService.getCurretnUser();
    this.txns=[];
  }

  ngOnInit(): void {
    
  }

}
