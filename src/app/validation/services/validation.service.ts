import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Validation, SignedObject } from '../../models';

@Injectable()
export class ValidationService {

  constructor(public http: HttpClient) { }

  getValidations() {
    const url = environment.baseUrl + 'validations/qa-validations/';
    return this.http.get<Validation[]>(url);
  }

  getSignedValidation(id: string) {
    const url = environment.baseUrl + 'validations/qa-validations/' + id + '/signed';
    return this.http.get<SignedObject>(url);
  }

}
