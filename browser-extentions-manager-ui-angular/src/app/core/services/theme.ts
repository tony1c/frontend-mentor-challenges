import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

type ThemeType = 'light' | 'dark';
const storageKey = 'theme';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  #document = inject(DOCUMENT);
  // Actually not useful in this app because it is CSR, but in case we would go for a SSR app, this would be the way to go for safe access to the DOM.
  #platformId = inject(PLATFORM_ID);
  readonly currTheme = signal<ThemeType>('dark');

  constructor() {
    this.initializeTheme();
  }

  setTheme(theme: ThemeType): void {
    if (isPlatformBrowser(this.#platformId)) {
      this.#document.documentElement.setAttribute('data-theme', theme);
      this.currTheme.set(theme);
    }
  }

  initializeTheme(): void {
    if (isPlatformBrowser(this.#platformId)) {
      const theme = localStorage.getItem(storageKey) || this.currTheme();

      this.setTheme(theme as ThemeType);
    }
  }

  toggleTheme(): void {
    const newTheme = this.currTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  }
}
