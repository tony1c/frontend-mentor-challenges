import { Injectable, signal } from '@angular/core';
import data from 'assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListingsService {
  #jobsList = signal(data);

  get jobsList() {
    return this.#jobsList;
  }
}
