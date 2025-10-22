import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CardValidators {
  static numbersOnly(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const hasNonDigits = /\D/.test(value.replace(/\s/g, ''));
      return hasNonDigits ? { numbersOnly: true } : null;
    };
  }
}
