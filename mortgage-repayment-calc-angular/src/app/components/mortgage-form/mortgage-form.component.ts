import { Component, inject, OnInit } from '@angular/core';
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
export class MortgageFormComponent implements OnInit {
  #mortgageService = inject(MortgageService);
  #fb = inject(FormBuilder);
  mortgageForm = this.#fb.group({
    amount: ['', Validators.required],
    term: ['', Validators.required],
    rate: ['', Validators.required],
    type: ['', Validators.required],
  });
  isSubmitted = false;

  ngOnInit() {
    this.mortgageForm.valueChanges.subscribe(() => {
      if (this.isSubmitted) {
        this.isSubmitted = false;
      }
    });
  }

  isFieldValid(fieldName: string): boolean {
    return this.#mortgageService.isFieldValid(
      this.mortgageForm,
      fieldName,
      this.isSubmitted,
    );
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.mortgageForm.invalid) {
      return;
    }

    const { amount, term, rate, type } = this.mortgageForm.value;
    this.#mortgageService.calcMortgage(amount!, term!, rate!, type!);
  }

  onClearAll(): void {
    this.mortgageForm.reset();
    this.#mortgageService.resetValues();
  }
}
