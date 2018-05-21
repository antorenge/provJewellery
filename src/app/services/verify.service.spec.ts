import { TestBed, inject } from '@angular/core/testing';

import { VerifyService } from './verify.service';

describe('VerifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyService]
    });
  });

  it('should be created', inject([VerifyService], (service: VerifyService) => {
    expect(service).toBeTruthy();
  }));
});
