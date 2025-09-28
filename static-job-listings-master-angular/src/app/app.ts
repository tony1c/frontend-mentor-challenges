import { Component, computed, inject, signal } from '@angular/core';

import { JobListComponent } from './features/jobs/components/job-list-component/job-list-component';
import { JobListingsService } from './features/jobs/services/job-listings-service';

@Component({
  selector: 'app-root',
  imports: [JobListComponent],
  templateUrl: './app.html',
  styles: ``,
})
export class App {
  protected readonly title = signal('angular-start');
  #jobsService = inject(JobListingsService);
  jobsList = this.#jobsService.jobsList;
  selectedJob = computed(() => this.jobsList()[0]);

  constructor() {
    console.log(this.jobsList());
    console.log(this.selectedJob());
  }
}
