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

  // Tried to handle the submit method without a extra variable, in this case isSubmitted, with updateOn: 'submit' but since we want to clear the errors on input value change, there are cases when the post request still goes through even though the url is not valid. Seems like the onInputChange clears errors as soon as we try to make the post request, which is not what we want.
  public onSubmit(): void {
    this.isSubmitted.set(true);

    if (this.url.invalid) {
      console.log('Invalid url!');
      return;
    }

    // The error handler shouldn't be needed because the post request wouldn't go through if the url is not valid on submit, but it's still good to make sure we correctly set the error in any case.
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

  public isInvalid(): boolean {
    return this.url.invalid && this.isSubmitted() && (this.url.touched || this.url.dirty);
  }
}
