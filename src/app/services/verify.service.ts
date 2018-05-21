import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import { Web3Service } from './web3.service';
const web3Utils = require('web3-utils');

const validateArtifact = require('../../../build/contracts/Validate.json');
const contract = require('truffle-contract');

@Injectable()
export class VerifyService {

  validate = contract(validateArtifact);

  constructor(private web3Service: Web3Service) {
    this.validate.setProvider(web3Service.web3.currentProvider);
  }

  async signData(account, data) {
    const hash = web3Utils.sha3(data);
    const signature = await this.web3Service.web3.eth.sign(hash, account);
    return { hash, signature };
  }

  computeVRS(signature) {
    const r = signature.slice(0, 66);
    const s = '0x' + signature.slice(66, 130);
    let v = '0x' + signature.slice(130, 132);
    v = web3Utils.toDecimal(v);
    return { v, r, s };
  }

  verify(address, hash, v, r, s): Observable<any> {
    return Observable.create(observer => {
      this.validate
        .deployed()
        .then(instance => {
          return instance.verify.call(address, hash, v, r, s);
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
