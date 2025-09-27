import { Component, computed, inject, signal } from '@angular/core';

import { JobComponent } from './components/job-component/job-component';
import { JobListingsService } from './features/job-listings/services/job-listings-service';

@Component({
  selector: 'app-root',
  imports: [JobComponent],
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
