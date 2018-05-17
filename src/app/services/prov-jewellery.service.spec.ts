import { TestBed, inject } from '@angular/core/testing';

import { ProvJewelleryService } from './prov-jewellery.service';

describe('ProvJewelleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvJewelleryService]
    });
  });

  it('should be created', inject([ProvJewelleryService], (service: ProvJewelleryService) => {
    expect(service).toBeTruthy();
  }));
});
