import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  txnIdFc:FormControl;
  dotFc:FormControl;
  headerFc:FormControl;
  typeFc:FormControl;
  amountFc:FormControl;

  txnForm : FormGroup;

  @Output()
  txnFormSubmitted: EventEmitter<Transaction>;

  constructor() {
    this.txnIdFc=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.dotFc=new FormControl(new Date(),[Validators.required]);
    this.headerFc=new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]);
    this.typeFc=new FormControl('',[Validators.required]);
    this.amountFc=new FormControl(0,[Validators.required,Validators.min(1)]);

    this.txnForm=new FormGroup({
      txnId:this.txnIdFc,
      dot:this.dotFc,
      header:this.headerFc,
      type:this.typeFc,
      amount:this.amountFc
    });

    this.txnFormSubmitted=new EventEmitter();
   }

  ngOnInit(): void {
  }

  saveTxn(){
    let txn:Transaction = {
      id: parseInt(this.txnForm.value.txnId),
      amount:this.txnForm.value.amount,
      dot:new Date(this.txnForm.value.dot),
      header:this.txnForm.value.header,
      type:this.txnForm.value.type,
      userId:0
    };
    
    this.txnFormSubmitted.emit(txn);

    this.txnForm.reset();
  }

}
