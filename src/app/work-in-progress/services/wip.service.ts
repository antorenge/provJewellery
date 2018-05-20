import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { WorkInProgress, SignedObject } from '../../models';

@Injectable()
export class WipService {

  constructor(public http: HttpClient) { }

  getWips() {
    const url = environment.baseUrl + 'validations/wips/';
    return this.http.get<WorkInProgress[]>(url);
  }

  getSignedWip(id: string) {
    const url = environment.baseUrl + 'validations/wips/' + id + '/signed';
    return this.http.get<SignedObject>(url);
  }

}
