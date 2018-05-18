import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { ProductDesign, SignedProductDesign } from '../models';
import { ProvJewelleryService } from '../services/prov-jewellery.service';
import { ProductDesignService } from './services/product-design.service';

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
    private designService: ProductDesignService,
    private web3Service: Web3Service,
    private provJewelleryService: ProvJewelleryService) { }

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
    this.designService.getProductDesigns().subscribe(data => {
      this.designs = data;
    }, error => {
      console.log(error);
    });
  }

  commitTransaction(design: ProductDesign) {
    this.designService.getSignedProductDesign(design.sku).subscribe(data => {
      this.signedDesign = data;
      this.setDesignBlockchain(this.signedDesign);
    }, error => console.log(error));
  }

  setDesignBlockchain(signedDesign: SignedProductDesign) {
    this.provJewelleryService.setDesign(signedDesign.sku, signedDesign.token, this.account)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }

}
