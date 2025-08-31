import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { ShortenService } from '../../services/shorten';
import { urlValidator } from '../../validators/url-validator';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './input.html',
  styles: ``,
})
export class Input {
  shortenService = inject(ShortenService);
  isSubmitted = signal(false);
  url = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, urlValidator()],
  });

  onSubmit(): void {
    this.isSubmitted.set(true);

    if (this.url.invalid) {
      return;
    }

    this.shortenService.shortenAndAdd(this.url.value).subscribe({
      next: () => this.url.reset(),
      error: () => {
        this.url.setErrors({ invalidUrl: true });
      },
    });
  }

  public onInputChange(): void {
    if (this.url.invalid && this.isSubmitted()) {
      this.url.setErrors(null);
      this.isSubmitted.set(false);
    }
  }

  isInvalid(): boolean {
    return this.url.invalid && this.isSubmitted() && (this.url.touched || this.url.dirty);
  }
}
