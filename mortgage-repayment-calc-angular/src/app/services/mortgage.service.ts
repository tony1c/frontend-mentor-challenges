import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  calcMortgage(
    amount: string,
    term: string,
    rate: string,
    type: string,
  ): number {
    if (type === 'repayment') {
      const monthsInYear = 12;
      const monthlyInterest = Number(rate) / 100 / monthsInYear;
      const totMonths = Number(term) * monthsInYear;
      const repayment =
        Number(amount) *
        ((monthlyInterest * Math.pow(1 + monthlyInterest, totMonths)) /
          (Math.pow(1 + monthlyInterest, totMonths) - 1));
      return repayment;
    }
    return 0;
  }

  isFieldValid(form: FormGroup, fieldName: string, isSubmitted: boolean) {
    const control = form.get(fieldName);

    return control!.invalid && isSubmitted;
  }
}
