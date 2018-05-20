import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Delivery, SignedObject } from '../../models';

@Injectable()
export class DeliveryService {

  constructor(public http: HttpClient) { }

  getDeliveries() {
    const url = environment.baseUrl + 'purchases/deliveries/';
    return this.http.get<Delivery[]>(url);
  }

  getSignedDelivery(id: string) {
    const url = environment.baseUrl + 'purchases/deliveries/' + id + '/signed';
    return this.http.get<SignedObject>(url);
  }

}
