import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventoryItem } from '../../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class InventoryItemService {

  constructor(public http: HttpClient) { }

  getInventoryItems() {
    const url = environment.baseUrl + 'inventory/inventory-items/';
    return this.http.get<InventoryItem[]>(url);
  }

}
