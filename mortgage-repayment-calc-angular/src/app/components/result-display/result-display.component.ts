import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { MortgageService } from '../../services/mortgage.service';

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [DecimalPipe, AsyncPipe],
  templateUrl: './result-display.component.html',
  styles: ``,
})
export class ResultDisplayComponent {
  #mortgageService = inject(MortgageService);
  destroyRef = inject(DestroyRef);
  repaymentAmount$ = this.#mortgageService.repaymentAmount$;
  totalRepayment$ = this.#mortgageService.totalRepayment$;
}
