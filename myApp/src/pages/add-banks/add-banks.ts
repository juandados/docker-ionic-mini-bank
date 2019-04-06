import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBankProvider } from '../../providers/add-bank/add-bank';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddBanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-banks',
  templateUrl: 'add-banks.html',
})
export class AddBanksPage {
  homePage = HomePage;
  banco_name: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public addBankProvider: AddBankProvider) {
  }

  ionViewDidLoad() {
  }
    
  addBank(){
      this.addBankProvider.add_bank(this.banco_name).subscribe(
      (data_resp) => {
        alert(JSON.stringify(data_resp))
        this.navCtrl.push(this.homePage);
      },
          (error) => {alert(error.error['name'])}
      );
  }

}
