import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShortenService } from './services/shorten';
import { urlValidator } from './validators/url-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ReactiveFormsModule],
})
export class App implements OnInit {
  protected readonly title = signal('url-shortening-api-angular');
  shortenService = inject(ShortenService);
  shortenUrls = this.shortenService.shortenUrls;
  url = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, urlValidator()],
  });

  ngOnInit(): void {
    this.shortenService.loadShortenUrls();
  }

  onSubmit(): void {
    if (this.url.invalid) return;

    this.shortenService.shortenAndAdd(this.url.value).subscribe({
      next: () => this.url.reset(),
    });
  }
}
