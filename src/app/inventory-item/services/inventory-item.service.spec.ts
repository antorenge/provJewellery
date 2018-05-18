import { TestBed, inject } from '@angular/core/testing';

import { InventoryItemService } from './inventory-item.service';

describe('InventoryItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryItemService]
    });
  });

  it('should be created', inject([InventoryItemService], (service: InventoryItemService) => {
    expect(service).toBeTruthy();
  }));
});
