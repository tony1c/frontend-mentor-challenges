import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { Job } from '../../models/job.interface';

@Component({
  selector: 'app-job-component',
  imports: [NgClass],
  templateUrl: './job-component.html',
  styles: ``,
})
export class JobComponent {
  job = input.required<Job>();

  formatImgPath(basePath: string): string {
    const formattedLogoUrl = basePath.slice(2);
    return `assets/${formattedLogoUrl}`;
  }
}
