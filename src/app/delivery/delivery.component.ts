import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { DeliveryService } from './services/delivery.service';
import { Delivery, SignedObject } from '../models';
import { ProvJewelleryService } from '../services/prov-jewellery.service';
import { VerifyService } from '../services/verify.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  deliveries: Delivery[] = [];
  account: any;
  accounts: any;

  constructor(private deliveryService: DeliveryService,
    private web3Service: Web3Service, private verifyService: VerifyService,
    private provJewelleryService: ProvJewelleryService) { }

  ngOnInit() {
    // Fetch all deliveries
    this.deliveryService.getDeliveries().subscribe(data => {
      this.deliveries = data;
    }, error => console.log(error));

    // Get accounts
    this.getInitialAccount();

  }

  getInitialAccount() {
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      // Get first user account
      this.account = this.accounts[0];
      // this.web3Service.signRecord(this.account, 'Hello world');
    }, err => alert(err));
  }

  commitTransaction(delivery: Delivery) {
    // Get the signed delivery record
    this.deliveryService.getSignedDelivery(delivery.id).subscribe(
      (data: SignedObject) => {
        // TODO: implement solidity validation
        this.verifyService.signData(this.account, data.signed).then(resp => {
        }).catch(e => console.log(e));
        // Commit each item to the blockchain network
        delivery.items.forEach(item => {
          // Set item design
          this.setItemDelivery(item, data);
        });

      }, error => console.log(error));

  }

  setItemDelivery(item, data) {
    this.provJewelleryService.setItemDelivery(item.serial_no, data.signed, this.account)
      .subscribe(response => {
        console.log(response);
      }, error => console.log(error));
  }

}
