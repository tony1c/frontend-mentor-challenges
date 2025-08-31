import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

import { Link } from '../../../models/shorten';

@Component({
  selector: 'app-desktop-nav',
  imports: [NgOptimizedImage],
  templateUrl: './desktop-nav.html',
  styles: ``,
})
export class DesktopNav {
  links = input.required<Link[]>();
}
