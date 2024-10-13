import { Component } from '@angular/core';
import { AgeCalculatorComponent } from './components/age-calculator/age-calculator.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgeCalculatorComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'age-calculator-angular';
}
