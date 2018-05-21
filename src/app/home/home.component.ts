import { Component, OnInit } from '@angular/core';
import {
  ProductDesign, SignedProductDesign, Jewellery, Delivery, Validation,
  WorkInProgress, OwnershipTransfer, SignedObject
} from '../models';
import { ProductDesignService } from '../product-design/services/product-design.service';
import { ProvJewelleryService } from '../services/prov-jewellery.service';
import { DeliveryService } from '../delivery/services/delivery.service';

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
  artisanValidation: Validation;
  wipValidation: Validation;
  wip: WorkInProgress;
  ownership: OwnershipTransfer;
  signedDelivery = {};
  signedValidation = {};
  signedWIP = {};
  signedOwnership = {};
  isLoading = {};
  isValidated = {};

  constructor(private provJewelleryService: ProvJewelleryService,
    private deliveryService: DeliveryService) { }

  ngOnInit() {
  }

  // Query smart contract with serial number
  searchJewelleryItem() {
    // Get delivery details, incl. order, orderProduct, design, delivery info
    this.provJewelleryService.getItemDelivery(this.serialNo).subscribe(
      (data: string) => {
        const decoded = jwtDecode(data);
        this.delivery = decoded;
        this.signedDelivery[this.delivery.id] = data;
      }, error => console.log(error));

    // Get validation details
    this.provJewelleryService.getItemProdValidation(this.serialNo).subscribe(
      (data: string) => {
        const decoded = jwtDecode(data);
        this.artisanValidation = decoded;
        this.signedValidation[this.artisanValidation.id] = data;
      }, error => console.log(error));

    this.provJewelleryService.getItemWipValidation(this.serialNo).subscribe(
      (data: string) => {
        const decoded = jwtDecode(data);
        this.wipValidation = decoded;
        this.signedValidation[this.wipValidation.id] = data;
      }, error => console.log(error));

    this.provJewelleryService.getItemValueAddition(this.serialNo).subscribe(
      (data: string) => {
        const decoded = jwtDecode(data);
        this.wip = decoded;
        this.signedWIP[this.wip.id] = data;
      }, error => console.log(error));

    this.provJewelleryService.getItemOwnership(this.serialNo).subscribe(
      (data: string) => {
        const decoded = jwtDecode(data);
        this.ownership = decoded;
        this.signedOwnership[this.ownership.id] = data;
      }, error => console.log(error));
  }

  validateDelivery(id: string) {
    const key = id + 'dy';
    this.isLoading[key] = true;
    const signedDelivery = this.signedDelivery[id];
    const payload: SignedObject = {
      id: id,
      signed: signedDelivery
    };
    this.deliveryService.validateSigned(payload).subscribe(data => {
      this.isLoading[key] = false;
      this.isValidated[key] = 'yes';
    }, error => {
      console.log(error);
      this.isLoading[key] = false;
      this.isValidated[key] = 'no';
    });

    // const { v, r, s } = this.verifyService.computeVRS(d.signature);
    //       this.verifyService.verify(this.account, d.hash, v, r, s).subscribe(
    //         res => {
    //           console.log(res);
    //         }, error => console.log(error));
  }

  validateValidation(id: string) {
    const key = id + 'v';
    this.isLoading[key] = true;
    const signedValidation = this.signedValidation[id];
    const payload: SignedObject = {
      id: id,
      signed: signedValidation
    };
    this.deliveryService.validateSigned(payload).subscribe(data => {
      this.isLoading[key] = false;
      this.isValidated[key] = 'yes';
    }, error => {
      console.log(error);
      this.isLoading[key] = false;
      this.isValidated[key] = 'no';
    });
  }

}
