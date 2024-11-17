import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  private repaymentAmountSubject = new BehaviorSubject<number | null>(null);
  private totMonthsSubject = new BehaviorSubject<number | null>(null);
  private totMonths$ = this.totMonthsSubject.asObservable();
  repaymentAmount$ = this.repaymentAmountSubject.asObservable();
  totalRepayment$ = combineLatest([
    this.repaymentAmount$,
    this.totMonths$,
  ]).pipe(map(([repayment, totMonths]) => (repayment || 0) * totMonths!));

  calcMortgage(amount: string, term: string, rate: string, type: string): void {
    if (type === 'repayment') {
      const monthsInYear = 12;
      const monthlyInterest = Number(rate) / 100 / monthsInYear;
      const totMonths = Number(term) * monthsInYear;
      const repayment =
        Number(amount) *
        ((monthlyInterest * Math.pow(1 + monthlyInterest, totMonths)) /
          (Math.pow(1 + monthlyInterest, totMonths) - 1));
      this.repaymentAmountSubject.next(repayment);
      this.totMonthsSubject.next(totMonths);
    } else {
      this.repaymentAmountSubject.next(0);
    }
  }

  isFieldValid(form: FormGroup, fieldName: string, isSubmitted: boolean) {
    const control = form.get(fieldName);

    return control!.invalid && isSubmitted;
  }

  resetValues(): void {
    this.repaymentAmountSubject.next(null);
    this.totMonthsSubject.next(0);
  }
}
