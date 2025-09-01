import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

import { Feature } from '../../models/shorten';

@Component({
  selector: 'app-feature-card',
  imports: [NgOptimizedImage],
  templateUrl: './feature-card.html',
  styles: ``,
})
export class FeatureCard {
  feature = input.required<Feature>();
}
