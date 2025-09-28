import { Component, inject } from '@angular/core';

import { JobListingsService } from '../../services/job-listings-service';

@Component({
  selector: 'app-job-filters-component',
  imports: [],
  templateUrl: './job-filters-component.html',
  styles: ``,
})
export class JobFiltersComponent {
  #jobsService = inject(JobListingsService);
  filters = this.#jobsService.filters;

  removeFilter(filter: string): void {
    this.#jobsService.removeFilter(filter);
  }

  clearFilters(): void {
    this.#jobsService.clearFilters();
  }
}
