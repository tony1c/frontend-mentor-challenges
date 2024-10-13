import { Component, Input } from '@angular/core';
import { PatternComponent } from '../pattern/pattern.component';
import { Slip } from '../../../models/slip.model';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PatternComponent],
  templateUrl: './content.component.html',
  styles: ``,
})
export class ContentComponent {
  @Input({ required: true }) slip!: Slip;
}
