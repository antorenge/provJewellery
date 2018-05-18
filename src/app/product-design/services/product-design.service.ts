import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProductDesign, SignedProductDesign } from '../../models';

@Injectable()
export class ProductDesignService {

  constructor(public http: HttpClient) { }

  getProductDesign(sku: string) {
    const url = environment.baseUrl + 'products/designs/' + sku;
    return this.http.get<ProductDesign>(url);
  }

  getProductDesigns() {
    const url = environment.baseUrl + 'products/designs';
    return this.http.get<ProductDesign[]>(url);
  }

  postProductDesign(design: ProductDesign) {
    const url = environment.baseUrl + 'products/designs';
    return this.http.post(url, design);
  }

  getSignedProductDesign(sku: string) {
    const url = environment.baseUrl + 'products/signed/' + sku;
    return this.http.get<SignedProductDesign>(url);
  }

  searchProductDesign(search: string) {
    const url = environment.baseUrl + 'products/designs';
    const params = new HttpParams().set('search', search);
    return this.http.get<ProductDesign[]>(url, { params });
  }

  validateProductDesign(signedDesign: SignedProductDesign) {
    const url = environment.baseUrl + 'products/validate';
    return this.http.post(url, signedDesign);
  }

}
