import { CardFormatDirective } from '@/app/directives/card-format.directive';
import { CardForm } from '@/app/models/types';
import { CardValidators } from '@/app/validators/card.validators';
import { Component, inject, output, signal } from '@angular/core';
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
  isSubmittedSuccessfully = output<boolean>();
  isSubmitted = signal<boolean>(false);
  cardForm = this.#nnfb.group({
    cardholderName: ['', Validators.required],
    cardNumber: [
      '',
      {
        validators: [Validators.required, CardValidators.numbersOnly()],
        updateOn: 'submit',
      },
    ],
    expMM: ['', Validators.required],
    expYY: ['', Validators.required],
    cvc: ['', Validators.required],
  });

  constructor() {
    this.cardForm.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      if (this.isSubmitted()) {
        this.isSubmitted.set(false);
        console.log(this.isSubmitted());
      }
      this.cardFormValues.emit(this.cardForm.getRawValue());
    });
  }

  onSubmit(): void {
    console.log('Submitted!');
    this.isSubmitted.set(true);

    if (this.cardForm.invalid) {
      this.cardForm.markAllAsTouched();
      this.isSubmittedSuccessfully.emit(false);
    } else {
      this.isSubmittedSuccessfully.emit(true);
    }
  }
}
