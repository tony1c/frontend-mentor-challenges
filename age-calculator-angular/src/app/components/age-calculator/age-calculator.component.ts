import { Component, inject, OnInit } from '@angular/core';
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
export class AgeCalculatorComponent implements OnInit {
  #fb: FormBuilder = inject(FormBuilder);
  #ageCalculatorService: AgeCalculatorService = inject(AgeCalculatorService);
  age: Age = { years: null, months: null, days: null };
  submitted = false;

  dateOfBirth = this.#fb.group({
    day: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
    month: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
    year: [
      '',
      [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
      ],
    ],
  });

  ngOnInit() {
    this.dateOfBirth.valueChanges.subscribe(() => {
      if (this.submitted) {
        this.submitted = false;
      }
    });
  }

  getErrorMessageForDay(): string | null {
    return this.#ageCalculatorService.getErrorMessageForDay(
      this.dateOfBirth.controls.day,
      this.isValidDate.bind(this),
      this.submitted,
    );
  }

  getErrorMessageForMonth(): string | null {
    return this.#ageCalculatorService.getErrorMessageForMonth(
      this.dateOfBirth.controls.month,
      this.submitted,
    );
  }

  getErrorMessageForYear(): string | null {
    return this.#ageCalculatorService.getErrorMessageForYear(
      this.dateOfBirth.controls.year,
      this.submitted,
    );
  }

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
    this.submitted = true;
    if (this.isValidDate() && this.dateOfBirth.valid) {
      this.calcAge();
    } else {
      console.log('Invalid date or form');
    }
  }
}
