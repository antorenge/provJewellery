import { Component, OnInit } from '@angular/core';
import { OwnershipService } from './services/ownership.service';
import { OwnershipTransfer, SignedObject } from '../models';
import { Web3Service } from '../services/web3.service';
import { ProvJewelleryService } from '../services/prov-jewellery.service';


@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.css']
})
export class OwnershipComponent implements OnInit {

  transfers: OwnershipTransfer[] = [];
  account: any;
  accounts: any;

  constructor(private ownershipService: OwnershipService,
    private web3Service: Web3Service,
    private provJewelleryService: ProvJewelleryService) { }

  ngOnInit() {
    this.ownershipService.getOwnershipTransfers().subscribe(data => {
      this.transfers = data;
    }, error => console.log(error));
    // Get accounts
    this.getInitialAccount();
  }

  getInitialAccount() {
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      // Get first user account
      this.account = this.accounts[0];
    }, err => alert(err));
  }

  commitTransaction(transfer: OwnershipTransfer) {
    // Get the signed delivery record
    this.ownershipService.getSignedTransfer(transfer.id).subscribe(
      (data: SignedObject) => {
        console.log(data);
        // Commit each delivered item (processed) to the blockchain network
        transfer.items.forEach(item => {
          this.setItemOwnership(item, data);
        });
      }, error => console.log(error));

  }

  setItemOwnership(item, data) {
    this.provJewelleryService.setItemOwnership(item.serial_no, data.signed, this.account)
      .subscribe(response => {
        console.log(response);
      }, error => console.log(error));
  }

}
