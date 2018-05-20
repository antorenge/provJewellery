import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import { Web3Service } from './web3.service';

const provJewelleryArtifacts = require('../../../build/contracts/ProvJewellery.json');
const contract = require('truffle-contract');

@Injectable()
export class ProvJewelleryService {

  provJewellery = contract(provJewelleryArtifacts);

  constructor(private web3Service: Web3Service) {
    this.provJewellery.setProvider(web3Service.web3.currentProvider);
  }

  setProductDesign(sku, signedDesign, account): Observable<any> {
    let design;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          design = instance;
          return design.setProductDesign(sku, signedDesign, { from: account });
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

  getProductDesign(sku): Observable<any> {
    let design;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          design = instance;
          // we use call here so the call doesn't try and write, making it free
          return design.getProductDesign.call(sku);
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

  setItemDelivery(serialNo, signedDelivery, account): Observable<any> {
    let delivery;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          delivery = instance;
          return delivery.setItemDelivery(serialNo, signedDelivery, { from: account });
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

  getItemDelivery(serialNo): Observable<any> {
    let delivery;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          delivery = instance;
          // we use call here so the call doesn't try and write, making it free
          return delivery.getItemDelivery.call(serialNo);
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

  setItemValidations(serialNo, signedValidation, account): Observable<any> {
    let validations;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          validations = instance;
          return validations.setItemValidations(serialNo, signedValidation, { from: account });
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

  getItemProdValidation(serialNo): Observable<any> {
    let validation;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          validation = instance;
          // we use call here so the call doesn't try and write, making it free
          return validation.getItemProdValidation.call(serialNo);
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

  getItemWipValidation(serialNo): Observable<any> {
    let validation;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          validation = instance;
          // we use call here so the call doesn't try and write, making it free
          return validation.getItemWipValidation.call(serialNo);
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

  setItemValueAddition(serialNo, signedValueAddition, account): Observable<any> {
    let valueAddition;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          valueAddition = instance;
          return valueAddition.setItemValueAddition(serialNo, signedValueAddition, { from: account });
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

  getItemValueAddition(serialNo): Observable<any> {
    let valueAddition;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          valueAddition = instance;
          // we use call here so the call doesn't try and write, making it free
          return valueAddition.getItemValueAddition.call(serialNo);
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

  setItemOwnership(serialNo, signedOwnership, account): Observable<any> {
    let ownership;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          ownership = instance;
          return ownership.setItemOwnership(serialNo, signedOwnership, { from: account });
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

  getItemOwnership(serialNo): Observable<any> {
    let ownership;

    return Observable.create(observer => {
      this.provJewellery
        .deployed()
        .then(instance => {
          ownership = instance;
          // we use call here so the call doesn't try and write, making it free
          return ownership.getItemOwnership.call(serialNo);
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

}
