import { Job } from '@/app/models/job.model';
import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-job-component',
  imports: [NgClass],
  templateUrl: './job-component.html',
  styles: ``,
})
export class JobComponent {
  job = input.required<Job>();

  formattedImgPath(basePath: string): string {
    const formattedLogoUrl = basePath.slice(2);
    return `assets/${formattedLogoUrl}`;
  }
}
