import { Component, Input } from '@angular/core';
import { Slip } from '../../../models/slip.model';
import { PatternComponent } from '../pattern/pattern.component';

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
