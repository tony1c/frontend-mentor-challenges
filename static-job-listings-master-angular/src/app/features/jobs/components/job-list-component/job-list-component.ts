import { JobListingsService } from '@/app/features/jobs/services/job-listings-service';
import { Component, inject } from '@angular/core';

import { JobComponent } from '../job-component/job-component';

@Component({
  selector: 'app-job-list-component',
  imports: [JobComponent],
  templateUrl: './job-list-component.html',
  styles: ``,
})
export class JobListComponent {
  #jobsService = inject(JobListingsService);
  jobList = this.#jobsService.jobsList;
}
