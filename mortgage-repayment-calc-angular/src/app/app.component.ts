import { Component } from '@angular/core';
import { MortgageFormComponent } from './components/mortgage-form/mortgage-form.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MortgageFormComponent, ResultDisplayComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mortgage-repayment-calc-angular';
}
