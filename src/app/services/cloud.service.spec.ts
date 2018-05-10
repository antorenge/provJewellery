import { TestBed, inject } from '@angular/core/testing';

import { CloudService } from './cloud.service';

describe('CloudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudService]
    });
  });

  it('should be created', inject([CloudService], (service: CloudService) => {
    expect(service).toBeTruthy();
  }));
});
