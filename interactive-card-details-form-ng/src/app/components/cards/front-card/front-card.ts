import { CardForm } from '@/app/models/types';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-front-card',
  imports: [],
  templateUrl: './front-card.html',
  styles: ``,
})
export class FrontCard {
  cardFormValues = input.required<CardForm>();
  displayName = computed(() => this.cardFormValues().cardholderName || 'Jane Appleseed');
  cardNumber = computed(() => this.cardFormValues().cardNumber || '0000 0000 0000 0000');
  expMM = computed(() => this.cardFormValues().expMM || '00');
  expYY = computed(() => this.cardFormValues().expYY || '00');
  cvc = computed(() => this.cardFormValues().cvc || '000');
}
