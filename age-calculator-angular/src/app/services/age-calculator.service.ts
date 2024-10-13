import { Injectable } from '@angular/core';
import { Age } from '../models/age.model';

@Injectable({
  providedIn: 'root',
})
export class AgeCalculatorService {
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
}
