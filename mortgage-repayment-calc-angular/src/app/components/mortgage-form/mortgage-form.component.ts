import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MortgageService } from '../../services/mortgage.service';
import { BtnCalcComponent } from '../btn-calc/btn-calc.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-mortgage-form',
  standalone: true,
  imports: [ReactiveFormsModule, BtnCalcComponent, NgxMaskDirective, NgClass],
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
  isSubmitted = true;

  isFieldValid(fieldName: string): boolean {
    const control = this.mortgageForm.get(fieldName);

    console.log(control);
    return control!.valid && this.isSubmitted;
  }

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

  onClearAll(): void {
    this.mortgageForm.reset();
  }
}
