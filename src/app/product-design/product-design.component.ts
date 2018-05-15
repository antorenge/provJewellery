import { Component, OnInit, NgZone } from '@angular/core';
import { ProductDesignService } from '../services/product-design.service';
import { Web3Service } from '../services/web3.service';
import { CloudService } from '../services/cloud.service';
import { ProductDesign, SignedProductDesign } from '../models';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.css']
})
export class ProductDesignComponent implements OnInit {

  design: string;
  designs: ProductDesign[] = [];
  signedDesign: SignedProductDesign;
  account: any;
  accounts: any;

  constructor(
    private _ngZone: NgZone,
    private designService: ProductDesignService,
    private web3Service: Web3Service,
    private cloudService: CloudService) { }

  ngOnInit() {
    this.getInitialAccount();
    this.getDesignCloud();
  }

  getInitialAccount() {
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];
    }, err => alert(err));
  }

  getDesignCloud() {
    this.cloudService.getProductDesigns().subscribe(data => {
      this.designs = data;
    }, error => {
      console.log(error);
    });
  }

  saveToBlockchain(design: ProductDesign) {
    this.cloudService.getSignedProductDesign(design.sku).subscribe(data => {
      this.signedDesign = data;
      this.setDesignBlockchain(this.signedDesign);
    }, error => console.log(error));
  }

  setDesignBlockchain(signedDesign: SignedProductDesign) {
    this.designService.setDesign(signedDesign.sku, signedDesign.token, this.account)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }

}
