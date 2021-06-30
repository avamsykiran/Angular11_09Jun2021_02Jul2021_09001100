import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../shared/transaction';
import { TxnSummary } from '../shared/txn-summary';
import { map } from 'rxjs/operators';
import { MonthlySummary } from '../shared/monthly-summary';
import { AnnualSummary } from '../shared/annual-summary';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  txnsEndPoint: string;

  constructor(private httpClient: HttpClient) {
    this.txnsEndPoint = environment.txnsEndPoint;
  }

  add(txn: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.txnsEndPoint, txn)
  }

  computeSummary(txns: Transaction[], lb: Date, ub: Date): TxnSummary {

    let summary: TxnSummary = { txns: [], totalCredit: 0, totalDebit: 0, balance: 0 };

    if (txns && txns.length > 0) {
      txns = txns.filter(t => {
        let d = new Date(t.dot);
        return (d.getTime() >= lb.getTime() && d.getTime() <= ub.getTime());
      });
      if (txns && txns.length > 0) {
        let totalCredit = txns.map(t => t.type === 'CREDIT' ? t.amount : 0).reduce((a1, a2) => a1 + a2);
        let totalDebit = txns.map(t => t.type === 'DEBIT' ? t.amount : 0).reduce((a1, a2) => a1 + a2);
        let balance = totalCredit - totalDebit;
        summary = { txns, totalCredit, totalDebit, balance };
      }
    }
    return summary;
  }

  getAllByUserId(uid: number, month: string, year: number): Observable<TxnSummary> {

    let lb = new Date(`${year}-${month}-01`);
    let ub = new Date(year, lb.getMonth() + 1, 0);

    return this.httpClient.get<Transaction[]>(`${this.txnsEndPoint}?userId=${uid}`).pipe(
      map(txns => this.computeSummary(txns, lb, ub))
    )
  }

  getAnnualSummaryByUserId(uid: number, year: number): Observable<AnnualSummary> {
    return this.httpClient.get<Transaction[]>(`${this.txnsEndPoint}?userId=${uid}`).pipe(
      map(txns => {

        let annualSummary: AnnualSummary = { monthlies: [], totalCredit: 0, totalDebit: 0, balance: 0 };

        let months = [
          ["01", "JAN"], ["02", "FEB"], ["03", "MAR"], ["04", "APR"], ["05", "MAY"], ["06", "JUN"],
          ["07", "JUL"], ["08", "AUG"], ["09", "SEP"], ["10", "OCT"], ["11", "NOV"], ["12", "DEC"]
        ]

        months.forEach(
          m => {
            let lb = new Date(`${year}-${m[0]}-01`);
            let ub = new Date(year, lb.getMonth() + 1, 0);

            let txnSummary = this.computeSummary(txns, lb, ub);
            
            annualSummary.totalCredit+=txnSummary.totalCredit;
            annualSummary.totalDebit+=txnSummary.totalDebit;
            annualSummary.balance+=txnSummary.balance;

            annualSummary.monthlies.push({ month: m[1], totalCredit: txnSummary.totalCredit, totalDebit: txnSummary.totalDebit, balance: txnSummary.balance });
          }
        )

        return annualSummary;
      })
    )
  }
}
