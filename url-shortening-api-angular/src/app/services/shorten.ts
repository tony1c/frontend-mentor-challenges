import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { ShortenedUrl } from '../models/shorten';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {
  #http = inject(HttpClient);
  #apiUrl = '/api/v1/shorten';
  #shortenUrls = signal<ShortenedUrl[]>([]);
  readonly #allUrls = 'shorten-urls:all-urls';

  get shortenUrls(): Signal<ShortenedUrl[]> {
    return this.#shortenUrls.asReadonly();
  }

  private callShortenApi$(url: string): Observable<{ result_url: string }> {
    return this.#http.post<{ result_url: string }>(this.#apiUrl, { url });
  }

  private shortenUrl(url: string): Observable<ShortenedUrl> {
    return this.callShortenApi$(url).pipe(
      map((res) => ({ originalUrl: url, shortenedUrl: res.result_url })),
      catchError((err) => {
        console.error('Failed to shorten the URL:', err);
        throw err;
      })
    );
  }

  private saveShortenToLocalStorage(): void {
    const stringifiedShortenUrl = JSON.stringify(this.#shortenUrls());
    localStorage.setItem(this.#allUrls, stringifiedShortenUrl);
  }

  loadShortenUrls(): void {
    if (!localStorage.getItem(this.#allUrls)) return;

    this.#shortenUrls.update(() => JSON.parse(localStorage.getItem(this.#allUrls)!));
  }

  shortenAndAdd(url: string): Observable<ShortenedUrl> {
    return this.shortenUrl(url).pipe(
      tap((shortenedUrl) =>
        this.#shortenUrls.update((urls) => {
          const latestThree = urls.slice(0, 2);
          return [shortenedUrl, ...latestThree];
        })
      ),
      tap(() => this.saveShortenToLocalStorage())
    );
  }
}
