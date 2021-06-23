import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  @Input()
  txns?:Transaction[];

  constructor() { }

  ngOnInit(): void {
  }

}
