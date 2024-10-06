import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  isOpen = false;

  public toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
