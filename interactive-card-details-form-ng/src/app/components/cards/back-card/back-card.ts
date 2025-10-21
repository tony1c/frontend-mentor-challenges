import { CardForm } from '@/app/models/types';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-back-card',
  imports: [],
  templateUrl: './back-card.html',
  styles: ``,
})
export class BackCard {
  cardFormValues = input.required<CardForm>();
  cvc = computed(() => this.cardFormValues().cvc || '000');
}
