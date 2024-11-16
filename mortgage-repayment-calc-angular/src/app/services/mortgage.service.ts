import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  private repaymentAmountSubject = new BehaviorSubject<number | null>(null);
  repaymentAmount$ = this.repaymentAmountSubject.asObservable();

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
    } else {
      this.repaymentAmountSubject.next(0);
    }
  }

  isFieldValid(form: FormGroup, fieldName: string, isSubmitted: boolean) {
    const control = form.get(fieldName);

    return control!.invalid && isSubmitted;
  }
}
