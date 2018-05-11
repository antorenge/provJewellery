import { Component, OnInit, NgZone } from '@angular/core';
import { ProductDesignService } from '../services/product-design.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.css']
})
export class ProductDesignComponent implements OnInit {

  design: string;
  account: any;
  accounts: any;

  constructor(
    private _ngZone: NgZone,
    private designService: ProductDesignService,
    private web3Service: Web3Service) { }

  ngOnInit() {
    // Get the initial account balance so it can be displayed.
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];
      console.log(this.accounts);
      // This is run from window:load and ZoneJS is not aware of it we
      // need to use _ngZone.run() so that the UI updates on promise resolution
      // this._ngZone.run(() =>
      //   this.setDesign()
      // );
    }, err => alert(err));
  }

  setDesign() {
    // tslint:disable-next-line:max-line-length
    this.designService.setDesign('ABC123XYZ', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJza3UiOiJBQkMxMjMifQ.KFbGaIg01qjxjCqXL_110LjRxVt2v6FC7jWG8YmUI1g', this.account)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  getDesign() {
    this.designService.getDesign('ABC123XYZ').subscribe(data => {
      this.design = data;
    }, error => {
      console.log(error);
    });
  }

}
