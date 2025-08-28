import { HttpClient } from '@angular/common/http';
import { inject, Injectable, WritableSignal } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { ShortenedUrl } from '../models/shorten';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {
  #http = inject(HttpClient);
  #apiUrl = '/api/v1/shorten';

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

  shortenAndAdd(url: string, urlsSignal: WritableSignal<ShortenedUrl[]>): Observable<ShortenedUrl> {
    return this.shortenUrl(url).pipe(
      tap((shortenedUrl) => urlsSignal.update((urls) => [...urls, shortenedUrl]))
    );
  }
}
