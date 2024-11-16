import { Component } from '@angular/core';
import { MortgageFormComponent } from './components/mortgage-form/mortgage-form.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MortgageFormComponent, ResultDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mortgage-repayment-calc-angular';
}
