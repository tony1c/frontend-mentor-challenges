import { NgOptimizedImage } from '@angular/common';
import { Component, input, signal } from '@angular/core';

import { OutsideClick } from '../../../directives/outside-click';
import { Link } from '../../../models/shorten';

@Component({
  selector: 'app-mobile-nav',
  imports: [NgOptimizedImage, OutsideClick],
  templateUrl: './mobile-nav.html',
  styles: ``,
})
export class MobileNav {
  links = input.required<Link[]>();
  isOpen = signal(false);

  toggleIsOpen(): void {
    this.isOpen.update(isOpen => !isOpen);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }
}
