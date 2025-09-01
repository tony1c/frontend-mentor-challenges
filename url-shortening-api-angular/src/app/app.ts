import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { AdvancedStatistics } from './sections/advanced-statistics/advanced-statistics';
import { Cta } from './sections/cta/cta';
import { Footer } from './sections/footer/footer';
import { Hero } from './sections/hero/hero';
import { Nav } from './sections/navbar/nav/nav';
import { urlValidator } from './validators/url-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ReactiveFormsModule, Hero, Nav, AdvancedStatistics, Cta, Footer],
})
export class App {
  protected readonly title = signal('url-shortening-api-angular');
  url = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, urlValidator()],
  });
}
