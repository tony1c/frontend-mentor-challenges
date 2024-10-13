import { Injectable } from '@angular/core';
import { Age } from '../models/age.model';

@Injectable({
  providedIn: 'root',
})
export class AgeCalculatorService {
  public isValidDate(
    day: string | null,
    month: string | null,
    year: string | null,
  ): boolean {
    const dateInput = `${year}/${month}/${day}`; // YYYY-MM-DD format

    const dateObj = new Date(dateInput);
    const currentDate = new Date();

    if (dateObj > currentDate) {
      console.log('Not valid');
      return false;
    }

    if (isNaN(dateObj.getTime())) {
      // Invalid date
      console.log('Not a valid date');
      return false;
    }

    // Extracting the correct day, month, and year from the date object
    const extractedDay = dateObj.getDate();
    const extractedMonth = dateObj.getMonth() + 1; // Months are 0-indexed
    const extractedYear = dateObj.getFullYear();

    const resultDate = `${extractedYear}/${extractedMonth}/${extractedDay}`;

    if (resultDate !== dateInput) {
      console.log(`${resultDate} !== ${dateInput} is also not valid.`);
      return false;
    }

    console.log('valid');
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
}
