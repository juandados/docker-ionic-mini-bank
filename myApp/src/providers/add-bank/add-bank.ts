import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/url.services';
/*
  Generated class for the AddBankProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddBankProvider {

  constructor(public http: HttpClient) {
  }
    
  add_bank(name:string){
      let url = URL_SERVICES + '/bancos/add_banco/';
      let data = {
        'name':name  
      };
      return this.http.post(url, data);
  }

}
