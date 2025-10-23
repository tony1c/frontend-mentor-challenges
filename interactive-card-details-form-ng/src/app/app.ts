import { Component, signal } from '@angular/core';

import { BackCard } from './components/cards/back-card/back-card';
import { FrontCard } from './components/cards/front-card/front-card';
import { Completed } from './components/completed/completed';
import { Form } from './components/form/form';
import { CardForm } from './models/types';

@Component({
  selector: 'app-root',
  imports: [BackCard, FrontCard, Form, Completed],
  templateUrl: './app.html',
  styles: ``,
})
export class App {
  protected readonly title = signal('angular-start');
  isSubmittedSuccessfully = signal(false);
  cardFormValues = signal<CardForm>({
    cardholderName: '',
    cardNumber: '',
    expMM: '',
    expYY: '',
    cvc: '',
  });

  handleCardNumberChange(cardForm: CardForm): void {
    this.cardFormValues.set(cardForm);
  }

  handleIsSubmittedSuccessfully(bool: boolean): void {
    this.isSubmittedSuccessfully.set(bool);
  }
}
