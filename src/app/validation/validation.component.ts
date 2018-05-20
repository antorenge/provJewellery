import { Component, OnInit } from '@angular/core';
import { ValidationService } from './services/validation.service';
import { Validation, SignedObject } from '../models';
import { ProvJewelleryService } from '../services/prov-jewellery.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  validations: Validation[] = [];
  account: any;
  accounts: any;

  constructor(private validationService: ValidationService,
    private web3Service: Web3Service,
    private provJewelleryService: ProvJewelleryService) { }

  ngOnInit() {
    this.validationService.getValidations().subscribe(data => {
      this.validations = data;
    }, error => console.log(error));

    // Get account
    this.getInitialAccount();

  }

  getInitialAccount() {
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      // Get first user account
      this.account = this.accounts[0];
    }, err => alert(err));
  }

  commitTransaction(validation: Validation) {
    // Get the signed validation record
    this.validationService.getSignedValidation(validation.id).subscribe(
      (data: SignedObject) => {
        console.log(data);
        // Commit item to the blockchain network
        this.setItemValidation(validation.item, data);
      }, error => console.log(error));

  }

  setItemValidation(item, data) {
    this.provJewelleryService.setItemValidations(item.serial_no, data.signed, this.account)
      .subscribe(response => {
        console.log(response);
      }, error => console.log(error));
  }
}
