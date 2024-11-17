import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  private repaymentAmountSubject = new BehaviorSubject<number | null>(null);
  private totalRepaymentSubject = new BehaviorSubject<number | null>(null);
  repaymentAmount$ = this.repaymentAmountSubject.asObservable();
  totalRepayment$ = this.totalRepaymentSubject.asObservable();

  calcMortgage(amount: string, term: string, rate: string, type: string): void {
    const monthsInYear = 12;
    const monthlyInterest = Number(rate) / 100 / monthsInYear;
    const totMonths = Number(term) * monthsInYear;
    const repayment =
      Number(amount) *
      ((monthlyInterest * Math.pow(1 + monthlyInterest, totMonths)) /
        (Math.pow(1 + monthlyInterest, totMonths) - 1));
    const totalRepayment = repayment * totMonths;

    if (type === 'repayment') {
      this.repaymentAmountSubject.next(repayment);
      this.totalRepaymentSubject.next(totalRepayment);
    }

    if (type === 'interest-only') {
      const diff = totalRepayment - Number(amount);
      const monthlyInterestOnly = repayment * (Number(rate) / 100);
      this.repaymentAmountSubject.next(monthlyInterestOnly);
      this.totalRepaymentSubject.next(diff);
    }
  }

  isFieldValid(form: FormGroup, fieldName: string, isSubmitted: boolean) {
    const control = form.get(fieldName);

    return control!.invalid && isSubmitted;
  }

  resetValues(): void {
    this.repaymentAmountSubject.next(null);
    this.totalRepaymentSubject.next(null);
  }
}
