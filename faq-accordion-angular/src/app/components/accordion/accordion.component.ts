import { Component, inject } from '@angular/core';
import { AccordionService } from '../../services/accordion.service';
import { AccordionModel } from '../../models/accordion.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  #accordionService: AccordionService = inject(AccordionService);
  accordions: AccordionModel[] = this.#accordionService.getAccordions();
  expandedIdx$ = this.#accordionService.expandedIdx$;

  toggleAccordion(id: number) {
    this.#accordionService.toggleAccordion(id);
  }
}
