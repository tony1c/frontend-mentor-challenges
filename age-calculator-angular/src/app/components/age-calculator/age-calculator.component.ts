import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgeCalculatorService } from '../../services/age-calculator.service';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './age-calculator.component.html',
})
export class AgeCalculatorComponent {
  #fb: FormBuilder = inject(FormBuilder);
  #ageCalculatorService: AgeCalculatorService = inject(AgeCalculatorService);
  years = '--';
  months = '--';
  days = '--';

  dateOfBirth = this.#fb.group({
    day: ['', Validators.required],
    month: ['', Validators.required],
    year: ['', Validators.required],
  });

  public calcAge(): void {
    if (this.dateOfBirth.valid) {
      const { day, month, year } = this.dateOfBirth.getRawValue();
      const { years, months, days } = this.#ageCalculatorService.calcAge(
        Number(day),
        Number(month),
        Number(year),
      );
      this.years = years.toString();
      this.months = months.toString();
      this.days = days.toString();
    } else {
      console.log('Form is invalid');
    }
  }
}
