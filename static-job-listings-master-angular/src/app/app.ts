import { Component, inject, signal } from '@angular/core';

import { JobListingsService } from './features/job-listings/services/job-listings-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styles: ``,
})
export class App {
  protected readonly title = signal('angular-start');
  #jobsService = inject(JobListingsService);
  #jobsList = this.#jobsService.jobsList;

  constructor() {
    console.log(this.#jobsList());
  }
}
