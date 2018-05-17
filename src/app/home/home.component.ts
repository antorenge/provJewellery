import { Component, OnInit } from '@angular/core';
import { ProductDesign, SignedProductDesign } from '../models';
import { ProductDesignService } from '../product-design/services/product-design.service';
import { ProvJewelleryService } from '../services/prov-jewellery.service';

const jwtDecode = require('jwt-decode');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: any;
  designs: ProductDesign[] = [];
  signedDesigns = {};
  isLoading = false;
  isValidated: any;

  constructor(private designService: ProductDesignService,
    private provJewelleryService: ProvJewelleryService) { }

  ngOnInit() {
  }

  searchProductDesigns() {
    this.designService.searchProductDesign(this.search).subscribe(data => {
      this.designs = data;
      this.designs.forEach(design => {
        this.getDesignBlockchain(design.sku);
      });
    }, error => console.log(error));
  }

  getDesignBlockchain(sku: string) {
    this.provJewelleryService.getDesign(sku).subscribe(data => {
      const decoded = jwtDecode(data);
      console.log(decoded);
      this.signedDesigns[sku] = data;
    }, error => {
      console.log(error);
    });
  }

  validateDesign(sku: string) {
    this.isLoading = true;
    const signedDesign = this.signedDesigns[sku];
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
