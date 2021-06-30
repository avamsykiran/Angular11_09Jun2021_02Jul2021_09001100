import { MonthlySummary } from "./monthly-summary";

export interface AnnualSummary {
    monthlies:MonthlySummary[];
    totalCredit:number;
    totalDebit:number;
    balance:number;
}
