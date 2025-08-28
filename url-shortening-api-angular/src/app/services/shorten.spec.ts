import { TestBed } from '@angular/core/testing';

import { Shorten } from './shorten';

describe('Shorten', () => {
  let service: Shorten;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shorten);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
