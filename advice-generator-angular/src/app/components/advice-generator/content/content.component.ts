import { Component } from '@angular/core';
import { PatternComponent } from '../pattern/pattern.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PatternComponent],
  templateUrl: './content.component.html',
  styles: ``,
})
export class ContentComponent {}
