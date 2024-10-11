import { Component, Input } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { LoginBtnComponent } from '../login-btn/login-btn.component';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [LogoComponent, LoginBtnComponent],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css',
})
export class MobileNavbarComponent {
  @Input({ required: true }) links!: string[];
  isOpen = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
