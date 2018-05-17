import { TestBed, inject } from '@angular/core/testing';

import { ProductDesignService } from './product-design.service';

describe('ProductDesignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDesignService]
    });
  });

  it('should be created', inject([ProductDesignService], (service: ProductDesignService) => {
    expect(service).toBeTruthy();
  }));
});
