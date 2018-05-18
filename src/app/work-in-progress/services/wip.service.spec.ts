import { TestBed, inject } from '@angular/core/testing';

import { WipService } from './wip.service';

describe('WipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WipService]
    });
  });

  it('should be created', inject([WipService], (service: WipService) => {
    expect(service).toBeTruthy();
  }));
});
