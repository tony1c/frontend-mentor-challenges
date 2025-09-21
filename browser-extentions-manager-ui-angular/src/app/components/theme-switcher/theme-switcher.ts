import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Theme } from '../../core/services/theme';

@Component({
  selector: 'app-theme-switcher',
  imports: [NgClass],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.css',
})
export class ThemeSwitcher {
  theme = inject(Theme);
  currTheme = this.theme.currTheme;

  toggleTheme(): void {
    this.theme.toggleTheme();
  }
}
