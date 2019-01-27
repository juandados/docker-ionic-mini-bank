import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/url.services';

@Injectable()
export class ListBanksProvider {

  constructor(public http: HttpClient) {
  }

  list_banks(){
      let url = URL_SERVICES + '/bancos/add_banco/';
      return this.http.get(url);
  }
}
