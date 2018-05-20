import { Component, OnInit } from '@angular/core';
import { ProductDesign, SignedProductDesign, Jewellery, Delivery } from '../models';
import { ProductDesignService } from '../product-design/services/product-design.service';
import { ProvJewelleryService } from '../services/prov-jewellery.service';

const jwtDecode = require('jwt-decode');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serialNo: any;
  jewellery: Jewellery;
  delivery: Delivery;
  signed = {};
  isLoading = false;
  isValidated: any;

  constructor(private designService: ProductDesignService,
    private provJewelleryService: ProvJewelleryService) { }

  ngOnInit() {
  }

  searchJewelleryItem() {
    // Query smart contract with serial number
    this.provJewelleryService.getItemDelivery(this.serialNo).subscribe(
      (data: string) => {
        const decoded = jwtDecode(data);
        this.delivery = decoded;
      }, error => console.log(error));
  }

  validateDesign(sku: string) {
    this.isLoading = true;
    const signedDesign = this.signed[sku];
    const payload: SignedProductDesign = {
      sku: sku,
      token: signedDesign
    };
    this.designService.validateProductDesign(payload).subscribe(data => {
      this.isLoading = false;
      this.isValidated = 'yes';
    }, error => {
      console.log(error);
      this.isLoading = false;
      this.isValidated = 'no';
    });
  }

}
