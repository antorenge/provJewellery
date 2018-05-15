import { Component, OnInit } from '@angular/core';
import { CloudService } from '../services/cloud.service';
import { ProductDesignService } from '../services/product-design.service';
import { ProductDesign, SignedProductDesign } from '../models';

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

  constructor(private cloudService: CloudService,
    private designService: ProductDesignService, ) { }

  ngOnInit() {
  }

  searchProductDesigns() {
    this.cloudService.searchProductDesign(this.search).subscribe(data => {
      this.designs = data;
      this.designs.forEach(design => {
        this.getDesignBlockchain(design.sku);
      });
    }, error => console.log(error));
  }

  getDesignBlockchain(sku: string) {
    this.designService.getDesign(sku).subscribe(data => {
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
    this.cloudService.validateProductDesign(payload).subscribe(data => {
      this.isLoading = false;
      this.isValidated = 'yes';
    }, error => {
      console.log(error);
      this.isLoading = false;
      this.isValidated = 'no';
    });
  }


}
