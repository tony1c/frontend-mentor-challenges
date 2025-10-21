import { CardFormatDirective } from '@/app/directives/card-format.directive';
import { CardForm } from '@/app/models/types';
import { Component, inject, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CardFormatDirective],
  templateUrl: './form.html',
  styles: ``,
})
export class Form {
  #nnfb = inject(NonNullableFormBuilder);
  cardFormValues = output<CardForm>();
  isSubmittedSuccessfully = output();
  cardForm = this.#nnfb.group({
    cardholderName: ['', Validators.required],
    cardNumber: ['', Validators.required],
    expMM: ['', Validators.required],
    expYY: ['', Validators.required],
    cvc: ['', Validators.required],
  });

  constructor() {
    this.cardFormValues.emit(this.cardForm.getRawValue());

    this.cardForm.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.cardFormValues.emit(this.cardForm.getRawValue());
    });
  }

  onSubmit(): void {
    console.log('Submitted!');
    this.isSubmittedSuccessfully.emit();
  }
}
