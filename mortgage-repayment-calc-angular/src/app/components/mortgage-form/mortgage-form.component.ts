import { Component, inject } from '@angular/core';
import { BtnCalcComponent } from '../btn-calc/btn-calc.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mortgage-form',
  standalone: true,
  imports: [BtnCalcComponent, ReactiveFormsModule],
  templateUrl: './mortgage-form.component.html',
  styles: ``,
})
export class MortgageFormComponent {
  #fb = inject(FormBuilder);
  mortgageForm = this.#fb.group({
    amount: ['', Validators.required],
    term: ['', Validators.required],
    interestRate: ['', Validators.required],
    type: ['', Validators.required],
  });

  onSubmit(): void {
    const { amount, term, interestRate, type } = this.mortgageForm.value;
    console.log(
      `Submitted with those values: ${amount}, ${term}, ${interestRate}, ${type}`,
    );
  }
}
