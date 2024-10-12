import { Component, Input } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { LoginBtnComponent } from '../login-btn/login-btn.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [LogoComponent, LoginBtnComponent],
  templateUrl: './mobile-navbar.component.html',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ transform: 'translateY(-50%) translateX(-50%)' }),
        animate(
          '1s ease-in',
          style({ transform: 'translateY(50%) translateX(-50%)' }),
        ),
      ]),
      transition(':leave', [
        style({ tranform: 'translateY(50%)' }),
        animate(
          '0.3s ease-out',
          style({
            transform: 'translateY(-50%) translateX(-50%)',
          }),
        ),
      ]),
    ]),
  ],
})
export class MobileNavbarComponent {
  @Input({ required: true }) links!: string[];
  isOpen = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
