import { Component, OnInit } from '@angular/core';
import { WipService } from './services/wip.service';
import { WorkInProgress, SignedObject } from '../models';
import { Web3Service } from '../services/web3.service';
import { ProvJewelleryService } from '../services/prov-jewellery.service';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent implements OnInit {

  wips: WorkInProgress[] = [];
  account: any;
  accounts: any;

  constructor(private wipService: WipService,
    private web3Service: Web3Service,
    private provJewelleryService: ProvJewelleryService) { }

  ngOnInit() {
    this.wipService.getWips().subscribe(data => {
      this.wips = data;
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

  commitTransaction(wip: WorkInProgress) {
    // Get the signed delivery record
    this.wipService.getSignedWip(wip.id).subscribe(
      (data: SignedObject) => {
        console.log(data);
        // Commit each delivered item (processed) to the blockchain network
        wip.delivered_items.forEach(item => {
          this.setItemWIP(item, data);
        });
      }, error => console.log(error));

  }

  setItemWIP(item, data) {
    this.provJewelleryService.setItemValueAddition(item, data.signed, this.account)
      .subscribe(response => {
        console.log(response);
      }, error => console.log(error));
  }

}
