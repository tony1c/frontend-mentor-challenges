import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Age } from '../../models/age.model';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.css',
})
export class AgeCalculatorComponent {
  #fb: FormBuilder = inject(FormBuilder);
  submittedValues: Age = { day: 0, month: 0, year: 0 }; // Store the submitted values here

  dateOfBirth = this.#fb.group({
    day: [null, Validators.required],
    month: [null, Validators.required],
    year: [null, Validators.required],
  });

  submitForm(): void {
    if (this.dateOfBirth.valid) {
      const formValues = this.dateOfBirth.getRawValue();
      console.log('Form submitted', formValues);
      this.dateOfBirth.patchValue({
        day: formValues.day,
        month: formValues.month,
        year: formValues.year,
      });
      // Store the submitted values to display in the template
      this.submittedValues = formValues as unknown as Age;
    } else {
      console.log('Form is invalid');
    }
  }
  public log(): void {
    console.log('clicked');
  }
}
