import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hamburger-menu.component.html',
})
export class HamburgerMenuComponent {
  @Input({ required: true }) isOpen!: boolean;
  @Output() menuToggled = new EventEmitter<void>();

  public toggle(): void {
    this.menuToggled.emit();
  }
}
