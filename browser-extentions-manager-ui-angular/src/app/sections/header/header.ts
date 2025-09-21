import { Component } from '@angular/core';

import { ThemeSwitcher } from '../../components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-header',
  imports: [ThemeSwitcher],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {}
