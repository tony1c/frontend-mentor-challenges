export interface ShortenedUrl {
  originalUrl: string;
  shortenedUrl: string;
}

export interface Link {
  name: string;
  href: string;
}

export interface Feature {
  title: string;
  text: string;
  iconPath: string;
}

export interface Social {
  path: string;
  href: string;
  alt: string;
}
