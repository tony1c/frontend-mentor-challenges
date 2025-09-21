import { Component, signal } from '@angular/core';

import { Button } from './components/button/button';
import { ExtentionList } from './components/extention-list/extention-list';
import { Header } from './sections/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Button, ExtentionList],
  templateUrl: './app.html',
  styles: ``,
})
export class App {
  protected readonly title = signal('angular-start');
}
