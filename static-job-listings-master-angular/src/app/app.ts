import { Component, signal } from '@angular/core';

import { JobFiltersComponent } from './features/jobs/components/job-filters-component/job-filters-component';
import { JobListComponent } from './features/jobs/components/job-list-component/job-list-component';

@Component({
  selector: 'app-root',
  imports: [JobListComponent, JobFiltersComponent],
  templateUrl: './app.html',
  styles: ``,
})
export class App {
  protected readonly title = signal('Static job listings project');
}
