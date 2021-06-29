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
  totalCredit:number;
  totalDebit:number;
  balance:number;

  errMsg?:string;

  constructor(private usersService: UsersService,private txnService:TransactionsService) {
    this.user = this.usersService.getCurretnUser();
    this.txns=[];
    this.totalCredit=0;
    this.totalDebit=0;
    this.balance=0;
  }

  ngOnInit(): void {
    this.txnService.getAllByUserId(this.user?.id??0).subscribe(
      data => {
        this.txns=data.txns;
        this.totalCredit=data.totalCredit;
        this.totalDebit=data.totalDebit;
        this.balance=data.balance;
      },
      err => this.errMsg="Sorry! Unable to fetech the data."
    );
  }

}
