import { Component } from '@angular/core';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { DesktopNavbarComponent } from './desktop-navbar/desktop-navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MobileNavbarComponent, DesktopNavbarComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  links: string[] = ['Product', 'Features', 'Pricing'];
}
