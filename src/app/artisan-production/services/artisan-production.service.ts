import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ArtisanProduction } from '../../models';

@Injectable()
export class ArtisanProductionService {

  constructor(public http: HttpClient) { }

  getProductions() {
    const url = environment.baseUrl + 'purchases/productions/';
    return this.http.get<ArtisanProduction[]>(url);
  }

}
