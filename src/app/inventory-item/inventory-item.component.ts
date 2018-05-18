import { Component, OnInit } from '@angular/core';
import { InventoryItemService } from './services/inventory-item.service';
import { InventoryItem } from '../models';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {

  items: InventoryItem[] = [];

  constructor(private inventoryService: InventoryItemService) { }

  ngOnInit() {
    this.inventoryService.getInventoryItems().subscribe(data => {
      this.items = data;
    }, error => console.log(error));
  }

  commitTransaction() {

  }

}
