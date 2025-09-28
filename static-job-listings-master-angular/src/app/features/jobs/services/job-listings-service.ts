import { Job } from '@/app/features/jobs/models/job.interface';
import { computed, Injectable, signal } from '@angular/core';
import jobList from 'assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListingsService {
  readonly #jobsList = signal<Job[]>(jobList);
  readonly #filters = signal<string[]>([]);
  readonly #filteredJobList = computed(() => {
    const jobs = this.#jobsList();
    const filters = this.#filters();

    if (!filters.length) {
      return jobs;
    }

    return jobs;
  });

  get jobsList() {
    return this.#filteredJobList;
  }

  get filters() {
    return this.#filters;
  }

  addFilter(filter: string): void {
    if (this.#filters().includes(filter)) {
      return;
    }
    this.#filters.update(filters => [...filters, filter]);
    console.log(this.#filters());
  }

  clearFilters(): void {
    this.#filters.set([]);
  }

  removeFilter(filter: string): void {
    this.#filters.update(fs => fs.filter(f => f !== filter));
  }
}
