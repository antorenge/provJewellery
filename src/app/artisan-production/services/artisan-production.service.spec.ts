import { TestBed, inject } from '@angular/core/testing';

import { ArtisanProductionService } from './artisan-production.service';

describe('ArtisanProductionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtisanProductionService]
    });
  });

  it('should be created', inject([ArtisanProductionService], (service: ArtisanProductionService) => {
    expect(service).toBeTruthy();
  }));
});
