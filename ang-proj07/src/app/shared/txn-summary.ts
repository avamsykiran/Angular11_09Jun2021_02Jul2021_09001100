import { Transaction } from "./transaction";

export interface TxnSummary {
    txns:Transaction[];
    totalCredit:number;
    totalDebit:number;
    balance:number;
}
