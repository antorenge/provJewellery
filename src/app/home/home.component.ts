import { Component, OnInit } from '@angular/core';
import { CloudService } from '../services/cloud.service';
import { ProductDesignService } from '../services/product-design.service';
import { ProductDesign } from '../models';

const jwtDecode = require('jwt-decode');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: any;
  designs: ProductDesign[] = [];
  signedDesigns: any;

  constructor(private cloudService: CloudService, private designService: ProductDesignService, ) { }

  ngOnInit() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJza3UiOiJBQkMxMjMifQ.KFbGaIg01qjxjCqXL_110LjRxVt2v6FC7jWG8YmUI1g';

    const decoded = jwtDecode(token);
    console.log(decoded);

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
      console.log(data);
      const decoded = jwtDecode(data);
      console.log(decoded);
    }, error => {
      console.log(error);
    });
  }


}
