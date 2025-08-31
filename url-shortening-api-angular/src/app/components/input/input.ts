import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { ShortenService } from '../../services/shorten';
import { urlValidator } from '../../validators/url-validator';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
  styles: ``,
})
export class Input {
  shortenService = inject(ShortenService);
  url = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, urlValidator()],
  });

  onSubmit(): void {
    if (this.url.invalid) return;

    this.shortenService.shortenAndAdd(this.url.value).subscribe({
      next: () => this.url.reset(),
    });
  }
}
