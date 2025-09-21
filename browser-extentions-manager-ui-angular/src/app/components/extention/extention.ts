import { Component, inject, input } from '@angular/core';

import { ExtentionInterface } from '../../../models/extention';
import { ExtentionService } from '../../features/extentions/services/extention-service';
import { ToggleBtn } from '../toggle-btn/toggle-btn';

@Component({
  selector: 'app-extention',
  imports: [ToggleBtn],
  templateUrl: './extention.html',
  styles: ``,
})
export class Extention {
  extention = input.required<ExtentionInterface>();
  #extentionService = inject(ExtentionService);

  removeExtention(extToRemove: ExtentionInterface): void {
    return this.#extentionService.removeExt(extToRemove);
  }
}
