import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MortgageService } from '../../services/mortgage.service';

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [DecimalPipe, AsyncPipe],
  templateUrl: './result-display.component.html',
  styles: ``,
})
export class ResultDisplayComponent implements OnInit {
  #mortgageService = inject(MortgageService);
  destroyRef = inject(DestroyRef);
  repaymentAmount: number | null = null;
  totalRepayment$ = this.#mortgageService.totalRepayment$;

  ngOnInit() {
    const subscription = this.#mortgageService.repaymentAmount$.subscribe(
      (val) => {
        this.repaymentAmount = val;
      },
    );

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
