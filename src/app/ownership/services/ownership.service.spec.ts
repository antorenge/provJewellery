import { TestBed, inject } from '@angular/core/testing';

import { OwnershipService } from './ownership.service';

describe('OwnershipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnershipService]
    });
  });

  it('should be created', inject([OwnershipService], (service: OwnershipService) => {
    expect(service).toBeTruthy();
  }));
});
