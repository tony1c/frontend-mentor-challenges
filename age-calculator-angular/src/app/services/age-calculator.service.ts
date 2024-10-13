import { Injectable } from '@angular/core';
import { Age } from '../models/age.model';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AgeCalculatorService {
  public isValidDate(
    day: string | null,
    month: string | null,
    year: string | null,
  ): boolean {
    const dateInput = `${year}/${month}/${day}`;

    const dateObj = new Date(dateInput);
    const currentDate = new Date();

    const extractedDay = dateObj.getDate();
    const extractedMonth = dateObj.getMonth() + 1;
    const extractedYear = dateObj.getFullYear();

    const resultDate = `${extractedYear}/${extractedMonth}/${extractedDay}`;

    if (
      dateObj > currentDate ||
      isNaN(dateObj.getTime()) ||
      resultDate !== dateInput
    ) {
      return false;
    }

    return true;
  }

  public calcAge(day: number, month: number, year: number): Age {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  }

  public getErrorMessageForDay(
    dayControl: AbstractControl,
    isValidDate: () => boolean,
    submitted: boolean,
  ): string | null {
    if (submitted) {
      if (dayControl.hasError('required')) {
        return 'This field is required';
      } else if (dayControl.hasError('min') || dayControl.hasError('max')) {
        return 'Must be a valid day';
      } else if (!isValidDate()) {
        return 'Must be a valid date';
      }
    }
    return null;
  }

  public getErrorMessageForMonth(
    monthControl: AbstractControl,
    submitted: boolean,
  ): string | null {
    if (submitted) {
      if (monthControl.hasError('required')) {
        return 'This field is required';
      } else if (monthControl.hasError('min') || monthControl.hasError('max')) {
        return 'Must be a valid month';
      }
    }
    return null;
  }

  public getErrorMessageForYear(
    yearControl: AbstractControl,
    submitted: boolean,
  ): string | null {
    if (submitted) {
      if (yearControl.hasError('required')) {
        return 'This field is required';
      } else if (yearControl.hasError('max')) {
        return 'Must be in the past';
      }
    }
    return null;
  }
}
