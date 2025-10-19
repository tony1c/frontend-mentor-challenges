import { Component, signal } from '@angular/core';

import { BackCard } from './components/cards/back-card/back-card';
import { FrontCard } from './components/cards/front-card/front-card';
import { Form } from './components/form/form';

@Component({
  selector: 'app-root',
  imports: [BackCard, FrontCard, Form],
  templateUrl: './app.html',
  styles: ``,
})
export class App {
  protected readonly title = signal('angular-start');
}
