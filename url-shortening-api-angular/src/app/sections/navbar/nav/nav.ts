import { Component } from '@angular/core';

import { Link } from '../../../models/shorten';
import { DesktopNav } from '../desktop-nav/desktop-nav';
import { MobileNav } from '../mobile-nav/mobile-nav';

@Component({
  selector: 'app-nav',
  imports: [MobileNav, DesktopNav],
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
