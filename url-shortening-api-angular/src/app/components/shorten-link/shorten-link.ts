import { Component, input } from '@angular/core';

import { ShortenedUrl } from '../../models/shorten';

@Component({
  selector: 'app-shorten-link',
  imports: [],
  templateUrl: './shorten-link.html',
  styles: ``,
})
export class ShortenLink {
  shortenUrl = input.required<ShortenedUrl>();
}
