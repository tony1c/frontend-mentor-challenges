import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  calcMortgage(
    amount: number,
    term: number,
    rate: number,
    type: string,
  ): number {
    if (type === 'repayment') {
      const monthsInYear = 12;
      const monthlyInterest = rate / 100 / monthsInYear;
      const totMonths = term * monthsInYear;
      const repayment =
        amount *
        ((monthlyInterest * Math.pow(1 + monthlyInterest, totMonths)) /
          (Math.pow(1 + monthlyInterest, totMonths) - 1));
      return repayment;
    }
    return 0;
  }
}
