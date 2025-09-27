import { Job } from '@/app/models/job.model';
import { Injectable, signal } from '@angular/core';
import jobList from 'assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListingsService {
  #jobsList = signal<Job[]>(jobList);

  get jobsList() {
    return this.#jobsList;
  }
}
