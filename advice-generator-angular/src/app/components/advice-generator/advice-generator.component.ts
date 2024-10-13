import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ButtonGenerateComponent } from './button-generate/button-generate.component';
import { PatternComponent } from './pattern/pattern.component';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { GenerateAdviceService } from '../../services/generate-advice.service';
import { Slip } from '../../models/slip.model';

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
export class AdviceGeneratorComponent implements OnInit {
  #generateAdvice: GenerateAdviceService = inject(GenerateAdviceService);
  slip: Slip = {
    id: 117,
    advice: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`,
  };

  ngOnInit(): void {
    this.#generateAdvice.fetchAdvice().subscribe((res) => {
      this.slip = res.slip;
    });
  }
}
