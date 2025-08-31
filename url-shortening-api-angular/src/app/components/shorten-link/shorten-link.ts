import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';

import { ShortenedUrl } from '../../models/shorten';

@Component({
  selector: 'app-shorten-link',
  imports: [NgClass],
  templateUrl: './shorten-link.html',
  styles: ``,
})
export class ShortenLink {
  shortenUrl = input.required<ShortenedUrl>();
  buttonText = signal('Copy');

  onClick(): void {
    navigator.clipboard.writeText(this.shortenUrl().shortenedUrl);
    this.buttonText.set('Copied!');

    setTimeout(() => {
      this.buttonText.set('Copy');
    }, 3000);
  }
}
