import { Component, Input } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { LoginBtnComponent } from '../login-btn/login-btn.component';

@Component({
  selector: 'app-desktop-navbar',
  standalone: true,
  imports: [LogoComponent, LoginBtnComponent],
  templateUrl: './desktop-navbar.component.html',
})
export class DesktopNavbarComponent {
  @Input({ required: true }) links!: string[];
}
