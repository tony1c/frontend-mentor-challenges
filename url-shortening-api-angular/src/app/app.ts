import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ShortenService } from './services/shorten';
import { ShortenedUrl } from './models/shorten';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ReactiveFormsModule],
})
export class App {
  protected readonly title = signal('url-shortening-api-angular');
  shortenService = inject(ShortenService);
  shortenedUrls = signal<ShortenedUrl[]>([]);

  url = new FormControl<string>('', { nonNullable: true });

  onSubmit(): void {
    if (!this.url.value) return;

    this.shortenService
      .shortenAndAdd(this.url.value, this.shortenedUrls)
      .subscribe({ next: () => this.url.reset() });
  }
}
