import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { FeatureCard } from '../../components/feature-card/feature-card';
import { Input } from '../../components/input/input';
import { ShortenLink } from '../../components/shorten-link/shorten-link';
import { Feature } from '../../models/shorten';
import { ShortenService } from '../../services/shorten';

@Component({
  selector: 'app-advanced-statistics',
  imports: [Input, ShortenLink, FeatureCard, NgClass],
  templateUrl: './advanced-statistics.html',
  styles: ``,
})
export class AdvancedStatistics implements OnInit {
  shortenService = inject(ShortenService);
  shortenUrls = this.shortenService.shortenUrls;
  features: Feature[] = [
    {
      title: 'Brand Recognition',
      text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
      iconPath: 'images/icon-brand-recognition.svg',
    },

    {
      title: 'Detailed Records',
      text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      iconPath: 'images/icon-detailed-records.svg',
    },

    {
      title: 'Fully Customizable',
      text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      iconPath: 'images/icon-fully-customizable.svg',
    },
  ];

  calcMargin(idx: number): string | null {
    switch (idx) {
      case 0:
        return null;
      case 1:
        return 'lg:mt-10';
      case 2:
        return 'lg:mt-20';
      default:
        return null;
    }
  }

  ngOnInit(): void {
    this.shortenService.loadShortenUrls();
  }
}
