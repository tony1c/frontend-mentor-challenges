import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { Job } from '../../models/job.interface';
import { JobListingsService } from '../../services/job-listings-service';

@Component({
  selector: 'app-job-component',
  imports: [NgClass],
  templateUrl: './job-component.html',
  styles: ``,
})
export class JobComponent {
  #jobListingsService = inject(JobListingsService);
  job = input.required<Job>();

  formatImgPath(basePath: string): string {
    const formattedLogoUrl = basePath.slice(2);
    return `assets/${formattedLogoUrl}`;
  }

  addFilter(filter: string): void {
    this.#jobListingsService.addFilter(filter);
  }
}
