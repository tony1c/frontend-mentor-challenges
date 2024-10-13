import { TestBed } from '@angular/core/testing';

import { GenerateAdviceService } from './generate-advice.service';

describe('GenerateAdviceService', () => {
  let service: GenerateAdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateAdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
