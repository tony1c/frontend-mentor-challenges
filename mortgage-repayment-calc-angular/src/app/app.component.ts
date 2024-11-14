import { Component } from '@angular/core';
import { MortgageFormComponent } from './components/mortgage-form/mortgage-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MortgageFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mortgage-repayment-calc-angular';
}
