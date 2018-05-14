import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductDesign, SignedProductDesign } from '../models';

@Injectable()
export class CloudService {

  constructor(public http: HttpClient) { }

  postProductDesign(design: ProductDesign) {
    const url = environment.baseUrl + 'products/designs/';
    return this.http.post(url, design);
  }

  getProductDesigns() {
    const url = environment.baseUrl + 'products/designs/';
    return this.http.get<ProductDesign[]>(url);
  }

  getProductDesign(sku: string) {
    const url = environment.baseUrl + 'products/designs/' + sku;
    return this.http.get<ProductDesign>(url);
  }

  getSignedProductDesign(sku: string) {
    const url = environment.baseUrl + 'products/signed/' + sku;
    return this.http.get<SignedProductDesign>(url);
  }

  searchProductDesign(search: string) {
    const url = environment.baseUrl + 'products/designs/';
    const params = new HttpParams().set('search', search);
    return this.http.get<ProductDesign[]>(url, { params });
  }

}
