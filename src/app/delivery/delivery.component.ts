import { Component, OnInit } from '@angular/core';
import { DeliveryService } from './services/delivery.service';
import { Delivery } from '../models';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  deliveries: Delivery[] = [];

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getDeliveries().subscribe(data => {
      this.deliveries = data;
    }, error => console.log(error));
  }

  commitTransaction() {

  }

}
