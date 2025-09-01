import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { Link, Social } from '../../models/shorten';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  featureLinks: Link[] = [
    { name: 'Link Shortening', href: '#' },
    { name: 'Branded Links', href: '#' },
    { name: 'Analytics', href: '#' },
  ];

  resourceLinks: Link[] = [
    { name: 'Blog', href: '#' },
    { name: 'Developers', href: '#' },
    { name: 'Support', href: '#' },
  ];

  companyLinks: Link[] = [
    { name: 'About', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  socialIcons: Social[] = [
    {
      path: 'images/icon-facebook.svg',
      href: '#',
      alt: 'Icon Facebook',
    },
    {
      path: 'images/icon-twitter.svg',
      href: '#',
      alt: 'Icon Twitter',
    },
    {
      path: 'images/icon-pinterest.svg',
      href: '#',
      alt: 'Icon Pinterest',
    },
    {
      path: 'images/icon-instagram.svg',
      href: '#',
      alt: 'Icon Instagram',
    },
  ];
}
