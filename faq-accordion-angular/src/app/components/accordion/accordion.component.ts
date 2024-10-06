import { Component, inject, Input } from '@angular/core';
import { AccordionService } from '../../services/accordion.service';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() question = '';
  @Input() response = '';
  accordionService: AccordionService = inject(AccordionService);

  public log() {
    console.log('Clicked');
  }

  public toggleIsOpen() {
    this.accordionService.toggleIsOpen();
  }
}
