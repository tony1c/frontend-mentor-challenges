import { Component } from '@angular/core';
import { ButtonGenerateComponent } from './button-generate/button-generate.component';
import { PatternComponent } from './pattern/pattern.component';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-advice-generator',
  standalone: true,
  imports: [
    ButtonGenerateComponent,
    PatternComponent,
    ContainerComponent,
    ContentComponent,
  ],
  templateUrl: './advice-generator.component.html',
})
export class AdviceGeneratorComponent {}
