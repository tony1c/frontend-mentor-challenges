import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MortgageService } from '../../services/mortgage.service';
import { BtnCalcComponent } from '../btn-calc/btn-calc.component';

@Component({
  selector: 'app-mortgage-form',
  standalone: true,
  imports: [BtnCalcComponent, ReactiveFormsModule],
  templateUrl: './mortgage-form.component.html',
  styles: ``,
})
export class MortgageFormComponent {
  #mortgageService = inject(MortgageService);
  #fb = inject(FormBuilder);
  mortgageForm = this.#fb.group({
    amount: ['', Validators.required],
    term: ['', Validators.required],
    rate: ['', Validators.required],
    type: ['', Validators.required],
  });
  repayment = 0;

  onSubmit(): void {
    if (this.mortgageForm.invalid) {
      return;
    }

    const { amount, term, rate, type } = this.mortgageForm.value;
    this.repayment = this.#mortgageService.calcMortgage(
      amount!,
      term!,
      rate!,
      type!,
    );

    console.log(
      `Submitted with those values: ${amount}, ${term}, ${rate}, ${type}`,
    );

    console.log(this.repayment);
  }
}
