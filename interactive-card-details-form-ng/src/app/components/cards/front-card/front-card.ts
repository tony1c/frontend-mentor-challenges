import { CardForm } from '@/app/models/types';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-front-card',
  imports: [],
  templateUrl: './front-card.html',
  styles: ``,
})
export class FrontCard {
  cardFormValues = input.required<CardForm>();
}
