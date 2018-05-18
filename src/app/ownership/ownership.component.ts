import { Component, OnInit } from '@angular/core';
import { OwnershipService } from './services/ownership.service';
import { OwnershipTransfer } from '../models';

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.css']
})
export class OwnershipComponent implements OnInit {

  transfers: OwnershipTransfer[] = [];

  constructor(private ownershipService: OwnershipService) { }

  ngOnInit() {
    this.ownershipService.getOwnershipTransfers().subscribe(data => {
      this.transfers = data;
    }, error => console.log(error));
  }

  commitTransaction() {

  }

}
