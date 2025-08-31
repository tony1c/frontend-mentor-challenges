import { Component, inject, OnInit } from '@angular/core';

import { Input } from '../../components/input/input';
import { ShortenLink } from '../../components/shorten-link/shorten-link';
import { ShortenService } from '../../services/shorten';

@Component({
  selector: 'app-advanced-statistics',
  imports: [Input, ShortenLink],
  templateUrl: './advanced-statistics.html',
  styles: ``,
})
export class AdvancedStatistics implements OnInit {
  shortenService = inject(ShortenService);
  shortenUrls = this.shortenService.shortenUrls;

  ngOnInit(): void {
    this.shortenService.loadShortenUrls();
  }
}
