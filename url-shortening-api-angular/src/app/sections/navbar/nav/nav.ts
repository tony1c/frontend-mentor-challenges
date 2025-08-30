import { Component } from '@angular/core';

import { Link } from '../../../models/shorten';
import { MobileNav } from '../mobile-nav/mobile-nav';

@Component({
  selector: 'app-nav',
  imports: [MobileNav],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  readonly links: Link[] = [
    { name: 'Features', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Resources', href: '/' },
  ];
}
