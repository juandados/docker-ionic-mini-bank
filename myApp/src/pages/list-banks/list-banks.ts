import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListBanksProvider } from '../../providers/list-banks/list-banks'
/**
 * Generated class for the ListBanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-banks',
  templateUrl: 'list-banks.html',
})
export class ListBanksPage {
  bankList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public listBanksProvider: ListBanksProvider) {
  }

  ionViewDidLoad() {
      this.listBanks();
  }

  listBanks(){
      this.listBanksProvider.list_banks().subscribe(
          (data_resp) => {console.log(data_resp);this.bankList = data_resp},
          (error) => {console.log(error.error)}
      );
  }
}
