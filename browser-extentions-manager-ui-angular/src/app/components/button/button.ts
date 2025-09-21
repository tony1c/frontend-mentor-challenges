import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { FilterType } from '../../../models/extention';
import { ExtentionService } from '../../features/extentions/services/extention-service';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styles: ``,
})
export class Button {
  #extentionService = inject(ExtentionService);
  filter = input.required<FilterType>();
  currFilter = this.#extentionService.currentFilter;

  setFilter(filter: FilterType): void {
    this.#extentionService.setFilter(filter);
  }
}
