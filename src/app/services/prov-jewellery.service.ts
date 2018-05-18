import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Web3Service } from './web3.service';

const productDesignArtifacts = require('../../../build/contracts/ProductDesign.json');
const contract = require('truffle-contract');

@Injectable()
export class ProvJewelleryService {

  ProductDesign = contract(productDesignArtifacts);

  constructor(private web3Service: Web3Service) {
    this.ProductDesign.setProvider(web3Service.web3.currentProvider);
  }

  getDesign(sku: string): Observable<any> {
    let design;

    return Observable.create(observer => {
      this.ProductDesign
        .deployed()
        .then(instance => {
          design = instance;
          // we use call here so the call doesn't try and write, making it free
          return design.getDesign.call(sku);
        })
        .then(value => {
          observer.next(value);
          observer.complete();
        })
        .catch(e => {
          console.log(e);
          observer.error(e);
        });
    });
  }

  setDesign(sku, signedDesign, account): Observable<any> {
    let design;

    return Observable.create(observer => {
      this.ProductDesign
        .deployed()
        .then(instance => {
          design = instance;
          return design.createDesign(sku, signedDesign, { from: account });
        })
        .then(() => {
          observer.next();
          observer.next();
        })
        .catch(e => {
          console.log(e);
          observer.error(e);
        });
    });
  }

  setProduction(): Observable<any> {
    let design;

    return Observable.create(observer => {
      this.ProductDesign
        .deployed()
        .then(instance => {
          design = instance;
          // return design.createDesign(sku, signedDesign, { from: account });
        })
        .then(() => {
          observer.next();
          observer.next();
        })
        .catch(e => {
          console.log(e);
          observer.error(e);
        });
    });
  }

}
