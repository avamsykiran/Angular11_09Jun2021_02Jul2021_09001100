import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UsersService } from 'src/app/services/users.service';
import { AnnualSummary } from 'src/app/shared/annual-summary';
import { MonthlySummary } from 'src/app/shared/monthly-summary';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-annual-statement',
  templateUrl: './annual-statement.component.html',
  styleUrls: ['./annual-statement.component.css']
})
export class AnnualStatementComponent implements OnInit {

  user: User | null;
  summary?:AnnualSummary;
  year: number;
  errMsg?:string;

  constructor(private usersService: UsersService,private txnService:TransactionsService) {
    this.user = this.usersService.getCurretnUser();
    let d = new Date();
    this.year = d.getFullYear();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.txnService.getAnnualSummaryByUserId(this.user?.id??0,this.year).subscribe(
      data => this.summary=data,
      err =>this.errMsg="Sorry! Unable to fetech the data."
    );
  }

}
