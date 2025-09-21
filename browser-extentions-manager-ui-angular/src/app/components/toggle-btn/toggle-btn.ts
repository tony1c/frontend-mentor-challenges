import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { ExtentionInterface } from '../../../models/extention';
import { ExtentionService } from '../../features/extentions/services/extention-service';

@Component({
  selector: 'app-toggle-btn',
  imports: [NgClass],
  templateUrl: './toggle-btn.html',
  styles: ``,
})
export class ToggleBtn {
  extentionService = inject(ExtentionService);
  extention = input.required<ExtentionInterface>();

  toggleActive(ext: ExtentionInterface): void {
    this.extentionService.toggleActive(ext);
  }
}
