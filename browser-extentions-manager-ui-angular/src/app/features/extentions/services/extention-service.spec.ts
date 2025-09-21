import { TestBed } from '@angular/core/testing';

import { ExtentionService } from './extention-service';

describe('Extention', () => {
  let service: ExtentionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtentionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
