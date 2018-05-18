import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { OwnershipTransfer } from '../../models';

@Injectable()
export class OwnershipService {

  constructor(public http: HttpClient) { }

  getOwnershipTransfers() {
    const url = environment.baseUrl + 'payments/transfers/';
    return this.http.get<OwnershipTransfer[]>(url);
  }

}
