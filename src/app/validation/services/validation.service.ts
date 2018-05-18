import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Validation } from '../../models';

@Injectable()
export class ValidationService {

  constructor(public http: HttpClient) { }

  getValidations() {
    const url = environment.baseUrl + 'validations/validations/';
    return this.http.get<Validation[]>(url);
  }

}
