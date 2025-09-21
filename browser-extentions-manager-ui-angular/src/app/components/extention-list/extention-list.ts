import { Component, inject } from '@angular/core';

import { ExtentionService } from '../../features/extentions/services/extention-service';
import { Extention } from '../extention/extention';

@Component({
  selector: 'app-extention-list',
  imports: [Extention],
  templateUrl: './extention-list.html',
  styles: ``,
})
export class ExtentionList {
  #extentionsService = inject(ExtentionService);
  extentions = this.#extentionsService.extentions;
}
