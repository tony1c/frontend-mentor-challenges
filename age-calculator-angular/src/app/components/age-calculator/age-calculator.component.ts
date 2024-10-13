import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgeCalculatorService } from '../../services/age-calculator.service';
import { Age } from '../../models/age.model';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './age-calculator.component.html',
})
export class AgeCalculatorComponent {
  #fb: FormBuilder = inject(FormBuilder);
  #ageCalculatorService: AgeCalculatorService = inject(AgeCalculatorService);
  age: Age = { years: null, months: null, days: null };

  dateOfBirth = this.#fb.group({
    day: ['', Validators.required],
    month: ['', Validators.required],
    year: ['', Validators.required],
  });

  public isValidDate(): boolean {
    const { day, month, year } = this.dateOfBirth.getRawValue();
    return this.#ageCalculatorService.isValidDate(day, month, year);
  }

  public calcAge(): void {
    const { day, month, year } = this.dateOfBirth.getRawValue();
    const { years, months, days } = this.#ageCalculatorService.calcAge(
      Number(day),
      Number(month),
      Number(year),
    );
    this.age.years = years;
    this.age.months = months;
    this.age.days = days;
  }

  public onSubmit(): void {
    if (this.isValidDate() && this.dateOfBirth.valid) {
      this.calcAge();
    } else {
      console.log('Invalid date or form');
    }
  }
}
