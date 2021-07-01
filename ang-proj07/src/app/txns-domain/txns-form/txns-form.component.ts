import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UsersService } from 'src/app/services/users.service';
import { Transaction } from 'src/app/shared/transaction';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-txns-form',
  templateUrl: './txns-form.component.html',
  styleUrls: ['./txns-form.component.css']
})
export class TxnsFormComponent implements OnInit {

  txnIdFc: FormControl;
  dotFc: FormControl;
  headerFc: FormControl;
  typeFc: FormControl;
  amountFc: FormControl;

  txnForm: FormGroup;

  user: User | null;

  errMsg?: string;

  isEditing: boolean;

  constructor(private txnsService: TransactionsService, private router: Router,
    private userService: UsersService, private activatedRoute: ActivatedRoute) {

    this.txnIdFc = new FormControl(0, [Validators.required, Validators.min(1)]);
    this.dotFc = new FormControl(new Date().toISOString().substr(0, 10), [Validators.required]);
    this.headerFc = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]);
    this.typeFc = new FormControl('', [Validators.required]);
    this.amountFc = new FormControl(0, [Validators.required, Validators.min(1)]);

    this.isEditing = false;

    this.txnForm = new FormGroup({
      id: this.txnIdFc,
      dot: this.dotFc,
      header: this.headerFc,
      type: this.typeFc,
      amount: this.amountFc
    });

    this.user = this.userService.getCurretnUser();
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.isEditing = true;
      this.txnsService.getById(id).subscribe(
        txn => this.txnForm.setValue(txn),
        err => this.errMsg = "Unable to fetech transaction"
      );
    }
  }

  saveTxn() {
    let txn: Transaction = { ...this.txnForm.value, userId: this.user?.id }

    let ob = this.isEditing ?  this.txnsService.save(txn): this.txnsService.add(txn);

    ob.subscribe(
      data => this.router.navigateByUrl("/txns/list"),
      err => this.errMsg = "Unable to save transaction"
    );
  }

}
