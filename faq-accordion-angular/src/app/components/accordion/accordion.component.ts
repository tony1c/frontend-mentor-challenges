import { Component, inject } from '@angular/core';
import { AccordionService } from '../../services/accordion.service';
import { AccordionModel } from '../../models/accordion.model';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  accordionService: AccordionService = inject(AccordionService);
  accordions: AccordionModel[] = this.accordionService.getAccordions();
  expandedIdx: number | null = null;

  public toggleAccordion(id: number): void {
    if (this.expandedIdx === id) {
      this.expandedIdx = null;
    } else {
      this.expandedIdx = id;
    }
  }
}
