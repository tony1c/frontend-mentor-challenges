import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.css',
})
export class AgeCalculatorComponent {
  #fb: FormBuilder = inject(FormBuilder);

  dateOfBirth = this.#fb.group({
    dayValue: ['', Validators.required],
    monthValue: ['', Validators.required],
    yearValue: ['', Validators.required],
  });

  submitForm(): void {
    if (this.dateOfBirth.valid) {
      const formValues = this.dateOfBirth.value;
      console.log('Form submitted', formValues);
    } else {
      console.log('Form is invalid');
    }
  }
  public log(): void {
    console.log('clicked');
  }
}
